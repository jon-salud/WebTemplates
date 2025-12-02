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

const BuilderApp = () => {
  const [industryId, setIndustryId] = useState('realestate');
  const [sections, setSections] = useState<any[]>([]);
  const [iframeKey, setIframeKey] = useState(0);

  // Load initial blueprint when industry changes
  useEffect(() => {
    const config = industryConfigs[industryId as keyof typeof industryConfigs];
    if (config) {
      const family = config.templateFamily || 'professionalServices';
      const initialBlueprint = templateBlueprints[family] || [];
      // Deep copy to avoid mutating the original config
      setSections(JSON.parse(JSON.stringify(initialBlueprint)));
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
    return `/builder/preview?industry=${industryId}&blueprint=${blueprintString}`;
  };

  const handleExport = async () => {
    try {
      const url = getPreviewUrl();
      const response = await fetch(url);
      const html = await response.text();
      
      // Create a blob and download
      const blob = new Blob([html], { type: 'text/html' });
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
      alert('Failed to export HTML. Please try again.');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full shadow-lg z-10">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h1 className="text-lg font-bold text-gray-800 mb-4">Landing Page Builder</h1>
          
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Industry Template</label>
            <select 
              value={industryId}
              onChange={(e) => setIndustryId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {Object.values(industryConfigs).map((ind) => (
                <option key={ind.id} value={ind.id}>{ind.name}</option>
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
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
            >
              <Download size={14} /> Export
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

      {/* Preview Area */}
      <div className="flex-1 bg-gray-200 flex flex-col h-full relative">
        <div className="bg-white border-b border-gray-200 p-2 flex items-center justify-between px-4">
          <span className="text-sm text-gray-500">Live Preview</span>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
        </div>
        <div className="flex-1 p-4 md:p-8 overflow-hidden">
          <div className="w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-300">
            <iframe 
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
