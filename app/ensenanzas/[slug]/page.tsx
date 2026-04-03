'use client';

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronRight, Play } from 'lucide-react';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export default function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug.toLowerCase();
  
  const isCristologia = slug === 'cristologia';
  const isBuscarADios = slug === 'que-significa-buscar-a-dios';

  return (
    <main className="min-h-screen bg-[#f5f4f3] text-black overflow-hidden selection:bg-[#a3e635]/30">
      {/* Minimal Back Button */}
      <div className="fixed top-6 left-4 md:left-8 z-[60]">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm md:text-base">Inicio</span>
        </Link>
      </div>

      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-[#f5f4f3]">
        <ProgressiveBlur position="top" backgroundColor="#f5f4f3" height="80px" />
        <ProgressiveBlur position="bottom" backgroundColor="#f5f4f3" height="80px" />

        <div className="flex h-full w-full flex-col items-center overflow-y-auto pt-8 md:pt-12 scroll-smooth">
          <div className="mt-6 md:mt-10 grid content-start justify-items-center gap-4 md:gap-6 text-center text-black">
            <span className="relative max-w-[15ch] text-[10px] md:text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-5 md:after:h-6 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
              ENSEÑANZA BÍBLICA<br />{isCristologia ? 'DE CRISTOLOGÍA' : isBuscarADios ? 'DE BUSCAR A DIOS' : ''}
            </span>
          </div>

          <div 
            className="mt-6 md:mt-10 w-full max-w-3xl px-4 md:px-12 pb-40 transition-transform duration-300 ease-out origin-top"
          >
            {isCristologia ? (
              <CristologiaContent />
            ) : isBuscarADios ? (
              <BuscarADiosContent />
            ) : (
              <div className="text-center text-gray-500 mt-20">Contenido no encontrado.</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function BuscarADiosContent() {
  return (
    <article className="space-y-8 md:space-y-12 pb-20">
      <div className="text-center space-y-2">
        <h1 className="text-xl md:text-2xl font-bold text-black tracking-widest uppercase">
          Enseñanza Bíblica
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tighter uppercase">
          Qué Significa Buscar a Dios
        </h2>
      </div>

      <div className="max-w-xl mx-auto space-y-8 text-black">
        <p className="text-sm md:text-base leading-relaxed text-black/70 italic border-l-2 border-black/10 pl-6 py-2 text-justify">
          Buscar a Dios no es encontrar algo que está perdido, sino <span className="font-bold text-black">orientar toda nuestra vida</span> hacia Su presencia. Es un acto de la voluntad, del corazón y de la mente que reconoce nuestra necesidad absoluta de Él. Como dice el Salmo 105:4: <span className="bg-yellow-200/80 px-1 rounded-sm font-bold text-black">&quot;Buscad a Jehová y su poder; buscad siempre su rostro.&quot;</span> Esta búsqueda transforma nuestra identidad y nuestro propósito.
        </p>

        <section className="space-y-4">
          <h3 className="font-bold text-lg md:text-xl uppercase tracking-wider">
            Puntos Clave
          </h3>
          <ul className="pl-6 space-y-2 text-sm md:text-base text-black/70 list-disc">
            <li>Reconocer nuestra sed espiritual</li>
            <li>La importancia de la oración constante</li>
            <li>Encontrar a Dios en Su Palabra</li>
            <li>Vivir en obediencia por amor</li>
          </ul>
        </section>
      </div>

      {/* Resources Section */}
      <div className="mt-20 pt-10 border-t border-black/5 space-y-6">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-black/30 text-center">Material de Apoyo</h3>
        <div className="grid grid-cols-1 gap-4">
          <a 
            href="https://drive.google.com/file/d/1JiktR1HOTpVSBGk5SDHo1vPEM7cUa1XZ/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-2xl bg-black/[0.02] border border-black/5 hover:bg-black/[0.05] transition-all group"
          >
            <div className="relative w-20 h-12 rounded-lg overflow-hidden bg-gray-200 shrink-0">
              <Image 
                src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=200&h=120&fit=crop" 
                alt="Buscar a Dios" 
                fill 
                className="object-cover opacity-60 group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center">
                  <Play size={10} fill="black" className="ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-1 right-1 bg-red-600 text-[7px] font-bold px-1 rounded-sm text-white">
                PDF
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-black group-hover:text-[#a3e635] transition-colors uppercase tracking-tight">
                Qué Significa Buscar a Dios
              </span>
              <span className="text-[9px] text-black/40 font-mono uppercase tracking-widest">Documento PDF</span>
            </div>
          </a>
        </div>
      </div>
    </article>
  );
}

function CristologiaContent() {
  return (
    <article className="space-y-8 md:space-y-12 pb-20">
      <div className="text-center space-y-2">
        <h1 className="text-xl md:text-2xl font-bold text-black tracking-widest uppercase">
          Enseñanza Bíblica
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tighter uppercase">
          Cristología
        </h2>
      </div>

      <div className="max-w-xl mx-auto space-y-8 text-black">
        <p className="text-sm md:text-base leading-relaxed text-black/70 italic border-l-2 border-black/10 pl-6 py-2 text-justify">
          La <span className="font-bold text-black">Cristología</span> es el estudio bíblico de quién es Jesucristo. Enseña que Jesús es <span className="bg-yellow-200/80 px-1 rounded-sm font-bold text-black">verdadero Dios</span> (Juan 1:1) y <span className="bg-yellow-200/80 px-1 rounded-sm font-bold text-black">verdadero hombre</span> (Hebreos 2:17): nació de una virgen (Mateo 1:23), vivió sin pecado (Hebreos 4:15), murió en la cruz por nuestros pecados (1 Corintios 15:3), resucitó al tercer día (1 Corintios 15:4) y ahora gobierna como Señor (Filipenses 2:9-11). Él es el centro de la fe cristiana, el Salvador del mundo y el <span className="bg-yellow-200/80 px-1 rounded-sm font-bold text-black">único mediador</span> entre Dios y los hombres (1 Timoteo 2:5).
        </p>

        <section>
          <Link href="/ensenanzas/cristologia/introduccion" className="group block">
            <h3 className="font-bold text-lg md:text-xl uppercase tracking-wider mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-2">
              Introducción
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </Link>
        </section>

        <section className="space-y-4">
          <Link href="/ensenanzas/cristologia/deidad" className="group block">
            <h3 className="font-bold text-lg md:text-xl uppercase tracking-wider group-hover:text-blue-600 transition-colors flex items-center gap-2">
              I. La Deidad de Cristo
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </Link>
          <ul className="pl-6 space-y-1 text-sm md:text-base text-black/70">
            <li>La realidad de las dos naturalezas</li>
            <li>La integridad de las dos naturalezas</li>
            <li>La unión de las dos naturalezas en una sola persona</li>
            <li className="font-bold text-black">Importancia de esta doctrina para la Iglesia.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <Link href="/ensenanzas/cristologia/encarnacion" className="group block">
            <h3 className="font-bold text-lg md:text-xl uppercase tracking-wider group-hover:text-blue-600 transition-colors flex items-center gap-2">
              II. La Encarnación de Cristo
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </Link>
          <ul className="pl-6 space-y-1 text-sm md:text-base text-black/70">
            <li>Antes de la encarnación</li>
            <li>Después de la encarnación</li>
            <li>Cristo es Dios y Hombre al 100%</li>
            <li>La doble naturaleza de Cristo</li>
          </ul>
        </section>

        <section className="space-y-4">
          <Link href="/ensenanzas/cristologia/nombres" className="group block">
            <h3 className="font-bold text-lg md:text-xl uppercase tracking-wider group-hover:text-blue-600 transition-colors flex items-center gap-2">
              III. Los Nombres Divinos de Cristo
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </Link>
          <ul className="pl-6 space-y-1 text-sm md:text-base text-black/70">
            <li>Se le llama Dios</li>
            <li>Se le llama Señor</li>
            <li>Se le llama el Primero y el Último</li>
            <li>Cristo, el Ungido de Jehová</li>
          </ul>
        </section>

        <section className="space-y-4">
          <Link href="/ensenanzas/cristologia/atributos" className="group block">
            <h3 className="font-bold text-lg md:text-xl uppercase tracking-wider group-hover:text-blue-600 transition-colors flex items-center gap-2">
              IV. Los Atributos Divinos de Cristo
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </Link>
          <ul className="pl-6 space-y-1 text-sm md:text-base text-black/70">
            <li>Omnipotencia</li>
            <li>Omnipresencia</li>
            <li>Omnisciencia</li>
          </ul>
        </section>

        <section className="space-y-4">
          <Link href="/ensenanzas/cristologia/propiedades" className="group block">
            <h3 className="font-bold text-lg md:text-xl uppercase tracking-wider group-hover:text-blue-600 transition-colors flex items-center gap-2">
              V. Propiedades Divinas de Cristo
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </Link>
          <ul className="pl-6 space-y-1 text-sm md:text-base text-black/70">
            <li>Su propia existencia</li>
            <li>Su inmutabilidad</li>
            <li>Su infinitud</li>
            <ul className="pl-6 space-y-1">
              <li>a. Su absoluta perfección</li>
              <li>b. Su eternidad</li>
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
          <span>Iniciar</span>
          <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Resources Section */}
      <div className="mt-20 pt-10 border-t border-black/5 space-y-6">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-black/30 text-center">Material de Apoyo</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a 
            href="https://drive.google.com/file/d/1jow-NcylPCJpzE-1Kntu_OkFQmnyO8tj/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-2xl bg-black/[0.02] border border-black/5 hover:bg-black/[0.05] transition-all group"
          >
            <div className="relative w-20 h-12 rounded-lg overflow-hidden bg-gray-200 shrink-0">
              <Image 
                src="https://images.unsplash.com/photo-1544640808-32ca72ac7f37?q=80&w=200&h=120&fit=crop" 
                alt="Apuntes" 
                fill 
                className="object-cover opacity-60 group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center">
                  <Play size={10} fill="black" className="ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-1 right-1 bg-red-600 text-[7px] font-bold px-1 rounded-sm text-white">
                PDF
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-black group-hover:text-[#a3e635] transition-colors uppercase tracking-tight">
                Apuntes Cristología
              </span>
              <span className="text-[9px] text-black/40 font-mono uppercase tracking-widest">Documento PDF</span>
            </div>
          </a>

          <a 
            href="https://drive.google.com/file/d/1AN6cHgdxFvuFMxL9BdOs_H8KYvL-49Sb/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-2xl bg-black/[0.02] border border-black/5 hover:bg-black/[0.05] transition-all group"
          >
            <div className="relative w-20 h-12 rounded-lg overflow-hidden bg-gray-200 shrink-0">
              <Image 
                src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=200&h=120&fit=crop" 
                alt="Enseñanza" 
                fill 
                className="object-cover opacity-60 group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center">
                  <Play size={10} fill="black" className="ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-1 right-1 bg-red-600 text-[7px] font-bold px-1 rounded-sm text-white">
                PDF
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-black group-hover:text-[#a3e635] transition-colors uppercase tracking-tight">
                Enseñanza Bíblica
              </span>
              <span className="text-[9px] text-black/40 font-mono uppercase tracking-widest">Documento PDF</span>
            </div>
          </a>
        </div>
      </div>
    </article>
  );
}
