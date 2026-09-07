import React, { useState } from 'react';
import { X, Check, Download, Calendar, Mail, Phone, Lock, ExternalLink, Sparkles } from 'lucide-react';

interface ModalsProps {
  modalType: 'calculator' | 'event' | 'resources' | 'blogs' | 'contact' | 'login' | 'checklist' | null;
  onClose: () => void;
  onSelectFeatureTab?: (tab: string) => void;
}

export const Modals: React.FC<ModalsProps> = ({ modalType, onClose, onSelectFeatureTab }) => {
  // State for login form
  const [loginEmail, setLoginEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State for contact form
  const [contactSent, setContactSent] = useState(false);
  const [eventRsvp, setEventRsvp] = useState(false);

  if (!modalType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#FAF7F2] border border-[#E8CA82]/80 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 text-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-neutral-200 hover:bg-neutral-300 text-neutral-700 transition cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 1. COMPARISON CALCULATOR */}
        {modalType === 'calculator' && (
          <div className="space-y-6">
            <div className="border-b border-neutral-200 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A4741B] block">
                STRATEGIC FINANCIAL ANALYSIS
              </span>
              <h3 className="text-2xl font-bold text-neutral-900">
                Squat vs Buying Existing Practice vs Associate
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Why more forward-thinking dentists are choosing to start from a clean slate rather than paying for outdated goodwill.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-neutral-300 text-neutral-500 font-semibold">
                    <th className="py-2.5 px-3">Metric</th>
                    <th className="py-2.5 px-3 text-[#A4741B] font-bold bg-[#F5EFE4] rounded-t-lg">
                      🌟 Dream Squat Practice
                    </th>
                    <th className="py-2.5 px-3">Buying Existing (Goodwill)</th>
                    <th className="py-2.5 px-3">Staying Associate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-800">
                  <tr>
                    <td className="py-3 px-3 font-semibold text-neutral-900">Upfront Goodwill Cost</td>
                    <td className="py-3 px-3 font-bold text-emerald-700 bg-[#F5EFE4]/50">£0 (Zero premium)</td>
                    <td className="py-3 px-3 text-red-600 font-medium">£300k - £800k+ goodwill</td>
                    <td className="py-3 px-3">£0</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-neutral-900">Equipment &amp; Tech</td>
                    <td className="py-3 px-3 font-bold text-emerald-700 bg-[#F5EFE4]/50">100% Brand New Under Warranty</td>
                    <td className="py-3 px-3 text-neutral-600">Often 8–15 yr old chairs</td>
                    <td className="py-3 px-3 text-neutral-600">Dictated by principal</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-neutral-900">Clinical Brand &amp; Autonomy</td>
                    <td className="py-3 px-3 font-bold text-emerald-700 bg-[#F5EFE4]/50">Complete Freedom &amp; Vision</td>
                    <td className="py-3 px-3 text-neutral-600">Inherited patient expectations</td>
                    <td className="py-3 px-3 text-neutral-600">Limited (35-50% cut)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-neutral-900">Decon &amp; CQC Compliance</td>
                    <td className="py-3 px-3 font-bold text-emerald-700 bg-[#F5EFE4]/50">Modern HTM 01-05 compliant</td>
                    <td className="py-3 px-3 text-amber-700 font-medium">Frequent costly remedial works</td>
                    <td className="py-3 px-3 text-neutral-600">N/A</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-neutral-900">5-Year Equity Value</td>
                    <td className="py-3 px-3 font-bold text-emerald-700 bg-[#F5EFE4]/50">£600k – £1.4M+ Created</td>
                    <td className="py-3 px-3 text-neutral-700">Paying down initial bank loan</td>
                    <td className="py-3 px-3 text-neutral-500">£0 Equity</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#121212] text-white p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs">
                <span className="font-bold text-[#DFB04E] block">Ready to model your own numbers?</span>
                <span className="text-neutral-400">Use the interactive Cost Calculator inside the portal.</span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  if (onSelectFeatureTab) onSelectFeatureTab('Cost Calculator');
                }}
                className="bg-[#C58F28] hover:bg-[#A4741B] text-neutral-900 font-bold px-4 py-2 rounded text-xs transition cursor-pointer whitespace-nowrap"
              >
                Open Cost Calculator →
              </button>
            </div>
          </div>
        )}

        {/* 2. FREE RESOURCES MODAL */}
        {(modalType === 'resources' || modalType === 'checklist') && (
          <div className="space-y-6">
            <div className="border-b border-neutral-200 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A4741B] block">
                COMPLIMENTARY DOWNLOADS
              </span>
              <h3 className="text-2xl font-bold text-neutral-900">
                Free Squat Practice Starter Toolkit
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Curated checklists and templates from Dr. Saba Arif's clinical advisory files.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'CQC Registered Manager 25-Point Checklist', file: 'PDF • 4.2 MB', desc: 'The exact governance and evidence folder layout expected by CQC inspectors for squat applications.' },
                { name: 'Class E Commercial Lease Clauses to Strike Out', file: 'Docx • 1.1 MB', desc: '5 standard landlord lease provisions that can trap dentists with unlimited repair liabilities.' },
                { name: 'Dental Chair & Suction Plant Room Specs', file: 'PDF • 3.8 MB', desc: 'Plumbing schematics, power ratings, and vacuum pipe diameters for dental fit-out trades.' },
                { name: 'Practice Financial Projection Model (Year 1-3)', file: 'Excel • 2.5 MB', desc: 'Cash flow sheet formatted for Barclays, Lloyds, and specialist dental asset lenders.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 p-4 rounded-xl flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-neutral-400 mb-1">
                      <span className="font-mono bg-neutral-100 px-1.5 py-0.5 rounded">{item.file}</span>
                      <span className="text-emerald-600 font-semibold">Free Instant Download</span>
                    </div>
                    <h4 className="font-bold text-xs text-neutral-900">{item.name}</h4>
                    <p className="text-[11px] text-neutral-600 mt-1">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      alert(`Downloading "${item.name}" directly to your device.`);
                    }}
                    className="flex items-center justify-center gap-1.5 bg-[#FAF7F2] hover:bg-[#F3EDE2] text-[#A4741B] border border-[#E8CA82] py-2 rounded text-xs font-semibold transition cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download File</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <p className="text-xs text-neutral-500">
                Need all 100+ templates and the complete video course?{' '}
                <button
                  onClick={() => {
                    onClose();
                    const el = document.getElementById('pricing');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#A4741B] font-bold underline cursor-pointer"
                >
                  Join Dream Squat for £19.99/mo
                </button>
              </p>
            </div>
          </div>
        )}

        {/* 3. EVENT MODAL */}
        {modalType === 'event' && (
          <div className="space-y-6">
            <div className="border-b border-neutral-200 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A4741B] block">
                UPCOMING LIVE MASTERCLASS
              </span>
              <h3 className="text-2xl font-bold text-neutral-900">
                Squat Dental Summit 2025: From Associate to Owner
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                A 1-day live interactive summit in Central London + Live Stream with Dr. Saba Arif.
              </p>
            </div>

            <div className="bg-[#121212] text-white p-6 rounded-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3 text-xs">
                <div className="flex items-center gap-2 text-[#DFB04E] font-semibold">
                  <Calendar className="w-4 h-4" />
                  <span>Saturday, 18th October 2025 • 09:30 - 17:00 GMT</span>
                </div>
                <span className="bg-[#C58F28] text-neutral-900 px-2 py-0.5 rounded text-[10px] font-bold">
                  6 Hours Verifiable CPD
                </span>
              </div>

              <div className="space-y-2 text-xs text-neutral-300">
                <p className="font-semibold text-white">What We Will Cover Live:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Live site selection analysis with our AI engine</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Meeting specialist dental finance lenders in person</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>How to design an HTM 01-05 Decon room on a budget</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Acquiring your first 100 private patients in 30 days</span>
                  </div>
                </div>
              </div>
            </div>

            {eventRsvp ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-center text-xs space-y-1">
                <p className="font-bold">✓ Seat Reserved Successfully!</p>
                <p className="text-neutral-600 text-[11px]">
                  Confirmation and calendar invite sent to your email. Dream Squat members attend for free!
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEventRsvp(true);
                }}
                className="flex flex-col sm:flex-row gap-3 pt-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email to reserve your seat"
                  className="flex-1 bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-[#C58F28]"
                />
                <button
                  type="submit"
                  className="bg-[#C58F28] hover:bg-[#b07e20] text-neutral-900 font-bold px-6 py-2.5 rounded-lg text-xs transition cursor-pointer"
                >
                  Reserve Complimentary Seat
                </button>
              </form>
            )}
          </div>
        )}

        {/* 4. BLOGS MODAL */}
        {modalType === 'blogs' && (
          <div className="space-y-6">
            <div className="border-b border-neutral-200 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A4741B] block">
                CLINICAL OWNER ARTICLES
              </span>
              <h3 className="text-2xl font-bold text-neutral-900">
                Articles &amp; Field Notes by Dr. Saba Arif
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Hard-earned lessons from opening 3 squat clinics across the UK.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'The 3 Critical Lease Traps Landlords Set for Dentists (And How to Evade Them)',
                  date: 'August 28, 2025',
                  readTime: '6 min read',
                  excerpt: 'Why standard commercial leases can force you to pay for existing structural defects, and how to negotiate a full 6 to 9-month rent-free fit-out period before paying a penny in rent.'
                },
                {
                  title: 'Passing Your CQC Registered Manager Interview on the First Attempt',
                  date: 'July 14, 2025',
                  readTime: '8 min read',
                  excerpt: 'The 5 statutory questions every dental inspector asks, plus the exact documents you should place on the desk before they even ask.'
                },
                {
                  title: 'Why Goodwill Multiples are Overpriced: The Case for Starting Squat in 2025',
                  date: 'June 02, 2025',
                  readTime: '10 min read',
                  excerpt: 'Why paying 120% of turnover for a 20-year-old practice with dated chairs is financially irrational when you can build a state-of-the-art studio for half the capital outlay.'
                }
              ].map((article, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 p-5 rounded-xl space-y-2 hover:border-[#C58F28] transition-colors">
                  <div className="flex items-center gap-2 text-[10px] text-neutral-400">
                    <span className="font-semibold text-[#A4741B]">Dr. Saba Arif</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="font-bold text-sm text-neutral-900">{article.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{article.excerpt}</p>
                  <button
                    onClick={() => {
                      alert(`Opening full article: "${article.title}"`);
                    }}
                    className="text-[11px] font-bold text-[#A4741B] hover:underline pt-1 inline-block cursor-pointer"
                  >
                    Read full article →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. CONTACT US MODAL */}
        {modalType === 'contact' && (
          <div className="space-y-6">
            <div className="border-b border-neutral-200 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A4741B] block">
                GET IN TOUCH
              </span>
              <h3 className="text-2xl font-bold text-neutral-900">
                Contact Dr. Saba Arif &amp; The Dream Squat Team
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Have questions about your target location, borrowing capacity, or portal membership?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-neutral-200 flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C58F28] shrink-0" />
                <div>
                  <span className="text-[10px] text-neutral-400 block">Email</span>
                  <span className="font-semibold text-neutral-800">squatteducation@gmail.com</span>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-neutral-200 flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C58F28] shrink-0" />
                <div>
                  <span className="text-[10px] text-neutral-400 block">Telephone</span>
                  <span className="font-semibold text-neutral-800">0800 689 1097</span>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-neutral-200 flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#25D366] text-white flex items-center justify-center text-[9px] font-bold">
                  W
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 block">WhatsApp Us</span>
                  <span className="font-semibold text-neutral-800">07955778714</span>
                </div>
              </div>
            </div>

            {contactSent ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center space-y-2">
                <h4 className="font-bold text-sm">✓ Message Received!</h4>
                <p className="text-xs text-neutral-600">
                  Dr. Saba Arif or a senior practice advisor will review your query and respond within 24 hours.
                </p>
                <button
                  onClick={onClose}
                  className="mt-3 bg-[#A4741B] text-white text-xs px-4 py-2 rounded-lg font-semibold cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSent(true);
                }}
                className="space-y-3 pt-2"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-700 block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Jane Smith"
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-[#C58F28]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@dentalpractice.co.uk"
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-[#C58F28]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-700 block mb-1">Mobile / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="07..."
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-[#C58F28]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-700 block mb-1">Planned Squat Postcode / Area</label>
                    <input
                      type="text"
                      placeholder="e.g. NW3 or Manchester"
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-[#C58F28]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-neutral-700 block mb-1">What is your biggest obstacle right now?</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="e.g. Finding the right commercial site, getting finance approval, understanding CQC requirements..."
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-xs focus:outline-hidden focus:border-[#C58F28]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A4741B] hover:bg-[#8e6314] text-white font-bold py-3 rounded-lg text-xs transition cursor-pointer shadow-md"
                >
                  Send Inquiry to Dr. Saba Arif
                </button>
              </form>
            )}
          </div>
        )}

        {/* 6. LOGIN / PORTAL DEMO MODAL */}
        {modalType === 'login' && (
          <div className="space-y-6">
            <div className="border-b border-neutral-200 pb-4 text-center">
              <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center p-1.5 mx-auto mb-2">
                <div className="w-full h-full border border-[#C58F28] rounded flex items-center justify-center">
                  <span className="text-[#C58F28] font-bold text-base">DS</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-900">
                Log In to Dream Squat Portal
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Access your personalized squat journey, AI location analysis, and vetted supplier directory.
              </p>
            </div>

            {isLoggedIn ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-neutral-900">Welcome Back, Clinician!</h4>
                <p className="text-xs text-neutral-600">
                  Active Member Access Granted: You have full access to all 5 modules, supplier discounts, and AI analyses.
                </p>
                <div className="pt-2 flex justify-center gap-2">
                  <button
                    onClick={() => {
                      onClose();
                      if (onSelectFeatureTab) onSelectFeatureTab('AI Location Finder');
                    }}
                    className="bg-[#C58F28] text-white font-bold px-4 py-2 rounded text-xs transition cursor-pointer"
                  >
                    Go to Portal Dashboard →
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsLoggedIn(true);
                }}
                className="space-y-4 max-w-md mx-auto"
              >
                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="doctor@squatclinic.co.uk"
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-xs focus:outline-hidden focus:border-[#C58F28]"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-semibold text-neutral-700">Password</label>
                    <button
                      type="button"
                      onClick={() => alert('Password reset instructions sent to your email.')}
                      className="text-[10px] text-[#A4741B] hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-xs focus:outline-hidden focus:border-[#C58F28]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#A4741B] hover:bg-[#8e6314] text-white font-bold py-3 rounded-lg text-xs transition cursor-pointer shadow-md"
                  >
                    Log In to Portal
                  </button>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-neutral-500">
                    Not a member yet?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        const el = document.getElementById('pricing');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-[#A4741B] font-bold underline cursor-pointer"
                    >
                      Join for £19.99/month
                    </button>
                  </span>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
