export interface CreativeLogo {
  id: string;
  label: string;
  description: string;
  src: string;
}

export const creativeLogos: CreativeLogo[] = [
  {
    id: 'pulse-mark',
    label: 'Pulse Mark',
    description: 'Dynamic frequency mark for live events and DJs',
    src: '/logos/creative/pulse-mark.svg',
  },
  {
    id: 'orbit-star',
    label: 'Orbit Star',
    description: 'Celestial accent for festival and nightlife brands',
    src: '/logos/creative/orbit-star.svg',
  },
  {
    id: 'prism-stack',
    label: 'Prism Stack',
    description: 'Layered geometric system for design studios',
    src: '/logos/creative/prism-stack.svg',
  },
  {
    id: 'wave-ribbon',
    label: 'Wave Ribbon',
    description: 'Fluid ribbon for experiential pop-ups',
    src: '/logos/creative/wave-ribbon.svg',
  },
  {
    id: 'glyph-loop',
    label: 'Glyph Loop',
    description: 'Playful loop for multi-disciplinary creatives',
    src: '/logos/creative/glyph-loop.svg',
  },
];

export const getCreativeLogo = (id?: string): CreativeLogo => {
  if (!id) return creativeLogos[0];
  return creativeLogos.find((logo) => logo.id === id) || creativeLogos[0];
};
