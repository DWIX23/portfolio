import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Briefcase, Moon, Sun } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Darwin's Portfolio</h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 items-center transition-colors duration-0 delay-0">
          <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-0 delay-0">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-0 delay-0">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-0 delay-0">Contacts</a></li>
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className={`relative w-14 h-7 flex items-center rounded-full px-1 transition-colors 
                ${darkMode ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-900' : ''} 
                ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
            >
              <span className="absolute left-1 text-xs text-yellow-400"><Sun className="w-3 h-3" /></span>
              <span className="absolute right-1 text-xs text-white"><Moon className="w-3 h-3" /></span>
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out 
                ${darkMode ? 'translate-x-7' : 'translate-x-0'}`}
              />
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 p-6 shadow-lg transform transition-transform duration-300 z-50 flex flex-col ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-6 flex-grow transition-colors duration-0 delay-0">
            <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-0 delay-0" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-0 delay-0" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-0 delay-0" onClick={() => setIsMenuOpen(false)}>Contacts</a></li>
            <li className="mt-4">
              <span className="block mb-1 text-sm">Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
                className={`relative w-14 h-7 flex items-center rounded-full px-1 transition-colors 
                  ${darkMode ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-900' : ''} 
                  ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
              >
                <span className="absolute left-1 text-xs text-yellow-400"><Sun className="w-3 h-3" /></span>
                <span className="absolute right-1 text-xs text-white"><Moon className="w-3 h-3" /></span>
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out 
                  ${darkMode ? 'translate-x-7' : 'translate-x-0'}`}
                />
              </button>
            </li>
          </ul>

          {/* Drawer Footer Links */}
          <footer className="mt-8 border-t pt-4 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-0 delay-0">
            <div className="flex flex-col gap-3 transition-colors duration-0 delay-0">
            <p className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-0 delay-0">&copy; {new Date().getFullYear()} Darwin James C. Espiritu. All rights reserved.</p>
              <a href="#" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-0 delay-0">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-0 delay-0">
                <Github size={16} />
                GitHub
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-0 delay-0">
                <Briefcase size={16} />
                Indeed
              </a>
            </div>
          </footer>
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
