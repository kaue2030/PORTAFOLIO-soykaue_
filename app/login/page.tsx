'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Lock } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { translations } from '@/hooks/translations';

export default function LoginPage() {
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState(false);
  const { login, language, isAdmin } = useLanguage();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isAdmin) {
      router.push('/');
    }
  }, [isAdmin, router]);

  if (!mounted) return null;

  const t = translations[language].admin;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(userInput);
    if (success) {
      router.push('/');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6">
      <div className="fixed top-8 left-8">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>{t.back}</span>
        </Link>
      </div>

      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-4">
            <Lock size={24} className="text-[#a3e635]" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight uppercase">{t.adminUser}</h1>
          <p className="text-gray-500 text-sm">{t.onlyAdmin}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <input
              type="password"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={t.passwordPlaceholder}
              className={`w-full px-6 py-4 bg-white/5 border rounded-2xl outline-none transition-all text-center text-lg tracking-widest ${
                error ? 'border-red-500 bg-red-500/10' : 'border-white/10 focus:border-[#a3e635]/50 focus:bg-white/10'
              }`}
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-xs text-center font-bold uppercase tracking-widest animate-shake">
                {t.error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#a3e635] text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest"
          >
            {t.login}
          </button>
        </form>
      </div>
    </main>
  );
}
