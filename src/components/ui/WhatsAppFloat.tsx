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
      className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 rounded-full bg-whatsapp text-white shadow-whatsapp-pulse hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-whatsapp/50 animate-whatsapp ${className}`}
      aria-label="Contact us on WhatsApp"
      style={{
        animation: 'waPulse 2s ease-in-out infinite',
      }}
    >
      <Icon name="whatsapp" size={32} />

      {/* Pulsing ring effect */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-75"></span>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute right-full mr-4 px-4 py-2.5 rounded-lg bg-deep-blue text-white text-sm font-semibold whitespace-nowrap shadow-xl animate-fade-in">
          Chat with us on WhatsApp
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-deep-blue rotate-45" />
        </div>
      )}
    </button>
  );
}
