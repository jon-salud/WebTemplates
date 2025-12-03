/**
 * Industry Configuration
 * 
 * This file contains the configuration for different professional industries.
 * Each industry has its own color scheme, copy, and imagery suggestions.
 */

export type IndustryType = 'accounting' | 'law' | 'healthcare' | 'consulting' | 'financial' | 'realestate' | 'insurance' | 'architecture' | 'education' | 'recruitment' | 'restaurant' | 'boutiquehotel' | 'contractor' | 'dj' | 'fitnessstudio' | 'dental' | 'spa' | 'therapist' | 'electrician' | 'landscaper' | 'weddingplanner' | 'photographer' | 'eventvenue' | 'saas' | 'fintech' | 'cybersecurity' | 'devtools' | 'interiordesign';

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
  themeMode?: 'light' | 'dark';
  themeColors?: {
    background: string;
    surface: string;
    text: string;
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
    templateFamily: 'realtyArchitecture',
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
      ShowcaseGallery: {
        props: {
          title: 'Featured Properties',
          items: [
            { title: 'Modern Downtown Loft', subtitle: '$1,250,000 • 2 Bed, 2 Bath', gradient: 'from-neutral-900 to-neutral-800' },
            { title: 'Suburban Family Home', subtitle: '$850,000 • 4 Bed, 3 Bath', gradient: 'from-blue-900 to-slate-800' },
            { title: 'Waterfront Villa', subtitle: '$3,500,000 • 5 Bed, 6 Bath', gradient: 'from-cyan-900 to-blue-900' },
            { title: 'Historic Brownstone', subtitle: '$2,100,000 • 3 Bed, 2.5 Bath', gradient: 'from-stone-800 to-stone-900' },
          ],
          images: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
          ]
        }
      },
      Services: { variant: 'image-cards' },
      AwardsBadges: {
        props: {
          awards: ['Top 1% Nationwide', 'Best of Zillow', 'Luxury Portfolio Int.', 'Realtor of the Year']
        }
      },
      Testimonials: { variant: 'masonry' },
      ServiceAreaMap: {
        props: {
          image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1920&q=80',
        }
      },
      TeamCredentials: {
        props: {
          members: [
            { name: 'Sarah Jenkins', role: 'Broker / Owner', bio: '20+ years of experience in luxury real estate.' },
            { name: 'Michael Chen', role: 'Senior Agent', bio: 'Specializing in downtown condos and investment properties.' },
            { name: 'Jessica Williams', role: 'Buyer Specialist', bio: 'Helping first-time buyers find their dream home.' }
          ]
        }
      },
      CTA: { variant: 'dual-action' },
      Footer: { variant: 'columns-light' },
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
    templateFamily: 'realtyArchitecture',
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
      ShowcaseGallery: {
        props: {
          title: 'Selected Works',
          items: [
            { title: 'The Glass Pavilion', subtitle: 'Residential • 2024', gradient: 'from-neutral-900 to-neutral-800' },
            { title: 'Tech Hub HQ', subtitle: 'Commercial • 2023', gradient: 'from-blue-900 to-slate-800' },
            { title: 'Urban Museum', subtitle: 'Cultural • 2022', gradient: 'from-stone-800 to-stone-900' },
            { title: 'Eco Resort', subtitle: 'Hospitality • 2023', gradient: 'from-green-900 to-emerald-900' },
          ],
          images: [
            'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
          ]
        }
      },
      Services: { variant: 'timeline' },
      AwardsBadges: {
        props: {
          awards: ['AIA Design Award', 'LEED Platinum', 'ArchDaily Building of the Year', 'Dezeen Awards']
        }
      },
      Testimonials: { variant: 'cards-row' },
      ServiceAreaMap: {
        props: {
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
        }
      },
      TeamCredentials: {
        props: {
          members: [
            { name: 'David Ross', role: 'Principal Architect', bio: 'Award-winning architect with a focus on sustainable design.' },
            { name: 'Elena M.', role: 'Design Director', bio: 'Leading our interior architecture division.' },
            { name: 'James K.', role: 'Project Manager', bio: 'Ensuring seamless execution from concept to completion.' }
          ]
        }
      },
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
        variant: 'video-bg',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80',
          videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-people-dining-in-a-restaurant-4336-large.mp4'
        }
      },
      AwardsBadges: {
        props: {
          awards: ['Michelin Star 2024', 'James Beard Award', '50 Best Discovery', 'Wine Spectator Grand Award']
        }
      },
      Services: { variant: 'image-cards' },
      MenuPreview: {
        props: {
          title: 'Signature Tasting Menu',
          items: [
            { name: 'Wagyu Beef Tartare', description: 'Smoked egg yolk, caper berries, sourdough crisp', price: '$28' },
            { name: 'Pan-Seared Scallops', description: 'Cauliflower purée, truffle vinaigrette, hazelnut', price: '$34' },
            { name: 'Herb-Crusted Lamb Rack', description: 'Fondant potato, seasonal greens, rosemary jus', price: '$42' },
            { name: 'Dark Chocolate Ganache', description: 'Sea salt, olive oil, raspberry sorbet', price: '$16' }
          ]
        }
      },
      AmbientGallery: {
        props: {
          images: [
            'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80', // Bar
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', // Food
            'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80', // Cocktail
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', // Atmosphere
          ]
        }
      },
      Testimonials: { variant: 'quote-slider' },
      CTA: { variant: 'dual-action' },
      Footer: { variant: 'split-brand' }
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
        variant: 'image-overlap',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
        }
      },
      AwardsBadges: {
        props: {
          awards: ['Condé Nast Traveler', 'Travel + Leisure It List', 'Tablet Hotels Selection', 'Design Hotels Member']
        }
      },
      Services: { variant: 'spotlight' },
      MenuPreview: {
        props: {
          title: 'Accommodations',
          items: [
            { name: 'Ocean View Suite', description: 'Panoramic ocean views, private balcony, soaking tub.', price: 'from $450' },
            { name: 'Garden Villa', description: 'Private garden access, outdoor shower, plunge pool.', price: 'from $650' },
            { name: 'The Penthouse', description: 'Top floor exclusivity, wrap-around terrace, chef\'s kitchen.', price: 'from $1200' },
            { name: 'Harbor Room', description: 'Cozy and chic, overlooking the historic harbor.', price: 'from $295' }
          ]
        }
      },
      AmbientGallery: {
        props: {
          images: [
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', // Room
            'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80', // Pool
            'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80', // Detail
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', // Resort
          ]
        }
      },
      Testimonials: { variant: 'cards-row' },
      CTA: { variant: 'minimal' },
      Footer: { variant: 'simple-dark' }
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
        variant: 'split',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80',
          showUrgency: true
        }
      },
      CertificationStrip: {
        props: {
          badges: ['Licensed', 'Insured', 'Bonded', 'OSHA Certified']
        }
      },
      Services: { variant: 'cards' },
      ProcessSteps: {
        props: {
          image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
        }
      },
      ServiceAreaMap: {
        props: {
          image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&q=80',
        }
      },
      Benefits: { variant: 'icon-list' },
      Testimonials: { variant: 'side-scroll' },
      CTA: { variant: 'banner' },
      Footer: { variant: 'simple-dark' }
    },
    hero: { headline: 'Reliable Contracting For Your Project', subheadline: 'Skilled crews, transparent quoting, and proven delivery.', cta: 'Get A Quote', ctaSecondary: 'Our Projects' },
    services: { title: 'Contractor Services', items: [ { icon: 'home', title: 'Renovation', description: 'Full-service home remodeling' }, { icon: 'tool', title: 'Construction', description: 'Commercial buildouts' }, { icon: 'shield', title: 'Repairs', description: 'Fast and reliable repairs' } ] },
    benefits: { title: 'Our Guarantees', subtitle: 'Quality workmanship', items: [ { title: 'Licensed', description: 'Fully licensed & insured' }, { title: 'Warranty', description: 'Workmanship warranty on projects' } ] },
    testimonials: { title: 'Client Feedback', items: [ { quote: 'Delivered on time and under budget — highly recommended.', author: 'S. Carter', role: 'Homeowner', company: '' } ] },
    cta: { title: 'Request A Quote', subtitle: 'Get a fast, free estimate.', buttonText: 'Request Quote' },
    footer: { description: 'Experienced general contractors serving residential & commercial clients.' },
  },

  electrician: {
    id: 'electrician',
    headerVariant: 'bold',
    name: 'VoltMasters',
    tagline: 'Powering Your World',
    description: 'Expert electrical services for residential and commercial needs.',
    templateFamily: 'tradesFieldServices',
    colors: { primary: '#EAB308', primaryLight: '#FACC15', primaryDark: '#CA8A04', accent: '#1E293B' },
    fonts: { heading: 'Chakra Petch', body: 'Roboto', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&family=Roboto:wght@400;500&display=swap' },
    sections: {
      Hero: {
        variant: 'minimal-centered',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80',
          showUrgency: true
        }
      },
      CertificationStrip: {
        props: {
          badges: ['Master Electrician', '24/7 Emergency', 'Safety First']
        }
      },
      Services: { variant: 'icon-grid' },
      ProcessSteps: {
        props: {
          image: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&w=800&q=80',
        }
      },
      ServiceAreaMap: {
        props: {
          image: 'https://images.unsplash.com/photo-1518259102261-b40117eabbc9?auto=format&fit=crop&w=1920&q=80',
        }
      },
      Benefits: { variant: 'stats' },
      Testimonials: { variant: 'grid' },
      CTA: { variant: 'with-form' },
      Footer: { variant: 'simple-dark' }
    },
    hero: { headline: 'Fast, Safe Electrical Solutions', subheadline: 'From emergency repairs to full system upgrades, trust our certified electricians.', cta: 'Call Now', ctaSecondary: 'Schedule Service' },
    services: { title: 'Electrical Services', items: [ { icon: 'zap', title: 'Repairs', description: 'Troubleshooting and fixing outages' }, { icon: 'sun', title: 'Lighting', description: 'Indoor and outdoor lighting installation' }, { icon: 'cpu', title: 'Panel Upgrades', description: 'Modernize your electrical system' } ] },
    benefits: { title: 'Why Choose VoltMasters', subtitle: 'Safety & Reliability', items: [ { title: 'Response', description: 'Under 60 min emergency response' }, { title: 'Certified', description: 'Licensed Master Electricians' } ] },
    testimonials: { title: 'Customer Reviews', items: [ { quote: 'Fixed our power outage in the middle of the night. Lifesavers!', author: 'J. Doe', role: 'Homeowner', company: '' } ] },
    cta: { title: 'Need an Electrician?', subtitle: 'Available 24/7 for emergencies.', buttonText: 'Get Help Now' },
    footer: { description: 'Your local expert electricians for safe and reliable power solutions.' },
  },

  landscaper: {
    id: 'landscaper',
    headerVariant: 'split',
    name: 'GreenScapes',
    tagline: 'Nature, Designed.',
    description: 'Professional landscaping and outdoor living design.',
    templateFamily: 'tradesFieldServices',
    colors: { primary: '#15803D', primaryLight: '#22C55E', primaryDark: '#14532D', accent: '#A3E635' },
    fonts: { heading: 'Bitter', body: 'Lato', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Lato:wght@400;700&display=swap' },
    sections: {
      Hero: {
        variant: 'video-bg',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1920&q=80',
        }
      },
      CertificationStrip: {
        props: {
          badges: ['Certified Arborist', 'Eco-Friendly', 'Award Winning']
        }
      },
      Services: { variant: 'image-cards' },
      ProcessSteps: {
        props: {
          image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
        }
      },
      ServiceAreaMap: {
        props: {
          image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80',
        }
      },
      Benefits: { variant: 'bento' },
      Testimonials: { variant: 'carousel' },
      CTA: { variant: 'split' },
      Footer: { variant: 'columns-light' }
    },
    hero: { headline: 'Transform Your Outdoor Space', subheadline: 'Create the garden of your dreams with our expert design and maintenance services.', cta: 'Free Consultation', ctaSecondary: 'View Portfolio' },
    services: { title: 'Landscaping Services', items: [ { icon: 'flower', title: 'Garden Design', description: 'Custom planting and layout' }, { icon: 'scissors', title: 'Maintenance', description: 'Lawn care and pruning' }, { icon: 'droplet', title: 'Irrigation', description: 'Efficient water systems' } ] },
    benefits: { title: 'Our Promise', subtitle: 'Beautiful & Sustainable', items: [ { title: 'Native Plants', description: 'Eco-friendly selection' }, { title: 'Expert Care', description: 'Horticulture specialists' } ] },
    testimonials: { title: 'Happy Clients', items: [ { quote: 'Our backyard is now our favorite room in the house.', author: 'A. Smith', role: 'Client', company: '' } ] },
    cta: { title: 'Ready to Grow?', subtitle: 'Schedule your design consultation.', buttonText: 'Start Project' },
    footer: { description: 'Creating beautiful outdoor living spaces for homes and businesses.' },
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
        variant: 'bento',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=1920&q=80',
        }
      },
      ClientMarquee: {
        props: {
          clients: ['Coachella', 'Boiler Room', 'Ultra Music', 'Spotify', 'Red Bull', 'Mixmag']
        }
      },
      AnimatedLogoSection: {
        props: {
          logoId: 'pulse-mark'
        }
      },
      CreativeMoodboard: {
        props: {
          title: 'Sonic Landscapes & Visual Rhythms',
          description: 'We craft immersive audio-visual experiences that resonate with the crowd\'s energy.',
          stats: [
            { label: 'Genre', value: 'Deep House / Techno' },
            { label: 'BPM', value: '124 - 132' },
            { label: 'Vibe', value: 'Electric & Hypnotic' }
          ],
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
          items: [
            { title: 'Neon Rooftop', subtitle: 'Live Mix', gradient: 'from-indigo-500/60 via-sky-400/40 to-teal-400/30' },
            { title: 'Underground Club', subtitle: 'Techno Set', gradient: 'from-purple-900/80 via-indigo-900/60 to-black/80' },
            { title: 'Festival Mainstage', subtitle: 'Headliner', gradient: 'from-amber-400/50 via-orange-500/40 to-pink-500/30' },
            { title: 'Private Yacht', subtitle: 'Sunset Session', gradient: 'from-blue-400/50 via-cyan-300/40 to-teal-200/30' },
          ],
          images: [
            'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=800&q=80',
          ]
        }
      },
      CreativeProcess: {
        props: {
          steps: [
            { title: 'Vibe Check', detail: 'We curate the perfect playlist based on your event theme.' },
            { title: 'Sound Design', detail: 'Custom edits and transitions for a seamless flow.' },
            { title: 'Live Performance', detail: 'High-energy mixing that reads the crowd perfectly.' },
          ]
        }
      },
      Services: { variant: 'hover-cards' },
      Benefits: { variant: 'radial' },
      Testimonials: { variant: 'floating-cards' },
      CTA: { variant: 'split' },
      Footer: { variant: 'modern-grid' }
    },
    hero: { headline: 'Live Performances & Tailored Mixes', subheadline: 'From intimate parties to sold-out shows, we bring the energy.', cta: 'Book A Show', ctaSecondary: 'Listen to Mixes' },
    services: { title: 'Services', items: [ { icon: 'music', title: 'Event DJ', description: 'Keep the crowd moving' }, { icon: 'playlist', title: 'Custom Mixes', description: 'Non-stop custom mixes' } ] },
    benefits: { title: 'Why Book Us', subtitle: 'Professional sound & energy', items: [ { title: 'Gear', description: 'Top-tier sound and lighting' }, { title: 'Experience', description: 'Years performing live events' } ] },
    testimonials: { title: 'Client Reactions', items: [ { quote: 'Packed the dancefloor every set!', author: 'K. Spencer', role: 'Event Promoter', company: '' } ] },
    cta: { title: 'Hire Us For Your Next Event', subtitle: 'We tailor the vibe to your audience.', buttonText: 'Contact' },
    footer: { description: 'High-energy DJ & live performance services for events and parties.' },
  },

  weddingplanner: {
    id: 'weddingplanner',
    headerVariant: 'centered',
    name: 'EverAfter Events',
    tagline: 'Your Love, Our Canvas',
    description: 'Bespoke wedding planning and design for modern couples.',
    templateFamily: 'creativeEvents',
    colors: { primary: '#BE185D', primaryLight: '#F472B6', primaryDark: '#9D174D', accent: '#FDE047' },
    fonts: { heading: 'Playfair Display', body: 'Lato', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400&display=swap' },
    sections: {
      Hero: {
        variant: 'image-overlap',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80',
          showBadge: false
        }
      },
      ClientMarquee: {
        props: {
          clients: ['Vogue Weddings', 'The Knot', 'Brides', 'Martha Stewart', 'Style Me Pretty']
        }
      },
      AnimatedLogoSection: {
        props: {
          logoId: 'wave-ribbon'
        }
      },
      CreativeMoodboard: {
        props: {
          title: 'Curating Your Perfect Day',
          description: 'We blend textures, colors, and emotions to create a wedding design that feels authentically you.',
          stats: [
            { label: 'Palette', value: 'Blush, Sage, Gold' },
            { label: 'Style', value: 'Romantic & Timeless' },
            { label: 'Guests', value: 'Intimate to Grand' }
          ],
          images: [
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80', // Main
            'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', // Detail 1
            'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80', // Detail 2
            'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80', // Detail 3
          ]
        }
      },
      ShowcaseGallery: {
        props: {
          items: [
            { title: 'Coastal Elegance', subtitle: 'Malibu, CA', gradient: 'from-blue-200 via-white to-sand-200' },
            { title: 'Garden Soiree', subtitle: 'Charleston, SC', gradient: 'from-green-200 via-emerald-100 to-white' },
            { title: 'Urban Chic', subtitle: 'New York, NY', gradient: 'from-gray-200 via-slate-100 to-white' },
            { title: 'Mountain Retreat', subtitle: 'Aspen, CO', gradient: 'from-stone-200 via-neutral-100 to-white' },
          ],
          images: [
            'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80',
          ]
        }
      },
      CreativeProcess: {
        props: {
          steps: [
            { title: 'Vision Boarding', detail: 'We translate your love story into a cohesive design language.' },
            { title: 'Vendor Curation', detail: 'Hand-picking the perfect team to bring the vision to life.' },
            { title: 'Seamless Execution', detail: 'Orchestrating every moment so you can be fully present.' },
          ]
        }
      },
      Services: { variant: 'timeline' },
      Benefits: { variant: 'icon-list' },
      Testimonials: { variant: 'carousel' },
      CTA: { variant: 'minimal' },
      Footer: { variant: 'centered' }
    },
    hero: { headline: 'Unforgettable Weddings, Flawlessly Planned', subheadline: 'We handle the details so you can cherish the moments.', cta: 'Start Planning', ctaSecondary: 'View Portfolio' },
    services: { title: 'Planning Packages', items: [ { icon: 'calendar', title: 'Full Service', description: 'From "Yes" to "I Do"' }, { icon: 'clock', title: 'Month-Of Coordination', description: 'Final details and execution' }, { icon: 'pen-tool', title: 'Event Design', description: 'Styling and decor curation' } ] },
    benefits: { title: 'The EverAfter Difference', subtitle: 'Stress-free celebration', items: [ { title: 'Personalized', description: 'Unique to your story' }, { title: 'Experienced', description: '10+ years in events' } ] },
    testimonials: { title: 'Love Notes', items: [ { quote: 'Our day was absolute magic. We didn\'t worry about a thing!', author: 'Sarah & Mike', role: 'Newlyweds', company: '' } ] },
    cta: { title: 'Let\'s Create Magic', subtitle: 'Book your complimentary consultation.', buttonText: 'Inquire Now' },
    footer: { description: 'Luxury wedding planning and design for timeless celebrations.' },
  },

  photographer: {
    id: 'photographer',
    headerVariant: 'floating',
    name: 'Lumina Studio',
    tagline: 'Capturing Light & Life',
    description: 'Editorial and lifestyle photography for brands and individuals.',
    templateFamily: 'creativeEvents',
    colors: { primary: '#000000', primaryLight: '#333333', primaryDark: '#000000', accent: '#FFFFFF' },
    fonts: { heading: 'Bodoni Moda', body: 'Inter', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,700&family=Inter:wght@300;400&display=swap' },
    sections: {
      Hero: {
        variant: 'floating-elements',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&w=1920&q=80',
        }
      },
      ClientMarquee: {
        props: {
          clients: ['Elle', 'GQ', 'Chanel', 'Aesop', 'Kinfolk']
        }
      },
      AnimatedLogoSection: {
        props: {
          logoId: 'prism-stack'
        }
      },
      CreativeMoodboard: {
        props: {
          title: 'Visual Storytelling',
          description: 'We don\'t just take photos; we build visual narratives that define your brand\'s identity.',
          stats: [
            { label: 'Focus', value: 'Editorial & Lifestyle' },
            { label: 'Light', value: 'Natural & Studio' },
            { label: 'Output', value: 'Digital & Film' }
          ],
          images: [
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80', // Main
            'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80', // Detail 1
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', // Detail 2
            'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80', // Detail 3
          ]
        }
      },
      ShowcaseGallery: {
        props: {
          items: [
            { title: 'Fashion Week', subtitle: 'Paris', gradient: 'from-neutral-900 to-neutral-800' },
            { title: 'Desert Editorial', subtitle: 'Joshua Tree', gradient: 'from-orange-100 to-sand-200' },
            { title: 'Urban Portraits', subtitle: 'Tokyo', gradient: 'from-blue-900 to-black' },
            { title: 'Studio Minimal', subtitle: 'London', gradient: 'from-white to-gray-100' },
          ],
          images: [
            'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=800&q=80',
          ]
        }
      },
      CreativeProcess: {
        props: {
          steps: [
            { title: 'Concept Development', detail: 'Defining the visual direction and mood.' },
            { title: 'The Shoot', detail: 'Directing talent and light to capture the perfect frame.' },
            { title: 'Retouching', detail: 'High-end post-production for a polished look.' },
          ]
        }
      },
      Services: { variant: 'masonry' },
      Benefits: { variant: 'stats' },
      Testimonials: { variant: 'spotlight' },
      CTA: { variant: 'floating' },
      Footer: { variant: 'minimal' }
    },
    hero: { headline: 'Visual Storytelling for Modern Brands', subheadline: 'Creating imagery that resonates, inspires, and converts.', cta: 'View Portfolio', ctaSecondary: 'Book Session' },
    services: { title: 'Photography Services', items: [ { icon: 'camera', title: 'Editorial', description: 'Magazine and campaign shoots' }, { icon: 'user', title: 'Portrait', description: 'Professional headshots and branding' }, { icon: 'shopping-bag', title: 'Product', description: 'E-commerce and lifestyle' } ] },
    benefits: { title: 'Why Lumina', subtitle: 'Artistry & Professionalism', items: [ { title: 'Published', description: 'Work featured globally' }, { title: 'Fast Turnaround', description: 'Images ready in 48hrs' } ] },
    testimonials: { title: 'Client Love', items: [ { quote: 'The photos completely elevated our brand identity.', author: 'Creative Director', role: 'Fashion Label', company: '' } ] },
    cta: { title: 'Ready to Shoot?', subtitle: 'Let\'s discuss your project.', buttonText: 'Get in Touch' },
    footer: { description: 'Professional photography studio specializing in fashion, lifestyle, and branding.' },
  },

  eventvenue: {
    id: 'eventvenue',
    headerVariant: 'mega',
    name: 'The Glasshouse',
    tagline: 'Where Memories Are Made',
    description: 'A premier event space for weddings, corporate galas, and private parties.',
    templateFamily: 'creativeEvents',
    colors: { primary: '#1F2937', primaryLight: '#374151', primaryDark: '#111827', accent: '#D4AF37' },
    fonts: { heading: 'Cinzel', body: 'Open Sans', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Open+Sans:wght@300;400&display=swap' },
    sections: {
      Hero: {
        variant: 'video-bg',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80',
        }
      },
      ClientMarquee: {
        props: {
          clients: ['TechCrunch', 'TEDx', 'Local Charity Gala', 'Chamber of Commerce', 'Film Festival']
        }
      },
      AnimatedLogoSection: {
        props: {
          logoId: 'orbit-star'
        }
      },
      CreativeMoodboard: {
        props: {
          title: 'Spaces That Inspire',
          description: 'From intimate gatherings to grand galas, our versatile spaces adapt to your vision.',
          stats: [
            { label: 'Capacity', value: 'Up to 500 Guests' },
            { label: 'Spaces', value: 'Indoor & Outdoor' },
            { label: 'Style', value: 'Modern & Elegant' }
          ],
          images: [
            'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80', // Main
            'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80', // Detail 1
            'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80', // Detail 2
            'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80', // Detail 3
          ]
        }
      },
      ShowcaseGallery: {
        props: {
          items: [
            { title: 'Grand Ballroom', subtitle: 'Capacity: 500', gradient: 'from-gold-200 to-white' },
            { title: 'Garden Terrace', subtitle: 'Capacity: 200', gradient: 'from-green-100 to-white' },
            { title: 'The Lounge', subtitle: 'Capacity: 80', gradient: 'from-gray-800 to-black' },
            { title: 'Rooftop Deck', subtitle: 'Capacity: 150', gradient: 'from-blue-100 to-white' },
          ],
          images: [
            'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1561489396-888724a1543d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
          ]
        }
      },
      CreativeProcess: {
        props: {
          steps: [
            { title: 'Tour & Consult', detail: 'Walk the space and discuss your event needs.' },
            { title: 'Layout Design', detail: 'Custom floor plans to maximize flow and guest experience.' },
            { title: 'Day-Of Support', detail: 'On-site venue manager to ensure everything runs smoothly.' },
          ]
        }
      },
      Services: { variant: 'cards' },
      Benefits: { variant: 'features' },
      Testimonials: { variant: 'quote-slider' },
      CTA: { variant: 'with-form' },
      Footer: { variant: 'split-brand' }
    },
    hero: { headline: 'The Perfect Backdrop for Your Event', subheadline: 'Elegant spaces, exceptional service, and unforgettable experiences.', cta: 'Book a Tour', ctaSecondary: 'Venue Details' },
    services: { title: 'Venue Features', items: [ { icon: 'layout', title: 'Flexible Spaces', description: 'Indoor and outdoor options' }, { icon: 'mic', title: 'AV Included', description: 'State-of-the-art sound and lighting' }, { icon: 'coffee', title: 'Catering Prep', description: 'Full commercial kitchen access' } ] },
    benefits: { title: 'Why Choose The Glasshouse', subtitle: 'Premier Event Destination', items: [ { title: 'Location', description: 'Heart of the city' }, { title: 'Parking', description: 'Valet available' } ] },
    testimonials: { title: 'Client Reviews', items: [ { quote: 'The venue was stunning and the staff went above and beyond.', author: 'Corporate Planner', role: 'Tech Company', company: '' } ] },
    cta: { title: 'Host Your Event Here', subtitle: 'Check availability for your dates.', buttonText: 'Inquire Now' },
    footer: { description: 'Premier event venue for weddings, corporate events, and private celebrations.' },
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

  dental: {
    id: 'dental',
    headerVariant: 'minimal',
    name: 'BrightSmile Dental',
    tagline: 'Confidence in Every Smile',
    description: 'Comprehensive dental care for the whole family in a comfortable environment.',
    templateFamily: 'healthWellness',
    colors: { primary: '#0EA5E9', primaryLight: '#38BDF8', primaryDark: '#0284C7', accent: '#F472B6' },
    fonts: { heading: 'Inter', body: 'Open Sans', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap' },
    sections: {
      Hero: { variant: 'split', props: { backgroundImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=80' } },
      Services: { variant: 'cards' },
      Benefits: { variant: 'features' },
      Testimonials: { variant: 'grid' },
      CTA: { variant: 'split' },
      Footer: { variant: 'columns-light' },
      TransformationStory: {
        props: {
          image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
        }
      },
      PractitionerShowcase: {
        props: {
          practitioners: [
            { name: 'Dr. Sarah Jenkins', specialty: 'Cosmetic Dentist', philosophy: 'Every smile tells a story.', certifications: ['DDS', 'AACD'] },
            { name: 'Dr. Michael Chen', specialty: 'Orthodontist', philosophy: 'Precision meets aesthetics.', certifications: ['DDS', 'MS'] },
            { name: 'Lisa Ray', specialty: 'Lead Hygienist', philosophy: 'Prevention is the key to health.', certifications: ['RDH'] }
          ]
        }
      }
    },
    hero: { headline: 'Modern Dentistry, Gentle Care', subheadline: 'Experience state-of-the-art dental treatments designed for your comfort and long-term oral health.', cta: 'Book Appointment', ctaSecondary: 'Our Services' },
    services: { title: 'Dental Services', items: [ { icon: 'smile', title: 'Cosmetic', description: 'Veneers, whitening, and smile makeovers' }, { icon: 'shield', title: 'Preventive', description: 'Cleanings, exams, and sealants' }, { icon: 'tool', title: 'Restorative', description: 'Implants, crowns, and bridges' } ] },
    benefits: { title: 'Why Choose Us', subtitle: 'Patient-first approach', items: [ { title: 'Technology', description: 'Latest digital imaging' }, { title: 'Comfort', description: 'Sedation options available' } ] },
    testimonials: { title: 'Patient Reviews', items: [ { quote: 'The most painless dental experience I have ever had.', author: 'M. Davis', role: 'Patient', company: '' } ] },
    cta: { title: 'Ready for a Brighter Smile?', subtitle: 'New patients welcome.', buttonText: 'Schedule Visit' },
    footer: { description: 'Family dentistry providing comprehensive oral healthcare.' },
  },

  spa: {
    id: 'spa',
    headerVariant: 'glass',
    name: 'Serenity Spa',
    tagline: 'Escape. Relax. Rejuvenate.',
    description: 'A sanctuary for wellness and relaxation offering premium spa treatments.',
    templateFamily: 'healthWellness',
    colors: { primary: '#57534E', primaryLight: '#78716C', primaryDark: '#44403C', accent: '#D6D3D1' },
    fonts: { heading: 'Cormorant Garamond', body: 'Lato', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Lato:wght@300;400&display=swap' },
    sections: {
      Hero: { variant: 'video-bg', props: { backgroundImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80' } },
      Services: { variant: 'image-cards' },
      Benefits: { variant: 'bento' },
      Testimonials: { variant: 'quote-slider' },
      CTA: { variant: 'minimal' },
      Footer: { variant: 'simple-dark' },
      TransformationStory: {
        props: {
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
        }
      },
      PractitionerShowcase: {
        props: {
          practitioners: [
            { name: 'Elena Rossi', specialty: 'Massage Therapist', philosophy: 'Healing through touch.', certifications: ['LMT', 'Reiki Master'] },
            { name: 'Marco Silva', specialty: 'Esthetician', philosophy: 'Radiance comes from within.', certifications: ['LE', 'Holistic Skin'] },
            { name: 'Sarah Jones', specialty: 'Wellness Coach', philosophy: 'Balance in all things.', certifications: ['CWC'] }
          ]
        }
      }
    },
    hero: { headline: 'Restore Your Natural Balance', subheadline: 'Immerse yourself in tranquility with our curated selection of massages, facials, and body treatments.', cta: 'View Menu', ctaSecondary: 'Book Treatment' },
    services: { title: 'Spa Menu', items: [ { icon: 'sun', title: 'Massage', description: 'Deep tissue, Swedish, and hot stone' }, { icon: 'droplet', title: 'Facials', description: 'Rejuvenating organic skincare' }, { icon: 'wind', title: 'Hydrotherapy', description: 'Thermal pools and steam rooms' } ] },
    benefits: { title: 'The Serenity Experience', subtitle: 'Pure relaxation', items: [ { title: 'Organic', description: '100% natural products' }, { title: 'Therapists', description: 'Master certified practitioners' } ] },
    testimonials: { title: 'Guest Words', items: [ { quote: 'An absolute oasis of calm. I left feeling like a new person.', author: 'S. Miller', role: 'Guest', company: '' } ] },
    cta: { title: 'Book Your Escape', subtitle: 'Gift cards available.', buttonText: 'Book Now' },
    footer: { description: 'Luxury wellness spa dedicated to holistic relaxation.' },
  },

  therapist: {
    id: 'therapist',
    headerVariant: 'centered',
    name: 'Mindful Path',
    tagline: 'Guidance for Life\'s Journey',
    description: 'Professional counseling and therapy services for individuals and couples.',
    templateFamily: 'healthWellness',
    colors: { primary: '#0D9488', primaryLight: '#14B8A6', primaryDark: '#0F766E', accent: '#F59E0B' },
    fonts: { heading: 'Merriweather', body: 'Source Sans 3', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Source+Sans+3:wght@400;600&display=swap' },
    sections: {
      Hero: { variant: 'asymmetric', props: { backgroundImage: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1920&q=80' } },
      Services: { variant: 'accordion' },
      Benefits: { variant: 'icon-list' },
      Testimonials: { variant: 'featured' },
      CTA: { variant: 'floating' },
      Footer: { variant: 'minimal' },
      TransformationStory: {
        props: {
          image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80',
        }
      },
      PractitionerShowcase: {
        props: {
          practitioners: [
            { name: 'Dr. Emily Thorne', specialty: 'Clinical Psychologist', philosophy: 'Understanding is the first step.', certifications: ['PhD', 'PsyD'] },
            { name: 'James Wilson', specialty: 'Family Counselor', philosophy: 'Stronger together.', certifications: ['LMFT'] },
            { name: 'Anna K.', specialty: 'Art Therapist', philosophy: 'Expression heals.', certifications: ['ATR-BC'] }
          ]
        }
      }
    },
    hero: { headline: 'Find Clarity and Inner Peace', subheadline: 'Compassionate, evidence-based therapy to help you navigate life\'s challenges and thrive.', cta: 'Schedule Consultation', ctaSecondary: 'Learn More' },
    services: { title: 'Areas of Focus', items: [ { icon: 'user', title: 'Individual Therapy', description: 'Anxiety, depression, and personal growth' }, { icon: 'users', title: 'Couples Counseling', description: 'Communication and relationship strengthening' }, { icon: 'heart', title: 'Trauma Recovery', description: 'Healing from past experiences' } ] },
    benefits: { title: 'My Approach', subtitle: 'Safe & supportive', items: [ { title: 'Confidential', description: 'Private and secure environment' }, { title: 'Tailored', description: 'Personalized treatment plans' } ] },
    testimonials: { title: 'Client Stories', items: [ { quote: 'Therapy here gave me the tools I needed to manage my anxiety effectively.', author: 'Anonymous', role: 'Client', company: '' } ] },
    cta: { title: 'Take the First Step', subtitle: 'Free 15-minute phone consultation.', buttonText: 'Contact Me' },
    footer: { description: 'Licensed clinical therapy and counseling services.' },
  },

  // SaaS & Startups
  saas: {
    id: 'saas',
    name: 'SaaS Platform',
    headerVariant: 'mega',
    tagline: 'Scale Your Business',
    description: 'All-in-one platform for growing teams.',
    templateFamily: 'saasStartups',
    colors: { primary: '#2563EB', primaryLight: '#60A5FA', primaryDark: '#1E40AF', accent: '#F59E0B' },
    fonts: { heading: 'Inter', body: 'Inter', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
    sections: {
      Hero: {
        variant: 'centered-cards',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80',
        }
      },
      LogoMarquee: {
        props: {
          logos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
          ]
        }
      },
      ProductShowcase: {},
      Services: { variant: 'tabs' },
      Benefits: { variant: 'comparison' },
      PricingTeaser: {},
      Testimonials: { variant: 'spotlight' },
      FAQ: {
        props: {
          items: [
            { question: 'How does the free trial work?', answer: 'You get 14 days of full access to all features. No credit card required.' },
            { question: 'Can I change plans later?', answer: 'Yes, you can upgrade or downgrade at any time from your account settings.' },
            { question: 'Is my data secure?', answer: 'We use bank-level encryption and are SOC2 compliant.' }
          ]
        }
      },
      CTA: { variant: 'with-form' },
      Footer: { variant: 'mega' }
    },
    hero: { headline: 'The Operating System for Modern Teams', subheadline: 'Streamline workflows, automate tasks, and drive growth with our intelligent platform.', cta: 'Start Free Trial', ctaSecondary: 'View Demo' },
    services: { title: 'Platform Features', items: [ { icon: 'zap', title: 'Automation', description: 'Automate repetitive tasks' }, { icon: 'bar-chart', title: 'Analytics', description: 'Real-time insights' }, { icon: 'users', title: 'Collaboration', description: 'Work together in real-time' } ] },
    benefits: { title: 'Why Choose Us', subtitle: 'Built for scale', items: [ { title: 'Uptime', description: '99.99% SLA' }, { title: 'Support', description: '24/7 Global Support' } ] },
    testimonials: { title: 'Customer Love', items: [ { quote: 'This platform completely changed how we work. Highly recommended!', author: 'J. Smith', role: 'CTO', company: 'TechCorp' } ] },
    cta: { title: 'Ready to Get Started?', subtitle: 'Join 10,000+ teams today.', buttonText: 'Sign Up Free' },
    footer: { description: 'Empowering teams to build the future.' },
  },

  fintech: {
    id: 'fintech',
    headerVariant: 'mega',
    name: 'NovaPay',
    tagline: 'Future of Finance',
    description: 'Next-generation banking and payments infrastructure.',
    templateFamily: 'saasStartups',
    colors: { primary: '#4F46E5', primaryLight: '#818CF8', primaryDark: '#3730A3', accent: '#10B981' },
    fonts: { heading: 'Space Grotesk', body: 'Inter', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500&display=swap' },
    sections: {
      Hero: {
        variant: 'centered-cards',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80',
        }
      },
      LogoMarquee: {
        props: {
          logos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1024px-Apple_logo_black.svg.png'
          ]
        }
      },
      ProductShowcase: {},
      Services: { variant: 'tabs' },
      Benefits: { variant: 'comparison' },
      PricingTeaser: {},
      Testimonials: { variant: 'spotlight' },
      FAQ: {
        props: {
          items: [
            { question: 'Is my money safe?', answer: 'Yes, all accounts are FDIC insured up to $250,000.' },
            { question: 'What are the fees?', answer: 'We have no monthly fees or overdraft fees.' },
            { question: 'Can I use it internationally?', answer: 'Yes, use your card anywhere Visa is accepted with no foreign transaction fees.' }
          ]
        }
      },
      CTA: { variant: 'with-form' },
      Footer: { variant: 'mega' }
    },
    hero: { headline: 'Banking Built for the Digital Age', subheadline: 'Manage your money, invest, and pay with zero fees and instant transfers.', cta: 'Open Account', ctaSecondary: 'Learn More' },
    services: { title: 'Financial Tools', items: [ { icon: 'credit-card', title: 'Smart Cards', description: 'Virtual and physical cards' }, { icon: 'trending-up', title: 'Investing', description: 'Auto-invest spare change' }, { icon: 'shield', title: 'Security', description: 'Fraud protection' } ] },
    benefits: { title: 'Better Banking', subtitle: 'Smart features', items: [ { title: 'Interest', description: '4.5% APY' }, { title: 'Cashback', description: '2% on all purchases' } ] },
    testimonials: { title: 'User Reviews', items: [ { quote: 'The best banking app I have ever used. Simple and powerful.', author: 'M. Chen', role: 'User', company: '' } ] },
    cta: { title: 'Join the Revolution', subtitle: 'Open your account in 3 minutes.', buttonText: 'Get Started' },
    footer: { description: 'Reimagining financial services for everyone.' },
  },

  cybersecurity: {
    id: 'cybersecurity',
    headerVariant: 'mega',
    name: 'SecureNet',
    tagline: 'Unbreakable Security',
    description: 'Enterprise-grade cybersecurity and threat protection.',
    templateFamily: 'saasStartups',
    colors: { primary: '#0F172A', primaryLight: '#334155', primaryDark: '#020617', accent: '#EF4444' },
    fonts: { heading: 'JetBrains Mono', body: 'Inter', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;500&display=swap' },
    sections: {
      Hero: {
        variant: 'centered-cards',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80',
        }
      },
      LogoMarquee: {
        props: {
          logos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          ]
        }
      },
      ProductShowcase: {},
      Services: { variant: 'tabs' },
      Benefits: { variant: 'comparison' },
      PricingTeaser: {},
      Testimonials: { variant: 'spotlight' },
      FAQ: {
        props: {
          items: [
            { question: 'How fast is deployment?', answer: 'Deploy in minutes with our lightweight agent.' },
            { question: 'Do you offer 24/7 support?', answer: 'Yes, our SOC is active 24/7/365.' },
            { question: 'Is it compliant?', answer: 'We support HIPAA, GDPR, SOC2, and ISO 27001.' }
          ]
        }
      },
      CTA: { variant: 'with-form' },
      Footer: { variant: 'mega' }
    },
    hero: { headline: 'Secure Your Infrastructure', subheadline: 'Advanced threat detection and response for modern enterprises.', cta: 'Request Demo', ctaSecondary: 'View Features' },
    services: { title: 'Security Suite', items: [ { icon: 'shield', title: 'Endpoint Protection', description: 'Next-gen AV' }, { icon: 'lock', title: 'Network Security', description: 'Zero trust architecture' }, { icon: 'eye', title: 'Threat Hunting', description: 'Proactive monitoring' } ] },
    benefits: { title: 'Why SecureNet', subtitle: 'Proven protection', items: [ { title: 'Detection', description: '< 1ms latency' }, { title: 'Coverage', description: '100% endpoint visibility' } ] },
    testimonials: { title: 'CISO Feedback', items: [ { quote: 'Stopped a ransomware attack in its tracks. Worth every penny.', author: 'S. Williams', role: 'CISO', company: 'Global Finance' } ] },
    cta: { title: 'Stay Secure', subtitle: 'Get a free security assessment.', buttonText: 'Contact Sales' },
    footer: { description: 'Protecting the world\'s data.' },
  },

  devtools: {
    id: 'devtools',
    headerVariant: 'mega',
    name: 'CodeFlow',
    tagline: 'Build Faster',
    description: 'Developer tools for continuous integration and deployment.',
    templateFamily: 'saasStartups',
    colors: { primary: '#7C3AED', primaryLight: '#A78BFA', primaryDark: '#5B21B6', accent: '#10B981' },
    fonts: { heading: 'Fira Code', body: 'Inter', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@400;500&display=swap' },
    sections: {
      Hero: {
        variant: 'centered-cards',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1920&q=80',
        }
      },
      LogoMarquee: {
        props: {
          logos: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jenkins_logo.svg/1200px-Jenkins_logo.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png'
          ]
        }
      },
      ProductShowcase: {},
      Services: { variant: 'tabs' },
      Benefits: { variant: 'comparison' },
      PricingTeaser: {},
      Testimonials: { variant: 'spotlight' },
      FAQ: {
        props: {
          items: [
            { question: 'Does it work with GitHub?', answer: 'Yes, we have a native GitHub app.' },
            { question: 'Can I self-host?', answer: 'Yes, we offer an on-premise enterprise version.' },
            { question: 'What languages are supported?', answer: 'We support all major languages and frameworks.' }
          ]
        }
      },
      CTA: { variant: 'with-form' },
      Footer: { variant: 'mega' }
    },
    hero: { headline: 'Ship Code with Confidence', subheadline: 'Automated testing, building, and deployment for modern development teams.', cta: 'Start Building', ctaSecondary: 'Read Docs' },
    services: { title: 'Dev Tools', items: [ { icon: 'git-branch', title: 'CI/CD', description: 'Fast pipelines' }, { icon: 'terminal', title: 'CLI', description: 'Powerful command line' }, { icon: 'server', title: 'Infrastructure', description: 'Infrastructure as Code' } ] },
    benefits: { title: 'Developer Experience', subtitle: 'Built for devs', items: [ { title: 'Speed', description: '5x faster builds' }, { title: 'Integration', description: 'Works with your stack' } ] },
    testimonials: { title: 'Dev Stories', items: [ { quote: 'The best CI/CD tool I have ever used. It just works.', author: 'D. Lee', role: 'Senior Engineer', company: 'StartupInc' } ] },
    cta: { title: 'Ready to Ship?', subtitle: 'Free for open source projects.', buttonText: 'Get Started' },
    footer: { description: 'Tools for the next generation of software.' },
  },

  interiordesign: {
    id: 'interiordesign',
    name: 'Interior Design Studio',
    headerVariant: 'sidebar',
    tagline: 'Curated Living Spaces',
    description: 'Bespoke interior design for modern homes and offices.',
    templateFamily: 'realtyArchitecture',
    colors: { primary: '#78350F', primaryLight: '#92400E', primaryDark: '#451A03', accent: '#D97706' },
    fonts: { heading: 'Cinzel', body: 'Lato', googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@300;400&display=swap' },
    sections: {
      Hero: {
        variant: 'image-overlap',
        props: {
          backgroundImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80',
        }
      },
      ShowcaseGallery: {
        props: {
          title: 'Portfolio',
          items: [
            { title: 'Minimalist Living', subtitle: 'Residential', gradient: 'from-stone-100 to-white' },
            { title: 'Boho Chic Bedroom', subtitle: 'Residential', gradient: 'from-orange-50 to-white' },
            { title: 'Modern Office', subtitle: 'Commercial', gradient: 'from-gray-100 to-white' },
            { title: 'Luxury Kitchen', subtitle: 'Residential', gradient: 'from-slate-100 to-white' },
          ],
          images: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
          ]
        }
      },
      Services: { variant: 'image-cards' },
      AwardsBadges: {
        props: {
          awards: ['ASID Member', 'Best of Houzz 2024', 'Elle Decor Feature', 'AD 100']
        }
      },
      Testimonials: { variant: 'masonry' },
      ServiceAreaMap: {
        props: {
          image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80',
        }
      },
      TeamCredentials: {
        props: {
          members: [
            { name: 'Sophia L.', role: 'Lead Designer', bio: 'Creating timeless interiors for over 15 years.' },
            { name: 'Marcus T.', role: 'Project Manager', bio: 'Expert in sourcing and logistics.' },
            { name: 'Chloe R.', role: 'Stylist', bio: 'Adding the final touches that make a house a home.' }
          ]
        }
      },
      CTA: { variant: 'centered' },
      Footer: { variant: 'columns-light' }
    },
    hero: { headline: 'Elevate Your Everyday', subheadline: 'We design spaces that reflect your personality and enhance your lifestyle.', cta: 'View Portfolio', ctaSecondary: 'Book Consultation' },
    services: { title: 'Services', items: [ { icon: 'layout', title: 'Full Service Design', description: 'From concept to installation' }, { icon: 'shopping-bag', title: 'E-Design', description: 'Virtual design packages' }, { icon: 'home', title: 'Renovation', description: 'Kitchen and bath remodels' } ] },
    benefits: { title: 'Our Philosophy', subtitle: 'Beauty & Function', items: [ { title: 'Tailored', description: 'Unique to you' }, { title: 'Quality', description: 'Curated materials' } ] },
    testimonials: { title: 'Client Love', items: [ { quote: 'Our home feels like a sanctuary now. Thank you!', author: 'L. Green', role: 'Client', company: '' } ] },
    cta: { title: 'Ready to Transform Your Space?', subtitle: 'Let\'s discuss your project.', buttonText: 'Contact Us' },
    footer: { description: 'Interior design studio creating beautiful, functional spaces.' },
  },
};

export const getIndustryConfig = (industry: IndustryType): IndustryConfig => {
  return industryConfigs[industry];
};

export const getAllIndustries = (): IndustryType[] => {
  return Object.keys(industryConfigs) as IndustryType[];
};
