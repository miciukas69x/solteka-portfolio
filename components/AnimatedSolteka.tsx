'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  radius: number;
  originalX: number;
  originalY: number;
}

const AnimatedSolteka = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const leaveAnimationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    updateCanvasSize();
    
    // Create particles from text
    const createParticles = () => {
      // Ensure canvas size is up to date
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Text configuration - responsive sizing (recalculated each time)
      const text = 'SOLTEKA';
      // Use window width for mobile check, but always use proportional sizing
      const windowWidth = typeof window !== 'undefined' ? window.innerWidth : canvas.width;
      const isMobile = windowWidth < 768;
      // Desktop: use /6 for a bit smaller size
      const fontSize = isMobile 
        ? canvas.width / 6.5
        : canvas.width / 6;
      const font = `bold ${fontSize}px 'Orbitron', sans-serif`;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = font;
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const textX = canvas.width / 2;
      const textY = canvas.height / 2;
      ctx.fillText(text, textX, textY);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      particlesRef.current = [];

      // Mobile: smaller dots, more particles (less spacing), better definition
      // Desktop: slightly larger dots with more spacing
      const spacing = isMobile ? 3 : 4; // Less spacing on mobile = more particles
      const radius = isMobile ? 2 : 2.5; // Smaller dots on mobile

      // Use multiple sample points per spacing to ensure no gaps
      for (let y = 0; y < canvas.height; y += spacing) {
        for (let x = 0; x < canvas.width; x += spacing) {
          // Sample multiple points within the spacing area to avoid missing pixels
          let foundPixel = false;
          for (let dy = 0; dy < spacing && !foundPixel; dy++) {
            for (let dx = 0; dx < spacing && !foundPixel; dx++) {
              const sampleX = Math.min(x + dx, canvas.width - 1);
              const sampleY = Math.min(y + dy, canvas.height - 1);
              const index = (sampleY * canvas.width + sampleX) * 4;
              const alpha = data[index + 3];

              if (alpha > 100) { // Lower threshold to catch more pixels
                particlesRef.current.push({
                  x: x + spacing / 2, // Center the particle in the spacing area
                  y: y + spacing / 2,
                  targetX: x + spacing / 2,
                  targetY: y + spacing / 2,
                  vx: 0,
                  vy: 0,
                  radius: radius,
                  originalX: x + spacing / 2,
                  originalY: y + spacing / 2,
                });
                foundPixel = true; // Only add one particle per spacing area
              }
            }
          }
        }
      }
    };

    createParticles();
    
    // Regenerate particles on resize
    const handleResize = () => {
      updateCanvasSize();
      createParticles();
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      // Handle mouse leave animation - very subtle wave effect
      if (leaveAnimationRef.current > 0) {
        leaveAnimationRef.current -= 0.012;
        const animationProgress = leaveAnimationRef.current;
        
        particles.forEach((particle, index) => {
          // Create a very subtle wave effect from center
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const dx = particle.originalX - centerX;
          const dy = particle.originalY - centerY;
          const distanceFromCenter = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = Math.max(canvas.width, canvas.height) / 2;
          const normalizedDistance = distanceFromCenter / maxDistance;
          
          // Very subtle wave effect - further reduced intensity
          const waveOffset = Math.sin(normalizedDistance * 6 - animationProgress * 12) * 8 * animationProgress;
          const angle = Math.atan2(dy, dx);
          
          particle.vx += Math.cos(angle) * waveOffset * 0.1;
          particle.vy += Math.sin(angle) * waveOffset * 0.1;
        });
      }

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = isHovered ? 350 : 200;
        const force = isHovered ? 1.5 : 0.6;

        if (distance < maxDistance && leaveAnimationRef.current <= 0) {
          const angle = Math.atan2(dy, dx);
          const forceStrength = Math.pow((maxDistance - distance) / maxDistance, 2);
          particle.vx -= Math.cos(angle) * force * forceStrength;
          particle.vy -= Math.sin(angle) * force * forceStrength;
        }

        // Return to original position - slightly stronger during leave animation
        const returnForce = leaveAnimationRef.current > 0 ? 0.1 : 0.08;
        particle.vx += (particle.originalX - particle.x) * returnForce;
        particle.vy += (particle.originalY - particle.y) * returnForce;

        // Apply velocity with less damping for more movement
        particle.vx *= 0.9;
        particle.vy *= 0.9;
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Draw particle with primary color
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(270, 70%, 73%)`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      leaveAnimationRef.current = 0;
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
      mouseRef.current = { x: -1000, y: -1000 };
      // Trigger leave animation
      leaveAnimationRef.current = 1;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-7xl mx-auto h-[120px] sm:h-[160px] md:h-[240px] lg:h-[280px] flex items-center justify-center cursor-pointer"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default AnimatedSolteka;

