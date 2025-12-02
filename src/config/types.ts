import type { TemplateFamily } from './templateFamilies';

export interface SectionBlueprint {
  component: 'Hero' | 'Services' | 'Benefits' | 'Testimonials' | 'CTA' | 'LogoMarquee' | 'Footer' | 'Custom';
  variant?: string;
  props?: Record<string, unknown>;
  enabledKey?: string;
}

export type BlueprintRegistry = Record<TemplateFamily, SectionBlueprint[]>;

export default SectionBlueprint;
