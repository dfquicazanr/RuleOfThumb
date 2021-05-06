export interface Ruling {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: {
    positive: number;
    negative: number;
  };
  votesPercentages?: {
    positive: number;
    negative: number;
  };
  votesOpinion?: 'positive' | 'negative';
}
