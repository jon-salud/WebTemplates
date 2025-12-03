import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../../ui/Container';
import type { IndustryConfig } from '@/config/industries';
import { getThemeTokens, hexToRgba } from '@/utils/theme';

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  industry: IndustryConfig;
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const HeaderMinimal: React.FC<HeaderProps> = ({
  industry,
  navItems = defaultNavItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = getThemeTokens(industry);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? hexToRgba(theme.surface, 0.85) : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : undefined,
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
      }}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-bold tracking-tight"
            style={{ color: industry.colors.primary, fontFamily: 'var(--font-heading)' }}
          >
            {industry.name}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: hexToRgba(theme.text, 0.8) }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            style={{ color: theme.text }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
            style={{ backgroundColor: theme.surface, borderTop: `1px solid ${theme.border}` }}
          >
            <Container>
              <div className="flex flex-col py-4 gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium"
                    style={{ color: theme.text }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default HeaderMinimal;
