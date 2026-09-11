import React from 'react';

interface FeatureTabCardProps {
  label: string;
  heading: React.ReactNode;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  cardBg?: string;
}

const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
    <path d="M5 8l2 2 4-4" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FeatureTabCard: React.FC<FeatureTabCardProps> = ({
  label,
  heading,
  description,
  bullets,
  imageSrc,
  imageAlt,
  cardBg = '#7B5214',
}) => (
  <div className="flex gap-5 w-full" style={{ minHeight: '500px' }}>
    {/* Left panel — 524/1280 ≈ 41% */}
    <div
      className="flex flex-col justify-between p-10 shrink-0"
      style={{ flex: '0 0 41%', background: cardBg, borderRadius: '40px' }}
    >
      <div className="space-y-6">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-widest"
          style={{ border: '1px solid rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.9)' }}
        >
          {label}
        </span>
        <h3
          className="leading-tight text-white"
          style={{
            fontFamily: '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '42px',
            fontWeight: 700,
          }}
        >
          {heading}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.65' }}>
          {description}
        </p>
      </div>
      <div className="space-y-3 pt-8">
        {bullets.map((item) => (
          <div key={item} className="flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>
            <CheckCircleIcon />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Right panel — photo fills remaining space */}
    <div className="relative overflow-hidden" style={{ flex: '1 1 0', minHeight: '500px', borderRadius: '40px' }}>
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  </div>
);
