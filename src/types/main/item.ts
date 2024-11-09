export interface PopularFeed {
  id: number;
  rank: number;
  username: string;
  rate: { value: number; count: number };
  selfRate: number;
  feeds: string[];
}
