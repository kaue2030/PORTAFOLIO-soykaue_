'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { QuickIndex } from '@/components/quick-index';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

export default function EncarnacionPage({ params }: { params: Promise<{ slug: string }> }) {
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
        <Link href={`/ensenanzas/${resolvedParams.slug}/deidad`} className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm md:text-base">{language === 'es' ? 'Volver a Deidad' : language === 'en' ? 'Back to Deity' : 'Voltar à Divindade'}</span>
        </Link>
      </div>

      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#f5f4f3]">
        <ProgressiveBlur position="top" backgroundColor="#f5f4f3" height="80px" />
        <ProgressiveBlur position="bottom" backgroundColor="#f5f4f3" height="80px" />

        <div className="flex h-full w-full flex-col items-center overflow-y-auto pt-8 md:pt-12 scroll-smooth">
          <div className="mt-6 md:mt-10 grid content-start justify-items-center gap-4 md:gap-6 text-center text-black">
            <span className="relative max-w-[15ch] text-[10px] md:text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-5 md:after:h-6 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
              II. {t.lessons.incarnationOfChrist.toUpperCase()}<br />{resolvedParams.slug.toUpperCase()}
            </span>
          </div>

          <div className="mt-6 md:mt-10 w-full max-w-3xl px-4 md:px-12 pb-40">
            {isCristologia ? (
              <CristologiaEncarnacion />
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

function CristologiaEncarnacion() {
  const { language } = useLanguage();
  const t = translations[language];

  const content = {
    es: {
      intro_title: "Introducción",
      intro_p1: "Antes de nacer como hombre, es decir, antes de la encarnación, Jesús, el Verbo o Hijo de Dios, no tenía cuerpo humano. Existía eternamente como Dios, pero aún no había asumido la naturaleza humana en carne y hueso.",
      intro_p2: "Por esa razón, antes de la encarnación, no participaba de la experiencia humana en la forma en que nosotros la vivimos corporalmente. Sin embargo, cuando el Verbo se hizo carne, al nacer Jesucristo como hombre, asumió plenamente la naturaleza humana y pudo experimentar lo que corresponde a la vida humana, como el dolor, el cansancio, el hambre, la tristeza y la alegría.",
      v1: "“Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.”",
      r1: "Juan 1:14 (Reina-Valera 1960)",
      before_title: "Antes de la encarnación",
      before_p1: "Antes de la encarnación, Cristo existía como Dios eterno, pero sin cuerpo humano. Él era el Verbo divino, eterno, santo y glorioso, y no había tomado aún la naturaleza humana.",
      v2: "“En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.”",
      r2: "Juan 1:1 (Reina-Valera 1960)",
      after_title: "Después de la encarnación",
      after_p1: "Después de la encarnación, Jesús tomó nuestra naturaleza humana completa, con cuerpo, mente y emociones. De esta manera, Él pudo vivir en carne propia la experiencia humana, sin dejar de ser Dios.",
      after_p2: "La encarnación significa que el Hijo de Dios asumió una verdadera humanidad. No fue una apariencia, sino una realidad plena. Cristo vivió como hombre verdadero entre los hombres.",
      v3: "“Por lo cual debía ser en todo semejante a sus hermanos, para venir a ser misericordioso y fiel sumo sacerdote en lo que a Dios se refiere, para expiar los pecados del pueblo.”",
      r3: "Hebreos 2:17 (Reina-Valera 1960)",
      after_p3: "Por eso, Jesucristo pudo comprender perfectamente lo que sentimos, pues Él mismo vivió en carne propia la realidad humana. Conoció el dolor, la fatiga, el hambre, la tristeza y también el amor y la compasión.",
      v4: "“Porque no tenemos un sumo sacerdote que no pueda compadecerse de nuestras debilidades, sino uno que fue tentado en todo según nuestra semejanza, pero sin pecado.”",
      r4: "Hebreos 4:15 (Reina-Valera 1960)",
      full_title: "Cristo es Dios y Hombre al 100%",
      full_p1: "Jesús tiene dos naturalezas completas y verdaderas al mismo tiempo:",
      full_l1: "Naturaleza divina: es Dios verdadero.",
      full_l2: "Naturaleza humana: es hombre verdadero.",
      full_p2: "La encarnación no significa que Cristo dejó de ser Dios, sino que, permaneciendo como verdadero Dios, asumió también una verdadera humanidad. Por tanto, en una sola persona se unen perfectamente la naturaleza divina y la naturaleza humana.",
      v5: "“Porque en él habita corporalmente toda la plenitud de la Deidad.”",
      r5: "Colosenses 2:9 (Reina-Valera 1960)",
      dual_title: "La doble naturaleza de Cristo",
      dual_p1: "La unión de la naturaleza divina y humana en Cristo le capacita para revelar al Padre y representar al hombre delante de Dios. Como Dios verdadero, revela perfectamente al Padre; y como hombre verdadero, representa al hombre delante de Dios e intercede ante el Padre.",
      v6: "“Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre.”",
      r6: "1 Timoteo 2:5 (Reina-Valera 1960)"
    },
    en: {
      intro_title: "Introduction",
      intro_p1: "Before being born as a man, that is, before the incarnation, Jesus, the Word or Son of God, did not have a human body. He existed eternally as God, but had not yet assumed human nature in flesh and bone.",
      intro_p2: "For that reason, before the incarnation, He did not participate in human experience in the way we live it bodily. However, when the Word became flesh, at the birth of Jesus Christ as a man, He fully assumed human nature and could experience what belongs to human life, such as pain, fatigue, hunger, sadness, and joy.",
      v1: "“And the Word became flesh and dwelt among us, and we beheld His glory, the glory as of the only begotten of the Father, full of grace and truth.”",
      r1: "John 1:14 (NKJV)",
      before_title: "Before the Incarnation",
      before_p1: "Before the incarnation, Christ existed as eternal God, but without a human body. He was the divine, eternal, holy, and glorious Word, and had not yet taken on human nature.",
      v2: "“In the beginning was the Word, and the Word was with God, and the Word was God.”",
      r2: "John 1:1 (NKJV)",
      after_title: "After the Incarnation",
      after_p1: "After the incarnation, Jesus took on our full human nature, with body, mind, and emotions. In this way, He could live the human experience in His own flesh, without ceasing to be God.",
      after_p2: "The incarnation means that the Son of God assumed true humanity. It was not an appearance, but a full reality. Christ lived as a true man among men.",
      v3: "“Therefore, in all things He had to be made like His brethren, that He might be a merciful and faithful High Priest in things pertaining to God, to make propitiation for the sins of the people.”",
      r3: "Hebrews 2:17 (NKJV)",
      after_p3: "That is why Jesus Christ could perfectly understand what we feel, as He Himself lived the human reality in His own flesh. He knew pain, fatigue, hunger, sadness, and also love and compassion.",
      v4: "“For we do not have a High Priest who cannot sympathize with our weaknesses, but was in all points tempted as we are, yet without sin.”",
      r4: "Hebreos 4:15 (NKJV)",
      full_title: "Christ is 100% God and 100% Man",
      full_p1: "Jesus has two complete and true natures at the same time:",
      full_l1: "Divine nature: He is true God.",
      full_l2: "Human nature: He is true man.",
      full_p2: "The incarnation does not mean that Christ ceased to be God, but that, remaining true God, He also assumed true humanity. Therefore, in one person the divine nature and the human nature are perfectly united.",
      v5: "“For in Him dwells all the fullness of the Godhead bodily.”",
      r5: "Colossians 2:9 (NKJV)",
      dual_title: "The Dual Nature of Christ",
      dual_p1: "The union of the divine and human natures in Christ enables Him to reveal the Father and represent man before God. As true God, He perfectly reveals the Father; and as true man, He represents man before God and intercedes before the Father.",
      v6: "“For there is one God and one Mediator between God and men, the Man Christ Jesus.”",
      r6: "1 Timothy 2:5 (NKJV)"
    },
    pt: {
      intro_title: "Introdução",
      intro_p1: "Antes de nascer como homem, ou seja, antes da encarnação, Jesus, o Verbo ou Filho de Deus, não tinha corpo humano. Existia eternamente como Deus, mas ainda não tinha assumido a natureza humana em carne e osso.",
      intro_p2: "Por essa razão, antes da encarnação, não participava da experiência humana na forma em que nós a vivemos corporalmente. No entanto, quando o Verbo se fez carne, ao nascer Jesus Cristo como homem, assumiu plenamente a natureza humana e pôde experimentar o que corresponde à vida humana, como a dor, o cansaço, a fome, a tristeza e a alegria.",
      v1: "“E o Verbo se fez carne e habitou entre nós, cheio de graça e de verdade, e vimos a sua glória, glória como do unigénito do Pai.”",
      r1: "João 1:14 (Almeida Revista e Atualizada)",
      before_title: "Antes da encarnação",
      before_p1: "Antes da encarnação, Cristo existia como Deus eterno, mas sem corpo humano. Ele era o Verbo divino, eterno, santo e glorioso, e ainda não tinha assumido a natureza humana.",
      v2: "“No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.”",
      r2: "João 1:1 (Almeida Revista e Atualizada)",
      after_title: "Depois da encarnação",
      after_p1: "Depois da encarnação, Jesus assumiu nossa natureza humana completa, com corpo, mente e emoções. Desta forma, Ele pôde viver em carne própria a experiência humana, sem deixar de ser Deus.",
      after_p2: "A encarnação significa que o Filho de Deus assumiu uma verdadeira humanidade. Não foi uma aparência, mas uma realidade plena. Cristo viveu como homem verdadeiro entre os homens.",
      v3: "“Por isso mesmo, convinha que, em todas as coisas, se tornasse semelhante aos irmãos, para ser misericordioso e fiel sumo sacerdote nas coisas referentes a Deus e para fazer propiciação pelos pecados do povo.”",
      r3: "Hebreus 2:17 (Almeida Revista e Atualizada)",
      after_p3: "Por isso, Jesus Cristo pôde compreender perfeitamente o que sentimos, pois Ele mesmo viveu em carne própria a realidade humana. Conheceu a dor, a fadiga, a fome, a tristeza e também o amor e a compaixão.",
      v4: "“Porque não temos sumo sacerdote que não possa compadecer-se das nossas fraquezas; antes, foi ele tentado em todas as coisas, à nossa semelhança, mas sem pecado.”",
      r4: "Hebreus 4:15 (Almeida Revista e Atualizada)",
      full_title: "Cristo é 100% Deus e 100% Homem",
      full_p1: "Jesus tem duas naturezas completas e verdadeiras ao mesmo tempo:",
      full_l1: "Natureza divina: é Deus verdadeiro.",
      full_l2: "Natureza humana: é homem verdadeiro.",
      full_p2: "A encarnação não significa que Cristo deixou de ser Deus, mas que, permanecendo como verdadeiro Deus, assumiu também uma verdadeira humanidade. Portanto, em uma única pessoa unem-se perfeitamente a natureza divina e a natureza humana.",
      v5: "“Porquanto, nele, habita, corporalmente, toda a plenitude da Divindade.”",
      r5: "Colossenses 2:9 (Almeida Revista e Atualizada)",
      dual_title: "A dupla natureza de Cristo",
      dual_p1: "A união da natureza divina e humana em Cristo o capacita para revelar o Pai e representar o homem diante de Deus. Como Deus verdadeiro, revela perfeitamente o Pai; e como homem verdadeiro, representa o homem diante de Deus e intercede diante do Pai.",
      v6: "“Porquanto há um só Deus e um só Mediador entre Deus e os homens, Cristo Jesus, homem.”",
      r6: "1 Timóteo 2:5 (Almeida Revista e Atualizada)"
    }
  };

  const c = content[language];

  return (
    <article className="space-y-12 md:space-y-16 pb-20">
      <h1 className="text-3xl md:text-[60px] font-bold text-center mb-6 md:mb-12 text-black tracking-tighter leading-none uppercase">
        II. {t.lessons.incarnationOfChrist}
      </h1>

      <div className="space-y-10 text-black/80 text-sm md:text-base leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black">{c.intro_title}</h2>
          <p>{c.intro_p1}</p>
          <p>{c.intro_p2}</p>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v1}</p>
              <p className="text-xs opacity-60">{c.r1}</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black text-right">{c.before_title}</h2>
          <p>{c.before_p1}</p>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v2}</p>
              <p className="text-xs opacity-60">{c.r2}</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black text-right">{c.after_title}</h2>
          <p>{c.after_p1}</p>
          <p>{c.after_p2}</p>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v3}</p>
              <p className="text-xs opacity-60">{c.r3}</p>
            </div>
          </div>
          <p>{c.after_p3}</p>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v4}</p>
              <p className="text-xs opacity-60">{c.r4}</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black text-right"><span className="bg-yellow-200/80 px-1 rounded-sm">{c.full_title}</span></h2>
          <p>{c.full_p1}</p>
          <ol className="list-decimal ml-6 space-y-1 font-medium">
            <li><span className="font-bold">{c.full_l1}</span></li>
            <li><span className="font-bold">{c.full_l2}</span></li>
          </ol>
          <p>{c.full_p2}</p>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v5}</p>
              <p className="text-xs opacity-60">{c.r5}</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black text-right">{c.dual_title}</h2>
          <p>{c.dual_p1}</p>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v6}</p>
              <p className="text-xs opacity-60">{c.r6}</p>
            </div>
          </div>
        </section>
      </div>

      {/* Next Button */}
      <div className="pt-16 flex justify-end">
        <Link 
          href="/ensenanzas/cristologia/nombres" 
          className="group flex items-center gap-2 px-4 py-2 border border-black/10 text-black/40 hover:text-black hover:border-black/20 transition-all text-[10px] uppercase tracking-[0.2em] font-bold"
        >
          <span>{t.lessons.nextTopic}</span>
          <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
