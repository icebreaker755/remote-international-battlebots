export interface SlideData {
  id: string;
  partNumber: number;
  title: string;
  subtitle: string;
}

export const SLIDES: SlideData[] = [
  {
    id: 'part-1',
    partNumber: 1,
    title: '+riBB+',
    subtitle: 'Remote international Battle-bot',
  },
  {
    id: 'part-2',
    partNumber: 2,
    title: 'Welcome!',
    subtitle: 'Introduction',
  },
  {
    id: 'part-3',
    partNumber: 3,
    title: 'Creative Technology',
    subtitle: 'Advance (10,000 RPM)',
  },
  {
    id: 'part-4',
    partNumber: 4,
    title: 'Variant of Battle-Bots',
    subtitle: 'Flipper Bot',
  },
  {
    id: 'part-5',
    partNumber: 5,
    title: 'Coming Soon',
    subtitle: 'Contact Us & Discord',
  },
];
