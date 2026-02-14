import Link from 'next/link';
import Icon from '../ui/Icon';
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  className = '',
  style,
}: ServiceCardProps) {
  const t = useTranslations('common');

  return (
    <div
      className={`group relative bg-white rounded-lg border-2 border-border p-8 hover:shadow-lg transition-all duration-smooth overflow-hidden ${className}`}
      style={style}
    >
      {/* Animated top border on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan to-ocean transform scale-x-0 group-hover:scale-x-100 transition-transform duration-smooth origin-left" />

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-light to-blue-50 text-ocean flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-smooth">
        <Icon name={icon} size={28} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-3">
        {title}
      </h3>
      <p className="text-text-mid leading-relaxed mb-6">
        {description}
      </p>

      {/* Link */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-ocean font-semibold text-sm group-hover:gap-3 transition-all"
      >
        {t('learnMore')}
        <Icon name="arrow-right" size={18} />
      </Link>
    </div>
  );
}
