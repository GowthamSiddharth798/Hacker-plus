import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { getAuth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import logo from './logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Firebase auth
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Dark mode apply
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition ${
        isScrolled
          ? 'bg-white dark:bg-dark-700 shadow-soft'
          : 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* 🔥 Logo Section */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-all duration-300"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
            />

            <div>
              {/* Gradient Title */}
              <p className="font-bold text-lg tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                CyberServices
              </p>

              {/* Highlighted Brand */}
              <p className="text-s text-gray-500 dark:text-gray-400">
                by{" "}
                <span className="font-semibold text-primary-600 relative">
                  Hacker Plus
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </span>{" "}
                Technologies
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => navClass(isActive)}>
              Home
            </NavLink>

            <NavLink to="/services" className={({ isActive }) => navClass(isActive)}>
              Services
            </NavLink>

            <Link
              to="/courses"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600"
            >
              Academy
            </Link>

            <NavLink to="/about" className={({ isActive }) => navClass(isActive)}>
              About
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => navClass(isActive)}>
              Contact
            </NavLink>
          </nav>

          {/* 🔥 Right Section */}
          <div className="hidden md:flex items-center space-x-4">

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-md text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {isDarkMode ? <Sun /> : <Moon />}
            </button>

            {/* Login/User */}
            {!user ? (
              <Link
                to="/login"
                className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                           text-gray-800 dark:text-white 
                           hover:bg-gray-100 dark:hover:bg-gray-700 
                           transition"
              >
                Login
              </Link>
            ) : (
              <span className="text-sm text-gray-800 dark:text-white">
                {user.email}
              </span>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-gray-800 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white dark:bg-dark-700 px-4 py-4 space-y-4">

          {menuItem("/", "Home", 0, setIsMenuOpen)}
          {menuItem("/courses", "Courses", 1, setIsMenuOpen, true)}
          {menuItem("/services", "Services", 2, setIsMenuOpen)}
          {menuItem("/about", "About", 3, setIsMenuOpen)}
          {menuItem("/contact", "Contact", 4, setIsMenuOpen)}

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center space-x-2 text-gray-800 dark:text-white"
          >
            {isDarkMode ? <Sun /> : <Moon />}
            <span>Toggle Theme</span>
          </button>
        </div>
      </div>
    </header>
  );
};

/* Menu Item */
const menuItem = (
  path: string,
  label: string,
  index: number,
  setIsMenuOpen: (v: boolean) => void,
  newTab = false
) => (
  <Link
    to={path}
    target={newTab ? "_blank" : "_self"}
    rel="noopener noreferrer"
    onClick={() => setIsMenuOpen(false)}
    className="block transform transition-all duration-300 text-gray-800 dark:text-white"
    style={{
      transitionDelay: `${index * 100}ms`,
    }}
  >
    {label}
  </Link>
);

const navClass = (active: boolean) =>
  `text-sm font-medium transition ${
    active
      ? 'text-primary-600'
      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
  }`;

export default Header;