import React, { useEffect, useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/hooks/use-language';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const content = {
    es: {
      subtitle: "Aprendiendo a vivir la Palabra de Dios, un día a la vez",
      p1: "01 // Presentación",
      p2: "02 // Mi Caminar",
      p3: "03 // Prácticas",
      p4: "04 // Aprendizaje",
      greeting: "¡Hola, soy Kauê!",
      intro: "Este espacio es solo un lugar donde guardo y comparto lo que estoy aprendiendo con Dios. Nada perfecto, solo real. No lo sé todo, estoy aprendiendo. Aquí comparto lo que voy entendiendo de la Biblia a lo largo del camino. Si esto te ayuda de alguna forma, ya valió la pena.",
      walk: "“Intentando ser constante, incluso fallando a veces. Aprendiendo a volver a Dios todos los días.”",
      practices: [
        { title: 'Lectura Bíblica', desc: 'Sumergiéndome en las Escrituras diariamente.' },
        { title: 'Oración', desc: 'Buscando una conversación honesta con el Padre.' },
        { title: 'Disciplina', desc: 'Entrenando el espíritu para la constancia.' },
        { title: 'Búsqueda Real', desc: 'Anhelando Su presencia por encima de todo.' }
      ],
      topics: ['Fé', 'Disciplina', 'Luchas personales', 'Intimidad con Dios', 'Constancia', 'Gracia'],
      mission_title: "Misión Personal",
      mission: "Solo quiero crecer con Dios y, si es posible, ayudar a alguien en el camino.",
      status: "Mi jornada: En construcción"
    },
    en: {
      subtitle: "Learning to live the Word of God, one day at a time",
      p1: "01 // Presentation",
      p2: "02 // My Walk",
      p3: "03 // Practices",
      p4: "04 // Learning",
      greeting: "Hi, I'm Kauê!",
      intro: "This space is just a place where I keep and share what I'm learning with God. Nothing perfect, just real. I don't know everything, I'm learning. Here I share what I understand from the Bible along the way. If this helps you in any way, it was already worth it.",
      walk: "“Trying to be consistent, even failing sometimes. Learning to return to God every day.”",
      practices: [
        { title: 'Bible Reading', desc: 'Immersing myself in the Scriptures daily.' },
        { title: 'Prayer', desc: 'Seeking an honest conversation with the Father.' },
        { title: 'Discipline', desc: 'Training the spirit for consistency.' },
        { title: 'Real Pursuit', desc: 'Longing for His presence above all else.' }
      ],
      topics: ['Faith', 'Discipline', 'Personal Struggles', 'Intimacy with God', 'Consistency', 'Grace'],
      mission_title: "Personal Mission",
      mission: "I just want to grow with God and, if possible, help someone along the way.",
      status: "My journey: In construction"
    },
    pt: {
      subtitle: "Aprendendo a viver a Palavra de Deus, um dia de cada vez",
      p1: "01 // Apresentação",
      p2: "02 // Minha Caminhada",
      p3: "03 // Práticas",
      p4: "04 // Aprendizado",
      greeting: "Olá, sou Kauê!",
      intro: "Este espaço é apenas um lugar onde guardo e compartilho o que estou aprendendo com Deus. Nada perfeito, apenas real. Não sei tudo, estou aprendendo. Aqui compartilho o que vou entendendo da Bíblia ao longo do caminho. Se isso te ajudar de alguma forma, já valeu a pena.",
      walk: "“Tentando ser constante, mesmo falhando às vezes. Aprendendo a voltar para Deus todos os dias.”",
      practices: [
        { title: 'Leitura Bíblica', desc: 'Mergulhando nas Escrituras diariamente.' },
        { title: 'Oração', desc: 'Buscando uma conversa honesta com o Pai.' },
        { title: 'Disciplina', desc: 'Treinando o espírito para a constância.' },
        { title: 'Busca Real', desc: 'Ansiando por Sua presença acima de tudo.' }
      ],
      topics: ['Fé', 'Disciplina', 'Lutas pessoais', 'Intimidade com Deus', 'Constância', 'Graça'],
      mission_title: "Missão Pessoal",
      mission: "Só quero crescer com Deus e, se possível, ajudar alguém no caminho.",
      status: "Minha jornada: Em construção"
    }
  };

  const c = content[language];

  return (
    <div className="fixed inset-0 z-[150] bg-[#050505] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0f3826]/40 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="relative w-full max-w-3xl mx-auto flex flex-col min-h-screen z-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 md:fixed md:top-8 md:right-8 p-2.5 text-gray-400 hover:text-white transition-all rounded-full hover:bg-white/10 z-50 bg-[#0a0a0a] border border-white/10 shadow-2xl"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-16 flex flex-col gap-16 pb-32">
          <div className="flex flex-col items-center gap-8 mt-8">
            <div className="relative group cursor-pointer" onClick={() => setIsExpanded(true)}>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#22c55e]/20 to-[#4ade80]/20 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/10 bg-[#0a0a0a]">
                <Image 
                  src="https://lh3.googleusercontent.com/d/15ESWllXvWWNaUEUphfCgcaQYSFXnc9BB" 
                  alt="Kauê" 
                  fill 
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsExpanded(false)}
                  className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-2xl aspect-square rounded-2xl overflow-hidden border border-white/10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image 
                      src="https://lh3.googleusercontent.com/d/15ESWllXvWWNaUEUphfCgcaQYSFXnc9BB" 
                      alt="Kauê expanded" 
                      fill 
                      className="object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <button 
                      onClick={() => setIsExpanded(false)}
                      className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="flex flex-col items-center text-center gap-3">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Kauê</h1>
              <div className="h-px w-12 bg-[#22c55e] opacity-60"></div>
              <p className="text-lg md:text-xl text-gray-400 font-light max-w-md italic">
                &quot;{c.subtitle}&quot;
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-16">
            <section className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="text-[#22c55e] font-mono text-sm tracking-widest uppercase">{c.p1}</span>
                <div className="h-px flex-1 bg-white/5"></div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-medium text-white">{c.greeting}</h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                  {c.intro}
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="text-[#22c55e] font-mono text-sm tracking-widest uppercase">{c.p2}</span>
                <div className="h-px flex-1 bg-white/5"></div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-10">
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic font-light text-center">
                  &quot;{c.walk}&quot;
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="text-[#22c55e] font-mono text-sm tracking-widest uppercase">{c.p3}</span>
                <div className="h-px flex-1 bg-white/5"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {c.practices.map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#22c55e]/30 transition-colors group">
                    <h3 className="text-white font-medium mb-1 group-hover:text-[#22c55e] transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="text-[#22c55e] font-mono text-sm tracking-widest uppercase">{c.p4}</span>
                <div className="h-px flex-1 bg-white/5"></div>
              </div>
              <div className="flex flex-wrap gap-3">
                {c.topics.map((topic) => (
                  <span key={topic} className="px-5 py-2.5 bg-[#0a0a0a] border border-white/10 rounded-full text-sm text-gray-400 hover:text-white hover:border-[#22c55e]/50 transition-all cursor-default">
                    {topic}
                  </span>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-8 pt-8">
              <div className="text-center space-y-4">
                <span className="text-[#22c55e] font-mono text-xs tracking-[0.3em] uppercase">{c.mission_title}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {c.mission}
                </h2>
                <div className="pt-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-xs font-medium uppercase tracking-widest">
                    <Sparkles size={14} /> {c.status}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
