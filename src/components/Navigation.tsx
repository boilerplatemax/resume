import { useState } from 'react';
import { FiGithub, FiLinkedin, FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navigation({ darkMode, setDarkMode }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent hover:scale-110 transition-transform cursor-pointer"
            >
              MS
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}

              {/* Social Icons */}
              <div className="flex items-center gap-4 ml-4 border-l border-gray-300 dark:border-gray-700 pl-4">
                <a
                  href="https://github.com/boilerplatemax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/maxshapovalov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Toggle theme"
              >
                <div
                  className={`absolute top-1 left-1 w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                    darkMode ? 'translate-x-7' : 'translate-x-0'
                  }`}
                >
                  {darkMode ? (
                    <FiMoon size={12} className="text-purple-400" />
                  ) : (
                    <FiSun size={12} className="text-yellow-500" />
                  )}
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 md:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-2xl font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Social Icons in Mobile Menu */}
          <div className="flex gap-6 mt-8">
            <a
              href="https://github.com/boilerplatemax"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/maxshapovalov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={28} />
            </a>
          </div>

          {/* Theme Toggle in Mobile Menu */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-8 relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Toggle theme"
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                darkMode ? 'translate-x-8' : 'translate-x-0'
              }`}
            >
              {darkMode ? (
                <FiMoon size={14} className="text-purple-400" />
              ) : (
                <FiSun size={14} className="text-yellow-500" />
              )}
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
