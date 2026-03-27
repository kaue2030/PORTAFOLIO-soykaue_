'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { QuickIndex } from '@/components/quick-index';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';
import { cristologiaContent } from '@/hooks/lessons-content';

export default function PropiedadesPage({ params }: { params: Promise<{ slug: string }> }) {
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
        <Link href={`/ensenanzas/${resolvedParams.slug}/atributos`} className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm md:text-base">{t.lessons.backTo} {t.lessons.divineAttributes}</span>
        </Link>
      </div>

      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#f5f4f3]">
        <ProgressiveBlur position="top" backgroundColor="#f5f4f3" height="80px" />
        <ProgressiveBlur position="bottom" backgroundColor="#f5f4f3" height="80px" />

        <div className="flex h-full w-full flex-col items-center overflow-y-auto pt-8 md:pt-12 scroll-smooth">
          <div className="mt-6 md:mt-10 grid content-start justify-items-center gap-4 md:gap-6 text-center text-black">
            <span className="relative max-w-[15ch] text-[10px] md:text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-5 md:after:h-6 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
              V. {t.lessons.divineProperties.toUpperCase()}<br />{resolvedParams.slug.toUpperCase()}
            </span>
          </div>

          <div className="mt-6 md:mt-10 w-full max-w-3xl px-4 md:px-12 pb-40">
            {isCristologia ? (
              <CristologiaPropiedades />
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

function CristologiaPropiedades() {
  const { language, isEditorMode } = useLanguage();
  const t = translations[language];
  const adminT = translations[language].admin;
  const c = cristologiaContent[language].propiedades;

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
        {c.title}
      </h1>

      <div className="space-y-10 text-black/80 text-sm md:text-base leading-relaxed">
        <section className="space-y-4">
          {isEditorMode ? (
            <input value={editContent.s1_title} onChange={(e) => setEditContent({...editContent, s1_title: e.target.value})} className="text-xl md:text-2xl font-bold text-black bg-white border border-black/10 rounded w-full p-2 text-right underline underline-offset-4" />
          ) : (
            <h2 className="text-xl md:text-2xl font-bold text-black text-right underline underline-offset-4">{current.s1_title}</h2>
          )}

          {isEditorMode ? (
            <textarea value={typeof editContent.s1_p1 === 'string' ? editContent.s1_p1 : 'Complex content'} onChange={(e) => setEditContent({...editContent, s1_p1: e.target.value})} className="w-full h-24 p-4 bg-white border border-black/10 rounded-xl" />
          ) : (
            <div className="text-justify">{current.s1_p1}</div>
          )}

          {current.v1 && (
            <div className="space-y-4">
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
          )}
          {current.v2 && (
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
          )}
          {current.v3 && (
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
            <input value={editContent.s2_title} onChange={(e) => setEditContent({...editContent, s2_title: e.target.value})} className="text-xl md:text-2xl font-bold text-black bg-white border border-black/10 rounded w-full p-2 text-right underline underline-offset-4" />
          ) : (
            <h2 className="text-xl md:text-2xl font-bold text-black text-right underline underline-offset-4">{current.s2_title}</h2>
          )}

          {isEditorMode ? (
            <textarea value={typeof editContent.s2_p1 === 'string' ? editContent.s2_p1 : 'Complex content'} onChange={(e) => setEditContent({...editContent, s2_p1: e.target.value})} className="w-full h-24 p-4 bg-white border border-black/10 rounded-xl" />
          ) : (
            <div className="text-justify">{current.s2_p1}</div>
          )}

          {current.v4 && (
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-black/10 space-y-2">
                {isEditorMode ? (
                  <input value={editContent.v4} onChange={(e) => setEditContent({...editContent, v4: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
                ) : (
                  <p className="font-bold text-lg">{current.v4}</p>
                )}
                <a href={current.l4} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                  {current.r4}
                </a>
              </div>
            </div>
          )}
          {current.v5 && (
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-black/10 space-y-2">
                {isEditorMode ? (
                  <input value={editContent.v5} onChange={(e) => setEditContent({...editContent, v5: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
                ) : (
                  <p className="font-bold text-lg">{current.v5}</p>
                )}
                <a href={current.l5} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                  {current.r5}
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

        <section className="space-y-8">
          <div className="space-y-4">
            {isEditorMode ? (
              <input value={editContent.s3_title} onChange={(e) => setEditContent({...editContent, s3_title: e.target.value})} className="text-xl md:text-2xl font-bold text-black bg-white border border-black/10 rounded w-full p-2 text-right underline underline-offset-4" />
            ) : (
              <h2 className="text-xl md:text-2xl font-bold text-black text-right underline underline-offset-4">{current.s3_title}</h2>
            )}

            {isEditorMode ? (
              <textarea value={typeof editContent.s3_p1 === 'string' ? editContent.s3_p1 : 'Complex content'} onChange={(e) => setEditContent({...editContent, s3_p1: e.target.value})} className="w-full h-24 p-4 bg-white border border-black/10 rounded-xl" />
            ) : (
              <div className="text-justify">{current.s3_p1}</div>
            )}

            {current.v6 && (
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-black/10 space-y-2">
                  {isEditorMode ? (
                    <input value={editContent.v6} onChange={(e) => setEditContent({...editContent, v6: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
                  ) : (
                    <p className="font-bold text-lg">{current.v6}</p>
                  )}
                  <a href={current.l6} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                    {current.r6}
                  </a>
                </div>
              </div>
            )}
            {isEditorMode ? (
              <textarea value={editContent.s3_p2} onChange={(e) => setEditContent({...editContent, s3_p2: e.target.value})} className="w-full h-20 p-4 bg-white border border-black/10 rounded-xl" />
            ) : (
              <p>{current.s3_p2}</p>
            )}
          </div>

          <div className="space-y-4 pl-4 md:pl-8">
            {isEditorMode ? (
              <input value={editContent.sa_title} onChange={(e) => setEditContent({...editContent, sa_title: e.target.value})} className="text-lg md:text-xl font-bold text-black bg-white border border-black/10 rounded w-full p-2 text-right" />
            ) : (
              <h3 className="text-lg md:text-xl font-bold text-black text-right">{current.sa_title}</h3>
            )}

            {isEditorMode ? (
              <textarea value={editContent.sa_p1} onChange={(e) => setEditContent({...editContent, sa_p1: e.target.value})} className="w-full h-20 p-4 bg-white border border-black/10 rounded-xl" />
            ) : (
              <p>{current.sa_p1}</p>
            )}

            {current.v7 && (
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-black/10 space-y-2">
                  {isEditorMode ? (
                    <input value={editContent.v7} onChange={(e) => setEditContent({...editContent, v7: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
                  ) : (
                    <p className="font-bold text-lg">{current.v7}</p>
                  )}
                  <a href={current.l7} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                    {current.r7}
                  </a>
                </div>
              </div>
            )}
            {current.v8 && (
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-black/10 space-y-2">
                  {isEditorMode ? (
                    <input value={editContent.v8} onChange={(e) => setEditContent({...editContent, v8: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
                  ) : (
                    <p className="font-bold text-lg">{current.v8}</p>
                  )}
                  <a href={current.l8} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                    {current.r8}
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4 pl-4 md:pl-8">
            {isEditorMode ? (
              <input value={editContent.sb_title} onChange={(e) => setEditContent({...editContent, sb_title: e.target.value})} className="text-lg md:text-xl font-bold text-black bg-white border border-black/10 rounded w-full p-2 text-right" />
            ) : (
              <h3 className="text-lg md:text-xl font-bold text-black text-right">{current.sb_title}</h3>
            )}

            {isEditorMode ? (
              <textarea value={editContent.sb_p1} onChange={(e) => setEditContent({...editContent, sb_p1: e.target.value})} className="w-full h-20 p-4 bg-white border border-black/10 rounded-xl" />
            ) : (
              <p>{current.sb_p1}</p>
            )}

            {current.v9 && (
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-black/10 space-y-2">
                  {isEditorMode ? (
                    <input value={editContent.v9} onChange={(e) => setEditContent({...editContent, v9: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
                  ) : (
                    <p className="font-bold text-lg">{current.v9}</p>
                  )}
                  <a href={current.l9} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                    {current.r9}
                  </a>
                </div>
              </div>
            )}
            {current.v10 && (
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-black/10 space-y-2">
                  {isEditorMode ? (
                    <input value={editContent.v10} onChange={(e) => setEditContent({...editContent, v10: e.target.value})} className="w-full p-2 bg-white border border-black/10 rounded font-bold" />
                  ) : (
                    <p className="font-bold text-lg">{current.v10}</p>
                  )}
                  <a href={current.l10} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                    {current.r10}
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {isEditorMode ? (
          <textarea value={editContent.footer} onChange={(e) => setEditContent({...editContent, footer: e.target.value})} className="w-full h-20 p-4 bg-white border border-black/10 rounded-xl italic text-center" />
        ) : (
          <p className="pt-6 border-t border-black/5 font-medium italic text-center">
            {current.footer}
          </p>
        )}
      </div>

    </article>
  );
}
