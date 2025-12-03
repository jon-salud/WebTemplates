import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../../ui/Container';
import type { IndustryConfig } from '@/config/industries';
import { getThemeTokens, hexToRgba } from '@/utils/theme';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderCentered: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = getThemeTokens(industry);
  const headerBg = hexToRgba(theme.surface, theme.isDarkMode ? 0.9 : 0.98);
  const linkColor = hexToRgba(theme.text, 0.75);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      style={{ backgroundColor: headerBg, borderColor: theme.border, color: theme.text }}
    >
      <Container>
        <div className="h-20 flex items-center justify-between md:justify-center relative">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 absolute left-4"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: theme.text }}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Left Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-4 lg:left-8">
            {[
              { href: '#services', label: 'Services' },
              { href: '#work', label: 'Work' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{ color: linkColor }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <a href="/" className="text-2xl font-serif font-bold" style={{ color: industry.colors.primary, fontFamily: 'var(--font-heading)' }}>
            {industry.name}
          </a>

          {/* Right Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute right-4 lg:right-8">
            {[
              { href: '#about', label: 'About' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{ color: linkColor }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
            style={{ backgroundColor: theme.surface, borderColor: theme.border }}
          >
            <div className="flex flex-col items-center py-6 gap-4">
              {[
                { href: '#services', label: 'Services' },
                { href: '#work', label: 'Work' },
                { href: '#about', label: 'About' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <a key={item.href} href={item.href} className="text-lg font-medium" style={{ color: theme.text }}>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderCentered;
