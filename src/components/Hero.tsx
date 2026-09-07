import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Info } from 'lucide-react';
import { SUPPLIERS } from '../data/mockData';
import { SupplierItem } from '../types';

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  const [selectedSupplier, setSelectedSupplier] = useState<SupplierItem>(SUPPLIERS[1]); // Fit-Out default

  return (
    <section
      id="hero-section"
      className="py-14 md:py-22 px-6 relative overflow-hidden bg-[#FAF7F2]"
      data-purpose="hero-section"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Copy */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-block px-3 py-1 bg-[#F3EDE2] border border-[#E8CA82]/40 rounded-full text-[10px] font-bold tracking-wider text-[#A4741B] uppercase shadow-2xs">
            Dream Squat Portal
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] font-bold tracking-tight text-[#111111]">
            <span className="text-[#C58F28]">Everything</span> you need to open your squat dental practice.
          </h1>

          <p className="text-base text-neutral-800 font-medium pt-1">
            One place. One price. No guesswork.
          </p>

          <p className="text-xs text-neutral-600 leading-relaxed max-w-lg">
            You've got the clinical skills. You've got the ambition.
            <br />
            What you've been missing is a clear roadmap to turn your vision into a successful dental practice.
          </p>

          <div className="pt-2">
            <button
              onClick={onJoinClick}
              id="hero-join-btn"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-[#A4741B] hover:bg-[#8e6314] text-white text-xs font-bold tracking-wider transition-all shadow-md group cursor-pointer active:scale-98"
            >
              JOIN FOR £19.99/MONTH
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Column: Hero Dashboard Mockup */}
        <div className="lg:col-span-6">
          <div className="bg-[#181818] rounded-2xl p-2 md:p-3 border border-neutral-700 shadow-2xl relative">
            {/* Window Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-[10px] text-neutral-400 font-mono tracking-wide">
                portal.dreamsquat.co.uk
              </div>
              <div className="w-8"></div>
            </div>

            {/* Inner Light Mockup Interface */}
            <div className="bg-[#FAF8F5] rounded-xl p-5 mt-2 space-y-4">
              <div className="flex justify-between items-center border-b border-neutral-200 pb-3">
                <div className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                  <span>Vetted Suppliers Hub</span>
                  <span className="text-[10px] font-normal text-neutral-500 hidden sm:inline">
                    (Click cards to preview)
                  </span>
                </div>
                <span className="text-[10px] bg-[#E8CA82]/30 text-[#A4741B] px-2 py-0.5 rounded font-semibold border border-[#E8CA82]/50">
                  Tier 1 Partners
                </span>
              </div>

              {/* Mini Cards Grid inside Hero Mockup */}
              <div className="grid grid-cols-3 gap-3">
                {SUPPLIERS.slice(0, 3).map((item) => {
                  const isSelected = selectedSupplier.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedSupplier(item)}
                      className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#FBF6ED] border-[#C58F28] shadow-sm ring-1 ring-[#C58F28]/30 scale-[1.02]'
                          : 'bg-white border-neutral-200/80 hover:border-neutral-300 shadow-2xs'
                      }`}
                    >
                      <div className="w-6 h-6 mx-auto mb-1.5 rounded bg-amber-50 text-[#A4741B] flex items-center justify-center text-xs">
                        {item.icon}
                      </div>
                      <div className="text-[10px] font-bold text-neutral-800">{item.name}</div>
                      <div className="text-[8px] text-neutral-500 mt-0.5">{item.sub}</div>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-3 pt-1">
                {SUPPLIERS.slice(3, 6).map((item) => {
                  const isSelected = selectedSupplier.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedSupplier(item)}
                      className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#FBF6ED] border-[#C58F28] shadow-sm ring-1 ring-[#C58F28]/30 scale-[1.02]'
                          : 'bg-white border-neutral-200/80 hover:border-neutral-300 shadow-2xs'
                      }`}
                    >
                      <div className="w-6 h-6 mx-auto mb-1.5 rounded bg-amber-50 text-[#A4741B] flex items-center justify-center text-xs">
                        {item.icon}
                      </div>
                      <div className="text-[10px] font-bold text-neutral-800">{item.name}</div>
                      <div className="text-[8px] text-neutral-500 mt-0.5">{item.sub}</div>
                    </button>
                  );
                })}
              </div>

              {/* Supplier Detail Peek Card */}
              {selectedSupplier && (
                <div className="mt-3 bg-white border border-[#E8CA82]/80 rounded-lg p-3 text-left transition-all animate-in fade-in">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs">{selectedSupplier.icon}</span>
                      <span className="text-[11px] font-bold text-neutral-900">
                        {selectedSupplier.name} ({selectedSupplier.sub})
                      </span>
                    </div>
                    <span className="text-[9px] text-[#A4741B] font-semibold bg-[#F8F4EC] px-1.5 py-0.5 rounded">
                      Pre-Vetted
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-600 leading-snug">
                    {selectedSupplier.description}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[9px] font-medium text-emerald-800 bg-emerald-50 px-2 py-1 rounded">
                    <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Member Advantage: {selectedSupplier.perks}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
