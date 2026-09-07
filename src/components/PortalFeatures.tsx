import React, { useState } from 'react';
import { Check, ArrowRight, Play, Calculator, FileText, Users, Award, MapPin } from 'lucide-react';
import { COURSE_MODULES, ROADMAP_STEPS, SUPPLIERS } from '../data/mockData';

interface PortalFeaturesProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenChecklistModal: () => void;
}

export const PortalFeatures: React.FC<PortalFeaturesProps> = ({
  activeTab,
  setActiveTab,
  onOpenChecklistModal
}) => {
  // Mini interactive state for Cost Calculator tab
  const [surgeryCount, setSurgeryCount] = useState<number>(2);
  const [finishLevel, setFinishLevel] = useState<'standard' | 'premium' | 'luxury'>('premium');

  // Mini cost calculations
  const fitoutCost = surgeryCount * (finishLevel === 'standard' ? 45000 : finishLevel === 'premium' ? 62000 : 85000);
  const equipCost = surgeryCount * (finishLevel === 'standard' ? 32000 : finishLevel === 'premium' ? 48000 : 70000);
  const complianceLegal = 18500;
  const workingCapital = 25000;
  const contingency = Math.round((fitoutCost + equipCost) * 0.08);
  const totalCapex = fitoutCost + equipCost + complianceLegal + workingCapital + contingency;

  const tabs = [
    { id: 'AI Location Finder', label: '📍 AI Location Finder' },
    { id: 'Courses', label: 'Courses' },
    { id: 'My Build Journey', label: 'My Build Journey' },
    { id: 'Cost Calculator', label: 'Cost Calculator' },
    { id: 'Resources', label: 'Resources' },
    { id: 'Supplier Vetting', label: 'Supplier Vetting' },
    { id: 'Community', label: 'Community' }
  ];

  return (
    <section
      id="portal-features-section"
      className="py-20 px-6 bg-[#FAF7F2] border-t border-black/5 scroll-mt-16"
      data-purpose="features-showcase"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#A4741B]">
            ONE PORTAL, EVERYTHING YOU NEED.
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            From "Where do I start?" to <span className="text-[#C58F28]">"We're open."</span>
          </h2>
          <p className="text-xs text-neutral-600">
            Dream Squat brings the tools, education, resources and support you need to build your practice{' '}
            <strong className="text-neutral-800">all in one place.</strong>
          </p>
        </div>

        {/* Horizontal Tab Pill Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs rounded-lg transition-all cursor-pointer font-medium ${
                  isActive
                    ? 'bg-[#121212] text-white font-semibold shadow-sm ring-1 ring-black/10'
                    : 'bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="max-w-6xl mx-auto pt-4">
          {/* TAB 1: AI Location Finder (Exact Reference View) */}
          {activeTab === 'AI Location Finder' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-in fade-in duration-300">
              {/* Description Card (Gold) */}
              <div className="lg:col-span-5 bg-[#C58F28] text-white rounded-2xl p-8 flex flex-col justify-between shadow-lg">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-0.5 bg-black/20 text-amber-100 text-[10px] font-bold uppercase rounded">
                    AI LOCATION FINDER
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                    Find the right location before you commit.
                  </h3>
                  <p className="text-xs text-amber-50 leading-relaxed pt-2">
                    Dream Squat analyses local demographics, competition, NHS capacity, deprivation data and
                    growth signals then uses AI to help you understand whether the location is worth pursuing
                    and whether a private or mixed model makes sense.
                  </p>
                </div>

                <div className="pt-8 space-y-2 text-xs font-medium text-amber-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>Postcode search</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>Map analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>AI analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    <span>Recommendation score</span>
                  </div>
                </div>
              </div>

              {/* Visual Showcase Card */}
              <div className="lg:col-span-7 bg-neutral-900 rounded-2xl overflow-hidden shadow-xl relative min-h-[380px]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8aHK1zYIpViMUKhj3ZXyidHQN0rFIpu8SMagSeo0TeSj00r4wx9xunKCSArqAL0fY_SeUccNuzKn8OMmHUEIKvXaByT4jcxqlAtqoFFo_uRM2VpahonHtjrOxZm-MDZIiM_ZZmENPz8cXKPJNG8z-iQ8DkO7Oc8qBgQvxfwtohdyc-d02F2-BH4Eev2mJlGSnwozfdNwxGVlvy6GRC33QGvItDfrRHv3pQdgIPmIqzH5ispB0G3KQyg"
                  alt="AI Location Finder Visualizer"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-black/80 backdrop-blur-md border border-neutral-700 p-4 rounded-xl text-white max-w-sm">
                    <div className="flex items-center gap-2 text-[#DFB04E] text-xs font-bold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Postcode Heatmap: High Demand</span>
                    </div>
                    <p className="text-[11px] text-neutral-300">
                      Target area demonstrates 3.2x deficit in private dental chairs per 10k adults.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Courses */}
          {activeTab === 'Courses' && (
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 animate-in fade-in">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-neutral-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">5-Module Squat Masterclass Series</h3>
                  <p className="text-xs text-neutral-500">Over 16 hours of clinical owner curriculum with downloadable action worksheets.</p>
                </div>
                <span className="text-xs font-semibold text-[#A4741B] bg-[#F8F4EC] border border-[#E8CA82]/50 px-3 py-1 rounded-full">
                  5 Modules • 50 Video Lessons
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {COURSE_MODULES.map((mod) => (
                  <div key={mod.number} className="bg-[#FAF7F2] border border-neutral-200/80 rounded-xl p-4 flex flex-col justify-between hover:border-[#C58F28] transition-colors">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#A4741B]">
                        <span>MODULE {mod.number}</span>
                        <span className="text-neutral-500 font-normal">{mod.duration}</span>
                      </div>
                      <h4 className="font-bold text-sm text-neutral-900">{mod.title}</h4>
                      <p className="text-[11px] text-neutral-600 leading-relaxed">{mod.summary}</p>
                    </div>
                    <div className="pt-4 flex items-center justify-between text-xs">
                      <span className="text-neutral-500 text-[10px]">{mod.lessons} Lessons</span>
                      <button
                        onClick={onOpenChecklistModal}
                        className="text-[#A4741B] font-semibold text-[11px] flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        Preview Module
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: My Build Journey */}
          {activeTab === 'My Build Journey' && (
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 animate-in fade-in">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-neutral-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">Interactive Build Journey Roadmap</h3>
                  <p className="text-xs text-neutral-500">Every single milestone in exact chronological order from Day 1 to Opening Day.</p>
                </div>
                <button
                  onClick={onOpenChecklistModal}
                  className="bg-[#C58F28] text-white text-xs font-semibold px-4 py-1.5 rounded-md hover:bg-[#A4741B] transition cursor-pointer"
                >
                  Download Master PDF
                </button>
              </div>

              <div className="space-y-4">
                {ROADMAP_STEPS.map((step) => (
                  <div
                    key={step.phase}
                    className={`border rounded-xl p-4 transition-all ${
                      step.completed ? 'bg-[#FBF8F3] border-[#E8CA82]' : 'bg-white border-neutral-200'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            step.completed ? 'bg-emerald-600 text-white' : 'bg-neutral-200 text-neutral-700'
                          }`}
                        >
                          {step.completed ? '✓' : step.phase}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#A4741B] block">
                            {step.phaseName} ({step.timeline})
                          </span>
                          <h4 className="font-bold text-sm text-neutral-900">{step.title}</h4>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full self-start sm:self-auto ${
                          step.completed ? 'bg-emerald-100 text-emerald-800' : 'bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        {step.completed ? 'Milestone Complete' : 'In Progress / Upcoming'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-2 border-t border-neutral-100">
                      {step.tasks.map((task, tidx) => (
                        <div key={tidx} className="flex items-start gap-2 text-xs text-neutral-700">
                          <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${step.completed ? 'text-emerald-600' : 'text-neutral-400'}`} />
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Cost Calculator */}
          {activeTab === 'Cost Calculator' && (
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 animate-in fade-in">
              <div className="border-b border-neutral-100 pb-4">
                <h3 className="text-xl font-bold text-neutral-900">Squat Dental Practice Capex Estimator</h3>
                <p className="text-xs text-neutral-500">Benchmark your fit-out, dental equipment, legal, and operational working capital.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Controls */}
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <label className="text-xs font-bold text-neutral-800 block mb-2">
                      Number of Dental Surgeries (Chairs)
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((chairs) => (
                        <button
                          key={chairs}
                          onClick={() => setSurgeryCount(chairs)}
                          className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                            surgeryCount === chairs
                              ? 'bg-[#121212] text-white border-black shadow-xs'
                              : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                          }`}
                        >
                          {chairs} {chairs === 1 ? 'Surgery' : 'Surgeries'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-800 block mb-2">
                      Finish Standard &amp; Spec
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['standard', 'premium', 'luxury'] as const).map((lvl) => (
                        <button
                          key={lvl}
                          onClick={() => setFinishLevel(lvl)}
                          className={`py-2 text-xs font-semibold capitalize rounded-lg border transition-all cursor-pointer ${
                            finishLevel === lvl
                              ? 'bg-[#C58F28] text-white border-[#C58F28] shadow-xs'
                              : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#FAF7F2] p-4 rounded-xl border border-neutral-200 text-xs space-y-2">
                    <p className="font-bold text-neutral-900">Expert Squat Tip from Dr. Saba Arif:</p>
                    <p className="text-neutral-600 leading-relaxed text-[11px]">
                      "Always plumb and lead-line 2 to 3 surgery rooms on day one, even if you only install 1 chair initially. Doing secondary fit-out while open for patients creates dust and cancels appointments."
                    </p>
                  </div>
                </div>

                {/* Calculation breakdown */}
                <div className="lg:col-span-6 bg-[#1a1a1a] text-white rounded-xl p-6 space-y-4">
                  <div className="flex justify-between items-baseline border-b border-neutral-800 pb-3">
                    <span className="text-xs text-neutral-400 font-medium">Estimated Total Capital Required</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#DFB04E]">
                      £{totalCapex.toLocaleString()}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-neutral-300">
                      <span>Architectural &amp; HTM 01-05 Fit-Out ({surgeryCount} rooms)</span>
                      <span className="font-semibold text-white">£{fitoutCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Chairs, Compressor, Suction &amp; Digital Imaging</span>
                      <span className="font-semibold text-white">£{equipCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Legal, Lease Negotiation &amp; CQC Application</span>
                      <span className="font-semibold text-white">£{complianceLegal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Pre-Opening Working Capital (Staffing buffer)</span>
                      <span className="font-semibold text-white">£{workingCapital.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-neutral-300">
                      <span>Contingency Buffer (8%)</span>
                      <span className="font-semibold text-white">£{contingency.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-800 flex justify-between items-center text-[10px] text-neutral-400">
                    <span>90% of equipment &amp; fit-out can be funded via asset finance.</span>
                    <span className="text-[#DFB04E] font-semibold">Tier 1 Lenders inside DS</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Resources */}
          {activeTab === 'Resources' && (
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 animate-in fade-in">
              <div className="border-b border-neutral-100 pb-4">
                <h3 className="text-xl font-bold text-neutral-900">100+ Downloadable SOPs, Policies &amp; Spreadsheets</h3>
                <p className="text-xs text-neutral-500">Battle-tested templates that passed real CQC inspections and secured Tier 1 bank funding.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'CQC Registered Manager Audit Pack', type: 'Word / PDF', desc: '85 statutory health & safety, infection control, and fire safety risk assessments.' },
                  { title: '5-Year Squat Bank Loan Financial Forecast', type: 'Excel Spreadsheet', desc: 'Pre-formatted cash flow, balance sheet, and EBITDA projections favored by lenders.' },
                  { title: 'Dental Fit-Out Tender & Snagging Protocol', type: 'Checklist', desc: 'Protect yourself with milestone release schedules and liquidated defect clauses.' },
                  { title: 'Principal & Associate Contract Templates', type: 'Legal Agreement', desc: 'BDA-compliant agreements drafted specifically for high-performing private squat clinics.' }
                ].map((res, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-neutral-200 bg-[#FAF7F2] flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#C58F28] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-xs text-neutral-900">{res.title}</h4>
                        <span className="text-[9px] bg-neutral-200 text-neutral-700 px-1.5 py-0.5 rounded font-mono">{res.type}</span>
                      </div>
                      <p className="text-[11px] text-neutral-600 mt-1">{res.desc}</p>
                      <button
                        onClick={onOpenChecklistModal}
                        className="text-[10px] font-bold text-[#A4741B] hover:underline mt-2 inline-block cursor-pointer"
                      >
                        Download Template →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: Supplier Vetting */}
          {activeTab === 'Supplier Vetting' && (
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 animate-in fade-in">
              <div className="border-b border-neutral-100 pb-4">
                <h3 className="text-xl font-bold text-neutral-900">Vetted Supplier Directory</h3>
                <p className="text-xs text-neutral-500">Never pay retail or risk hiring an unqualified contractor who has never built a decon room.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SUPPLIERS.map((sup) => (
                  <div key={sup.id} className="p-4 rounded-xl border border-neutral-200 bg-[#FAF7F2] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{sup.icon}</span>
                      <span className="text-[10px] bg-[#E8CA82]/30 text-[#A4741B] px-2 py-0.5 rounded font-semibold border border-[#E8CA82]/50">
                        {sup.tier}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-neutral-900">{sup.name} ({sup.sub})</h4>
                    <p className="text-[11px] text-neutral-600 leading-snug">{sup.description}</p>
                    <div className="text-[10px] text-emerald-800 bg-emerald-50 p-2 rounded font-medium border border-emerald-100">
                      ★ {sup.perks}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: Community */}
          {activeTab === 'Community' && (
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 animate-in fade-in">
              <div className="border-b border-neutral-100 pb-4">
                <h3 className="text-xl font-bold text-neutral-900">Private Clinical Owner Community</h3>
                <p className="text-xs text-neutral-500">Connect with dentists who have already opened their doors or are currently in build.</p>
              </div>

              <div className="space-y-3">
                {[
                  { author: 'Dr. Michael Chen (BDS)', time: '2 hours ago', title: 'Landlord asking for personal guarantee on 10-year lease - how did you negotiate this?', replies: 14, tags: ['Legal', 'Lease'] },
                  { author: 'Dr. Rachel Hughes', time: 'Yesterday', title: 'HTM 01-05 Decontamination layout passed first inspection! Here is what the inspector focused on:', replies: 28, tags: ['CQC', 'Compliance'] },
                  { author: 'Dr. Tariq Mahmood', time: '3 days ago', title: 'Cost per acquisition on Google Ads for private Invisalign cases in Manchester', replies: 19, tags: ['Marketing'] }
                ].map((post, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-neutral-200 bg-[#FAF7F2] flex items-center justify-between hover:border-[#C58F28] transition-colors cursor-pointer" onClick={onOpenChecklistModal}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                        <span className="font-semibold text-neutral-800">{post.author}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                        {post.tags.map((t, i) => (
                          <span key={i} className="bg-neutral-200/80 text-neutral-700 px-1.5 py-0.2 rounded text-[9px]">{t}</span>
                        ))}
                      </div>
                      <h4 className="text-xs font-bold text-neutral-900">{post.title}</h4>
                    </div>
                    <span className="text-xs font-semibold text-[#A4741B] bg-white border border-neutral-200 px-2.5 py-1 rounded-md shrink-0">
                      {post.replies} replies
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
