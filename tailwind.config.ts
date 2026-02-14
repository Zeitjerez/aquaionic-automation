import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#0a2540',
        'ocean': '#1a5276',
        'ocean-mid': '#1565a0',
        'cyan': '#00bcd4',
        'cyan-soft': '#26c6da',
        'cyan-light': '#e0f7fa',
        'cyan-glow': 'rgba(0,188,212,0.15)',
        'pure-white': '#ffffff',
        'ghost': '#f7f9fc',
        'ghost-warm': '#fafbfe',
        'text': '#1e2a3a',
        'text-mid': '#4a5568',
        'text-light': '#8494a7',
        'accent-green': '#00c9a7',
        'accent-green-light': 'rgba(0,201,167,0.08)',
        'border': 'rgba(10,37,64,0.06)',
        'whatsapp': '#25D366',
        'whatsapp-hover': '#20BD5A',
      },
      boxShadow: {
        'xs': '0 1px 3px rgba(10,37,64,0.04)',
        'sm': '0 2px 8px rgba(10,37,64,0.06)',
        'md': '0 8px 30px rgba(10,37,64,0.08)',
        'lg': '0 20px 60px rgba(10,37,64,0.10)',
        'xl': '0 30px 80px rgba(10,37,64,0.14)',
        'cyan': '0 8px 30px rgba(0,188,212,0.25)',
        'whatsapp': '0 8px 28px rgba(37,211,102,0.3)',
        'whatsapp-pulse': '0 12px 40px rgba(37,211,102,0.6), 0 0 0 0 rgba(37,211,102,0.4)',
      },
      borderRadius: {
        'sm': '10px',
        'DEFAULT': '16px',
        'lg': '24px',
      },
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'dm': ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'drift': 'ambientDrift 25s ease-in-out infinite alternate',
        'drift-reverse': 'ambientDrift 20s ease-in-out infinite alternate-reverse',
        'drift-slow': 'ambientDrift 30s ease-in-out infinite alternate',
        'whatsapp': 'waPulse 2s ease-in-out infinite',
        'whatsapp-bounce': 'waBounce 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ambientDrift: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(40px,-30px) scale(1.08)' },
          '100%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        waPulse: {
          '0%, 100%': {
            boxShadow: '0 8px 28px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.4)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 12px 40px rgba(37,211,102,0.6), 0 0 0 8px rgba(37,211,102,0.15)',
            transform: 'scale(1.05)',
          },
        },
        waBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25,0.46,0.45,0.94)',
      },
      transitionDuration: {
        'smooth': '350ms',
      },
    },
  },
  plugins: [],
}

export default config
