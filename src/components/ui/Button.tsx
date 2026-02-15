'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  isLoading,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2.5 font-semibold rounded-xl',
    'transition-colors duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  );

  const variantStyles = {
    primary: 'bg-cyan text-white hover:bg-cyan-soft',
    secondary: 'bg-cyan-light border border-cyan/30 text-deep-blue hover:bg-cyan hover:text-white hover:border-cyan',
    outline: 'bg-transparent border border-gray-200 text-deep-blue hover:border-cyan hover:text-cyan',
    ghost: 'bg-transparent text-deep-blue hover:bg-gray-50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-[13px]',
    md: 'px-7 py-3.5 text-[15px]',
    lg: 'px-8 py-4 text-[16px]',
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} className="animate-spin" />}
      {children}
    </button>
  );
}
