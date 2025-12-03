import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import type { IndustryConfig } from '@/config/industries';
import { getThemeTokens, hexToRgba } from '@/utils/theme';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderFloating: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = getThemeTokens(industry);
  const shellBg = hexToRgba(theme.surface, theme.isDarkMode ? 0.85 : 0.9);
  const shellBorder = theme.border;
  const navColor = hexToRgba(theme.text, 0.75);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className="rounded-full shadow-lg border px-6 py-3 w-full max-w-3xl flex items-center justify-between backdrop-blur"
        style={{ backgroundColor: shellBg, borderColor: shellBorder, color: theme.text }}
      >
        <a href="/" className="font-bold text-lg" style={{ color: industry.colors.primary, fontFamily: 'var(--font-heading)' }}>
          {industry.name}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: '#features', label: 'Features' },
            { href: '#pricing', label: 'Pricing' },
            { href: '#about', label: 'About' },
          ].map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium transition-colors" style={{ color: navColor }}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#login" className="text-sm font-medium" style={{ color: navColor }}>
            Log in
          </a>
          <a
            href="#signup"
            className="text-sm font-medium px-4 py-2 rounded-full transition-colors"
            style={{ backgroundColor: industry.colors.primary, color: '#ffffff' }}
          >
            Sign up
          </a>
        </div>

        <button className="md:hidden p-1" onClick={() => setIsOpen(!isOpen)} style={{ color: theme.text }}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-20 left-4 right-4 rounded-2xl shadow-xl p-4 md:hidden"
            style={{ backgroundColor: shellBg, color: theme.text }}
          >
            <div className="flex flex-col gap-3">
              {[
                { href: '#features', label: 'Features' },
                { href: '#pricing', label: 'Pricing' },
                { href: '#about', label: 'About' },
              ].map((item) => (
                <a key={item.href} href={item.href} className="p-2 rounded-lg transition-colors" style={{ color: theme.text }}>
                  {item.label}
                </a>
              ))}
              <div className="h-px my-1" style={{ backgroundColor: theme.border }} />
              <a href="#login" className="p-2 rounded-lg transition-colors" style={{ color: theme.text }}>
                Log in
              </a>
              <a
                href="#signup"
                className="p-2 rounded-lg text-center"
                style={{ backgroundColor: industry.colors.primary, color: '#ffffff' }}
              >
                Sign up
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderFloating;
