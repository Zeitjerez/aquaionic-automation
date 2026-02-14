import Link from 'next/link';
import Icon from '../ui/Icon';

interface AreaCardProps {
  city: string;
  county: string;
  href: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AreaCard({
  city,
  county,
  href,
  className = '',
  style,
}: AreaCardProps) {
  return (
    <Link
      href={href}
      className={`group block bg-white rounded-lg border border-border p-6 hover:border-cyan hover:shadow-md transition-all duration-smooth ${className}`}
      style={style}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-light to-blue-50 text-ocean flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-smooth">
        <Icon name="map-pin" size={24} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-jakarta font-bold text-deep-blue mb-1">
        {city}
      </h3>
      <p className="text-sm text-text-mid">
        {county}
      </p>
    </Link>
  );
}
