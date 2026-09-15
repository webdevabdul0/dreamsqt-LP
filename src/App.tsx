/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useGsapAnimations } from './hooks/useGsapAnimations';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { DashboardPreview } from './components/DashboardPreview';
import { FounderSection } from './components/FounderSection';
import { PortalFeatures } from './components/PortalFeatures';
import { PricingSection } from './components/PricingSection';
import { RiskSection } from './components/RiskSection';
import { StopSearching } from './components/StopSearching';
import { BannerCTA } from './components/BannerCTA';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

export default function App() {
  useSmoothScroll();
  useGsapAnimations();

  const [activeFeatureTab, setActiveFeatureTab] = useState('AI Location Finder');
  const [activeModal, setActiveModal] = useState<
    'calculator' | 'event' | 'resources' | 'blogs' | 'contact' | 'login' | 'checklist' | null
  >(null);

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortal = () => {
    const el = document.getElementById('portal-features-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFeatureTabSelect = (tab: string) => {
    setActiveFeatureTab(tab);
    scrollToPortal();
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E1E1E] flex flex-col font-sans selection:bg-[#C58F28] selection:text-white">
      {/* 1. Top Utility Contact Bar */}
      <TopBar onContactClick={() => setActiveModal('contact')} />

      {/* 2. Main Navigation Header */}
      <Header
        onOpenCalculator={() => setActiveModal('calculator')}
        onOpenEvent={() => setActiveModal('event')}
        onOpenResources={() => setActiveModal('resources')}
        onOpenBlogs={() => setActiveModal('blogs')}
        onOpenContact={() => setActiveModal('contact')}
        onOpenLogin={() => setActiveModal('login')}
        onScrollToPortal={scrollToPortal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero */}
        <div data-hero>
          <Hero onJoinClick={scrollToPricing} />
        </div>

        {/* 4. Problem */}
        <div data-animate>
          <ProblemSection />
        </div>

        {/* 5. Dashboard */}
        <div data-animate>
          <DashboardPreview
            onSelectFeatureTab={handleFeatureTabSelect}
            onOpenChecklistModal={() => setActiveModal('checklist')}
          />
        </div>

        {/* 6. Founder */}
        <div data-animate>
          <FounderSection onExplorePortal={scrollToPortal} />
        </div>

        {/* 7. Portal Features */}
        <div data-animate>
          <PortalFeatures
            activeTab={activeFeatureTab}
            setActiveTab={setActiveFeatureTab}
          />
        </div>

        {/* 8. Pricing */}
        <div data-animate>
          <PricingSection onJoinClick={() => setActiveModal('login')} />
        </div>

        {/* 9. Risk */}
        <div data-animate>
          <RiskSection />
        </div>

        {/* 10. Banner CTA */}
        <div data-animate>
          <BannerCTA onJoinClick={() => setActiveModal('login')} />
        </div>

        {/* 11. Stop Searching */}
        <div data-animate>
          <StopSearching />
        </div>
      </main>

      {/* 12. Site Footer with Newsletter and Watermark */}
      <Footer
        onOpenCalculator={() => setActiveModal('calculator')}
        onOpenEvent={() => setActiveModal('event')}
        onOpenResources={() => setActiveModal('resources')}
        onOpenBlogs={() => setActiveModal('blogs')}
        onOpenContact={() => setActiveModal('contact')}
        onScrollToTop={scrollToTop}
      />

      {/* 13. Interactive Dialog Modals */}
      <Modals
        modalType={activeModal}
        onClose={() => setActiveModal(null)}
        onSelectFeatureTab={handleFeatureTabSelect}
      />
    </div>
  );
}

