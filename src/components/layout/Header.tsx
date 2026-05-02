import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { getAuth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import logo from './logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  // 🔥 FORCE DARK MODE ALWAYS
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition ${
        isScrolled
          ? 'bg-dark-700 shadow-soft'
          : 'bg-dark-900/80 backdrop-blur-md'
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
  <p className="font-bold text-lg tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Hacker Plus
  </p>

  <p className="text-sm text-gray-400">
    CyberSecurity Services
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
              className="text-sm font-medium text-gray-300 hover:text-primary-500"
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

            {/* Login/User */}
            {!user ? (
              <Link
                to="/login"
                className="px-4 py-2 rounded-md border border-gray-600 
                           text-white 
                           hover:bg-gray-700 
                           transition"
              >
                Login
              </Link>
            ) : (
              <span className="text-sm text-white">
                {user.email}
              </span>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-white"
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
        <div className="bg-dark-700 px-4 py-4 space-y-4">

          {menuItem("/", "Home", 0, setIsMenuOpen)}
          {menuItem("/courses", "Courses", 1, setIsMenuOpen, true)}
          {menuItem("/services", "Services", 2, setIsMenuOpen)}
          {menuItem("/about", "About", 3, setIsMenuOpen)}
          {menuItem("/contact", "Contact", 4, setIsMenuOpen)}
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
    className="block transform transition-all duration-300 text-white"
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
      ? 'text-primary-500'
      : 'text-gray-300 hover:text-primary-500'
  }`;

export default Header;