'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { QuickIndex } from '@/components/quick-index';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

export default function AtributosPage({ params }: { params: Promise<{ slug: string }> }) {
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
        <Link href={`/ensenanzas/${resolvedParams.slug}/nombres`} className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm md:text-base">{language === 'es' ? 'Volver a Nombres' : language === 'en' ? 'Back to Names' : 'Voltar aos Nomes'}</span>
        </Link>
      </div>

      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#f5f4f3]">
        <ProgressiveBlur position="top" backgroundColor="#f5f4f3" height="80px" />
        <ProgressiveBlur position="bottom" backgroundColor="#f5f4f3" height="80px" />

        <div className="flex h-full w-full flex-col items-center overflow-y-auto pt-8 md:pt-12 scroll-smooth">
          <div className="mt-6 md:mt-10 grid content-start justify-items-center gap-4 md:gap-6 text-center text-black">
            <span className="relative max-w-[15ch] text-[10px] md:text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-5 md:after:h-6 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
              IV. {t.lessons.divineAttributes.toUpperCase()}<br />{resolvedParams.slug.toUpperCase()}
            </span>
          </div>

          <div className="mt-6 md:mt-10 w-full max-w-3xl px-4 md:px-12 pb-40">
            {isCristologia ? (
              <CristologiaAtributos />
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

function CristologiaAtributos() {
  const { language } = useLanguage();
  const t = translations[language];

  const content = {
    es: {
      title: "IV. Los Atributos Divinos de Cristo",
      s1_title: "Omnipotencia",
      s1_p1: "Este atributo significa que posee todo poder absoluto, porque Él es verdaderamente Dios. Su autoridad es suprema sobre toda la creación. En el Evangelio de Mateo, Cristo mismo declaró su soberanía universal:",
      v1: "“Y Jesús se acercó y les habló diciendo: Toda potestad me es dada en el cielo y en la tierra.”",
      r1: "Mateo 28:18 (Reina-Valera 1960)",
      s1_p2: "Él demostró este poder divino durante su ministerio terrenal al tener autoridad para sanar enfermedades y, de manera aún más profunda, al tener la autoridad para perdonar pecados, lo cual es una prerrogativa exclusiva de Dios.",
      s2_title: "Omnipresencia",
      s2_p1: "Este atributo se refiere a la facultad divina de estar presente en todas partes al mismo tiempo. Aunque en su naturaleza humana Cristo ascendió al cielo, en su naturaleza divina Él es omnipresente. Él dio esta promesa a sus seguidores:",
      v2: "“Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.”",
      r2: "Mateo 18:20 (Reina-Valera 1960)",
      s2_p2_intro: "Y también afirmó antes de ascender:",
      v3: "“...y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.”",
      r3: "Mateo 28:20 (Reina-Valera 1960)",
      s3_title: "Omnisciencia",
      s3_p1: "La omnisciencia indica que Cristo, como Dios, posee un conocimiento perfecto e infinito de todas las cosas. Sus discípulos reconocieron claramente este atributo divino cuando le dijeron:",
      v4: "“Ahora entendemos que sabes todas las cosas, y no necesitas que nadie te pregunte; por esto creemos que has salido de Dios.”",
      r4: "Juan 16:30 (Reina-Valera 1960)",
      s3_p2: "Durante su ministerio, Jesús demostró que conocía plenamente lo oculto, incluyendo los pensamientos y las intenciones del corazón de las personas. Al poseer omnisciencia, Cristo demuestra una vez más su deidad absoluta."
    },
    en: {
      title: "IV. The Divine Attributes of Christ",
      s1_title: "Omnipotence",
      s1_p1: "This attribute means that He possesses all absolute power, because He is truly God. His authority is supreme over all creation. In the Gospel of Matthew, Christ Himself declared His universal sovereignty:",
      v1: "“And Jesus came and spoke to them, saying, ‘All authority has been given to Me in heaven and on earth.’”",
      r1: "Matthew 28:18 (NKJV)",
      s1_p2: "He demonstrated this divine power during His earthly ministry by having the authority to heal diseases and, even more profoundly, by having the authority to forgive sins, which is an exclusive prerogative of God.",
      s2_title: "Omnipresence",
      s2_p1: "This attribute refers to the divine faculty of being present everywhere at the same time. Although in His human nature Christ ascended to heaven, in His divine nature He is omnipresent. He gave this promise to His followers:",
      v2: "“For where two or three are gathered together in My name, I am there in the midst of them.”",
      r2: "Matthew 18:20 (NKJV)",
      s2_p2_intro: "And He also stated before ascending:",
      v3: "“...and lo, I am with you always, even to the end of the age. Amen.”",
      r3: "Matthew 28:20 (NKJV)",
      s3_title: "Omniscience",
      s3_p1: "Omniscience indicates that Christ, as God, possesses perfect and infinite knowledge of all things. His disciples clearly recognized this divine attribute when they said to Him:",
      v4: "“Now we are sure that You know all things, and have no need that anyone should question You. By this we believe that You came forth from God.”",
      r4: "John 16:30 (NKJV)",
      s3_p2: "During His ministry, Jesus demonstrated that He fully knew what was hidden, including the thoughts and intentions of people's hearts. By possessing omniscience, Christ once again demonstrates His absolute deity."
    },
    pt: {
      title: "IV. Os Atributos Divinos de Cristo",
      s1_title: "Onipotência",
      s1_p1: "Este atributo significa que Ele possui todo o poder absoluto, porque Ele é verdadeiramente Deus. Sua autoridade é suprema sobre toda a criação. No Evangelho de Mateus, o próprio Cristo declarou sua soberania universal:",
      v1: "“Jesus, aproximando-se, falou-lhes, dizendo: Toda a autoridade me foi concedida no céu e na terra.”",
      r1: "Mateus 28:18 (Almeida Revista e Atualizada)",
      s1_p2: "Ele demonstrou esse poder divino durante seu ministério terreno ao ter autoridade para curar doenças e, de maneira ainda mais profunda, ao ter a autoridade para perdoar pecados, o que é uma prerrogativa exclusiva de Deus.",
      s2_title: "Onipresença",
      s2_p1: "Este atributo refere-se à faculdade divina de estar presente em todos os lugares ao mesmo tempo. Embora em sua natureza humana Cristo tenha subido ao céu, em sua natureza divina Ele é onipresente. Ele fez esta promessa a seus seguidores:",
      v2: "“Porque, onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles.”",
      r2: "Mateus 18:20 (Almeida Revista e Atualizada)",
      s2_p2_intro: "E também afirmou antes de subir:",
      v3: "“...e eis que estou convosco todos os dias até à consumação do século. Amém!”",
      r3: "Mateus 28:20 (Almeida Revista e Atualizada)",
      s3_title: "Onisciência",
      s3_p1: "A onisciência indica que Cristo, como Deus, possui um conhecimento perfeito e infinito de todas as coisas. Seus discípulos reconheceram claramente esse atributo divino quando lhe disseram:",
      v4: "“Agora, vemos que sabes todas as coisas e não precisas de que alguém te interrogue; por isso, cremos que saíste de Deus.”",
      r4: "João 16:30 (Almeida Revista e Atualizada)",
      s3_p2: "Durante seu ministério, Jesus demonstrou que conhecia plenamente o que estava oculto, incluindo os pensamentos e as intenções do coração das pessoas. Ao possuir onisciência, Cristo demonstra mais uma vez sua divindade absoluta."
    }
  };

  const c = content[language];

  return (
    <article className="space-y-12 md:space-y-16 pb-20">
      <h1 className="text-3xl md:text-[60px] font-bold text-center mb-6 md:mb-12 text-black tracking-tighter leading-none uppercase">
        {c.title}
      </h1>

      <div className="space-y-10 text-black/80 text-sm md:text-base leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black text-right underline underline-offset-4">{c.s1_title}</h2>
          <p>{c.s1_p1}</p>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v1}</p>
              <p className="text-xs opacity-60">{c.r1}</p>
            </div>
          </div>
          <p>{c.s1_p2}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black text-right underline underline-offset-4">{c.s2_title}</h2>
          <p>{c.s2_p1}</p>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v2}</p>
              <p className="text-xs opacity-60">{c.r2}</p>
            </div>
          </div>
          <div className="space-y-4">
            <p>{c.s2_p2_intro}</p>
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v3}</p>
              <p className="text-xs opacity-60">{c.r3}</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black text-right underline underline-offset-4">{c.s3_title}</h2>
          <p>{c.s3_p1}</p>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v4}</p>
              <p className="text-xs opacity-60">{c.r4}</p>
            </div>
          </div>
          <p>{c.s3_p2}</p>
        </section>
      </div>

      {/* Next Button */}
      <div className="pt-16 flex justify-end">
        <Link 
          href="/ensenanzas/cristologia/propiedades" 
          className="group flex items-center gap-2 px-4 py-2 border border-black/10 text-black/40 hover:text-black hover:border-black/20 transition-all text-[10px] uppercase tracking-[0.2em] font-bold"
        >
          <span>{t.lessons.nextTopic}</span>
          <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
