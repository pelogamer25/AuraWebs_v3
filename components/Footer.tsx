import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-lg mt-20">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <img src="https://i.imgur.com/LyN2afy.png" alt="AuraWebs Logo" className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tight text-white">
                Aura<span className="font-light opacity-80">Webs</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We build digital experiences that blend aesthetic mastery with technical precision. Your business deserves a website that sells.
            </p>
          </div>

          {/* Links Column */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-aura-magenta transition-colors">Services</Link></li>
              <li><Link to="/showcase" className="hover:text-aura-magenta transition-colors">Showcase</Link></li>
              <li><Link to="/faq" className="hover:text-aura-magenta transition-colors">FAQ</Link></li>
              <li><Link to="/sitemap" className="hover:text-aura-magenta transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-6">Expertise</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-aura-magenta transition-colors">Web Design</Link></li>
              <li><Link to="/services" className="hover:text-aura-magenta transition-colors">Development</Link></li>
              <li><Link to="/services" className="hover:text-aura-magenta transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services" className="hover:text-aura-magenta transition-colors">Brand Identity</Link></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div className="col-span-1">
             <h4 className="font-semibold text-white mb-6">Connect</h4>
             <div className="flex space-x-4 mb-6">
                <a href="https://www.instagram.com/aurawebsdev/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-aura-purple hover:text-white text-gray-400 transition-all"><Instagram size={18} /></a>
             </div>
             <div className="text-sm text-gray-500 space-y-2">
               <p>aurawebsdev@gmail.com</p>
               <a 
                 href="https://wa.me/573217466755" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block hover:text-aura-cyan transition-colors"
               >
                 +57 321 7466755
               </a>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} AuraWebs Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;