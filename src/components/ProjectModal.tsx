import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle, Smartphone, Globe, Layers } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const inquiryUrl = `https://wa.me/917891772709?text=${encodeURIComponent(
    `Hi Shadab, I am interested in building a website similar to the ${project.title} (${project.category}) prototype.`
  )}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#1C1C1C] border border-[#2E2E2E] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#262626] bg-[#181818]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#E63946] uppercase">
              {project.status}
            </span>
            <span className="text-[#64645e]">·</span>
            <span className="text-xs font-mono text-[#A3A3A3]">
              {project.category} Website
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-[#A3A3A3] hover:text-[#F5F3F0] hover:bg-[#262626] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Header */}
          <div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F3F0] mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Simulated Web Viewport Preview */}
          <div className="rounded-xl border border-[#2A2A2A] bg-[#111111] overflow-hidden shadow-inner">
            {/* Browser top pill */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#181818] border-b border-[#262626] text-xs font-mono text-[#737373]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-[11px] text-[#A3A3A3]">prototype://preview.{project.id}.local</span>
              <div className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#E63946]" />
              </div>
            </div>

            {/* Viewport Content */}
            <div className="p-6 sm:p-8 bg-gradient-to-b from-[#181818] to-[#111111]">
              <div className="max-w-xl mx-auto text-center space-y-4 mb-8">
                <span className="text-[10px] font-mono tracking-widest text-[#E63946] uppercase font-bold px-2.5 py-1 rounded bg-[#222222] border border-[#E63946]/30 inline-block">
                  Live Layout Prototype
                </span>
                <h4 className="font-display font-black text-xl sm:text-2xl text-[#F5F3F0] tracking-tight">
                  {project.mockSections.heroTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#A3A3A3]">
                  {project.mockSections.heroSubtitle}
                </p>
                <div className="pt-2">
                  <span className="inline-block px-4 py-2 rounded-lg bg-[#E63946] text-[#F5F3F0] text-xs font-bold uppercase tracking-wider shadow">
                    {project.mockSections.callToAction}
                  </span>
                </div>
              </div>

              {/* Sample Catalog / Schedule / Menu grid inside the prototype */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.mockSections.featuredItems.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#222222] border border-[#2E2E2E] text-left">
                    <span className="text-[10px] font-mono text-[#E63946] uppercase block mb-1">
                      {item.priceOrMeta}
                    </span>
                    <p className="text-xs font-bold text-[#F5F3F0] mb-1">{item.name}</p>
                    <p className="text-[11px] text-[#8E8E8E] leading-tight">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights & Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#E63946] font-bold mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> Built For Conversion
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#A3A3A3]">
                    <CheckCircle className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#E63946] font-bold mb-3 flex items-center gap-1.5">
                <Smartphone className="w-4 h-4" /> Technical Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs font-mono px-3 py-1 bg-[#242424] border border-[#2E2E2E] text-[#F5F3F0] rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-[#8E8E8E] mt-3">
                Built with clean semantic code, optimized asset loading, accessible touch targets, and zero bloated libraries.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer with Direct Inquiry Action */}
        <div className="px-6 py-4 bg-[#181818] border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#A3A3A3]">
            Need a similar custom website for your brand?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#A3A3A3] hover:text-[#F5F3F0] transition-colors"
            >
              Close
            </button>
            <a
              href={inquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#E63946] hover:bg-[#d52b38] text-[#F5F3F0] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm w-full sm:w-auto"
            >
              <span>Discuss This Design</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
