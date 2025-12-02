import React from 'react';
import type { IndustryConfig } from '@/config/industries';
import Navigation from './Navigation';
import HeaderMinimal from './headers/HeaderMinimal';
import HeaderCentered from './headers/HeaderCentered';
import HeaderDouble from './headers/HeaderDouble';
import HeaderFloating from './headers/HeaderFloating';
import HeaderGlass from './headers/HeaderGlass';
import HeaderSplit from './headers/HeaderSplit';
import HeaderBold from './headers/HeaderBold';
import HeaderMega from './headers/HeaderMega';
import HeaderSidebar from './headers/HeaderSidebar';
import HeaderSearch from './headers/HeaderSearch';
import HeaderGradient from './headers/HeaderGradient';
import HeaderBordered from './headers/HeaderBordered';

interface HeaderSelectorProps {
  industry: IndustryConfig;
}

const HeaderSelector: React.FC<HeaderSelectorProps> = ({ industry }) => {
  const variant = industry.headerVariant || 'default';

  switch (variant) {
    case 'minimal':
      return <HeaderMinimal industry={industry} />;
    case 'centered':
      return <HeaderCentered industry={industry} />;
    case 'double':
      return <HeaderDouble industry={industry} />;
    case 'floating':
      return <HeaderFloating industry={industry} />;
    case 'glass':
      return <HeaderGlass industry={industry} />;
    case 'split':
      return <HeaderSplit industry={industry} />;
    case 'bold':
      return <HeaderBold industry={industry} />;
    case 'mega':
      return <HeaderMega industry={industry} />;
    case 'sidebar':
      return <HeaderSidebar industry={industry} />;
    case 'search':
      return <HeaderSearch industry={industry} />;
    case 'gradient':
      return <HeaderGradient industry={industry} />;
    case 'bordered':
      return <HeaderBordered industry={industry} />;
    case 'default':
    default:
      return <Navigation industry={industry} />;
  }
};

export default HeaderSelector;
