export interface SiteStats {
  alumnaeCount: string;
  floodReliefTotal: string;
  activeCauses: string;
  yearsActive: string;
}

export interface Cause {
  slug: string;
  title: string;
  amountRaised: string;
  percentFunded: number;
  description?: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
}
