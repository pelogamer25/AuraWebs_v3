import React from 'react';
import { ArrowRight, Code, Layout, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientText from '../components/GradientText';
import ShowcaseCard from '../components/ShowcaseCard';
import DecryptedText from '../components/DecryptedText';
import { Project } from '../types';

// Mock Data - Featured Projects (Matches top 2 from Showcase)
const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'Neato Handyman App',
    category: 'On-Demand Service',
    description: 'Here to mend your world with care and a smile. A complete mobile platform for on-demand handyman services.',
    imageUrl: 'https://i.imgur.com/6LgkK22.png',
    tags: ['React Native', 'Mobile', 'UI/UX']
  },
  {
    id: '2',
    title: 'Cazuelitas El Rancho',
    category: 'Culinary Brand',
    description: 'It is not just food. It is a ceremony. An immersive, cinematic landing page for a limited-edition culinary experience.',
    imageUrl: 'https://i.imgur.com/smu6EgZ.png',
    tags: ['Branding', 'E-commerce', 'Experience']
  }
];

const Home: React.FC = () => {
  return (
    <div className="relative">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Available for new projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight min-h-[1.2em] py-2 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
              <span className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>We build</span>
              <GradientText className="px-2 pb-1 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Aura
              </GradientText>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Your business deserves a website that sells. We blend deep aesthetic mastery with technical SEO precision.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Link 
                to="/showcase" 
                className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors w-full sm:w-auto text-center"
              >
                <DecryptedText text="View Showcase" useOriginalColors={true} />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 rounded-full glass-panel border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
           <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center pt-2">
             <div className="w-1 h-2 bg-white rounded-full"></div>
           </div>
        </div>
      </section>

      {/* VALUE PROP SECTION */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-aura-purple/20 flex items-center justify-center mb-6 text-aura-purple group-hover:scale-110 transition-transform">
                  <Layout size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-aura-purple transition-colors">Visionary Design</h3>
                <p className="text-gray-400">We don't just design websites; we craft immersive brand environments using glassmorphism and depth.</p>
             </div>
             <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors transform md:-translate-y-8 group">
                <div className="w-12 h-12 rounded-lg bg-aura-magenta/20 flex items-center justify-center mb-6 text-aura-magenta group-hover:scale-110 transition-transform">
                  <Code size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-aura-magenta transition-colors">React Architecture</h3>
                <p className="text-gray-400">Built on modern stacks. Fast, scalable, and animated with precision-engineered code.</p>
             </div>
             <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-aura-cyan/20 flex items-center justify-center mb-6 text-aura-cyan group-hover:scale-110 transition-transform">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-aura-cyan transition-colors">SEO Dominance</h3>
                <p className="text-gray-400">Technical SEO is baked in. Structure, speed, and schema markup to rank you higher.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE TEASER */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected <GradientText>Works</GradientText></h2>
              <p className="text-gray-400">A glimpse into our digital craftsmanship.</p>
            </div>
            <Link to="/showcase" className="hidden md:flex items-center text-aura-purple hover:text-white transition-colors">
              <span className="mr-2 hover:mr-3 transition-all">View All Projects</span> <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map(project => (
              <ShowcaseCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/showcase" className="inline-flex items-center text-aura-purple hover:text-white transition-colors">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS / TRUST */}
      <section className="py-20 border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div className="group cursor-default">
               <div className="text-4xl md:text-5xl font-bold text-white mb-2 transition-transform group-hover:-translate-y-1">98<span className="text-aura-purple">%</span></div>
               <div className="text-sm text-gray-500 uppercase tracking-wider group-hover:text-aura-purple transition-colors">Client Retention</div>
             </div>
             <div className="group cursor-default">
               <div className="text-4xl md:text-5xl font-bold text-white mb-2 transition-transform group-hover:-translate-y-1">120<span className="text-aura-magenta">+</span></div>
               <div className="text-sm text-gray-500 uppercase tracking-wider group-hover:text-aura-magenta transition-colors">Projects Live</div>
             </div>
             <div className="group cursor-default">
               <div className="text-4xl md:text-5xl font-bold text-white mb-2 transition-transform group-hover:-translate-y-1">3<span className="text-aura-cyan">x</span></div>
               <div className="text-sm text-gray-500 uppercase tracking-wider group-hover:text-aura-cyan transition-colors">Avg Traffic Growth</div>
             </div>
             <div className="group cursor-default">
               <div className="text-4xl md:text-5xl font-bold text-white mb-2 transition-transform group-hover:-translate-y-1">24<span className="text-gray-600">/</span>7</div>
               <div className="text-sm text-gray-500 uppercase tracking-wider group-hover:text-gray-400 transition-colors">Support</div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-aura-purple/10 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to <GradientText>Ascend?</GradientText></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Let's transform your digital presence into a powerful asset. 
            Schedule a consultation with our senior architects today.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-5 rounded-full bg-aura-purple hover:bg-aura-violet text-white font-bold text-lg shadow-[0_0_40px_rgba(124,58,237,0.4)] hover:shadow-[0_0_60px_rgba(124,58,237,0.6)] transition-all transform hover:-translate-y-1 group"
          >
            <span className="relative z-10">Start Your Journey</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;