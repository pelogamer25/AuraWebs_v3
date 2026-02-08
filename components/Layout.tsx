import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BlurBackground from './BlurBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative font-sans text-white bg-aura-bg selection:bg-aura-purple selection:text-white">
      <BlurBackground />
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;