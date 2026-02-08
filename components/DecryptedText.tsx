import React, { useState, useEffect, useRef } from 'react';

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  revealDirection?: 'start' | 'end' | 'random';
  useOriginalColors?: boolean;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

const DecryptedText: React.FC<DecryptedTextProps> = ({ 
  text, 
  className = '', 
  speed = 30,
  useOriginalColors = false
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const iterations = useRef(0);

  const startScramble = () => {
    setIsHovering(true);
    iterations.current = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setDisplayText(prev => 
        text.split("").map((letter, index) => {
          if (index < iterations.current) {
            return text[index];
          }
          return characters[Math.floor(Math.random() * characters.length)];
        }).join("")
      );

      if (iterations.current >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      
      iterations.current += 1 / 3; // Controls how fast it resolves to the real text
    }, speed);
  };

  const stopScramble = () => {
    setIsHovering(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  return (
    <span 
      className={`inline-block cursor-pointer transition-colors duration-300 ${className} ${isHovering && !useOriginalColors ? 'text-aura-cyan' : ''}`}
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
    >
      {displayText}
    </span>
  );
};

export default DecryptedText;