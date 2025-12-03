import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Container from '../../ui/Container';
import type { IndustryConfig } from '@/config/industries';
import { getThemeTokens, hexToRgba } from '@/utils/theme';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderMega: React.FC<HeaderProps> = ({ industry }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = getThemeTokens(industry);
  const headerBg = hexToRgba(theme.surface, theme.isDarkMode ? 0.92 : 1);
  const navColor = hexToRgba(theme.text, 0.75);
  const dropdownBg = hexToRgba(theme.surface, theme.isDarkMode ? 0.98 : 1);

  const navLinks = [
    {
      label: 'Products',
      columns: [
        { title: 'Software', items: ['Analytics', 'Marketing', 'Sales', 'Service'] },
        { title: 'Hardware', items: ['Sensors', 'Gateways', 'Controllers', 'Accessories'] },
      ]
    },
    {
      label: 'Solutions',
      columns: [
        { title: 'By Industry', items: ['Retail', 'Manufacturing', 'Healthcare', 'Logistics'] },
        { title: 'By Role', items: ['CTO', 'Product Manager', 'Developer', 'Marketer'] },
      ]
    },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Enterprise', href: '#enterprise' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ backgroundColor: headerBg, borderColor: theme.border, color: theme.text }}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <Container>
        <div className="h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: theme.text }}>
            {industry.name}
          </a>

          <nav className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="h-full flex items-center"
                onMouseEnter={() => link.columns && setActiveMenu(link.label)}
              >
                <a
                  href={link.href || '#'}
                  className="flex items-center gap-1 text-sm font-medium transition-colors"
                  style={{ color: activeMenu === link.label ? industry.colors.primary : navColor }}
                >
                  {link.label}
                  {link.columns && <ChevronDown size={14} />}
                </a>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#login" className="text-sm font-medium" style={{ color: navColor }}>
              Log in
            </a>
            <a 
              href="#demo" 
              className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:opacity-90"
              style={{ backgroundColor: industry.colors.primary }}
            >
              Request Demo
            </a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: theme.text }}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 shadow-xl py-8"
            style={{ backgroundColor: dropdownBg, borderBottom: `1px solid ${theme.border}` }}
          >
            <Container>
              <div className="grid grid-cols-4 gap-8">
                {navLinks.find(l => l.label === activeMenu)?.columns?.map((col, idx) => (
                  <div key={idx}>
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: hexToRgba(theme.text, 0.6) }}>
                      {col.title}
                    </h3>
                    <ul className="space-y-3">
                      {col.items.map(item => (
                        <li key={item}>
                          <a href="#" className="text-sm font-medium block hover:opacity-80" style={{ color: navColor }}>
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div
                  className="col-span-2 rounded-xl p-6"
                  style={{ backgroundColor: hexToRgba(theme.surface, theme.isDarkMode ? 0.85 : 0.6) }}
                >
                  <h3 className="text-lg font-bold mb-2" style={{ color: theme.text }}>Featured Resource</h3>
                  <p className="text-sm mb-4" style={{ color: hexToRgba(theme.text, 0.75) }}>
                    Learn how to scale your operations with our latest guide.
                  </p>
                  <a href="#" className="text-sm font-bold hover:underline" style={{ color: industry.colors.primary }}>
                    Read the guide &rarr;
                  </a>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderMega;
