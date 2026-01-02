import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Award, Trophy, Medal, ExternalLink } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Top 1% — NPTEL Certification',
    description: 'Privacy and Security in Online Social Media',
    type: 'certification',
  },
  {
    icon: Award,
    title: 'Winner — Poster Competition',
    description: '"Sextortion and Women Safety in Digital Media"',
    type: 'competition',
  },
  {
    icon: Medal,
    title: 'Special Jury Award — AURA\'25 Hackathon',
    description: 'Recognized for innovation and technical excellence',
    type: 'hackathon',
  },
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-cherry/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <ScrollReveal animation="slide-up" className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cherry/10 text-cherry text-caption font-medium rounded-full mb-6">
            <Award className="w-4 h-4" />
            Recognition
          </span>
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-foreground mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            Milestones that mark the journey — always learning, always growing.
          </p>
        </ScrollReveal>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <ScrollReveal
                key={index}
                animation="scale"
                delay={index * 0.1}
              >
                <div className="group bg-card rounded-2xl p-8 text-center border border-border/50 card-lift hover:border-cherry/30 transition-colors">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cherry/10 rounded-2xl mb-6 group-hover:bg-cherry/20 transition-colors">
                    <Icon className="w-8 h-8 text-cherry" />
                  </div>
                  <h3 className="text-heading-sm font-display font-bold text-foreground mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-body-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
{/* Journal Publications */}
<div className="max-w-4xl mx-auto mb-24">
  <ScrollReveal animation="slide-up">
    <h3 className="text-heading-lg font-display font-bold text-foreground mb-8 text-center">
      Journal Publications
    </h3>
  </ScrollReveal>

  <div className="space-y-8">
    <ScrollReveal animation="fade">
      <div className="bg-card border border-border/50 rounded-2xl p-8 card-lift">
        <h4 className="text-heading-sm font-display font-bold mb-2">
          Real-Time Fault Detection in Power Systems using AI
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          IJETS Journal • Volume XI, Issue IX • September 2024
        </p>
        <p className="text-body-sm text-muted-foreground">
          An AI-driven approach for detecting faults in power systems in real time,
          focusing on accuracy, reliability, and system resilience.
        </p>
      </div>
    </ScrollReveal>

    <ScrollReveal animation="fade" delay={0.1}>
      <div className="bg-card border border-border/50 rounded-2xl p-8 card-lift">
        <h4 className="text-heading-sm font-display font-bold mb-2">
          Uplift — A Tailored Mental Wellness Platform for Enhancing Student Well-being
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          IJETS Journal • Volume XI, Issue IX • September 2024
        </p>
        <p className="text-body-sm text-muted-foreground">
          A personalized mental wellness platform designed to support student well-being
          through technology, empathy, and thoughtful system design.
        </p>
      </div>
    </ScrollReveal>
  </div>
</div>
{/* Certifications & Learning */}
<div className="max-w-5xl mx-auto mb-24">
  <ScrollReveal animation="slide-up">
    <h3 className="text-heading-lg font-display font-bold text-foreground mb-12 text-center">
      Certifications & Learning
    </h3>
  </ScrollReveal>

  <div className="grid md:grid-cols-2 gap-8">
    <ScrollReveal animation="scale">
      <div className="bg-card rounded-2xl p-8 border border-border/50 card-lift">
        <h4 className="font-display font-bold mb-4">Industry Simulations</h4>
        <ul className="space-y-2 text-muted-foreground text-body-sm">
          <li>Solutions Architecture Job Simulation — Forage (AWS)</li>
          <li>Software Engineering Job Simulation — Forage (Goldman Sachs)</li>
        </ul>
      </div>
    </ScrollReveal>

    <ScrollReveal animation="scale" delay={0.1}>
      <div className="bg-card rounded-2xl p-8 border border-border/50 card-lift">
        <h4 className="font-display font-bold mb-4">Technical Certifications</h4>
        <ul className="space-y-2 text-muted-foreground text-body-sm">
          <li>CCNA: Introduction to Networks — Cisco Networking Academy</li>
          <li>
            Privacy and Security in Social Media — NPTEL  
            <span className="ml-2 text-cherry font-medium">(Top 1% Performer)</span>
          </li>
        </ul>
      </div>
    </ScrollReveal>

    <ScrollReveal animation="scale" delay={0.2}>
      <div className="bg-card rounded-2xl p-8 border border-border/50 card-lift">
        <h4 className="font-display font-bold mb-4">AI & Prompt Engineering</h4>
        <ul className="space-y-2 text-muted-foreground text-body-sm">
          <li>Prompt Engineering for ChatGPT — Great Learning</li>
          <li>Learning Any Topic Using ChatGPT & AI — Udemy</li>
        </ul>
      </div>
    </ScrollReveal>

    <ScrollReveal animation="scale" delay={0.3}>
      <div className="bg-card rounded-2xl p-8 border border-border/50 card-lift">
        <h4 className="font-display font-bold mb-4">Professional Development</h4>
        <ul className="space-y-2 text-muted-foreground text-body-sm">
          <li>Communication Skills for Success — Udemy</li>
        </ul>
      </div>
    </ScrollReveal>
  </div>
</div>

        {/* SkillRack profile */}
        <ScrollReveal animation="fade" delay={0.3}>
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-heading-md font-display font-bold text-foreground mb-4">
              Coding Practice & Continuous Learning
            </h3>
            <p className="text-body-md text-muted-foreground mb-6">
              I regularly sharpen my problem-solving skills through structured coding platforms.
            </p>
            <a
              href="https://www.skillrack.com/faces/resume.xhtml?id=525888&key=3bad68e7f2e9eb936a4380448ebee84fe9b52a36"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-foreground font-medium rounded-full transition-colors"
            >
              View SkillRack Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Achievements;
