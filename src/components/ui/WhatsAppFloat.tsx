'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export default function WhatsAppFloat({
  phoneNumber = '+13054671525',
  message,
  className = '',
}: WhatsAppFloatProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 rounded-full bg-whatsapp text-white shadow-xl hover:shadow-whatsapp transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-whatsapp/30 ${className}`}
      aria-label="Contact us on WhatsApp"
      animate={{
        scale: [1, 1.08, 1],
        boxShadow: [
          '0 8px 28px rgba(37,211,102,0.35)',
          '0 12px 36px rgba(37,211,102,0.45)',
          '0 8px 28px rgba(37,211,102,0.35)',
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon name="whatsapp" size={32} />

      {/* Subtle pulsing ring effect */}
      <motion.span
        className="absolute inset-0 rounded-full bg-whatsapp/40 -z-10"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />

      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-full mr-4 px-4 py-2.5 rounded-lg bg-deep-blue text-white text-sm font-semibold whitespace-nowrap shadow-xl"
        >
          Chat with us on WhatsApp
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-deep-blue rotate-45" />
        </motion.div>
      )}
    </motion.button>
  );
}
