import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GradientPill } from './GradientPill';

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section
      id="hero-section"
      className="py-14 md:py-22 relative bg-[#FAF7F2] overflow-hidden"
      data-purpose="hero-section"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-12">
        {/* Left Column: Copy */}
        <div className="w-full lg:w-[640px] shrink-0 space-y-6 relative z-10">
          <GradientPill>DREAM SQUAT PORTAL</GradientPill>

          <h1
            className="leading-tight"
            style={{ fontFamily: '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '60px', fontWeight: 700, color: '#131313' }}
          >
            <span style={{ color: '#C58F28' }}>Everything</span> you need to open your squat dental practice.
          </h1>

          <p style={{ color: '#131313', fontSize: '24px', fontWeight: 400 }}>
            One place. One price. No guesswork.
          </p>

          <p style={{ color: '#131313', fontSize: '16px', fontWeight: 400 }} className="max-w-lg leading-relaxed">
            You've got the clinical skills. You've got the ambition.
            <br />
            What you've been missing is a clear roadmap to turn your vision into a successful dental practice.
          </p>

          <div className="pt-2">
            <button
              onClick={onJoinClick}
              id="hero-join-btn"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-[#A4741B] hover:bg-[#8e6314] text-white text-xs font-bold tracking-wider transition-all shadow-md group cursor-pointer active:scale-98"
            >
              JOIN FOR £19.99/MONTH
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right: Portal screenshot — grows to fill remaining space and bleeds off-screen */}
        <div className="hidden lg:block flex-1 min-w-0">
          <img
            src="/hero.png"
            alt="Dream Squat Portal"
            className="rounded-2xl shadow-2xl"
            style={{ transform: 'translateX(80px)', width: '700px', maxWidth: 'none' }}
          />
        </div>
      </div>
    </section>
  );
};
