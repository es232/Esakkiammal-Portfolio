import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'RPA Intern',
    company: 'Zimph Solutions (Zoho Partner)',
    period: 'Mar 2026 – May 2026',
    description: 'Engineered and deployed an end-to-end RPA automation system using Zoho RPA to streamline the IndiaMART lead acquisition lifecycle. Architected a high-frequency automation pipeline processing inbound leads every 30 seconds, integrating seamlessly with Zoho CRM.',
    impact: 'Scaled weekly lead acquisition to 50+ qualified leads, contributing to an estimated 40% increase in revenue.'
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Zidio',
    period: 'May 2025 – Jul 2025',
    description: 'Developed a responsive Excel Analytics Dashboard using the MERN stack and REST APIs. Implemented secure JWT-based authentication and role-based access control.',
    impact: 'Optimized API workflows and frontend rendering performance, reducing processing latency by 30%.'
  },
  {
    role: 'Web Development Intern',
    company: 'InternPe',
    period: 'Jan 2025 – Mar 2025',
    description: 'Developed responsive web applications focusing on modern UI/UX interfaces with animations, glassmorphism, and interactive components. Ensured mobile-first cross-browser compatibility.',
    impact: 'Delivered 4+ robust web experiences utilized for active user engagement.'
  },
];

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray('.exp-item') as HTMLElement[];
    
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative py-32 bg-card border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        <div className="mb-24">
          <span className="text-accent uppercase tracking-widest text-sm mb-4 block">Professional Background</span>
          <h2 className="text-display-md font-display text-foreground">
            Experience
          </h2>
        </div>

        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <div key={index} className="exp-item group flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-1/3 flex-shrink-0">
                <p className="text-muted-foreground font-mono text-sm tracking-wider mb-2">{exp.period}</p>
                <h3 className="text-heading-sm font-display font-medium text-foreground">{exp.role}</h3>
                <p className="text-primary text-sm font-medium mt-1">{exp.company}</p>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="pl-6 border-l-2 border-accent/50 bg-accent/5 p-4 rounded-r-lg">
                  <p className="text-body-sm font-medium text-foreground">
                    <span className="text-accent uppercase tracking-wider text-xs block mb-1">Impact</span>
                    {exp.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
