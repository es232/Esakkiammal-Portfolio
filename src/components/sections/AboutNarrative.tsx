import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const story = [
  {
    number: "01",
    title: "The Beginning",
    content:
      "Every meaningful journey starts with curiosity. Mine began with one simple question: 'What if technology could genuinely improve someone's life?' That question became the foundation of everything I build today. From AI-powered educational platforms to intelligent healthcare solutions, I've always believed software should solve real problems—not just showcase technology.",
  },
  {
    number: "02",
    title: "Why Artificial Intelligence?",
    content:
      "Artificial Intelligence fascinated me not because it was trending, but because it transforms how we solve problems. AI allows software to understand, adapt, and assist people in ways traditional systems never could. Every AI project I build begins with understanding people first, then designing technology around their needs.",
  },
  {
    number: "03",
    title: "Engineering With Purpose",
    content:
      "For me, engineering is more than writing clean code. It's about understanding people, simplifying complexity, and creating experiences that feel effortless. Whether I'm designing full-stack applications, developing AI-powered products, or publishing research, I focus on building technology that creates meaningful impact.",
  },
  {
    number: "04",
    title: "Leading Beyond Code",
    content:
      "Some of my biggest lessons didn't come from a classroom—they came from leading communities. As Chief Coding Club Event Coordinator and Campus Ambassador for E-Cell IIT Bombay, I learned that building products and building people require the same mindset: empathy, collaboration, communication, and ownership.",
  },
  {
    number: "05",
    title: "The Vision",
    content:
      "Today, I'm building AI-powered digital experiences that bridge technology and human needs. My goal isn't simply to become an AI Engineer—it's to create intelligent products that improve lives, inspire innovation, and make advanced technology accessible to everyone.",
  },
];

const AboutNarrative: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".story-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 120,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      });

      gsap.from(".story-title", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-[#F8F5F0]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-24 story-title">
          <p className="uppercase tracking-[0.4em] text-[#D4AF37] text-sm mb-4">
            My Journey
          </p>

          <h2 className="text-6xl font-light text-[#2B2B2B] mb-8">
            The Story Behind The Code
          </h2>

          <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto"></div>
        </div>

        {/* Story Cards */}

        <div className="space-y-24">
          {story.map((item, index) => (
            <div
              key={index}
              className={`story-card grid lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 0 ? "" : "lg:text-right"
              }`}
            >
              <div
                className={`lg:col-span-2 ${
                  index % 2 === 0
                    ? "lg:order-1"
                    : "lg:order-2 flex justify-end"
                }`}
              >
                <span className="text-7xl font-light text-[#D4AF37]/40">
                  {item.number}
                </span>
              </div>

              <div
                className={`lg:col-span-10 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="rounded-3xl border border-[#D4AF37]/20 bg-white/60 backdrop-blur-xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">

                  <h3 className="text-3xl text-[#8B1E2D] font-medium mb-6">
                    {item.title}
                  </h3>

                  <p className="text-lg leading-9 text-[#555]">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-32">

          {[
            ["9.31", "CGPA"],
            ["2+", "Research Papers"],
            ["3+", "Internships"],
            ["AWS", "AI Certified"],
          ].map(([value, label], i) => (
            <div
              key={i}
              className="rounded-3xl bg-white p-8 text-center border border-[#D4AF37]/20 shadow-lg"
            >
              <h3 className="text-5xl text-[#8B1E2D] font-light mb-2">
                {value}
              </h3>

              <p className="uppercase tracking-widest text-sm text-gray-600">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutNarrative;