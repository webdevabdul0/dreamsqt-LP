import React from 'react';
import { GradientPill } from './GradientPill';

interface PricingSectionProps {
  onJoinClick: () => void;
}

const CheckIcon = ({ idx }: { idx: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <g clipPath={`url(#pc${idx})`}>
      <path d="M7.99999 14.6668C11.6819 14.6668 14.6667 11.682 14.6667 8.00016C14.6667 4.31826 11.6819 1.3335 7.99999 1.3335C4.31809 1.3335 1.33333 4.31826 1.33333 8.00016C1.33333 11.682 4.31809 14.6668 7.99999 14.6668Z" fill="#E3AA33"/>
      <path d="M4.99999 8.00016L6.99999 10.0002L11 6.00016M14.6667 8.00016C14.6667 11.682 11.6819 14.6668 7.99999 14.6668C4.31809 14.6668 1.33333 11.682 1.33333 8.00016C1.33333 4.31826 4.31809 1.3335 7.99999 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016Z" stroke="#131313" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id={`pc${idx}`}>
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const SF_PRO = '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif';

const strokeTextStyle: React.CSSProperties = {
  color: '#FCF6EF',
  WebkitTextStrokeWidth: '1px',
  WebkitTextStrokeColor: '#DFA123',
  fontFamily: SF_PRO,
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
};

export const PricingSection: React.FC<PricingSectionProps> = ({ onJoinClick }) => {
  const benefits = [
    'Full portal access',
    'AI Location Finder',
    '5-module comprehensive squat course',
    'Interactive Build Journey roadmap',
    'Squat Cost Calculator',
    '100+ vetted resources & templates',
    'Vetted supplier directory',
    'Private clinical owner community',
  ];

  return (
    <section
      id="pricing"
      className="py-24 px-6 scroll-mt-12"
      style={{ background: '#FCF6EF' }}
      data-purpose="simple-pricing"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center space-y-5">
          <GradientPill>SIMPLE PRICING</GradientPill>
          <h2
            className="leading-tight"
            style={{
              fontFamily: SF_PRO,
              fontSize: '60px',
              fontWeight: 700,
              color: '#131313',
            }}
          >
            Everything included.<br />
            <span style={{ color: '#C58F28' }}>One simple price.</span>
          </h2>
        </div>

        {/* Pricing Card */}
        <div
          className="mx-auto relative overflow-hidden"
          style={{
            border: '14px solid #DFA123',
            borderRadius: '32px',
            background: '#121212',
            maxWidth: '1000px',
          }}
        >
          <div className="flex items-stretch">
            {/* Left: Pricing Info */}
            <div className="flex-1 p-10 space-y-7 min-w-0">
              {/* Price label */}
              <div>
                <div className="mb-2">
                  <span style={{ ...strokeTextStyle, fontSize: '24px' }}>Price</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span
                    style={{
                      color: '#E3AA33',
                      fontFamily: SF_PRO,
                      fontSize: '60px',
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    £19.99
                  </span>
                  <span style={{ ...strokeTextStyle, fontSize: '16px' }}>/ month</span>
                </div>
              </div>

              {/* Benefits list */}
              <div className="space-y-3">
                <p style={{ color: '#FCF6EF', fontFamily: SF_PRO, fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Benefits</p>
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckIcon idx={idx} />
                    <span
                      style={{
                        color: '#FCF6EF',
                        fontFamily: SF_PRO,
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: 'normal',
                      }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* No hidden fees — 1px white border above */}
              <div style={{ borderTop: '1px solid #fff', paddingTop: '20px' }}>
                <div className="space-y-2">
                  {['No hidden fees.', 'No complicated packages.', 'No premium tier hiding the good stuff.'].map((line) => (
                    <p key={line} style={{ color: '#FCF6EF', fontFamily: SF_PRO, fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <button
                  onClick={onJoinClick}
                  id="pricing-checkout-btn"
                  className="w-full py-4 rounded-xl text-white font-bold text-sm cursor-pointer transition-opacity hover:opacity-90"
                  style={{ background: 'hsla(38, 97%, 29%, 1)' }}
                >
                  Start for £19.99/month →
                </button>
                <p
                  className="text-center"
                  style={{
                    color: '#FCF6EF',
                    fontFamily: SF_PRO,
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                  Cancel anytime. No contract. Instant access.
                </p>
              </div>
            </div>

            {/* Right: half-visible portal preview + glow */}
            <div
              className="relative shrink-0 overflow-hidden"
              style={{ width: '440px' }}
            >
              {/* Gold glow anchored to left edge */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '180px',
                  background: 'radial-gradient(ellipse at 0% 50%, rgba(223,161,35,0.55) 0%, rgba(223,161,35,0.15) 50%, transparent 80%)',
                  zIndex: 2,
                }}
              />
              {/* Image — anchored left, wider than container so right clips off */}
              <img
                src="/price-previewpng.png"
                alt="Dream Squat portal preview"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '0',
                  transform: 'translateY(-50%)',
                  width: '820px',
                  maxWidth: 'none',
                  height: 'auto',
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
