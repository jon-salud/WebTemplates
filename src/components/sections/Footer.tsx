import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Send,
  ChevronRight,
  Globe,
} from 'lucide-react';
import Container from '../ui/Container';
import type { IndustryConfig } from '@/config/industries';

interface FooterProps {
  industry: IndustryConfig;
  showNewsletter?: boolean;
  variant?: 'default' | 'minimal' | 'centered' | 'mega' | 'dark-gradient' | 'split-brand' | 'simple-dark' | 'columns-light' | 'stacked' | 'modern-grid';
}

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { label: 'Service 1', href: '#' },
      { label: 'Service 2', href: '#' },
      { label: 'Service 3', href: '#' },
      { label: 'Service 4', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Careers', href: '#careers' },
      { label: 'Blog', href: '#blog' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Support', href: '#support' },
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer: React.FC<FooterProps> = ({
  industry,
  showNewsletter = true,
  variant = 'default',
}) => {
  const [email, setEmail] = useState('');

  const isDarkMode = industry.themeMode === 'dark';
  const themeColors = {
    background: industry.themeColors?.background || (isDarkMode ? '#0b1120' : '#ffffff'),
    surface: industry.themeColors?.surface || (isDarkMode ? '#111827' : '#f8fafc'),
    text: industry.themeColors?.text || (isDarkMode ? '#f8fafc' : '#0f172a'),
  };

  const theme = {
    ...themeColors,
    muted: isDarkMode ? 'rgba(248, 250, 252, 0.7)' : 'rgba(15, 23, 42, 0.65)',
    border: isDarkMode ? 'rgba(248, 250, 252, 0.12)' : 'rgba(15, 23, 42, 0.1)',
    card: isDarkMode ? 'rgba(255, 255, 255, 0.04)' : '#ffffff',
    footerBg: isDarkMode ? 'bg-[var(--theme-surface)]' : 'bg-brand-black',
    footerText: isDarkMode ? 'text-[var(--theme-text)]' : 'text-white',
    footerMuted: isDarkMode ? 'text-[var(--theme-text)]/70' : 'text-white/70',
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing:', email);
    setEmail('');
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Default (Original)
  // ═══════════════════════════════════════════════════════════════════════════
  const renderDefault = () => (
    <footer className={`${theme.footerBg} text-white`}>
      {/* Newsletter Section */}
      {showNewsletter && (
        <div
          className="py-12 border-b border-white/10"
          style={{ backgroundColor: industry.colors.primaryDark }}
        >
          <Container>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-heading-2 mb-2">Stay Updated</h3>
                <p className="text-white/70">
                  Subscribe to our newsletter for the latest insights and updates.
                </p>
              </div>
              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                />
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-white text-brand-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </Container>
        </div>
      )}

      {/* Main Footer */}
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a href="/" className="inline-block mb-4">
                <span
                  className="text-2xl font-bold"
                  style={{ color: industry.colors.primary }}
                >
                  {industry.name}
                </span>
              </a>
              <p className="text-white/70 mb-6 max-w-sm">
                {industry.footer.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>contact@example.com</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 (234) 567-890</span>
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="w-5 h-5" />
                  <span>123 Business Street, City, ST 12345</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} {industry.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Minimal (Law)
  // Clean, simple footer - conveys professionalism
  // ═══════════════════════════════════════════════════════════════════════════
  const renderMinimal = () => (
    <footer className="border-t" style={{ backgroundColor: theme.surface, color: theme.text, borderColor: theme.border }}>
      <Container>
        <div className="py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Brand */}
            <div>
              <a href="/" className="inline-block mb-2">
                <span
                  className="text-2xl font-bold"
                  style={{ color: industry.colors.primary }}
                >
                  {industry.name}
                </span>
              </a>
              <p className="text-sm max-w-xs" style={{ color: theme.muted }}>
                {industry.footer.description}
              </p>
            </div>

            {/* Quick Links - Horizontal */}
            <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              {['About', 'Services', 'Team', 'Contact', 'Privacy', 'Terms'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="transition-colors hover:opacity-80"
                  style={{ color: theme.muted }}
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Contact */}
            <div className="text-right">
              <a
                href="tel:+1234567890"
                className="text-lg font-semibold block mb-1"
                style={{ color: industry.colors.primary }}
              >
                +1 (234) 567-890
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-sm"
                style={{ color: theme.muted }}
              >
                contact@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: theme.border }}>
          <p className="text-sm" style={{ color: theme.muted }}>
            © {new Date().getFullYear()} {industry.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors hover:opacity-80"
                style={{ color: theme.muted }}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Centered (Healthcare)
  // Centered layout with soft feel
  // ═══════════════════════════════════════════════════════════════════════════
  const renderCentered = () => (
    <footer style={{ backgroundColor: theme.background, color: theme.text }}>
      {/* Newsletter */}
      {showNewsletter && (
        <div className="py-16 border-b" style={{ backgroundColor: theme.surface, borderColor: theme.border }}>
          <Container>
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-heading-2 mb-3">
                Health Tips & Updates
              </h3>
              <p className="mb-6" style={{ color: theme.muted }}>
                Subscribe to receive wellness tips and practice updates.
              </p>
              <form className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-5 py-3 rounded-full border focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: theme.border, color: theme.text, backgroundColor: theme.card, ['--tw-ring-color' as string]: industry.colors.primary } as React.CSSProperties}
                />
                <motion.button
                  type="submit"
                  className="px-6 py-3 rounded-full text-white font-semibold"
                  style={{ backgroundColor: industry.colors.primary }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </Container>
        </div>
      )}

      <Container>
        <div className="py-16 text-center">
          {/* Brand */}
          <a href="/" className="inline-block mb-6">
            <span
              className="text-3xl font-bold"
              style={{ color: industry.colors.primary }}
            >
              {industry.name}
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-sm">
            {['Home', 'About', 'Services', 'Doctors', 'Appointments', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="transition-colors hover:opacity-80"
                style={{ color: theme.muted }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm" style={{ color: theme.muted }}>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:opacity-80 transition-colors">
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
            <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:opacity-80 transition-colors">
              <Mail className="w-4 h-4" />
              contact@example.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              123 Medical Center Dr
            </span>
          </div>

          {/* Social */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: `${industry.colors.primary}1a`, color: industry.colors.primary }}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t text-center" style={{ borderColor: theme.border }}>
          <p className="text-sm" style={{ color: theme.muted }}>
            © {new Date().getFullYear()} {industry.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Mega Footer (Consulting)
  // Large footer with lots of content
  // ═══════════════════════════════════════════════════════════════════════════
  const renderMega = () => (
    <footer style={{ backgroundColor: theme.surface, color: theme.text }}>
      {/* Top CTA Bar */}
      <div
        className="py-8"
        style={{ backgroundColor: industry.colors.primary }}
      >
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-heading-3 mb-1">Ready to transform your business?</h3>
              <p className="text-white/80">Let's discuss your challenges and opportunities.</p>
            </div>
            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-white text-brand-black font-semibold rounded-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand - 2 cols */}
            <div className="lg:col-span-2">
              <a href="/" className="inline-block mb-4">
                <span
                  className="text-2xl font-bold"
                  style={{ color: industry.colors.primary }}
                >
                  {industry.name}
                </span>
              </a>
              <p className="mb-6" style={{ color: theme.muted }}>
                {industry.footer.description}
              </p>

              {/* Newsletter in footer */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-3" style={{ color: theme.text }}>
                  Subscribe to insights
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 px-4 py-2 rounded-lg focus:outline-none text-sm"
                    style={{
                      backgroundColor: theme.card,
                      border: `1px solid ${theme.border}`,
                      color: theme.text,
                    }}
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: industry.colors.primary }}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                    style={{ backgroundColor: theme.card, color: theme.text }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-3">
                {industry.services.items.slice(0, 5).map((service) => (
                  <li key={service.title}>
                    <a href="#" className="transition-colors text-sm flex items-center gap-2 hover:opacity-80" style={{ color: theme.muted }}>
                      <ChevronRight className="w-3 h-3" />
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Industries</h4>
              <ul className="space-y-3">
                {['Technology', 'Healthcare', 'Finance', 'Manufacturing', 'Retail'].map((item) => (
                  <li key={item}>
                    <a href="#" className="transition-colors text-sm flex items-center gap-2 hover:opacity-80" style={{ color: theme.muted }}>
                      <ChevronRight className="w-3 h-3" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors text-sm flex items-center gap-2 hover:opacity-80" style={{ color: theme.muted }}>
                      <ChevronRight className="w-3 h-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Contact</h4>
              <div className="space-y-4 text-sm" style={{ color: theme.muted }}>
                <div>
                  <p className="mb-1">Email</p>
                  <a href="mailto:contact@example.com" className="hover:underline" style={{ color: theme.text }}>
                    contact@example.com
                  </a>
                </div>
                <div>
                  <p className="mb-1">Phone</p>
                  <a href="tel:+1234567890" className="hover:underline" style={{ color: theme.text }}>
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <p className="mb-1">Location</p>
                  <p>123 Business St, City</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: theme.border }}>
          <p className="text-sm" style={{ color: theme.muted }}>
            © {new Date().getFullYear()} {industry.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm" style={{ color: theme.muted }}>
            <a href="#" className="hover:opacity-80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:opacity-80 transition-colors">Terms of Service</a>
            <a href="#" className="hover:opacity-80 transition-colors">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Dark Gradient (Financial)
  // Sophisticated dark gradient
  // ═══════════════════════════════════════════════════════════════════════════
  const renderDarkGradient = () => (
    <footer
      className="text-white"
      style={{
        background: `linear-gradient(180deg, ${industry.colors.primaryDark} 0%, #0a0a0a 100%)`,
      }}
    >
      {/* Newsletter */}
      {showNewsletter && (
        <Container>
          <div className="py-16 border-b border-white/10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-display-3 mb-3">Market Insights & Updates</h3>
                <p className="text-white/60">
                  Stay informed with our weekly financial newsletter featuring market analysis and investment strategies.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                />
                <motion.button
                  type="submit"
                  className="px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
                  style={{ backgroundColor: industry.colors.primary }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </div>
        </Container>
      )}

      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <a href="/" className="inline-block mb-4">
                <span
                  className="text-2xl font-bold"
                  style={{ color: industry.colors.primary }}
                >
                  {industry.name}
                </span>
              </a>
              <p className="text-white/60 mb-6 text-sm">
                {industry.footer.description}
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-white/80">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/50 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} {industry.name}. All rights reserved. Securities offered through registered broker-dealers.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">Disclosures</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <select className="bg-transparent text-white/40 focus:outline-none cursor-pointer">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Split Brand (Real Estate)
  // Large brand presence with visual split
  // ═══════════════════════════════════════════════════════════════════════════
  const renderSplitBrand = () => (
    <footer className="overflow-hidden" style={{ backgroundColor: theme.surface, color: theme.text }}>
      {/* Top Section with brand highlight */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-1/3 hidden lg:block"
          style={{ backgroundColor: industry.colors.primary }}
        />
        
        <Container>
          <div className="grid lg:grid-cols-3 gap-0">
            {/* Brand Section */}
            <div
              className="py-16 px-8 -mx-4 lg:mx-0 lg:-ml-8 lg:pl-8"
              style={{ backgroundColor: industry.colors.primary }}
            >
              <span className="text-3xl font-bold block mb-4">
                {industry.name}
              </span>
              <p className="text-white/80 mb-8">
                {industry.footer.description}
              </p>
              
              {/* Contact */}
              <div className="space-y-3">
                <a href="tel:+1234567890" className="flex items-center gap-3 text-white/90 hover:text-white">
                  <Phone className="w-5 h-5" />
                  +1 (234) 567-890
                </a>
                <a href="mailto:contact@example.com" className="flex items-center gap-3 text-white/90 hover:text-white">
                  <Mail className="w-5 h-5" />
                  contact@example.com
                </a>
                <div className="flex items-center gap-3 text-white/90">
                  <MapPin className="w-5 h-5" />
                  123 Luxury Lane, City
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-2 py-16 lg:pl-16">
              <div className="grid sm:grid-cols-3 gap-8">
                {Object.values(footerLinks).map((section) => (
                  <div key={section.title}>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: theme.muted }}>
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="transition-colors hover:opacity-80"
                            style={{ color: theme.muted }}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              {showNewsletter && (
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Get Property Alerts</h4>
                      <p className="text-sm" style={{ color: theme.muted }}>Be the first to know about new listings.</p>
                    </div>
                    <form className="flex gap-2 w-full sm:w-auto">
                      <input
                        type="email"
                        placeholder="Email"
                        className="flex-1 sm:w-48 px-4 py-2 rounded-lg focus:outline-none text-sm"
                        style={{
                          backgroundColor: theme.card,
                          border: `1px solid ${theme.border}`,
                          color: theme.text,
                        }}
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-lg text-white text-sm font-medium"
                        style={{ backgroundColor: industry.colors.primary }}
                      >
                        Sign Up
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom */}
      <Container>
        <div className="py-6 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: theme.border }}>
          <p className="text-sm" style={{ color: theme.muted }}>
            © {new Date().getFullYear()} {industry.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors hover:opacity-80"
                style={{ color: theme.muted }}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );

  // ============================================
  // VARIANT 7: Simple Dark
  // Clean dark footer with minimal info
  // Best for: Insurance, Professional services
  // ============================================
  const renderSimpleDark = () => (
    <footer style={{ backgroundColor: theme.surface, color: theme.text }}>
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div
                className="text-2xl font-bold mb-4"
                style={{ color: industry.colors.primaryLight }}
              >
                {industry.name}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: theme.muted }}>
                {industry.footer.description}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['About', 'Services', 'Contact', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors text-sm hover:opacity-80" style={{ color: theme.muted }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm" style={{ color: theme.muted }}>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" style={{ color: industry.colors.primaryLight }} />
                  contact@company.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" style={{ color: industry.colors.primaryLight }} />
                  (555) 123-4567
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" style={{ color: industry.colors.primaryLight }} />
                  123 Business Ave, Suite 100
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            {showNewsletter && (
              <div>
                <h4 className="font-semibold mb-4">Stay Updated</h4>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none"
                    style={{
                      backgroundColor: theme.card,
                      border: `1px solid ${theme.border}`,
                      color: theme.text,
                    }}
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors text-white"
                    style={{ backgroundColor: industry.colors.primary }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: theme.border }}>
          <p className="text-sm" style={{ color: theme.muted }}>
            © {new Date().getFullYear()} {industry.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="transition-colors hover:opacity-80" style={{ color: theme.muted }}>
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );

  // ============================================
  // VARIANT 8: Columns Light
  // Light background with organized columns
  // Best for: Architecture, Creative
  // ============================================
  const renderColumnsLight = () => (
    <footer style={{ backgroundColor: theme.background, color: theme.text }}>
      <Container>
        <div className="py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Brand - spans 2 columns */}
            <div className="col-span-2">
              <div
                className="text-2xl font-bold mb-4"
                style={{ color: industry.colors.primary }}
              >
                {industry.name}
              </div>
              <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: theme.muted }}>
                {industry.footer.description}
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm"
                    style={{ backgroundColor: theme.card, color: theme.muted }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = industry.colors.primary)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.card)}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links columns */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="transition-colors text-sm hover:opacity-80" style={{ color: theme.muted }}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: theme.border }}>
          <p className="text-sm" style={{ color: theme.muted }}>
            © {new Date().getFullYear()} {industry.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm" style={{ color: theme.muted }}>
            <a href="#" className="hover:opacity-80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:opacity-80 transition-colors">Terms of Service</a>
            <a href="#" className="hover:opacity-80 transition-colors">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );

  // ============================================
  // VARIANT 9: Stacked
  // Vertically stacked sections
  // Best for: Education, Simple layouts
  // ============================================
  const renderStacked = () => (
    <footer className="bg-white border-t border-neutral-200">
      <Container>
        {/* Newsletter section */}
        {showNewsletter && (
          <div className="py-12 border-b border-neutral-200">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Stay in the loop</h3>
              <p className="text-neutral-600 mb-6">Get the latest news and updates delivered to your inbox.</p>
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-0"
                  style={{ ['--tw-ring-color' as string]: industry.colors.primary }}
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-white font-medium transition-colors"
                  style={{ backgroundColor: industry.colors.primary }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Links section */}
        <div className="py-12">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['About', 'Services', 'Programs', 'Resources', 'Blog', 'Contact', 'Careers'].map((link) => (
              <a key={link} href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div
                className="text-xl font-bold"
                style={{ color: industry.colors.primary }}
              >
                {industry.name}
              </div>
              <span className="text-neutral-300">|</span>
              <p className="text-neutral-500 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-neutral-400 hover:text-neutral-900 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );

  // ============================================
  // VARIANT 10: Modern Grid
  // Bold grid layout with accent colors
  // Best for: Recruitment, Tech agencies
  // ============================================
  const renderModernGrid = () => (
    <footer className="overflow-hidden" style={{ backgroundColor: theme.surface, color: theme.text }}>
      <Container>
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left side - Brand */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="text-3xl font-bold mb-6"
                  style={{ color: industry.colors.primaryLight }}
                >
                  {industry.name}
                </div>
                <p className="leading-relaxed mb-8 max-w-md" style={{ color: theme.muted }}>
                  {industry.footer.description}
                </p>
                
                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all hover:gap-4"
                  style={{ backgroundColor: industry.colors.primary }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Right side - Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Contact card */}
                <div
                  className="col-span-2 md:col-span-1 p-6 rounded-2xl"
                  style={{ backgroundColor: theme.card }}
                >
                  <h4 className="font-semibold mb-4">Contact Us</h4>
                  <ul className="space-y-3 text-sm" style={{ color: theme.muted }}>
                    <li className="flex items-center gap-2">
                      <Mail className="w-4 h-4" style={{ color: industry.colors.primaryLight }} />
                      hello@company.com
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone className="w-4 h-4" style={{ color: industry.colors.primaryLight }} />
                      (555) 123-4567
                    </li>
                  </ul>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold mb-4">Company</h4>
                  <ul className="space-y-3">
                    {['About', 'Careers', 'Blog', 'Press'].map((link) => (
                      <li key={link}>
                        <a href="#" className="transition-colors text-sm flex items-center gap-1 group" style={{ color: theme.muted }}>
                          <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h4 className="font-semibold mb-4">Services</h4>
                  <ul className="space-y-3">
                    {['Executive Search', 'Staffing', 'RPO', 'Consulting'].map((link) => (
                      <li key={link}>
                        <a href="#" className="transition-colors text-sm flex items-center gap-1 group" style={{ color: theme.muted }}>
                          <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-4 mt-8 pt-8 border-t" style={{ borderColor: theme.border }}>
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                    style={{ backgroundColor: theme.card, color: theme.muted }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: theme.border }}>
          <p className="text-sm" style={{ color: theme.muted }}>
            © {new Date().getFullYear()} {industry.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm" style={{ color: theme.muted }}>
            <a href="#" className="hover:opacity-80 transition-colors">Privacy</a>
            <a href="#" className="hover:opacity-80 transition-colors">Terms</a>
            <a href="#" className="hover:opacity-80 transition-colors">Sitemap</a>
          </div>
        </div>
      </Container>
    </footer>
  );

  // Render based on variant
  switch (variant) {
    case 'minimal':
      return renderMinimal();
    case 'centered':
      return renderCentered();
    case 'mega':
      return renderMega();
    case 'dark-gradient':
      return renderDarkGradient();
    case 'split-brand':
      return renderSplitBrand();
    case 'simple-dark':
      return renderSimpleDark();
    case 'columns-light':
      return renderColumnsLight();
    case 'stacked':
      return renderStacked();
    case 'modern-grid':
      return renderModernGrid();
    default:
      return renderDefault();
  }
};

export default Footer;
