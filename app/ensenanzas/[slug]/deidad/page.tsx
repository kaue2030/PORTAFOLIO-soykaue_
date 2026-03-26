'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { QuickIndex } from '@/components/quick-index';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

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
          <span className="font-medium text-sm md:text-base">{language === 'es' ? 'Volver a Introducción' : language === 'en' ? 'Back to Introduction' : 'Voltar à Introdução'}</span>
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
  const { language } = useLanguage();
  const t = translations[language];

  const content = {
    es: {
      s1_title: "1. La realidad de las dos naturalezas",
      s1_p1: (
        <>
          Este punto enseña que Jesucristo <span className="bg-yellow-200/80 px-1 rounded-sm">posee verdaderamente dos naturalezas: una divina y una humana</span>. No se trata de una apariencia ni de una representación simbólica, sino de una realidad plena. Jesús es <span className="bg-yellow-200/80 px-1 rounded-sm">verdaderamente Dios y verdaderamente hombre</span>.
        </>
      ),
      s1_divine_intro: "La Biblia confirma su divinidad cuando dice:",
      s1_divine_verse: "“En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.”",
      s1_divine_ref: "Juan 1:1 (Reina-Valera 1960)",
      s1_divine_link: "https://www.biblegateway.com/passage/?search=Juan%201:1&version=RVR1960",
      s1_human_intro: "También confirma su humanidad al declarar:",
      s1_human_verse: "“Por tanto, debía ser en todo semejante a sus hermanos, para venir a ser misericordioso y fiel sumo sacerdote en lo que a Dios se refiere, para expiar los pecados del pueblo.”",
      s1_human_ref: "Hebreos 2:17 (Reina-Valera 1960)",
      s1_human_link: "https://www.biblegateway.com/passage/?search=Hebreos%202:17&version=RVR1960",
      s1_p2: "Estas verdades nos muestran que Cristo participó de nuestra humanidad sin dejar de ser Dios. Él vivió entre los hombres, sintió hambre, cansancio, dolor y tristeza, pero al mismo tiempo manifestó su deidad con poder, autoridad y santidad.",
      s2_title: "2. La integridad de las dos naturalezas",
      s2_p1: (
        <>
          La integridad de las dos naturalezas significa que tanto la naturaleza divina como la naturaleza humana de Cristo están <span className="bg-yellow-200/80 px-1 rounded-sm">completas y perfectas</span>. Jesús no es mitad Dios y mitad hombre; Él es <span className="bg-yellow-200/80 px-1 rounded-sm">completamente Dios y completamente hombre</span>. En Él no hubo mezcla, disminución ni alteración de ninguna de sus naturalezas.
        </>
      ),
      s2_verse1: "“Porque en él habita corporalmente toda la plenitud de la Deidad.”",
      s2_ref1: "Colosenses 2:9 (Reina-Valera 1960)",
      s2_link1: "https://www.biblegateway.com/passage/?search=Colosenses%202:9&version=RVR1960",
      s2_verse2: "“Porque no tenemos un sumo sacerdote que no pueda compadecerse de nuestras debilidades, sino uno que fue tentado en todo según nuestra semejanza, pero sin pecado.”",
      s2_ref2: "Hebreos 4:15 (Reina-Valera 1960)",
      s2_link2: "https://www.biblegateway.com/passage/?search=Hebreos%204:15&version=RVR1960",
      s2_p2: "Estos pasajes nos enseñan que Cristo posee toda la plenitud de la Deidad y, al mismo tiempo, una verdadera humanidad. Su naturaleza humana fue real, pero sin pecado; su naturaleza divina fue plena, eterna e inmutable.",
      s3_title: "3. La unión de las dos naturalezas en una sola persona",
      s3_p1: (
        <>
          Aunque Jesucristo tiene dos naturalezas, no por ello es dos personas. La doctrina bíblica enseña que en Cristo hay <span className="bg-yellow-200/80 px-1 rounded-sm">una sola persona</span>, en la cual están <span className="bg-yellow-200/80 px-1 rounded-sm">unidas la naturaleza divina y la naturaleza humana sin confusión, sin cambio, sin división y sin separación</span>. Esta unión es un misterio glorioso de la fe cristiana, pero es una verdad revelada claramente en las Escrituras.
        </>
      ),
      s3_verse2: "“Grande es el misterio de la piedad: Dios fue manifestado en carne...”",
      s3_ref2: "1 Timoteo 3:16 (Reina-Valera 1960)",
      s3_link2: "https://www.biblegateway.com/passage/?search=1%20Timoteo%203:16&version=RVR1960",
      s3_p2: (
        <>
          Jesucristo es una sola persona. No son dos seres distintos actuando por separado, sino una sola persona divina con dos naturalezas perfectas. Por ello, podemos afirmar con fidelidad bíblica que Jesús es <span className="bg-yellow-200/80 px-1 rounded-sm">cien por ciento Dios y cien por ciento hombre al mismo tiempo</span>.
        </>
      ),
      imp_title: "Importancia de esta doctrina para la Iglesia",
      imp_p1: (
        <>
          En la actualidad, muchas personas que desean acercarse a Dios terminan siendo confundidas por enseñanzas falsas o incompletas acerca de Jesucristo. Por eso, la Iglesia tiene la responsabilidad de enseñar con claridad que <span className="bg-yellow-200/80 px-1 rounded-sm">solo Jesús es el camino verdadero, la revelación perfecta del Padre y el fundamento de la fe cristiana</span>.
        </>
      ),
      imp_verse1: "“Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.”",
      imp_ref1: "Juan 14:6 (Reina-Valera 1960)",
      imp_link1: "https://www.biblegateway.com/passage/?search=Juan%2014:6&version=RVR1960",
      imp_p2: "La fe cristiana se sostiene sobre la persona de Cristo. Él es el centro del Evangelio, la razón de ser de la Iglesia y la esperanza eterna del creyente. No puede existir verdadera doctrina cristiana si Cristo no ocupa el lugar principal. Conocerle correctamente no solo fortalece la mente, sino también el corazón, pues toda vida espiritual auténtica depende de una relación verdadera con Él.",
      imp_verse2: "“Porque nadie puede poner otro fundamento que el que está puesto, el cual es Jesucristo.”",
      imp_ref2: "1 Corintios 3:11 (Reina-Valera 1960)",
      imp_link2: "https://www.biblegateway.com/passage/?search=1%20Corintios%203:11&version=RVR1960"
    },
    en: {
      s1_title: "1. The reality of the two natures",
      s1_p1: (
        <>
          This point teaches that Jesus Christ <span className="bg-yellow-200/80 px-1 rounded-sm">truly possesses two natures: one divine and one human</span>. It is not an appearance or a symbolic representation, but a full reality. Jesus is <span className="bg-yellow-200/80 px-1 rounded-sm">truly God and truly man</span>.
        </>
      ),
      s1_divine_intro: "The Bible confirms His divinity when it says:",
      s1_divine_verse: "“In the beginning was the Word, and the Word was with God, and the Word was God.”",
      s1_divine_ref: "John 1:1 (NKJV)",
      s1_divine_link: "https://www.biblegateway.com/passage/?search=John+1%3A1&version=NKJV",
      s1_human_intro: "It also confirms His humanity by declaring:",
      s1_human_verse: "“Therefore, in all things He had to be made like His brethren, that He might be a merciful and faithful High Priest in things pertaining to God, to make propitiation for the sins of the people.”",
      s1_human_ref: "Hebrews 2:17 (NKJV)",
      s1_human_link: "https://www.biblegateway.com/passage/?search=Hebrews+2%3A17&version=NKJV",
      s1_p2: "These truths show us that Christ participated in our humanity without ceasing to be God. He lived among men, felt hunger, exhaustion, pain, and sadness, but at the same time manifested His deity with power, authority, and holiness.",
      s2_title: "2. The integrity of the two natures",
      s2_p1: (
        <>
          The integrity of the two natures means that both the divine and human natures of Christ are <span className="bg-yellow-200/80 px-1 rounded-sm">complete and perfect</span>. Jesus is not half God and half man; He is <span className="bg-yellow-200/80 px-1 rounded-sm">fully God and fully man</span>. In Him, there was no mixing, diminishing, or alteration of either nature.
        </>
      ),
      s2_verse1: "“For in Him dwells all the fullness of the Godhead bodily.”",
      s2_ref1: "Colossians 2:9 (NKJV)",
      s2_link1: "https://www.biblegateway.com/passage/?search=Colossians+2%3A9&version=NKJV",
      s2_verse2: "“For we do not have a High Priest who cannot sympathize with our weaknesses, but was in all points tempted as we are, yet without sin.”",
      s2_ref2: "Hebrews 4:15 (NKJV)",
      s2_link2: "https://www.biblegateway.com/passage/?search=Hebrews+4%3A15&version=NKJV",
      s2_p2: "These passages teach us that Christ possesses all the fullness of the Godhead and, at the same time, a true humanity. His human nature was real but without sin; His divine nature was full, eternal, and immutable.",
      s3_title: "3. The union of the two natures in one person",
      s3_p1: (
        <>
          Although Jesus Christ has two natures, He is not therefore two persons. Biblical doctrine teaches that in Christ there is <span className="bg-yellow-200/80 px-1 rounded-sm">only one person</span>, in whom the <span className="bg-yellow-200/80 px-1 rounded-sm">divine and human natures are united without confusion, without change, without division, and without separation</span>. This union is a glorious mystery of the Christian faith, but it is a truth clearly revealed in Scripture.
        </>
      ),
      s3_verse2: "“And without controversy great is the mystery of godliness: God was manifested in the flesh...”",
      s3_ref2: "1 Timothy 3:16 (NKJV)",
      s3_link2: "https://www.biblegateway.com/passage/?search=1+Timothy+3%3A16&version=NKJV",
      s3_p2: (
        <>
          Jesus Christ is one person. They are not two distinct beings acting separately, but one divine person with two perfect natures. Therefore, we can affirm with biblical fidelity that Jesus is <span className="bg-yellow-200/80 px-1 rounded-sm">one hundred percent God and one hundred percent man at the same time</span>.
        </>
      ),
      imp_title: "Importance of this doctrine for the Church",
      imp_p1: (
        <>
          Today, many people who want to draw near to God end up being confused by false or incomplete teachings about Jesus Christ. Therefore, the Church has the responsibility to teach clearly that <span className="bg-yellow-200/80 px-1 rounded-sm">only Jesus is the true way, the perfect revelation of the Father, and the foundation of the Christian faith</span>.
        </>
      ),
      imp_verse1: "“I am the way, the truth, and the life. No one comes to the Father except through Me.”",
      imp_ref1: "John 14:6 (NKJV)",
      imp_link1: "https://www.biblegateway.com/passage/?search=John+14%3A6&version=NKJV",
      imp_p2: "The Christian faith stands on the person of Christ. He is the center of the Gospel, the reason for the Church's existence, and the eternal hope of the believer. There can be no true Christian doctrine if Christ does not occupy the primary place. Knowing Him correctly not only strengthens the mind but also the heart, for all authentic spiritual life depends on a true relationship with Him.",
      imp_verse2: "“For no other foundation can anyone lay than that which is laid, which is Jesus Christ.”",
      imp_ref2: "1 Corinthians 3:11 (NKJV)",
      imp_link2: "https://www.biblegateway.com/passage/?search=1+Corinthians+3%3A11&version=NKJV"
    },
    pt: {
      s1_title: "1. A realidade das duas naturezas",
      s1_p1: (
        <>
          Este ponto ensina que Jesus Cristo <span className="bg-yellow-200/80 px-1 rounded-sm">possui verdadeiramente duas naturezas: uma divina e uma humana</span>. Não se trata de uma aparência nem de uma representação simbólica, mas de uma realidade plena. Jesus é <span className="bg-yellow-200/80 px-1 rounded-sm">verdadeiramente Deus e verdadeiramente homem</span>.
        </>
      ),
      s1_divine_intro: "A Bíblia confirma sua divindade quando diz:",
      s1_divine_verse: "“No princípio era el Verbo, e o Verbo estava com Deus, e o Verbo era Deus.”",
      s1_divine_ref: "João 1:1 (Almeida Revista e Atualizada)",
      s1_divine_link: "https://www.biblegateway.com/passage/?search=Jo%C3%A3o+1%3A1&version=ARA",
      s1_human_intro: "Também confirma sua humanidade ao declarar:",
      s1_human_verse: "“Por isso mesmo, convinha que, em todas as coisas, se tornasse semelhante aos irmãos, para ser misericordioso e fiel sumo sacerdote nas cosas referentes a Deus e para fazer propiciação pelos pecados do povo.”",
      s1_human_ref: "Hebreos 2:17 (Almeida Revista e Atualizada)",
      s1_human_link: "https://www.biblegateway.com/passage/?search=Hebreus+2%3A17&version=ARA",
      s1_p2: "Estas verdades nos mostram que Cristo participou da nossa humanidade sem deixar de ser Deus. Ele viveu entre os homens, sentiu fome, cansaço, dor e tristeza, pero ao mesmo tempo manifestou sua divindade com poder, autoridade e santidade.",
      s2_title: "2. A integridade das duas naturezas",
      s2_p1: (
        <>
          A integridade das duas naturezas significa que tanto a natureza divina quanto a natureza humana de Cristo estão <span className="bg-yellow-200/80 px-1 rounded-sm">completas e perfeitas</span>. Jesus não é metade Deus e metade homem; Ele é <span className="bg-yellow-200/80 px-1 rounded-sm">completamente Deus e completamente homem</span>. Nele não houve mistura, diminuição nem alteração de nenhuma de suas naturezas.
        </>
      ),
      s2_verse1: "“Porquanto, nele, habita, corporalmente, toda a plenitude da Divindade.”",
      s2_ref1: "Colossenses 2:9 (Almeida Revista e Atualizada)",
      s2_link1: "https://www.biblegateway.com/passage/?search=Colossenses+2%3A9&version=ARA",
      s2_verse2: "“Porque não temos sumo sacerdote que não possa compadecer-se das nossas fraquezas; antes, foi ele tentado em todas as coisas, à nossa semelhança, mas sem pecado.”",
      s2_ref2: "Hebreus 4:15 (Almeida Revista e Atualizada)",
      s2_link2: "https://www.biblegateway.com/passage/?search=Hebreus+4%3A15&version=ARA",
      s2_p2: "Estas passagens nos ensinam que Cristo possui toda a plenitude da Divindade e, ao mesmo tempo, uma verdadeira humanidade. Sua natureza humana foi real, mas sem pecado; sua natureza divina foi plena, eterna e imutável.",
      s3_title: "3. A união das duas naturezas em uma só pessoa",
      s3_p1: (
        <>
          Embora Jesus Cristo tenha duas naturezas, Ele não é, por isso, duas pessoas. A doutrina bíblica ensina que em Cristo há <span className="bg-yellow-200/80 px-1 rounded-sm">uma só pessoa</span>, na qual estão <span className="bg-yellow-200/80 px-1 rounded-sm">unidas a natureza divina e a natureza humana sem confusão, sem mudança, sem divisão e sem separação</span>. Esta união é um mistério glorioso da fé cristã, mas é uma verdade revelada claramente nas Escrituras.
        </>
      ),
      s3_verse2: "“Evidentemente, grande é o mistério da piedade: Aquele que foi manifestado na carne...”",
      s3_ref2: "1 Timóteo 3:16 (Almeida Revista e Atualizada)",
      s3_link2: "https://www.biblegateway.com/passage/?search=1+Tim%C3%B3teo+3%3A16&version=ARA",
      s3_p2: (
        <>
          Jesus Cristo é uma só pessoa. Não são dois seres distintos agindo separadamente, mas uma só pessoa divina com duas naturezas perfeitas. Por isso, podemos afirmar com fidelidade bíblica que Jesus é <span className="bg-yellow-200/80 px-1 rounded-sm">cem por cento Deus e cem por cento homem ao mesmo tempo</span>.
        </>
      ),
      imp_title: "Importância desta doutrina para a Igreja",
      imp_p1: (
        <>
          Atualmente, muitas pessoas que desejam se aproximar de Deus acabam sendo confundidas por ensinos falsos ou incompletos sobre Jesus Cristo. Por isso, a Igreja tem a responsabilidade de ensinar com clareza que <span className="bg-yellow-200/80 px-1 rounded-sm">somente Jesus é o caminho verdadeiro, a revelação perfeita do Pai e o fundamento da fé cristã</span>.
        </>
      ),
      imp_verse1: "“Respondeu-lhe Jesus: Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai senão por mim.”",
      imp_ref1: "João 14:6 (Almeida Revista e Atualizada)",
      imp_link1: "https://www.biblegateway.com/passage/?search=Jo%C3%A3o+14%3A6&version=ARA",
      imp_p2: "A fé cristã se sustenta sobre a pessoa de Cristo. Ele é o centro do Evangelho, a razão de ser da Igreja e a esperança eterna do crente. Não pode existir verdadeira doutrina cristã se Cristo não ocupar o lugar principal. Conhecê-lo corretamente não apenas fortalece a mente, mas também o coração, pois toda vida espiritual autêntica depende de um relacionamento verdadeiro com Ele.",
      imp_verse2: "“Porque ninguém pode lançar outro fundamento, além do que foi posto, o qual é Jesus Cristo.”",
      imp_ref2: "1 Coríntios 3:11 (Almeida Revista e Atualizada)",
      imp_link2: "https://www.biblegateway.com/passage/?search=1+Cor%C3%ADntios+3%3A11&version=ARA"
    }
  };

  const c = content[language];

  return (
    <article className="space-y-12 md:space-y-16 pb-20">
      <h1 className="text-3xl md:text-[60px] font-bold text-center mb-6 md:mb-12 text-black tracking-tighter leading-none uppercase">
        I. {t.lessons.deityOfChrist}
      </h1>

      <div className="space-y-10 text-black/80 text-sm md:text-base leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black">{c.s1_title}</h2>
          <div className="text-justify">{c.s1_p1}</div>
          <div className="space-y-4">
            <p>{c.s1_divine_intro}</p>
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.s1_divine_verse}</p>
              <a href={c.s1_divine_link} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                {c.s1_divine_ref}
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <p>{c.s1_human_intro}</p>
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.s1_human_verse}</p>
              <a href={c.s1_human_link} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                {c.s1_human_ref}
              </a>
            </div>
          </div>
          <p>{c.s1_p2}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black">{c.s2_title}</h2>
          <div className="text-justify">{c.s2_p1}</div>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.s2_verse1}</p>
              <a href={c.s2_link1} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                {c.s2_ref1}
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.s2_verse2}</p>
              <a href={c.s2_link2} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                {c.s2_ref2}
              </a>
            </div>
          </div>
          <p>{c.s2_p2}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-black">{c.s3_title}</h2>
          <div className="text-justify">{c.s3_p1}</div>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.s2_verse1}</p>
              <a href={c.s2_link1} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                {c.s2_ref1}
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.s3_verse2}</p>
              <a href={c.s3_link2} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                {c.s3_ref2}
              </a>
            </div>
          </div>
          <div className="text-justify">{c.s3_p2}</div>
        </section>

        <section className="space-y-4 pt-6 border-t border-black/5">
          <h2 className="text-xl md:text-2xl font-bold text-black italic">{c.imp_title}</h2>
          <div className="text-justify">{c.imp_p1}</div>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.imp_verse1}</p>
              <a href={c.imp_link1} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                {c.imp_ref1}
              </a>
            </div>
          </div>
          <p>{c.imp_p2}</p>
          <div className="space-y-4">
            <div className="pl-4 border-l-2 border-black/10 space-y-2">
              <p className="font-bold text-lg">{c.imp_verse2}</p>
              <a href={c.imp_link2} target="_blank" rel="noopener noreferrer" className="text-xs opacity-60 hover:opacity-100 hover:text-blue-600 transition-all underline decoration-dotted underline-offset-2 block w-fit">
                {c.imp_ref2}
              </a>
            </div>
          </div>
        </section>
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
