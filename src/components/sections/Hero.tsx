import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import HeroScene from '@/components/3d/HeroScene';
import SplitText from '@/components/ui/SplitText';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 }); // Wait for scene and SplitText
    
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30, letterSpacing: '0.1em' },
      { opacity: 1, y: 0, letterSpacing: '0.3em', duration: 1.5, ease: 'power4.out' }
    );
    
    tl.fromTo(
      descRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' },
      "-=1"
    );

    tl.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.5)' },
      "-=1"
    );

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      <HeroScene />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pointer-events-none">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <p 
            ref={subtitleRef} 
            className="text-accent font-mono uppercase text-sm md:text-base mb-6 opacity-0"
          >
            Intelligent Digital Experiences
          </p>
          
          <h1 className="text-foreground mb-8 leading-[1.1] perspective-1000">
            <SplitText type="chars" animation="wave" delay={0.2} duration={1.2} stagger={0.04}>
              Esakkiammal G
            </SplitText>
          </h1>
          
          <p 
            ref={descRef} 
            className="text-body-lg md:text-heading-sm text-muted-foreground max-w-3xl font-light opacity-0 mb-14"
          >
            AI Engineer, Full Stack Developer, and Creative Technologist. 
            Building systems that solve meaningful problems with elegance and precision.
          </p>

          <div ref={ctaRef} className="flex gap-6 pointer-events-auto opacity-0">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-10 py-5 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/50 hover:-translate-y-1 interactive"
            >
              Explore Masterpieces
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-10 py-5 bg-transparent border-2 border-border text-foreground font-medium rounded-full hover:border-primary hover:text-primary transition-all interactive"
            >
              Engage
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-70">
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-muted-foreground animate-pulse">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
