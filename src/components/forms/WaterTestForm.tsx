'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Input from '../ui/Input';
import Button from '../ui/Button';

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
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h3 className="text-2xl font-jakarta font-bold text-deep-blue mb-6">
        {t('submit')}
      </h3>

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
        <label className="block text-sm font-semibold text-text mb-2">
          {t('waterType')}
          <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          name="waterType"
          required
          disabled={isSubmitting}
          className="input-field"
        >
          <option value="">{t('waterType')}</option>
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
      >
        {isSubmitting ? t('submitting') : t('submit')}
      </Button>

      {status === 'success' && (
        <p className="text-sm text-accent-green font-semibold text-center">
          {t('successMessage')}
        </p>
      )}

      {status === 'error' && (
        <p className="text-sm text-red-500 font-semibold text-center">
          {t('errorMessage')}
        </p>
      )}
    </form>
  );
}
