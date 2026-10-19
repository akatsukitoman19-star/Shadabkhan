import React, { useState } from 'react';
import { MessageSquare, Mail, Instagram, Copy, Check, ArrowDown } from 'lucide-react';
import { PortraitPlaceholder } from './PortraitPlaceholder';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('khanshadabkhan4671@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="top" className="relative flex flex-col justify-center items-center py-12 sm:py-16 md:py-20 px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E63946]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Centered Hero Content */}
      <div className="max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Title / Subtitle kicker */}
        <div className="mb-2.5">
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#E63946] uppercase font-bold">
            Freelance Web Developer
          </span>
        </div>

        {/* Large "SHADAB KHAN" Headline */}
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[#F5F3F0] leading-none mb-6 sm:mb-8 text-balance uppercase select-none">
          SHADAB KHAN
        </h1>

        {/* Central Portrait Placeholder */}
        <div className="mb-6 sm:mb-8 w-full flex justify-center">
          <PortraitPlaceholder />
        </div>

        {/* Short Introduction */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#A3A3A3] leading-relaxed mb-6 sm:mb-8 font-normal text-balance">
          I build high-impact, custom-crafted websites for businesses ready to stand out. Specializing in modern digital storefronts for{' '}
          <span className="text-[#F5F3F0] font-semibold">gyms</span>,{' '}
          <span className="text-[#F5F3F0] font-semibold">salons</span>,{' '}
          <span className="text-[#F5F3F0] font-semibold">restaurants</span>,{' '}
          <span className="text-[#F5F3F0] font-semibold">cafes</span>, and{' '}
          <span className="text-[#F5F3F0] font-semibold">personal portfolios</span>.
        </p>

        {/* Contact Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-xl">
          {/* WhatsApp Primary Button */}
          <a
            href="https://wa.me/917891772709"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#E63946] hover:bg-[#d52b38] text-[#F5F3F0] font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-200 shadow-lg shadow-[#E63946]/20 hover:shadow-[#E63946]/35 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/ykm.shadab?mdxt=dmk0bmI1cXFrOGl6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#1C1C1C] hover:bg-[#262626] text-[#F5F3F0] hover:text-[#E63946] border border-[#2E2E2E] hover:border-[#E63946]/50 font-semibold text-sm rounded-xl transition-all duration-200"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>

          {/* Email Direct Mailto */}
          <a
            href="mailto:khanshadabkhan4671@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#1C1C1C] hover:bg-[#262626] text-[#F5F3F0] hover:text-[#E63946] border border-[#2E2E2E] hover:border-[#E63946]/50 font-semibold text-sm rounded-xl transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </a>

          {/* One-tap Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-4 py-3.5 bg-[#1C1C1C]/60 hover:bg-[#242424] text-[#A3A3A3] hover:text-[#F5F3F0] border border-[#2E2E2E] text-xs font-mono rounded-xl transition-colors cursor-pointer"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#E63946]" />
                <span className="text-[#E63946] font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="mt-8 sm:mt-10 flex justify-center text-[#737373] hover:text-[#E63946] transition-colors">
        <a 
          href="#services" 
          aria-label="Scroll to services section"
          className="inline-flex flex-col items-center gap-1.5 text-xs font-mono tracking-widest uppercase hover:underline"
        >
          <span>Explore Services</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
