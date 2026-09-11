import React from 'react';
import { GradientPill } from './GradientPill';

const SF_PRO = '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif';

const risks = [
  {
    stat: '£20,000+',
    desc: 'One bad lease clause could cost you thousands.',
  },
  {
    stat: '4 MONTHS',
    desc: "A missed CQC deadline could delay your opening while you're still paying rent.",
  },
  {
    stat: '10+ YEARS',
    desc: 'The wrong location could shape the next decade of your career.',
  },
];

export const RiskSection: React.FC = () => {
  return (
    <section
      id="risk-section"
      className="py-20 px-6"
      style={{ background: '#FCF6EF' }}
      data-purpose="risk-contrast-breakdown"
    >
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <GradientPill>LOOK AT THE BIGGER PICTURE</GradientPill>
          </div>

          {/* Heading */}
          <h2
            className="text-center leading-tight"
            style={{
              fontFamily: SF_PRO,
              fontSize: '60px',
              fontWeight: 700,
              color: '#131313',
            }}
          >
            <span style={{ color: '#925E02' }}>£19.99</span>
            {' is small compared to the cost of getting it wrong.'}
          </h2>
        </div>

        {/* 3 Risk Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {risks.map(({ stat, desc }) => (
            <div
              key={stat}
              className="flex flex-col justify-between p-8"
              style={{
                background: '#925E02',
                border: '1px solid #925E02',
                borderRadius: '20px',
                minHeight: '214px',
              }}
            >
              <p style={{ color: '#FFF', fontFamily: SF_PRO, fontSize: '32px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal' }}>
                {stat}
              </p>
              <p style={{ color: '#FFF', fontFamily: SF_PRO, fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="text-center space-y-2">
          <p
            style={{
              fontFamily: SF_PRO,
              fontSize: '24px',
              fontWeight: 700,
              color: '#131313',
              letterSpacing: '-0.48px',
              lineHeight: 'normal',
            }}
          >
            Dream Squat isn't another monthly expense.
          </p>
          <p
            style={{
              fontFamily: SF_PRO,
              fontSize: '16px',
              fontWeight: 400,
              color: '#131313',
              lineHeight: 'normal',
            }}
          >
            It's a smarter way to protect the biggest business decision of your career.
          </p>
        </div>
      </div>
    </section>
  );
};
