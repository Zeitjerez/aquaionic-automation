import { ReactNode } from 'react';
import Icon from './Icon';

interface FloatingBadgeProps {
  variant: 'nsf' | 'fda';
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay?: number;
  children?: ReactNode;
}

export default function FloatingBadge({
  variant,
  position,
  delay = 0,
  children,
}: FloatingBadgeProps) {
  const variantConfig = {
    nsf: {
      icon: 'check',
      iconBg: 'bg-gradient-to-br from-green-100 to-green-200',
      iconColor: 'text-green-700',
      text: children || 'NSF Certified',
      defaultPosition: {
        top: '16px',
        right: '-16px',
      },
    },
    fda: {
      icon: 'shield',
      iconBg: 'bg-gradient-to-br from-cyan-light to-blue-100',
      iconColor: 'text-ocean',
      text: children || 'FDA Approved',
      defaultPosition: {
        bottom: '60px',
        left: '-16px',
      },
    },
  };

  const config = variantConfig[variant];
  const finalPosition = position || config.defaultPosition;

  return (
    <div
      className="absolute z-10 bg-white px-4 py-3 rounded-xl shadow-md flex items-center gap-3 animate-float"
      style={{
        ...finalPosition,
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className={`w-9 h-9 rounded-lg ${config.iconBg} ${config.iconColor} flex items-center justify-center flex-shrink-0`}
      >
        <Icon name={config.icon} size={20} />
      </div>
      <div className="text-sm font-bold text-deep-blue leading-tight">
        {config.text}
      </div>
    </div>
  );
}
