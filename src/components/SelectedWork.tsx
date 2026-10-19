import React, { useState } from 'react';
import { ArrowUpRight, Eye, Sparkles } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const SelectedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Gym', 'Salon', 'Restaurant', 'Cafe', 'Personal Portfolio'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 px-6 border-t border-[#262626] bg-[#111111] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#E63946] uppercase font-bold block mb-2">
              02. Selected Work
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F5F3F0] tracking-tight">
              Design Prototypes & Concept Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A3A3A3] max-w-md leading-relaxed">
            Curated functional prototypes illustrating design craft, typography hierarchy, and conversion mechanics across each specialty.
          </p>
        </div>

        {/* Clean Interactive Category Filter Controls (Segmented bar without pills) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#1C1C1C] border border-[#262626] rounded-xl mb-12 w-fit max-w-full overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#E63946] text-[#F5F3F0] shadow-sm'
                  : 'text-[#A3A3A3] hover:text-[#F5F3F0] hover:bg-[#262626]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#1C1C1C] border border-[#262626] hover:border-[#E63946]/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Visual Viewport Header Preview */}
                <div 
                  onClick={() => setActiveModalProject(project)}
                  className="w-full h-44 rounded-xl bg-gradient-to-br from-[#242424] to-[#171717] border border-[#2E2E2E] mb-6 p-4 flex flex-col justify-between group-hover:border-[#E63946]/40 transition-colors cursor-pointer relative overflow-hidden"
                >
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#A3A3A3]">
                    <span className="uppercase text-[#E63946]">{project.category}</span>
                    <span className="text-[10px] text-[#737373]">{project.status}</span>
                  </div>

                  {/* Wireframe Mock Text */}
                  <div className="my-auto text-left">
                    <p className="font-display font-bold text-lg text-[#F5F3F0] leading-tight group-hover:text-[#E63946] transition-colors line-clamp-2">
                      {project.mockSections.heroTitle}
                    </p>
                    <p className="text-[11px] text-[#8E8E8E] mt-1 line-clamp-1">
                      {project.mockSections.heroSubtitle}
                    </p>
                  </div>

                  {/* Hover prompt */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#262626] text-[11px] font-mono text-[#A3A3A3]">
                    <span>Interactive Prototype</span>
                    <span className="text-[#E63946] flex items-center gap-1 font-semibold group-hover:underline">
                      <Eye className="w-3.5 h-3.5" /> Preview
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="mb-4">
                  <span className="text-[11px] font-mono text-[#A3A3A3] uppercase tracking-wider block mb-1">
                    {project.status} · {project.category}
                  </span>
                  <h3 className="font-display font-bold text-xl text-[#F5F3F0] group-hover:text-[#E63946] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#8E8E8E] mt-1 font-medium">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-[#A3A3A3] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono text-[#A3A3A3] bg-[#242424] border border-[#2E2E2E] px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#262626] flex items-center gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#242424] hover:bg-[#2C2C2C] text-[#F5F3F0] text-xs font-semibold transition-colors cursor-pointer border border-[#2E2E2E]"
                >
                  <Eye className="w-3.5 h-3.5 text-[#E63946]" />
                  <span>View Details</span>
                </button>
                <a
                  href={`https://wa.me/917891772709?text=${encodeURIComponent(
                    `Hi Shadab, I like the ${project.title} design. Let's discuss building something like this.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 rounded-lg bg-[#242424] hover:bg-[#E63946] text-[#A3A3A3] hover:text-[#F5F3F0] transition-colors border border-[#2E2E2E]"
                  title="Inquire about this project"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}

          {/* Reserved Project Card: "Your Brand Here" */}
          <div className="rounded-2xl bg-gradient-to-br from-[#1C1C1C] to-[#141414] border-2 border-dashed border-[#2E2E2E] hover:border-[#E63946]/60 p-6 sm:p-7 flex flex-col justify-between transition-colors">
            <div className="text-left">
              <div className="w-10 h-10 rounded-xl bg-[#242424] border border-[#E63946]/30 flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5 text-[#E63946]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#E63946] font-bold block mb-1">
                Reserved Slot
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F3F0] mb-2">
                Your Next Website
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-4">
                Have a gym, salon, restaurant, cafe, or personal venture? Let’s turn this card into your live, high-converting digital presence.
              </p>
              <div className="space-y-1.5 text-xs text-[#8E8E8E] font-mono mb-6">
                <div>· 100% custom responsive design</div>
                <div>· Blazing mobile performance</div>
                <div>· Direct WhatsApp / booking conversion</div>
              </div>
            </div>

            <a
              href="https://wa.me/917891772709?text=Hi%20Shadab%2C%20I%20want%20to%20build%20my%20next%20website%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#E63946] hover:bg-[#d52b38] text-[#F5F3F0] text-xs font-bold uppercase tracking-wider transition-colors shadow"
            >
              <span>Commission Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
