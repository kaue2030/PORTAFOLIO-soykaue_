'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { QuickIndex } from '@/components/quick-index';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';
import { cristologiaContent } from '@/hooks/lessons-content';

export default function IntroduccionPage({ params }: { params: Promise<{ slug: string }> }) {
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
        <Link href={`/ensenanzas/${resolvedParams.slug}`} className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm md:text-base">{t.lessons.backToIndex}</span>
        </Link>
      </div>

      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#f5f4f3]">
        <ProgressiveBlur position="top" backgroundColor="#f5f4f3" height="80px" />
        <ProgressiveBlur position="bottom" backgroundColor="#f5f4f3" height="80px" />

        <div className="flex h-full w-full flex-col items-center overflow-y-auto pt-8 md:pt-12 scroll-smooth">
          <div className="mt-6 md:mt-10 grid content-start justify-items-center gap-4 md:gap-6 text-center text-black">
            <span className="relative max-w-[15ch] text-[10px] md:text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-5 md:after:h-6 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
              {t.lessons.introduction.toUpperCase()}<br />{resolvedParams.slug.toUpperCase()}
            </span>
          </div>

          <div className="mt-6 md:mt-10 w-full max-w-3xl px-4 md:px-12 pb-40">
            {isCristologia ? (
              <CristologiaIntroduccion />
            ) : (
              <div className="text-center text-gray-500 mt-20">Content not found.</div>
            )}
          </div>
        </div>
      </div>
      <QuickIndex currentSlug={resolvedParams.slug} />
    </main>
  );
}

function CristologiaIntroduccion() {
  const { language, isEditorMode } = useLanguage();
  const t = translations[language];
  const adminT = translations[language].admin;
  const c = cristologiaContent[language].introduccion;

  const [editContent, setEditContent] = useState(c);

  const handleSave = () => {
    // In a real app, this would save to a DB.
    // Here we just update local state for the session.
    console.log('Saving changes:', editContent);
    alert(adminT.save);
  };

  const current = isEditorMode ? editContent : c;

  return (
    <article className="space-y-6 md:space-y-8 pb-20">
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
      <h1 className="text-3xl md:text-[80px] font-bold text-center mb-6 md:mb-12 text-black tracking-tighter leading-none uppercase">
        {t.lessons.introduction}
      </h1>

      <div className="space-y-6 text-black/80 text-sm md:text-base leading-relaxed">
        {isEditorMode ? (
          <textarea
            value={typeof editContent.p1 === 'string' ? editContent.p1 : 'Complex content - HTML editing required'}
            onChange={(e) => setEditContent({...editContent, p1: e.target.value})}
            className="w-full h-32 p-4 bg-white border border-black/10 rounded-xl"
          />
        ) : (
          <div className="text-justify">{current.p1}</div>
        )}

        {isEditorMode ? (
          <textarea
            value={editContent.p2}
            onChange={(e) => setEditContent({...editContent, p2: e.target.value})}
            className="w-full h-24 p-4 bg-white border border-black/10 rounded-xl"
          />
        ) : (
          <p>{current.p2}</p>
        )}

        <div className="space-y-2">
          <div className="pl-4 border-l-2 border-black/10">
            {isEditorMode ? (
              <input
                value={editContent.verse1}
                onChange={(e) => setEditContent({...editContent, verse1: e.target.value})}
                className="w-full p-2 bg-white border border-black/10 rounded font-bold"
              />
            ) : (
              <p className="font-bold">{current.verse1}</p>
            )}
            <a
              href={current.link1}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs mt-1 opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit"
            >
              {current.ref1}
            </a>
          </div>
        </div>

        {isEditorMode ? (
          <textarea
            value={editContent.p3}
            onChange={(e) => setEditContent({...editContent, p3: e.target.value})}
            className="w-full h-24 p-4 bg-white border border-black/10 rounded-xl"
          />
        ) : (
          <p>{current.p3}</p>
        )}

        {isEditorMode ? (
          <textarea
            value={typeof editContent.p4 === 'string' ? editContent.p4 : 'Complex content - HTML editing required'}
            onChange={(e) => setEditContent({...editContent, p4: e.target.value})}
            className="w-full h-32 p-4 bg-white border border-black/10 rounded-xl"
          />
        ) : (
          <div className="text-justify">{current.p4}</div>
        )}

        <div className="space-y-2">
          <div className="pl-4 border-l-2 border-black/10">
            {isEditorMode ? (
              <input
                value={editContent.verse2}
                onChange={(e) => setEditContent({...editContent, verse2: e.target.value})}
                className="w-full p-2 bg-white border border-black/10 rounded font-bold"
              />
            ) : (
              <p className="font-bold">{current.verse2}</p>
            )}
            <a
              href={current.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs mt-1 opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit"
            >
              {current.ref2}
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <div className="pl-4 border-l-2 border-black/10">
            {isEditorMode ? (
              <input
                value={editContent.verse3}
                onChange={(e) => setEditContent({...editContent, verse3: e.target.value})}
                className="w-full p-2 bg-white border border-black/10 rounded font-bold"
              />
            ) : (
              <p className="font-bold">{current.verse3}</p>
            )}
            <a
              href={current.link3}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs mt-1 opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit"
            >
              {current.ref3}
            </a>
          </div>
        </div>

        {isEditorMode ? (
          <textarea
            value={editContent.p5}
            onChange={(e) => setEditContent({...editContent, p5: e.target.value})}
            className="w-full h-24 p-4 bg-white border border-black/10 rounded-xl"
          />
        ) : (
          <p>{current.p5}</p>
        )}

        <ol className="list-decimal ml-6 space-y-2 font-medium">
          {current.list.map((item: string, i: number) => (
            <li key={i}><span className="bg-yellow-200/80 px-1 rounded-sm">{item}</span></li>
          ))}
        </ol>
      </div>

      {/* Next Button */}
      <div className="pt-16 flex justify-end">
        <Link 
          href="/ensenanzas/cristologia/deidad" 
          className="group flex items-center gap-2 px-4 py-2 border border-black/10 text-black/40 hover:text-black hover:border-black/20 transition-all text-[10px] uppercase tracking-[0.2em] font-bold"
        >
          <span>{t.lessons.nextTopic}</span>
          <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
