import { PostcodeViability, SupplierItem, RoadmapStep, CourseModule } from '../types';

export const SUPPLIERS: SupplierItem[] = [
  {
    id: 'finance',
    icon: '🏛️',
    name: 'Finance',
    sub: 'Specialist Lenders',
    tier: 'Tier 1 Partner',
    description: 'Direct relationships with healthcare lending managers who understand dental cash flows and equipment asset financing.',
    perks: 'Exclusive 0.5% interest discount & no pre-approval broker fees.'
  },
  {
    id: 'fitout',
    icon: '📐',
    name: 'Fit-Out',
    sub: 'Certified Dental',
    highlight: true,
    tier: 'Tier 1 Partner',
    description: 'Dental-specific contractors accredited for HTM 01-05 decontamination rooms, lead lining, radiation compliance, and cabinetry.',
    perks: 'Guaranteed turnkey delivery timeline with liquidated penalty clauses.'
  },
  {
    id: 'legal',
    icon: '⚖️',
    name: 'Legal',
    sub: 'CQC & Lease',
    tier: 'Tier 1 Partner',
    description: 'Solicitors specializing in commercial lease negotiation, user classes (Class E), planning permissions, and associate agreements.',
    perks: 'Fixed-fee lease review checklist preventing landlord clawbacks.'
  },
  {
    id: 'compliance',
    icon: '📋',
    name: 'Compliance',
    sub: 'Templates Ready',
    tier: 'Tier 1 Partner',
    description: 'Complete CQC audit bundles, radiation protection advisor (RPA) contracts, and 120+ customizable practice policies.',
    perks: 'First-time CQC Registered Manager pass rate of 98.4%.'
  },
  {
    id: 'it',
    icon: '💻',
    name: 'IT Support',
    sub: 'Hardware & PMS',
    tier: 'Tier 1 Partner',
    description: 'Secure server setup, cloud Practice Management Software (PMS), backup protocols, VoIP telephony, and digital imaging networks.',
    perks: 'Pre-configured dental software bundle with 3 months free support.'
  },
  {
    id: 'marketing',
    icon: '📈',
    name: 'Marketing',
    sub: 'Patient Gen',
    tier: 'Tier 1 Partner',
    description: 'Pre-launch patient acquisition campaigns, Google Maps SEO for dentists, branding packages, and high-converting websites.',
    perks: 'Average 180+ booked private patient appointments before opening day.'
  }
];

export const POSTCODE_DATABASE: Record<string, PostcodeViability> = {
  'NW3 2QG': {
    postcode: 'NW3 2QG',
    area: 'Hampstead, London',
    nhsCapacity: 'Critical Deficit',
    nhsColor: 'text-amber-600',
    privateRatio: 'High Growth',
    privateColor: 'text-emerald-600',
    viabilityScore: 89,
    dentalChairsDeficit: '3.2x deficit in private dental chairs per 10k adults',
    competitorCount: 4,
    averageIncome: '£68,400 / yr',
    recommendedModel: '100% Private',
    notes: 'Exceptional patient willingness-to-pay for cosmetic, Invisalign, and implant services. Commercial footfall near tube station is optimal.'
  },
  'M1 1AE': {
    postcode: 'M1 1AE',
    area: 'Manchester City Centre',
    nhsCapacity: 'Critical Deficit',
    nhsColor: 'text-amber-600',
    privateRatio: 'High Growth',
    privateColor: 'text-emerald-600',
    viabilityScore: 92,
    dentalChairsDeficit: '2.8x deficit in after-hours dental chairs',
    competitorCount: 5,
    averageIncome: '£44,200 / yr',
    recommendedModel: '100% Private',
    notes: 'Young working professionals and corporate clientele. High demand for extended opening hours (7am - 8pm) and digital workflows.'
  },
  'BS1 4DJ': {
    postcode: 'BS1 4DJ',
    area: 'Bristol Harbourside',
    nhsCapacity: 'Moderate Deficit',
    nhsColor: 'text-amber-500',
    privateRatio: 'High Growth',
    privateColor: 'text-emerald-600',
    viabilityScore: 86,
    dentalChairsDeficit: '2.1x deficit in restorative & aesthetic providers',
    competitorCount: 3,
    averageIncome: '£42,000 / yr',
    recommendedModel: '100% Private',
    notes: 'Rapid residential regeneration. Excellent opportunities for a boutique, lifestyle-led squat dental studio.'
  },
  'B1 1AA': {
    postcode: 'B1 1AA',
    area: 'Birmingham Central',
    nhsCapacity: 'Critical Deficit',
    nhsColor: 'text-amber-600',
    privateRatio: 'High Growth',
    privateColor: 'text-emerald-600',
    viabilityScore: 91,
    dentalChairsDeficit: '3.5x deficit in NHS and affordable private access',
    competitorCount: 6,
    averageIncome: '£38,500 / yr',
    recommendedModel: 'Mixed (NHS + Private)',
    notes: 'High volume footfall. A dual-model approach with NHS emergency or minor oral surgery tier alongside private treatments maximizes chair occupancy.'
  },
  'EH1 1YZ': {
    postcode: 'EH1 1YZ',
    area: 'Edinburgh Old Town / Central',
    nhsCapacity: 'Moderate Deficit',
    nhsColor: 'text-amber-500',
    privateRatio: 'Established Demand',
    privateColor: 'text-emerald-600',
    viabilityScore: 88,
    dentalChairsDeficit: '2.4x deficit in general and hygiene capacity',
    competitorCount: 4,
    averageIncome: '£46,100 / yr',
    recommendedModel: '100% Private',
    notes: 'Strong local demographic with high loyalty to independent practitioners over corporate dental chains.'
  },
  'LS1 2HL': {
    postcode: 'LS1 2HL',
    area: 'Leeds Financial Quarter',
    nhsCapacity: 'Critical Deficit',
    nhsColor: 'text-amber-600',
    privateRatio: 'High Growth',
    privateColor: 'text-emerald-600',
    viabilityScore: 87,
    dentalChairsDeficit: '2.9x deficit in private chairs per 10k adults',
    competitorCount: 3,
    averageIncome: '£41,800 / yr',
    recommendedModel: '100% Private',
    notes: 'High daytime office worker density. Membership dental plans (maintenance plans) convert rapidly here.'
  }
};

