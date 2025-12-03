import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp, Plus, Trash2, Download, ExternalLink, RefreshCw } from 'lucide-react';
import { industryConfigs } from '../../config/industries';
import templateBlueprints from '../../config/templateFamilies';

const AVAILABLE_COMPONENTS = [
  'Hero',
  'Services',
  'Benefits',
  'Testimonials',
  'CTA',
  'LogoMarquee',
  'Footer',
  'Custom'
];

const AVAILABLE_VARIANTS: Record<string, string[]> = {
  Hero: ['split', 'centered-cards', 'video-bg', 'asymmetric', 'editorial', 'bento', 'minimal-centered', 'image-overlap', 'diagonal-split', 'floating-elements'],
  Services: ['numbered-list', 'accordion', 'icon-grid', 'hover-cards', 'tabs', 'image-cards', 'cards', 'timeline', 'masonry', 'spotlight'],
  Benefits: ['counter-cards', 'progress-bars', 'timeline', 'radial', 'comparison', 'animated-counter', 'stats', 'features', 'bento', 'icon-list'],
  Testimonials: ['carousel', 'grid', 'featured', 'stacked-cards', 'masonry', 'spotlight', 'quote-slider', 'cards-row', 'centered-quote', 'side-scroll', 'floating-cards'],
  CTA: ['default', 'gradient-card', 'minimal', 'with-form', 'floating', 'stats-cta', 'dual-action', 'centered', 'split', 'banner'],
  Footer: ['default', 'minimal', 'centered', 'mega', 'dark-gradient', 'split-brand', 'simple-dark', 'columns-light', 'stacked', 'modern-grid'],
  LogoMarquee: ['default'],
  Custom: ['default']
};

const FAMILY_NAMES: Record<string, string> = {
  professionalServices: 'Professional Services',
  healthWellness: 'Health & Wellness',
  hospitalityCulinary: 'Hospitality & Culinary',
  tradesFieldServices: 'Trades & Field Services',
  creativeEvents: 'Creative & Events',
  saasStartups: 'SaaS & Startups',
  realtyArchitecture: 'Realty & Architecture',
};

const HEADER_VARIANTS = [
  { value: 'default', label: 'Default' },
  { value: 'minimal', label: 'Minimal' },
  { value: 'centered', label: 'Centered' },
  { value: 'double', label: 'Double Bar' },
  { value: 'floating', label: 'Floating' },
  { value: 'glass', label: 'Glass' },
  { value: 'split', label: 'Split' },
  { value: 'bold', label: 'Bold' },
  { value: 'mega', label: 'Mega Menu' },
  { value: 'sidebar', label: 'Sidebar' },
  { value: 'search', label: 'Search Bar' },
  { value: 'gradient', label: 'Gradient' },
  { value: 'bordered', label: 'Bordered' },
];

