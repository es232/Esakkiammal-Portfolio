import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, ExternalLink, Github, ArrowLeft, Sparkles, Target, Layers, ShieldAlert, TrendingUp, Lightbulb } from 'lucide-react';
import { ProjectData } from '@/pages/Index';

interface Props {
  project: ProjectData;
  onClose: () => void;
}

const ProjectDetail: React.FC<Props> = ({ project, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Enter animation
    gsap.fromTo(containerRef.current,
      { y: '100%' },
      { y: '0%', duration: 0.8, ease: 'power4.out' }
    );

    gsap.fromTo(contentRef.current?.children || [],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.4, ease: 'power3.out' }
    );

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    gsap.to(containerRef.current, {
      y: '100%',
      duration: 0.6,
      ease: 'power4.in',
      onComplete: onClose
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-3xl overflow-y-auto"
    >
      <div className="min-h-screen relative pb-32">
        <button
          onClick={handleClose}
          className="fixed top-8 left-8 md:left-auto md:right-8 z-50 px-6 py-3 bg-card border border-border rounded-full hover:bg-secondary transition-colors interactive shadow-soft flex items-center gap-2 group"
        >
          <ArrowLeft className="w-5 h-5 md:hidden" />
          <span className="font-medium hidden md:block">Close Case Study</span>
          <X className="w-5 h-5 hidden md:block group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="container mx-auto px-6 lg:px-12 pt-32 max-w-6xl" ref={contentRef}>
          {/* Header */}
          <div className="mb-16">
            <span className="text-accent uppercase tracking-widest text-sm mb-4 block">Case Study</span>
            <h1 className="text-display-md lg:text-display-lg font-display text-foreground mb-6">
              {project.title}
            </h1>
            <p className="text-heading-md font-light text-muted-foreground leading-relaxed max-w-4xl">
              {project.oneLiner}
            </p>
            {project.overview && (
              <p className="text-body-lg text-muted-foreground/80 leading-relaxed max-w-4xl mt-6 pt-6 border-t border-border/50">
                {project.overview}
              </p>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-20">
            {project.stack.map(tech => (
              <span key={tech} className="px-4 py-2 border border-border/50 rounded-full text-sm font-mono text-foreground bg-secondary/50">
                {tech}
              </span>
            ))}
          </div>

          {/* Project Images Gallery (Ready for Uploads) */}
          {project.images && project.images.length > 0 && (
            <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((img, idx) => (
                <div key={idx} className="rounded-3xl overflow-hidden border border-border/50 shadow-soft bg-secondary aspect-video">
                  <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}

          <div className="grid md:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="md:col-span-8 space-y-16">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-5 h-5 text-primary" />
                  <h2 className="text-display-sm font-display text-primary">The Problem</h2>
                </div>
                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </section>

              {project.vision && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h2 className="text-display-sm font-display text-primary">The Vision</h2>
                  </div>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    {project.vision}
                  </p>
                </section>
              )}

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-5 h-5 text-primary" />
                  <h2 className="text-display-sm font-display text-primary">Architecture & Implementation</h2>
                </div>
                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  {project.architecture}
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <ShieldAlert className="w-5 h-5 text-primary" />
                  <h2 className="text-display-sm font-display text-primary">Challenges & Solutions</h2>
                </div>
                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </section>

              {project.impact && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h2 className="text-display-sm font-display text-primary">Impact</h2>
                  </div>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    {project.impact}
                  </p>
                </section>
              )}

              {project.learnings && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <h2 className="text-display-sm font-display text-primary">Key Learnings</h2>
                  </div>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    {project.learnings}
                  </p>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-4">
              <div className="sticky top-12 p-8 border border-border/50 rounded-3xl bg-card shadow-soft">
                <h3 className="text-heading-sm font-display text-foreground mb-4">Results & Impact</h3>
                <p className="text-body-md text-muted-foreground mb-8 pb-8 border-b border-border/50">
                  {project.results}
                </p>

                <div className="flex flex-col gap-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full p-4 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition-colors interactive group">
                      <span className="font-medium">View Live Site</span>
                      <ExternalLink className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full p-4 border border-border rounded-2xl hover:bg-secondary transition-colors interactive group">
                      <span className="font-medium text-foreground">Source Code</span>
                      <Github className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;