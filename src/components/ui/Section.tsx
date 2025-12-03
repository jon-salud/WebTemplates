import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'gradient' | 'surface' | 'themed';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'white',
  padding = 'md',
  animate = true,
}) => {
  // Theme-aware background styles
  // Uses CSS variables set by BaseLayout when theme colors are active
  const backgroundStyles: Record<string, string> = {
    white: 'bg-[var(--theme-background,#ffffff)] text-[var(--theme-text,inherit)]',
    light: 'bg-[var(--theme-surface,#f9fafb)] text-[var(--theme-text,inherit)]',
    dark: 'bg-neutral-900 text-white',
    primary: 'bg-brand-primary text-white',
    gradient: 'bg-gradient-to-br from-[var(--theme-background,#f9fafb)] to-[var(--theme-surface,#ffffff)] text-[var(--theme-text,inherit)]',
    surface: 'bg-[var(--theme-surface,#f9fafb)] text-[var(--theme-text,inherit)]',
    themed: 'bg-[var(--theme-background,#ffffff)] text-[var(--theme-text,inherit)]',
  };

  const paddingStyles = {
    none: '',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
  };

  const content = (
    <section
      id={id}
      className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </section>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {content}
    </motion.div>
  );
};

export default Section;
