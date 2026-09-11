import React from 'react';

interface GradientPillProps {
  children: React.ReactNode;
  className?: string;
  innerBg?: string;
}

const GOLD_GRADIENT = 'linear-gradient(90deg, #925E02 2%, #C5A13B 29%, #E6CC60 50%, #F2DC6E 60%, #ECD465 67%, #DDBD4E 77%, #C49727 91%, #B07908 100%)';

export const GradientPill: React.FC<GradientPillProps> = ({ children, className = '', innerBg = '#FAF7F2' }) => {
  return (
    <div
      className="inline-block p-px rounded-full"
      style={{ background: GOLD_GRADIENT }}
    >
      <div
        className={`px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wide ${className}`}
        style={{ backgroundColor: innerBg, color: innerBg === '#FAF7F2' ? '#1a1a1a' : undefined }}
      >
        {children}
      </div>
    </div>
  );
};
