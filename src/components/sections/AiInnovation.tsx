import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AiInnovation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const lines = gsap.utils.toArray('.ai-line') as HTMLElement[];
    
    lines.forEach((line, index) => {
      gsap.fromTo(line, 
        { opacity: 0, x: -50 },
        {
          opacity: 1, 
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 85%',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} id="ai-innovation" className="relative w-full bg-card py-32 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-accent font-mono uppercase tracking-[0.2em] text-sm mb-4">Focus Area</h2>
            <h3 className="text-display-sm font-display text-foreground mb-12">The AI Engineering Journey</h3>
            
            <div className="space-y-10">
              <div className="ai-line pl-6 border-l border-primary">
                <h4 className="text-heading-sm font-medium text-foreground mb-2">Agentic Workflows & LLMs</h4>
                <p className="text-muted-foreground leading-relaxed">Architecting complex, reasoning-driven AI agents capable of autonomous problem solving.</p>
              </div>
              <div className="ai-line pl-6 border-l border-accent">
                <h4 className="text-heading-sm font-medium text-foreground mb-2">Retrieval-Augmented Generation</h4>
                <p className="text-muted-foreground leading-relaxed">Building contextual AI systems with vector databases and semantic search pipelines.</p>
              </div>
              <div className="ai-line pl-6 border-l border-foreground/30">
                <h4 className="text-heading-sm font-medium text-foreground mb-2">Machine Learning Fundamentals</h4>
                <p className="text-muted-foreground leading-relaxed">Grounded in traditional ML concepts to understand the math behind the magic.</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative aspect-square w-full max-w-md mx-auto hidden md:block">
            {/* Minimal intelligent tech visualization */}
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin-slow opacity-50" />
            <div className="absolute inset-8 border border-accent/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
            <div className="absolute inset-16 border border-foreground/10 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }} />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center shadow-cherry-glow z-10 border border-white/5">
                <span className="font-display text-2xl font-bold text-foreground">AI</span>
              </div>
            </div>
            
            {/* Satellites */}
            <div className="absolute top-[15%] left-[25%] w-3 h-3 bg-primary rounded-full shadow-cherry" />
            <div className="absolute bottom-[25%] right-[15%] w-4 h-4 bg-accent rounded-full shadow-soft" />
            <div className="absolute top-[50%] left-[8%] w-2 h-2 bg-foreground rounded-full" />
            <div className="absolute top-[30%] right-[8%] w-2 h-2 bg-primary/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiInnovation;
