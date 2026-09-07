import React from 'react';
import { Mail, Phone, MessageCircle, Instagram, Linkedin, Twitter } from 'lucide-react';

interface TopBarProps {
  onContactClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onContactClick }) => {
  return (
    <aside
      id="top-utility-bar"
      className="bg-[#121212] text-white text-[11px] font-medium py-2 px-4 border-b border-white/10 select-none"
      data-purpose="top-utility-bar"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="mailto:squatteducation@gmail.com"
            className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[#C58F28]" />
            <span>Email: squatteducation@gmail.com</span>
          </a>

          <a
            href="tel:08006891097"
            className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#C58F28]" />
            <span>Telephone: 0800 689 1097</span>
          </a>

          <a
            href="https://wa.me/447955778714"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Whatsapp us: 07955778714</span>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-3 text-neutral-400">
          <button
            onClick={onContactClick}
            aria-label="Instagram"
            className="hover:text-[#C58F28] transition-colors p-1"
          >
            <Instagram className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onContactClick}
            aria-label="LinkedIn"
            className="hover:text-[#C58F28] transition-colors p-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onContactClick}
            aria-label="Twitter / X"
            className="hover:text-[#C58F28] transition-colors p-1"
          >
            <Twitter className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
