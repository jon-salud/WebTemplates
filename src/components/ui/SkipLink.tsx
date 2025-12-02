import React from 'react';

/**
 * Skip Navigation Link Component
 * Allows keyboard users to bypass repetitive navigation and jump directly to main content
 * Visible only when focused via keyboard (Tab key)
 */
const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-brand-primary focus:text-white focus:rounded-lg focus:shadow-lg focus:font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-primary"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
