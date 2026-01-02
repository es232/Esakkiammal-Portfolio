import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MagneticButton from '@/components/ui/MagneticButton';
import { Folder, ExternalLink, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'UpliftU',
    subtitle: 'Mental Health & Student Wellness Platform',
    problem: 'College students often struggle with stress, burnout, and emotional overwhelm — with limited access to personalized mental health support.',
    solution: 'UpliftU is a wellness-focused platform designed to feel friendly, safe, and supportive. It brings together mood tracking, AI-powered emotional check-ins, affirmations, meditation, and self-reflection tools in one calming space.',
    tech: ['Web Platform', 'UX Design', 'AI Integration', 'Personalization'],
    impact: 'The project emphasized emotional clarity and user comfort, showing how technology can support mental well-being without overwhelming users.',
    takeaway: 'Empathy is a design skill — and software can feel human when built with care.',
    featured: true,
  },
  {
    title: 'LearnBloom',
    subtitle: 'Peer-to-Peer Learning & Scheduling Platform',
    problem: 'Students struggle to organize peer learning, manage sessions, and get guidance in one place.',
    solution: 'A peer-learning platform that combines scheduling, role-based access, and an AI-powered learning assistant to support collaboration.',
    tech: ['React', 'Firebase', 'AI Chatbot', 'Authentication'],
    impact: 'Created a learning experience that felt personal, structured, and easy to use.',
    takeaway: 'Good systems disappear into the background — and that\'s a win.',
    featured: false,
  },
  {
    title: 'Career Tracker',
    subtitle: 'Student Development App',
    problem: 'Students often track grades, but not growth.',
    solution: 'A dashboard-based application that helps students track skills, goals, internships, and progress over time.',
    tech: ['Python', 'SQL', 'JavaScript', 'Dashboard'],
    impact: 'Made growth visible and motivating instead of abstract.',
    takeaway: 'Clarity builds confidence.',
    featured: false,
  },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: index * 0.15,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-32 bg-gray-50 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-cherry/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <ScrollReveal animation="slide-up" className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cherry/10 text-cherry text-caption font-medium rounded-full mb-6">
            <Folder className="w-4 h-4" />
            Projects
          </span>
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-foreground mb-4">
            Things I've Built & Loved
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            Case studies of products that solve real problems — with care and intention.
          </p>
        </ScrollReveal>

        {/* Featured project */}
        <div className="project-card mb-16">
          <div className="bg-card rounded-3xl overflow-hidden shadow-elevated border border-border/50 card-lift">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project visual */}
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-cherry via-cherry-dark to-cherry overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Heart className="w-16 h-16 text-primary-foreground/80 mx-auto mb-4" />
                    <h3 className="text-display-sm font-display font-bold text-primary-foreground">
                      {projects[0].title}
                    </h3>
                    <p className="text-body-md text-primary-foreground/80 mt-2">
                      {projects[0].subtitle}
                    </p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 border border-primary-foreground/20 rounded-full" />
                <div className="absolute bottom-10 right-10 w-32 h-32 border border-primary-foreground/10 rounded-full" />
              </div>

              {/* Project content */}
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-cherry/10 text-cherry text-caption font-semibold rounded-full mb-6">
                  Featured Project
                </span>
                
                <h4 className="text-heading-md font-display font-bold text-foreground mb-4">
                  The Problem
                </h4>
                <p className="text-body-md text-muted-foreground mb-6">
                  {projects[0].problem}
                </p>

                <h4 className="text-heading-md font-display font-bold text-foreground mb-4">
                  The Solution
                </h4>
                <p className="text-body-md text-muted-foreground mb-6">
                  {projects[0].solution}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[0].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-100 text-gray-600 text-caption font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Takeaway */}
                <div className="p-4 bg-cherry/5 rounded-xl border border-cherry/10">
                  <p className="text-body-sm text-foreground font-medium italic">
                    "{projects[0].takeaway}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(1).map((project, index) => (
            <div
              key={index}
              className="project-card bg-card rounded-2xl p-8 shadow-soft border border-border/50 card-lift"
            >
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-caption font-semibold rounded-full mb-4">
                {project.subtitle}
              </span>

              <h3 className="text-heading-lg font-display font-bold text-foreground mb-4">
                {project.title}
              </h3>

              <p className="text-body-md text-muted-foreground mb-4">
                <strong className="text-foreground">Problem:</strong> {project.problem}
              </p>

              <p className="text-body-md text-muted-foreground mb-6">
                <strong className="text-foreground">Solution:</strong> {project.solution}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-caption font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Takeaway */}
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-body-sm text-gray-600 italic">
                  "{project.takeaway}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <ScrollReveal animation="fade" delay={0.3} className="mt-20">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border/50">
            <h3 className="text-heading-md font-display font-bold text-center text-foreground mb-8">
              Impact, Not Just Lines of Code
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-display-sm font-display font-bold text-cherry">4+</p>
                <p className="text-body-sm text-muted-foreground mt-1">Production Apps</p>
              </div>
              <div>
                <p className="text-display-sm font-display font-bold text-cherry">100%</p>
                <p className="text-body-sm text-muted-foreground mt-1">Mobile Responsive</p>
              </div>
              <div>
                <p className="text-display-sm font-display font-bold text-cherry">AI</p>
                <p className="text-body-sm text-muted-foreground mt-1">Integrated Features</p>
              </div>
              <div>
                <p className="text-display-sm font-display font-bold text-cherry">🏆</p>
                <p className="text-body-sm text-muted-foreground mt-1">Hackathon Winner</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
