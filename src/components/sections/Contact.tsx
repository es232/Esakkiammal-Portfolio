import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Mail, Github, Linkedin, ArrowUpRight, Send, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus('loading');
  
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData);

  try {
    // Inside handleSubmit in Contact.tsx
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
    if (response.ok) {
      setStatus('success');
      (e.target as HTMLFormElement).reset(); // Clear form on success
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }
};
  return (
    <section id="contact" className="relative py-32 bg-foreground overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 50%, hsl(var(--cherry) / 0.15) 0%, transparent 60%),
            linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(var(--gray-900)) 100%)
          `,
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Text & Socials */}
          <div className="space-y-8">
            <ScrollReveal animation="slide-up">
              <h2 className="text-display-sm md:text-display-md font-display font-bold text-background mb-6">
                Let's Build <span className="text-cherry">Something</span>
              </h2>
              <p className="text-body-lg text-gray-400 max-w-md">
                If you're building products that value clarity and quiet excellence — I'd love to connect.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade" delay={0.2} className="space-y-6">
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:esakkiammalg1011@gmail.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-cherry transition-colors group w-fit"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center group-hover:bg-cherry/20 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">esakkiammalg1011@gmail.com</span>
                </a>
              </div>

              <div className="pt-8 border-t border-gray-800">
                <p className="text-body-sm text-gray-500 mb-6 uppercase tracking-widest">Digital Spaces</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/es232" },
                    { icon: Linkedin, href: "https://linkedin.com/in/esakkiammal-g-134b23290" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      className="w-12 h-12 bg-gray-800/50 hover:bg-cherry rounded-full flex items-center justify-center text-background transition-all hover:-translate-y-1"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: The Form */}
          <ScrollReveal animation="slide-up" delay={0.3}>
            <form 
              onSubmit={handleSubmit}
              className="bg-gray-900/40 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Name</label>
                  <input 
                    required name="name" type="text" 
                    className="w-full bg-gray-800/30 border border-gray-700 rounded-lg px-4 py-3 text-background focus:outline-none focus:border-cherry transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Email</label>
                  <input 
                    required name="email" type="email" 
                    className="w-full bg-gray-800/30 border border-gray-700 rounded-lg px-4 py-3 text-background focus:outline-none focus:border-cherry transition-colors placeholder:text-gray-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Message</label>
                <textarea 
                  required name="message" rows={4} placeholder="What's on your mind?"
                  className="w-full bg-gray-800/30 border border-gray-700 rounded-lg px-4 py-3 text-background focus:outline-none focus:border-cherry transition-colors placeholder:text-gray-600 resize-none"
                />
              </div>

              <button
                disabled={status === 'loading'}
                className="w-full py-4 bg-cherry hover:bg-cherry/90 disabled:bg-gray-700 text-background font-bold rounded-lg transition-all flex items-center justify-center gap-2 group"
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
                <p className="text-center text-sm text-green-400 animate-fade-in">Thanks! I'll get back to you soon.</p>
              )}
            </form>
          </ScrollReveal>

        </div>
      </div>

      {/* Footer stays at the bottom */}
      <div className="mt-32 py-8 border-t border-gray-800">
        <p className="text-center text-body-sm text-gray-600">
          Designed & built with care by Esakkiammal G • {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Contact;