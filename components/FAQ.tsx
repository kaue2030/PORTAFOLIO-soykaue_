"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const t = translations[language];
  const faqT = t.faq;

  const faqs = {
    es: [
      {
        question: "¿Este sitio es para enseñar la Biblia?",
        answer: "No. Este es un espacio personal donde comparto mi proceso, mis reflexiones y lo que he aprendido en mi caminar con Dios."
      },
      {
        question: "¿Qué vas a encontrar aquí?",
        answer: "Anotaciones, versículos, reflexiones y aprendizajes que forman parte de mi viaje espiritual."
      },
      {
        question: "¿Cuál es el propósito de este proyecto?",
        answer: "Registrar mi caminar con Dios y reunir, en un solo lugar, aquello que vengo aprendiendo a lo largo del proceso."
      },
      {
        question: "¿Este contenido sustituye a la Biblia?",
        answer: "No. Nada sustituye la lectura de la Palabra. Este espacio es solo un registro personal de aprendizaje y reflexión."
      },
      {
        question: "¿Por qué compartir esto?",
        answer: "Porque compartir también forma parte del camino, y este espacio refleja aquello que Dios ha estado trabajando en mí."
      }
    ],
    en: [
      {
        question: "Is this site for teaching the Bible?",
        answer: "No. This is a personal space where I share my process, my reflections, and what I have learned in my walk with God."
      },
      {
        question: "What will you find here?",
        answer: "Notes, verses, reflections, and learnings that are part of my spiritual journey."
      },
      {
        question: "What is the purpose of this project?",
        answer: "To record my walk with God and gather in one place what I have been learning throughout the process."
      },
      {
        question: "Does this content replace the Bible?",
        answer: "No. Nothing replaces reading the Word. This space is only a personal record of learning and reflection."
      },
      {
        question: "Why share this?",
        answer: "Because sharing is also part of the journey, and this space reflects what God has been working in me."
      }
    ],
    pt: [
      {
        question: "Este site é para ensinar a Bíblia?",
        answer: "Não. Este é um espaço pessoal onde compartilho meu processo, minhas reflexões e o que tenho aprendido em minha caminhada com Deus."
      },
      {
        question: "O que você encontrará aqui?",
        answer: "Anotações, versículos, reflexões e aprendizados que fazem parte da minha jornada espiritual."
      },
      {
        question: "Qual é o propósito deste projeto?",
        answer: "Registrar minha caminhada com Deus e reunir, em um só lugar, aquilo que venho aprendendo ao longo do processo."
      },
      {
        question: "Este conteúdo substitui a Bíblia?",
        answer: "Não. Nada substitui a leitura da Palavra. Este espaço é apenas um registro pessoal de aprendizado e reflexão."
      },
      {
        question: "Por que compartilhar isso?",
        answer: "Porque compartilhar também faz parte do caminho, e este espaço reflete aquilo que Deus tem trabalhado em mim."
      }
    ]
  };

  const currentFaqs = faqs[language];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24 md:mb-32">
      {/* Left Column */}
      <div className="w-full md:w-1/3 flex flex-col">
        <h2 className="text-4xl md:text-[44px] font-semibold text-white tracking-tight mb-6">
          {faqT.aboutSpace}
        </h2>
        <p className="text-[#a1a1aa] text-base md:text-lg mb-8">
          {faqT.description}
        </p>
        <p className="text-[#a1a1aa] text-[13px] leading-relaxed max-w-xs">
          {language === 'es'
            ? 'Este espacio fue creado para reunir reflexiones, aprendizajes y registros de aquello que he vivido y entendido a lo largo de mi caminar con Dios. No como alguien que ya llegó, sino como alguien que continúa aprendiendo, siendo moldeado y volviendo siempre a la Palabra.'
            : language === 'en'
            ? 'This space was created to gather reflections, learnings, and records of what I have lived and understood throughout my walk with God. Not as someone who has already arrived, but as someone who continues to learn, being shaped, and always returning to the Word.'
            : 'Este espaço foi criado para reunir reflexões, aprendizados e registros daquilo que tenho vivido e entendido ao longo da minha caminhada com Deus. Não como alguém que já chegou, mas como alguém que continua aprendendo, sendo moldado e voltando sempre à Palavra.'}
        </p>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        {currentFaqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border border-white/5 rounded-[1.5rem] bg-[#111] transition-colors duration-300 ${openIndex === index ? 'bg-[#161616] border-white/10' : 'hover:bg-[#161616]'}`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
            >
              <span className={`text-base md:text-lg font-medium transition-colors ${openIndex === index ? 'text-[#a3e635]' : 'text-white group-hover:text-[#a3e635]'}`}>
                {faq.question}
              </span>
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${openIndex === index ? 'bg-[#a3e635]' : 'bg-white/5 group-hover:bg-white/10'}`}>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-black' : 'text-white'}`} 
                />
              </div>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out px-5 md:px-6 ${
                openIndex === index ? 'max-h-40 opacity-100 pb-5 md:pb-6' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
