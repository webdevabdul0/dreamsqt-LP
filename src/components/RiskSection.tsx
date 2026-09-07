import React from 'react';

export const RiskSection: React.FC = () => {
  return (
    <section
      id="risk-section"
      className="py-20 px-6 max-w-7xl mx-auto bg-[#FAF7F2]"
      data-purpose="risk-contrast-breakdown"
    >
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="inline-block px-3 py-1 bg-[#F3EDE2] border border-[#E8CA82]/60 rounded-full text-[10px] font-bold text-[#A4741B] uppercase tracking-wider">
            LOOK AT THE BIGGER PICTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            £19.99 is small compared to the cost of getting it wrong.
          </h2>
        </div>

        {/* 3 Risk Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Risk 1 */}
          <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:border-[#C58F28]/50 transition-colors">
            <span className="text-3xl font-extrabold text-[#C58F28]">£20,000+</span>
            <p className="text-xs text-neutral-600 mt-4 leading-relaxed">
              One bad lease clause could cost you thousands in unrecoverable outlays.
            </p>
          </div>

          {/* Risk 2 */}
          <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:border-[#C58F28]/50 transition-colors">
            <span className="text-3xl font-extrabold text-[#C58F28]">4 MONTHS</span>
            <p className="text-xs text-neutral-600 mt-4 leading-relaxed">
              A missed CQC deadline could delay your opening while you're still paying rent.
            </p>
          </div>

          {/* Risk 3 */}
          <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:border-[#C58F28]/50 transition-colors">
            <span className="text-3xl font-extrabold text-[#C58F28]">10+ YEARS</span>
            <p className="text-xs text-neutral-600 mt-4 leading-relaxed">
              The wrong location could shape the next decade of your entire clinical career.
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-neutral-500 max-w-lg mx-auto pt-2">
          Dream Squat isn't another monthly expense. It's a smarter way to protect the biggest business decision of your career.
        </p>
      </div>
    </section>
  );
};
