import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowRight } from 'lucide-react';

const taglines = [
  "Turning ideas into calm, scalable web experiences",
  "Full-stack engineering with a soft spot for design & AI",
  "I don't just ship features — I shape systems",
];

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Background reveal
    tl.fromTo(
      bgRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
    );

    // Name reveal with character split
    if (nameRef.current) {
      const chars = nameRef.current.querySelectorAll('.char');
      tl.fromTo(
        chars,
        { opacity: 0, y: 80, rotateX: -90 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.04, ease: 'power3.out' },
        '-=1'
      );
    }

    // Subtitle
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    );

    // Tagline
    tl.fromTo(
      taglineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.2'
    );

    // Description
    tl.fromTo(
      descRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    );

    // CTA
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.2'
    );

    tl.eventCallback('onComplete', () => setIsLoaded(true));

    return () => {
      tl.kill();
    };
  }, []);

  // Tagline rotation
  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isLoaded]);

  // Tagline animation
  useEffect(() => {
    if (!taglineRef.current || !isLoaded) return;

    gsap.fromTo(
      taglineRef.current.querySelector('.tagline-text'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    );
  }, [currentTagline, isLoaded]);

  const splitName = (name: string) => {
    return name.split('').map((char, index) => (
      <span
        key={index}
        className="char inline-block"
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, hsl(var(--cherry) / 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 80%, hsl(var(--cherry) / 0.05) 0%, transparent 50%),
            linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--gray-50)) 100%)
          `,
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-cherry/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-cherry/3 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
        <h1 
  ref={nameRef}
  className="
    hero-title
    text-display-lg md:text-display-xl
    font-display
    font-medium
    text-foreground
    mb-10 md:mb-14
    perspective-1000
  "
>
  {splitName('Esakkiammal G')}
</h1>


          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-heading-md md:text-heading-lg text-muted-foreground font-display mb-8"
          >
            Design-aware full-stack engineer with an AI-first mindset.
          </p>

          {/* Rotating tagline */}
          <div ref={taglineRef} className="h-12 mb-10 overflow-hidden">
            <p className="tagline-text text-body-lg md:text-heading-sm text-cherry font-medium">
              {taglines[currentTagline]}
            </p>
          </div>

          {/* Description */}
          <p
            ref={descRef}
            className="text-body-md md:text-body-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I'm a Computer Science student who enjoys building products that feel simple on the surface — 
            and solid underneath. I work across frontend, backend, and AI integrations, always trying to 
            understand the <span className="text-foreground font-medium">why</span> before the how. 
            <span className="block mt-4 text-gray-500">Curious by default. Calm under pressure. Always learning.</span>
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              Let's explore what I'm building
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get in touch
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-caption text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
