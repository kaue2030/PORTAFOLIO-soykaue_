"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

export function CourseCard({ 
  title, 
  author, 
  type, 
  bgColor, 
  textColor, 
  imageSrc,
  status,
  className = "",
  hrefPrefix = "/ensenanzas"
}: { 
  title: string, 
  author: string, 
  type: string, 
  bgColor: string, 
  textColor: string, 
  imageSrc?: string,
  status?: 'completed' | 'empty' | 'coming-soon',
  className?: string,
  hrefPrefix?: string
}) {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`block ${className}`}><div className="w-full aspect-[3/4] bg-white/5 rounded-xl animate-pulse" /></div>;
  }

  const t = translations[language];

  const slug = title.toLowerCase().replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9-]/g, '');
  
  // Use a default image based on the title if no imageSrc is provided to match the visual style
  const finalImageSrc = imageSrc || `https://picsum.photos/seed/${slug}/400/600`;

  const isClickable = status !== 'empty';

  const CardContent = (
    <div className={`relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg transition-all duration-500 border border-white/10 ${isClickable ? 'cursor-pointer hover:shadow-2xl group' : 'cursor-default opacity-40 grayscale'}`}>
      
      {/* Background Image */}
      <Image 
        src={finalImageSrc} 
        alt={title} 
        fill 
        className={`object-cover transition-transform duration-700 ${isClickable ? 'group-hover:scale-105' : ''}`} 
        referrerPolicy="no-referrer"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-500" />

      {/* Status Badge */}
      {status === 'completed' && (
        <div className="absolute top-4 right-4 bg-[#a3e635] text-black text-[10px] font-bold px-2 py-1 rounded-full z-20 flex items-center gap-1 shadow-lg">
          <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
          {t.courseStatus.completed}
        </div>
      )}

      {status === 'empty' && (
        <div className="absolute top-4 right-4 bg-white/10 text-white/50 text-[10px] font-bold px-2 py-1 rounded-full z-20 border border-white/10">
          {t.courseStatus.empty}
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end items-center text-center z-10">
        <h3 className={`text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-2 transition-all duration-500 ${isClickable ? 'transform translate-y-2 group-hover:translate-y-0' : ''}`}>
          {title}
        </h3>
        {status !== 'empty' && author && (
          <p className={`text-sm text-gray-300 font-medium transition-all duration-500 delay-75 ${isClickable ? 'transform translate-y-2 group-hover:translate-y-0' : ''}`}>
            {author}
          </p>
        )}
      </div>
    </div>
  );

  if (!isClickable) {
    return <div className={`block ${className}`}>{CardContent}</div>;
  }

  return (
    <Link href={`${hrefPrefix}/${slug}`} className={`block ${className}`}>
      {CardContent}
    </Link>
  );
}
