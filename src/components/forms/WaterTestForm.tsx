'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { cn } from '@/lib/utils';

export default function WaterTestForm() {
  const t = useTranslations('waterTest.form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      waterType: formData.get('waterType'),
    };

    try {
      const response = await fetch('/api/water-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
        // Auto-hide success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        name="name"
        label={t('name')}
        placeholder="John Doe"
        required
        disabled={isSubmitting}
      />

      <Input
        name="email"
        type="email"
        label={t('email')}
        placeholder="john@example.com"
        required
        disabled={isSubmitting}
      />

      <Input
        name="phone"
        type="tel"
        label={t('phone')}
        placeholder="(305) 123-4567"
        required
        disabled={isSubmitting}
      />

      <Input
        name="address"
        label={t('address')}
        placeholder="123 Main St, Miami, FL"
        required
        disabled={isSubmitting}
      />

      {/* Custom Select with same styling */}
      <div className="relative group">
        <label
          className={cn(
            'absolute left-4 top-0 -translate-y-1/2 pointer-events-none',
            'text-[11px] px-2 bg-white text-text-mid font-semibold',
            'transition-colors duration-200 group-focus-within:text-cyan'
          )}
        >
          {t('waterType')}
          <span className="ml-1 text-red-500 group-focus-within:text-cyan">*</span>
        </label>

        <motion.select
          name="waterType"
          required
          disabled={isSubmitting}
          className={cn(
            'w-full px-4 py-3.5 rounded-xl border-2 bg-white/80 backdrop-blur-sm',
            'text-[15px] text-deep-blue font-medium appearance-none',
            'transition-all duration-300 ease-out cursor-pointer',
            'focus:outline-none focus:bg-white',
            'border-border focus:border-cyan focus:ring-4 focus:ring-cyan/8',
            'disabled:bg-ghost disabled:cursor-not-allowed disabled:opacity-60',
            'hover:border-cyan/40 hover:shadow-sm'
          )}
          whileFocus={{ scale: 1.005 }}
        >
          <option value="" disabled selected>
            Select water type...
          </option>
          <option value="well">{t('waterTypes.well')}</option>
          <option value="city">{t('waterTypes.city')}</option>
          <option value="other">{t('waterTypes.other')}</option>
        </motion.select>

        {/* Custom dropdown arrow */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-mid">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        {/* Focus ring */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none -z-10"
          initial={false}
          whileFocus={{
            boxShadow: '0 0 0 4px rgba(0,188,212,0.08), 0 8px 16px -4px rgba(0,188,212,0.1)',
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
        isLoading={isSubmitting}
      >
        {isSubmitting ? t('submitting') : t('submit')}
      </Button>

      {/* Status messages with animations */}
      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center gap-2.5 p-4 rounded-xl bg-accent-green/10 border border-accent-green/20"
          >
            <CheckCircle2 size={20} className="text-accent-green flex-shrink-0" />
            <p className="text-[14px] text-accent-green font-semibold">
              {t('successMessage')}
            </p>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200"
          >
            <XCircle size={20} className="text-red-500 flex-shrink-0" />
            <p className="text-[14px] text-red-500 font-semibold">
              {t('errorMessage')}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
