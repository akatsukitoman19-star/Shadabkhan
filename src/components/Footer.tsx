import React from 'react';
import { ArrowUp, MessageSquare, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#262626] bg-[#111111] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-display font-extrabold text-lg text-[#F5F3F0] tracking-tight">
            SHADAB KHAN
          </span>
          <p className="text-xs text-[#8E8E8E] mt-1 font-mono">
            Freelance Web Developer · Specializing in bespoke modern websites
          </p>
        </div>

        {/* Quick Social & Contact Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/917891772709"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-[#A3A3A3] hover:text-[#E63946] transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/ykm.shadab?mdxt=dmk0bmI1cXFrOGl6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#A3A3A3] hover:text-[#E63946] transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="mailto:khanshadabkhan4671@gmail.com"
            aria-label="Email"
            className="text-[#A3A3A3] hover:text-[#E63946] transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-[#1C1C1C] border border-[#2E2E2E] text-[#A3A3A3] hover:text-[#E63946] hover:border-[#E63946]/40 transition-colors cursor-pointer"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-xs font-mono text-[#666666]">
          © {new Date().getFullYear()} Shadab Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
