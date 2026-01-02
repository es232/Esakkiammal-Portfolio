import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Briefcase, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Zidio',
    description: `At Zidio, I worked on a real product with real users — where clarity and reliability mattered. I helped build an AI-driven full-stack React application using Firebase, including a personalized learning chatbot, secure authentication, role-based access, and session scheduling.`,
    insight: 'I learned to think in systems — not just screens.',
    skills: ['React', 'Firebase', 'AI Chatbot', 'Authentication', 'API Design'],
  },
  {
    title: 'Web Development Intern',
    company: 'InternPe',
    description: `At InternPe, speed and polish were key. I built 4+ responsive web applications using HTML, CSS, and JavaScript, focusing on mobile-first layouts, modern UI patterns, and interaction details like subtle animations and glassmorphism.`,
    insight: 'I began designing interfaces that feel good to use — not just good to look at.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
  },
];

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const line = timelineRef.current.querySelector('.timeline-line');
    
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 bg-gray-50"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <ScrollReveal animation="slide-up" className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cherry/10 text-cherry text-caption font-medium rounded-full mb-6">
            <Briefcase className="w-4 h-4" />
            Experience
          </span>
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-foreground mb-4">
            My Journey So Far
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            Experience, told simply — from building real products to crafting polished interfaces.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px">
            <div className="timeline-line absolute inset-0 bg-gradient-to-b from-cherry via-cherry to-cherry/20 origin-top" />
          </div>

          {/* Experience cards */}
          {experiences.map((exp, index) => (
            <ScrollReveal
              key={index}
              animation={index % 2 === 0 ? 'slide-right' : 'slide-left'}
              delay={index * 0.1}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 
                  ? 'md:pr-1/2 md:text-right md:ml-0 md:mr-auto' 
                  : 'md:pl-1/2 md:text-left md:ml-auto md:mr-0'
              } pl-8 md:pl-0 md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-auto ${
                index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
              } top-0 w-4 h-4 bg-cherry rounded-full border-4 border-background shadow-cherry z-10`} />

              {/* Card */}
              <div className={`bg-card rounded-2xl p-8 shadow-soft card-lift ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                  <span className="text-caption text-cherry font-semibold uppercase tracking-wider mb-2">
                    {exp.company}
                  </span>
                  <h3 className="text-heading-md font-display font-bold text-foreground mb-4">
                    {exp.title}
                  </h3>
                  <p className={`text-body-md text-muted-foreground mb-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {exp.description}
                  </p>

                  {/* Insight */}
                  <div className={`flex items-start gap-3 p-4 bg-cherry/5 rounded-xl mb-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <Sparkles className="w-5 h-5 text-cherry flex-shrink-0 mt-0.5" />
                    <p className={`text-body-sm text-foreground font-medium italic ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      "{exp.insight}"
                    </p>
                  </div>

                  {/* Skills */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-caption font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
