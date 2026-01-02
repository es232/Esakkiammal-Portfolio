import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface SplitTextProps {
  children: string;
  className?: string;
  type?: 'chars' | 'words' | 'lines';
  animation?: 'fade' | 'slide' | 'blur' | 'wave';
  delay?: number;
  stagger?: number;
  duration?: number;
  trigger?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
  children,
  className,
  type = 'chars',
  animation = 'slide',
  delay = 0,
  stagger = 0.03,
  duration = 0.8,
  trigger = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!trigger || !containerRef.current) return;

    const elements = elementsRef.current;

    const getAnimation = () => {
      switch (animation) {
        case 'fade':
          return { opacity: 0 };
        case 'slide':
          return { opacity: 0, y: 60 };
        case 'blur':
          return { opacity: 0, filter: 'blur(10px)' };
        case 'wave':
          return { opacity: 0, y: 40, rotateX: -90 };
        default:
          return { opacity: 0, y: 60 };
      }
    };

    gsap.set(elements, getAnimation());

    const tl = gsap.timeline({ delay });

    tl.to(elements, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      rotateX: 0,
      duration,
      stagger,
      ease: 'power3.out',
    });

    return () => {
      tl.kill();
    };
  }, [trigger, animation, delay, stagger, duration]);

  const splitContent = () => {
    elementsRef.current = [];

    if (type === 'chars') {
      return children.split('').map((char, index) => (
        <span
          key={index}
          ref={(el) => {
            if (el) elementsRef.current.push(el);
          }}
          className="char inline-block"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }

    if (type === 'words') {
      return children.split(' ').map((word, index) => (
        <span key={index} className="inline-block mr-[0.25em]">
          <span
            ref={(el) => {
              if (el) elementsRef.current.push(el);
            }}
            className="word inline-block"
          >
            {word}
          </span>
        </span>
      ));
    }

    // Lines type
    return (
      <span
        ref={(el) => {
          if (el) elementsRef.current.push(el);
        }}
        className="inline-block"
      >
        {children}
      </span>
    );
  };

  return (
    <div ref={containerRef} className={cn('overflow-hidden', className)}>
      {splitContent()}
    </div>
  );
};

export default SplitText;
