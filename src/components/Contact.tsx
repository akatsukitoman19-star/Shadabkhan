import React, { useState } from 'react';
import { MessageSquare, Instagram, Mail, Copy, Check, ArrowUpRight, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState('Gym Website');
  const [name, setName] = useState('');
  const [projectNote, setProjectNote] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('khanshadabkhan4671@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSendWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting = name.trim() ? `Hi Shadab, I am ${name.trim()}.` : 'Hi Shadab,';
    const note = projectNote.trim() ? ` Details: "${projectNote.trim()}"` : '';
    const fullText = `${greeting} I would like to inquire about building a ${selectedService}.${note}`;
    window.open(`https://wa.me/917891772709?text=${encodeURIComponent(fullText)}`, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmailInquiry = () => {
    const greeting = name.trim() ? `Hi Shadab, I am ${name.trim()}.` : 'Hi Shadab,';
    const note = projectNote.trim() ? `\n\nProject Details:\n${projectNote.trim()}` : '';
    const subject = encodeURIComponent(`Website Inquiry: ${selectedService}`);
    const body = encodeURIComponent(`${greeting}\n\nI would like to inquire about building a ${selectedService}.${note}\n\nLooking forward to hearing from you.`);
    window.location.href = `mailto:khanshadabkhan4671@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#262626] bg-[#111111] relative">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E63946]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono tracking-widest text-[#E63946] uppercase font-bold block mb-2">
            03. Direct Contact
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F3F0] tracking-tight mb-4">
            Let’s Build Something Bold
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            Direct communication — no intermediaries, no unnecessary waiting. Connect with me directly on WhatsApp, Instagram, or email to discuss your vision.
          </p>
        </div>

        {/* 3 Main Direct Contact Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* WhatsApp Card */}
          <div className="rounded-2xl bg-[#1C1C1C] border border-[#262626] hover:border-[#E63946]/60 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#242424] border border-[#2E2E2E] flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-[#E63946]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3] block mb-1">
                Fastest Response
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F3F0] mb-2">
                WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E8E] mb-4">
                Instant messaging for immediate project discussion and quotes.
              </p>
              <div className="font-mono text-sm text-[#F5F3F0] font-semibold mb-6">
                +91 78917 72709
              </div>
            </div>

            <a
              href="https://wa.me/917891772709"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-[#E63946] hover:bg-[#d52b38] text-[#F5F3F0] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Message on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Instagram Card */}
          <div className="rounded-2xl bg-[#1C1C1C] border border-[#262626] hover:border-[#E63946]/60 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#242424] border border-[#2E2E2E] flex items-center justify-center mb-6">
                <Instagram className="w-6 h-6 text-[#E63946]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3] block mb-1">
                Direct Message
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F3F0] mb-2">
                Instagram
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E8E] mb-4">
                Follow along, check stories, and send inquiries straight to my DMs.
              </p>
              <div className="font-mono text-sm text-[#F5F3F0] font-semibold mb-6">
                @ykm.shadab
              </div>
            </div>

            <a
              href="https://www.instagram.com/ykm.shadab?mdxt=dmk0bmI1cXFrOGl6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-[#242424] hover:bg-[#2C2C2C] text-[#F5F3F0] hover:text-[#E63946] border border-[#2E2E2E] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>View Instagram Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Email Card */}
          <div className="rounded-2xl bg-[#1C1C1C] border border-[#262626] hover:border-[#E63946]/60 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#242424] border border-[#2E2E2E] flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-[#E63946]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#A3A3A3] block mb-1">
                Formal Inquiries
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F3F0] mb-2">
                Email
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E8E] mb-4">
                Send project briefs, RFP specifications, or schedule requirements.
              </p>
              <div className="font-mono text-xs sm:text-sm text-[#F5F3F0] font-medium break-all mb-6">
                khanshadabkhan4671@gmail.com
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href="mailto:khanshadabkhan4671@gmail.com"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-[#242424] hover:bg-[#2C2C2C] text-[#F5F3F0] hover:text-[#E63946] border border-[#2E2E2E] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Write Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-3 rounded-xl bg-[#242424] hover:bg-[#2C2C2C] text-[#A3A3A3] hover:text-[#F5F3F0] border border-[#2E2E2E] text-xs transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-[#E63946]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Quick Inquiry Composer */}
        <div className="rounded-2xl bg-[#1C1C1C] border border-[#262626] p-8 sm:p-10 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E63946] font-bold block mb-1">
              Quick Inquiry Builder
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F3F0]">
              Tell Me What You Need
            </h3>
            <p className="text-xs sm:text-sm text-[#8E8E8E] mt-1">
              Select your service, add an optional note, and dispatch directly to WhatsApp or Email.
            </p>
          </div>

          <form onSubmit={handleSendWhatsAppInquiry} className="space-y-6">
            {/* Service selector */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#A3A3A3] mb-2.5">
                1. Select Website Type
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  'Gym Website',
                  'Salon Website',
                  'Restaurant Website',
                  'Cafe Website',
                  'Personal Portfolio',
                  'Other Custom Project'
                ].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setSelectedService(type)}
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      selectedService === type
                        ? 'bg-[#E63946] text-[#F5F3F0] font-semibold'
                        : 'bg-[#242424] text-[#A3A3A3] hover:text-[#F5F3F0] border border-[#2E2E2E]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Note */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#A3A3A3] mb-1.5">
                  2. Your Name or Business (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. IronCore Gym / Sarah"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-[#111111] border border-[#2E2E2E] rounded-xl text-[#F5F3F0] placeholder-[#646464] focus:outline-none focus:border-[#E63946] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-[#A3A3A3] mb-1.5">
                  3. Project Timeline or Goals (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Launch in 2 weeks, need booking"
                  value={projectNote}
                  onChange={(e) => setProjectNote(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-[#111111] border border-[#2E2E2E] rounded-xl text-[#F5F3F0] placeholder-[#646464] focus:outline-none focus:border-[#E63946] transition-colors"
                />
              </div>
            </div>

            {/* Dispatch Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E63946] hover:bg-[#d52b38] text-[#F5F3F0] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleSendEmailInquiry}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#242424] hover:bg-[#2C2C2C] text-[#F5F3F0] hover:text-[#E63946] border border-[#2E2E2E] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send via Email</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
