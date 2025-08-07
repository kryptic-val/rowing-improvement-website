import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-gray-700 dark:to-gray-800 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative flex h-8 w-18 items-center justify-between rounded-full bg-white dark:bg-gray-900 px-1 transition-all duration-300">
        <div
          className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-300 ${
            isDark ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
        <SunIcon className="relative z-10 h-4 w-4 text-yellow-600 transition-colors duration-300" />
        <MoonIcon className="relative z-10 h-4 w-4 text-blue-600 transition-colors duration-300" />
      </div>
    </button>
  );
};

export default ThemeToggle;
