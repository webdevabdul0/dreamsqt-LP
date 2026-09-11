import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div
      className="flex flex-col gap-6 p-8"
      style={{
        borderRadius: '20px',
        border: '1px solid #925E02',
      }}
    >
      <div className="w-14 h-14 flex items-center justify-center">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 style={{ color: '#fff', fontFamily: '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '20px', fontWeight: 700, lineHeight: 'normal' }}>
          {title}
        </h3>
        <p style={{ color: '#fff', fontFamily: '"SF Pro Text", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}>
          {description}
        </p>
      </div>
    </div>
  );
};
