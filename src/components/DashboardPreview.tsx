import React, { useState } from 'react';
import { Zap, Compass, KeyRound, Check, ExternalLink } from 'lucide-react';

interface DashboardPreviewProps {
  onSelectFeatureTab: (tabName: string) => void;
  onOpenChecklistModal: () => void;
}

export const DashboardPreview: React.FC<DashboardPreviewProps> = ({
  onSelectFeatureTab,
  onOpenChecklistModal
}) => {
  const [activeSubTab, setActiveSubTab] = useState('Dashboard');
  const [checklistRequested, setChecklistRequested] = useState(false);

  const subNavs = [
    'Dashboard',
    'Courses',
    'Resources',
    'AI Location Finder',
    'Cost Calculator',
    'Community',
    'Supplier Vetting'
  ];

  const quickCards = [
    { icon: '📚', name: 'Courses', sub: 'Structured lessons', tab: 'Courses' },
    { icon: '📍', name: 'AI Location', sub: 'Demographics map', tab: 'AI Location Finder' },
    { icon: '🧮', name: 'Cost Calc', sub: 'Budget forecasting', tab: 'Cost Calculator' },
    { icon: '📁', name: 'Resources', sub: '100+ downloads', tab: 'Resources' },
    { icon: '👥', name: 'Community', sub: 'Connect with peers', tab: 'Community' },
    { icon: '🗺️', name: 'Build Journey', sub: 'Step by step', tab: 'My Build Journey' }
  ];

  const handleQuickClick = (tab: string) => {
    setActiveSubTab(tab);
    onSelectFeatureTab(tab);
  };

  return (
    <section
      id="dashboard-preview-section"
      className="bg-[#0e0e0e] text-white py-24 px-6 relative"
      data-purpose="core-product-preview"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            That's exactly why we built{' '}
            <span className="text-[#DFB04E]">Dream Squat.</span>
          </h2>
        </div>

        {/* Master UI Dashboard Showcase */}
        <div className="max-w-5xl mx-auto bg-[#1a1a1a] rounded-2xl p-3 md:p-4 border border-neutral-800 shadow-2xl">
          {/* Window Controls */}
          <div className="flex items-center justify-between pb-3 px-2 border-b border-neutral-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-[11px] text-neutral-400 font-mono tracking-wide">
              app.dreamsquat.co.uk/dashboard
            </div>
            <div className="w-8"></div>
          </div>

          {/* Dashboard Internal */}
          <div className="p-4 sm:p-6 space-y-6">
            {/* Navigation pill inside dashboard */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-[#262626] p-1.5 rounded-xl text-[11px] overflow-x-auto">
              {subNavs.map((nav) => {
                const isActive = activeSubTab === nav;
                return (
                  <button
                    key={nav}
                    onClick={() => {
                      setActiveSubTab(nav);
                      if (nav !== 'Dashboard') {
                        onSelectFeatureTab(nav);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#C58F28] text-white font-semibold shadow-xs'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-700/50'
                    }`}
                  >
                    {nav}
                  </button>
                );
              })}
            </div>

            {/* Top Grid in UI */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Practice Progress */}
              <div className="md:col-span-8 bg-[#232323] border border-neutral-700/60 rounded-xl p-5 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Circular Gauge */}
                <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      fill="transparent"
                      r="32"
                      stroke="#333333"
                      strokeWidth="6"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      fill="transparent"
                      r="32"
                      stroke="#C58F28"
                      strokeDasharray="200"
                      strokeDashoffset="140"
                      strokeLinecap="round"
                      strokeWidth="6"
                    />
                  </svg>
                  <span className="absolute text-xs font-bold text-amber-100">30%</span>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <h4 className="font-bold text-sm text-neutral-100">
                    Build your Dream Dental Practice
                  </h4>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                    You're making great progress. Your next step is finalizing location and site survey.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
                    <button
                      onClick={() => onSelectFeatureTab('AI Location Finder')}
                      className="bg-[#C58F28] text-neutral-900 font-bold text-[10px] px-3 py-1.5 rounded-md hover:bg-amber-400 transition cursor-pointer"
                    >
                      View Location
                    </button>
                    <button
                      onClick={() => onSelectFeatureTab('Cost Calculator')}
                      className="bg-neutral-800 text-neutral-300 text-[10px] px-3 py-1.5 rounded-md border border-neutral-700 hover:text-white transition cursor-pointer"
                    >
                      The 7000+ plan
                    </button>
                  </div>
                </div>
              </div>

              {/* Next task */}
              <div className="md:col-span-4 bg-[#232323] border border-neutral-700/60 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase font-bold text-[#DFB04E] tracking-wider">
                      Next Step
                    </span>
                    <span className="text-[9px] text-neutral-400">Est: 2 days</span>
                  </div>
                  <h5 className="text-xs font-bold text-neutral-200 mt-2">
                    Book a site survey for your top 2 locations
                  </h5>
                  <p className="text-[10px] text-neutral-400 mt-1 leading-relaxed">
                    Ensure CQC planning permission meets dental practice specs.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setChecklistRequested(true);
                    onOpenChecklistModal();
                  }}
                  className="w-full mt-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-[10px] font-semibold py-2 rounded border border-neutral-600 transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {checklistRequested ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Checklist Sent &amp; Downloaded</span>
                    </>
                  ) : (
                    <span>Request Checklist</span>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Action 6-Card Grid inside mockup */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {quickCards.map((card, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickClick(card.tab)}
                  className="bg-[#242424] hover:bg-[#2c2c2c] p-3 rounded-lg border border-neutral-700/40 text-center transition-all hover:border-[#C58F28]/50 cursor-pointer group"
                >
                  <span className="text-base block mb-1 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </span>
                  <p className="text-[10px] font-bold text-neutral-200 group-hover:text-[#DFB04E] transition-colors">
                    {card.name}
                  </p>
                  <p className="text-[8px] text-neutral-400 mt-0.5">{card.sub}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Feature Pillars Below Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 max-w-5xl mx-auto">
          {/* Pillar 1 */}
          <div className="bg-[#181818] border border-neutral-800 rounded-xl p-6 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C58F28]/10 text-[#DFB04E] flex items-center justify-center font-bold">
              <Zap className="w-4 h-4 text-[#DFB04E]" />
            </div>
            <h3 className="text-sm font-bold text-neutral-100">Information Overload</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Scattered advice and endless Google searches organized into one streamlined flow.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#181818] border border-neutral-800 rounded-xl p-6 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C58F28]/10 text-[#DFB04E] flex items-center justify-center font-bold">
              <Compass className="w-4 h-4 text-[#DFB04E]" />
            </div>
            <h3 className="text-sm font-bold text-neutral-100">Decision Paralysis</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Too many decisions. No clear path forward resolved by curated checklists and exact milestones.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#181818] border border-neutral-800 rounded-xl p-6 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C58F28]/10 text-[#DFB04E] flex items-center justify-center font-bold">
              <KeyRound className="w-4 h-4 text-[#DFB04E]" />
            </div>
            <h3 className="text-sm font-bold text-neutral-100">No Dedicated Roadmap</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Nothing built specifically for dentists starting from scratch—until Dream Squat was engineered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
