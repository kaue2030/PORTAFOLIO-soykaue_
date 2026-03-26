"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, ArrowUp } from 'lucide-react';
import { CourseCard } from '@/components/CourseCard';
import { Testimonial } from '@/components/ui/design-testimonial';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

export default function MaterialPage() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const currentQuery = query;
    setQuery('');
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData();
    formData.append("respuesta", currentQuery);

    try {
      const scriptUrl = "https://script.google.com/macros/s/AKfycbxViJmvEkvPTADhwF0DMNekYIT6AArwMypRlq0zEL06eWZGqCNl16cQOlEuRhA1IBEAMw/exec";
      await fetch(scriptUrl, {
        method: "POST",
        body: formData,
        mode: 'no-cors'
      });

      setSubmitStatus({
        type: 'success',
        message: language === 'es' ? '¡Gracias por tu respuesta!' : language === 'en' ? 'Thank you for your response!' : 'Obrigado pela sua resposta!'
      });
      
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 4000);

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: language === 'es' ? 'Error de conexión. Inténtalo de nuevo.' : language === 'en' ? 'Connection error. Try again.' : 'Erro de conexão. Tente novamente.'
      });
      setQuery(currentQuery);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#a3e635] selection:text-black pb-24 font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full py-4 px-4 md:px-8 flex items-center justify-between z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <Link href="/" className="relative z-50 flex items-center gap-2 text-gray-300 hover:text-white transition-colors group cursor-pointer">
          <Home size={24} className="group-hover:scale-110 transition-transform" />
          <span className="hidden md:block font-medium text-sm">{t.nav.home}</span>
        </Link>
        <div className="text-xl font-bold tracking-tighter uppercase">
          MATE<span className="text-[#a3e635]">RIAL</span>
        </div>
      </header>

      {/* Hero Section */}
      <Testimonial />

      {/* Categories Rows */}
      <div className="flex flex-col gap-10 md:gap-16 px-4 md:px-12 lg:px-20 mt-12 md:mt-16 relative z-20">
        
        {/* Search Section */}
        <section className="flex flex-col items-center w-full max-w-4xl mx-auto mb-4 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight text-white">
            {language === 'es' ? '¿Qué material necesitas hoy?' : language === 'en' ? 'What material do you need today?' : 'De qual material você precisa hoje?'}
          </h2>
          
          <form onSubmit={handleSubmit} className="w-full bg-[#121212] border border-white/10 rounded-2xl p-3 flex flex-col gap-3 focus-within:border-white/20 transition-colors shadow-2xl">
            <textarea 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={language === 'es' ? 'Escribe aquí tu opinión o lo que necesitas...' : language === 'en' ? 'Write here your opinion or what you need...' : 'Escreva aqui sua opinião ou o que você precisa...'}
              className="w-full bg-transparent text-white placeholder:text-gray-500 outline-none resize-none min-h-[60px] p-2 text-lg"
              rows={1}
              required
            />
            <div className="flex items-center justify-end mt-2">
              <button 
                type="submit"
                disabled={isSubmitting || !query.trim()}
                className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <ArrowUp size={20} />
                )}
              </button>
            </div>
          </form>

          {/* Status Message */}
          {submitStatus.message && (
            <div className={`mt-4 text-sm font-medium ${submitStatus.type === 'success' ? 'text-[#a3e635]' : 'text-red-400'}`}>
              {submitStatus.message}
            </div>
          )}
        </section>

        {/* Row 1: Plantillas Figma */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl font-bold text-white/90 px-2">
            {language === 'es' ? 'Plantillas Figma' : language === 'en' ? 'Figma Templates' : 'Templates do Figma'}
          </h2>
          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 px-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <CourseCard 
              className="w-[240px] md:w-[280px] snap-start"
              title="Dashboard SaaS" 
              author={language === 'es' ? 'Por UI Team' : language === 'en' ? 'By UI Team' : 'Por UI Team'}
              type="PLANTILLA FIGMA"
              bgColor="bg-[#3b82f6]"
              textColor="text-white"
              hrefPrefix="/material"
            />
            <CourseCard 
              className="w-[240px] md:w-[280px] snap-start"
              title="E-commerce App" 
              author={language === 'es' ? 'Por John Doe' : 'By John Doe'}
              type="PLANTILLA FIGMA"
              bgColor="bg-[#8b5cf6]"
              textColor="text-white"
              hrefPrefix="/material"
            />
            <CourseCard 
              className="w-[240px] md:w-[280px] snap-start"
              title="Landing Page Kit" 
              author={language === 'es' ? 'Por Sarah Lee' : 'By Sarah Lee'}
              type="PLANTILLA FIGMA"
              bgColor="bg-[#10b981]"
              textColor="text-white"
              hrefPrefix="/material"
            />
            <CourseCard 
              className="w-[240px] md:w-[280px] snap-start"
              title="Portfolio Minimal" 
              author=""
              type="PLANTILLA FIGMA"
              bgColor="bg-[#f97316]"
              textColor="text-white"
              hrefPrefix="/material"
            />
          </div>
        </section>

        {/* Row 2: Iconos y Assets */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl font-bold text-white/90 px-2">
            {language === 'es' ? 'Iconos y Assets' : language === 'en' ? 'Icons and Assets' : 'Ícones e Assets'}
          </h2>
          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 px-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <CourseCard 
              className="w-[240px] md:w-[280px] snap-start"
              title="Icon Pack 3D" 
              author={language === 'es' ? 'Por Design Studio' : 'By Design Studio'}
              type="ASSETS"
              bgColor="bg-[#e5e5e5]"
              textColor="text-black"
              hrefPrefix="/material"
            />
            <CourseCard 
              className="w-[240px] md:w-[280px] snap-start"
              title="Ilustraciones Flat" 
              author={language === 'es' ? 'Por Jane Smith' : 'By Jane Smith'}
              type="ASSETS"
              bgColor="bg-[#ec4899]"
              textColor="text-white"
              hrefPrefix="/material"
            />
            <CourseCard 
              className="w-[240px] md:w-[280px] snap-start"
              title="Mockups iPhone 16" 
              author={language === 'es' ? 'Por UI Team' : 'By UI Team'}
              type="MOCKUPS"
              bgColor="bg-[#64748b]"
              textColor="text-white"
              hrefPrefix="/material"
            />
          </div>
        </section>

      </div>
    </main>
  );
}
