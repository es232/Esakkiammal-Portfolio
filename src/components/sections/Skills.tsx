import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { 
  Palette, 
  Server, 
  Brain, 
  Wrench, 
  Code,
  Sparkles 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    icon: Palette,
    title: 'Building & UI Craft',
    description: 'I enjoy crafting interfaces that feel calm, intentional, and responsive. I pay attention to spacing, motion, and interaction details that quietly guide users.',
    tools: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    color: 'cherry',
  },
  {
    icon: Server,
    title: 'Systems & APIs',
    description: 'I like building the invisible layers that make products reliable — APIs, authentication, and data flow that hold up under real usage.',
    tools: ['Node.js', 'Express.js', 'REST APIs', 'Firebase', 'MySQL', 'JWT Authentication'],
    color: 'gray',
  },
  {
    icon: Brain,
    title: 'AI & Smart Features',
    description: "I'm especially interested in AI when it improves real user experience. I enjoy experimenting, integrating, and learning how AI fits naturally into products.",
    tools: ['AI Chatbots', 'Prompt Engineering', 'AI-assisted Flows', 'Real-time AI Features'],
    color: 'cherry',
  },
  {
    icon: Sparkles,
    title: 'Exploring AI Tools',
    description: 'I actively explore modern AI tools to understand how they can accelerate development, creativity, and problem-solving.',
    tools: ['ChatGPT', 'Gemini', 'AI Dev Assistants', 'Prompt Engineering', 'AI Productivity'],
    color: 'gray',
  },
  {
    icon: Code,
    title: 'Problem Solving & CS Foundations',
    description: 'Strong fundamentals help me move fast without breaking things. I enjoy debugging and understanding problems deeply.',
    tools: ['Java', 'Python', 'C', 'OOP', 'Data Structures & Algorithms', 'Debugging'],
    color: 'cherry',
  },
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.skill-card');

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: index * 0.1,
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
      id="skills"
      className="relative py-32 bg-background overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cherry/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gray-100 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <ScrollReveal animation="slide-up" className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cherry/10 text-cherry text-caption font-medium rounded-full mb-6">
            <Wrench className="w-4 h-4" />
            Skills
          </span>
          <h2 className="text-display-sm md:text-display-md font-display font-bold text-foreground mb-4">
            What I Actually Enjoy Building
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            Skills by thinking style — from crafting beautiful UIs to building reliable systems.
          </p>
        </ScrollReveal>

        {/* Skills grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isCherry = category.color === 'cherry';
            
            return (
              <div
                key={index}
                className={`skill-card group relative perspective-1000 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className={`
                  relative h-full p-8 rounded-2xl border transition-all duration-500
                  ${isCherry 
                    ? 'bg-card border-cherry/20 hover:border-cherry/40 hover:shadow-cherry' 
                    : 'bg-gray-50 border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }
                `}>
                  {/* Icon */}
                  <div className={`
                    inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6
                    ${isCherry ? 'bg-cherry/10' : 'bg-gray-200'}
                  `}>
                    <Icon className={`w-7 h-7 ${isCherry ? 'text-cherry' : 'text-gray-600'}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-heading-md font-display font-bold text-foreground mb-4">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body-md text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className={`
                          px-3 py-1.5 text-caption font-medium rounded-full transition-colors
                          ${isCherry 
                            ? 'bg-cherry/10 text-cherry hover:bg-cherry/20' 
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                          }
                        `}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Hover glow effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10
                    ${isCherry ? 'bg-cherry/5' : 'bg-gray-100'}
                  `} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
