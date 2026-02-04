import React from 'react';
import { Palette, Terminal, Search, Smartphone, Globe, BarChart } from 'lucide-react';
import GradientText from '../components/GradientText';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <GradientText>Expertise</GradientText>
          </h1>
          <p className="text-xl text-gray-400">
            Comprehensive digital solutions engineered for growth, performance, and aesthetic impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <article className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-aura-purple/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-aura-purple/20 to-transparent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Palette className="text-aura-purple w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">UI/UX Design</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We craft intuitive, emotionally resonant interfaces. From wireframing to high-fidelity prototypes, we ensure every pixel serves a purpose.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-aura-purple rounded-full mr-2"></span>Design Systems</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-aura-purple rounded-full mr-2"></span>Interactive Prototyping</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-aura-purple rounded-full mr-2"></span>User Research</li>
            </ul>
          </article>

          {/* Service 2 */}
          <article className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-aura-magenta/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-aura-magenta/20 to-transparent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Terminal className="text-aura-magenta w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Web Development</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Modern frontend architecture using React and TypeScript. Fast, secure, and scalable solutions built to handle traffic and transactions.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-aura-magenta rounded-full mr-2"></span>React & Next.js</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-aura-magenta rounded-full mr-2"></span>Headless CMS</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-aura-magenta rounded-full mr-2"></span>API Integration</li>
            </ul>
          </article>

          {/* Service 3 */}
          <article className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-aura-cyan/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-aura-cyan/20 to-transparent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Search className="text-aura-cyan w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Advanced SEO</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Data-driven strategies to dominate search results. We optimize technical structure, content, and authority to drive organic growth.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-aura-cyan rounded-full mr-2"></span>Technical Audits</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-aura-cyan rounded-full mr-2"></span>On-Page Optimization</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-aura-cyan rounded-full mr-2"></span>Content Strategy</li>
            </ul>
          </article>

           {/* Service 4 */}
           <article className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-transparent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Smartphone className="text-indigo-400 w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">App Development</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Progressive Web Apps (PWA) and cross-platform mobile solutions that provide native-like experiences on the web.
            </p>
             <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>React Native</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>PWA Architecture</li>
            </ul>
          </article>

           {/* Service 5 */}
           <article className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-transparent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Globe className="text-pink-400 w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Localization</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Expanding your reach globally. We implement multi-language support and cultural adaptation strategies.
            </p>
             <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>i18n Implementation</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></span>Multi-region SEO</li>
            </ul>
          </article>

           {/* Service 6 */}
           <article className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-transparent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <BarChart className="text-orange-400 w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Analytics</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Comprehensive tracking setup to understand user behavior and measure ROI accurately.
            </p>
             <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>GA4 Setup</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>Custom Dashboards</li>
            </ul>
          </article>

        </div>
      </div>
    </div>
  );
};

export default Services;