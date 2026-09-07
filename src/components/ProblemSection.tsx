import React from 'react';
import { X, Check } from 'lucide-react';

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
        className="py-18 px-6 max-w-7xl mx-auto"
        data-purpose="the-problem-breakdown"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: The Frustration & Tag Clouds */}
          <div className="lg:col-span-7 bg-[#F5EFE4]/60 border border-[#E8DCC8] rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-0.5 bg-[#FAF7F2] border border-[#C58F28]/30 rounded-full text-[10px] font-bold text-[#A4741B] uppercase tracking-wider mb-4">
                THE PROBLEM
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
                Going squat shouldn't feel this <span className="text-[#C58F28]">complicated.</span>
              </h2>
              <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                Most dentists who dream of opening their own practice never take the leap.
              </p>
              <p className="text-xs font-bold text-neutral-800 mt-4 leading-relaxed">
                Not because they aren't capable, but because finding the right information can feel impossible.
              </p>
            </div>

            {/* Scatter Pills / Cloud */}
            <div className="pt-10 flex flex-wrap gap-2.5 items-center">
              {[
                'Google searches',
                'Conflicting advice',
                'Endless decisions',
                'Months spent trying to work out',
                'what to do',
                'when to do it',
                'who to trust.'
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 bg-[#FAF7F2] border border-[#D5C29E] rounded-md text-[11px] font-medium text-neutral-700 shadow-2xs hover:border-[#C58F28] transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Gold Card Revelation */}
          <div className="lg:col-span-5 bg-[#C58F28] text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                You're a brilliant clinician being asked to become a business owner overnight.
              </h3>
            </div>

            <div className="space-y-3 pt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3.5 flex items-center gap-3 text-xs font-medium">
                <X className="w-4 h-4 text-amber-200 shrink-0" />
                <span>You don't need more information.</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3.5 flex items-center gap-3 text-xs font-bold text-amber-100">
                <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>You need the right information, in the right order.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
