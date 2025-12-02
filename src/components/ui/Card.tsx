import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'bordered' | 'glass' | 'dark';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hover = false,
  padding = 'md',
  className = '',
  onClick,
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-400 ease-out';

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variantStyles = {
    default: 'bg-white shadow-card',
    bordered: 'bg-white border border-neutral-200 shadow-none',
    glass: 'bg-white/80 backdrop-blur-lg border border-white/50',
    dark: 'bg-brand-black text-white',
  };

  const hoverStyles = hover
    ? 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer'
    : '';

  const cardClasses = `
    ${baseStyles}
    ${paddingStyles[padding]}
    ${variantStyles[variant]}
    ${hoverStyles}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      whileHover={hover ? { y: -4 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
