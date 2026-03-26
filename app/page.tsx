"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Menu, X, User, ArrowUpRight, Globe } from 'lucide-react';
import { Skiper58 } from '@/components/ui/text-roll-navigation';
import { ProfileModal } from '@/components/ProfileModal';
import { YearCountdown } from '@/components/YearCountdown';
import { FAQ } from '@/components/FAQ';
import { CourseCard } from '@/components/CourseCard';
import { useLanguage, Language } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const t = translations[language];

  return (
    <main className="min-h-screen relative overflow-hidden pb-20 font-sans">
      {/* Background Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#0f3826]/50 blur-[140px] rounded-full pointer-events-none -z-20" />

      <div className="max-w-[1100px] mx-auto px-6 pt-8">
        
        {/* Top Navigation */}
        <nav className="flex items-center justify-between gap-2 mb-8 md:mb-24">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsProfileOpen(true)}
              className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-full border border-white/10 bg-[#0a0a0a] text-[10px] md:text-sm text-gray-200 hover:bg-white/5 transition-all shrink-0"
            >
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#22c55e] flex items-center justify-center text-black">
                <User size={10} className="md:hidden" strokeWidth={3} />
                <User size={14} className="hidden md:block" strokeWidth={3} />
              </div>
              <span className="hidden sm:inline">{t.nav.profile}</span>
              <span className="sm:hidden">{t.nav.profile.split(' ')[1] || t.nav.profile}</span>
            </button>

            {/* Inline Language Toggle for desktop/quick access */}
            <div className="hidden md:flex items-center bg-[#0a0a0a] border border-white/10 rounded-full p-1">
              {(['es', 'en', 'pt'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${
                    language === lang
                    ? 'bg-[#a3e635] text-black'
                    : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <YearCountdown />
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/10 bg-[#0a0a0a] text-gray-200 hover:bg-white/5 transition-all shrink-0"
            aria-label={t.nav.openMenu}
          >
            <Menu size={16} className="md:hidden" />
            <Menu size={20} className="hidden md:block" />
          </button>
        </nav>

        {/* Hero Section */}
        <div className="relative w-full flex flex-col md:flex-row justify-between items-center mt-4 md:mt-10 mb-16 md:mb-24 md:min-h-[700px]">
          
          {/* Left Text */}
          <div className="relative z-20 w-full md:w-1/3 flex flex-col items-center text-center md:pl-4 mb-8 md:mb-0">
            <div className="w-12 md:w-16 h-[2px] bg-[#22c55e] mb-4 md:mb-5 opacity-80" />
            <h2 className="text-[24px] md:text-[28px] font-bold text-center leading-[1.15] text-gray-100 tracking-tight max-w-[370px]">
              {t.hero.subtitle}
            </h2>
          </div>

          {/* Center Avatar Container */}
          <div className="relative w-full md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[-60px] flex flex-col items-center z-10">
            <div className="relative w-[280px] h-[380px] sm:w-[450px] sm:h-[600px] md:w-[700px] md:h-[850px] pointer-events-none">
              <Image 
                src="https://lh3.googleusercontent.com/d/15ESWllXvWWNaUEUphfCgcaQYSFXnc9BB" 
                alt="Avatar"
                fill 
                className="object-cover object-top"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 95%)', 
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 95%)' 
                }}
                priority
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="relative z-20 w-full md:w-1/3 flex justify-center md:justify-end text-center md:pr-4 mt-8 md:mt-0">
            <p className="text-[#d4d4d8] text-[14px] text-center leading-relaxed max-w-[400px] font-light">
              {t.hero.description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-12 md:mb-16" />

        {/* About Section */}
        <div className="max-w-[900px] mb-12 md:mb-20">
          <h2 className="text-[26px] sm:text-3xl md:text-[40px] font-medium text-gray-100 mb-4 md:mb-6 leading-[1.2] tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-[#71717a] text-[14px] leading-relaxed max-w-[1000px]">
            {t.about.description}
          </p>
        </div>

        {/* Material de estudio Section */}
        <div id="ensenanzas" className="mb-24 md:mb-32 scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-10 gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-5xl font-medium text-white tracking-tight uppercase">{t.sections.studyMaterial}</h2>
              <p className="text-[#a1a1aa] text-base md:text-lg">{t.sections.myProcess}</p>
              <Link href="/ensenanzas" className="text-[#a3e635] text-sm md:text-base hover:underline flex items-center gap-1 mt-2">
                {t.sections.viewAll} <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="flex gap-4 text-[12px] md:text-sm text-gray-400 font-medium">
              <span className="text-[#a3e635]">{t.sections.all}</span>
              <span className="hidden sm:inline opacity-50">—</span>
              <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">{t.sections.courses}</span>
              <span className="hidden sm:inline opacity-50">—</span>
              <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">{t.sections.books}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <CourseCard 
              title="CRISTOLOGÍA" 
              author=""
              type="CURSO"
              imageSrc="https://lh3.googleusercontent.com/d/1X1l4CaRCY1E6wxSyVoX1iI2RMFilJs5U"
              bgColor="bg-transparent"
              textColor="text-white"
              status="completed"
            />
            <CourseCard 
              title="BIBLIOLOGÍA" 
              author=""
              type="CURSO"
              imageSrc="https://lh3.googleusercontent.com/d/1-CPOYyNFrKKkeGEgj33CbazTA2rRShHL"
              bgColor="bg-transparent"
              textColor="text-white"
              status="empty"
            />
            <CourseCard 
              title="TEOLOGÍA" 
              author=""
              type="CURSO"
              imageSrc="https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=400&h=600&fit=crop"
              bgColor="bg-transparent"
              textColor="text-white"
              status="empty"
            />
            <CourseCard 
              title="ECLESIOLOGÍA" 
              author=""
              type="CURSO"
              imageSrc="https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=400&h=600&fit=crop"
              bgColor="bg-transparent"
              textColor="text-white"
              status="empty"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />

        {/* Footer / Contact */}
        <div className="flex flex-col items-center justify-center text-center pb-10">
          <h3 className="text-lg md:text-xl font-medium text-white mb-6 md:mb-8">{t.footer.contact}</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            <SocialIcon type="instagram" label="Instagram" href="https://www.instagram.com/soykaue_/" />
            <SocialIcon type="x" label="X" href="https://x.com/soykaue_" />
            <SocialIcon type="church" label={t.footer.myChurch} href="https://admmadureira.netlify.app" />
          </div>
        </div>

      </div>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-xl flex flex-col">
          <div className="flex justify-end p-6 md:p-8 max-w-[1100px] mx-auto w-full">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-[#0a0a0a] text-gray-200 hover:bg-white/5 transition-all"
              aria-label={t.nav.closeMenu}
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center pb-20">
            <Skiper58 onItemClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* Profile Modal */}
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </main>
  );
}

function SocialIcon({ type, label, href = "#" }: { type: string, label: string, href?: string }) {
  const getIcon = () => {
    switch (type) {
      case 'instagram':
        return (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="#E1306C" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" stroke="#E1306C" strokeWidth="2"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="#E1306C"/>
          </svg>
        );
      case 'x':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.083 4.126H5.117L17.083 19.77Z" fill="#FFFFFF"/>
          </svg>
        );
      case 'church':
        return (
          <div className="relative w-6 h-6 rounded-full overflow-hidden">
            <Image 
              src="https://lh3.googleusercontent.com/d/1EAego3HN68v7oLwB7FHEiBPtHybElBAo" 
              alt="Logo Iglesia" 
              fill 
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
      <div className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center group-hover:bg-white/5 transition-colors">
        {getIcon()}
      </div>
      <span className="text-[10px] text-gray-500 font-medium tracking-wider group-hover:text-gray-300 transition-colors">{label}</span>
    </a>
  );
}
