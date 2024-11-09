export interface PopularFeed {
  id: number;
  rank: number;
  username: string;
  images: string[];
  ratings: { value: number; count: number; self: number | null };
}
