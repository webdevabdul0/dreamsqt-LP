export interface SupplierItem {
  id: string;
  icon: string;
  name: string;
  sub: string;
  highlight?: boolean;
  tier: string;
  description: string;
  perks: string;
}

export interface PostcodeViability {
  postcode: string;
  area: string;
  nhsCapacity: 'Critical Deficit' | 'Moderate Deficit' | 'Balanced' | 'Saturated';
  nhsColor: string;
  privateRatio: 'High Growth' | 'Established Demand' | 'Prime Demographic' | 'Moderate';
  privateColor: string;
  viabilityScore: number;
  dentalChairsDeficit: string;
  competitorCount: number;
  averageIncome: string;
  recommendedModel: '100% Private' | 'Mixed (NHS + Private)' | 'Specialist Referral';
  notes: string;
}

export interface RoadmapStep {
  phase: number;
  phaseName: string;
  title: string;
  timeline: string;
  completed: boolean;
  tasks: string[];
}

export interface CourseModule {
  number: string;
  title: string;
  duration: string;
  lessons: number;
  summary: string;
}
