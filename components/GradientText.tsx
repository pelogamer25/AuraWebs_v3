import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p' | 'div';
  style?: React.CSSProperties;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className = '', as: Component = 'span', style }) => {
  return (
    <Component 
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-aura-purple via-aura-magenta to-aura-cyan animate-gradient-x ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};

export default GradientText;