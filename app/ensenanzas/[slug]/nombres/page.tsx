'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { QuickIndex } from '@/components/quick-index';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

export default function NombresPage({ params }: { params: Promise<{ slug: string }> }) {
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
        <Link href={`/ensenanzas/${resolvedParams.slug}/encarnacion`} className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm md:text-base">{language === 'es' ? 'Volver a Encarnación' : language === 'en' ? 'Back to Incarnation' : 'Voltar à Encarnação'}</span>
        </Link>
      </div>

      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#f5f4f3]">
        <ProgressiveBlur position="top" backgroundColor="#f5f4f3" height="80px" />
        <ProgressiveBlur position="bottom" backgroundColor="#f5f4f3" height="80px" />

        <div className="flex h-full w-full flex-col items-center overflow-y-auto pt-8 md:pt-12 scroll-smooth">
          <div className="mt-6 md:mt-10 grid content-start justify-items-center gap-4 md:gap-6 text-center text-black">
            <span className="relative max-w-[15ch] text-[10px] md:text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-5 md:after:h-6 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
              III. {t.lessons.divineNames.toUpperCase()}<br />{resolvedParams.slug.toUpperCase()}
            </span>
          </div>

          <div className="mt-6 md:mt-10 w-full max-w-3xl px-4 md:px-12 pb-40">
            {isCristologia ? (
              <CristologiaNombres />
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

function CristologiaNombres() {
  const { language } = useLanguage();
  const t = translations[language];

  const content = {
    es: {
      title: "III. Los Nombres Divinos de Cristo",
      s1_title: "Se le llama Dios",
      s1_p1: "Este nombre muestra que Jesús es verdadero Dios, eterno y todopoderoso. No se trata solamente de un título de honor, sino de una afirmación clara de su divinidad. Cristo posee la misma naturaleza divina y comparte plenamente la esencia de Dios.",
      v1: "“Mas del Hijo dice: Tu trono, oh Dios, por el siglo del siglo; cetro de equidad es el cetro de tu reino.”",
      r1: "Hebreos 1:8 (Reina-Valera 1960)",
      s2_title: "Se le llama Señor",
      s2_p1: "Este nombre significa que Jesús tiene autoridad sobre todo. Él es quien gobierna y dirige la vida de sus seguidores. Llamarle Señor es reconocer su dominio, su poder y su autoridad soberana.",
      v2: "“...y toda lengua confiese que Jesucristo es el Señor, para gloria de Dios Padre.”",
      r2: "Filipenses 2:11 (Reina-Valera 1960)",
      s3_title: "Se le llama el Primero y el Último",
      s3_p1: "Este nombre indica que Cristo es el Creador y Dueño de todo, el principio y el fin de todas las cosas. Él existe desde la eternidad y tiene autoridad sobre la historia, sobre la vida y sobre el destino final de la creación.",
      v3: "“Yo soy el Alfa y la Omega, principio y fin, dice el Señor, el que es y que era y que ha de venir, el Todopoderoso.”",
      r3: "Apocalipsis 1:8 (Reina-Valera 1960)",
      v4: "“Y cuando le vi, caí como muerto a sus pies. Y él puso su diestra sobre mí, diciéndome: No temas; yo soy el primero y el último.”",
      r4: "Apocalipsis 1:17 (Reina-Valera 1960)",
      s4_title: "Cristo, el Ungido de Jehová",
      s4_p1: "El nombre Cristo significa Ungido. Esto enseña que fue elegido por Dios para cumplir la misión de salvar al mundo. Él fue enviado por el Padre para llevar a cabo la obra redentora y cumplir el propósito divino de salvación.",
      v5: "“El Espíritu de Jehová el Señor está sobre mí, porque me ungió Jehová...”",
      r5: "Isaías 61:1 (Reina-Valera 1960)",
      v6: "“Respondió Simón Pedro y dijo: Tú eres el Cristo, el Hijo del Dios viviente.”",
      r6: "Mateo 16:16 (Reina-Valera 1960)"
    },
    en: {
      title: "III. The Divine Names of Christ",
      s1_title: "He is called God",
      s1_p1: "This name shows that Jesus is true God, eternal and almighty. It is not just a title of honor but a clear affirmation of His divinity. Christ possesses the same divine nature and fully shares the essence of God.",
      v1: "“But to the Son He says: Your throne, O God, is forever and ever; A scepter of righteousness is the scepter of Your kingdom.”",
      r1: "Hebrews 1:8 (NKJV)",
      s2_title: "He is called Lord",
      s2_p1: "This name means that Jesus has authority over all. He is the one who rules and directs the lives of His followers. Calling Him Lord is recognizing His dominion, power, and sovereign authority.",
      v2: "“...and that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.”",
      r2: "Philippians 2:11 (NKJV)",
      s3_title: "He is called the First and the Last",
      s3_p1: "This name indicates that Christ is the Creator and Owner of all, the beginning and the end of all things. He exists from eternity and has authority over history, life, and the final destiny of creation.",
      v3: "“I am the Alpha and the Omega, the Beginning and the End, says the Lord, who is and who was and who is to come, the Almighty.”",
      r3: "Revelation 1:8 (NKJV)",
      v4: "“And when I saw Him, I fell at His feet as dead. But He laid His right hand on me, saying to me: Do not be afraid; I am the First and the Last.”",
      r4: "Revelation 1:17 (NKJV)",
      s4_title: "Christ, the Anointed of Jehovah",
      s4_p1: "The name Christ means Anointed. This teaches that He was chosen by God to fulfill the mission of saving the world. He was sent by the Father to carry out the redemptive work and fulfill the divine purpose of salvation.",
      v5: "“The Spirit of the Lord God is upon Me, Because the Lord has anointed Me...”",
      r5: "Isaiah 61:1 (NKJV)",
      v6: "“Simon Peter answered and said, You are the Christ, the Son of the living God.”",
      r6: "Matthew 16:16 (NKJV)"
    },
    pt: {
      title: "III. Os Nomes Divinos de Cristo",
      s1_title: "Ele é chamado de Deus",
      s1_p1: "Este nome mostra que Jesus é verdadeiro Deus, eterno e todo-poderoso. Não se trata apenas de um título de honra, mas de uma afirmação clara da sua divindade. Cristo possui a mesma natureza divina e compartilha plenamente a essência de Deus.",
      v1: "“Mas, acerca do Filho, diz: O teu trono, ó Deus, é para todo o sempre; cetro de equidade é o cetro do teu reino.”",
      r1: "Hebreus 1:8 (Almeida Revista e Atualizada)",
      s2_title: "Ele é chamado de Senhor",
      s2_p1: "Este nome significa que Jesus tem autoridade sobre tudo. Ele é quem governa e dirige a vida de seus seguidores. Chamá-lo de Senhor é reconhecer seu domínio, seu poder e sua autoridade soberana.",
      v2: "“...e toda língua confesse que Jesus Cristo é Senhor, para glória de Deus Pai.”",
      r2: "Filipenses 2:11 (Almeida Revista e Atualizada)",
      s3_title: "Ele é chamado de o Primeiro e o Último",
      s3_p1: "Este nome indica que Cristo é o Criador e Dono de tudo, o princípio e o fim de todas as coisas. Ele existe desde a eternidade e tem autoridade sobre a história, sobre a vida e sobre o destino final da criação.",
      v3: "“Eu sou o Alfa e o Ômega, diz o Senhor Deus, aquele que é, que era e que há de vir, o Todo-Poderoso.”",
      r3: "Apocalipse 1:8 (Almeida Revista e Atualizada)",
      v4: "“Quando o vi, caí a seus pés como morto. Porém ele pôs sobre mim a sua mão direita, dizendo: Não temas; eu sou o primeiro e o último.”",
      r4: "Apocalipse 1:17 (Almeida Revista e Atualizada)",
      s4_title: "Cristo, o Ungido de Jeová",
      s4_p1: "O nome Cristo significa Ungido. Isso ensina que Ele foi escolhido por Deus para cumprir a missão de salvar o mundo. Ele foi enviado pelo Pai para realizar a obra redentora e cumprir o propósito divino de salvação.",
      v5: "“O Espírito do Senhor Deus está sobre mim, porque o Senhor me ungiu...”",
      r5: "Isaías 61:1 (Almeida Revista e Atualizada)",
      v6: "“Respondendo Simão Pedro, disse: Tu és o Cristo, o Filho do Deus vivo.”",
      r6: "Mateus 16:16 (Almeida Revista e Atualizada)"
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
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black text-right underline underline-offset-4">{c.s3_title}</h2>
          <p>{c.s3_p1}</p>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v3}</p>
              <p className="text-xs opacity-60">{c.r3}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v4}</p>
              <p className="text-xs opacity-60">{c.r4}</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black text-right underline underline-offset-4">{c.s4_title}</h2>
          <p>{c.s4_p1}</p>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.v5}</p>
              <p className="text-xs opacity-60">{c.r5}</p>
            </div>
          </div>
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
          href="/ensenanzas/cristologia/atributos" 
          className="group flex items-center gap-2 px-4 py-2 border border-black/10 text-black/40 hover:text-black hover:border-black/20 transition-all text-[10px] uppercase tracking-[0.2em] font-bold"
        >
          <span>{t.lessons.nextTopic}</span>
          <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
