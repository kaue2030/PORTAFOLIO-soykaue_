'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

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
              {t.lessons.biblicalTeaching}<br />{resolvedParams.slug === 'cristologia' ? (language === 'es' ? 'CRISTOLOGÍA' : language === 'en' ? 'CHRISTOLOGY' : 'CRISTOLOGIA') : resolvedParams.slug.toUpperCase()}
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
  const { language } = useLanguage();
  const t = translations[language];

  const content = {
    es: {
      description: "La Cristología es el estudio bíblico de quién es Jesucristo. Enseña que Jesús es verdadero Dios (Juan 1:1) y verdadero hombre (Hebreos 2:17): nació de una virgen (Mateo 1:23), vivió sin pecado (Hebreos 4:15), murió en la cruz por nuestros pecados (1 Corintios 15:3), resucitó al tercer día (1 Corintios 15:4) y ahora gobierna como Señor (Filipenses 2:9-11). Él es el centro de la fe cristiana, el Salvador del mundo y el único mediador entre Dios y los hombres (1 Timoteo 2:5).",
      deity: ["La realidad de las dos naturalezas", "La integridad de las dos naturalezas", "La unión de las dos naturalezas en una sola persona", "Importancia de esta doctrina para la Iglesia."],
      incarnation: ["Antes de la encarnación", "Después de la encarnación", "Cristo es Dios y Hombre al 100%", "La doble naturaleza de Cristo"],
      names: ["Se le llama Dios", "Se le llama Señor", "Se le llama el Primero y el Último", "Cristo, el Ungido de Jehová"],
      attributes: ["Omnipotencia", "Omnipresencia", "Omnisciencia"],
      properties: ["Su propia existencia", "Su inmutabilidad", "Su infinitud", "a. Su absoluta perfección", "b. Su eternidad"]
    },
    en: {
      description: "Christology is the biblical study of who Jesus Christ is. It teaches that Jesus is true God (John 1:1) and true man (Hebrews 2:17): born of a virgin (Matthew 1:23), lived without sin (Hebreos 4:15), died on the cross for our sins (1 Corinthians 15:3), rose on the third day (1 Corinthians 15:4), and now reigns as Lord (Philippians 2:9-11). He is the center of the Christian faith, the Savior of the world, and the only mediator between God and men (1 Timothy 2:5).",
      deity: ["The reality of the two natures", "The integrity of the two natures", "The union of the two natures in one person", "Importance of this doctrine for the Church."],
      incarnation: ["Before the incarnation", "After the incarnation", "Christ is 100% God and 100% Man", "The dual nature of Christ"],
      names: ["He is called God", "He is called Lord", "He is called the First and the Last", "Christ, the Anointed of Jehovah"],
      attributes: ["Omnipotence", "Omnipresence", "Omniscience"],
      properties: ["His own existence", "His immutability", "His infinity", "a. His absolute perfection", "b. His eternity"]
    },
    pt: {
      description: "A Cristologia é o estudo bíblico de quem é Jesus Cristo. Ensina que Jesus é verdadeiro Deus (João 1:1) e verdadeiro homem (Hebreus 2:17): nasceu de uma virgem (Mateus 1:23), viveu sem pecado (Hebreus 4:15), morreu na cruz pelos nossos pecados (1 Coríntios 15:3), ressuscitou ao terceiro dia (1 Coríntios 15:4) e agora governa como Senhor (Filipenses 2:9-11). Ele é o centro da fé cristã, o Salvador do mundo e o único mediador entre Deus e os homens (1 Timóteo 2:5).",
      deity: ["A realidade das duas naturezas", "A integridade das duas naturezas", "A união das duas naturezas em uma só pessoa", "Importância desta doutrina para a Igreja."],
      incarnation: ["Antes da encarnação", "Depois da encarnação", "Cristo é 100% Deus e 100% Homem", "A dupla natureza de Cristo"],
      names: ["Ele é chamado de Deus", "Ele é chamado de Senhor", "Ele é chamado de o Primeiro e o Último", "Cristo, o Ungido de Jeová"],
      attributes: ["Onipotência", "Onipresença", "Onisciência"],
      properties: ["Sua própria existência", "Sua imutabilidade", "Sua infinitude", "a. Sua absoluta perfeição", "b. Sua eternidade"]
    }
  };

  const c = content[language];

  return (
    <article className="space-y-8 md:space-y-12 pb-20">
      <div className="text-center space-y-2">
        <h1 className="text-xl md:text-2xl font-bold text-black tracking-widest uppercase">
          {t.lessons.biblicalTeaching}
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tighter uppercase">
          {language === 'es' ? 'Cristología' : language === 'en' ? 'Christology' : 'Cristologia'}
        </h2>
      </div>

      <div className="max-w-xl mx-auto space-y-8 text-black">
        <p className="text-sm md:text-base leading-relaxed text-black/70 italic border-l-2 border-black/10 pl-6 py-2 text-justify">
          {c.description}
        </p>

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
            {c.deity.map((item, i) => (
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
            {c.incarnation.map((item, i) => (
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
            {c.names.map((item, i) => (
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
            {c.attributes.map((item, i) => (
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
