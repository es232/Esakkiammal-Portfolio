import React, { useEffect, useRef } from 'react';

/**
 * Lightweight custom cursor.
 *
 * - Two elements only: a small dot (tracks instantly) and a ring (eases behind it).
 * - Positioned via CSS transform in a single requestAnimationFrame loop — no React
 *   re-renders on mouse move, so it stays cheap even on low-power devices.
 * - Auto-disables on touch/coarse-pointer devices and when the user prefers reduced motion.
 * - Grows + fills whenever the pointer is over any element with the existing
 *   `.interactive` class already used throughout the site — no per-component wiring needed.
 *
 * Mount this once near the root of the app (e.g. in App.tsx, alongside your routes),
 * and add the two small CSS rules noted at the bottom of this file to your global stylesheet.
 */
const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const enabledRef = useRef(false);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isCoarsePointer || prefersReducedMotion) {
      return; // Leave the native cursor alone.
    }

    enabledRef.current = true;
    document.body.classList.add('custom-cursor-active');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId: number;
    let isHovering = false;
    let visible = false;

    const RING_EASE = 0.18;

    const showCursor = () => {
      if (!visible) {
        visible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    };

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      showCursor();
    };

    const handleLeaveWindow = () => {
      visible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoveringInteractive = !!target.closest('.interactive');
      if (hoveringInteractive !== isHovering) {
        isHovering = hoveringInteractive;
        ring.style.width = isHovering ? '44px' : '32px';
        ring.style.height = isHovering ? '44px' : '32px';
        ring.style.backgroundColor = isHovering ? 'hsl(var(--primary) / 0.12)' : 'transparent';
        ring.style.borderColor = isHovering ? 'transparent' : 'hsl(var(--primary) / 0.5)';
        dot.style.transform = `translate(-50%, -50%) scale(${isHovering ? 0.6 : 1})`;
      }
    };

    const tick = () => {
      // Dot tracks the raw pointer position 1:1 — feels instant and precise.
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;

      // Ring eases toward the pointer — gives a soft trailing feel at negligible cost.
      ringX += (mouseX - ringX) * RING_EASE;
      ringY += (mouseY - ringY) * RING_EASE;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    document.addEventListener('mouseleave', handleLeaveWindow);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleLeaveWindow);
      cancelAnimationFrame(rafId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  if (typeof window !== 'undefined') {
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isCoarsePointer || prefersReducedMotion) return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-primary pointer-events-none opacity-0 transition-opacity duration-200"
        style={{ transform: 'translate(-50%, -50%)', willChange: 'transform, left, top' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full border pointer-events-none opacity-0 transition-[opacity,width,height,background-color,border-color] duration-200 ease-out"
        style={{
          transform: 'translate(-50%, -50%)',
          borderColor: 'hsl(var(--primary) / 0.5)',
          willChange: 'transform, left, top',
        }}
      />
    </>
  );
};

export default CustomCursor;

/**
 * Add to your global stylesheet (e.g. index.css), outside any @layer if your
 * Tailwind setup strips unused classes:
 *
 * body.custom-cursor-active {
 *   cursor: none;
 * }
 * body.custom-cursor-active .interactive,
 * body.custom-cursor-active a,
 * body.custom-cursor-active button {
 *   cursor: none;
 * }
 *
 * Then mount once near your app root:
 *
 *   import CustomCursor from '@/components/CustomCursor';
 *   ...
 *   <CustomCursor />
 *   <YourRoutesOrPages />
 */