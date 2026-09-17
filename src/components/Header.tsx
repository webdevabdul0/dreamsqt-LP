import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenCalculator: () => void;
  onOpenEvent: () => void;
  onOpenResources: () => void;
  onOpenBlogs: () => void;
  onOpenContact: () => void;
  onOpenLogin: () => void;
  onScrollToPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCalculator,
  onOpenEvent,
  onOpenResources,
  onOpenBlogs,
  onOpenContact,
  onOpenLogin,
  onScrollToPortal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="site-navigation"
      className="bg-[#FAF7F2] border-b border-black/5 sticky top-0 z-50 backdrop-blur-md bg-opacity-95"
      data-purpose="site-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Nav grouped left */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2.5 group shrink-0" id="brand-logo">
            <img src="/logo.svg" alt="Dream Squat" className="w-9 h-9 group-hover:scale-105 transition-transform" />
          </a>

          {/* Desktop Nav immediately next to logo — hidden */}
          <nav className="hidden" style={{ fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '14px', fontWeight: 590, color: '#131313' }}>
          <button
            onClick={onScrollToPortal}
            className="text-[#C58F28] font-semibold hover:text-[#A4741B] transition-colors cursor-pointer"
            id="nav-ds-portal"
          >
            DS Portal
          </button>
          <button
            onClick={onOpenCalculator}
            className="hover:opacity-70 transition-opacity cursor-pointer"
            id="nav-comparison-calc"
          >
            Comparison Calculator
          </button>
          <button
            onClick={onOpenEvent}
            className="hover:opacity-70 transition-opacity cursor-pointer"
            id="nav-event"
          >
            Event
          </button>
          <button
            onClick={onOpenResources}
            className="hover:opacity-70 transition-opacity cursor-pointer"
            id="nav-free-resources"
          >
            Free Resources
          </button>
          <button
            onClick={onOpenBlogs}
            className="hover:opacity-70 transition-opacity cursor-pointer"
            id="nav-blogs"
          >
            Blogs
          </button>
          <button
            onClick={onOpenContact}
            className="hover:opacity-70 transition-opacity cursor-pointer"
            id="nav-contact"
          >
            Contact Us
          </button>
        </nav>
        </div>{/* end logo+nav group */}

        {/* Auth Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLogin}
            id="nav-login-btn"
            className="px-6 py-2 rounded-md bg-[#A4741B] hover:bg-[#8e6314] text-white text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            Login
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-[#131313] hover:bg-black/5 transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-black/5 bg-[#FAF7F2] px-6 py-4 flex flex-col gap-1">
          <button onClick={() => { onScrollToPortal(); setMobileMenuOpen(false); }} className="text-[#C58F28] font-semibold text-sm py-3 text-left hover:opacity-70 transition-opacity cursor-pointer border-b border-black/5">DS Portal</button>
          <button onClick={() => { onOpenCalculator(); setMobileMenuOpen(false); }} className="text-[#131313] text-sm py-3 text-left hover:opacity-70 transition-opacity cursor-pointer border-b border-black/5">Comparison Calculator</button>
          <button onClick={() => { onOpenEvent(); setMobileMenuOpen(false); }} className="text-[#131313] text-sm py-3 text-left hover:opacity-70 transition-opacity cursor-pointer border-b border-black/5">Event</button>
          <button onClick={() => { onOpenResources(); setMobileMenuOpen(false); }} className="text-[#131313] text-sm py-3 text-left hover:opacity-70 transition-opacity cursor-pointer border-b border-black/5">Free Resources</button>
          <button onClick={() => { onOpenBlogs(); setMobileMenuOpen(false); }} className="text-[#131313] text-sm py-3 text-left hover:opacity-70 transition-opacity cursor-pointer border-b border-black/5">Blogs</button>
          <button onClick={() => { onOpenContact(); setMobileMenuOpen(false); }} className="text-[#131313] text-sm py-3 text-left hover:opacity-70 transition-opacity cursor-pointer">Contact Us</button>
        </nav>
      )}
    </header>
  );
};
