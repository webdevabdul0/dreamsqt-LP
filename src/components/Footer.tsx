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
    <footer className="relative bg-[#FAF7F2] overflow-hidden py-20 px-5">
      {/* Giant watermark */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none font-bold whitespace-nowrap text-[#131313]"
        style={{ fontSize: '240px', lineHeight: 1, opacity: 0.03 }}
      >
        Dream Squat
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-4">
        {/* ── Left dark gradient card ── */}
        <div
          className="flex-shrink-0 lg:w-[38%] rounded-[40px] p-8 lg:p-10 flex flex-col justify-between"
          style={{
            background: 'linear-gradient(140.13deg, #131313 5.23%, #707070 95.42%)',
            minHeight: 460,
          }}
        >
          {/* Logo */}
          <img src="/logo-full.svg" alt="Dream Squat" className="h-10 w-auto" />

          {/* Bottom text + socials */}
          <div>
            <h3 className="text-[#fff0d1] font-bold text-[32px] lg:text-[40px] leading-tight mb-3">
              Start. Build. Open.
            </h3>
            <p className="text-[#a7a7a7] text-base lg:text-[20px] mb-8 leading-snug">
              The smarter way to start, build and open your dental practice.
            </p>
            <div className="flex items-center justify-between">
              <p className="text-[#fff0d1] italic text-base lg:text-[20px]">Stay in touch!</p>
              <div className="flex gap-2.5 mr-[30px]">
                {[
                  { Icon: Linkedin, label: 'LinkedIn' },
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Youtube, label: 'YouTube' },
                ].map(({ Icon, label }) => (
                  <button
                    key={label}
                    onClick={onOpenContact}
                    aria-label={label}
                    className="w-10 h-10 rounded-[8px] bg-[#fff0d1] flex items-center justify-center hover:opacity-75 transition cursor-pointer flex-shrink-0"
                  >
                    <Icon className="w-5 h-5 text-[#131313]" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Right cream card ── */}
        <div className="flex-1 rounded-[40px] bg-[#fff0d1] px-8 lg:px-12 pt-10 pb-8 relative overflow-visible">
          {/* Floating rotated badge */}
          <div
            className="absolute -top-9 right-[46px] lg:right-[62px] w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] flex items-center justify-center"
            style={{
              background: 'linear-gradient(180deg, #131313 0%, #4B4B4B 100%)',
              borderRadius: '30px',
              boxShadow: '0 20px 30px 0 rgba(0, 0, 0, 0.29)',
              transform: 'rotate(-19.65deg)',
            }}
          >
            <img src="/logo.svg" alt="Dream Squat" className="w-16 h-16 lg:w-20 lg:h-20" />
          </div>

          <div className="flex flex-col h-full">
            {/* Top: nav columns + newsletter (side by side) */}
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-0 flex-1">
              {/* Navigation + Company columns */}
              <div className="flex gap-12 lg:gap-20 flex-shrink-0">
                {/* Navigation */}
                <div>
                  <h4 className="text-[#131313] font-semibold text-lg lg:text-[20px] mb-3">Navigation</h4>
                  <ul>
                    {[
                      { label: 'Home', fn: onScrollToTop },
                      { label: 'Event', fn: onOpenEvent },
                      { label: 'Free Resources', fn: onOpenResources },
                      { label: 'Contact Us', fn: onOpenContact },
                      { label: 'Comparison Calculator', fn: onOpenCalculator },
                    ].map(({ label, fn }) => (
                      <li key={label}>
                        <button
                          onClick={fn}
                          className="text-[#131313] text-sm lg:text-[16px] py-[10px] hover:opacity-50 transition cursor-pointer text-left block"
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="text-[#131313] font-semibold text-lg lg:text-[20px] mb-3">Company</h4>
                  <ul>
                    {[
                      { label: 'Blog', fn: onOpenBlogs },
                      { label: 'Terms and Condition', fn: onOpenContact },
                      { label: 'Privacy Policy', fn: onOpenContact },
                    ].map(({ label, fn }) => (
                      <li key={label}>
                        <button
                          onClick={fn}
                          className="text-[#131313] text-sm lg:text-[16px] py-[10px] hover:opacity-50 transition cursor-pointer text-left block"
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter — pushed to bottom-right */}
              <div className="sm:ml-auto sm:self-end max-w-[360px] pt-4 sm:pt-0">
                <h4 className="text-[#131313] font-bold text-base lg:text-[16px] leading-snug mb-2">
                  Join our newsletter to get regular updates
                </h4>
                <p className="text-[#131313] text-sm lg:text-[14px] mb-4 leading-relaxed">
                  Subscribe our news letter to get more free resources
                </p>
                {subscribed ? (
                  <div className="bg-white/70 border border-[#131313]/10 text-[#131313] p-3 rounded-xl text-sm flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>You're subscribed!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 min-w-0 bg-white border border-white rounded-xl px-4 py-4 text-sm lg:text-[16px] text-[#131313] placeholder-[#131313] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-[#131313] text-[#fbfbfb] font-semibold px-4 py-3 rounded-lg text-sm hover:opacity-80 transition cursor-pointer whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Copyright */}
            <p className="text-[#8f8a8a] text-xs lg:text-[14px] mt-8 pt-4 border-t border-[#131313]/10">
              © 2025 Dreamsquat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
