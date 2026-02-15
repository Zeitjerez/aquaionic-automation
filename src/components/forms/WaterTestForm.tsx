'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
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
    <form onSubmit={handleSubmit} className="space-y-5">
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

      <div>
        <label className="block text-sm font-medium text-text-mid mb-1.5">
          {t('waterType')}
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          name="waterType"
          required
          disabled={isSubmitting}
          className={cn(
            'w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white',
            'text-[15px] text-deep-blue font-normal appearance-none cursor-pointer',
            'transition-colors duration-200',
            'focus:outline-none focus:border-cyan',
            'disabled:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60'
          )}
        >
          <option value="">Select water type...</option>
          <option value="well">{t('waterTypes.well')}</option>
          <option value="city">{t('waterTypes.city')}</option>
          <option value="other">{t('waterTypes.other')}</option>
        </select>
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

      {status === 'success' && (
        <div className="flex items-center gap-2.5 p-4 rounded-xl bg-green-50 border border-green-200">
          <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
          <p className="text-[14px] text-green-600 font-medium">{t('successMessage')}</p>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200">
          <XCircle size={20} className="text-red-500 flex-shrink-0" />
          <p className="text-[14px] text-red-500 font-medium">{t('errorMessage')}</p>
        </div>
      )}
    </form>
  );
}
