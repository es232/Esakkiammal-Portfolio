import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'blur';
  delay?: number;
  duration?: number;
  threshold?: number;
  stagger?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  animation = 'fade',
  delay = 0,
  duration = 0.8,
  threshold = 0.2,
  stagger = 0,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const getInitialState = () => {
      switch (animation) {
        case 'fade':
          return { opacity: 0 };
        case 'slide-up':
          return { opacity: 0, y: 60 };
        case 'slide-left':
          return { opacity: 0, x: -60 };
        case 'slide-right':
          return { opacity: 0, x: 60 };
        case 'scale':
          return { opacity: 0, scale: 0.9 };
        case 'blur':
          return { opacity: 0, filter: 'blur(10px)' };
        default:
          return { opacity: 0 };
      }
    };

    gsap.set(element, getInitialState());

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: `top ${100 - threshold * 100}%`,
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration,
          delay,
          ease: 'power3.out',
          stagger,
        });
      },
      once: true,
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [animation, delay, duration, threshold, stagger]);

  return (
    <div ref={elementRef} className={cn(className)}>
      {children}
    </div>
  );
};

export default ScrollReveal;
