import React from 'react';
import { motion } from 'framer-motion';
import type { IndustryConfig } from '@/config/industries';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  loading = false,
  disabled = false,
  style,
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-bold
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden
  `;

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-sm rounded-xl',
    lg: 'px-8 py-4 text-base rounded-2xl',
  };

  const variantStyles = {
    primary: `
      bg-brand-primary text-white shadow-button
      hover:bg-brand-primary-dark hover:shadow-lg hover:-translate-y-0.5
      active:translate-y-0 focus:ring-brand-primary/50
    `,
    secondary: `
      bg-white text-brand-black border-2 border-neutral-200
      hover:border-brand-primary hover:text-brand-primary
      focus:ring-brand-primary/30
    `,
    dark: `
      bg-brand-black text-white
      hover:bg-neutral-800
      focus:ring-neutral-500
    `,
    glass: `
      bg-white/10 backdrop-blur-md text-white border border-white/20
      hover:bg-white/20 hover:border-white/30
      focus:ring-white/30
    `,
    ghost: `
      bg-transparent text-brand-black
      hover:bg-neutral-100
      focus:ring-neutral-300
    `,
  };

  const buttonClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const content = (
    <>
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center bg-inherit">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
      <span className={loading ? 'invisible' : 'flex items-center gap-2'}>
        {icon && iconPosition === 'left' && <span>{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span>{icon}</span>}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        style={style}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
      style={style}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;
