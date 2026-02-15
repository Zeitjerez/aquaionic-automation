'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Icon from '../ui/Icon';
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  image?: string;
  index?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  image,
  index = 0,
  className = '',
  style,
}: ServiceCardProps) {
  const t = useTranslations('common');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={className}
      style={style}
    >
      <Link href={href} className="group block h-full">
        <div className="relative h-full bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-cyan/8 hover:-translate-y-1 hover:border-cyan/30">
          {/* Image */}
          {image && (
            <div className="relative h-48 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors">
              <Icon name={icon} size={24} className="text-cyan" />
            </div>

            <h3 className="text-xl font-jakarta font-bold text-deep-blue mb-2 group-hover:text-ocean transition-colors">
              {title}
            </h3>

            <p className="text-text-mid text-sm leading-relaxed mb-4">
              {description}
            </p>

            {/* Arrow */}
            <div className="flex items-center gap-2 text-cyan font-semibold text-sm">
              <span>{t('learnMore')}</span>
              <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan to-accent-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </Link>
    </motion.div>
  );
}
