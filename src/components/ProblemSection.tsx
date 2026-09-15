import React from 'react';
import { GradientPill } from './GradientPill';

export const ProblemSection: React.FC = () => {
  return (
    <>
      {/* Social proof ribbon */}
      <div
        id="social-proof-ribbon"
        className="bg-[#A4741B] py-3.5 px-4 text-center"
        data-purpose="social-proof-ribbon"
      >
        <p className="text-xs md:text-sm font-medium text-white tracking-wide">
          Trusted by 70+ dentists who have opened their own practices across the UK
        </p>
      </div>

      {/* The Problem Section */}
      <section
        id="the-problem-section"
        className="py-20 px-6"
        style={{ background: 'hsla(32, 68%, 96%, 1)' }}
        data-purpose="the-problem-breakdown"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-6 items-center">
          {/* Left: The Frustration */}
          <div className="flex flex-col gap-5 relative">
            <div>
              <div className="mb-5">
                <GradientPill>THE PROBLEM</GradientPill>
              </div>
              <h2
                className="leading-tight"
                style={{ fontFamily: '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '60px', fontWeight: 700, color: '#131313' }}
              >
                Going squat shouldn't<br />feel this <span style={{ color: '#C58F28' }}>complicated.</span>
              </h2>
              <p className="text-sm text-neutral-600 mt-5 leading-relaxed">
                Most dentists who dream of opening their own practice never take the leap.
              </p>
              <p className="text-sm font-bold text-neutral-800 mt-2 leading-relaxed">
                Not because they aren't capable but because finding the right information can feel impossible.
              </p>
            </div>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-2 items-start">
              {[
                'Google searches.',
                'Conflicting advice',
                'Endless decisions',
                'Months spent trying to work out',
                'what to do',
                'when to do it',
                'who to trust.',
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 text-[13px] text-neutral-800"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #E3AA33',
                    background: '#FFF0D1',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>

          </div>

          {/* Right: Gold Gradient Card */}
          <div
            className="text-white flex flex-col justify-between p-10 gap-8 relative"
            style={{
              borderRadius: '20px',
              background: 'linear-gradient(90deg, #925E02 -9.6%, #C5A13B 48.65%, #E6CC60 93.96%, #F2DC6E 115.53%, #ECD465 130.63%, #DDBD4E 152.2%, #C49727 182.41%, #B07908 201.82%)',
            }}
          >
            {/* Arrow at bottom-left corner */}
            <img src="/arrow.svg" alt="" width={160} height={110} className="absolute -bottom-12 -left-32 pointer-events-none" />

            <h3 className="leading-tight text-white" style={{ fontFamily: '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '40px', fontWeight: 700 }}>
              You're a brilliant clinician being asked to become a business owner overnight.
            </h3>

            <div className="space-y-3">
              {[
                "You don't need more information.",
                'You need the right information, in the right order.',
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid #E3AA33',
                    background: '#FFF0D1',
                  }}
                >
                  <img src="/checkmark.svg" alt="✓" width={24} height={24} className="shrink-0" />
                  <span
                    style={{
                      color: '#131313',
                      fontFamily: '"SF Pro", -apple-system, BlinkMacSystemFont, sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
