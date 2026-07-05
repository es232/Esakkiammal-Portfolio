import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Trophy, Medal, Star, FileText, Users, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FlipCard = ({ title, issuer, date, imagePath, icon: Icon = Award }: { title: string, issuer: string, date: string, imagePath: string, icon?: any }) => {
  return (
    <div className="group w-full h-[250px] [perspective:1000px] interactive">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front */}
        <div className="absolute inset-0 bg-card border border-border/50 rounded-3xl p-6 flex flex-col items-center text-center justify-center [backface-visibility:hidden] shadow-soft">
          <Icon className="w-10 h-10 text-accent mb-4" />
          <h4 className="text-heading-sm font-display font-medium text-foreground mb-2 leading-tight">{title}</h4>
          <p className="text-body-sm text-primary font-medium">{issuer}</p>
          {date && <p className="text-xs font-mono text-muted-foreground mt-2">{date}</p>}
        </div>

        {/* Back */}
        <div className="absolute inset-0 bg-secondary rounded-3xl [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden border border-border shadow-soft flex items-center justify-center p-2">
          <img 
            src={imagePath} 
            alt={title} 
            className="w-full h-full object-contain rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/2B2B2B/FFFDF8?text=Certificate+Image\\nUpload+to+'+imagePath;
            }}
          />
        </div>

      </div>
    </div>
  );
};

const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.ach-anim') as HTMLElement[];
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
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
    <section id="achievements" ref={sectionRef} className="relative py-32 bg-background overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="text-center mb-24 ach-anim">
          <span className="text-accent uppercase tracking-widest text-sm mb-4 block">Legacy</span>
          <h2 className="text-display-md font-display text-foreground">
            Honors & Leadership
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column */}
          <div className="space-y-16">
            
            {/* Building More Than Software (Now with Flip Cards!) */}
            <div className="ach-anim">
              <div className="flex items-center gap-3 mb-8">
                <Star className="w-6 h-6 text-accent" />
                <h3 className="text-display-sm font-display text-foreground">Awards & Hackathons</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <FlipCard 
                  title="2nd Place" 
                  issuer="VISAI 2026 Innovation" 
                  date="IoT Smart Solar" 
                  imagePath="/images/visai.jpg" 
                  icon={Medal}
                />
                <FlipCard 
                  title="Special Jury Award" 
                  issuer="AURA'25 Hackathon" 
                  date="Problem-Solving & UX" 
                  imagePath="/images/aura.png" 
                  icon={Trophy}
                />
                <div className="sm:col-span-2">
                  <FlipCard 
                    title="Winner - Poster Design" 
                    issuer="Cyber Crime Wing 2024" 
                    date="Women's Safety Campaign" 
                    imagePath="/images/Cyber.jpeg" 
                    icon={Award}
                  />
                </div>
              </div>
              <p className="text-xs text-center text-muted-foreground mt-4 italic">Hover over cards to view award photos</p>
            </div>

            {/* Leadership Beyond Code */}
            <div className="ach-anim">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-display-sm font-display text-foreground">Leadership Beyond Code</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-3xl border border-border/50 shadow-soft">
                  <h4 className="text-heading-sm font-medium text-foreground mb-1">Campus Ambassador</h4>
                  <p className="text-primary text-sm font-medium mb-4">E-Cell IIT Bombay</p>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    Represented E-Cell IIT Bombay, promoting innovation and startup culture. Connected the campus with national-level entrepreneurial initiatives, strengthening networking and community-building skills.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-3xl border border-border/50 shadow-soft">
                  <h4 className="text-heading-sm font-medium text-foreground mb-1">Chief Event Coordinator</h4>
                  <p className="text-primary text-sm font-medium mb-4">Coding Club</p>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    Led technical events, hackathons, and workshops. Designed and implemented an AI-powered workflow to automatically deliver personalized opportunity alerts via email, improving student engagement.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-16">

            {/* Research & Publications */}
            <div className="ach-anim">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-6 h-6 text-primary" />
                <h3 className="text-display-sm font-display text-foreground">Research & Publications</h3>
              </div>
              <div className="space-y-6">
                <a href="#" className="block p-6 rounded-3xl bg-secondary/50 border border-border hover:border-primary transition-colors interactive group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-heading-sm font-medium text-foreground group-hover:text-primary transition-colors">BridgeAI: Multilingual AI Framework</h4>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mb-3">IJETS • Vol. XIII, Issue IV • Apr 2026</p>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    Explores how AI can bridge educational accessibility gaps by delivering personalized opportunity recommendations through multilingual support.
                  </p>
                </a>
                <a href="#" className="block p-6 rounded-3xl bg-secondary/50 border border-border hover:border-primary transition-colors interactive group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-heading-sm font-medium text-foreground group-hover:text-primary transition-colors">UpliftU: Tailored Mental Wellness</h4>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground mb-3">IJETS • Vol. XI, Issue IX • Sep 2024</p>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    Leveraging technology to improve student mental health through personalized wellness support, empathy, and thoughtful system design.
                  </p>
                </a>
              </div>
            </div>

            {/* Certifications (Flip Cards) */}
            <div className="ach-anim">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-display-sm font-display text-foreground">Certifications</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <FlipCard 
                  title="AWS Certified AI Practitioner" 
                  issuer="Amazon Web Services" 
                  date="Valid until 2029" 
                  imagePath="/images/aws-ai.jpg" 
                  icon={Award}
                />
                <FlipCard 
                  title="AI Fluency: Frameworks" 
                  issuer="Anthropic" 
                  date="Professional Certificate" 
                  imagePath="/images/anthro.jpg" 
                  icon={Star}
                />
                <FlipCard 
                  title="Human Computer Interaction" 
                  issuer="NPTEL - Elite + Gold" 
                  date="96% Score" 
                  imagePath="/images/NPTEL2.jpg" 
                  icon={Medal}
                />
                <FlipCard 
                  title="Privacy & Security" 
                  issuer="NPTEL - Top 1%" 
                  date="87% Score" 
                  imagePath="/images/nptel-1.jpg" 
                  icon={Trophy}
                />
              </div>
              <p className="text-xs text-center text-muted-foreground mt-4 italic">Hover over cards to view certificates</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;