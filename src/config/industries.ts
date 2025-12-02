/**
 * Industry Configuration
 * 
 * This file contains the configuration for different professional industries.
 * Each industry has its own color scheme, copy, and imagery suggestions.
 */

export type IndustryType = 'accounting' | 'law' | 'healthcare' | 'consulting' | 'financial' | 'realestate' | 'insurance' | 'architecture' | 'education' | 'recruitment' | 'restaurant' | 'boutiquehotel' | 'contractor' | 'dj' | 'fitnessstudio';

export interface IndustryConfig {
  id: IndustryType;
  name: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    accent: string;
  };
  fonts?: {
    heading: string;
    body: string;
    googleFontsUrl: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    ctaSecondary: string;
  };
  services: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  benefits: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      stat?: string;
    }>;
  };
  testimonials: {
    title: string;
    items: Array<{
      quote: string;
      author: string;
      role: string;
      company: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  headerVariant?: 'minimal' | 'centered' | 'double' | 'floating' | 'glass' | 'split' | 'bold' | 'mega' | 'sidebar' | 'search' | 'gradient' | 'bordered' | 'default';
  templateFamily?: import('./templateFamilies').TemplateFamily;
  sections?: Partial<Record<string, { variant?: string; props?: Record<string, unknown> }>>;
  customSections?: Array<{ slot: string; component: string; props?: Record<string, unknown> }>;
  footer: {
    description: string;
  };
}

export const industryConfigs: Record<IndustryType, IndustryConfig> = {
  accounting: {
    id: 'accounting',
    name: 'Accounting Firm',
    tagline: 'Financial Clarity, Delivered',
    description: 'Expert accounting services for businesses and individuals',
    headerVariant: 'double',
    colors: {
      primary: '#0066CC',
      primaryLight: '#3388DD',
      primaryDark: '#004499',
      accent: '#42A344',
    },
    fonts: {
      heading: 'Inter',
      body: 'Lato',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Lato:wght@300;400;700&display=swap'
    },
    hero: {
      headline: 'Streamline Your Finances with Expert Accounting',
      subheadline: 'From tax planning to financial advisory, we help businesses achieve clarity and growth through precision accounting services.',
      cta: 'Get a Free Consultation',
      ctaSecondary: 'View Our Services',
    },
    services: {
      title: 'Comprehensive Accounting Solutions',
      items: [
        {
          icon: 'calculator',
          title: 'Tax Planning & Preparation',
          description: 'Strategic tax planning and preparation services to minimize liabilities and maximize returns.',
        },
        {
          icon: 'chart-bar',
          title: 'Financial Reporting',
          description: 'Accurate, timely financial statements and reports for informed decision-making.',
        },
        {
          icon: 'briefcase',
          title: 'Business Advisory',
          description: 'Expert guidance on business strategy, growth planning, and financial optimization.',
        },
        {
          icon: 'shield-check',
          title: 'Audit & Assurance',
          description: 'Thorough audit services ensuring compliance and building stakeholder confidence.',
        },
        {
          icon: 'users',
          title: 'Payroll Services',
          description: 'Comprehensive payroll management ensuring accuracy and compliance.',
        },
        {
          icon: 'trending-up',
          title: 'CFO Services',
          description: 'Part-time CFO services providing strategic financial leadership.',
        },
      ],
    },
    benefits: {
      title: 'Why Choose Us',
      subtitle: 'Partner with a firm that understands your business',
      items: [
        {
          title: 'Industry Expertise',
          description: 'Specialized knowledge across multiple industries.',
          stat: '25+ Years',
        },
        {
          title: 'Client Satisfaction',
          description: 'Consistently high client satisfaction ratings.',
          stat: '98%',
        },
        {
          title: 'Tax Savings',
          description: 'Average tax savings for our business clients.',
          stat: '$50K+',
        },
        {
          title: 'Response Time',
          description: 'Average response time to client inquiries.',
          stat: '< 4 hrs',
        },
      ],
    },
    testimonials: {
      title: 'What Our Clients Say',
      items: [
        {
          quote: 'Their strategic tax planning saved us over $100,000 last year. The team is professional, responsive, and truly understands our business.',
          author: 'Sarah Mitchell',
          role: 'CEO',
          company: 'TechStart Inc.',
        },
        {
          quote: 'Switching to this firm was the best business decision we made. Our finances have never been clearer.',
          author: 'Michael Chen',
          role: 'Founder',
          company: 'Chen Manufacturing',
        },
        {
          quote: 'The CFO services have been invaluable for our growth. It\'s like having a full-time financial executive at a fraction of the cost.',
          author: 'Jennifer Adams',
          role: 'Managing Director',
          company: 'Adams & Partners',
        },
      ],
    },
    cta: {
      title: 'Ready to Transform Your Finances?',
      subtitle: 'Schedule a free consultation with our experts today.',
      buttonText: 'Book Your Free Consultation',
    },
    footer: {
      description: 'Your trusted partner for comprehensive accounting, tax, and financial advisory services.',
    },
    // Accounting uses professionalServices defaults (split hero)
    sections: {
      Hero: {
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80',
        },
      },
    },
  },
  
  law: {
    id: 'law',
    name: 'Law Firm',
    tagline: 'Justice Through Excellence',
    description: 'Premier legal services with unwavering dedication',
    headerVariant: 'centered',
    colors: {
      primary: '#1E3A5F',
      primaryLight: '#2E5A8F',
      primaryDark: '#0E2A4F',
      accent: '#C9A55C',
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Lora',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;600&display=swap'
    },
    sections: {
      Hero: { 
        variant: 'editorial',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1920&q=80',
        }
      },
      Services: { variant: 'accordion' },
      Benefits: { variant: 'progress-bars' },
      Testimonials: { variant: 'stacked-cards' },
      CTA: { variant: 'minimal' },
      Footer: { variant: 'minimal' },
    },
    hero: {
      headline: 'Trusted Legal Counsel for Complex Challenges',
      subheadline: 'Our experienced attorneys provide strategic legal solutions, protecting your interests and achieving favorable outcomes.',
      cta: 'Schedule a Consultation',
      ctaSecondary: 'Practice Areas',
    },
    services: {
      title: 'Our Practice Areas',
      items: [
        {
          icon: 'building',
          title: 'Corporate Law',
          description: 'Comprehensive corporate legal services from formation to mergers and acquisitions.',
        },
        {
          icon: 'scale',
          title: 'Litigation',
          description: 'Aggressive representation in civil and commercial litigation matters.',
        },
        {
          icon: 'file-text',
          title: 'Real Estate',
          description: 'Full-service real estate legal support for transactions and disputes.',
        },
        {
          icon: 'users',
          title: 'Employment Law',
          description: 'Protecting employers and employees in workplace legal matters.',
        },
        {
          icon: 'shield',
          title: 'Intellectual Property',
          description: 'Comprehensive IP protection including patents, trademarks, and copyrights.',
        },
        {
          icon: 'home',
          title: 'Estate Planning',
          description: 'Protecting your legacy through wills, trusts, and estate administration.',
        },
      ],
    },
    benefits: {
      title: 'Why Choose Our Firm',
      subtitle: 'Dedicated to achieving the best outcomes for our clients',
      items: [
        {
          title: 'Trial Experience',
          description: 'Extensive courtroom experience when litigation is necessary.',
          stat: '500+ Cases',
        },
        {
          title: 'Success Rate',
          description: 'Favorable outcomes for our clients.',
          stat: '95%',
        },
        {
          title: 'Combined Experience',
          description: 'Years of combined legal experience.',
          stat: '150+ Years',
        },
        {
          title: 'Client Focus',
          description: 'Personalized attention to every case.',
          stat: '24/7 Access',
        },
      ],
    },
    testimonials: {
      title: 'Client Testimonials',
      items: [
        {
          quote: 'When our company faced a complex merger, their corporate team guided us through every step. The attention to detail was exceptional.',
          author: 'David Thompson',
          role: 'CEO',
          company: 'Thompson Industries',
        },
        {
          quote: 'Their litigation team achieved a result we didn\'t think possible. Professional, strategic, and relentless.',
          author: 'Rachel Kim',
          role: 'Business Owner',
          company: 'Kim Retail Group',
        },
        {
          quote: 'For estate planning, there\'s no one I\'d trust more. They made a complex process simple and gave us peace of mind.',
          author: 'Robert Martinez',
          role: 'Private Client',
          company: '',
        },
      ],
    },
    cta: {
      title: 'Protect Your Interests Today',
      subtitle: 'Speak with an experienced attorney about your legal needs.',
      buttonText: 'Request a Consultation',
    },
    footer: {
      description: 'A premier law firm providing exceptional legal services across corporate, litigation, and personal legal matters.',
    },
  },
  
  healthcare: {
    id: 'healthcare',
    name: 'Healthcare Practice',
    tagline: 'Compassionate Care, Advanced Medicine',
    description: 'Patient-centered healthcare with cutting-edge treatment',
    headerVariant: 'mega',
    templateFamily: 'healthWellness',
    colors: {
      primary: '#00A89D',
      primaryLight: '#20C8BD',
      primaryDark: '#00887D',
      accent: '#FF6B6B',
    },
    fonts: {
      heading: 'Montserrat',
      body: 'Open Sans',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap'
    },
    sections: {
      Hero: { 
        variant: 'asymmetric',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80',
        }
      },
    },
    hero: {
      headline: 'Exceptional Healthcare, Personalized for You',
      subheadline: 'Experience compassionate, patient-centered care delivered by our team of board-certified specialists using the latest medical advances.',
      cta: 'Book an Appointment',
      ctaSecondary: 'Our Services',
    },
    services: {
      title: 'Our Medical Services',
      items: [
        {
          icon: 'heart',
          title: 'Primary Care',
          description: 'Comprehensive primary care services for patients of all ages.',
        },
        {
          icon: 'activity',
          title: 'Specialized Treatment',
          description: 'Expert care from board-certified specialists across multiple disciplines.',
        },
        {
          icon: 'clipboard',
          title: 'Preventive Care',
          description: 'Proactive health screenings and wellness programs.',
        },
        {
          icon: 'zap',
          title: 'Urgent Care',
          description: 'Same-day appointments for non-emergency medical needs.',
        },
        {
          icon: 'video',
          title: 'Telehealth',
          description: 'Virtual consultations from the comfort of your home.',
        },
        {
          icon: 'calendar',
          title: 'Wellness Programs',
          description: 'Customized wellness and lifestyle management programs.',
        },
      ],
    },
    benefits: {
      title: 'Why Patients Choose Us',
      subtitle: 'Committed to your health and well-being',
      items: [
        {
          title: 'Patient Satisfaction',
          description: 'Consistently rated excellent by our patients.',
          stat: '4.9/5 Rating',
        },
        {
          title: 'Wait Time',
          description: 'Average wait time for appointments.',
          stat: '< 10 min',
        },
        {
          title: 'Specialists',
          description: 'Board-certified specialists on staff.',
          stat: '50+',
        },
        {
          title: 'Insurance Accepted',
          description: 'Major insurance plans accepted.',
          stat: '100+',
        },
      ],
    },
    testimonials: {
      title: 'Patient Stories',
      items: [
        {
          quote: 'The doctors here truly listen. For the first time, I felt like my health concerns were taken seriously and addressed comprehensively.',
          author: 'Emily Watson',
          role: 'Patient',
          company: '',
        },
        {
          quote: 'From the front desk to the physicians, everyone is kind and professional. The telehealth option has been a game-changer for my family.',
          author: 'James Liu',
          role: 'Patient',
          company: '',
        },
        {
          quote: 'Their preventive care program helped me catch a condition early. I\'m grateful for their thorough approach to healthcare.',
          author: 'Maria Santos',
          role: 'Patient',
          company: '',
        },
      ],
    },
    cta: {
      title: 'Your Health Journey Starts Here',
      subtitle: 'Schedule your appointment with our caring medical team.',
      buttonText: 'Book Your Appointment',
    },
    footer: {
      description: 'Providing compassionate, patient-centered healthcare with advanced medical treatments and personalized care.',
    },
  },
  
  consulting: {
    id: 'consulting',
    name: 'Consulting Firm',
    tagline: 'Transform Challenges into Opportunities',
    headerVariant: 'minimal',
    description: 'Strategic consulting for business transformation',
    colors: {
      primary: '#6366F1',
      primaryLight: '#818CF8',
      primaryDark: '#4F46E5',
      accent: '#F59E0B',
    },
    fonts: {
      heading: 'Raleway',
      body: 'Source Sans 3',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Source+Sans+3:wght@400;600&display=swap'
    },
    sections: {
      Hero: { 
        variant: 'bento',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80',
        }
      },
      Services: { variant: 'hover-cards' },
      Benefits: { variant: 'radial' },
      Testimonials: { variant: 'spotlight' },
      CTA: { variant: 'floating' },
      Footer: { variant: 'mega' },
    },
    hero: {
      headline: 'Strategic Consulting for Business Excellence',
      subheadline: 'Partner with our expert consultants to unlock growth, optimize operations, and navigate complex business challenges.',
      cta: 'Start Your Transformation',
      ctaSecondary: 'Our Expertise',
    },
    services: {
      title: 'Consulting Services',
      items: [
        {
          icon: 'trending-up',
          title: 'Growth Strategy',
          description: 'Data-driven strategies to accelerate business growth and market expansion.',
        },
        {
          icon: 'settings',
          title: 'Operations Excellence',
          description: 'Streamline operations to improve efficiency and reduce costs.',
        },
        {
          icon: 'refresh-cw',
          title: 'Digital Transformation',
          description: 'Navigate digital disruption and leverage technology for competitive advantage.',
        },
        {
          icon: 'users',
          title: 'Organizational Design',
          description: 'Build high-performing teams and organizational structures.',
        },
        {
          icon: 'pie-chart',
          title: 'Market Analysis',
          description: 'Deep market insights to inform strategic decisions.',
        },
        {
          icon: 'target',
          title: 'Performance Improvement',
          description: 'Identify and implement improvements across all business functions.',
        },
      ],
    },
    benefits: {
      title: 'The Impact We Deliver',
      subtitle: 'Measurable results that transform businesses',
      items: [
        {
          title: 'Revenue Growth',
          description: 'Average revenue increase for our clients.',
          stat: '+35%',
        },
        {
          title: 'Cost Reduction',
          description: 'Average operational cost savings.',
          stat: '25%',
        },
        {
          title: 'Client Retention',
          description: 'Clients who engage us for additional projects.',
          stat: '90%',
        },
        {
          title: 'Industries Served',
          description: 'Deep expertise across sectors.',
          stat: '15+',
        },
      ],
    },
    testimonials: {
      title: 'Success Stories',
      items: [
        {
          quote: 'Their strategic framework helped us achieve 50% growth in just 18 months. The insights were actionable and the team was exceptional.',
          author: 'Alex Rivera',
          role: 'CEO',
          company: 'Innovate Corp',
        },
        {
          quote: 'The digital transformation roadmap they developed positioned us years ahead of our competitors. Worth every investment.',
          author: 'Linda Park',
          role: 'COO',
          company: 'Global Logistics Inc.',
        },
        {
          quote: 'Their operational excellence program cut our costs by 30% while improving quality. Truly transformational.',
          author: 'Mark Johnson',
          role: 'CFO',
          company: 'Premier Manufacturing',
        },
      ],
    },
    cta: {
      title: 'Ready to Transform Your Business?',
      subtitle: 'Let\'s discuss how we can help you achieve your goals.',
      buttonText: 'Schedule a Strategy Session',
    },
    footer: {
      description: 'Strategic consulting firm specializing in business transformation, growth strategy, and operational excellence.',
    },
  },
  
  financial: {
    id: 'financial',
    name: 'Financial Advisory',
    tagline: 'Building Wealth, Securing Futures',
    headerVariant: 'split',
    description: 'Comprehensive financial planning and wealth management',
    colors: {
      primary: '#047857',
      primaryLight: '#10B981',
      primaryDark: '#065F46',
      accent: '#0891B2',
    },
    fonts: {
      heading: 'EB Garamond',
      body: 'Merriweather',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=Merriweather:wght@300;400;700&display=swap'
    },
    sections: {
      Hero: { 
        variant: 'centered-cards',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1920&q=80',
        }
      },
      Services: { variant: 'tabs' },
      Benefits: { variant: 'comparison' },
      Testimonials: { variant: 'masonry' },
      CTA: { variant: 'stats-cta' },
      Footer: { variant: 'dark-gradient' },
    },
    hero: {
      headline: 'Expert Financial Planning for Your Future',
      subheadline: 'Achieve your financial goals with personalized wealth management strategies from our certified financial advisors.',
      cta: 'Start Planning Today',
      ctaSecondary: 'Our Services',
    },
    services: {
      title: 'Financial Services',
      items: [
        {
          icon: 'trending-up',
          title: 'Wealth Management',
          description: 'Comprehensive portfolio management tailored to your goals.',
        },
        {
          icon: 'umbrella',
          title: 'Retirement Planning',
          description: 'Strategic planning to ensure a comfortable retirement.',
        },
        {
          icon: 'shield',
          title: 'Risk Management',
          description: 'Protect your assets with smart insurance and risk strategies.',
        },
        {
          icon: 'home',
          title: 'Estate Planning',
          description: 'Preserve and transfer wealth efficiently to future generations.',
        },
        {
          icon: 'graduation-cap',
          title: 'Education Planning',
          description: 'Save smart for education expenses with tax-advantaged strategies.',
        },
        {
          icon: 'dollar-sign',
          title: 'Tax Optimization',
          description: 'Minimize tax burden through strategic planning.',
        },
      ],
    },
    benefits: {
      title: 'Why Trust Us',
      subtitle: 'Fiduciary advisors committed to your success',
      items: [
        {
          title: 'Assets Managed',
          description: 'Total assets under management.',
          stat: '$2.5B+',
        },
        {
          title: 'Client Retention',
          description: 'Clients who stay with us year over year.',
          stat: '97%',
        },
        {
          title: 'Average Return',
          description: '10-year average portfolio performance.',
          stat: '12.5%',
        },
        {
          title: 'Certified Advisors',
          description: 'CFP® and CFA® certified professionals.',
          stat: '100%',
        },
      ],
    },
    testimonials: {
      title: 'Client Success',
      items: [
        {
          quote: 'They helped us create a retirement plan that lets us live the life we dreamed of. The peace of mind is priceless.',
          author: 'Robert & Susan Hall',
          role: 'Retired Clients',
          company: '',
        },
        {
          quote: 'Their tax optimization strategies saved me more in one year than I\'d saved in the previous five combined.',
          author: 'Dr. Amanda Foster',
          role: 'Physician',
          company: 'Private Practice',
        },
        {
          quote: 'As a business owner, their wealth management approach helped me separate personal and business finances effectively.',
          author: 'Kevin O\'Brien',
          role: 'Entrepreneur',
          company: 'O\'Brien Ventures',
        },
      ],
    },
    cta: {
      title: 'Secure Your Financial Future',
      subtitle: 'Schedule a complimentary financial review with our advisors.',
      buttonText: 'Get Your Free Review',
    },
    footer: {
      description: 'Fiduciary financial advisors providing wealth management, retirement planning, and comprehensive financial services.',
    },
  },
  
  realestate: {
    id: 'realestate',
    name: 'Real Estate Agency',
    tagline: 'Finding Your Perfect Place',
    headerVariant: 'search',
    description: 'Expert real estate services for buyers, sellers, and investors',
    colors: {
      primary: '#DC2626',
      primaryLight: '#EF4444',
      primaryDark: '#B91C1C',
      accent: '#0284C7',
    },
    fonts: {
      heading: 'Jost',
      body: 'Roboto',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;700&family=Roboto:wght@400;500;700&display=swap'
    },
    sections: {
      Hero: { 
        variant: 'video-bg',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80',
          videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4',
        }
      },
      Services: { variant: 'image-cards' },
      Benefits: { variant: 'animated-counter' },
      Testimonials: { variant: 'floating-cards' },
      CTA: { variant: 'dual-action' },
      Footer: { variant: 'split-brand' },
    },
    hero: {
      headline: 'Find Your Dream Property with Expert Guidance',
      subheadline: 'Whether buying, selling, or investing, our experienced agents provide personalized service to achieve your real estate goals.',
      cta: 'Search Properties',
      ctaSecondary: 'Free Home Valuation',
    },
    services: {
      title: 'Real Estate Services',
      items: [
        {
          icon: 'search',
          title: 'Buyer Representation',
          description: 'Expert guidance through every step of the home buying process.',
        },
        {
          icon: 'home',
          title: 'Seller Services',
          description: 'Strategic marketing to sell your property quickly and at the best price.',
        },
        {
          icon: 'building',
          title: 'Commercial Real Estate',
          description: 'Full-service commercial property sales and leasing.',
        },
        {
          icon: 'trending-up',
          title: 'Investment Properties',
          description: 'Identify and acquire profitable investment opportunities.',
        },
        {
          icon: 'key',
          title: 'Property Management',
          description: 'Comprehensive management services for property owners.',
        },
        {
          icon: 'clipboard',
          title: 'Market Analysis',
          description: 'Detailed market reports and property valuations.',
        },
      ],
    },
    benefits: {
      title: 'Why Work With Us',
      subtitle: 'Your success is our priority',
      items: [
        {
          title: 'Properties Sold',
          description: 'Successfully closed transactions.',
          stat: '2,500+',
        },
        {
          title: 'Sales Volume',
          description: 'Annual transaction volume.',
          stat: '$500M+',
        },
        {
          title: 'Days on Market',
          description: 'Average time to sell a property.',
          stat: '18 Days',
        },
        {
          title: 'Client Rating',
          description: 'Average client satisfaction score.',
          stat: '4.9★',
        },
      ],
    },
    testimonials: {
      title: 'Happy Clients',
      items: [
        {
          quote: 'They found us our dream home in a competitive market. Their negotiation skills saved us $50,000 off the asking price!',
          author: 'The Johnson Family',
          role: 'Home Buyers',
          company: '',
        },
        {
          quote: 'Our house sold in just 5 days, $30,000 over asking. Their marketing strategy was incredible.',
          author: 'Patricia Moore',
          role: 'Home Seller',
          company: '',
        },
        {
          quote: 'As an investor, their market knowledge has helped me build a portfolio of 12 profitable properties.',
          author: 'Steven Clark',
          role: 'Real Estate Investor',
          company: '',
        },
      ],
    },
    cta: {
      title: 'Start Your Real Estate Journey',
      subtitle: 'Connect with an experienced agent today.',
      buttonText: 'Contact an Agent',
    },
    footer: {
      description: 'Full-service real estate agency helping clients buy, sell, and invest in properties with expert guidance.',
    },
  },

  insurance: {
    id: 'insurance',
    name: 'Insurance Agency',
    headerVariant: 'gradient',
    tagline: 'Protection You Can Count On',
    description: 'Comprehensive insurance solutions for life, property, and business',
    colors: {
      primary: '#7C3AED',
      primaryLight: '#8B5CF6',
      primaryDark: '#6D28D9',
      accent: '#F97316',
    },
    fonts: {
      heading: 'PT Serif',
      body: 'Crimson Text',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Crimson+Text:wght@400;600&display=swap'
    },
    sections: {
      Hero: { 
        variant: 'minimal-centered',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80',
        }
      },
      Services: { variant: 'cards' },
      Benefits: { variant: 'bento' },
      Testimonials: { variant: 'quote-slider' },
      CTA: { variant: 'default' },
      Footer: { variant: 'simple-dark' },
    },
    hero: {
      headline: 'Protect What Matters Most to You',
      subheadline: 'From life insurance to business coverage, our expert advisors help you find the right protection for every stage of life.',
      cta: 'Get a Free Quote',
      ctaSecondary: 'Our Coverage Options',
    },
    services: {
      title: 'Insurance Solutions',
      items: [
        {
          icon: 'heart',
          title: 'Life Insurance',
          description: 'Protect your family\'s future with term, whole, and universal life policies.',
        },
        {
          icon: 'home',
          title: 'Home Insurance',
          description: 'Comprehensive coverage for your home and personal property.',
        },
        {
          icon: 'briefcase',
          title: 'Business Insurance',
          description: 'Protect your business with liability, property, and workers\' comp coverage.',
        },
        {
          icon: 'activity',
          title: 'Health Insurance',
          description: 'Individual and group health plans to keep you covered.',
        },
        {
          icon: 'shield',
          title: 'Auto Insurance',
          description: 'Full coverage options for vehicles at competitive rates.',
        },
        {
          icon: 'umbrella',
          title: 'Umbrella Coverage',
          description: 'Extra liability protection beyond standard policy limits.',
        },
      ],
    },
    benefits: {
      title: 'Why Choose Us',
      subtitle: 'Independent agents working for you',
      items: [
        {
          title: 'Carriers Represented',
          description: 'Access to top-rated insurance companies.',
          stat: '50+',
        },
        {
          title: 'Claims Satisfaction',
          description: 'Client claims successfully processed.',
          stat: '99%',
        },
        {
          title: 'Average Savings',
          description: 'Savings when clients switch to us.',
          stat: '$750/yr',
        },
        {
          title: 'Years Serving',
          description: 'Protecting families and businesses.',
          stat: '30+',
        },
      ],
    },
    testimonials: {
      title: 'Client Experiences',
      items: [
        {
          quote: 'When our house flooded, they handled everything. The claim was processed in days, not weeks. True advocates for their clients.',
          author: 'Michelle Torres',
          role: 'Homeowner',
          company: '',
        },
        {
          quote: 'They saved our business $15,000 annually while actually improving our coverage. Independent agents make all the difference.',
          author: 'Greg Patterson',
          role: 'Business Owner',
          company: 'Patterson Construction',
        },
        {
          quote: 'After my husband passed, they guided us through the life insurance claim with such compassion. Forever grateful.',
          author: 'Barbara Williams',
          role: 'Client',
          company: '',
        },
      ],
    },
    cta: {
      title: 'Get Protected Today',
      subtitle: 'Free, no-obligation quotes in minutes.',
      buttonText: 'Get Your Free Quote',
    },
    footer: {
      description: 'Independent insurance agency providing personalized coverage solutions for individuals, families, and businesses.',
    },
  },

  architecture: {
    id: 'architecture',
    name: 'Architecture Studio',
    headerVariant: 'sidebar',
    tagline: 'Designing Spaces That Inspire',
    description: 'Award-winning architectural design for residential and commercial projects',
    colors: {
      primary: '#0F172A',
      primaryLight: '#334155',
      primaryDark: '#020617',
      accent: '#E11D48',
    },
    fonts: {
      heading: 'Bodoni Moda',
      body: 'Libre Baskerville',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,700&family=Libre+Baskerville:wght@400;700&display=swap'
    },
    sections: {
      Hero: { 
        variant: 'image-overlap',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80',
        }
      },
      Services: { variant: 'timeline' },
      Benefits: { variant: 'features' },
      Testimonials: { variant: 'cards-row' },
      CTA: { variant: 'centered' },
      Footer: { variant: 'columns-light' },
    },
    hero: {
      headline: 'Visionary Architecture for Modern Living',
      subheadline: 'We create thoughtful, sustainable designs that transform spaces and enhance lives. From concept to completion, excellence in every detail.',
      cta: 'Start Your Project',
      ctaSecondary: 'View Our Portfolio',
    },
    services: {
      title: 'Design Services',
      items: [
        {
          icon: 'home',
          title: 'Residential Design',
          description: 'Custom homes and renovations that reflect your unique lifestyle.',
        },
        {
          icon: 'building',
          title: 'Commercial Architecture',
          description: 'Innovative spaces for offices, retail, and hospitality.',
        },
        {
          icon: 'target',
          title: 'Interior Design',
          description: 'Cohesive interior solutions that complement architectural vision.',
        },
        {
          icon: 'refresh-cw',
          title: 'Renovation & Restoration',
          description: 'Breathing new life into existing structures with thoughtful updates.',
        },
        {
          icon: 'zap',
          title: 'Sustainable Design',
          description: 'Eco-friendly architecture that minimizes environmental impact.',
        },
        {
          icon: 'clipboard',
          title: 'Planning & Permits',
          description: 'Navigate approvals and regulations with expert guidance.',
        },
      ],
    },
    benefits: {
      title: 'Why Work With Us',
      subtitle: 'Design excellence recognized worldwide',
      items: [
        {
          title: 'Design Awards',
          description: 'International and national design recognitions.',
          stat: '45+',
        },
        {
          title: 'Projects Completed',
          description: 'Successfully delivered across 3 continents.',
          stat: '200+',
        },
        {
          title: 'Sustainable Projects',
          description: 'Projects achieving green certification.',
          stat: '80%',
        },
        {
          title: 'On-Time Delivery',
          description: 'Projects completed on schedule.',
          stat: '95%',
        },
      ],
    },
    testimonials: {
      title: 'Client Stories',
      items: [
        {
          quote: 'They transformed our vision into a home that exceeds everything we imagined. Every detail was considered, every challenge solved creatively.',
          author: 'Daniel & Lisa Moore',
          role: 'Homeowners',
          company: '',
        },
        {
          quote: 'Our new headquarters has transformed our company culture. The design attracts top talent and inspires our team daily.',
          author: 'Christina Wells',
          role: 'CEO',
          company: 'Innovate Labs',
        },
        {
          quote: 'The sustainable design they created reduced our energy costs by 40% while creating a stunning space.',
          author: 'Thomas Reed',
          role: 'Property Developer',
          company: 'Reed Development Group',
        },
      ],
    },
    cta: {
      title: 'Let\'s Create Something Extraordinary',
      subtitle: 'Schedule a consultation to discuss your vision.',
      buttonText: 'Start the Conversation',
    },
    footer: {
      description: 'Award-winning architecture studio creating innovative, sustainable designs for residential and commercial spaces.',
    },
  },

  education: {
    id: 'education',
    name: 'Education Center',
    headerVariant: 'mega',
    tagline: 'Empowering Future Leaders',
    description: 'Excellence in education through personalized learning',
    colors: {
      primary: '#2563EB',
      primaryLight: '#3B82F6',
      primaryDark: '#1D4ED8',
      accent: '#16A34A',
    },
    fonts: {
      heading: 'Fredoka',
      body: 'Varela Round',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Varela+Round&display=swap'
    },
    sections: {
      Hero: { 
        variant: 'diagonal-split',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80',
        }
      },
      Services: { variant: 'masonry' },
      Benefits: { variant: 'stats' },
      Testimonials: { variant: 'centered-quote' },
      CTA: { variant: 'split' },
      Footer: { variant: 'stacked' },
    },
    hero: {
      headline: 'Unlock Your Child\'s Full Potential',
      subheadline: 'Personalized education programs that inspire curiosity, build confidence, and prepare students for success in an ever-changing world.',
      cta: 'Schedule a Tour',
      ctaSecondary: 'Our Programs',
    },
    services: {
      title: 'Educational Programs',
      items: [
        {
          icon: 'graduation-cap',
          title: 'Academic Tutoring',
          description: 'One-on-one and small group tutoring across all subjects and grade levels.',
        },
        {
          icon: 'target',
          title: 'Test Preparation',
          description: 'SAT, ACT, and standardized test prep with proven results.',
        },
        {
          icon: 'zap',
          title: 'STEM Programs',
          description: 'Hands-on science, technology, engineering, and math enrichment.',
        },
        {
          icon: 'users',
          title: 'College Counseling',
          description: 'Expert guidance through the college application process.',
        },
        {
          icon: 'calendar',
          title: 'Summer Programs',
          description: 'Engaging summer camps and academic enrichment courses.',
        },
        {
          icon: 'video',
          title: 'Online Learning',
          description: 'Flexible virtual programs that fit your schedule.',
        },
      ],
    },
    benefits: {
      title: 'Why Parents Choose Us',
      subtitle: 'Results that speak for themselves',
      items: [
        {
          title: 'Score Improvement',
          description: 'Average SAT score increase.',
          stat: '+200 pts',
        },
        {
          title: 'College Acceptance',
          description: 'Students accepted to top-choice schools.',
          stat: '94%',
        },
        {
          title: 'Student:Teacher Ratio',
          description: 'Personalized attention guaranteed.',
          stat: '4:1',
        },
        {
          title: 'Parent Satisfaction',
          description: 'Would recommend to other families.',
          stat: '98%',
        },
      ],
    },
    testimonials: {
      title: 'Success Stories',
      items: [
        {
          quote: 'My daughter went from struggling in math to earning straight A\'s. The confidence she\'s gained extends far beyond academics.',
          author: 'Jennifer Chang',
          role: 'Parent',
          company: '',
        },
        {
          quote: 'Their college counseling program was invaluable. My son got into his dream school with significant scholarship support.',
          author: 'Richard Hayes',
          role: 'Parent',
          company: '',
        },
        {
          quote: 'The STEM camp sparked my interest in engineering. Now I\'m pursuing my degree at MIT!',
          author: 'Sarah Kim',
          role: 'Former Student',
          company: 'MIT Class of 2025',
        },
      ],
    },
    cta: {
      title: 'Invest in Your Child\'s Future',
      subtitle: 'Schedule a free assessment and campus tour.',
      buttonText: 'Book Your Free Tour',
    },
    footer: {
      description: 'Premier education center providing personalized tutoring, test prep, and enrichment programs for students of all ages.',
    },
  },

  recruitment: {
    id: 'recruitment',
    headerVariant: 'split',
    name: 'Recruitment Agency',
    tagline: 'Connecting Talent with Opportunity',
    description: 'Executive search and staffing solutions for growing companies',
    colors: {
      primary: '#EA580C',
      primaryLight: '#F97316',
      primaryDark: '#C2410C',
      accent: '#0D9488',
    },
    fonts: {
      heading: 'Zilla Slab',
      body: 'Inter',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;700&family=Inter:wght@400;600;700&display=swap'
    },
    sections: {
      Hero: { 
        variant: 'floating-elements',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80',
        }
      },
      Services: { variant: 'spotlight' },
      Benefits: { variant: 'icon-list' },
      Testimonials: { variant: 'side-scroll' },
      CTA: { variant: 'banner' },
      Footer: { variant: 'modern-grid' },
    },
    hero: {
      headline: 'Find Exceptional Talent, Build Winning Teams',
      subheadline: 'From executive search to contract staffing, we connect organizations with the people who drive success.',
      cta: 'Find Talent Now',
      ctaSecondary: 'Submit Your Resume',
    },
    services: {
      title: 'Recruitment Services',
      items: [
        {
          icon: 'search',
          title: 'Executive Search',
          description: 'Identify and attract C-suite and senior leadership talent.',
        },
        {
          icon: 'users',
          title: 'Permanent Placement',
          description: 'Full-time hiring solutions across industries and functions.',
        },
        {
          icon: 'calendar',
          title: 'Contract Staffing',
          description: 'Flexible workforce solutions for project-based needs.',
        },
        {
          icon: 'briefcase',
          title: 'RPO Solutions',
          description: 'Recruitment process outsourcing for scalable hiring.',
        },
        {
          icon: 'target',
          title: 'Talent Assessment',
          description: 'Comprehensive evaluations to ensure the right fit.',
        },
        {
          icon: 'trending-up',
          title: 'Market Intelligence',
          description: 'Salary benchmarking and talent market insights.',
        },
      ],
    },
    benefits: {
      title: 'Why Partner With Us',
      subtitle: 'Proven results in talent acquisition',
      items: [
        {
          title: 'Placements Made',
          description: 'Successful hires across all industries.',
          stat: '10,000+',
        },
        {
          title: 'Time to Fill',
          description: 'Average days to present qualified candidates.',
          stat: '14 Days',
        },
        {
          title: 'Retention Rate',
          description: 'Candidates still employed after 1 year.',
          stat: '92%',
        },
        {
          title: 'Client Satisfaction',
          description: 'Would use our services again.',
          stat: '96%',
        },
      ],
    },
    testimonials: {
      title: 'Success Stories',
      items: [
        {
          quote: 'They found us a CTO who transformed our engineering organization. The executive search was thorough and delivered exceptional candidates.',
          author: 'Amanda Price',
          role: 'CEO',
          company: 'TechVenture Inc.',
        },
        {
          quote: 'When we needed to scale our team by 50 people in 3 months, they delivered. Quality candidates, on time, every time.',
          author: 'Marcus Webb',
          role: 'VP of Operations',
          company: 'ScaleUp Corp',
        },
        {
          quote: 'As a candidate, they truly understood my career goals. They found me a role that exceeded my expectations.',
          author: 'Diana Martinez',
          role: 'Director of Marketing',
          company: 'Global Brands Ltd.',
        },
      ],
    },
    cta: {
      title: 'Ready to Build Your Dream Team?',
      subtitle: 'Let\'s discuss your hiring needs today.',
      buttonText: 'Start Hiring',
    },
    footer: {
      description: 'Premier recruitment agency specializing in executive search, permanent placement, and contract staffing solutions.',
    },
  },

  // Hospitality & Creative (Non-Professional) -- Minimal entries for the new templates
  restaurant: {
    id: 'restaurant',
    name: 'Neon Plate',
    headerVariant: 'glass',
    tagline: 'Savor the Night',
    description: 'An elevated dining experience with seasonal menus and crafted cocktails.',
    templateFamily: 'hospitalityCulinary',
    colors: {
      primary: '#B91C1C',
      primaryLight: '#EF4444',
      primaryDark: '#7F1D1D',
      accent: '#F59E0B',
    },
    fonts: {
      heading: 'Abril Fatface',
      body: 'Source Sans 3',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Source+Sans+3:wght@400;600&display=swap'
    },
    sections: {
      Hero: {
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80',
        }
      },
      Custom: {
        props: {
          images: [
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', // Interior
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', // Food
            'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80', // Drink
            'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80', // Atmosphere
          ]
        }
      }
    },
    hero: {
      headline: 'Seasonal Dishes, Unforgettable Nights',
      subheadline: 'Reserve your table for a curated dining experience that blends farm-fresh ingredients with innovative techniques.',
      cta: 'Reserve Table',
      ctaSecondary: 'View Menu',
    },
    services: {
      title: 'Experiences & Seating',
      items: [
        { icon: 'menu', title: 'Tasting Menu', description: 'Chef-led multi-course tasting menus.' },
        { icon: 'calendar', title: 'Events & Private Dining', description: 'Host your celebrations with tailored menus.' },
        { icon: 'wine', title: 'Curated Wine Pairings', description: 'Sommelier-selected pairings for every course.' },
      ],
    },
    benefits: {
      title: 'What Makes Us Special',
      subtitle: 'Artisanal, seasonal, unforgettable',
      items: [
        { title: 'Chef Experience', description: 'Award-winning chef team.' },
        { title: 'Sourcing', description: 'Local, ethical suppliers.' },
      ],
    },
    testimonials: {
      title: 'Guests Love Us',
      items: [
        { quote: 'A night to remember. Food and service were phenomenal.', author: 'Olivia R.', role: 'Food Critic', company: 'Gourmet Daily' },
      ],
    },
    cta: { title: 'Book A Table', subtitle: 'Reserve now for a special evening.', buttonText: 'Reserve' },
    footer: { description: 'Fine dining, private events, and an unforgettable atmosphere.' },
  },

  boutiquehotel: {
    id: 'boutiquehotel',
    name: 'Harbor House',
    headerVariant: 'floating',
    tagline: 'Stay in Style',
    description: 'A boutique hotel focusing on curated experiences and local culture.',
    templateFamily: 'hospitalityCulinary',
    colors: {
      primary: '#0F172A',
      primaryLight: '#334155',
      primaryDark: '#020617',
      accent: '#F59E0B',
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Lora',
      googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;700&display=swap'
    },
    sections: {
      Hero: {
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
        }
      },
      Custom: {
        props: {
          images: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', // Hotel Lobby
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', // Room
            'https://images.unsplash.com/photo-1571896349842-6e53ce41e86a?auto=format&fit=crop&w=800&q=80', // Pool/Spa
            'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80', // Detail
          ]
        }
      }
    },
    hero: { headline: 'Curated Stays & Bespoke Comfort', subheadline: 'Enjoy local art, elevated hospitality, and an attentive experience.', cta: 'Book a Room', ctaSecondary: 'View Rooms' },
    services: { title: 'Guest Services', items: [ { icon: 'home', title: 'Concierge', description: 'Local experiences and tailored itineraries' }, { icon: 'room-service', title: 'Room Service', description: 'Seasonal, locally sourced menus' } ] },
    benefits: { title: 'Why Guests Love Us', subtitle: 'Luxury with personality', items: [ { title: 'Location', description: 'Walkable to local attractions' }, { title: 'Design', description: 'Thoughtful interiors by local artists' } ] },
    testimonials: { title: 'Guest Reviews', items: [ { quote: 'An intimate escape with incredible service.', author: 'M. Bennett', role: 'Traveler', company: '' } ] },
    cta: { title: 'Plan Your Stay', subtitle: 'Rooms fill fast — reserve today.', buttonText: 'Reserve Now' },
    footer: { description: 'Boutique hospitality blending local culture and design.' },
  },

  contractor: {
    id: 'contractor',
    headerVariant: 'bordered',
    name: 'BuildRight Co.',
    tagline: 'Craft. Build. Deliver.',
    description: 'Residential and commercial contracting with a focus on quality and trust.',
    templateFamily: 'tradesFieldServices',
    colors: { primary: '#EA580C', primaryLight: '#F97316', primaryDark: '#C2410C', accent: '#111827' },
    fonts: { heading: 'Zilla Slab', body: 'Inter', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;700&family=Inter:wght@400;600;700&display=swap' },
    sections: {
      Hero: {
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
        }
      },
      ProcessSteps: {
        props: {
          image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
        }
      },
      ServiceAreaMap: {
        props: {
          image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&q=80',
        }
      }
    },
    hero: { headline: 'Reliable Contracting For Your Project', subheadline: 'Skilled crews, transparent quoting, and proven delivery.', cta: 'Get A Quote', ctaSecondary: 'Our Projects' },
    services: { title: 'Contractor Services', items: [ { icon: 'home', title: 'Renovation', description: 'Full-service home remodeling' }, { icon: 'tool', title: 'Construction', description: 'Commercial buildouts' }, { icon: 'shield', title: 'Repairs', description: 'Fast and reliable repairs' } ] },
    benefits: { title: 'Our Guarantees', subtitle: 'Quality workmanship', items: [ { title: 'Licensed', description: 'Fully licensed & insured' }, { title: 'Warranty', description: 'Workmanship warranty on projects' } ] },
    testimonials: { title: 'Client Feedback', items: [ { quote: 'Delivered on time and under budget — highly recommended.', author: 'S. Carter', role: 'Homeowner', company: '' } ] },
    cta: { title: 'Request A Quote', subtitle: 'Get a fast, free estimate.', buttonText: 'Request Quote' },
    footer: { description: 'Experienced general contractors serving residential & commercial clients.' },
  },

  dj: {
    id: 'dj',
    headerVariant: 'bold',
    name: 'DeckWave',
    tagline: 'Beats That Move You',
    description: 'DJ and live performance services for clubs, weddings, and events.',
    templateFamily: 'creativeEvents',
    colors: { primary: '#111827', primaryLight: '#374151', primaryDark: '#0B1220', accent: '#F472B6' },
    fonts: { heading: 'Fugaz One', body: 'Source Sans 3', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Fugaz+One&family=Source+Sans+3:wght@400;600&display=swap' },
    sections: {
      Hero: {
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=1920&q=80',
        }
      },
      CreativeMoodboard: {
        props: {
          images: [
            'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80', // Main
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', // Top 1
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80', // Top 2
            'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80', // Top 3
          ]
        }
      },
      ShowcaseGallery: {
        props: {
          images: [
            'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
          ]
        }
      }
    },
    hero: { headline: 'Live Performances & Tailored Mixes', subheadline: 'From intimate parties to sold-out shows, we bring the energy.', cta: 'Book A Show', ctaSecondary: 'Listen to Mixes' },
    services: { title: 'Services', items: [ { icon: 'music', title: 'Event DJ', description: 'Keep the crowd moving' }, { icon: 'playlist', title: 'Custom Mixes', description: 'Non-stop custom mixes' } ] },
    benefits: { title: 'Why Book Us', subtitle: 'Professional sound & energy', items: [ { title: 'Gear', description: 'Top-tier sound and lighting' }, { title: 'Experience', description: 'Years performing live events' } ] },
    testimonials: { title: 'Client Reactions', items: [ { quote: 'Packed the dancefloor every set!', author: 'K. Spencer', role: 'Event Promoter', company: '' } ] },
    cta: { title: 'Hire Us For Your Next Event', subtitle: 'We tailor the vibe to your audience.', buttonText: 'Contact' },
    footer: { description: 'High-energy DJ & live performance services for events and parties.' },
  },

  fitnessstudio: {
    id: 'fitnessstudio',
    headerVariant: 'minimal',
    name: 'CoreFlow Studio',
    tagline: 'Move Better, Live Better',
    description: 'Group classes, personal training, and wellness coaching.',
    templateFamily: 'healthWellness',
    colors: { primary: '#10B981', primaryLight: '#34D399', primaryDark: '#047857', accent: '#111827' },
    fonts: { heading: 'Fredoka', body: 'Varela Round', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Varela+Round&display=swap' },
    sections: {
      Hero: {
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80',
        }
      },
      TransformationStory: {
        props: {
          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
        }
      }
    },
    hero: { headline: 'Small Group Classes & Personal Training', subheadline: 'Find your fit with expert coaches and community-driven classes.', cta: 'Try A Class', ctaSecondary: 'View Schedule' },
    services: { title: 'Classes', items: [ { icon: 'activity', title: 'HIIT', description: 'High intensity interval training' }, { icon: 'dumbbell', title: 'Strength', description: 'Resistance training' } ] },
    benefits: { title: 'Studio Benefits', subtitle: 'Community & results', items: [ { title: 'Coaches', description: 'Certifed coaches' }, { title: 'Flexible Schedule', description: 'Multiple daily classes' } ] },
    testimonials: { title: 'Success Stories', items: [ { quote: 'I transformed my fitness journey here.', author: 'L. Morales', role: 'Member', company: '' } ] },
    cta: { title: 'Start Your Journey', subtitle: 'Book a free trial class.', buttonText: 'Book Trial' },
    footer: { description: 'Local fitness studio focusing on results and community.' },
  },
};

export const getIndustryConfig = (industry: IndustryType): IndustryConfig => {
  return industryConfigs[industry];
};

export const getAllIndustries = (): IndustryType[] => {
  return Object.keys(industryConfigs) as IndustryType[];
};
