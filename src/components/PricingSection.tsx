import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onJoinClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onJoinClick }) => {
  const [locationsCount, setLocationsCount] = useState(12);
  const [suppliersCount, setSuppliersCount] = useState(8);

  const benefits = [
    'Full portal access',
    'AI Location Finder',
    '5-module comprehensive squat course',
    'Interactive Build Journey roadmap',
    'Squat Cost Calculator',
    '100+ vetted resources & templates',
    'Vetted supplier directory',
    'Private clinical owner community'
  ];

  return (
    <section
      id="pricing"
      className="py-24 px-6 bg-[#FAF7F2] scroll-mt-12"
      data-purpose="simple-pricing"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="inline-block px-3 py-1 bg-[#F3EDE2] border border-[#E8CA82]/60 rounded-full text-[10px] font-bold text-[#A4741B] uppercase tracking-wider">
            SIMPLE PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Everything included.<br />
            <span className="text-[#C58F28]">One simple price.</span>
          </h2>
        </div>

        {/* Master Pricing Card with Mockup Inside */}
        <div className="max-w-5xl mx-auto bg-[#121212] border-2 border-[#C58F28] rounded-3xl p-6 sm:p-10 shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Pricing Left */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#DFB04E] font-bold">Price</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">£19.99</span>
                  <span className="text-xs text-neutral-400">/ month</span>
                </div>
                <p className="text-xs text-neutral-300 mt-2 font-medium">
                  Everything inside Dream Squat is included from day one.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-2 pt-2 border-t border-neutral-800">
                <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold mb-3">
                  Benefits
                </p>
                <div className="space-y-2 text-xs text-neutral-200">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#DFB04E] font-bold">✔</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[11px] text-neutral-400 space-y-1">
                <p>No hidden fees.</p>
                <p>No complicated packages.</p>
                <p>No premium tier hiding the good stuff.</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onJoinClick}
                  id="pricing-checkout-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#C58F28] hover:bg-[#b07e20] text-white text-xs font-bold rounded-lg transition-all shadow-md active:scale-98 cursor-pointer gap-2"
                >
                  <span>Start for £19.99/month</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-[10px] text-neutral-400 mt-2">
                  Cancel anytime. No contract. Instant access.
                </p>
              </div>
            </div>

            {/* Pricing Right: Nested Portal UI Snapshot */}
            <div className="lg:col-span-6 bg-[#1a1a1a] rounded-2xl p-4 border border-neutral-800">
              <div className="bg-[#242424] rounded-xl p-4 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-neutral-200">Platform Overview</span>
                  <span className="text-[#DFB04E] text-[10px] font-mono">Live Access</span>
                </div>

                <div className="bg-[#181818] p-4 rounded-lg border border-neutral-700/50 space-y-2">
                  <div className="text-[11px] font-semibold text-neutral-200">
                    Practice Readiness Score
                  </div>
                  <div className="w-full bg-neutral-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#C58F28] h-full w-3/4 rounded-full transition-all duration-1000"></div>
                  </div>
                  <div className="flex justify-between text-[9px] text-neutral-400">
                    <span>Phase 3 of 5</span>
                    <span>75% Complete</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
                  <div className="bg-[#1c1c1c] p-2.5 rounded border border-neutral-700/40">
                    <span className="text-neutral-400 block text-[9px]">Locations Analyzed</span>
                    <span className="text-sm font-bold text-[#DFB04E]">{locationsCount}</span>
                  </div>
                  <div className="bg-[#1c1c1c] p-2.5 rounded border border-neutral-700/40">
                    <span className="text-neutral-400 block text-[9px]">Suppliers Saved</span>
                    <span className="text-sm font-bold text-[#DFB04E]">{suppliersCount}</span>
                  </div>
                </div>

                {/* Quick Interactive preview inside snapshot */}
                <div className="bg-[#181818] p-3 rounded-lg border border-neutral-700/40 text-[10px] space-y-2">
                  <div className="flex items-center justify-between text-neutral-300">
                    <span className="text-[#DFB04E]">● Live Readiness Checklist</span>
                    <span className="text-[9px] text-neutral-400">Active</span>
                  </div>
                  <p className="text-[10px] text-neutral-400">
                    CQC interview prep module ready for download. Site survey template applied to Hampstead location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
