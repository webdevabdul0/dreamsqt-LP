import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BannerCTAProps {
  onJoinClick: () => void;
}

export const BannerCTA: React.FC<BannerCTAProps> = ({ onJoinClick }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12" data-purpose="banner-cta">
      <div className="bg-[#C58F28] rounded-3xl p-8 sm:p-12 relative overflow-hidden text-white shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 bg-black/20 text-white/90 rounded-full text-[10px] uppercase font-bold tracking-wider">
              YOUR PRACTICE STARTS HERE
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Your practice is closer than you think.
            </h2>

            <div className="space-y-1.5 text-xs text-white/90">
              <p>✦ The location is out there.</p>
              <p>✦ The patients are waiting.</p>
              <p>✦ And the practice you've imagined is entirely possible.</p>
            </div>

            <p className="text-xs text-white/80 leading-relaxed max-w-lg">
              What you need now is a plan, the right tools and guidance from people who've already walked the path. Dream Squat gives you all three.
            </p>

            <div className="pt-2">
              <button
                onClick={onJoinClick}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-neutral-900 hover:bg-neutral-100 text-xs font-bold rounded-lg transition-all shadow-md group cursor-pointer active:scale-98"
              >
                <span>JOIN FOR £19.99/MONTH</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md aspect-video lg:aspect-[4/3] bg-neutral-800">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr-B7sVjS8i6EAMYmuvbYryoNjYLZzkJ6oq-NKop3nj33kEDqXYZgkmDvUeslDArXPdhZaOvOotYF-4M_umVl7UEybBdc6XqKSGoWTo2a8FVdgnbJUyiE9AYNu1-wFOzeUeLANP2RPUkVlUBsDwkTfe-7phQMvvCTvWSSd5Mbod7Qv0QYrZ3UobKBWErp2DVbL0e133QsHzwfa3XrvuJHniTeQfLC1domjTXEesUmm7uMKBZP_5Q4yvA"
                alt="Squat Dental Practice Interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
