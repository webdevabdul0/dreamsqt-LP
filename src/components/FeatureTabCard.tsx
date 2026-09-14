import React from 'react';

const SF_PRO = '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif';

interface FeatureTabCardProps {
  label: string;
  heading: React.ReactNode;
  body: React.ReactNode;
  footer?: string;
  imageSrc: string;
  imageAlt: string;
  cardBg?: string;
}

export const FeatureTabCard: React.FC<FeatureTabCardProps> = ({
  label,
  heading,
  body,
  footer,
  imageSrc,
  imageAlt,
  cardBg = '#7B5214',
}) => (
  <div className="flex gap-5 w-full" style={{ height: '620px' }}>
    {/* Left panel */}
    <div
      className="flex flex-col p-10 shrink-0 overflow-hidden"
      style={{ flex: '0 0 41%', background: cardBg, borderRadius: '40px' }}
    >
      <div className="space-y-6">
        {/* Pill */}
        <span
          className="inline-block px-3 py-2 rounded-full text-[14px] font-normal uppercase"
          style={{ border: '1px solid rgba(255,255,255,1)', color: '#FCF6EF', fontFamily: SF_PRO }}
        >
          {label}
        </span>

        {/* Heading */}
        <h3
          className="leading-tight text-white"
          style={{ fontFamily: SF_PRO, fontSize: '42px', fontWeight: 700 }}
        >
          {heading}
        </h3>

        {/* Body */}
        <div style={{ color: '#FCF6EF', fontSize: '16px', fontWeight: 400, lineHeight: 'normal', fontFamily: SF_PRO, fontStyle: 'normal' }}>
          {body}
        </div>
      </div>

      {/* Footer */}
      {footer && (
        <p style={{ fontFamily: SF_PRO, fontSize: '24px', fontWeight: 400, fontStyle: 'normal', color: '#fff', letterSpacing: '-0.48px', lineHeight: 'normal', marginTop: '24px' }}>
          {footer}
        </p>
      )}
    </div>

    {/* Right panel — photo */}
    <div className="relative overflow-hidden" style={{ flex: '1 1 0', borderRadius: '40px' }}>
      <img
        src={imageSrc}
        alt={imageAlt}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  </div>
);
