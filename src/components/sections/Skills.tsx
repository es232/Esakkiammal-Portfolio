import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  Layers,
  Database,
  Brain,
  Sparkles,
  Terminal
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'ML Fundamentals, Gen AI, LLMs, Prompt Engineering, NLP, RAG, AI Agents, Agentic Workflows, Model Evaluation',
    tools: [],
    span: 'md:col-span-2 lg:col-span-2',
    accent: 'bg-primary/5 border-primary/20 hover:border-primary/50 group',
    iconColor: 'text-primary'
  },
  {
    icon: Database,
    title: 'Databases & Cloud',
    description: '',
    tools: ['MongoDB', 'MySQL', 'Firebase', 'AWS Cloud Foundations', 'AWS AI Practitioner'],
    span: 'md:col-span-1 lg:col-span-1',
    accent: 'bg-secondary border-border hover:border-primary/30 group',
    iconColor: 'text-foreground'
  },
  {
    icon: Sparkles,
    title: 'AI Tools & Frameworks',
    description: '',
    tools: ['Gemini API', 'OpenAI API', 'Claude', 'LangChain', 'GitHub Copilot', 'Cursor AI', 'Make.com'],
    span: 'md:col-span-1 lg:col-span-1',
    accent: 'bg-secondary border-border hover:border-primary/30 group',
    iconColor: 'text-accent'
  },
  {
    icon: Code2,
    title: 'Languages',
    description: '',
    tools: ['Python', 'Java', 'C', 'C++', 'R', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    span: 'md:col-span-2 lg:col-span-2',
    accent: 'bg-card border-border hover:border-accent/50 group',
    iconColor: 'text-foreground'
  },
  {
    icon: Layers,
    title: 'Full-Stack Development',
    description: '',
    tools: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
    span: 'md:col-span-1 lg:col-span-1',
    accent: 'bg-card border-border hover:border-foreground/30 group',
    iconColor: 'text-foreground'
  },
  {
    icon: Terminal,
    title: 'Developer Tools',
    description: '',
    tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Zoho RPA', 'Zoho CRM', 'Zoho Cliq'],
    span: 'md:col-span-1 lg:col-span-2',
    accent: 'bg-card border-border hover:border-foreground/30 group',
    iconColor: 'text-foreground'
  }
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Signature moment: letter-by-letter heading reveal ---
    if (headingRef.current) {
      const text = headingRef.current.textContent || '';
      headingRef.current.textContent = '';
      const letters = text.split('').map((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.willChange = 'transform, opacity';
        return span;
      });
      letters.forEach((el) => headingRef.current!.appendChild(el));

      if (prefersReducedMotion) {
        gsap.set(letters, { opacity: 1, y: 0 });
      } else {
        gsap.fromTo(
          letters,
          { opacity: 0, y: 28, rotateX: -40 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.035,
            ease: 'power3.out',
            transformPerspective: 600,
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    }

    if (!cardsRef.current) return;
    const cards = gsap.utils.toArray('.bento-card') as HTMLElement[];
    const cleanupFns: (() => void)[] = [];

    cards.forEach((card, index) => {
      // Scroll entrance for the card itself
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
          delay: index * 0.08,
        }
      );

      // Staggered reveal of the tag pills inside, timed just after the card lands
      const tags = card.querySelectorAll('.tag-pill');
      if (tags.length > 0) {
        gsap.fromTo(
          tags,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
            delay: index * 0.08 + 0.3,
          }
        );
      }

      if (prefersReducedMotion) return;

      // 3D tilt + cursor-reactive spotlight + light-catching shadow, all from one pointer position
      const handleMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        // Shadow falls opposite the tilt direction, like light catching a raised surface
        const shadowX = (rotateY / 8) * -14;
        const shadowY = (rotateX / -8) * 14;

        gsap.to(card, {
          rotateX,
          rotateY,
          boxShadow: `${shadowX}px ${shadowY + 10}px 30px -12px hsl(var(--foreground) / 0.18)`,
          transformPerspective: 1000,
          ease: 'power2.out',
          duration: 0.4,
        });

        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
      };

      const handleEnter = () => {
        gsap.to(card, { '--spotlight-opacity': 1, duration: 0.3 } as gsap.TweenVars);
      };

      const handleLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          boxShadow: '0 1px 2px 0 hsl(var(--foreground) / 0.05)',
          ease: 'power3.out',
          duration: 0.6,
        });
        gsap.to(card, { '--spotlight-opacity': 0, duration: 0.4 } as gsap.TweenVars);
      };

      card.addEventListener('mousemove', handleMove);
      card.addEventListener('mouseenter', handleEnter);
      card.addEventListener('mouseleave', handleLeave);

      cleanupFns.push(() => {
        card.removeEventListener('mousemove', handleMove);
        card.removeEventListener('mouseenter', handleEnter);
        card.removeEventListener('mouseleave', handleLeave);
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="mb-20 text-center">
          <span className="text-accent uppercase tracking-widest text-sm mb-4 block">Competencies</span>
          <h2 ref={headingRef} className="text-display-md font-display text-foreground mb-4" style={{ perspective: '600px' }}>
            Arsenal
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning artificial intelligence, sophisticated backend systems, and polished frontend interfaces.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [grid-auto-flow:dense]"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`bento-card relative p-8 rounded-3xl border transition-colors duration-500 overflow-hidden flex flex-col justify-between interactive shadow-soft ${category.span} ${category.accent}`}
                style={
                  {
                    '--mx': '50%',
                    '--my': '50%',
                    '--spotlight-opacity': 0,
                  } as React.CSSProperties
                }
              >
                {/* Cursor-reactive spotlight */}
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                  style={{
                    opacity: 'var(--spotlight-opacity)',
                    background:
                      'radial-gradient(500px circle at var(--mx) var(--my), hsl(var(--primary) / 0.10), transparent 55%)',
                  }}
                />

                <div className="relative mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <Icon
                      className={`w-8 h-8 ${category.iconColor} group-hover:scale-110 transition-transform duration-500 motion-safe:animate-[float_4s_ease-in-out_infinite]`}
                    />
                  </div>
                  <h3 className="text-heading-sm font-display font-medium text-foreground mb-3">
                    {category.title}
                  </h3>
                  {category.description && (
                    <p className="text-body-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  )}
                </div>

                {category.tools.length > 0 && (
                  <div className="relative flex flex-wrap gap-2">
                    {category.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="tag-pill px-3 py-1.5 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full text-xs font-mono text-foreground hover:border-primary transition-colors cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Gentle continuous float for category icons; skipped entirely under reduced-motion via motion-safe: above */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </section>
  );
};

export default Skills;