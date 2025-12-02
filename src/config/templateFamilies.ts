import type { SectionBlueprint } from './types';

export type TemplateFamily =
  | 'professionalServices'
  | 'healthWellness'
  | 'hospitalityCulinary'
  | 'tradesFieldServices'
  | 'creativeEvents'
  | 'saasStartups';

export const templateBlueprints: Record<TemplateFamily, SectionBlueprint[]> = {
  professionalServices: [
    { component: 'Hero', variant: 'split' },
    { component: 'LogoMarquee' },
    { component: 'Services', variant: 'numbered-list' },
    { component: 'Benefits', variant: 'counter-cards' },
    { component: 'Testimonials', variant: 'featured' },
    { component: 'CTA', variant: 'gradient-card' },
    { component: 'Footer', variant: 'default' },
  ],
  healthWellness: [
    { component: 'Hero', variant: 'diagonal-split' },
    { component: 'LogoMarquee' },
    { component: 'Services', variant: 'icon-grid' },
    { component: 'Benefits', variant: 'timeline' },
    { component: 'Testimonials', variant: 'carousel' },
    { component: 'CTA', variant: 'with-form' },
    { component: 'Footer', variant: 'centered' },
  ],
  hospitalityCulinary: [
    { component: 'Hero', variant: 'video-bg' },
    { component: 'Custom', props: { component: 'AwardsBadges' } },
    { component: 'Services', variant: 'image-cards', props: { renameTo: 'Experiences' } },
    { component: 'Custom', props: { component: 'MenuPreview' } },
    { component: 'Testimonials', variant: 'quote-slider' },
    { component: 'CTA', variant: 'dual-action' },
    { component: 'Footer', variant: 'split-brand' },
  ],
  tradesFieldServices: [
    { component: 'Hero', variant: 'minimal-centered' },
    { component: 'Custom', props: { component: 'CertificationStrip' } },
    { component: 'Services', variant: 'cards' },
    { component: 'Custom', props: { component: 'ProcessSteps' } },
    { component: 'Benefits', variant: 'icon-list' },
    { component: 'Testimonials', variant: 'side-scroll' },
    { component: 'CTA', variant: 'banner' },
    { component: 'Footer', variant: 'simple-dark' },
  ],
  creativeEvents: [
    { component: 'Hero', variant: 'image-overlap', props: { showBadge: false } },
    { component: 'Custom', props: { component: 'CreativeMoodboard' } },
    { component: 'Custom', props: { component: 'ShowcaseGallery' } },
    {
      component: 'Custom',
      props: {
        component: 'AnimatedLogoSection',
        logoId: 'pulse-mark',
      },
    },
    { component: 'Services', variant: 'hover-cards', props: { renameTo: 'Signature Experiences' } },
    { component: 'Custom', props: { component: 'CreativeProcess' } },
    { component: 'Custom', props: { component: 'ClientMarquee' } },
    { component: 'Benefits', variant: 'radial', props: { renameTo: 'Experience Highlights' } },
    { component: 'Testimonials', variant: 'floating-cards' },
    { component: 'CTA', variant: 'split', props: { emphasis: 'high-contrast' } },
    { component: 'Footer', variant: 'modern-grid' },
  ],
  saasStartups: [
    { component: 'Hero', variant: 'centered-cards' },
    { component: 'LogoMarquee' },
    { component: 'Services', variant: 'tabs' },
    { component: 'Benefits', variant: 'comparison' },
    { component: 'Testimonials', variant: 'spotlight' },
    { component: 'CTA', variant: 'with-form' },
    { component: 'Footer', variant: 'mega' },
  ],
};

export default templateBlueprints;
