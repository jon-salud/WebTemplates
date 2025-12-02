import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import Container from '../../ui/Container';
import type { IndustryConfig } from '@/config/industries';

interface HeaderProps {
  industry: IndustryConfig;
}

const HeaderSearch: React.FC<HeaderProps> = ({ industry }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200">
      <Container>
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 lg:gap-8">
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu />
            </button>
            <a href="/" className="text-xl font-bold tracking-tight text-neutral-900">
              {industry.name}
            </a>
          </div>

          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full pl-10 pr-4 py-2 bg-neutral-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#categories" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">Categories</a>
              <a href="#deals" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">Deals</a>
              <a href="#whats-new" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">What's New</a>
            </nav>
            <div className="h-6 w-px bg-neutral-200 hidden lg:block" />
            <div className="flex items-center gap-4">
              <button className="md:hidden">
                <Search />
              </button>
              <a href="#cart" className="relative">
                <ShoppingBag />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">2</span>
              </a>
            </div>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 left-0 w-80 bg-white z-50 shadow-2xl lg:hidden flex flex-col"
          >
            <div className="p-4 border-b border-neutral-100 flex justify-between items-center">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setIsOpen(false)}><X /></button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-neutral-400 uppercase">Shop</h3>
                  <a href="#" className="block text-neutral-900 font-medium">New Arrivals</a>
                  <a href="#" className="block text-neutral-900 font-medium">Best Sellers</a>
                  <a href="#" className="block text-neutral-900 font-medium">Sale</a>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-neutral-400 uppercase">Account</h3>
                  <a href="#" className="block text-neutral-900 font-medium">Sign In</a>
                  <a href="#" className="block text-neutral-900 font-medium">Register</a>
                  <a href="#" className="block text-neutral-900 font-medium">Order Status</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderSearch;
