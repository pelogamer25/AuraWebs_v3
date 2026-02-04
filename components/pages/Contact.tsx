import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import GradientText from '../components/GradientText';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle submission would go here
    alert('Thank you for reaching out. We will respond shortly.');
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h1 className="text-5xl font-bold mb-8">
              Let's Build <br/>
              <GradientText>Something Great</GradientText>
            </h1>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Ready to elevate your digital presence? We are currently accepting new partnerships for Q4.
              Tell us about your project, budget, and timeline.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="text-aura-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Email Us</h3>
                  <p className="text-gray-400">hello@aurawebs.site</p>
                  <p className="text-gray-500 text-sm mt-1">Response time: &lt; 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="text-aura-magenta" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="text-aura-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Office</h3>
                  <p className="text-gray-400">100 Innovation Dr, Suite 500</p>
                  <p className="text-gray-400">Tech City, CA 90210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-aura-purple focus:ring-1 focus:ring-aura-purple transition-all"
                  placeholder="John Doe"
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Business Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-aura-purple focus:ring-1 focus:ring-aura-purple transition-all"
                  placeholder="john@company.com"
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                <select 
                  id="interest"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-aura-purple focus:ring-1 focus:ring-aura-purple transition-all appearance-none"
                >
                  <option>Web Design & Development</option>
                  <option>SEO & Marketing</option>
                  <option>E-commerce</option>
                  <option>Application Development</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-aura-purple focus:ring-1 focus:ring-aura-purple transition-all resize-none"
                  placeholder="Tell us about your goals..."
                  required
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-aura-purple to-aura-magenta text-white font-bold text-lg shadow-lg hover:shadow-aura-purple/50 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;