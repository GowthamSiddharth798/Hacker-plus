import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { getAuth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

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
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-primary-600" />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                CyberServices
              </p>
              <p className="text-xs text-primary-600">
                by Hacker Plus Technologies
              </p>
            </div>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => navClass(isActive)}>
              Home
            </NavLink>

            <Link
              to="/courses"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600"
            >
              Academy
            </Link>

            <NavLink to="/services" className={({ isActive }) => navClass(isActive)}>
              Services
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => navClass(isActive)}>
              About
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => navClass(isActive)}>
              Contact
            </NavLink>
          </nav>

          {/* Right */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? <Sun /> : <Moon />}
            </button>

            {!user ? (
              <Link to="/login" className="btn-outline">Login</Link>
            ) : (
              <span className="text-sm">{user.email}</span>
            )}
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden z-50"
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

          {/* Theme toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center space-x-2"
          >
            {isDarkMode ? <Sun /> : <Moon />}
            <span>Toggle Theme</span>
          </button>
        </div>
      </div>
    </header>
  );
};

/* 🔥 Animated menu item */
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
    className="block transform transition-all duration-300"
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