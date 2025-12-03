import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import type { IndustryConfig } from '@/config/industries';
import { getThemeTokens, hexToRgba } from '@/utils/theme';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderSplit: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = getThemeTokens(industry);
  const headerBg = hexToRgba(theme.surface, theme.isDarkMode ? 0.9 : 0.98);
  const navColor = hexToRgba(theme.text, 0.75);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
      style={{ backgroundColor: headerBg, borderColor: theme.border, color: theme.text }}
    >
      <Container>
        <div className="h-20 flex items-center justify-between">
          {/* Logo Area */}
          <div className="w-48">
            <a href="/" className="text-xl font-bold" style={{ color: industry.colors.primary, fontFamily: 'var(--font-heading)' }}>
              {industry.name}
            </a>
          </div>

          {/* Centered Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { href: '#product', label: 'Product' },
              { href: '#solutions', label: 'Solutions' },
              { href: '#resources', label: 'Resources' },
              { href: '#pricing', label: 'Pricing' },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium transition-colors" style={{ color: navColor }}>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTA Area */}
          <div className="hidden lg:flex items-center justify-end gap-4 w-48">
            <a href="#login" className="text-sm font-medium" style={{ color: navColor }}>
              Log in
            </a>
            <Button variant="primary" size="sm" style={{ backgroundColor: industry.colors.primary }}>
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} style={{ color: theme.text }}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t"
            style={{ backgroundColor: headerBg, borderColor: theme.border }}
          >
            <Container>
              <div className="py-6 space-y-4">
                {[
                  { href: '#product', label: 'Product' },
                  { href: '#solutions', label: 'Solutions' },
                  { href: '#resources', label: 'Resources' },
                  { href: '#pricing', label: 'Pricing' },
                ].map((item) => (
                  <a key={item.href} href={item.href} className="block text-lg font-medium" style={{ color: theme.text }}>
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3" style={{ borderTop: `1px solid ${theme.border}` }}>
                  <Button variant="secondary" fullWidth>Log in</Button>
                  <Button variant="primary" fullWidth style={{ backgroundColor: industry.colors.primary }}>
                    Get Started
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderSplit;
