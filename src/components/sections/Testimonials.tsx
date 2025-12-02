import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import type { IndustryConfig } from '@/config/industries';

interface TestimonialsProps {
  industry: IndustryConfig;
  variant?: 'carousel' | 'grid' | 'featured' | 'stacked-cards' | 'masonry' | 'spotlight' | 'quote-slider' | 'cards-row' | 'centered-quote' | 'side-scroll';
}

const Testimonials: React.FC<TestimonialsProps> = ({
  industry,
  variant = 'carousel',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = industry.testimonials.items;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderCarousel = () => (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-card text-center"
          >
            <Quote
              className="w-12 h-12 mx-auto mb-6 opacity-20"
              style={{ color: industry.colors.primary }}
            />
            
            <blockquote className="text-heading-2 text-brand-black mb-8">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            <div className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-white"
                style={{ backgroundColor: industry.colors.primary }}
              >
                {testimonials[activeIndex].author.charAt(0)}
              </div>
              <p className="text-lg font-semibold text-brand-black">
                {testimonials[activeIndex].author}
              </p>
              <p className="text-body text-neutral-500">
                {testimonials[activeIndex].role}
                {testimonials[activeIndex].company && ` at ${testimonials[activeIndex].company}`}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white shadow-card hover:shadow-card-hover transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-600" aria-hidden="true" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-8'
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                style={{
                  backgroundColor: index === activeIndex ? industry.colors.primary : undefined,
                }}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : 'false'}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white shadow-card hover:shadow-card-hover transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-neutral-600" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderGrid = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.author}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow-card"
        >
          <Quote
            className="w-8 h-8 mb-4 opacity-20"
            style={{ color: industry.colors.primary }}
          />
          
          <blockquote className="text-body-lg text-brand-black mb-6">
            "{testimonial.quote}"
          </blockquote>

          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white"
              style={{ backgroundColor: industry.colors.primary }}
            >
              {testimonial.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-brand-black">
                {testimonial.author}
              </p>
              <p className="text-body-sm text-neutral-500">
                {testimonial.role}
                {testimonial.company && `, ${testimonial.company}`}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderFeatured = () => (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* Featured testimonial */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-3 rounded-3xl p-8 md:p-12 text-white"
        style={{ backgroundColor: industry.colors.primary }}
      >
        <Quote className="w-12 h-12 mb-6 opacity-30" />
        
        <blockquote className="text-heading-2 mb-8">
          "{testimonials[0].quote}"
        </blockquote>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
            {testimonials[0].author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-lg">
              {testimonials[0].author}
            </p>
            <p className="text-white/80">
              {testimonials[0].role}
              {testimonials[0].company && ` at ${testimonials[0].company}`}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Side testimonials */}
      <div className="lg:col-span-2 space-y-6">
        {testimonials.slice(1, 3).map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-card"
          >
            <blockquote className="text-body text-brand-black mb-4">
              "{testimonial.quote.slice(0, 150)}..."
            </blockquote>

            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: industry.colors.primary }}
              >
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-sm text-brand-black">
                  {testimonial.author}
                </p>
                <p className="text-body-xs text-neutral-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Stacked Cards (Law)
  // Overlapping cards with depth effect - conveys credibility & gravitas
  // ═══════════════════════════════════════════════════════════════════════════
  const [stackedIndex, setStackedIndex] = useState(0);

  const renderStackedCards = () => (
    <div className="max-w-3xl mx-auto">
      <div className="relative h-[450px] md:h-[400px]">
        {testimonials.map((testimonial, index) => {
          const isActive = index === stackedIndex;
          const offset = index - stackedIndex;
          const isVisible = Math.abs(offset) <= 2;

          if (!isVisible) return null;

          return (
            <motion.div
              key={testimonial.author}
              className="absolute inset-x-0 top-0 cursor-pointer"
              initial={false}
              animate={{
                y: offset * 20,
                scale: 1 - Math.abs(offset) * 0.05,
                opacity: 1 - Math.abs(offset) * 0.3,
                zIndex: testimonials.length - Math.abs(offset),
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={() => setStackedIndex(index)}
            >
              <div
                className={`bg-white rounded-3xl p-8 md:p-10 shadow-card-hover ${
                  isActive ? 'ring-2' : ''
                }`}
                style={{
                  ringColor: isActive ? industry.colors.primary : 'transparent',
                }}
              >
                {/* Star rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: '#facc15' }}
                    />
                  ))}
                </div>

                <blockquote className="text-heading-3 text-brand-black mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white"
                      style={{ backgroundColor: industry.colors.primary }}
                    >
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-brand-black">
                        {testimonial.author}
                      </p>
                      <p className="text-body text-neutral-500">
                        {testimonial.role}
                        {testimonial.company && ` at ${testimonial.company}`}
                      </p>
                    </div>
                  </div>

                  {isActive && (
                    <Quote
                      className="w-10 h-10 opacity-20"
                      style={{ color: industry.colors.primary }}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setStackedIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === stackedIndex ? 'w-8' : 'bg-neutral-300'
            }`}
            style={{
              backgroundColor: index === stackedIndex ? industry.colors.primary : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Masonry/Mosaic (Financial)
  // True mosaic with randomized heights - conveys diversity & portfolio variety
  // ═══════════════════════════════════════════════════════════════════════════
  const renderMasonry = () => {
    // Extend testimonials if needed for mosaic effect
    const masonryItems = [...testimonials, ...testimonials.slice(0, 3)];
    
    // Random-ish height patterns for mosaic effect
    const heightPatterns = ['h-auto', 'min-h-[280px]', 'min-h-[350px]', 'min-h-[220px]', 'min-h-[400px]', 'min-h-[300px]'];
    const paddingPatterns = ['p-6', 'p-8', 'p-10', 'p-6', 'p-8', 'p-7'];
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {masonryItems.slice(0, 6).map((testimonial, index) => {
          const heightClass = heightPatterns[index % heightPatterns.length];
          const paddingClass = paddingPatterns[index % paddingPatterns.length];
          const isAccent = index === 0 || index === 4;
          const isSecondary = index === 2;
          
          return (
            <motion.div
              key={`${testimonial.author}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`${heightClass} flex flex-col`}
            >
              <div
                className={`rounded-3xl ${paddingClass} flex flex-col justify-between h-full relative overflow-hidden group`}
                style={{
                  backgroundColor: isAccent 
                    ? industry.colors.primary 
                    : isSecondary 
                      ? `${industry.colors.primary}15`
                      : 'white',
                  color: isAccent ? 'white' : undefined,
                }}
              >
                {/* Decorative corner element for accent cards */}
                {isAccent && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full" />
                )}

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Quote icon */}
                  <Quote
                    className={`w-8 h-8 mb-4 shrink-0 ${isAccent ? 'opacity-40' : 'opacity-15'}`}
                    style={{ color: isAccent ? 'white' : industry.colors.primary }}
                  />

                  <blockquote
                    className={`flex-1 leading-relaxed ${
                      index === 0 || index === 4 ? 'text-heading-3' : 'text-body-lg'
                    } ${isAccent ? '' : 'text-brand-black'}`}
                  >
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                <div className="flex items-center gap-3 mt-6 relative z-10">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm ${
                      isAccent ? 'bg-white/20 text-white' : 'text-white'
                    }`}
                    style={{
                      backgroundColor: isAccent ? undefined : industry.colors.primary,
                    }}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p
                      className={`font-semibold text-sm ${
                        isAccent ? 'text-white' : 'text-brand-black'
                      }`}
                    >
                      {testimonial.author}
                    </p>
                    <p
                      className={`text-xs ${
                        isAccent ? 'text-white/70' : 'text-neutral-500'
                      }`}
                    >
                      {testimonial.role}
                      {testimonial.company && `, ${testimonial.company}`}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Spotlight (Consulting)
  // One large testimonial with auto-rotating effect - conveys focus & impact
  // ═══════════════════════════════════════════════════════════════════════════
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderSpotlight = () => (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        {/* Background decorative elements */}
        <div
          className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: industry.colors.primary }}
        />
        <div
          className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: industry.colors.primary }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={spotlightIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-[2rem] p-10 md:p-16 shadow-card-hover"
          >
            {/* Large quote mark background */}
            <div
              className="absolute top-8 left-8 text-[200px] font-serif leading-none opacity-5 select-none"
              style={{ color: industry.colors.primary }}
            >
              "
            </div>

            <div className="relative z-10">
              {/* Star rating with animation */}
              <motion.div
                className="flex gap-1 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                  >
                    <Star className="w-6 h-6 fill-current text-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>

              <blockquote className="text-display-3 md:text-display-2 text-brand-black mb-10 leading-tight">
                "{testimonials[spotlightIndex].quote}"
              </blockquote>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-5">
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white"
                    style={{ backgroundColor: industry.colors.primary }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    {testimonials[spotlightIndex].author.charAt(0)}
                  </motion.div>
                  <div>
                    <p className="text-xl font-semibold text-brand-black">
                      {testimonials[spotlightIndex].author}
                    </p>
                    <p className="text-body-lg text-neutral-500">
                      {testimonials[spotlightIndex].role}
                      {testimonials[spotlightIndex].company &&
                        ` at ${testimonials[spotlightIndex].company}`}
                    </p>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="flex items-center gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSpotlightIndex(index)}
                      className="relative h-2 rounded-full overflow-hidden bg-neutral-200"
                      style={{ width: index === spotlightIndex ? '48px' : '8px' }}
                    >
                      {index === spotlightIndex && (
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-full"
                          style={{ backgroundColor: industry.colors.primary }}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 6, ease: 'linear' }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );

  // ============================================
  // VARIANT 7: Quote Slider
  // Minimal quote with sliding animation
  // Best for: Insurance, Professional services
  // ============================================
  const renderQuoteSlider = () => (
    <div className="max-w-5xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8"
            style={{ backgroundColor: `${industry.colors.primary}15` }}
          >
            <Quote className="w-10 h-10" style={{ color: industry.colors.primary }} />
          </div>
          
          <blockquote className="text-2xl md:text-4xl font-light text-neutral-800 leading-relaxed mb-10 max-w-4xl mx-auto">
            "{testimonials[activeIndex].quote}"
          </blockquote>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white"
              style={{ backgroundColor: industry.colors.primary }}
            >
              {testimonials[activeIndex].author.charAt(0)}
            </div>
            <div className="text-left">
              <p className="font-semibold text-neutral-900">{testimonials[activeIndex].author}</p>
              <p className="text-neutral-500">
                {testimonials[activeIndex].role}
                {testimonials[activeIndex].company && `, ${testimonials[activeIndex].company}`}
              </p>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-neutral-200 hover:border-neutral-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-600" aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    backgroundColor: index === activeIndex ? industry.colors.primary : '#e5e5e5',
                    transform: index === activeIndex ? 'scale(1.5)' : 'scale(1)',
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : 'false'}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-neutral-200 hover:border-neutral-300 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-neutral-600" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  // ============================================
  // VARIANT 8: Cards Row
  // Horizontal scrolling cards
  // Best for: Architecture, Creative
  // ============================================
  const renderCardsRow = () => (
    <div className="relative -mx-4 px-4 overflow-hidden">
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-[350px] snap-center bg-neutral-900 rounded-3xl p-8"
          >
            <div className="flex items-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-white/90 text-lg leading-relaxed mb-8">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-neutral-900"
                style={{ backgroundColor: industry.colors.primaryLight }}
              >
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-white">{testimonial.author}</p>
                <p className="text-sm text-white/60">
                  {testimonial.role}
                  {testimonial.company && ` · ${testimonial.company}`}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-neutral-50 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-neutral-50 to-transparent pointer-events-none" />
    </div>
  );

  // ============================================
  // VARIANT 9: Centered Quote
  // Single prominent quote with accent
  // Best for: Education, Minimal designs
  // ============================================
  const renderCenteredQuote = () => (
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Large quote mark */}
        <div
          className="absolute -top-8 left-1/2 -translate-x-1/2 text-[200px] font-serif leading-none opacity-10"
          style={{ color: industry.colors.primary }}
        >
          "
        </div>
        
        <div className="relative pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-neutral-800 leading-relaxed font-light mb-10">
                {testimonials[activeIndex].quote}
              </blockquote>
              
              <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: industry.colors.primary }}
                >
                  {testimonials[activeIndex].author.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-neutral-900">{testimonials[activeIndex].author}</p>
                  <p className="text-sm text-neutral-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: index === activeIndex ? industry.colors.primary : '#e5e5e5',
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );

  // ============================================
  // VARIANT 10: Side Scroll
  // Horizontal layout with side info
  // Best for: Recruitment, Modern agencies
  // ============================================
  const renderSideScroll = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left side - info */}
      <div className="lg:col-span-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{ backgroundColor: `${industry.colors.primary}15` }}
          >
            <Quote className="w-8 h-8" style={{ color: industry.colors.primary }} />
          </div>
          <h3 className="text-3xl font-bold text-neutral-900 mb-4">
            What Our Clients Say
          </h3>
          <p className="text-neutral-600 mb-8">
            Real stories from real people who transformed their businesses with our help.
          </p>
          <div className="flex gap-3">
            <button
              onClick={prevTestimonial}
              className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-600" aria-hidden="true" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-4 rounded-2xl text-white transition-colors shadow-sm"
              style={{ backgroundColor: industry.colors.primary }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Right side - testimonials */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-neutral-100"
          >
            <div className="flex items-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-neutral-800 leading-relaxed mb-8">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold text-white"
                  style={{ backgroundColor: industry.colors.primary }}
                >
                  {testimonials[activeIndex].author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{testimonials[activeIndex].author}</p>
                  <p className="text-neutral-500">
                    {testimonials[activeIndex].role}
                    {testimonials[activeIndex].company && ` at ${testimonials[activeIndex].company}`}
                  </p>
                </div>
              </div>
              
              {/* Counter */}
              <div className="hidden md:flex items-center gap-2 text-neutral-400">
                <span className="text-2xl font-bold" style={{ color: industry.colors.primary }}>
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <span>/</span>
                <span>{String(testimonials.length).padStart(2, '0')}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // VARIANT: Floating Cards (Real Estate)
  // ═══════════════════════════════════════════════════════════════════════════
  const renderFloatingCards = () => (
    <div className="relative">
      {/* Background decorative elements */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-5"
        style={{ backgroundColor: industry.colors.primary }}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
        {testimonials.map((testimonial, index) => {
          const yOffset = index % 2 === 0 ? 0 : 24;
          
          return (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: yOffset }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: yOffset - 8, scale: 1.02 }}
              className="relative"
            >
              <div 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                style={{ border: `1px solid ${industry.colors.primary}15` }}
              >
                {/* Quote icon */}
                <div 
                  className="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: industry.colors.primary }}
                >
                  <Quote className="w-5 h-5 text-white" />
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-neutral-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: industry.colors.primary }}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{testimonial.author}</p>
                    <p className="text-neutral-500 text-xs">
                      {testimonial.role}
                      {testimonial.company && ` • ${testimonial.company}`}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <Section id="testimonials" background="light" padding="lg">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-2 text-brand-black mb-4">
            {industry.testimonials.title}
          </h2>
          <p className="text-body-xl text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        {/* Testimonials Content */}
        {variant === 'carousel' && renderCarousel()}
        {variant === 'grid' && renderGrid()}
        {variant === 'featured' && renderFeatured()}
        {variant === 'stacked-cards' && renderStackedCards()}
        {variant === 'masonry' && renderMasonry()}
        {variant === 'spotlight' && renderSpotlight()}
        {variant === 'quote-slider' && renderQuoteSlider()}
        {variant === 'cards-row' && renderCardsRow()}
        {variant === 'centered-quote' && renderCenteredQuote()}
        {variant === 'side-scroll' && renderSideScroll()}
        {variant === 'floating-cards' && renderFloatingCards()}
      </Container>
    </Section>
  );
};

export default Testimonials;
