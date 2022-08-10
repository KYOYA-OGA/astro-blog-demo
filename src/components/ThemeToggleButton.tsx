import React, { useEffect, useState } from 'react';

const ThemeToggleButton: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={handleThemeToggle}
      className="text-xl md:text-2xl bg-gray-400 p-2 lg:py-2 lg:px-3 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
    >
      {theme === 'light' ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggleButton;
