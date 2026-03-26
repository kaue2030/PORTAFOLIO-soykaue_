"use client";

import React, { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle2, Download, Figma, Layers } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';

export default function MaterialItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isFigma = resolvedParams.slug.includes('figma') || resolvedParams.slug.includes('dashboard') || resolvedParams.slug.includes('app') || resolvedParams.slug.includes('kit') || resolvedParams.slug.includes('portfolio');
  
  const translations = {
    es: {
      back: "Volver a Material",
      about: "Acerca de este recurso",
      created: "Creado por",
      download: "Descargar Archivo",
      features: "Características",
      size: "Tamaño",
      format: "Formato",
      figma_title: "Plantilla UI Premium",
      assets_title: "Pack de Assets 3D",
      figma_desc: "Acelera tu flujo de trabajo con esta plantilla premium para Figma. Incluye más de 200 componentes, estilos globales, variables y pantallas listas para usar en tu próximo proyecto.",
      assets_desc: "Un paquete completo de assets 3D de alta calidad para tus proyectos. Incluye iconos, ilustraciones y elementos decorativos listos para usar en web y móvil.",
      f1: ["Componentes Auto Layout", "Sí"],
      f2: ["Variables y Estilos", "Sí"],
      f3: ["Pantallas incluidas", "45+"],
      f4: ["Iconos vectoriales", "100+"],
      f5: ["Actualizaciones", "De por vida"],
      a1: ["Resolución", "4K (3840x2160)"],
      a2: ["Formatos", "PNG transparente, OBJ"],
      a3: ["Elementos únicos", "50+"],
      a4: ["Variantes de color", "3 por elemento"],
      a5: ["Uso comercial", "Permitido"]
    },
    en: {
      back: "Back to Material",
      about: "About this resource",
      created: "Created by",
      download: "Download File",
      features: "Features",
      size: "Size",
      format: "Format",
      figma_title: "Premium UI Template",
      assets_title: "3D Assets Pack",
      figma_desc: "Speed up your workflow with this premium Figma template. Includes over 200 components, global styles, variables, and ready-to-use screens for your next project.",
      assets_desc: "A complete package of high-quality 3D assets for your projects. Includes icons, illustrations, and decorative elements ready for web and mobile use.",
      f1: ["Auto Layout Components", "Yes"],
      f2: ["Variables and Styles", "Yes"],
      f3: ["Included screens", "45+"],
      f4: ["Vector icons", "100+"],
      f5: ["Updates", "Lifetime"],
      a1: ["Resolution", "4K (3840x2160)"],
      a2: ["Formats", "Transparent PNG, OBJ"],
      a3: ["Unique elements", "50+"],
      a4: ["Color variants", "3 per element"],
      a5: ["Commercial use", "Allowed"]
    },
    pt: {
      back: "Voltar para Material",
      about: "Sobre este recurso",
      created: "Criado por",
      download: "Baixar Arquivo",
      features: "Características",
      size: "Tamanho",
      format: "Formato",
      figma_title: "Template UI Premium",
      assets_title: "Pack de Assets 3D",
      figma_desc: "Acelere seu fluxo de trabalho com este template premium para Figma. Inclui mais de 200 componentes, estilos globais, variáveis e telas prontas para usar em seu próximo projeto.",
      assets_desc: "Um pacote completo de assets 3D de alta qualidade para seus projetos. Inclui ícones, ilustrações e elementos decorativos prontos para uso em web e mobile.",
      f1: ["Componentes Auto Layout", "Sim"],
      f2: ["Variáveis e Estilos", "Sim"],
      f3: ["Telas incluídas", "45+"],
      f4: ["Ícones vetoriais", "100+"],
      f5: ["Atualizações", "Vitalícias"],
      a1: ["Resolução", "4K (3840x2160)"],
      a2: ["Formatos", "PNG transparente, OBJ"],
      a3: ["Elementos únicos", "50+"],
      a4: ["Variantes de cor", "3 por elemento"],
      a5: ["Uso comercial", "Permitido"]
    }
  };

  const t = translations[language];

  const materialData = {
    title: isFigma ? t.figma_title : t.assets_title,
    author: isFigma ? "UI Team" : "Design Studio",
    type: isFigma ? "PLANTILLA FIGMA" : "ASSETS",
    size: isFigma ? "120 MB" : "450 MB",
    format: isFigma ? ".fig" : ".png, .obj",
    description: isFigma ? t.figma_desc : t.assets_desc,
    bgColor: isFigma ? "bg-[#3b82f6]" : "bg-[#e5e5e5]",
    textColor: isFigma ? "text-white" : "text-black",
  };

  const features = isFigma ? [
    { title: t.f1[0], detail: t.f1[1] },
    { title: t.f2[0], detail: t.f2[1] },
    { title: t.f3[0], detail: t.f3[1] },
    { title: t.f4[0], detail: t.f4[1] },
    { title: t.f5[0], detail: t.f5[1] },
  ] : [
    { title: t.a1[0], detail: t.a1[1] },
    { title: t.a2[0], detail: t.a2[1] },
    { title: t.a3[0], detail: t.a3[1] },
    { title: t.a4[0], detail: t.a4[1] },
    { title: t.a5[0], detail: t.a5[1] },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#a3e635] selection:text-black pb-24">
      {/* Simple Header */}
      <header className="w-full py-6 px-4 md:px-8 flex items-center justify-between border-b border-white/5 sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50">
        <Link href="/material" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">{t.back}</span>
        </Link>
        <div className="text-xl font-bold tracking-tighter uppercase">
          MATE<span className="text-[#a3e635]">RIAL</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className={`w-full aspect-video rounded-[2rem] overflow-hidden relative flex items-center justify-center border border-white/5 ${materialData.bgColor}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="z-20 flex flex-col items-center gap-4">
                {isFigma ? (
                  <Figma size={64} className={materialData.textColor} strokeWidth={1.5} />
                ) : (
                  <Layers size={64} className={materialData.textColor} strokeWidth={1.5} />
                )}
              </div>
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className={`text-[10px] md:text-xs uppercase tracking-widest font-mono mb-2 ${materialData.textColor} opacity-80`}>
                  {materialData.type}
                </div>
                <h1 className={`text-3xl md:text-5xl font-bold tracking-tight ${materialData.textColor}`}>
                  {materialData.title}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-medium text-white">{t.about}</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {materialData.description}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <div className="bg-[#111] border border-white/5 rounded-[2rem] p-6 md:p-8 flex flex-col gap-6 sticky top-28">
              <div className="flex items-center gap-4 pb-6 border-b border-white/5">
                <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden relative">
                  <Image src="https://picsum.photos/seed/author2/100/100" alt={materialData.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{t.created}</p>
                  <p className="font-medium text-white">{materialData.author}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <FileText size={20} className="text-[#a3e635]" />
                  <span>{materialData.size}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 size={20} className="text-[#a3e635]" />
                  <span>{t.format} {materialData.format}</span>
                </div>
              </div>
              <button className="w-full py-4 rounded-full bg-[#a3e635] text-black font-semibold text-lg hover:bg-[#84cc16] transition-colors flex items-center justify-center gap-2 mt-2">
                <Download size={20} />
                {t.download}
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h3 className="text-xl font-medium text-white mb-2">{t.features}</h3>
              <div className="flex flex-col">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-4 border-b border-white/5 group px-2 rounded-lg transition-colors">
                    <span className="text-gray-300">{item.title}</span>
                    <span className="text-sm font-medium text-white">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
