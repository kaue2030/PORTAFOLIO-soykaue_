'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { QuickIndex } from '@/components/quick-index';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';
import { cristologiaContent } from '@/hooks/lessons-content';

export default function DeidadPage({ params }: { params: Promise<{ slug: string }> }) {
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
        <Link href={`/ensenanzas/${resolvedParams.slug}/introduccion`} className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm md:text-base">{t.lessons.backTo} {t.lessons.introduction}</span>
        </Link>
      </div>

      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#f5f4f3]">
        <ProgressiveBlur position="top" backgroundColor="#f5f4f3" height="80px" />
        <ProgressiveBlur position="bottom" backgroundColor="#f5f4f3" height="80px" />

        <div className="flex h-full w-full flex-col items-center overflow-y-auto pt-8 md:pt-12 scroll-smooth">
          <div className="mt-6 md:mt-10 grid content-start justify-items-center gap-4 md:gap-6 text-center text-black">
            <span className="relative max-w-[15ch] text-[10px] md:text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-5 md:after:h-6 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
              I. {t.lessons.deityOfChrist.toUpperCase()}<br />{resolvedParams.slug.toUpperCase()}
            </span>
          </div>

          <div className="mt-6 md:mt-10 w-full max-w-3xl px-4 md:px-12 pb-40">
            {isCristologia ? (
              <CristologiaDeidad />
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

function CristologiaDeidad() {
  const { language, isEditorMode } = useLanguage();
  const t = translations[language];
  const adminT = translations[language].admin;
  const c = cristologiaContent[language].deidad;

  const [editContent, setEditContent] = useState(c);

  const handleSave = () => {
    console.log('Saving changes:', editContent);
    alert(adminT.save);
  };

  const current = isEditorMode ? editContent : c;

  return (
    <article className="space-y-12 md:space-y-16 pb-20">
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
      <h1 className="text-3xl md:text-[60px] font-bold text-center mb-6 md:mb-12 text-black tracking-tighter leading-none uppercase">
        I. {t.lessons.deityOfChrist}
      </h1>

      <div className="space-y-10 text-black/80 text-sm md:text-base leading-relaxed">
        <section className="space-y-4">
          {isEditorMode ? (
            <input
              value={editContent.s1_title}
              onChange={(e) => setEditContent({...editContent, s1_title: e.target.value})}
              className="text-xl md:text-2xl font-bold text-black bg-white border border-black/10 rounded w-full p-2"
            />
          ) : (
            <h2 className="text-xl md:text-2xl font-bold text-black">{current.s1_title}</h2>
          )}

          {isEditorMode ? (
            <textarea
              value={typeof editContent.s1_p1 === 'string' ? editContent.s1_p1 : 'Complex content'}
              onChange={(e) => setEditContent({...editContent, s1_p1: e.target.value})}
              className="w-full h-24 p-4 bg-white border border-black/10 rounded-xl"
            />
          ) : (
            <div className="text-justify">{current.s1_p1}</div>
          )}

          <div className="space-y-4">
            {isEditorMode ? (
              <input value={editContent.s1_divine_intro} onChange={(e) => setEditContent({...editContent, s1_divine_intro: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded" />
            ) : (
              <p>{current.s1_divine_intro}</p>
            )}
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              {isEditorMode ? (
                <input value={editContent.v1} onChange={(e) => setEditContent({...editContent, v1: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
              ) : (
                <p className="font-bold text-lg">{current.v1}</p>
              )}
              <a href={current.l1} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                {current.r1}
              </a>
            </div>
          </div>

          {current.s1_human_intro && (
            <div className="space-y-4">
              {isEditorMode ? (
                <input value={editContent.s1_human_intro} onChange={(e) => setEditContent({...editContent, s1_human_intro: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded" />
              ) : (
                <p>{current.s1_human_intro}</p>
              )}
              <div className="pl-4 border-l-2 border-black/10 space-y-2">
                {isEditorMode ? (
                  <input value={editContent.s1_human_verse} onChange={(e) => setEditContent({...editContent, s1_human_verse: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
                ) : (
                  <p className="font-bold text-lg">{current.s1_human_verse}</p>
                )}
                <a href={current.s1_human_link} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                  {current.s1_human_ref}
                </a>
              </div>
            </div>
          )}
          {current.s1_p2 && (
            isEditorMode ? (
              <textarea value={editContent.s1_p2} onChange={(e) => setEditContent({...editContent, s1_p2: e.target.value})} className="w-full h-20 p-4 bg-white border border-black/10 rounded-xl" />
            ) : (
              <p>{current.s1_p2}</p>
            )
          )}
        </section>

        <section className="space-y-4">
          {isEditorMode ? (
            <input value={editContent.s2_title} onChange={(e) => setEditContent({...editContent, s2_title: e.target.value})} className="text-xl md:text-2xl font-bold text-black bg-white border border-black/10 rounded w-full p-2" />
          ) : (
            <h2 className="text-xl md:text-2xl font-bold text-black">{current.s2_title}</h2>
          )}

          {isEditorMode ? (
            <textarea value={typeof editContent.s2_p1 === 'string' ? editContent.s2_p1 : 'Complex content'} onChange={(e) => setEditContent({...editContent, s2_p1: e.target.value})} className="w-full h-24 p-4 bg-white border border-black/10 rounded-xl" />
          ) : (
            <div className="text-justify">{current.s2_p1}</div>
          )}

          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              {isEditorMode ? (
                <input value={editContent.v2} onChange={(e) => setEditContent({...editContent, v2: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
              ) : (
                <p className="font-bold text-lg">{current.v2}</p>
              )}
              <a href={current.l2} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                {current.r2}
              </a>
            </div>
          </div>
          {current.s2_verse2 && (
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-black/10 space-y-2">
                {isEditorMode ? (
                  <input value={editContent.s2_verse2} onChange={(e) => setEditContent({...editContent, s2_verse2: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
                ) : (
                  <p className="font-bold text-lg">{current.s2_verse2}</p>
                )}
                <a href={current.s2_link2} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                  {current.s2_ref2}
                </a>
              </div>
            </div>
          )}
          {current.s2_p2 && (
            isEditorMode ? (
              <textarea value={editContent.s2_p2} onChange={(e) => setEditContent({...editContent, s2_p2: e.target.value})} className="w-full h-20 p-4 bg-white border border-black/10 rounded-xl" />
            ) : (
              <p>{current.s2_p2}</p>
            )
          )}
        </section>

        <section className="space-y-4">
          {isEditorMode ? (
            <input value={editContent.s3_title} onChange={(e) => setEditContent({...editContent, s3_title: e.target.value})} className="text-xl md:text-2xl font-bold text-black bg-white border border-black/10 rounded w-full p-2" />
          ) : (
            <h2 className="text-xl md:text-2xl font-bold text-black">{current.s3_title}</h2>
          )}

          {isEditorMode ? (
            <textarea value={typeof editContent.s3_p1 === 'string' ? editContent.s3_p1 : 'Complex content'} onChange={(e) => setEditContent({...editContent, s3_p1: e.target.value})} className="w-full h-24 p-4 bg-white border border-black/10 rounded-xl" />
          ) : (
            <div className="text-justify">{current.s3_p1}</div>
          )}

          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              {isEditorMode ? (
                <input value={editContent.v3} onChange={(e) => setEditContent({...editContent, v3: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
              ) : (
                <p className="font-bold text-lg">{current.v3}</p>
              )}
              <a href={current.l3} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                {current.r3}
              </a>
            </div>
          </div>
          {current.s3_verse2 && (
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-black/10 space-y-2">
                {isEditorMode ? (
                  <input value={editContent.s3_verse2} onChange={(e) => setEditContent({...editContent, s3_verse2: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
                ) : (
                  <p className="font-bold text-lg">{current.s3_verse2}</p>
                )}
                <a href={current.s3_link2} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                  {current.s3_ref2}
                </a>
              </div>
            </div>
          )}
          {isEditorMode ? (
            <textarea value={typeof editContent.s3_p2 === 'string' ? editContent.s3_p2 : 'Complex content'} onChange={(e) => setEditContent({...editContent, s3_p2: e.target.value})} className="w-full h-24 p-4 bg-white border border-black/10 rounded-xl" />
          ) : (
            <div className="text-justify">{current.s3_p2}</div>
          )}
        </section>

        {current.s4_title && (
          <section className="space-y-4 pt-6 border-t border-black/5">
            {isEditorMode ? (
              <input value={editContent.s4_title} onChange={(e) => setEditContent({...editContent, s4_title: e.target.value})} className="text-xl md:text-2xl font-bold text-black italic bg-white border border-black/10 rounded w-full p-2" />
            ) : (
              <h2 className="text-xl md:text-2xl font-bold text-black italic">{current.s4_title}</h2>
            )}

            {isEditorMode ? (
              <textarea value={typeof editContent.s4_p1 === 'string' ? editContent.s4_p1 : 'Complex content'} onChange={(e) => setEditContent({...editContent, s4_p1: e.target.value})} className="w-full h-24 p-4 bg-white border border-black/10 rounded-xl" />
            ) : (
              <div className="text-justify">{current.s4_p1}</div>
            )}

            {current.imp_verse1 && (
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-black/10 space-y-2">
                  {isEditorMode ? (
                    <input value={editContent.imp_verse1} onChange={(e) => setEditContent({...editContent, imp_verse1: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
                  ) : (
                    <p className="font-bold text-lg">{current.imp_verse1}</p>
                  )}
                  <a href={current.imp_link1} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                    {current.imp_ref1}
                  </a>
                </div>
              </div>
            )}
            {current.imp_p2 && (
              isEditorMode ? (
                <textarea value={editContent.imp_p2} onChange={(e) => setEditContent({...editContent, imp_p2: e.target.value})} className="w-full h-20 p-4 bg-white border border-black/10 rounded-xl" />
              ) : (
                <p>{current.imp_p2}</p>
              )
            )}
            {current.imp_verse2 && (
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-black/10 space-y-2">
                  {isEditorMode ? (
                    <input value={editContent.imp_verse2} onChange={(e) => setEditContent({...editContent, imp_verse2: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
                  ) : (
                    <p className="font-bold text-lg">{current.imp_verse2}</p>
                  )}
                  <a href={current.imp_link2} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                    {current.imp_ref2}
                  </a>
                </div>
              </div>
            )}
          </section>
        )}
      </div>

      {/* Next Button */}
      <div className="pt-16 flex justify-end">
        <Link 
          href="/ensenanzas/cristologia/encarnacion" 
          className="group flex items-center gap-2 px-4 py-2 border border-black/10 text-black/40 hover:text-black hover:border-black/20 transition-all text-[10px] uppercase tracking-[0.2em] font-bold"
        >
          <span>{t.lessons.nextTopic}</span>
          <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
