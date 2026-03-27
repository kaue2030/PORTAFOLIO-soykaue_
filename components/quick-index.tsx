'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { List, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

export function QuickIndex({ currentSlug }: { currentSlug: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const t = translations[language];

  const sections = [
    { title: t.lessons.introduction, href: 'introduccion' },
    { title: `I. ${t.lessons.deityOfChrist}`, href: 'deidad' },
    { title: `II. ${t.lessons.incarnationOfChrist}`, href: 'encarnacion' },
    { title: `III. ${t.lessons.divineNames}`, href: 'nombres' },
    { title: `IV. ${t.lessons.divineAttributes}`, href: 'atributos' },
    { title: `V. ${t.lessons.divineProperties}`, href: 'propiedades' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 bg-white/90 backdrop-blur-md border border-black/10 rounded-2xl shadow-2xl overflow-hidden w-[280px] md:w-[320px]"
          >
            <div className="p-4 border-b border-black/5 flex justify-between items-center bg-black/5">
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">
                {t.lessons.quickIndex}
              </span>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-black/5 rounded-full transition-colors">
                <X size={14} />
              </button>
            </div>
            <nav className="p-2 max-h-[60vh] overflow-y-auto">
              {sections.map((section) => (
                <Link
                  key={section.href}
                  href={`/ensenanzas/${currentSlug}/${section.href}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm hover:bg-black/5 rounded-xl transition-colors font-medium text-black/70 hover:text-black"
                >
                  {section.title}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-black/5">
                <Link
                  href={`/ensenanzas/${currentSlug}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm hover:bg-black/5 rounded-xl transition-colors font-bold text-blue-600"
                >
                  {t.lessons.backToIndex}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all group"
      >
        <List size={18} className="group-hover:rotate-12 transition-transform" />
        <span className="text-xs uppercase tracking-[0.2em] font-bold">
          {t.lessons.exploreTopics}
        </span>
      </button>
    </div>
  );
}
