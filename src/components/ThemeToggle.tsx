import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');

  // Function to get system preference
  const getSystemTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Function to apply theme
  const applyTheme = (newTheme: string) => {
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const systemTheme = getSystemTheme();
      if (systemTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } else {
      if (newTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  };

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme') || 'system';
    setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  // Listen for system preference changes
  useEffect(() => {
    if (!mounted) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted, theme]);

  if (!mounted) {
    return null;
  }

  // Function to cycle through themes: light -> dark -> system -> light
  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  // Determine which icon to show
  const showSunIcon = theme === 'light' || (theme === 'system' && getSystemTheme() === 'light');
  const showMoonIcon = theme === 'dark' || (theme === 'system' && getSystemTheme() === 'dark');
  const showSystemIcon = theme === 'system';

  return (
    <button
      onClick={cycleTheme}
      className="w-10 h-10 bg-white dark:bg-primary rounded-full shadow-md flex items-center justify-center transition-all duration-500 hover:scale-110"
      aria-label={`Current theme: ${theme}. Click to change theme.`}
      title={`Current theme: ${theme}`}
    >
      <div className="relative w-5 h-5">
        {/* Sun */}
        <div
          className={`absolute inset-0 transform transition-transform duration-500 ${
            showSunIcon ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </div>
        {/* Moon */}
        <div
          className={`absolute inset-0 transform transition-transform duration-500 ${
            showMoonIcon ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-dark-text"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </div>
        {/* System (only visible when in system mode) */}
        {showSystemIcon && (
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <span className="text-xs font-bold">OS</span>
          </div>
        )}
      </div>
    </button>
  );
}