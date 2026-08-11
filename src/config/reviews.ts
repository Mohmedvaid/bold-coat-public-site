export type ReviewSource = 'google' | 'thumbtack' | 'facebook';

export type Review = {
  quote: string;
  firstName: string;
  town: string;
  service: string;
  rating: number;
  source: ReviewSource;
};
