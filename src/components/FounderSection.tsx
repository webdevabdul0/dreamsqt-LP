import React from 'react';
import { GradientPill } from './GradientPill';

interface FounderSectionProps {
  onExplorePortal: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onExplorePortal }) => {
  return (
    <section
      id="founder-section"
      className="py-20"
      style={{ background: '#FCF6EF' }}
      data-purpose="founder-credibility"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Top: Founder image + text */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Founder image */}
          <div className="rounded-2xl overflow-hidden shrink-0" style={{ width: '579px', aspectRatio: '4/5' }}>
            <img
              src="/founder.png"
              alt="Saba Arif - Founder Dream Squat"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-6 pt-2">
            <GradientPill>BUILT FROM EXPERIENCE</GradientPill>

            <h2
              className="leading-tight"
              style={{
                fontFamily: '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif',
                fontSize: '60px',
                fontWeight: 700,
                color: '#131313',
              }}
            >
              Built by someone who's done it.{' '}
              <span style={{ color: '#C58F28' }}>Three times.</span>
            </h2>

            <div className="space-y-3">
              <p style={{ color: '#131313', fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>
                <strong>Dream Squat</strong> was created by <strong>Saba Arif</strong>, a dental clinic owner who has{' '}
                <strong>opened three squat practices from scratch.</strong>
              </p>
              <p style={{ color: '#131313', fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>
                She has since mentored 70+ dentists through the process — from finding the right location and securing finance to CQC registration, fit-out, equipment and marketing.
              </p>
            </div>

            <hr style={{ borderColor: '#E0D5C8', borderTopWidth: '1px' }} />

            <div className="space-y-3">
              <p style={{ color: '#C58F28', fontSize: '16px', fontWeight: 700 }}>
                This isn't theory. It's experience.
              </p>
              <p style={{ color: '#131313', fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>
                Saba didn't build Dream Squat from a textbook.
              </p>
              <p style={{ color: '#131313', fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>
                She built it from real practices, real decisions, real mistakes and years of helping dentists make the leap.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: 4 image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Dental interior + caption */}
          <div
            className="relative rounded-2xl overflow-hidden cursor-pointer"
            style={{ aspectRatio: '305/391' }}
            onClick={onExplorePortal}
          >
            <img
              src="/practice-1.png"
              alt="Dental practice interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p style={{ color: '#fff', fontSize: '14px', fontWeight: 400, lineHeight: '1.5' }}>
                Everything she wished she'd had when she opened her first practice is now inside Dream Squat.
              </p>
            </div>
          </div>

          {/* Card 2: 3 Practices opened */}
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '305/391' }}>
            <img
              src="/practice-2.png"
              alt="Dental practice"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p style={{ color: '#fff', fontSize: '48px', fontWeight: 700, lineHeight: 1 }}>3</p>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginTop: '4px' }}>Practices opened</p>
            </div>
          </div>

          {/* Card 3: 70+ Dentists mentored */}
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '305/391' }}>
            <img
              src="/practice-3.png"
              alt="Dental chair"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p style={{ color: '#fff', fontSize: '48px', fontWeight: 700, lineHeight: 1 }}>70+</p>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginTop: '4px' }}>Dentists mentored</p>
            </div>
          </div>

          {/* Card 4: 1 Complete roadmap */}
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '305/391' }}>
            <img
              src="/practice-4.png"
              alt="Dental clinic exterior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p style={{ color: '#fff', fontSize: '48px', fontWeight: 700, lineHeight: 1 }}>1</p>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginTop: '4px' }}>Complete roadmap</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
