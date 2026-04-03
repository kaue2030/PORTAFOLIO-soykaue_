"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, User, ArrowUpRight, Home, Bookmark, Plus, Settings, Play } from 'lucide-react';
import { Skiper58 } from '@/components/ui/text-roll-navigation';
import { ProfileModal } from '@/components/ProfileModal';
import { YearCountdown } from '@/components/YearCountdown';
import { FAQ } from '@/components/FAQ';
import { CourseCard } from '@/components/CourseCard';

export default function Page() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden pb-20 font-sans">
      {/* Background Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#0f3826]/50 blur-[140px] rounded-full pointer-events-none -z-20" />

      <div className="max-w-[1100px] mx-auto px-6 pt-8">
        
        {/* Top Navigation */}
        <nav className="flex items-center justify-between gap-2 mb-8 md:mb-24">
          <button 
            onClick={() => setIsProfileOpen(true)}
            className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-full border border-white/10 bg-[#0a0a0a] text-[10px] md:text-sm text-gray-200 hover:bg-white/5 transition-all shrink-0"
          >
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#22c55e] flex items-center justify-center text-black">
              <User size={10} className="md:hidden" strokeWidth={3} />
              <User size={14} className="hidden md:block" strokeWidth={3} />
            </div>
            <span className="hidden sm:inline">Mi Perfil</span>
            <span className="sm:hidden">Perfil</span>
          </button>
          
          <div className="flex-1 flex justify-center">
            <YearCountdown />
          </div>
          
          <div className="w-9 h-9 md:w-11 md:h-11 invisible shrink-0" />
        </nav>

        {/* Hero Section */}
        <div className="relative w-full flex flex-col md:flex-row justify-between items-center mt-4 md:mt-10 mb-16 md:mb-24 md:min-h-[700px]">
          
          {/* Left Text */}
          <div className="relative z-20 w-full md:w-1/3 flex flex-col items-center text-center md:pl-4 mb-8 md:mb-0 h-[137px]">
            <div className="w-12 md:w-16 h-[2px] bg-[#22c55e] mb-4 md:mb-5 opacity-80" />
            <h2 className="w-[370px] h-[165px] text-[28px] font-bold text-center leading-[1.15] text-gray-100 tracking-tight">
              Aprendiendo a vivir la Palabra de Dios,<br />un día a la vez
            </h2>
          </div>

          {/* Center Avatar Container */}
          <div className="relative w-full md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[-60px] flex flex-col items-center z-10">
            <div className="relative w-[280px] h-[380px] sm:w-[450px] sm:h-[600px] md:w-[700px] md:h-[850px] pointer-events-none">
              <Image 
                src="https://lh3.googleusercontent.com/d/15ESWllXvWWNaUEUphfCgcaQYSFXnc9BB" 
                alt="Avatar de Estudio" 
                fill 
                className="object-cover object-top"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 95%)', 
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 95%)' 
                }}
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Name Over Avatar - Mobile specific positioning */}
            <div className="absolute bottom-[5%] md:bottom-[0%] left-1/2 -translate-x-1/2 text-center z-20 w-full flex flex-col items-center select-none pointer-events-none">
              <span className="text-[#4ade80] tracking-[0.6em] md:tracking-[1em] text-[8px] md:text-[14px] font-bold uppercase mb-[-5px] md:mb-[-20px] ml-2 md:ml-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"></span>
              <h1 className="text-[50px] sm:text-[120px] md:text-[220px] font-[family-name:var(--font-montserrat)] font-bold tracking-[-0.06em] leading-none uppercase bg-gradient-to-b from-[#ffffff] via-[#e5e5e5] to-[#737373] bg-clip-text text-transparent drop-shadow-2xl">
                
              </h1>
            </div>
          </div>

          {/* Right Text */}
          <div className="relative z-20 w-full md:w-1/3 flex justify-center md:justify-end text-center md:pr-4 mt-8 md:mt-0">
            <p className="text-[#d4d4d8] text-[14px] text-center leading-[18.4px] ml-[-4px] w-[400px] max-w-full font-light">
              No lo sé todo, estoy aprendiendo. Aquí comparto lo que voy entendiendo de la Biblia a lo largo del camino. Si esto te ayuda de alguna forma, ya valió la pena.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-12 md:mb-16" />

        {/* About Section */}
        <div className="max-w-[900px] mb-12 md:mb-20">
          <h2 className="text-[26px] sm:text-3xl md:text-[40px] font-medium text-white mb-4 md:mb-6 leading-[1.2] tracking-tight">
            Creciendo en la fe, paso a paso
          </h2>
          <p className="text-white text-[14px] leading-[18.8px] max-w-[1000px]">
            Este espacio es solo un lugar donde guardo y comparto lo que estoy aprendiendo con Dios. Nada perfecto, solo real. Mi intención es simplemente crecer con Dios y, si es posible, ayudar a alguien en el camino.
          </p>
        </div>

        {/* Material de estudio Section */}
        <div id="ensenanzas" className="mb-24 md:mb-32 scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-10 gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-5xl font-medium text-white tracking-tight uppercase">MATERIAL DE ESTUDIO</h2>
              <p className="text-[#a1a1aa] text-base md:text-lg">Mi proceso con la Palabra</p>
              <Link href="/ensenanzas" className="text-[#a3e635] text-sm md:text-base hover:underline flex items-center gap-1 mt-2">
                Ver todo el material <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="flex gap-4 text-[12px] md:text-sm text-gray-400 font-medium">
              <span className="text-[#a3e635]">Todos</span>
              <span className="hidden sm:inline opacity-50">—</span>
              <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">Cursos</span>
              <span className="hidden sm:inline opacity-50">—</span>
              <span className="hidden sm:inline hover:text-white cursor-pointer transition-colors">Libros</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <CourseCard 
              title="CRISTOLOGÍA" 
              author=""
              type="CURSO"
              imageSrc="https://lh3.googleusercontent.com/d/1X1l4CaRCY1E6wxSyVoX1iI2RMFilJs5U"
              bgColor="bg-transparent"
              textColor="text-white"
              status="completed"
            />
            <CourseCard 
              title="QUÉ SIGNIFICA BUSCAR A DIOS" 
              author=""
              type="CURSO"
              imageSrc="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=400&h=600&fit=crop"
              bgColor="bg-transparent"
              textColor="text-white"
              status="completed"
            />
            <CourseCard 
              title="TEOLOGÍA" 
              author=""
              type="CURSO"
              imageSrc="https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=400&h=600&fit=crop"
              bgColor="bg-transparent"
              textColor="text-white"
              status="empty"
            />
            <CourseCard 
              title="ECLESIOLOGÍA" 
              author=""
              type="CURSO"
              imageSrc="https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=400&h=600&fit=crop"
              bgColor="bg-transparent"
              textColor="text-white"
              status="empty"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />

        {/* Footer / Contact */}
        <div className="flex flex-col items-center justify-center text-center pb-10">
          <h3 className="text-lg md:text-xl font-medium text-white mb-6 md:mb-8">Contáctame</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            <SocialIcon type="instagram" label="Instagram" href="https://www.instagram.com/soykaue_/" />
            <SocialIcon type="x" label="X" href="https://x.com/soykaue_" />
            <SocialIcon type="church" label="Mi Iglesia" href="https://admmadureira.netlify.app" />
          </div>
        </div>

      </div>

      {/* Profile Modal */}
      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </main>
  );
}

