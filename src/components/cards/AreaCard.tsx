import Link from 'next/link';
import { MapPin } from 'lucide-react';

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
      className={`group block bg-white rounded-2xl border border-gray-100 p-8 hover:border-gray-200 transition-colors duration-200 ${className}`}
      style={style}
    >
      <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan/15 transition-colors duration-200">
        <MapPin size={20} className="text-cyan" strokeWidth={2.5} />
      </div>

      <h3 className="text-lg font-jakarta font-bold text-deep-blue mb-1">
        {city}
      </h3>
      <p className="text-[13px] text-gray-500 font-medium">
        {county}
      </p>
    </Link>
  );
}
