import React, { useEffect, useRef } from 'react';

const BlurBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        // Varied sizes for depth
        this.size = Math.random() * 1.5 + 0.1;
        
        // Slow, drift-like movement similar to space dust
        this.speedX = Math.random() * 0.15 - 0.075;
        this.speedY = Math.random() * 0.15 - 0.075;
        
        this.opacity = Math.random() * 0.5 + 0.1;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        
        // Aura Color Palette for stars (White + Brand Colors)
        const colors = [
            '255, 255, 255', // Pure White
            '255, 255, 255', // More White for realism
            '124, 58, 237',  // Aura Purple
            '217, 70, 239',  // Aura Magenta
            '6, 182, 212'    // Aura Cyan
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Infinite wrap around screen
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;

        // Twinkle effect (fade in/out)
        this.opacity += this.fadeSpeed;
        if (this.opacity > 0.8 || this.opacity < 0.1) {
          this.fadeSpeed = -this.fadeSpeed;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Slight glow for larger stars
        if (this.size > 1.2) {
             ctx.shadowBlur = 4;
             ctx.shadowColor = `rgba(${this.color}, 0.3)`;
        } else {
            ctx.shadowBlur = 0;
        }
      }
    }

    const initParticles = () => {
      particles = [];
      // Calculate particle count based on screen area for consistent density
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 4000); 
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-aura-bg">
      {/* 1. Deep Space Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020010] via-[#050115] to-[#020010]" />

      {/* 2. Top Spotlight / "God Ray" Beam Effect (Reference Image 2) */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-aura-purple/20 blur-[120px] rounded-full mix-blend-screen opacity-60" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1px] h-[50vh] bg-gradient-to-b from-white/20 via-aura-purple/50 to-transparent blur-[1px] opacity-70" />

      {/* 3. Nebula Blobs (Ambient Colors - Deeper and more subtle) */}
      <div 
        className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] bg-violet-900/15 rounded-full blur-[120px] mix-blend-screen animate-blob" 
        style={{ animationDelay: '0s' }}
      />
      
      <div 
        className="absolute top-[40%] right-[-20%] w-[70vw] h-[70vw] bg-aura-magenta/10 rounded-full blur-[150px] mix-blend-screen animate-blob-slow" 
        style={{ animationDelay: '2s' }}
      />

      <div 
        className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-indigo-900/20 rounded-full blur-[130px] mix-blend-screen animate-blob" 
        style={{ animationDelay: '4s' }}
      />
      
      {/* 4. Canvas Stars (Reference Image 1) - Layered ON TOP of blobs */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 opacity-90" />
      
      {/* 5. Vignette & Cinematic Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay z-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-20"></div>
    </div>
  );
};

export default BlurBackground;