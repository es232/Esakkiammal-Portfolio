import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, Send, Loader2, Code2, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    label: 'GitHub',
    sublabel: 'Source & repos',
    icon: Github,
    href: 'https://github.com/es232',
  },
  {
    label: 'LinkedIn',
    sublabel: "Let's connect",
    icon: Linkedin,
    href: 'https://linkedin.com/in/esakkiammal-g-134b23290',
  },
  {
    label: 'LeetCode',
    sublabel: 'Problem solving',
    icon: Code2,
    href: 'https://leetcode.com/u/YZ8XSi0GdG/',
  },
  {
    label: 'SkillRack',
    sublabel: 'Verified resume',
    icon: Award,
    href: 'https://www.skillrack.com/faces/resume.xhtml?id=525888&key=3bad68e7f2e9eb936a4380448ebee84fe9b52a36',
  },
];

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = gsap.utils.toArray('.contact-anim') as HTMLElement[];
    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 bg-card border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div className="space-y-12">
            <div className="contact-anim">
              <span className="text-accent uppercase tracking-widest text-sm mb-4 block">Connect</span>
              <h2 className="text-display-md font-display text-foreground mb-6">
                Let's Build <span className="italic font-light">Something</span>
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                If you're building products that value clarity and quiet excellence — I'd love to connect. Whether it's AI systems or scalable architectures, let's talk.
              </p>
            </div>

            <div className="contact-anim space-y-6">
              <a
                href="mailto:esakkiammalg1011@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group w-fit interactive"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-body-lg font-medium">esakkiammalg1011@gmail.com</span>
              </a>
            </div>

            <div className="contact-anim pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest">Digital Presence</p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 bg-secondary/60 hover:bg-primary rounded-2xl px-4 py-3 text-foreground hover:text-primary-foreground transition-all hover:-translate-y-1 interactive group"
                  >
                    <div className="w-10 h-10 rounded-full bg-background/60 group-hover:bg-primary-foreground/15 flex items-center justify-center shrink-0 transition-colors">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-tight truncate">{social.label}</p>
                      <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80 leading-tight truncate transition-colors">
                        {social.sublabel}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-anim">
            <form
              onSubmit={handleSubmit}
              className="bg-background border border-border/50 p-8 md:p-10 rounded-3xl space-y-6 shadow-soft"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Name</label>
                  <input
                    required name="name" type="text"
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 interactive"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Email</label>
                  <input
                    required name="email" type="email"
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 interactive"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Message</label>
                <textarea
                  required name="message" rows={5} placeholder="What's on your mind?"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 resize-none interactive"
                />
              </div>

              <button
                disabled={status === 'loading'}
                className="w-full py-4 bg-primary hover:bg-primary/90 disabled:bg-muted text-primary-foreground font-medium rounded-xl transition-all flex items-center justify-center gap-2 group interactive"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === 'success' ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-center text-sm text-green-600 font-medium">Thanks! I'll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="mt-32 pt-8 border-t border-border/50">
        <p className="text-center text-body-sm text-muted-foreground font-light">
          Designed & built with intention by Esakkiammal G • {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Contact;