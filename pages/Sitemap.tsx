import React from 'react';
import { Link } from 'react-router-dom';
import GradientText from '../components/GradientText';
import { ArrowRight, FileText, Home, Layers, MessageSquare, Briefcase } from 'lucide-react';

const Sitemap: React.FC = () => {
  const sections = [
    {
      title: "Main Pages",
      icon: <Home className="text-aura-purple" />,
      links: [
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: "Showcase", path: "/showcase" },
        { label: "Contact Us", path: "/contact" },
        { label: "FAQ", path: "/faq" },
      ]
    },
    {
      title: "Services",
      icon: <Layers className="text-aura-magenta" />,
      links: [
        { label: "Web Design", path: "/services" },
        { label: "Web Development", path: "/services" },
        { label: "SEO Optimization", path: "/services" },
        { label: "App Development", path: "/services" },
        { label: "Analytics", path: "/services" },
      ]
    },
    {
      title: "Projects",
      icon: <Briefcase className="text-aura-cyan" />,
      links: [
        { label: "Neato Handyman App", path: "/showcase" },
        { label: "Cazuelitas El Rancho", path: "/showcase" },
        { label: "Clinical Research", path: "/showcase" },
        { label: "Bold Data Insights", path: "/showcase" },
      ]
    },
    {
      title: "Legal & Support",
      icon: <FileText className="text-gray-400" />,
      links: [
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms of Service", path: "/terms" },
        { label: "Sitemap", path: "/sitemap" },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-5xl font-bold mb-12 text-center">
          Site <GradientText>Map</GradientText>
        </h1>
        
        <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          An overview of the available content on AuraWebs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((section, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              
              <ul className="space-y-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      to={link.path} 
                      className="flex items-center justify-between group p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <span className="text-gray-300 group-hover:text-white transition-colors">{link.label}</span>
                      <ArrowRight size={16} className="text-gray-600 group-hover:text-aura-purple transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;