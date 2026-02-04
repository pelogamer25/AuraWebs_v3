import React from 'react';
import ShowcaseCard from '../components/ShowcaseCard';
import GradientText from '../components/GradientText';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Neato Handyman App',
    category: 'On-Demand Service',
    description: 'Here to mend your world with care and a smile. A complete mobile platform for on-demand handyman services, task scheduling, and service history tracking.',
    imageUrl: 'https://i.imgur.com/6LgkK22.png',
    tags: ['React Native', 'Mobile', 'UI/UX']
  },
  {
    id: '2',
    title: 'Cazuelitas El Rancho',
    category: 'Culinary Brand',
    description: 'It is not just food. It is a ceremony. An immersive, cinematic landing page for a limited-edition culinary experience, focusing on storytelling and exclusivity.',
    imageUrl: 'https://i.imgur.com/smu6EgZ.png',
    tags: ['Branding', 'E-commerce', 'Experience']
  },
  {
    id: '3',
    title: 'Clinical Research Interface',
    category: 'MedTech',
    description: 'Streamlining complex medical research data into an intuitive interface. Features patient cohort tracking, real-time trial analytics, and secure data management.',
    imageUrl: 'https://i.imgur.com/kIV4Wzy.png',
    tags: ['Dashboard', 'Healthcare', 'Data']
  },
  {
    id: '4',
    title: 'Bold Data Insights',
    category: 'SaaS Platform',
    description: 'Data Refined, Deeper Insights Defined. A futuristic analytics landing page focusing on transforming raw data into meaningful business decisions.',
    imageUrl: 'https://i.imgur.com/Axuwrag.png',
    tags: ['SaaS', 'AI', 'Analytics']
  },
  {
    id: '5',
    title: 'Web3 Closer Hunt',
    category: 'Recruitment Portal',
    description: 'Connecting experienced closers with verified Web3 opportunities. A high-performance hiring ecosystem with automated filtering and premium dark UI.',
    imageUrl: 'https://i.imgur.com/A077AMh.png',
    tags: ['Platform', 'Hiring', 'Web3']
  },
  {
    id: '6',
    title: 'SunVault Solar',
    category: 'Energy Tech',
    description: 'Solar Power management interface ensuring electricity readiness. Features 3D house visualization, weather-resistant battery monitoring, and efficiency tracking.',
    imageUrl: 'https://i.imgur.com/YvWTB7H.png',
    tags: ['Web Design', '3D', 'Sustainability']
  }
];

const Showcase: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Intro */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Aura <GradientText>Showcase</GradientText>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            A curated selection of our finest work. Where technical complexity meets visual elegance.
          </p>
        </div>

        {/* Filters (Visual only for this demo) */}
        <div className="flex flex-wrap gap-4 mb-12">
          {['All Projects', 'Web Design', 'Development', 'SEO', 'Branding'].map((filter, index) => (
            <button 
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0 
                  ? 'bg-aura-purple text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map(project => (
            <ShowcaseCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Showcase;