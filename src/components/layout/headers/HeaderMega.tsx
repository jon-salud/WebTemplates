import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Container from '../../ui/Container';
import type { IndustryConfig } from '@/config/industries';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderMega: React.FC<HeaderProps> = ({ industry }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200" onMouseLeave={() => setActiveMenu(null)}>
      <Container>
        <div className="h-20 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-neutral-900" style={{ fontFamily: 'var(--font-heading)' }}>
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
                  className="flex items-center gap-1 text-sm font-medium transition-colors text-neutral-600 hover:text-neutral-900"
                  style={activeMenu === link.label ? { color: industry.colors.primary } : undefined}
                >
                  {link.label}
                  {link.columns && <ChevronDown size={14} />}
                </a>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#login" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">Log in</a>
            <a 
              href="#demo" 
              className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:opacity-90"
              style={{ backgroundColor: industry.colors.primary }}
            >
              Request Demo
            </a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
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
            className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-xl py-8"
          >
            <Container>
              <div className="grid grid-cols-4 gap-8">
                {navLinks.find(l => l.label === activeMenu)?.columns?.map((col, idx) => (
                  <div key={idx}>
                    <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">{col.title}</h3>
                    <ul className="space-y-3">
                      {col.items.map(item => (
                        <li key={item}>
                          <a href="#" className="text-sm text-neutral-700 font-medium block hover:opacity-80">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-2 bg-neutral-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-2">Featured Resource</h3>
                  <p className="text-sm text-neutral-600 mb-4">Learn how to scale your operations with our latest guide.</p>
                  <a href="#" className="text-sm font-bold hover:underline" style={{ color: industry.colors.primary }}>Read the guide &rarr;</a>
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
