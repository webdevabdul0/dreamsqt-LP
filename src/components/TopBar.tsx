import React from 'react';
import { Facebook, Youtube, Instagram } from 'lucide-react';

interface TopBarProps {
  onContactClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onContactClick }) => {
  return (
    <aside
      id="top-utility-bar"
      className="bg-[#1a1a1a] text-[11px] py-2.5 px-4 border-b border-white/5 select-none"
      data-purpose="top-utility-bar"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:cqcmedisolutions@gmail.com"
            className="flex items-center gap-2 text-[#C58F28] hover:text-[#DFB04E] transition-colors cursor-pointer"
          >
            {/* Mail icon SVG matching Figma */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="#C58F28" strokeWidth="1.2"/>
              <path d="M1 4L7 8L13 4" stroke="#C58F28" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span>Email: cqcmedisolutions@gmail.com</span>
          </a>

          <a
            href="tel:08006891061"
            className="flex items-center gap-2 text-[#C58F28] hover:text-[#DFB04E] transition-colors cursor-pointer"
          >
            {/* Phone icon SVG */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 1.5C4.5 1.5 3 3 3 5.5C3 8 5.5 10.5 8 11C10.5 11.5 12.5 10 12.5 10L10.5 8L9 9C9 9 7.5 8.5 6.5 7.5C5.5 6.5 5 5 5 5L6.5 3.5L4.5 1.5Z" stroke="#C58F28" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Telephone: 0800 689 1061</span>
          </a>

          <a
            href="https://wa.me/447956776114"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#C58F28] hover:text-[#DFB04E] transition-colors cursor-pointer"
          >
            {/* WhatsApp icon SVG */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1C3.686 1 1 3.686 1 7C1 8.12 1.31 9.17 1.847 10.065L1 13L4.013 12.169C4.876 12.664 5.905 12.951 7 12.951C10.314 12.951 13 10.265 13 6.951C13 3.637 10.314 1 7 1Z" stroke="#C58F28" strokeWidth="1.2" strokeLinejoin="round"/>
              <path d="M5 5.5C5 5.5 5.5 7.5 7 8.5C8.5 9.5 9.5 9 9.5 9" stroke="#C58F28" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span>Whatsapp us: 07956776114</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 text-[#C58F28]">
          <a href="#" aria-label="Facebook" className="hover:text-[#DFB04E] transition-colors">
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-[#DFB04E] transition-colors">
            <Youtube className="w-3.5 h-3.5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[#DFB04E] transition-colors">
            <Instagram className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </aside>
  );
};
