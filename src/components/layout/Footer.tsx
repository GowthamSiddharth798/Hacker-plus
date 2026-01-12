import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Zap,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-primary-500" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">CyberSecurity</span>
                <span className="text-xs font-medium text-primary-400">
                  by Hacker Plus Technologies
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 mt-4">
              Empowering the Next Generation of Tech Experts through comprehensive
              cybersecurity education and training.
            </p>

            <div className="space-y-3 mt-6">

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                <span className="text-sm">Hyderabad, Telangana, India</span>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-500 mt-0.5" />
                <div className="flex flex-col text-sm">
                  <a
                    href="tel:+918309729774"
                    className="hover:text-primary-400 transition-colors"
                  >
                    +91 8309729774
                  </a>
                  <a
                    href="tel:+919346159671"
                    className="hover:text-primary-400 transition-colors"
                  >
                    +91 9346159671
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-500 mt-0.5" />
                <div className="flex flex-col text-sm">
                  <a
                    href="mailto:hackerplustechnologies@gmail.com"
                    className="hover:text-primary-400 transition-colors"
                  > service@hackerplus.in
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-primary-500" />
                <a
                  href="https://www.linkedin.com/company/hacker-plus-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-400 transition-colors break-all"
                >
                  linkedin.com/company/hacker-plus-technologies
                </a>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-sm hover:text-primary-400">Courses</Link></li>
              <li><Link to="/instructors" className="text-sm hover:text-primary-400">Instructors</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary-400">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary-400">Contact Us</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-primary-400">Blog</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-primary-400">Careers</Link></li>
            </ul>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Course Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/courses/ethical-hacking" className="text-sm hover:text-primary-400">Ethical Hacking</Link></li>
              <li><Link to="/courses/forensics" className="text-sm hover:text-primary-400">Digital Forensics</Link></li>
              <li><Link to="/courses/web-security" className="text-sm hover:text-primary-400">Web Security</Link></li>
              <li><Link to="/courses/network-security" className="text-sm hover:text-primary-400">Network Security</Link></li>
              <li><Link to="/courses/tools" className="text-sm hover:text-primary-400">Security Tools</Link></li>
              <li><Link to="/courses/career" className="text-sm hover:text-primary-400">Career Paths</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Stay updated with the latest in cybersecurity education and exclusive offers.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-md focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium"
              >
                Subscribe
              </button>
            </form>

            <div className="flex items-center space-x-4 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="w-5 h-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="w-5 h-5" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-dark-600 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Hacker Plus Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm hover:text-primary-400">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-primary-400">Terms of Service</Link>
            <Link to="/refund" className="text-sm hover:text-primary-400">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