function SocialIcon({ type, label, href = "#" }: { type: string, label: string, href?: string }) {
  const getIcon = () => {
    switch (type) {
      case 'gmail':
        return (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#EA4335"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="#E1306C" strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" stroke="#E1306C" strokeWidth="2"/>
            <circle cx="17.5" cy="6.5" r="1.5" fill="#E1306C"/>
          </svg>
        );
      case 'whatsapp':
        return (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.01 2.01C6.49 2.01 2.01 6.49 2.01 12.01C2.01 13.78 2.47 15.45 3.28 16.91L2 22L7.23 20.75C8.68 21.53 10.31 22 12.01 22C17.53 22 22.01 17.52 22.01 12.01C22.01 6.49 17.53 2.01 12.01 2.01ZM17.13 16.34C16.91 16.96 15.65 17.47 15.01 17.54C14.54 17.59 13.88 17.65 11.51 16.67C8.48 15.42 6.52 12.33 6.37 12.13C6.22 11.93 5.12 10.47 5.12 8.95C5.12 7.43 5.89 6.69 6.2 6.37C6.46 6.1 6.89 5.96 7.3 5.96C7.43 5.96 7.55 5.97 7.66 5.97C7.96 5.97 8.11 5.99 8.31 6.47C8.56 7.08 9.17 8.57 9.24 8.72C9.32 8.87 9.42 9.08 9.32 9.28C9.22 9.48 9.12 9.6 8.97 9.78C8.82 9.96 8.65 10.18 8.52 10.31C8.37 10.46 8.22 10.62 8.39 10.92C8.56 11.22 9.16 12.2 10.05 12.99C11.19 14.01 12.12 14.33 12.45 14.47C12.75 14.6 13.1 14.57 13.3 14.35C13.55 14.08 13.88 13.58 14.2 13.08C14.45 12.68 14.8 12.73 15.15 12.86C15.5 12.98 17.36 13.9 17.71 14.08C18.06 14.25 18.29 14.34 18.39 14.51C18.49 14.68 18.49 15.51 17.13 16.34Z" fill="#25D366"/>
          </svg>
        );
      case 'x':
        return (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.083 4.126H5.117L17.083 19.77Z" fill="#FFFFFF"/>
          </svg>
        );
      case 'church':
        return (
          <div className="relative w-6 h-6 rounded-full overflow-hidden">
            <Image 
              src="https://lh3.googleusercontent.com/d/1EAego3HN68v7oLwB7FHEiBPtHybElBAo" 
              alt="Logo Iglesia" 
              fill 
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        );
      case 'pinterest':
        return (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.017 2C6.478 2 2 6.478 2 12.017C2 16.27 4.654 19.929 8.423 21.353C8.35 20.563 8.284 19.349 8.452 18.491C8.604 17.718 9.435 14.202 9.435 14.202C9.435 14.202 9.183 13.698 9.183 12.956C9.183 11.787 9.86 10.912 10.705 10.912C11.423 10.912 11.772 11.451 11.772 12.096C11.772 12.818 11.312 13.894 11.07 14.893C10.867 15.729 11.489 16.411 12.316 16.411C13.808 16.411 14.966 14.836 14.966 12.569C14.966 10.534 13.503 9.07 11.237 9.07C8.618 9.07 7.058 11.035 7.058 13.336C7.058 14.058 7.336 14.831 7.708 15.263C7.78 15.348 7.788 15.42 7.766 15.506C7.694 15.793 7.536 16.431 7.5 16.581C7.45 16.782 7.321 16.832 7.113 16.739C5.748 16.102 4.852 14.398 4.852 12.812C4.852 9.425 7.314 6.368 11.531 6.368C14.922 6.368 17.536 8.781 17.536 12.067C17.536 15.436 15.416 18.114 12.438 18.114C11.449 18.114 10.511 17.6 10.188 17.034C10.188 17.034 9.693 18.917 9.564 19.411C9.349 20.235 8.783 21.288 8.36 21.947C9.506 22.291 10.739 22.484 12.017 22.484C17.556 22.484 22.034 18.006 22.034 12.467C22.034 6.928 17.556 2.45 12.017 2.45V2Z" fill="#E60023"/>
          </svg>
        );
      case 'behance':
        return (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.13 10.82C10.02 10.61 10.6 10.15 10.6 9.17C10.6 7.69 9.49 7.15 7.85 7.15H3.5V16.85H8.16C10.13 16.85 11.19 15.93 11.19 14.36C11.19 12.88 10.3 12.12 9.13 10.82ZM6.03 9.04H7.66C8.36 9.04 8.85 9.21 8.85 9.85C8.85 10.51 8.36 10.68 7.66 10.68H6.03V9.04ZM7.89 14.96H6.03V12.43H7.89C8.74 12.43 9.3 12.63 9.3 13.69C9.3 14.76 8.74 14.96 7.89 14.96ZM16.03 11.23C14.49 11.23 13.56 12.42 13.56 14.02C13.56 15.65 14.54 16.85 16.14 16.85C17.43 16.85 18.25 16.16 18.48 15.02H16.79C16.66 15.42 16.37 15.58 16.08 15.58C15.51 15.58 15.34 15.08 15.32 14.53H18.63C18.66 12.55 17.65 11.23 16.03 11.23ZM15.34 13.43C15.41 12.75 15.67 12.42 16.05 12.42C16.42 12.42 16.66 12.72 16.71 13.43H15.34ZM14.4 9.85H17.72V8.48H14.4V9.85Z" fill="#FFFFFF"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
      <div className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center group-hover:bg-white/5 transition-colors">
        {getIcon()}
      </div>
      <span className="text-[10px] text-gray-500 font-medium tracking-wider group-hover:text-gray-300 transition-colors">{label}</span>
    </a>
  );
}
