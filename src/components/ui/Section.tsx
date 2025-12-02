import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'gradient';
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
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-neutral-50',
    dark: 'bg-brand-black text-white',
    primary: 'bg-brand-primary text-white',
    gradient: 'bg-gradient-to-br from-neutral-50 to-white',
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
