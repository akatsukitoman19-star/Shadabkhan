import React from 'react';
import { Dumbbell, Sparkles, Utensils, Coffee, UserCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  gym: <Dumbbell className="w-5 h-5 text-[#E63946]" />,
  salon: <Sparkles className="w-5 h-5 text-[#E63946]" />,
  restaurant: <Utensils className="w-5 h-5 text-[#E63946]" />,
  cafe: <Coffee className="w-5 h-5 text-[#E63946]" />,
  portfolio: <UserCheck className="w-5 h-5 text-[#E63946]" />
};

export const Services: React.FC = () => {
  const getWhatsAppServiceLink = (serviceTitle: string) => {
    const text = encodeURIComponent(`Hi Shadab, I saw your portfolio and would like to discuss building a website for: ${serviceTitle}`);
    return `https://wa.me/917891772709?text=${text}`;
  };

  return (
    <section id="services" className="py-24 px-6 border-t border-[#262626] bg-[#111111] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-[#E63946] uppercase font-bold block mb-2">
              01. Core Capabilities
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#F5F3F0] tracking-tight leading-tight">
              Tailored Websites for Businesses That Mean Business
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A3A3A3] max-w-md leading-relaxed">
            I don’t do generic drag-and-drop templates. Every website is custom coded for optimal mobile speed, clear typography, and direct customer conversion.
          </p>
        </div>

        {/* 5 Focused Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service: ServiceItem, index: number) => {
            const isFullSpanOnDesktop = index === 4; // 5th item can span nicely or fit cleanly
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-[#1C1C1C] border border-[#262626] hover:border-[#E63946]/60 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  isFullSpanOnDesktop ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top Row: Index number & Service Icon */}
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#262626]">
                    <span className="text-xs font-mono font-semibold text-[#737373] tracking-widest">
                      {service.number} / 05
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#242424] border border-[#2E2E2E] flex items-center justify-center group-hover:border-[#E63946]/40 transition-colors">
                      {iconMap[service.id]}
                    </div>
                  </div>

                  {/* Category & Title */}
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3] block mb-1">
                    {service.category}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F3F0] mb-3 group-hover:text-[#E63946] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#A3A3A3]">
                        <CheckCircle2 className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Ideal For & Direct Inquire Action */}
                <div className="pt-6 border-t border-[#262626]">
                  <p className="text-[11px] font-mono text-[#737373] mb-4">
                    <span className="text-[#A3A3A3] font-medium">IDEAL FOR:</span> {service.idealFor}
                  </p>
                  <a
                    href={getWhatsAppServiceLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-[#242424] hover:bg-[#E63946] text-[#F5F3F0] hover:text-[#F5F3F0] text-xs font-bold uppercase tracking-wider transition-colors duration-200"
                  >
                    <span>Inquire About {service.category.split('&')[0]} Site</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* Quick Commission Callout Box to complete the 6-grid balance */}
          <div className="rounded-2xl bg-gradient-to-br from-[#1C1C1C] via-[#161616] to-[#111111] border border-[#E63946]/30 p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#E63946] uppercase font-bold block mb-2">
                Need Something Custom?
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F3F0] mb-3">
                Have a unique vision or different industry?
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6">
                Whether you need a bespoke landing page, a product launch platform, or a modern rebrand, I bring the same clean code, typography, and speed to every build.
              </p>
            </div>
            <a
              href="https://wa.me/917891772709?text=Hi%20Shadab%2C%20I%20have%20a%20custom%20website%20project%20I%27d%20like%20to%20discuss."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-[#E63946] hover:bg-[#d52b38] text-[#F5F3F0] text-xs font-bold uppercase tracking-wider transition-colors shadow"
            >
              <span>Message Shadab on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
