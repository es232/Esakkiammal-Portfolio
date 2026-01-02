import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Brain, Lightbulb, Bug, Sparkles } from 'lucide-react';

const thinkingPoints = [
  {
    icon: Lightbulb,
    text: 'I start with the problem, not the tech stack.',
  },
  {
    icon: Brain,
    text: 'I think through user flow before components.',
  },
  {
    icon: Sparkles,
    text: 'I balance clean logic with thoughtful design.',
  },
  {
    icon: Bug,
    text: 'When something breaks, I debug patiently.',
  },
];

const Philosophy: React.FC = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal animation="slide-up" className="text-center mb-12">
            <h2 className="text-display-sm font-display font-bold text-foreground mb-4">
              How I Think When I'm Building
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {thinkingPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <ScrollReveal
                  key={index}
                  animation="fade"
                  delay={index * 0.1}
                >
                  <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border/50 card-lift">
                    <div className="flex-shrink-0 w-10 h-10 bg-cherry/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cherry" />
                    </div>
                    <p className="text-body-md text-foreground font-medium">
                      {point.text}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal animation="fade" delay={0.4}>
            <div className="text-center p-8 bg-cherry/5 rounded-2xl border border-cherry/10">
              <p className="text-body-lg text-foreground">
                When AI fits, I use it carefully.<br />
                When I don't know something, I learn it — <span className="text-cherry font-semibold">fast</span>.
              </p>
              <p className="text-heading-sm font-display font-bold text-cherry mt-4">
                That's my loop.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
