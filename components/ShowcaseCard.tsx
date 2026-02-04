import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ShowcaseCardProps {
  project: Project;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ project }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden glass-panel border-white/5 hover:border-aura-purple/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-aura-purple/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
        />
      </div>

      {/* Content Overlay - Always visible at bottom, expands on hover */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent pt-20">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-aura-magenta text-xs font-bold tracking-wider mb-2 uppercase">{project.category}</p>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-glow transition-all">{project.title}</h3>
            <p className="text-gray-400 text-sm opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 delay-100 overflow-hidden">
              {project.description}
            </p>
          </div>
          <div className="p-3 rounded-full bg-white/10 group-hover:bg-aura-purple text-white transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={20} />
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 delay-200">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;