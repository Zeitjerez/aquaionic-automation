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

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  image,
  index = 0,
}: ServiceCardProps) {
  // Dynamically get Lucide icon
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Droplets;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        delay: index * 0.08,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link href={href} className="group block h-full">
        <motion.div
          className="relative h-full bg-white rounded-2xl border-2 border-border overflow-hidden"
          whileHover={{
            y: -6,
            borderColor: 'rgba(0,188,212,0.2)',
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cyan-light/0 group-hover:to-cyan-light/20 transition-all duration-700 pointer-events-none" />

          {/* Image */}
          {image && (
            <div className="relative h-52 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 via-deep-blue/10 to-transparent" />

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
          )}

          <div className="relative p-7 md:p-8">
            {/* Icon with gradient background */}
            <motion.div
              className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-light to-cyan/10 flex items-center justify-center mb-6 shadow-sm"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <IconComponent size={24} className="text-cyan" strokeWidth={2.5} />
            </motion.div>

            {/* Title */}
            <h3 className="text-[19px] font-jakarta font-bold text-deep-blue mb-3 tracking-tight group-hover:text-ocean transition-colors duration-300 leading-tight">
              {title}
            </h3>

            {/* Description */}
            <p className="text-[14.5px] text-text-mid leading-[1.7] mb-6 font-normal">
              {description}
            </p>

            {/* Arrow link with animation */}
            <div className="flex items-center gap-2 text-cyan text-[14px] font-bold">
              <span className="group-hover:text-ocean transition-colors duration-300">
                Learn more
              </span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                  strokeWidth={2.5}
                />
              </motion.div>
            </div>
          </div>

          {/* Top accent bar with gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan via-ocean to-accent-green scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />

          {/* Shadow on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            initial={false}
            whileHover={{
              boxShadow: '0 20px 40px -12px rgba(0,188,212,0.15)',
            }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
