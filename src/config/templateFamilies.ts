import type { SectionBlueprint } from './types';

export type TemplateFamily =
  | 'professionalServices'
  | 'healthWellness'
  | 'hospitalityCulinary'
  | 'tradesFieldServices'
  | 'creativeEvents'
  | 'saasStartups';

export const templateBlueprints: Record<TemplateFamily, SectionBlueprint[]> = {
  /**
   * Professional Services (Law, Accounting, Consulting)
   * Psychology: Trust & credibility-first; risk-averse buyers need reassurance
   * Flow: Establish authority → Show expertise → Prove with social proof → Address objections → Convert
   */
  professionalServices: [
    { component: 'Hero', variant: 'split' },
    { component: 'LogoMarquee' },
    { component: 'Services', variant: 'numbered-list' },
    { component: 'Benefits', variant: 'counter-cards' },
    { component: 'Custom', props: { component: 'TeamCredentials' } },
    { component: 'Testimonials', variant: 'featured' },
    { component: 'Custom', props: { component: 'FAQ' } },
    { component: 'CTA', variant: 'gradient-card' },
    { component: 'Footer', variant: 'default' },
  ],

  /**
   * Health & Wellness (Clinics, Spas, Fitness, Therapy)
   * Psychology: Emotional safety & transformation; buyers are often vulnerable
   * Flow: Inspire with outcome → Show the journey → Present offerings → Build trust with team → Convert
   */
  healthWellness: [
    { component: 'Hero', variant: 'diagonal-split' },
    { component: 'Custom', props: { component: 'TransformationStory' } },
    { component: 'Benefits', variant: 'timeline', props: { renameTo: 'Your Journey' } },
    { component: 'Services', variant: 'icon-grid' },
    { component: 'Custom', props: { component: 'PractitionerShowcase' } },
    { component: 'Testimonials', variant: 'carousel' },
    { component: 'CTA', variant: 'with-form' },
    { component: 'Footer', variant: 'centered' },
  ],

  /**
   * Hospitality & Culinary (Restaurants, Hotels, Cafés)
   * Psychology: Sensory & aspirational; buyers purchase atmosphere and anticipation
   * Flow: Immerse visually → Establish quality → Tease offerings → Build desire → Convert
   */
  hospitalityCulinary: [
    { component: 'Hero', variant: 'video-bg' },
    { component: 'Custom', props: { component: 'AwardsBadges' } },
    { component: 'Services', variant: 'image-cards', props: { renameTo: 'Experiences' } },
    { component: 'Custom', props: { component: 'MenuPreview' } },
    { component: 'Custom', props: { component: 'AmbientGallery' } },
    { component: 'Testimonials', variant: 'quote-slider' },
    { component: 'CTA', variant: 'dual-action' },
    { component: 'Footer', variant: 'split-brand' },
  ],

  /**
   * Trades & Field Services (Plumbing, Electrical, Contractors)
   * Psychology: Speed & trust; buyers in urgent-need mode want fast answers
   * Flow: Show action → Prove legitimacy → Confirm availability → Explain process → Convert
   */
  tradesFieldServices: [
    { component: 'Hero', variant: 'split', props: { showUrgency: true } },
    { component: 'Custom', props: { component: 'CertificationStrip' } },
    { component: 'Custom', props: { component: 'ServiceAreaMap' } },
    { component: 'Services', variant: 'cards' },
    { component: 'Custom', props: { component: 'ProcessSteps' } },
    { component: 'Testimonials', variant: 'side-scroll' },
    { component: 'Benefits', variant: 'icon-list', props: { renameTo: 'Why Choose Us' } },
    { component: 'CTA', variant: 'banner' },
    { component: 'Footer', variant: 'simple-dark' },
  ],

  /**
   * Creative & Events (DJs, Photographers, Event Planners)
   * Psychology: Portfolio & vibe; buyers hire taste and vision
   * Flow: Set the mood → Prove capability → Show who trusts them → Explain craft → Convert
   */
  creativeEvents: [
    { component: 'Hero', variant: 'image-overlap', props: { showBadge: false } },
    { component: 'Custom', props: { component: 'CreativeMoodboard' } },
    { component: 'Custom', props: { component: 'ShowcaseGallery' } },
    { component: 'Custom', props: { component: 'ClientMarquee' } },
    { component: 'Services', variant: 'hover-cards', props: { renameTo: 'Signature Experiences' } },
    {
      component: 'Custom',
      props: {
        component: 'AnimatedLogoSection',
        logoId: 'pulse-mark',
      },
    },
    { component: 'Custom', props: { component: 'CreativeProcess' } },
    { component: 'Testimonials', variant: 'floating-cards' },
    { component: 'CTA', variant: 'split', props: { emphasis: 'high-contrast' } },
    { component: 'Footer', variant: 'modern-grid' },
  ],

  /**
   * SaaS & Startups (Software, Apps, Tech Products)
   * Psychology: Analytical & ROI-focused; buyers compare alternatives and need clarity
   * Flow: Hook with value prop → Show product → Explain features → Compare → Price → Address objections → Convert
   */
  saasStartups: [
    { component: 'Hero', variant: 'centered-cards' },
    { component: 'LogoMarquee' },
    { component: 'Custom', props: { component: 'ProductShowcase' } },
    { component: 'Services', variant: 'tabs', props: { renameTo: 'Features' } },
    { component: 'Benefits', variant: 'comparison' },
    { component: 'Custom', props: { component: 'PricingTeaser' } },
    { component: 'Testimonials', variant: 'spotlight' },
    { component: 'Custom', props: { component: 'FAQ' } },
    { component: 'CTA', variant: 'with-form' },
    { component: 'Footer', variant: 'mega' },
  ],
};

export default templateBlueprints;
