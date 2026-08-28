export type Platform = 'windows' | 'mac' | 'android' | 'ios' | 'chromebook';

export interface Source {
  title: string;
  url: string;
  publisher: string;
  accessedAt: string;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  category: 'antivirus' | 'privacy' | 'network' | 'performance' | 'identity';
  includedIn: string[]; // product slugs
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: 'antivirus' | 'privacy' | 'utility' | 'business';
  description: string;
  shortDescription: string;
  supportedPlatforms: Platform[];
  deviceLimit: string;
  features: string[]; // Feature names / ids
  pros: string[];
  considerations: string[];
  systemRequirements: {
    os: string[];
    ram: string;
    diskSpace: string;
    browser: string[];
  };
  targetAudience: string;
  officialUrl: string;
  supportUrl: string;
  downloadUrl: string;
  lastVerified: string;
  isPopular?: boolean;
}

export interface Step {
  stepNumber: number;
  title: string;
  description: string;
  warningOrNote?: string;
  codeOrKeyLocation?: string;
}

export interface Guide {
  slug: string;
  title: string;
  category: 'getting-started' | 'installation' | 'activation' | 'troubleshooting' | 'uninstallation';
  description: string;
  platform?: Platform;
  readingTime: string;
  publishedDate: string;
  updatedDate: string;
  lastVerified: string;
  steps: Step[];
  prerequisites?: string[];
  commonTroubleshooting?: { title: string; solution: string }[];
  sources: Source[];
  relatedProductSlugs?: string[];
  relatedGuideSlugs?: string[];
}

export interface Article {
  slug: string;
  title: string;
  category: 'cybersecurity' | 'malware' | 'ransomware' | 'phishing' | 'vpn' | 'identity-theft' | 'product-research';
  excerpt: string;
  content: string; // Markdown formatted body
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedDate: string;
  updatedDate: string;
  lastVerified: string;
  readingTime: string;
  sources: Source[];
  relatedArticleSlugs?: string[];
  relatedProductSlugs?: string[];
  isFeatured?: boolean;
}

export interface ComparisonItem {
  featureName: string;
  category: string;
  webrootStatus: 'included' | 'not-included' | 'addon';
  webrootDetails: string;
  competitorStatus: 'included' | 'not-included' | 'addon';
  competitorDetails: string;
}

export interface ComparisonPage {
  slug: string;
  title: string;
  subtitle: string;
  competitorName: string;
  category: 'antivirus' | 'vpn' | 'complete-security';
  overview: string;
  webrootProductSlug: string;
  verdict: string;
  lastVerified: string;
  items: ComparisonItem[];
  sources: Source[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'products' | 'download' | 'installation' | 'activation' | 'troubleshooting' | 'vpn' | 'subscription';
  officialLink?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle?: string;
  options: {
    label: string;
    value: string;
    recommendedProductSlugs: string[];
    description?: string;
  }[];
}

export interface SearchResultItem {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'guide' | 'article' | 'comparison' | 'feature' | 'faq';
  url: string;
  badgeText?: string;
}
