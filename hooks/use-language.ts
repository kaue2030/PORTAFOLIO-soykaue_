import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'es' | 'en' | 'pt';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  isAdmin: boolean;
  isEditorMode: boolean;
  login: (user: string) => boolean;
  logout: () => void;
  toggleEditorMode: () => void;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'es',
      setLanguage: (lang: Language) => set({ language: lang }),
      isAdmin: false,
      isEditorMode: false,
      login: (user: string) => {
        if (user === 'ADMIN2025') {
          set({ isAdmin: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAdmin: false, isEditorMode: false }),
      toggleEditorMode: () => set((state) => ({ isEditorMode: state.isAdmin ? !state.isEditorMode : false })),
    }),
    {
      name: 'language-storage',
    }
  )
);
