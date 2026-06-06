import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/4591783970"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageCircle size={26} className="fill-white text-white" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full" />
      </div>
      <span className="absolute right-16 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
        Chat on WhatsApp
        <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full border-4 border-transparent border-l-gray-900" />
      </span>
    </a>
  );
}
