export type CompanyId = 'sistemas' | 'ti' | 'cloud' | 'automacao';

export interface CompanyPillar {
  title: string;
  desc: string;
  icon: string;
}

export interface CompanyStat {
  value: string;
  label: string;
}

export interface Company {
  id: CompanyId;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  longDescription: string;
  iconName: string;
  themeColor: {
    primary: string;
    border: string;
    glow: string;
    bgAccent: string;
    badgeBg: string;
    badgeText: string;
  };
  keyFeatures: string[];
  pillars: CompanyPillar[];
  technologies: string[];
  deliverables: string[];
  stats: CompanyStat[];
  useCases: {
    clientType: string;
    solution: string;
    impact: string;
  }[];
}

export interface SolutionItem {
  id: string;
  companyId: CompanyId;
  companyName: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  iconName: string;
  isPopular?: boolean;
}

export interface EcosystemFeature {
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface QuoteFormState {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  selectedUnits: CompanyId[];
  projectTimeline: string;
  message: string;
  budgetRange: string;
}
