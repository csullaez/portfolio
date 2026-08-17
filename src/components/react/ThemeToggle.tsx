import { useState, useEffect, useCallback } from 'react';

declare global {
  interface Window {
    __theme?: 'dark' | 'light';
  }
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = window.__theme;
    const isDarkMode = theme === 'dark' || document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => {
      const newIsDark = !prev;
      document.documentElement.classList.toggle('dark', newIsDark);
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
      window.__theme = newIsDark ? 'dark' : 'light';
      return newIsDark;
    });
  }, []);

  if (!mounted) {
    return (
      <button className="w-14 h-7 bg-slate-200 rounded-full p-1">
        <div className="w-5 h-5 rounded-full bg-white shadow-md" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-slate-200 dark:bg-slate-700 rounded-full p-1 transition-colors duration-200 hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <div
        className={`w-5 h-5 rounded-full shadow-md transform transition-all duration-200 flex items-center justify-center ${
          isDark ? 'translate-x-7 bg-accent' : 'translate-x-0 bg-white'
        }`}
      >
        {isDark ? (
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </div>
    </button>
  );
}
