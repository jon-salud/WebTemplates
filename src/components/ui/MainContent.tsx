import React from 'react';

interface MainContentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Main Content Wrapper
 * Provides proper semantic landmark and skip link target
 * Essential for keyboard navigation accessibility
 */
const MainContent: React.FC<MainContentProps> = ({ children, className = '' }) => {
  return (
    <main id="main-content" className={`flex-1 ${className}`} role="main">
      {children}
    </main>
  );
};

export default MainContent;
