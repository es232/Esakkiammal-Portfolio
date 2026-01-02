import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Philosophy from '@/components/sections/Philosophy';
import Contact from '@/components/sections/Contact';
import Chatbot from '@/components/Chatbot';

gsap.registerPlugin(ScrollTrigger);

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth section transitions
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
      if (index === 0) return; // Skip hero section
      
      gsap.fromTo(
        section,
        { 
          opacity: 0.8,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="relative overflow-hidden">
      {/* SEO Meta */}
      <title>Esakkiammal G — Full-Stack Developer & AI Enthusiast</title>
      <meta 
        name="description" 
        content="Design-aware full-stack engineer with an AI-first mindset. Building calm, scalable web experiences with React, Node.js, and AI integrations." 
      />
      
      <Navigation />
      
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Philosophy />
      <Achievements />
      <Contact />
      
      <Chatbot />
    </main>
  );
};

export default Index;
