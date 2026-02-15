'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
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
    'relative inline-flex items-center justify-center gap-2.5 font-semibold rounded-xl',
    'transition-all duration-300 ease-out',
    'focus:outline-none focus-visible:ring-4',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none',
    'active:scale-[0.98]',
    'overflow-hidden group'
  );

  const variantStyles = {
    primary: cn(
      'text-white bg-gradient-to-r from-deep-blue to-ocean',
      'hover:shadow-lg hover:shadow-ocean/25 hover:-translate-y-0.5',
      'focus-visible:ring-cyan/20',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan before:to-ocean',
      'before:opacity-0 before:transition-opacity before:duration-300',
      'hover:before:opacity-100'
    ),
    secondary: cn(
      'text-deep-blue bg-cyan-light border-2 border-cyan/30',
      'hover:bg-cyan hover:text-white hover:border-cyan hover:-translate-y-0.5',
      'focus-visible:ring-cyan/20',
      'hover:shadow-md hover:shadow-cyan/15'
    ),
    outline: cn(
      'text-deep-blue bg-transparent border-2 border-border',
      'hover:border-cyan/40 hover:bg-cyan-light hover:-translate-y-0.5',
      'focus-visible:ring-cyan/20',
      'hover:shadow-sm'
    ),
    ghost: cn(
      'text-deep-blue bg-transparent',
      'hover:bg-ghost hover:-translate-y-0.5',
      'focus-visible:ring-cyan/20'
    ),
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-[13px] rounded-lg',
    md: 'px-6 py-3.5 text-[15px]',
    lg: 'px-8 py-4 text-[16px]',
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        animate={{
          translateX: ['-100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2.5">
        {isLoading && (
          <Loader2
            size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16}
            className="animate-spin"
          />
        )}
        {children}
      </span>
    </button>
  );
}
