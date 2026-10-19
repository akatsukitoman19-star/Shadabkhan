import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, Trash2, Check, Sparkles } from 'lucide-react';

interface PortraitPlaceholderProps {
  size?: 'normal' | 'compact';
}

const DEFAULT_PORTRAIT_URL = '/shadab_khan.png';

export const PortraitPlaceholder: React.FC<PortraitPlaceholderProps> = ({ size = 'normal' }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(DEFAULT_PORTRAIT_URL);
  const [isEditing, setIsEditing] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('shadab_khan_portrait_url');
    if (saved) {
      setPhotoUrl(saved);
    } else {
      setPhotoUrl(DEFAULT_PORTRAIT_URL);
    }
  }, []);

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setPhotoUrl(inputUrl.trim());
      localStorage.setItem('shadab_khan_portrait_url', inputUrl.trim());
      setIsEditing(false);
      setInputUrl('');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPhotoUrl(result);
        localStorage.setItem('shadab_khan_portrait_url', result);
        setIsEditing(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearPhoto = () => {
    setPhotoUrl(DEFAULT_PORTRAIT_URL);
    localStorage.removeItem('shadab_khan_portrait_url');
    setIsEditing(false);
  };

  const isCompact = size === 'compact';

  return (
    <div className="relative group mx-auto flex flex-col items-center">
      {/* Outer subtle glow in crimson red */}
      <div className="absolute -inset-1.5 bg-gradient-to-b from-[#E63946]/20 via-[#E63946]/5 to-transparent rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

      {/* Main Portrait Container */}
      <div 
        className={`relative overflow-hidden rounded-2xl bg-[#1C1C1C] border-2 border-[#E63946]/40 group-hover:border-[#E63946] transition-colors duration-300 shadow-2xl flex flex-col items-center justify-center ${
          isCompact ? 'w-56 h-72 sm:w-64 sm:h-80' : 'w-64 h-84 sm:w-72 sm:h-96 md:w-80 md:h-[420px]'
        }`}
      >
        {/* Viewfinder corner brackets in crimson red */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#E63946]" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#E63946]" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#E63946]" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#E63946]" />

        {photoUrl ? (
          <div className="relative w-full h-full">
            <img
              src={photoUrl}
              alt="Shadab Khan — Freelance Web Developer"
              className="w-full h-full object-cover object-center"
              onError={() => {
                if (photoUrl !== DEFAULT_PORTRAIT_URL) {
                  setPhotoUrl(DEFAULT_PORTRAIT_URL);
                  localStorage.removeItem('shadab_khan_portrait_url');
                }
              }}
            />
            {/* Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
              <span className="text-[11px] font-mono tracking-widest text-[#E63946] uppercase font-semibold">
                Shadab Khan
              </span>
              <p className="text-xs text-[#F5F3F0] font-medium">Freelance Web Developer</p>
            </div>
          </div>
        ) : (
          /* Sleek architectural portrait placeholder */
          <div className="flex flex-col items-center justify-center text-center p-6 h-full w-full select-none">
            {/* Background geometric accents */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#242424] border border-[#E63946]/30 flex items-center justify-center mb-5 relative group-hover:scale-105 transition-transform duration-300 shadow-inner">
              <div className="absolute inset-2 rounded-full border border-dashed border-[#E63946]/40 animate-[spin_20s_linear_infinite]" />
              <span className="text-3xl sm:text-4xl font-display font-bold text-[#F5F3F0] tracking-tight">
                SK
              </span>
            </div>

            {/* Label */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#242424] border border-[#E63946]/30 text-[#E63946] text-[11px] font-mono tracking-wider uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]" />
                Portrait Placeholder
              </div>
              <p className="text-xs text-[#A3A3A3] max-w-[200px] leading-relaxed pt-1">
                Central focal frame for Shadab Khan
              </p>
            </div>

            {/* Minimalist hairline badge */}
            <div className="mt-6 pt-4 border-t border-[#2E2E2E] w-full flex items-center justify-between text-[11px] font-mono text-[#737373]">
              <span>ROLE: DEV</span>
              <span className="text-[#E63946]">AVAILABLE</span>
            </div>
          </div>
        )}

        {/* Floating Customizer Button */}
        <button
          onClick={() => setIsEditing(!isEditing)}
          aria-label="Upload or change portrait photo"
          className="absolute top-4 right-4 p-2 rounded-full bg-[#242424]/90 backdrop-blur-md border border-[#E63946]/40 text-[#F5F3F0] hover:text-[#E63946] hover:border-[#E63946] transition-colors shadow-lg z-20 cursor-pointer"
          title="Upload or link your real photo"
        >
          <Camera className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Helper Sheet (When user clicks camera button) */}
      {isEditing && (
        <div className="mt-3 w-full max-w-xs bg-[#1C1C1C] border border-[#E63946]/40 rounded-xl p-3.5 shadow-2xl z-30 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#2A2A2A]">
            <span className="text-xs font-semibold text-[#F5F3F0] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E63946]" /> Add Your Photo
            </span>
            <button
              onClick={() => setIsEditing(false)}
              className="text-[#A3A3A3] hover:text-[#F5F3F0] text-xs font-mono"
            >
              ✕
            </button>
          </div>

          <p className="text-[11px] text-[#A3A3A3] mb-3 leading-tight">
            Drop your actual photo or paste an image link to make it personal.
          </p>

          <form onSubmit={handleSaveUrl} className="space-y-2">
            <input
              type="url"
              placeholder="Paste direct image URL..."
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              className="w-full px-2.5 py-1.5 text-xs bg-[#111111] border border-[#2E2E2E] rounded-lg text-[#F5F3F0] focus:outline-none focus:border-[#E63946]"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={!inputUrl.trim()}
                className="flex-1 py-1.5 text-xs font-semibold bg-[#E63946] text-[#F5F3F0] rounded-lg disabled:opacity-40 hover:bg-[#d52b38] transition-colors flex items-center justify-center gap-1"
              >
                <Check className="w-3.5 h-3.5" /> Save
              </button>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-2.5 py-1.5 text-xs font-medium bg-[#262626] text-[#F5F3F0] hover:text-[#E63946] rounded-lg transition-colors flex items-center gap-1"
                title="Upload from device"
              >
                <Upload className="w-3.5 h-3.5" /> Upload
              </button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </form>

          {photoUrl && (
            <button
              onClick={handleClearPhoto}
              className="mt-2 w-full py-1 text-[11px] text-[#E63946] hover:text-[#ff6b6b] flex items-center justify-center gap-1 transition-colors"
            >
              <Trash2 className="w-3 h-3" /> Reset to official photo
            </button>
          )}
        </div>
      )}
    </div>
  );
};
