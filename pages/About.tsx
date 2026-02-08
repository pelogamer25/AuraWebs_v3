import React from 'react';
import GradientText from '../components/GradientText';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 text-center">
          We are <GradientText>Aura</GradientText>
        </h1>
        
        <div className="glass-panel p-8 rounded-2xl mb-12 border-l-4 border-aura-purple">
          <p className="text-xl text-gray-300 leading-relaxed italic">
            "Aura is where technical rigor meets artistic intuition. We don't just build websites; we create digital atmospheres that surround and elevate your brand."
          </p>
        </div>

        <div className="space-y-12 text-gray-400 leading-loose text-lg">
          <p>
            Founded in the intersection of Silicon Valley tech and high-fashion aesthetics, AuraWebs was born from a frustration with the status quo. The web had become flat, sterile, and template-driven. We envisioned something deeper.
          </p>
          <p>
            We are a collective of senior frontend architects, award-winning UI designers, and data-obsessed SEO strategists. We believe that a website must do two things exceptionally well: it must stop the user in their tracks with its beauty, and it must perform flawlessly in search engines and conversion metrics.
          </p>
          <p>
            Our "Purple Code" philosophy dictates that every line of code we write is optimized for performance, and every pixel we place is optimized for emotion. We use heavy blurs, glassmorphism, and smooth animations not just as decoration, but as a language to guide users through a journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
             <div className="text-4xl font-bold text-white mb-2">2018</div>
             <div className="text-sm text-aura-purple uppercase tracking-widest">Established</div>
          </div>
          <div className="text-center">
             <div className="text-4xl font-bold text-white mb-2">Global</div>
             <div className="text-sm text-aura-magenta uppercase tracking-widest">Client Base</div>
          </div>
           <div className="text-center">
             <div className="text-4xl font-bold text-white mb-2">Remote</div>
             <div className="text-sm text-aura-cyan uppercase tracking-widest">First Culture</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;