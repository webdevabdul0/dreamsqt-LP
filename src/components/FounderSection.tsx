import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FounderSectionProps {
  onExplorePortal: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onExplorePortal }) => {
  return (
    <section
      id="founder-section"
      className="py-24 px-6 max-w-7xl mx-auto bg-[#FAF7F2]"
      data-purpose="founder-credibility"
    >
      <div className="space-y-16">
        {/* Founder Bio Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Image Left */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-200 aspect-[4/5] max-h-[500px]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPxm572OhGVLvwhiWPIN83bC2MkdCn_nTLNwafZ1hXBuR5IAi8EmyVq-H-YrCVhEKfu0GXQZFOvjcmyWkyEO5hfQC32Oa1LhJqh-yZ89DppC2EaGGfMs1-hBVCEGDU6A7hMPqtwrOOkfApIlLHBYBEuMQrmS8chwNnEm1U6NqIVxzsFOCo7OjaBWrNeDgDLjp3OnKQlBVpVyYYAV80Vs4NKjrJ5-fI7mfY-g-dOAztPMqd7VoyhripPw"
                alt="Dr. Saba Arif - Founder Dream Squat"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border border-neutral-200 shadow-sm">
                <p className="text-xs font-bold text-neutral-900">Dr. Saba Arif</p>
                <p className="text-[10px] text-[#A4741B] font-semibold">Squat Practice Owner &amp; Founder</p>
              </div>
            </div>
          </div>

          {/* Founder Bio Copy Right */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 bg-[#F3EDE2] border border-[#E8CA82]/60 rounded-full text-[10px] font-bold tracking-wider text-[#A4741B] uppercase">
              BUILT FROM EXPERIENCE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              Built by someone who's done it.{' '}
              <span className="text-[#C58F28]">Three times.</span>
            </h2>

            <p className="text-sm text-neutral-700 leading-relaxed">
              <strong>Dream Squat</strong> was created by <strong>Saba Arif</strong>, a dental clinic owner who has{' '}
              <span className="text-neutral-900 font-semibold underline decoration-[#C58F28] decoration-2 underline-offset-2">
                opened three squat practices from scratch
              </span>
              .
            </p>

            <p className="text-xs text-neutral-600 leading-relaxed">
              She has since mentored 70+ dentists through the process — from finding the right location and securing finance to CQC registration, fit-out, equipment and marketing.
            </p>

            <div className="border-l-2 border-[#C58F28] pl-4 py-1 space-y-1">
              <p className="text-xs font-bold text-neutral-900">This isn't theory. It's experience.</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Saba didn't build Dream Squat from a textbook. She built it from real practices, real decisions, real mistakes and years of helping dentists make the leap.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Card Milestone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {/* Card 1 (Dark Card) */}
          <button
            onClick={onExplorePortal}
            className="bg-[#1a1a1a] hover:bg-[#252525] text-white rounded-xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[160px] shadow-md group text-left transition-all cursor-pointer"
          >
            <div className="space-y-1">
              <p className="text-xs text-neutral-400 leading-relaxed">
                Everything she wished she'd had when she opened her first practice is now inside Dream Squat.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1.5 text-[11px] text-[#DFB04E] font-semibold group-hover:translate-x-1 transition-transform">
              <span>Explore Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Card 2 */}
          <div className="bg-white border border-neutral-200/80 rounded-xl p-6 flex flex-col justify-between min-h-[160px] shadow-2xs hover:shadow-sm transition-shadow">
            <span className="text-4xl font-extrabold text-[#C58F28]">3</span>
            <div>
              <p className="text-xs font-bold text-neutral-900">Practices opened</p>
              <p className="text-[10px] text-neutral-500 mt-0.5">Built &amp; operated from scratch</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-neutral-200/80 rounded-xl p-6 flex flex-col justify-between min-h-[160px] shadow-2xs hover:shadow-sm transition-shadow">
            <span className="text-4xl font-extrabold text-[#C58F28]">70+</span>
            <div>
              <p className="text-xs font-bold text-neutral-900">Dentists mentored</p>
              <p className="text-[10px] text-neutral-500 mt-0.5">Across England, Scotland &amp; Wales</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-neutral-200/80 rounded-xl p-6 flex flex-col justify-between min-h-[160px] shadow-2xs hover:shadow-sm transition-shadow">
            <span className="text-4xl font-extrabold text-[#C58F28]">1</span>
            <div>
              <p className="text-xs font-bold text-neutral-900">Complete roadmap</p>
              <p className="text-[10px] text-neutral-500 mt-0.5">Every step in single sequence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
