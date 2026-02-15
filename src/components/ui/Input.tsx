'use client';

import { InputHTMLAttributes, forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!props.value || !!props.defaultValue);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      onBlur?.(e);
    };

    return (
      <div className="w-full group">
        <div className="relative">
          {label && (
            <motion.label
              className={cn(
                'absolute left-4 pointer-events-none transition-all duration-300 origin-left',
                'text-text-mid font-medium',
                isFocused || hasValue
                  ? 'top-0 -translate-y-1/2 text-[11px] px-2 bg-white text-cyan font-semibold'
                  : 'top-1/2 -translate-y-1/2 text-[15px]'
              )}
              animate={{
                scale: isFocused || hasValue ? 0.92 : 1,
              }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {label}
              {props.required && (
                <span
                  className={cn(
                    'ml-1 transition-colors duration-200',
                    isFocused ? 'text-cyan' : 'text-red-500'
                  )}
                >
                  *
                </span>
              )}
            </motion.label>
          )}

          <input
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={cn(
              'w-full px-4 py-3.5 rounded-xl border-2 bg-white/80 backdrop-blur-sm',
              'text-[15px] text-deep-blue font-medium placeholder:text-text-light/60',
              'transition-all duration-300 ease-out',
              'focus:outline-none focus:bg-white',
              error
                ? 'border-red-500/40 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
                : 'border-border focus:border-cyan focus:ring-4 focus:ring-cyan/8',
              'disabled:bg-ghost disabled:cursor-not-allowed disabled:opacity-60',
              'hover:border-cyan/40 hover:shadow-sm',
              className
            )}
            {...props}
          />

          {/* Focus ring glow */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none -z-10"
            initial={false}
            animate={{
              boxShadow: isFocused
                ? '0 0 0 4px rgba(0,188,212,0.08), 0 8px 16px -4px rgba(0,188,212,0.1)'
                : '0 0 0 0px rgba(0,188,212,0)',
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>

        {/* Error message with animation */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-2 text-[13px] text-red-500 font-medium flex items-center gap-1.5"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
