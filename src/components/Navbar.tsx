import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#111111]/90 backdrop-blur-md border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single element) */}
        <a 
          href="#top" 
          className="font-display font-extrabold text-xl tracking-tight text-[#F5F3F0] hover:text-[#E63946] transition-colors whitespace-nowrap shrink-0"
        >
          SHADAB KHAN
        </a>

        {/* Zone 2: Clean single-line text links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A3A3A3]">
          <a 
            href="#services" 
            className="hover:text-[#E63946] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Services
          </a>
          <a 
            href="#work" 
            className="hover:text-[#E63946] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Selected Work
          </a>
          <a 
            href="#contact" 
            className="hover:text-[#E63946] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="https://wa.me/917891772709"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#F5F3F0] bg-[#E63946] hover:bg-[#d52b38] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#F5F3F0] hover:text-[#E63946] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1C1C1C] border-b border-[#262626] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#F5F3F0] hover:text-[#E63946] py-1 transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#F5F3F0] hover:text-[#E63946] py-1 transition-colors"
            >
              Selected Work
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#F5F3F0] hover:text-[#E63946] py-1 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="pt-4 border-t border-[#262626]">
            <a
              href="https://wa.me/917891772709"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#F5F3F0] bg-[#E63946] hover:bg-[#d52b38] rounded-lg transition-colors shadow-md"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
