import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { getAuth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const auth = getAuth();
    return onAuthStateChanged(auth, setUser);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition ${
        isScrolled ? 'bg-white dark:bg-dark-700 shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-primary-600" />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">CyberSecurity</p>
              <p className="text-xs text-primary-600">by Hacker Plus Technologies</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">

            <Link to="/" className={navClass(location.pathname === '/')}>
              Home
            </Link>

            {/* ✅ COURSES → NEW TAB */}
            <a
              href="/courses"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600"
            >
              Academy
            </a>

            <Link to="/services" className={navClass(location.pathname.includes('/services'))}>
              Services
            </Link>

            <Link to="/about" className={navClass(location.pathname === '/about')}>
              About
            </Link>

            <Link to="/contact" className={navClass(location.pathname === '/contact')}>
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-700 px-4 py-4 space-y-3">

          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>

          {/* ✅ COURSES → NEW TAB (MOBILE) */}
          <a
            href="/courses"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="block"
          >
            Courses
          </a>

          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

        </div>
      )}
    </header>
  );
};

const navClass = (active: boolean) =>
  `text-sm font-medium transition ${
    active ? 'text-primary-600' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
  }`;

export default Header;
