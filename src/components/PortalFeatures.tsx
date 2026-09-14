import React from 'react';
import { GradientPill } from './GradientPill';
import { FeatureTabCard } from './FeatureTabCard';

const ICON_AI = '/icon-ai.svg';
const ICON_COURSES = '/icon-courses.svg';
const ICON_JOURNEY = '/icon-journey.svg';
const ICON_CALC = '/icon-calc.svg';
const ICON_RESOURCES = '/icon-resources.svg';
const ICON_VETTING = '/icon-vetting.svg';
const ICON_COMMUNITY = '/icon-community.svg';

interface PortalFeaturesProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const PortalFeatures: React.FC<PortalFeaturesProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { id: 'AI Location Finder', label: 'AI Location Finder', iconSrc: ICON_AI },
    { id: 'Courses', label: 'Courses', iconSrc: ICON_COURSES },
    { id: 'My Build Journey', label: 'My Build Journey', iconSrc: ICON_JOURNEY },
    { id: 'Cost Calculator', label: 'Cost Calculator', iconSrc: ICON_CALC },
    { id: 'Resources', label: 'Resources', iconSrc: ICON_RESOURCES },
    { id: 'Supplier Vetting', label: 'Supplier Vetting', iconSrc: ICON_VETTING },
    { id: 'Community', label: 'Community', iconSrc: ICON_COMMUNITY },
  ];

  return (
    <section
      id="portal-features-section"
      className="py-20 px-6 scroll-mt-16"
      style={{ background: '#FFF0D1' }}
      data-purpose="features-showcase"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-5">
          <GradientPill>ONE PORTAL. EVERYTHING YOU NEED.</GradientPill>
          <h2
            className="leading-tight"
            style={{
              fontFamily: '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '60px',
              fontWeight: 700,
              color: '#131313',
            }}
          >
            From "Where do I start?"<br />to "<span style={{ color: '#C58F28' }}>We're open.</span>"
          </h2>
          <p style={{ color: '#131313', fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>
            Dream Squat brings the tools, education, resources and support you need to build your practice{' '}
            <strong>all in one place.</strong>
          </p>
        </div>

        {/* Horizontal Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-lg transition-all cursor-pointer font-medium"
                style={
                  isActive
                    ? { background: '#121212', color: '#fff', border: '1px solid transparent' }
                    : { background: 'transparent', color: '#131313', border: '1px solid #925E02' }
                }
              >
                <img src={tab.iconSrc} alt="" width={17} height={17} style={{ filter: isActive ? 'brightness(0) invert(1)' : 'brightness(0)' }} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display — full width to match max-w-7xl container */}
        <div>
          {/* TAB 1: AI Location Finder */}
          {activeTab === 'AI Location Finder' && (
            <FeatureTabCard
              label="AI LOCATION FINDER"
              heading="Find the right location before you commit."
              body={
                <div className="space-y-3">
                  <p>Dream Squat analyses local demographics, competition, NHS capacity, deprivation data and growth signals then uses AI to help you understand whether the location is worth pursuing and whether a private or mixed model makes sense.</p>
                  <div className="flex gap-6 pt-1">
                    <div className="space-y-2 text-sm opacity-80">
                      {['01','02','03','04'].map(n => <p key={n}>{n}</p>)}
                    </div>
                    <div className="space-y-2 text-sm">
                      {['Postcode search','Map analysis','AI viability score','Recommendation'].map(i => <p key={i}>{i}</p>)}
                    </div>
                  </div>
                </div>
              }
              imageSrc="/portal-ai-location.png"
              imageAlt="AI Location Finder — city map with glowing location pin"
              cardBg="#7B5214"
            />
          )}

          {/* TAB 2: Courses */}
          {activeTab === 'Courses' && (
            <FeatureTabCard
              label="5-MODULE COURSE"
              heading="A clear roadmap from zero to open."
              body={
                <div className="space-y-3">
                  <p>Five practical modules, filmed by Saba and built around the exact framework she uses when mentoring dentists.</p>
                  <p>Short, focused lessons. Real examples. Real case studies. No unnecessary theory.</p>
                  <p style={{ fontWeight: 700 }}>The 5 Modules</p>
                  <div className="flex gap-5">
                    <div className="space-y-1 opacity-70">
                      {['01','02','03','04','05'].map(n => <p key={n}>{n}</p>)}
                    </div>
                    <div className="space-y-1">
                      {['Finding the Right Location','Business Planning & Fundamentals','CQC Registration','Fit-Out & Equipment','Social Media & Marketing'].map(i => <p key={i}>{i}</p>)}
                    </div>
                  </div>
                </div>
              }
              footer="Learn what matters. Skip what doesn't."
              imageSrc="/portal-courses.png"
              imageAlt="Courses — 5-module squat masterclass"
              cardBg="#7B5214"
            />
          )}

          {/* TAB 3: My Build Journey */}
          {activeTab === 'My Build Journey' && (
            <FeatureTabCard
              label="BUILD JOURNEY"
              heading="Build your practice. Document the journey."
              body={
                <div className="space-y-3">
                  <p>Your squat isn't just a project. It's something you'll want to remember.</p>
                  <p>The Build Journey lets you track milestones, record decisions, manage your budget and document your progress from day one.</p>
                </div>
              }
              footer="One day, you'll look back and see exactly how you built something from nothing."
              imageSrc="/portal-journey.png"
              imageAlt="My Build Journey — practice build roadmap"
              cardBg="#7B5214"
            />
          )}

          {/* TAB 4: Cost Calculator */}
          {activeTab === 'Cost Calculator' && (
            <FeatureTabCard
              label="COST CALCULATOR"
              heading="Know your numbers before you commit."
              body={
                <div className="space-y-3">
                  <p>Model your startup costs, revenue projections and break-even point based on your practice size, location and fee structure.</p>
                </div>
              }
              footer="Make the numbers work before you spend the money."
              imageSrc="/portal-calc.png"
              imageAlt="Cost Calculator — startup cost estimator"
              cardBg="#7B5214"
            />
          )}

          {/* TAB 5: Resources */}
          {activeTab === 'Resources' && (
            <FeatureTabCard
              label="RESOURCE LIBRARY"
              heading="Stop searching. Start using."
              body={
                <div className="space-y-3">
                  <p>Get instant access to 100+ professionally prepared resources designed specifically for squat practice owners.</p>
                  <p style={{ fontWeight: 700 }}>Resource examples</p>
                  <ul className="space-y-1 list-disc list-inside">
                    {['Lease negotiation checklists','CQC registration timelines','HTM 01-05 guides','Business plan templates','Supplier briefing documents','Equipment specifications','Practice setup checklists'].map(i => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              }
              footer="Everything you need. Ready when you need it."
              imageSrc="/portal-resources.png"
              imageAlt="Resource Library — 100+ templates and guides"
              cardBg="#7B5214"
            />
          )}

          {/* TAB 6: Supplier Vetting */}
          {activeTab === 'Supplier Vetting' && (
            <FeatureTabCard
              label="VETTED SUPPLIERS"
              heading="Find people you can actually trust."
              body={
                <div className="space-y-3">
                  <p>Skip the cold searches and endless supplier comparisons.</p>
                  <p>Discover fit-out companies, equipment suppliers, finance providers, architects and compliance specialists who have been reviewed and used by real squat practice owners.</p>
                </div>
              }
              footer="Less searching. Fewer wrong turns. Better decisions."
              imageSrc="/portal-vetting.png"
              imageAlt="Vetted Supplier Directory"
              cardBg="#7B5214"
            />
          )}

          {/* TAB 7: Community */}
          {activeTab === 'Community' && (
            <FeatureTabCard
              label="COMMUNITY"
              heading="You don't have to build your practice alone."
              body={
                <div className="space-y-3">
                  <p>Join a private community of dentists at every stage of the squat journey.</p>
                  <p>Connect with people who have already opened their practices, dentists currently building theirs, and others who are standing exactly where you are today.</p>
                </div>
              }
              footer="Ask questions. Share progress. Learn from people who've done it."
              imageSrc="/portal-community.png"
              imageAlt="Community — private clinical owner community"
              cardBg="#7B5214"
            />
          )}
        </div>
      </div>
    </section>
  );
};
