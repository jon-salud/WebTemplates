import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import type { IndustryConfig } from '@/config/industries';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderSplit: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
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
            <a href="#product" className="text-sm font-medium text-neutral-600 hover:text-black">Product</a>
            <a href="#solutions" className="text-sm font-medium text-neutral-600 hover:text-black">Solutions</a>
            <a href="#resources" className="text-sm font-medium text-neutral-600 hover:text-black">Resources</a>
            <a href="#pricing" className="text-sm font-medium text-neutral-600 hover:text-black">Pricing</a>
          </nav>

          {/* Right CTA Area */}
          <div className="hidden lg:flex items-center justify-end gap-4 w-48">
            <a href="#login" className="text-sm font-medium text-neutral-600 hover:text-black">Log in</a>
            <Button variant="primary" size="sm" style={{ backgroundColor: industry.colors.primary }}>
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
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
            className="lg:hidden bg-white border-t"
          >
            <Container>
              <div className="py-6 space-y-4">
                <a href="#product" className="block text-lg font-medium">Product</a>
                <a href="#solutions" className="block text-lg font-medium">Solutions</a>
                <a href="#resources" className="block text-lg font-medium">Resources</a>
                <a href="#pricing" className="block text-lg font-medium">Pricing</a>
                <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
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
