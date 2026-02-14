'use client';

import { useState } from 'react';
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
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-whatsapp animate-whatsapp-pulse hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2 ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <Icon name="whatsapp" size={28} />

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-deep-blue text-white text-sm font-semibold whitespace-nowrap shadow-lg animate-fade-in">
          Chat with us
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-deep-blue rotate-45" />
        </div>
      )}
    </button>
  );
}