export const DEFAULT_POSTCODE = POSTCODE_DATABASE['NW3 2QG'];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    phase: 1,
    phaseName: 'Phase 1: Feasibility & Foundation',
    title: 'Vision, Budget & Demographics',
    timeline: 'Month 1 - 2',
    completed: true,
    tasks: [
      'Define clinic ethos: Private boutique vs High-volume mixed',
      'Run demographic analysis via AI Location Finder',
      'Establish personal borrowing capacity & debt service cover',
      'Draft preliminary 3-year cash flow forecast'
    ]
  },
  {
    phase: 2,
    phaseName: 'Phase 2: Property & Funding',
    title: 'Site Acquisition & Specialist Finance',
    timeline: 'Month 3 - 4',
    completed: true,
    tasks: [
      'Site survey checklist for Class E dental suitability',
      'Negotiate Heads of Terms (rent-free fit-out period of 6+ months)',
      'Secure formal asset finance & commercial mortgage/loan terms',
      'Review lease restrictive covenants with specialist solicitor'
    ]
  },
  {
    phase: 3,
    phaseName: 'Phase 3: Design & Fit-Out',
    title: 'Architectural Specs & Build Contractors',
    timeline: 'Month 5 - 7',
    completed: false,
    tasks: [
      'HTM 01-05 Decon room workflow design & clean/dirty zoning',
      'Dental chair plumbing, suction pipework & compressor ducting',
      'Radiation protection advisor (RPA) design review & plan sign-off',
      'Tender contractor quotes with fixed price liquidated damages'
    ]
  },
  {
    phase: 4,
    phaseName: 'Phase 4: CQC & Governance',
    title: 'CQC Registration & Team Recruitment',
    timeline: 'Month 7 - 8',
    completed: false,
    tasks: [
      'Submit CQC Registered Manager application (allow 12-16 weeks)',
      'Recruit lead dental nurse / practice manager and receptionist',
      'Implement 85 standard operating procedures (SOPs) & risk assessments',
      'Install Practice Management Software & digital imaging integration'
    ]
  },
  {
    phase: 5,
    phaseName: 'Phase 5: Launch & Growth',
    title: 'Marketing & First 100 Patients',
    timeline: 'Month 9+',
    completed: false,
    tasks: [
      'Launch Google Local Ads & targeted social booking funnel',
      'Host VIP open evening for local referring medical GPs & influencers',
      'Onboard initial patient waitlist into online booking system',
      'Review chair utilization and monthly break-even metrics'
    ]
  }
];

export const COURSE_MODULES: CourseModule[] = [
  {
    number: '01',
    title: 'The Squat Mindset & Strategic Vision',
    duration: '2.5 hrs',
    lessons: 8,
    summary: 'Moving from an associate mindset to practice CEO. Overcoming fear, understanding equity, and building resilience.'
  },
  {
    number: '02',
    title: 'Demographics, Site Selection & Lease Law',
    duration: '4.0 hrs',
    lessons: 12,
    summary: 'How to scout prime properties, negotiate 6-9 months rent-free periods, and avoid devastating lease traps.'
  },
  {
    number: '03',
    title: 'Dental Specific Fit-Out & Equipment Procurement',
    duration: '3.5 hrs',
    lessons: 10,
    summary: 'HTM 01-05 decon compliance, CBCT/intraoral scanners, chair selection, suction units, and tender management.'
  },
  {
    number: '04',
    title: 'CQC Registration & Flawless Compliance',
    duration: '3.0 hrs',
    lessons: 9,
    summary: 'Step-by-step guidance for passing the CQC Registered Manager interview on your very first submission.'
  },
  {
    number: '05',
    title: 'Patient Acquisition Funnel & Opening Day',
    duration: '3.5 hrs',
    lessons: 11,
    summary: 'Attracting 150+ high-value private patients before you unlock the door using Google local search and community outreach.'
  }
];
