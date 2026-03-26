"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage, Language } from "@/hooks/use-language";
import { translations } from "@/hooks/translations";

const cn = (...arr: Array<string | false | null | undefined>) =>
  arr.filter(Boolean).join(" ");

const STAGGER_VAL = 0.035;

export const TextRoll: React.FC<{
  children: string;
  className?: string;
  center?: boolean;
}> = ({ children, className, center = false }) => (
  <motion.span
    initial="initial"
    whileHover="hovered"
    className={cn("relative block overflow-hidden", className)}
    style={{ lineHeight: 1.15 }}
    aria-label={children}
  >
    <div>
      {children.split("").map((l, i) => {
        const delay = center
          ? STAGGER_VAL * Math.abs(i - (children.length - 1) / 2)
          : STAGGER_VAL * i;
        return (
          <motion.span
            key={`top-${i}`}
            className="inline-block"
            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
            transition={{ ease: "easeInOut", delay }}
          >
            {l}
          </motion.span>
        );
      })}
    </div>

    <div className="absolute inset-0">
      {children.split("").map((l, i) => {
        const delay = center
          ? STAGGER_VAL * Math.abs(i - (children.length - 1) / 2)
          : STAGGER_VAL * i;
        return (
          <motion.span
            key={`bot-${i}`}
            className="inline-block"
            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
            transition={{ ease: "easeInOut", delay }}
          >
            {l}
          </motion.span>
        );
      })}
    </div>
  </motion.span>
);

export const Skiper58: React.FC<{ className?: string; onItemClick?: () => void }> = ({ className, onItemClick }) => {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const t = translations[language].nav;

  const navigationItems = [
    { name: t.home, href: "/", description: "" },
    { name: t.teachings, href: "/ensenanzas", description: "" },
    { name: t.material, href: "/material", description: "" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português' },
  ];

  return (
    <div className="flex flex-col items-center gap-12">
      <ul
        className={cn(
          "flex flex-col items-center justify-center gap-4",
          className
        )}
      >
        {navigationItems.map((item, index) => (
          <li className="relative flex flex-col items-center" key={index}>
            <a
              href={item.href}
              onClick={onItemClick}
              className="group relative block cursor-pointer select-none"
              aria-label={item.name}
            >
              <TextRoll
                center
                className="text-4xl md:text-7xl font-extrabold uppercase tracking-[-0.03em] transition-colors text-white"
              >
                {item.name}
              </TextRoll>
              <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-current transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* Language Selector in Menu */}
      <div className="flex flex-col items-center gap-4">
        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Idioma / Language</span>
        <div className="flex gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={cn(
                "px-4 py-2 rounded-full border text-xs font-bold transition-all",
                language === lang.code
                  ? "border-[#a3e635] text-[#a3e635] bg-[#a3e635]/10"
                  : "border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
