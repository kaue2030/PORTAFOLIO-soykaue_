'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';
import { cristologiaContent } from '@/hooks/lessons-content';

export default function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const t = translations[language];
  const isCristologia = resolvedParams.slug === 'cristologia';

  return (
    <main className="min-h-screen bg-[#f5f4f3] text-black overflow-hidden selection:bg-[#a3e635]/30">
      {/* Minimal Back Button */}
      <div className="fixed top-6 left-4 md:left-8 z-[60]">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm md:text-base">{t.nav.home}</span>
        </Link>
      </div>

      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#f5f4f3]">
        <ProgressiveBlur position="top" backgroundColor="#f5f4f3" height="80px" />
        <ProgressiveBlur position="bottom" backgroundColor="#f5f4f3" height="80px" />

        <div className="flex h-full w-full flex-col items-center overflow-y-auto pt-8 md:pt-12 scroll-smooth">
          <div className="mt-6 md:mt-10 grid content-start justify-items-center gap-4 md:gap-6 text-center text-black">
            <span className="relative max-w-[15ch] text-[10px] md:text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-5 md:after:h-6 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
              {t.lessons.biblicalTeaching}<br />{resolvedParams.slug === 'cristologia' ? t.courses.cristologia.toUpperCase() : resolvedParams.slug.toUpperCase()}
            </span>
          </div>

          <div 
            className="mt-6 md:mt-10 w-full max-w-3xl px-4 md:px-12 pb-40 transition-transform duration-300 ease-out origin-top"
          >
            {isCristologia ? (
              <CristologiaContent />
            ) : (
              <div className="text-center text-gray-500 mt-20">Content not found.</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function CristologiaContent() {
  const { language, isEditorMode } = useLanguage();
  const t = translations[language];
  const adminT = translations[language].admin;
  const c = cristologiaContent[language].base;

  const [editContent, setEditContent] = useState(c);

  const handleSave = () => {
    console.log('Saving changes:', editContent);
    alert(adminT.save);
  };

  const current = isEditorMode ? editContent : c;

  return (
    <article className="space-y-8 md:space-y-12 pb-20">
      {isEditorMode && (
        <div className="fixed bottom-10 right-10 z-[100] flex gap-4">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-[#a3e635] text-black font-bold rounded-full shadow-2xl hover:scale-105 transition-all uppercase text-xs tracking-widest"
          >
            {adminT.save}
          </button>
        </div>
      )}
      <div className="text-center space-y-2">
        <h1 className="text-xl md:text-2xl font-bold text-black tracking-widest uppercase">
          {t.lessons.biblicalTeaching}
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tighter uppercase">
          {t.courses.cristologia}
        </h2>
      </div>

      <div className="max-w-xl mx-auto space-y-8 text-black">
        {isEditorMode ? (
          <textarea
            value={typeof editContent.description === 'string' ? editContent.description : 'Complex content'}
            onChange={(e) => setEditContent({...editContent, description: e.target.value})}
            className="w-full h-32 p-4 bg-white border border-black/10 rounded-xl italic text-sm"
          />
        ) : (
          <div className="text-sm md:text-base leading-relaxed text-black/70 italic border-l-2 border-black/10 pl-6 py-2 text-justify">
            {current.description}
          </div>
        )}

        <section>
          <Link href="/ensenanzas/cristologia/introduccion" className="group block">
            <h3 className="font-bold text-lg md:text-xl uppercase tracking-wider mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-2">
              {t.lessons.introduction}
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </Link>
        </section>

        <section className="space-y-4">
          <Link href="/ensenanzas/cristologia/deidad" className="group block">
            <h3 className="font-bold text-lg md:text-xl uppercase tracking-wider group-hover:text-blue-600 transition-colors flex items-center gap-2">
              I. {t.lessons.deityOfChrist}
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </Link>
          <ul className="pl-6 space-y-1 text-sm md:text-base text-black/70">
            {c.deity.map((item: string, i: number) => (
              <li key={i} className={i === 3 ? "font-bold text-black" : ""}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <Link href="/ensenanzas/cristologia/encarnacion" className="group block">
            <h3 className="font-bold text-lg md:text-xl uppercase tracking-wider group-hover:text-blue-600 transition-colors flex items-center gap-2">
              II. {t.lessons.incarnationOfChrist}
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </Link>
          <ul className="pl-6 space-y-1 text-sm md:text-base text-black/70">
            {c.incarnation.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <Link href="/ensenanzas/cristologia/nombres" className="group block">
            <h3 className="font-bold text-lg md:text-xl uppercase tracking-wider group-hover:text-blue-600 transition-colors flex items-center gap-2">
              III. {t.lessons.divineNames}
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </Link>
          <ul className="pl-6 space-y-1 text-sm md:text-base text-black/70">
            {c.names.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <Link href="/ensenanzas/cristologia/atributos" className="group block">
            <h3 className="font-bold text-lg md:text-xl uppercase tracking-wider group-hover:text-blue-600 transition-colors flex items-center gap-2">
              IV. {t.lessons.divineAttributes}
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </Link>
          <ul className="pl-6 space-y-1 text-sm md:text-base text-black/70">
            {c.attributes.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <Link href="/ensenanzas/cristologia/propiedades" className="group block">
            <h3 className="font-bold text-lg md:text-xl uppercase tracking-wider group-hover:text-blue-600 transition-colors flex items-center gap-2">
              V. {t.lessons.divineProperties}
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </Link>
          <ul className="pl-6 space-y-1 text-sm md:text-base text-black/70">
            <li>{c.properties[0]}</li>
            <li>{c.properties[1]}</li>
            <li>{c.properties[2]}</li>
            <ul className="pl-6 space-y-1">
              <li>{c.properties[3]}</li>
              <li>{c.properties[4]}</li>
            </ul>
          </ul>
        </section>
      </div>

      {/* Next Button */}
      <div className="pt-16 flex justify-end">
        <Link 
          href="/ensenanzas/cristologia/introduccion" 
          className="group flex items-center gap-2 px-4 py-2 border border-black/10 text-black/40 hover:text-black hover:border-black/20 transition-all text-[10px] uppercase tracking-[0.2em] font-bold"
        >
          <span>{t.lessons.start}</span>
          <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
