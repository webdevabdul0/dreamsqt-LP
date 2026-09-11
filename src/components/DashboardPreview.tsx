import React from 'react';
import { FeatureCard } from './FeatureCard';

interface DashboardPreviewProps {
  onSelectFeatureTab: (tabName: string) => void;
  onOpenChecklistModal: () => void;
}

const InfoOverloadIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Person body */}
    <circle cx="28" cy="22" r="5" fill="white"/>
    <path d="M20 42 Q20 32 28 32 Q36 32 36 42" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <line x1="28" y1="32" x2="28" y2="42" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="28" y1="36" x2="22" y2="40" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="28" y1="36" x2="34" y2="40" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Bubbles */}
    <circle cx="14" cy="10" r="6" fill="white" opacity="0.9"/>
    <text x="14" y="14" textAnchor="middle" fontSize="7" fill="#131313" fontWeight="bold">$</text>
    <circle cx="28" cy="6" r="6" fill="white" opacity="0.9"/>
    <text x="28" y="10" textAnchor="middle" fontSize="7" fill="#131313" fontWeight="bold">!</text>
    <circle cx="42" cy="10" r="6" fill="white" opacity="0.9"/>
    <text x="42" y="14" textAnchor="middle" fontSize="7" fill="#131313" fontWeight="bold">%</text>
  </svg>
);

const DecisionParalysisIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Person */}
    <circle cx="28" cy="10" r="5" fill="white"/>
    <line x1="28" y1="15" x2="28" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="20" y1="20" x2="36" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="28" y1="28" x2="22" y2="36" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="28" y1="28" x2="34" y2="36" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Crossroads arrows */}
    <path d="M8 42 L16 42" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 39 L17 42 L14 45" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M48 42 L40 42" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M42 39 L39 42 L42 45" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M28 50 L28 44" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M25 46 L28 43 L31 46" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <ellipse cx="28" cy="42" rx="8" ry="3" stroke="white" strokeWidth="1.5" fill="none"/>
  </svg>
);

const RoadmapIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Map pin */}
    <path d="M18 18 C18 12 22 8 27 8 C32 8 36 12 36 18 C36 26 27 34 27 34 C27 34 18 26 18 18Z" fill="white"/>
    <circle cx="27" cy="18" r="4" fill="#131313"/>
    {/* Winding road */}
    <path d="M34 30 Q42 34 38 42 Q34 48 44 50" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <circle cx="44" cy="50" r="3" fill="white"/>
  </svg>
);

export const DashboardPreview: React.FC<DashboardPreviewProps> = ({
  onSelectFeatureTab,
  onOpenChecklistModal,
}) => {
  return (
    <section
      id="dashboard-preview-section"
      className="text-white py-24 px-6"
      style={{ background: '#131313' }}
      data-purpose="core-product-preview"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="leading-tight"
            style={{
              fontFamily: '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '60px',
              fontWeight: 700,
              color: '#fff',
            }}
          >
            That's exactly why we<br />built{' '}
            <span style={{ color: '#DFB04E' }}>Dream Squat.</span>
          </h2>
        </div>

        {/* Dashboard Image */}
        <div className="relative max-w-5xl mx-auto" style={{ transform: 'translateX(-20px)' }}>
          {/* Glow */}
          <div className="absolute pointer-events-none" style={{
            top: '-60px',
            left: '10%',
            right: '10%',
            height: '60%',
            background: 'radial-gradient(50% 50% at 50% 50%, #925E02 0%, rgba(227, 170, 51, 0.00) 100%)',
            filter: 'blur(60px)',
            zIndex: 0,
          }} />
        <div className="rounded-2xl overflow-hidden relative" style={{ zIndex: 1 }}>
          <img
            src="/3rd-sec.png"
            alt="Dream Squat Dashboard"
            className="w-full h-auto"
          />
        </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <FeatureCard
            icon={<InfoOverloadIcon />}
            title="Information Overload"
            description="Scattered advice and endless Google searches."
          />
          <FeatureCard
            icon={<DecisionParalysisIcon />}
            title="Decision Paralysis"
            description="Too many decisions. No clear path forward."
          />
          <FeatureCard
            icon={<RoadmapIcon />}
            title="No Dedicated Roadmap"
            description="Nothing built specifically for dentists starting from scratch."
          />
        </div>
      </div>
    </section>
  );
};
