import React, { useState } from 'react';
import { Instagram, Linkedin, Youtube, CheckCircle } from 'lucide-react';

interface FooterProps {
  onOpenCalculator: () => void;
  onOpenEvent: () => void;
  onOpenResources: () => void;
  onOpenBlogs: () => void;
  onOpenContact: () => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCalculator,
  onOpenEvent,
  onOpenResources,
  onOpenBlogs,
  onOpenContact,
  onScrollToTop
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer
      id="site-footer"
      className="bg-[#0a0a0a] text-neutral-400 py-16 px-6 relative border-t border-neutral-800 overflow-hidden"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        {/* Brand Card Left */}
        <div className="md:col-span-4 bg-[#141414] p-6 rounded-2xl border border-neutral-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1a1a1a] border border-[#C58F28] flex items-center justify-center">
              <span className="text-[#C58F28] font-bold text-xs">DS</span>
            </div>
            <div>
              <span className="font-bold text-white text-sm block leading-tight">DREAM SQUAT</span>
              <span className="text-[9px] uppercase tracking-wider text-[#A4741B] font-semibold">
                Start. Build. Open.
              </span>
            </div>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            The smarter way to start, build and open your dental practice.
          </p>
          <div className="flex space-x-3 pt-2 text-neutral-400">
            <button
              onClick={onOpenContact}
              className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-[#C58F28] hover:text-white transition flex items-center justify-center cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenContact}
              className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-[#C58F28] hover:text-white transition flex items-center justify-center cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenContact}
              className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-[#C58F28] hover:text-white transition flex items-center justify-center cursor-pointer"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={onScrollToTop}
                className="hover:text-white transition cursor-pointer text-left"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={onOpenEvent}
                className="hover:text-white transition cursor-pointer text-left"
              >
                Event
              </button>
            </li>
            <li>
              <button
                onClick={onOpenResources}
                className="hover:text-white transition cursor-pointer text-left"
              >
                Free Resources
              </button>
            </li>
            <li>
              <button
                onClick={onOpenContact}
                className="hover:text-white transition cursor-pointer text-left"
              >
                Contact Us
              </button>
            </li>
            <li>
              <button
                onClick={onOpenCalculator}
                className="hover:text-white transition cursor-pointer text-left"
              >
                Comparison Calculator
              </button>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="md:col-span-2 space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={onOpenBlogs}
                className="hover:text-white transition cursor-pointer text-left"
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={onOpenContact}
                className="hover:text-white transition cursor-pointer text-left"
              >
                Terms and Condition
              </button>
            </li>
            <li>
              <button
                onClick={onOpenContact}
                className="hover:text-white transition cursor-pointer text-left"
              >
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Newsletter</h4>
          <p className="text-xs text-neutral-400">Join our newsletter to get regular updates</p>

          {subscribed ? (
            <div className="bg-emerald-950/60 border border-emerald-800 text-emerald-300 p-3 rounded-lg text-xs flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>You're subscribed to Dream Squat clinical owner insights!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-[#181818] border border-neutral-700 rounded-lg px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#C58F28] flex-1"
              />
              <button
                type="submit"
                className="bg-[#C58F28] hover:bg-[#b07e20] text-neutral-900 font-bold px-4 py-2 rounded-lg text-xs transition cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row justify-between items-center text-[11px] text-neutral-500 relative z-10 gap-2">
        <p>© 2025 Dream Squat. All rights reserved.</p>
        <p>Built for prospective dental practice owners across the UK.</p>
      </div>

      {/* Giant Background Watermark */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-5 font-serif text-[18vw] whitespace-nowrap text-white">
        Dream Squat
      </div>
    </footer>
  );
};
