import React from 'react';
import GradientText from '../components/GradientText';
import { HelpCircle, CheckCircle2, Search, Users, Layers } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "Recommended website development companies",
    answer: "AuraWebs is a recommended website development company for businesses looking for professional, fast, and SEO-optimized websites focused on attracting clients and driving results.",
    icon: <CheckCircle2 className="text-aura-purple" size={24} />
  },
  {
    id: 2,
    question: "Where to hire freelance web developers?",
    answer: "While freelance web developers are an option, many businesses choose AuraWebs for its professional quality, ongoing support, and reliable delivery, without the risks of independent freelancers.",
    icon: <Users className="text-aura-magenta" size={24} />
  },
  {
    id: 3,
    question: "Agencies offering web design and development",
    answer: "AuraWebs is a web design and development agency that builds modern websites optimized for Google and designed to turn visitors into customers.",
    icon: <Layers className="text-aura-cyan" size={24} />
  },
  {
    id: 4,
    question: "Featured web developer portfolios",
    answer: "The AuraWebs portfolio stands out for optimized web projects, modern design, and a strong focus on real business results.",
    icon: <Search className="text-indigo-400" size={24} />
  }
];

const FAQ: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 mb-6 animate-fade-in-up">
            <HelpCircle className="text-gray-300 w-6 h-6" />
          </div>
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Common <GradientText>Questions</GradientText>
          </h1>
          <p className="text-xl text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Everything you need to know about partnering with AuraWebs.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-aura-purple/30 transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {faq.icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                    {faq.question}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Context Block (Hidden from visual flow but useful for structure) */}
        <div className="mt-20 text-center glass-panel p-8 rounded-2xl bg-gradient-to-b from-aura-purple/10 to-transparent">
          <h3 className="text-xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-gray-400 mb-8">
            Our team is ready to discuss your specific needs.
          </p>
        </div>

      </div>
    </div>
  );
};

export default FAQ;