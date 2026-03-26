'use client';

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { QuickIndex } from '@/components/quick-index';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

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
  const { language } = useLanguage();
  const t = translations[language];

  const content = {
    es: {
      p1: "La Cristología es la doctrina bíblica que estudia la persona y la obra de nuestro Señor Jesucristo. Su propósito es explicar quién es Jesús, cuál es la naturaleza de su ser, cuál fue su misión en la tierra y qué significado tiene su obra redentora para la humanidad. Este estudio es fundamental para la fe cristiana, pues Cristo no es un personaje secundario en las Escrituras, sino el centro mismo de la revelación divina y el fundamento de la salvación.",
      p2: "La Biblia nos enseña que en Cristo hemos sido bendecidos con toda bendición espiritual, y que en Él se encuentran la plenitud de la gracia, la verdad y la redención de Dios para el hombre. Por ello, la Iglesia de Jesucristo tiene la urgente necesidad de conocerle, adorarle, obedecerle y disfrutar plenamente de todas las riquezas espirituales que el Padre ha concedido en su Hijo amado.",
      verse1: "“Bendito sea el Dios y Padre de nuestro Señor Jesucristo, que nos bendijo con toda bendición espiritual en los lugares celestiales en Cristo.”",
      ref1: "Efesios 1:3 (Reina-Valera 1960)",
      p3: "En un tiempo en que las corrientes filosóficas modernas, los pensamientos humanistas y las falsas doctrinas buscan desviar la atención de la verdad bíblica, resulta imprescindible que los creyentes estén sólidamente fundamentados en la doctrina de la persona de Jesucristo. Cuando no existe una enseñanza clara y firme acerca de Cristo, muchos pueden ser confundidos y arrastrados por ideas erróneas que debilitan la fe.",
      p4: "La enseñanza bíblica de la Cristología fortalece al creyente, afirma su confianza en Dios y le ayuda a comprender que Jesucristo no es solo un maestro moral o un ejemplo de bondad, sino el Hijo eterno de Dios, el Verbo hecho carne, el Salvador del mundo y el único mediador entre Dios y los hombres.",
      verse2: "“Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.”",
      ref2: "Juan 1:14 (Reina-Valera 1960)",
      verse3: "“Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre.”",
      ref3: "1 Timoteo 2:5 (Reina-Valera 1960)",
      p5: "Como ocurre con otras doctrinas esenciales de la Biblia, la Cristología ha sido también motivo de controversia a lo largo de la historia. Muchos debates teológicos han surgido en torno a la persona de Cristo, especialmente en relación con su naturaleza divina y su naturaleza humana. El Dr. Strong señala que las controversias respecto a la persona de Cristo giran principalmente sobre tres puntos fundamentales:",
      list: ["La realidad de las dos naturalezas.", "La integridad de las dos naturalezas.", "La unión de las dos naturalezas en una sola persona."]
    },
    en: {
      p1: "Christology is the biblical doctrine that studies the person and work of our Lord Jesus Christ. Its purpose is to explain who Jesus is, the nature of His being, His mission on earth, and the significance of His redemptive work for humanity. This study is fundamental to the Christian faith, as Christ is not a secondary character in the Scriptures but the very center of divine revelation and the foundation of salvation.",
      p2: "The Bible teaches us that in Christ we have been blessed with every spiritual blessing, and that in Him are found the fullness of God's grace, truth, and redemption for mankind. Therefore, the Church of Jesus Christ has an urgent need to know Him, worship Him, obey Him, and fully enjoy all the spiritual riches that the Father has bestowed upon His beloved Son.",
      verse1: "“Blessed be the God and Father of our Lord Jesus Christ, who has blessed us with every spiritual blessing in the heavenly places in Christ.”",
      ref1: "Ephesians 1:3 (NKJV)",
      p3: "In a time when modern philosophical currents, humanistic thoughts, and false doctrines seek to divert attention from biblical truth, it is essential for believers to be solidly grounded in the doctrine of the person of Jesus Christ. When there is no clear and firm teaching about Christ, many can be confused and swept away by erroneous ideas that weaken the faith.",
      p4: "The biblical teaching of Christology strengthens the believer, affirms their trust in God, and helps them understand that Jesus Christ is not just a moral teacher or an example of goodness, but the eternal Son of God, the Word made flesh, the Savior of the world, and the only mediator between God and men.",
      verse2: "“And the Word became flesh and dwelt among us, and we beheld His glory, the glory as of the only begotten of the Father, full of grace and truth.”",
      ref2: "John 1:14 (NKJV)",
      verse3: "“For there is one God and one Mediator between God and men, the Man Christ Jesus.”",
      ref3: "1 Timothy 2:5 (NKJV)",
      p5: "As with other essential doctrines of the Bible, Christology has also been a subject of controversy throughout history. Many theological debates have arisen surrounding the person of Christ, especially regarding His divine and human natures. Dr. Strong notes that controversies regarding the person of Christ revolve mainly around three fundamental points:",
      list: ["The reality of the two natures.", "The integrity of the two natures.", "The union of the two natures in one person."]
    },
    pt: {
      p1: "A Cristologia é a doutrina bíblica que estuda a pessoa e a obra de nosso Senhor Jesus Cristo. Seu propósito é explicar quem é Jesus, qual é a natureza do seu ser, qual foi a sua missão na terra e que significado tem a sua obra redentora para a humanidade. Este estudo é fundamental para a fé cristã, pois Cristo não é um personagem secundário nas Escrituras, mas o centro mesmo da revelação divina e o fundamento da salvação.",
      p2: "A Bíblia nos ensina que em Cristo fomos abençoados com toda sorte de bênção espiritual, e que nele se encontram a plenitude da graça, a verdade e a redenção de Deus para o homem. Por isso, a Igreja de Jesus Cristo tem a urgente necessidade de conhecê-lo, adorá-lo, obedecê-lo e desfrutar plenamente de todas as riquezas espirituais que o Pai concedeu em seu Filho amado.",
      verse1: "“Bendito o Deus e Pai de nosso Senhor Jesus Cristo, o qual nos abençoou com todas as bênçãos espirituais nos lugares celestiais em Cristo.”",
      ref1: "Efésios 1:3 (Almeida Revista e Atualizada)",
      p3: "Em um tempo em que as correntes filosóficas modernas, os pensamentos humanistas e as falsas doutrinas buscam desviar a atenção da verdade bíblica, torna-se imprescindível que os crentes estejam solidamente fundamentados na doutrina da pessoa de Jesus Cristo. Quando não existe um ensino claro e firme acerca de Cristo, muitos podem ser confundidos e arrastados por ideias errôneas que enfraquecem a fé.",
      p4: "O ensino bíblico da Cristologia fortalece o crente, afirma a sua confiança em Deus e o ajuda a compreender que Jesus Cristo não é apenas um mestre moral ou um exemplo de bondade, mas o Filho eterno de Deus, o Verbo feito carne, o Salvador do mundo e o único mediador entre Deus e os homens.",
      verse2: "“E o Verbo se fez carne e habitou entre nós, cheio de graça e de verdade, e vimos a sua glória, glória como do unigênito do Pai.”",
      ref2: "João 1:14 (Almeida Revista e Atualizada)",
      verse3: "“Porquanto há um só Deus e um só Mediador entre Deus e os homens, Cristo Jesus, homem.”",
      ref3: "1 Timóteo 2:5 (Almeida Revista e Atualizada)",
      p5: "Como ocorre com outras doutrinas essenciais da Bíblia, a Cristologia tem sido também motivo de controvérsia ao longo da história. Muitos debates teológicos surgiram em torno da pessoa de Cristo, especialmente em relação à sua natureza divina e sua natureza humana. O Dr. Strong assinala que as controvérsias a respeito da pessoa de Cristo giram principalmente sobre três pontos fundamentais:",
      list: ["A realidade das duas naturezas.", "A integridade das duas naturezas.", "A união das duas naturezas em uma só pessoa."]
    }
  };

  const c = content[language];

  return (
    <article className="space-y-6 md:space-y-8 pb-20">
      <h1 className="text-3xl md:text-[80px] font-bold text-center mb-6 md:mb-12 text-black tracking-tighter leading-none uppercase">
        {t.lessons.introduction}
      </h1>

      <div className="space-y-6 text-black/80 text-sm md:text-base leading-relaxed">
        <p>{c.p1}</p>
        <p>{c.p2}</p>

        <div className="space-y-2">
          <div className="pl-4 border-l-2 border-black/10">
            <p className="font-bold">{c.verse1}</p>
            <p className="text-xs mt-1 opacity-60">{c.ref1}</p>
          </div>
        </div>

        <p>{c.p3}</p>
        <p>{c.p4}</p>

        <div className="space-y-2">
          <div className="pl-4 border-l-2 border-black/10">
            <p className="font-bold">{c.verse2}</p>
            <p className="text-xs mt-1 opacity-60">{c.ref2}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="pl-4 border-l-2 border-black/10">
            <p className="font-bold">{c.verse3}</p>
            <p className="text-xs mt-1 opacity-60">{c.ref3}</p>
          </div>
        </div>

        <p>{c.p5}</p>

        <ol className="list-decimal ml-6 space-y-2 font-medium">
          {c.list.map((item, i) => (
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