const FONT_COMBINATIONS = [
  // Professional Sans-Serif
  { value: 'default', label: 'Default (Industry)', category: 'Default', heading: '', body: '', url: '' },
  { value: 'inter-lato', label: 'Inter + Lato', category: 'Modern Professional', heading: 'Inter', body: 'Lato', url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Lato:wght@300;400;700&display=swap' },
  { value: 'montserrat-opensans', label: 'Montserrat + Open Sans', category: 'Modern Professional', heading: 'Montserrat', body: 'Open Sans', url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap' },
  { value: 'raleway-sourcesans', label: 'Raleway + Source Sans', category: 'Modern Professional', heading: 'Raleway', body: 'Source Sans 3', url: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Source+Sans+3:wght@400;600&display=swap' },
  { value: 'roboto-roboto', label: 'Roboto (Unified)', category: 'Modern Professional', heading: 'Roboto', body: 'Roboto', url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' },
  // Elegant Serif
  { value: 'playfair-lora', label: 'Playfair + Lora', category: 'Elegant Serif', heading: 'Playfair Display', body: 'Lora', url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;600&display=swap' },
  { value: 'garamond-merriweather', label: 'Garamond + Merriweather', category: 'Elegant Serif', heading: 'EB Garamond', body: 'Merriweather', url: 'https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=Merriweather:wght@300;400;700&display=swap' },
  { value: 'bodoni-librebaskerville', label: 'Bodoni + Libre Baskerville', category: 'Elegant Serif', heading: 'Bodoni Moda', body: 'Libre Baskerville', url: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,700&family=Libre+Baskerville:wght@400;700&display=swap' },
  { value: 'ptserif-crimson', label: 'PT Serif + Crimson', category: 'Elegant Serif', heading: 'PT Serif', body: 'Crimson Text', url: 'https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Crimson+Text:wght@400;600&display=swap' },
  // Mixed (Serif Heading + Sans Body)
  { value: 'playfair-sourcesans', label: 'Playfair + Source Sans', category: 'Mixed Pairing', heading: 'Playfair Display', body: 'Source Sans 3', url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+3:wght@400;600&display=swap' },
  { value: 'abril-lato', label: 'Abril Fatface + Lato', category: 'Mixed Pairing', heading: 'Abril Fatface', body: 'Lato', url: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300;400;700&display=swap' },
  { value: 'zilla-inter', label: 'Zilla Slab + Inter', category: 'Mixed Pairing', heading: 'Zilla Slab', body: 'Inter', url: 'https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;700&family=Inter:wght@400;600;700&display=swap' },
  // Fun & Creative
  { value: 'fredoka-varela', label: 'Fredoka + Varela Round', category: 'Fun & Friendly', heading: 'Fredoka', body: 'Varela Round', url: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Varela+Round&display=swap' },
  { value: 'pacifico-opensans', label: 'Pacifico + Open Sans', category: 'Fun & Friendly', heading: 'Pacifico', body: 'Open Sans', url: 'https://fonts.googleapis.com/css2?family=Pacifico&family=Open+Sans:wght@400;600&display=swap' },
  { value: 'lobster-lato', label: 'Lobster + Lato', category: 'Fun & Friendly', heading: 'Lobster', body: 'Lato', url: 'https://fonts.googleapis.com/css2?family=Lobster&family=Lato:wght@300;400;700&display=swap' },
  { value: 'bangers-sourcesans', label: 'Bangers + Source Sans', category: 'Bold & Playful', heading: 'Bangers', body: 'Source Sans 3', url: 'https://fonts.googleapis.com/css2?family=Bangers&family=Source+Sans+3:wght@400;600&display=swap' },
  { value: 'fugaz-roboto', label: 'Fugaz One + Roboto', category: 'Bold & Playful', heading: 'Fugaz One', body: 'Roboto', url: 'https://fonts.googleapis.com/css2?family=Fugaz+One&family=Roboto:wght@400;500;700&display=swap' },
  { value: 'righteous-inter', label: 'Righteous + Inter', category: 'Bold & Playful', heading: 'Righteous', body: 'Inter', url: 'https://fonts.googleapis.com/css2?family=Righteous&family=Inter:wght@400;600;700&display=swap' },
];

// Group fonts by category
const groupedFonts = FONT_COMBINATIONS.reduce((acc, font) => {
  if (!acc[font.category]) {
    acc[font.category] = [];
  }
  acc[font.category].push(font);
  return acc;
}, {} as Record<string, typeof FONT_COMBINATIONS>);

const COLOR_SCHEMES = [
  { value: 'default', label: 'Default (Industry)', primary: '', primaryLight: '', primaryDark: '', accent: '' },
  // Professional
  { value: 'ocean-blue', label: 'Ocean Blue', primary: '#0066CC', primaryLight: '#3388DD', primaryDark: '#004499', accent: '#00B894' },
  { value: 'forest-green', label: 'Forest Green', primary: '#047857', primaryLight: '#10B981', primaryDark: '#065F46', accent: '#F59E0B' },
  { value: 'royal-purple', label: 'Royal Purple', primary: '#7C3AED', primaryLight: '#8B5CF6', primaryDark: '#6D28D9', accent: '#F97316' },
  { value: 'slate-navy', label: 'Slate Navy', primary: '#1E3A5F', primaryLight: '#2E5A8F', primaryDark: '#0E2A4F', accent: '#C9A55C' },
  // Warm
  { value: 'sunset-red', label: 'Sunset Red', primary: '#DC2626', primaryLight: '#EF4444', primaryDark: '#B91C1C', accent: '#0284C7' },
  { value: 'terracotta', label: 'Terracotta', primary: '#EA580C', primaryLight: '#F97316', primaryDark: '#C2410C', accent: '#0D9488' },
  { value: 'burgundy', label: 'Burgundy Wine', primary: '#9F1239', primaryLight: '#BE185D', primaryDark: '#881337', accent: '#D4AF37' },
  // Cool & Modern
  { value: 'teal-cyan', label: 'Teal Cyan', primary: '#0891B2', primaryLight: '#06B6D4', primaryDark: '#0E7490', accent: '#F472B6' },
  { value: 'indigo-violet', label: 'Indigo Violet', primary: '#4F46E5', primaryLight: '#6366F1', primaryDark: '#4338CA', accent: '#10B981' },
  // Neutral & Bold
  { value: 'charcoal', label: 'Charcoal', primary: '#111827', primaryLight: '#374151', primaryDark: '#030712', accent: '#EAB308' },
  { value: 'warm-stone', label: 'Warm Stone', primary: '#78350F', primaryLight: '#92400E', primaryDark: '#451A03', accent: '#D97706' },
];

const BuilderApp = () => {
  const [industryId, setIndustryId] = useState('realestate');
  const [headerVariant, setHeaderVariant] = useState('default');
  const [fontCombo, setFontCombo] = useState('default');
  const [colorScheme, setColorScheme] = useState('default');
  const [sections, setSections] = useState<any[]>([]);
  const [iframeKey, setIframeKey] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  // Group industries by family
  const groupedIndustries = Object.values(industryConfigs).reduce((acc, industry) => {
    const family = industry.templateFamily || 'professionalServices';
    if (!acc[family]) {
      acc[family] = [];
    }
    acc[family].push(industry);
    return acc;
  }, {} as Record<string, typeof industryConfigs[keyof typeof industryConfigs][]>);

  // Load initial blueprint when industry changes
  useEffect(() => {
    const config = industryConfigs[industryId as keyof typeof industryConfigs];
    if (config) {
      const family = config.templateFamily || 'professionalServices';
      const initialBlueprint = templateBlueprints[family] || [];
      // Deep copy to avoid mutating the original config
      setSections(JSON.parse(JSON.stringify(initialBlueprint)));
      // Set header variant from industry config
      setHeaderVariant(config.headerVariant || 'default');
    }
  }, [industryId]);

  const updateSection = (index: number, field: string, value: any) => {
    const newSections = [...sections];
    newSections[index] = { ...newSections[index], [field]: value };
    setSections(newSections);
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === sections.length - 1) return;
    
    const newSections = [...sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    [newSections[index], newSections[targetIndex]] = [newSections[targetIndex], newSections[index]];
    setSections(newSections);
  };

  const removeSection = (index: number) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  const addSection = () => {
    setSections([...sections, { component: 'Services', variant: 'cards' }]);
  };

  const getPreviewUrl = () => {
    const blueprintString = encodeURIComponent(JSON.stringify(sections));
    const fontParam = fontCombo !== 'default' ? `&fonts=${fontCombo}` : '';
    const colorParam = colorScheme !== 'default' ? `&colors=${colorScheme}` : '';
    return `/builder/preview?industry=${industryId}&header=${headerVariant}${fontParam}${colorParam}&blueprint=${blueprintString}`;
  };

  // Helper to scroll through iframe content to trigger lazy loading
  const scrollThroughPage = async (iframeDoc: Document): Promise<void> => {
    return new Promise((resolve) => {
      const scrollContainer = iframeDoc.documentElement;
      const totalHeight = scrollContainer.scrollHeight;
      const viewportHeight = iframeDoc.defaultView?.innerHeight || 800;
      const scrollStep = viewportHeight * 0.8; // Scroll 80% of viewport at a time
      let currentScroll = 0;
      
      const scrollInterval = setInterval(() => {
        currentScroll += scrollStep;
        scrollContainer.scrollTop = currentScroll;
        
        if (currentScroll >= totalHeight) {
          clearInterval(scrollInterval);
          // Scroll back to top
          scrollContainer.scrollTop = 0;
          // Wait a bit for any final images to load
          setTimeout(resolve, 500);
        }
      }, 150); // 150ms between scroll steps
    });
  };

  // Helper to wait for all images to load
  const waitForImages = async (iframeDoc: Document): Promise<void> => {
    const images = Array.from(iframeDoc.querySelectorAll('img'));
    const imagePromises = images.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Resolve even on error to not block
        // Timeout after 3 seconds per image
        setTimeout(resolve, 3000);
      });
    });
    await Promise.all(imagePromises);
  };

  const handleExport = async () => {
    try {
      setIsExporting(true);
      
      // Wait for the UI to update (sidebar hidden)
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Get the iframe's document content
      const iframe = iframeRef.current;
      if (!iframe || !iframe.contentDocument) {
        throw new Error('Cannot access iframe content');
      }
      
      const iframeDoc = iframe.contentDocument;
      
      // Scroll through the page to trigger lazy-loaded images
      await scrollThroughPage(iframeDoc);
      
      // Wait for all images to finish loading
      await waitForImages(iframeDoc);
      
      // Small delay to ensure everything is rendered
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Clone the iframe's HTML content
      const html = iframeDoc.documentElement.outerHTML;
      
      // Create a complete HTML document
      const fullHtml = `<!DOCTYPE html>\n${html}`;
      
      // Create a blob and download
      const blob = new Blob([fullHtml], { type: 'text/html' });
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `${industryId}-landing-page.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Export failed:', error);
      // Fallback: fetch the preview URL directly
      try {
        const url = getPreviewUrl();
        const response = await fetch(url);
        const html = await response.text();
        const blob = new Blob([html], { type: 'text/html' });
        const downloadUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = `${industryId}-landing-page.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(downloadUrl);
      } catch (fallbackError) {
        alert('Failed to export HTML. Please try again.');
      }
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar - hidden during export */}
      {!isExporting && (
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full shadow-lg z-10">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h1 className="text-lg font-bold text-gray-800 mb-4">Landing Page Builder</h1>
          
          <div className="mb-3">
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Industry Template</label>
            <select 
              value={industryId}
              onChange={(e) => setIndustryId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {Object.entries(groupedIndustries).map(([family, industries]) => (
                <optgroup key={family} label={FAMILY_NAMES[family] || family}>
                  {industries.map((ind) => (
                    <option key={ind.id} value={ind.id}>{ind.name}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          
          <div className="mb-3">
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Header Style</label>
            <select 
              value={headerVariant}
              onChange={(e) => setHeaderVariant(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {HEADER_VARIANTS.map((h) => (
                <option key={h.value} value={h.value}>{h.label}</option>
              ))}
            </select>
          </div>
          
          <div className="mb-3">
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Font Combination</label>
            <select 
              value={fontCombo}
              onChange={(e) => setFontCombo(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {Object.entries(groupedFonts).map(([category, fonts]) => (
                <optgroup key={category} label={category}>
                  {fonts.map((f) => (
                    <option key={f.value} value={f.value}>{f.label}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Color Scheme</label>
            <select 
              value={colorScheme}
              onChange={(e) => setColorScheme(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {COLOR_SCHEMES.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setIframeKey(prev => prev + 1)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md text-sm font-medium transition-colors"
            >
              <RefreshCw size={14} /> Refresh
            </button>
            <button 
              onClick={handleExport}
              disabled={isExporting}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md text-sm font-medium transition-colors"
            >
              <Download size={14} /> {isExporting ? 'Exporting...' : 'Export'}
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs font-semibold text-gray-500 uppercase">Page Sections</h2>
            <span className="text-xs text-gray-400">{sections.length} items</span>
          </div>
          
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm text-gray-800">{section.component}</span>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => moveSection(idx, 'up')} disabled={idx === 0} className="p-1 hover:bg-gray-100 rounded text-gray-500 disabled:opacity-30">
                    <ArrowUp size={14} />
                  </button>
                  <button onClick={() => moveSection(idx, 'down')} disabled={idx === sections.length - 1} className="p-1 hover:bg-gray-100 rounded text-gray-500 disabled:opacity-30">
                    <ArrowDown size={14} />
                  </button>
                  <button onClick={() => removeSection(idx)} className="p-1 hover:bg-red-50 rounded text-red-500">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <select 
                  value={section.component}
                  onChange={(e) => updateSection(idx, 'component', e.target.value)}
                  className="w-full p-1.5 text-xs border border-gray-200 rounded bg-gray-50"
                >
                  {AVAILABLE_COMPONENTS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                
                {AVAILABLE_VARIANTS[section.component] && (
                  <select 
                    value={section.variant || ''}
                    onChange={(e) => updateSection(idx, 'variant', e.target.value)}
                    className="w-full p-1.5 text-xs border border-gray-200 rounded bg-gray-50"
                  >
                    <option value="">Default Variant</option>
                    {AVAILABLE_VARIANTS[section.component].map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                )}
              </div>
            </div>
          ))}
          
          <button 
            onClick={addSection}
            className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center gap-2 transition-colors text-sm font-medium"
          >
            <Plus size={16} /> Add Section
          </button>
        </div>
      </div>
      )}

      {/* Preview Area - fullscreen during export */}
      <div className={`flex-1 ${isExporting ? '' : 'bg-gray-200'} flex flex-col h-full relative`}>
        {!isExporting && (
        <div className="bg-white border-b border-gray-200 p-2 flex items-center justify-between px-4">
          <span className="text-sm text-gray-500">Live Preview</span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
        </div>
        )}
        <div className={`flex-1 ${isExporting ? '' : 'p-4 md:p-8'} overflow-hidden`}>
          <div className={`w-full h-full bg-white ${isExporting ? '' : 'rounded-lg shadow-2xl'} overflow-hidden ${isExporting ? '' : 'border border-gray-300'}`}>
            <iframe 
              ref={iframeRef}
              key={iframeKey}
              src={getPreviewUrl()}
              className="w-full h-full border-0"
              title="Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderApp;
