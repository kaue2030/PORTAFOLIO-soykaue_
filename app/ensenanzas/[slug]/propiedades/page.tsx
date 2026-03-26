'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { QuickIndex } from '@/components/quick-index';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

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
          <span className="font-medium text-sm md:text-base">{language === 'es' ? 'Volver a Atributos' : language === 'en' ? 'Back to Attributes' : 'Voltar aos Atributos'}</span>
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
  const { language } = useLanguage();
  const t = translations[language];

  const content = {
    es: {
      title: "V. Propiedades Divinas de Cristo",
      s1_title: "Su propia existencia",
      s1_p1: "Este es un atributo que se relaciona con la existencia propia de Cristo. La base de Su existencia se encuentra en Él mismo. Él es su propia causa. Como Dios, Cristo es eterno y existe por Sí mismo, sin depender de nadie para ser. Su existencia no tiene principio ni fin, pues pertenece a la naturaleza divina.",
      v1: "“Y respondió Dios a Moisés: YO SOY EL QUE SOY.”",
      r1: "Éxodo 3:14 (Reina-Valera 1960)",
      v2: "“En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.”",
      r2: "Juan 1:1 (Reina-Valera 1960)",
      v3: "“De cierto, de cierto os digo: Antes que Abraham fuese, yo soy.”",
      r3: "Juan 8:58 (Reina-Valera 1960)",
      s1_p2: "Estas declaraciones muestran que Cristo posee existencia eterna, independiente y divina.",
      s2_title: "Su inmutabilidad",
      s2_p1: "La inmutabilidad es aquella perfección por la cual Dios permanece sin cambio alguno, no solo en Su ser, sino también en Sus perfecciones, propósitos y promesas. En Dios no existe variación, deterioro ni mejora, porque Él es perfecto en sí mismo. Esta verdad también se aplica a Cristo, pues su naturaleza divina es inmutable.",
      v4: "“Jesucristo es el mismo ayer, y hoy, y por los siglos.”",
      r4: "Hebreos 13:8 (Reina-Valera 1960)",
      v5: "“Porque yo Jehová no cambio...”",
      r5: "Malaquías 3:6 (Reina-Valera 1960)",
      s2_p2: "Por lo tanto, Cristo permanece eternamente el mismo en Su ser, en Su poder, en Su santidad y en Su fidelidad.",
      s3_title: "Su infinitud",
      s3_p1: "La infinitud es aquella perfección divina por medio de la cual Dios está libre de toda limitación. Él no puede ser limitado por el tiempo ni por el espacio. Cristo, en cuanto Dios, existe antes de todo y está por encima de toda limitación creada.",
      v6: "“No temas; yo soy el primero y el último.”",
      r6: "Apocalipsis 1:17 (Reina-Valera 1960)",
      s3_p2: "La infinitud de Dios es una realidad plenamente comprendida solo por Él mismo. Sin embargo, la Biblia nos permite contemplar algunos aspectos de esta infinitud divina.",
      sa_title: "a. Su absoluta perfección",
      sa_p1: "El poder de Dios es inagotable; Su santidad, Su sabiduría y Su conocimiento son infinitos. Del mismo modo, Su amor y Su grandeza no tienen medida.",
      v7: "“He aquí, Dios es grande, y nosotros no le conocemos, ni se puede seguir la huella de sus años.”",
      r7: "Job 36:26 (Reina-Valera 1960)",
      v8: "“Grande es Jehová, y digno de suprema alabanza; y su grandeza es inescrutable.”",
      r8: "Salmo 145:3 (Reina-Valera 1960)",
      sb_title: "b. Su eternidad",
      sb_p1: "La eternidad de Dios se describe en la Biblia como una duración sin principio ni fin. Cristo, en cuanto Dios, participa plenamente de esta eternidad divina.",
      v9: "“Antes que naciesen los montes y formases la tierra y el mundo, desde el siglo y hasta el siglo, tú eres Dios.”",
      r9: "Salmo 90:2 (Reina-Valera 1960)",
      v10: "“Pero tú eres el mismo, y tus años no se acabarán.”",
      r10: "Salmo 102:27 (Reina-Valera 1960)",
      footer: "Por ello, podemos afirmar que Jesucristo, en su naturaleza divina, es eterno, infinito e inmutable."
    },
    en: {
      title: "V. Divine Properties of Christ",
      s1_title: "His self-existence",
      s1_p1: "This is an attribute related to Christ's own existence. The basis of His existence is found in Himself. He is His own cause. As God, Christ is eternal and exists by Himself, without depending on anyone to be. His existence has no beginning or end, as it belongs to the divine nature.",
      v1: "“And God said to Moses, ‘I AM WHO I AM.’”",
      r1: "Exodus 3:14 (NKJV)",
      v2: "“In the beginning was the Word, and the Word was with God, and the Word was God.”",
      r2: "John 1:1 (NKJV)",
      v3: "“Most assuredly, I say to you, before Abraham was, I AM.”",
      r3: "John 8:58 (NKJV)",
      s1_p2: "These statements show that Christ possesses eternal, independent, and divine existence.",
      s2_title: "His immutability",
      s2_p1: "Immutability is that perfection by which God remains without any change, not only in His being but also in His perfections, purposes, and promises. In God, there is no variation, deterioration, or improvement, because He is perfect in Himself. This truth also applies to Christ, as His divine nature is immutable.",
      v4: "“Jesus Christ is the same yesterday, today, and forever.”",
      r4: "Hebrews 13:8 (NKJV)",
      v5: "“For I am the Lord, I do not change...”",
      r5: "Malachi 3:6 (NKJV)",
      s2_p2: "Therefore, Christ remains eternally the same in His being, in His power, in His holiness, and in His faithfulness.",
      s3_title: "His infinity",
      s3_p1: "Infinity is that divine perfection by which God is free from all limitation. He cannot be limited by time or space. Christ, as God, exists before everything and is above all created limitation.",
      v6: "“Do not be afraid; I am the First and the Last.”",
      r6: "Revelation 1:17 (NKJV)",
      s3_p2: "The infinity of God is a reality fully understood only by Himself. However, the Bible allows us to contemplate some aspects of this divine infinity.",
      sa_title: "a. His absolute perfection",
      sa_p1: "God's power is inexhaustible; His holiness, His wisdom, and His knowledge are infinite. Likewise, His love and His greatness have no measure.",
      v7: "“Behold, God is great, and we do not know Him; Nor can the number of His years be discovered.”",
      r7: "Job 36:26 (NKJV)",
      v8: "“Great is the Lord, and greatly to be praised; And His greatness is unsearchable.”",
      r8: "Psalm 145:3 (NKJV)",
      sb_title: "b. His eternity",
      sb_p1: "God's eternity is described in the Bible as a duration without beginning or end. Christ, as God, fully participates in this divine eternity.",
      v9: "“Before the mountains were brought forth, or ever You had formed the earth and the world, even from everlasting to everlasting, You are God.”",
      r9: "Psalm 90:2 (NKJV)",
      v10: "“But You are the same, and Your years will have no end.”",
      r10: "Psalm 102:27 (NKJV)",
      footer: "Therefore, we can affirm that Jesus Christ, in His divine nature, is eternal, infinite, and immutable."
    },
    pt: {
      title: "V. Propriedades Divinas de Cristo",
      s1_title: "Sua própria existência",
      s1_p1: "Este é um atributo relacionado à existência própria de Cristo. A base de Sua existência encontra-se Nele mesmo. Ele é sua própria causa. Como Deus, Cristo é eterno e existe por Si mesmo, sem depender de ninguém para ser. Sua existência não tem princípio nem fim, pois pertence à natureza divina.",
      v1: "“Disse Deus a Moisés: EU SOU O QUE SOU.”",
      r1: "Êxodo 3:14 (Almeida Revista e Atualizada)",
      v2: "“No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.”",
      r2: "João 1:1 (Almeida Revista e Atualizada)",
      v3: "“Respondeu-lhes Jesus: Em verdade, em verdade vos digo que, antes que Abraão existisse, eu sou.”",
      r3: "João 8:58 (Almeida Revista e Atualizada)",
      s1_p2: "Estas declarações mostram que Cristo possui existência eterna, independente e divina.",
      s2_title: "Sua imutabilidade",
      s2_p1: "A imutabilidade é aquela perfeição pela qual Deus permanece sem mudança alguma, não apenas em Seu ser, mas também em Suas perfeições, propósitos e promessas. Em Deus não existe variação, deterioração nem melhora, porque Ele é perfeito em si mesmo. Esta verdade também se aplica a Cristo, pois sua natureza divina é imutável.",
      v4: "“Jesus Cristo é o mesmo ontem, e hoje, e eternamente.”",
      r4: "Hebreus 13:8 (Almeida Revista e Atualizada)",
      v5: "“Porque eu, o Senhor, não mudo...”",
      r5: "Malaquias 3:6 (Almeida Revista e Atualizada)",
      s2_p2: "Portanto, Cristo permanece eternamente o mesmo em Seu ser, em Seu poder, em Sua santidade e em Sua fidelidade.",
      s3_title: "Sua infinitude",
      s3_p1: "A infinitude é aquela perfeição divina por meio da qual Deus está livre de toda limitação. Ele não pode ser limitado pelo tempo nem pelo espaço. Cristo, como Deus, existe antes de tudo e está acima de toda limitação criada.",
      v6: "“Não temas; eu sou o primeiro e o último.”",
      r6: "Apocalipse 1:17 (Almeida Revista e Atualizada)",
      s3_p2: "A infinitude de Deus é uma realidade plenamente compreendida apenas por Ele mesmo. No entanto, a Bíblia nos permite contemplar alguns aspectos desta infinitude divina.",
      sa_title: "a. Sua absoluta perfeição",
      sa_p1: "O poder de Deus é inesgotável; Sua santidade, Sua sabedoria e Seu conhecimento são infinitos. Da mesma forma, Seu amor e Sua grandeza não têm medida.",
      v7: "“Eis que Deus é grande, e nós não o compreendemos; o número dos seus anos é insondável.”",
      r7: "Jó 36:26 (Almeida Revista e Atualizada)",
      v8: "“Grande é o Senhor e mui digno de ser louvado; a sua grandeza é insondável.”",
      r8: "Salmo 145:3 (Almeida Revista e Atualizada)",
      sb_title: "b. Sua eternidade",
      sb_p1: "A eternidade de Deus é descrita na Bíblia como uma duração sem princípio nem fim. Cristo, como Deus, participa plenamente desta eternidade divina.",
      v9: "“Antes que os montes nascessem e se formassem a terra e o mundo, de eternidade a eternidade, tu és Deus.”",
      r9: "Salmo 90:2 (Almeida Revista e Atualizada)",
      v10: "“Tu, porém, és o mesmo, e os teus anos não terão fim.”",
      r10: "Salmo 102:27 (Almeida Revista e Atualizada)",
      footer: "Por isso, podemos afirmar que Jesus Cristo, em sua natureza divina, é eterno, infinito e imutável."
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
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v2}</p>
              <p className="text-xs opacity-60">{c.r2}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v3}</p>
              <p className="text-xs opacity-60">{c.r3}</p>
            </div>
          </div>
          <p>{c.s1_p2}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black text-right underline underline-offset-4">{c.s2_title}</h2>
          <p>{c.s2_p1}</p>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v4}</p>
              <p className="text-xs opacity-60">{c.r4}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v5}</p>
              <p className="text-xs opacity-60">{c.r5}</p>
            </div>
          </div>
          <p>{c.s2_p2}</p>
        </section>

        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-black text-right underline underline-offset-4">{c.s3_title}</h2>
            <p>{c.s3_p1}</p>
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-black/10 space-y-2">
                <p className="font-bold text-lg">{c.v6}</p>
                <p className="text-xs opacity-60">{c.r6}</p>
              </div>
            </div>
            <p>{c.s3_p2}</p>
          </div>

          <div className="space-y-4 pl-4 md:pl-8">
            <h3 className="text-lg md:text-xl font-bold text-black text-right">{c.sa_title}</h3>
            <p>{c.sa_p1}</p>
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-black/10 space-y-2">
                <p className="font-bold text-lg">{c.v7}</p>
                <p className="text-xs opacity-60">{c.r7}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-black/10 space-y-2">
                <p className="font-bold text-lg">{c.v8}</p>
                <p className="text-xs opacity-60">{c.r8}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pl-4 md:pl-8">
            <h3 className="text-lg md:text-xl font-bold text-black text-right">{c.sb_title}</h3>
            <p>{c.sb_p1}</p>
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-black/10 space-y-2">
                <p className="font-bold text-lg">{c.v9}</p>
                <p className="text-xs opacity-60">{c.r9}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-black/10 space-y-2">
                <p className="font-bold text-lg">{c.v10}</p>
                <p className="text-xs opacity-60">{c.r10}</p>
              </div>
            </div>
          </div>
        </section>

        <p className="pt-6 border-t border-black/5 font-medium italic text-center">
          {c.footer}
        </p>
      </div>

    </article>
  );
}
