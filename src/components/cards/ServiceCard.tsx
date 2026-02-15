'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  image?: string;
  index?: number;
}

export default function ServiceCard({ title, description, icon, href, image, index = 0 }: ServiceCardProps) {
  // Dynamically get Lucide icon
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Droplets;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={href} className="group block h-full">
        <div className="relative h-full bg-white rounded-2xl border border-ghost overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-cyan/[0.06] hover:-translate-y-1 hover:border-cyan/20">
          {/* Image */}
          {image && (
            <div className="relative h-48 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/30 to-transparent" />
            </div>
          )}

          <div className="p-6 md:p-7">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-cyan-light flex items-center justify-center mb-5 group-hover:bg-cyan/15 transition-colors duration-300">
              <IconComponent size={22} className="text-cyan" />
            </div>

            <h3 className="text-lg font-jakarta font-bold text-deep-blue mb-2 group-hover:text-ocean transition-colors">
              {title}
            </h3>
            <p className="text-[14.5px] text-text-mid leading-relaxed mb-5">
              {description}
            </p>

            {/* Arrow link */}
            <div className="flex items-center gap-1.5 text-cyan text-[14px] font-semibold">
              <span>Learn more</span>
              <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </div>
          </div>

          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan to-accent-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </Link>
    </motion.div>
  );
}
