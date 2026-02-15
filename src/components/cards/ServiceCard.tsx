'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  image?: string;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  image,
  index = 0,
}: ServiceCardProps) {
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Droplets;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link href={href} className="group block h-full">
        <div className="relative h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 transition-colors duration-200">
          {/* Image */}
          {image && (
            <div className="relative h-52 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}

          <div className="p-7">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-5 group-hover:bg-cyan/15 transition-colors duration-200">
              <IconComponent size={22} className="text-cyan" strokeWidth={2.5} />
            </div>

            {/* Title */}
            <h3 className="text-[19px] font-jakarta font-bold text-deep-blue mb-3 tracking-tight">
              {title}
            </h3>

            {/* Description */}
            <p className="text-[14.5px] text-gray-600 leading-relaxed mb-5">
              {description}
            </p>

            {/* Arrow link */}
            <div className="flex items-center gap-2 text-cyan text-[14px] font-semibold">
              <span>Learn more</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
