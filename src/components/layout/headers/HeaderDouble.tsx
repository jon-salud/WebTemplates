import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import type { IndustryConfig } from '@/config/industries';
import { getThemeTokens, hexToRgba } from '@/utils/theme';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderDouble: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = getThemeTokens(industry);
  const navLinkColor = hexToRgba(theme.text, 0.75);
  const topBarBg = hexToRgba(theme.surface, theme.isDarkMode ? 0.75 : 0.4);
  const topBarText = hexToRgba(theme.text, theme.isDarkMode ? 0.95 : 0.8);
  const mainBarBg = hexToRgba(theme.surface, theme.isDarkMode ? 0.95 : 1);
  const socialIcons = [
    { icon: Facebook, label: 'facebook' },
    { icon: Twitter, label: 'twitter' },
    { icon: Instagram, label: 'instagram' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="py-2 text-xs" style={{ backgroundColor: topBarBg, color: topBarText }}>
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><Phone size={12} /> +1 (555) 123-4567</span>
              <span className="flex items-center gap-1"><Mail size={12} /> hello@{industry.id}.com</span>
            </div>
            <div className="hidden md:flex items-center gap-3">
              {socialIcons.map(({ icon: Icon, label }) => (
                <Icon key={label} size={12} className="cursor-pointer" style={{ color: topBarText }} />
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Bar */}
      <div className="shadow-sm" style={{ backgroundColor: mainBarBg, color: theme.text }}>
        <Container>
          <div className="h-16 flex items-center justify-between">
            <a href="/" className="text-xl font-bold uppercase tracking-wider" style={{ color: industry.colors.primary, fontFamily: 'var(--font-heading)' }}>
              {industry.name}
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {['HOME', 'SERVICES', 'PROJECTS', 'NEWS'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-semibold tracking-wide transition-colors"
                  style={{ color: navLinkColor }}
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button variant="primary" size="sm" style={{ backgroundColor: industry.colors.primary }}>
                Get Quote
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} style={{ color: theme.text }}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
            style={{ backgroundColor: mainBarBg, borderColor: theme.border }}
          >
            <div className="flex flex-col p-4 gap-4">
              {['HOME', 'SERVICES', 'PROJECTS', 'NEWS'].map((item) => (
                <a key={item} href="#" className="font-semibold" style={{ color: theme.text }}>
                  {item}
                </a>
              ))}
              <Button variant="primary" fullWidth style={{ backgroundColor: industry.colors.primary }}>
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderDouble;
