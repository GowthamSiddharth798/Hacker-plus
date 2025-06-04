import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User, Sun, Moon, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white dark:bg-dark-700 shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <Zap className="w-8 h-8 text-primary-600" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 dark:text-white">CyberSecurity</span>
              <span className="text-xs font-medium text-primary-600">by Hacker Plus Technologies</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/' 
                  ? 'text-primary-600' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname.includes('/courses') 
                  ? 'text-primary-600' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500'
              }`}
            >
              Courses
            </Link>
            <Link 
              to="/instructors" 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname.includes('/instructors') 
                  ? 'text-primary-600' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500'
              }`}
            >
              Instructors
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/about' 
                  ? 'text-primary-600' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/contact' 
                  ? 'text-primary-600' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200" 
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200"
              aria-label="Toggle Theme"
              onClick={toggleTheme}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/cart" className="relative p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 bg-primary-600 text-white text-xs rounded-full">
                2
              </span>
            </Link>
            <Link 
              to="/login" 
              className="px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-500 border border-primary-600 dark:border-primary-500 rounded-md hover:bg-primary-50 dark:hover:bg-dark-600 transition-colors duration-200"
            >
              Log In
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button 
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200"
              aria-label="Toggle Theme"
              onClick={toggleTheme}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-700 shadow-medium">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link 
              to="/" 
              className={`block py-2 text-base font-medium ${
                location.pathname === '/' 
                  ? 'text-primary-600' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className={`block py-2 text-base font-medium ${
                location.pathname.includes('/courses') 
                  ? 'text-primary-600' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={closeMenu}
            >
              Courses
            </Link>
            <Link 
              to="/instructors" 
              className={`block py-2 text-base font-medium ${
                location.pathname.includes('/instructors') 
                  ? 'text-primary-600' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={closeMenu}
            >
              Instructors
            </Link>
            <Link 
              to="/about" 
              className={`block py-2 text-base font-medium ${
                location.pathname === '/about' 
                  ? 'text-primary-600' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 text-base font-medium ${
                location.pathname === '/contact' 
                  ? 'text-primary-600' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            <div className="pt-4 space-y-3">
              <Link 
                to="/login" 
                className="block w-full px-4 py-2 text-center text-primary-600 dark:text-primary-500 border border-primary-600 dark:border-primary-500 rounded-md"
                onClick={closeMenu}
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="block w-full px-4 py-2 text-center text-white bg-primary-600 rounded-md"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;