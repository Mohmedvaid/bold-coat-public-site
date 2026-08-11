export type Pending = 'PENDING';

export const site = {
  name: 'Bold Coat Painters',
  legalName: 'Bold Coat Painters',
  url: 'https://boldcoatpainters.com',
  phone: '+17738997215',
  phoneDisplay: '(773) 899-7215',
  email: 'info@boldcoatpainters.com',
  // TODO(mohmed): confirm exact GBP street address and postal code
  address: {
    streetAddress: '',
    addressLocality: 'Chicago',
    addressRegion: 'IL',
    postalCode: '',
    addressCountry: 'US',
  },
  social: {
    facebook: 'https://www.facebook.com/boldcoatpainters',
    instagram: 'https://www.instagram.com/boldcoatpainters',
    google: 'https://www.google.com/maps',
  },
  gtmId: 'GTM-WHZFVX73',
  warrantyYears: 'PENDING' as Pending,
  aggregateReviews: {
    rating: 'PENDING' as Pending,
    count: 'PENDING' as Pending,
  },
  stats: {
    homes: 'PENDING' as Pending,
    years: 'PENDING' as Pending,
    clients: 'PENDING' as Pending,
  },
  cities: [
    { name: 'Winnetka', slug: 'winnetka' },
    { name: 'Wilmette', slug: 'wilmette' },
    { name: 'Kenilworth', slug: 'kenilworth' },
    { name: 'Glencoe', slug: 'glencoe' },
    { name: 'Northfield', slug: 'northfield' },
    { name: 'Lake Forest', slug: 'lake-forest' },
    { name: 'Highland Park', slug: 'highland-park' },
    { name: 'Northbrook', slug: 'northbrook' },
    { name: 'Glenview', slug: 'glenview' },
    { name: 'Hinsdale', slug: 'hinsdale' },
    { name: 'Oak Brook', slug: 'oak-brook' },
  ],
  services: [
    { name: 'Exterior Painting', href: '/services/exterior-painting' },
    { name: 'Interior Painting', href: '/services/interior-painting' },
    { name: 'Cabinet Painting', href: '/services/cabinet-painting' },
    { name: 'Fence & Deck Staining', href: '/services/fence-deck-staining' },
    { name: 'Commercial Painting', href: '/services/commercial-painting' },
  ],
} as const;

export function isPending(value: unknown): value is Pending {
  return value === 'PENDING';
}

export function telHref(phone: string = site.phone): string {
  return `tel:${phone}`;
}
