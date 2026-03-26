"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { CourseCard } from '@/components/CourseCard';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

export default function EnsenanzasPage() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const t = translations[language];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#a3e635] selection:text-black pb-24 font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full py-4 px-4 md:px-8 flex items-center justify-between z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <Link href="/" className="relative z-50 flex items-center gap-2 text-gray-300 hover:text-white transition-colors group cursor-pointer">
          <Home size={24} className="group-hover:scale-110 transition-transform" />
          <span className="hidden md:block font-medium text-sm">{t.nav.home}</span>
        </Link>
        <div className="text-xl font-bold tracking-tighter uppercase">
          {t.sections.studyMaterial.split(' ')[0]} <span className="text-[#a3e635]">{t.sections.studyMaterial.split(' ')[1] || ''}</span> {t.sections.studyMaterial.split(' ').slice(2).join(' ')}
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-start px-4 md:px-12 lg:px-20 overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 bg-[#f97316] opacity-20" />
        
        {/* Right Image */}
        <div className="absolute right-[-20%] md:right-[5%] lg:right-[10%] bottom-0 w-[120%] md:w-[60%] lg:w-[45%] h-[80%] md:h-[95%] flex justify-end items-end pointer-events-none opacity-80 md:opacity-100">
          <div className="relative w-full h-full">
            <Image 
              src="https://lh3.googleusercontent.com/d/15ESWllXvWWNaUEUphfCgcaQYSFXnc9BB" 
              alt="Avatar"
              fill 
              className="object-cover object-top"
              style={{ 
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)', 
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)' 
              }}
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent" />
        
        <div className="relative z-10 max-w-2xl flex flex-col gap-4 mt-20">
          <div className="text-[#a3e635] font-mono text-sm tracking-widest uppercase font-bold">
            {language === 'es' ? 'NUEVO LANZAMIENTO' : language === 'en' ? 'NEW RELEASE' : 'NOVO LANÇAMENTO'}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase whitespace-pre-line">
            {t.sections.studyMaterial.replace(' ', '\n')}
          </h1>
          <p className="text-[15px] text-justify leading-relaxed text-gray-300 mt-4 max-w-md">
            {language === 'es'
              ? 'Este espacio reúne reflexiones, anotaciones y aprendizajes que forman parte de mi caminar con Dios. No desde una posición de enseñanza, sino como un registro del proceso y un retorno constante a la Biblia.'
              : language === 'en'
              ? 'This space gathers reflections, notes, and learnings that are part of my walk with God. Not from a teaching position, but as a record of the process and a constant return to the Bible.'
              : 'Este espaço reúne reflexões, anotações e aprendizados que fazem parte da minha caminhada com Deus. Não a partir de uma posição de ensino, mas como um registro do processo e um retorno constante à Bíblia.'}
          </p>
        </div>
      </div>

      {/* Categories Rows */}
      <div className="flex flex-col gap-10 md:gap-16 px-4 md:px-12 lg:px-20 -mt-8 md:-mt-12 relative z-20">
        <section className="flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl font-bold text-white/90 px-2 uppercase tracking-tight">
            {language === 'es' ? 'Cursos Disponibles' : language === 'en' ? 'Available Courses' : 'Cursos Disponíveis'}
          </h2>
          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 px-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <CourseCard 
              className="w-[200px] md:w-[280px] shrink-0 snap-start"
              title="CRISTOLOGÍA" 
              author=""
              type="CURSO"
              imageSrc="https://lh3.googleusercontent.com/d/1X1l4CaRCY1E6wxSyVoX1iI2RMFilJs5U"
              bgColor="bg-transparent"
              textColor="text-white"
              status="completed"
            />
            <CourseCard 
              className="w-[200px] md:w-[280px] shrink-0 snap-start"
              title="BIBLIOLOGÍA" 
              author=""
              type="CURSO"
              imageSrc="https://lh3.googleusercontent.com/d/1-CPOYyNFrKKkeGEgj33CbazTA2rRShHL"
              bgColor="bg-transparent"
              textColor="text-white"
              status="empty"
            />
            <CourseCard 
              className="w-[200px] md:w-[280px] shrink-0 snap-start"
              title="TEOLOGÍA" 
              author=""
              type="CURSO"
              imageSrc="https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=400&h=600&fit=crop"
              bgColor="bg-transparent"
              textColor="text-white"
              status="empty"
            />
            <CourseCard 
              className="w-[200px] md:w-[280px] shrink-0 snap-start"
              title="ECLESIOLOGÍA" 
              author=""
              type="CURSO"
              imageSrc="https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=400&h=600&fit=crop"
              bgColor="bg-transparent"
              textColor="text-white"
              status="empty"
            />
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl font-bold text-white/90 px-2 uppercase tracking-tight">
            {t.courseStatus.empty}
          </h2>
          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 px-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <CourseCard 
              className="w-[200px] md:w-[280px] shrink-0 snap-start"
              title="NEUMATOLOGÍA" 
              author=""
              type="CURSO"
              imageSrc="https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?q=80&w=400&h=600&fit=crop"
              bgColor="bg-transparent"
              textColor="text-white"
              status="empty"
            />
            <CourseCard 
              className="w-[200px] md:w-[280px] shrink-0 snap-start"
              title="ESCATOLOGÍA" 
              author=""
              type="CURSO"
              imageSrc="https://images.unsplash.com/photo-1505506819717-0bd151475301?q=80&w=400&h=600&fit=crop"
              bgColor="bg-transparent"
              textColor="text-white"
              status="empty"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
