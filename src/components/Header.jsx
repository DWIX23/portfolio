import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // you can install with: npm install lucide-react
import useDarkMode from '../hooks/useDarkMode';
import { Moon, Sun } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <header className="bg-white dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Darwin's Portfolio</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contacts</a></li>
          <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className={ `relative w-14 h-7 flex items-center rounded-full px-1 transition-colors duration-300 
                ${darkMode ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-900' : ''}
                ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
            >
            <span className="absolute left-1 text-xs text-yellow-400">
                <Sun className="w-3 h-3" />
            </span>
            <span className="absolute right-1 text-xs text-white">
                <Moon className="w-3 h-3" />
            </span>
            <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out
                ${darkMode ? 'translate-x-7' : 'translate-x-0'}`}
            />
            </button>

          </li>
        </ul>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile side drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 p-6 shadow-lg transform transition-transform duration-300 z-50 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-6">
            <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Contacts</a></li>
            <li className="mt-4">
              <span className="block mb-1 text-sm">Dark Mode</span>
              <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className={ `relative w-14 h-7 flex items-center rounded-full px-1 transition-colors duration-300 
                ${darkMode ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-900' : ''}
                ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
            >
            <span className="absolute left-1 text-xs text-yellow-400">
                <Sun className="w-3 h-3" />
            </span>
            <span className="absolute right-1 text-xs text-white">
                <Moon className="w-3 h-3" />
            </span>
            <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out
                ${darkMode ? 'translate-x-7' : 'translate-x-0'}`}
            />
            </button>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;
