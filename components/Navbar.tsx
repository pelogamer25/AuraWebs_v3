import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import DecryptedText from './DecryptedText';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Showcase', path: '/showcase' },
  { label: 'FAQ', path: '/faq' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div 
          className={`glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'bg-opacity-60 shadow-lg shadow-aura-purple/10' : 'bg-opacity-30'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="https://i.imgur.com/LyN2afy.png" 
              alt="AuraWebs Logo" 
              className="w-10 h-10 group-hover:drop-shadow-[0_0_15px_rgba(124,58,237,0.8)] transition-all duration-300" 
            />
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-aura-violet transition-all">
              Aura<span className="font-light opacity-80">Webs</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path ? 'text-white text-glow' : 'text-gray-400'
                }`}
              >
                <DecryptedText 
                  text={item.label} 
                  className={location.pathname === item.path ? 'text-aura-purple' : ''}
                  useOriginalColors={location.pathname === item.path}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-aura-purple hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] border border-white/10 transition-all duration-300 ease-out group"
            >
              <DecryptedText text="Let's Talk" speed={50} useOriginalColors={true} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 px-6 md:hidden">
          <div className="glass-panel rounded-2xl p-6 flex flex-col space-y-4 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors ${
                  location.pathname === item.path ? 'text-aura-purple' : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="block text-center w-full py-3 rounded-xl bg-gradient-to-r from-aura-purple to-aura-magenta text-white font-bold"
            >
              Start Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;