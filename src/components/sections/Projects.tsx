import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ChevronDown,
  ExternalLink,
  Github,
  Target,
  Sparkles,
  Layers,
  ShieldAlert,
  TrendingUp,
  Lightbulb,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export interface ProjectData {
  id: string;
  title: string;
  oneLiner: string;
  stack: string[];
  thumbnail: string;
  overview: string;
  problem: string;
  vision?: string;
  architecture: string;
  challenges: string;
  impact?: string;
  results: string;
  learnings?: string;
  liveLink?: string;
  githubLink?: string;
  images?: string[];
}

// The user can add their image paths to the `images` array here once uploaded to the public directory.
const projectsData: ProjectData[] = [
  {
    id: 'bridgeai',
    title: 'BridgeAI',
    oneLiner: 'AI-Powered Opportunity Recommendation Platform',
    stack: ['React', 'FastAPI', 'Gemini AI', 'MySQL', 'Firebase', 'JWT', 'Tailwind CSS', 'Framer Motion'],
    thumbnail: 'bridge',
    overview: 'A voice-first AI platform that acts as a personal career mentor, turning scattered opportunities into one personalized feed.',
    problem: 'Students miss scholarships, internships, and hackathons daily — not from lack of talent, but because opportunities are scattered across dozens of sites with confusing eligibility rules. Manual searching eats hours that should go into building.',
    vision: "BridgeAI bridges that gap. Instead of endless browsing, it learns who you are — goals, skills, interests — and surfaces opportunities that actually fit. Not another listings site. An assistant that does the searching for you.",
    architecture: 'Users sign in with Firebase Google Auth, complete a quick voice-or-text onboarding, and Gemini 2.5 Flash processes their profile into tailored recommendations. FastAPI and JWT power the backend with a MySQL data layer; React, Tailwind, and Framer Motion drive a fast, fluid frontend.',
    challenges: "Getting enough signal for good recommendations without a 20-question form meant designing a conversational, voice-first onboarding instead. Keeping AI response times snappy took async processing and smart caching between the frontend, backend, and Gemini.",
    impact: 'Onboarding friction dropped by nearly 90% versus a traditional form — proof that AI can turn overwhelming, scattered information into a decision-ready list in seconds.',
    results: 'A responsive, personalized discovery platform that replaces hours of tab-switching with one tailored feed.',
    learnings: 'Sharpened my skills in generative AI integration, prompt engineering, and secure auth — but the real lesson was product thinking: the best AI feature removes a step, not adds intelligence for its own sake.',
    liveLink: 'https://bridge-ai-sac9.vercel.app/',
    githubLink: 'https://github.com/es232',
    images: [],
  },
  {
    id: 'learnbloom',
    title: 'LearnBloom',
    oneLiner: 'Productivity & Self-Learning Platform',
    stack: ['MERN Stack', 'Interactive UI', 'Web Audio API', 'Data Visualization'],
    thumbnail: 'bloom',
    overview: 'A digital learning companion with Pomodoro sessions, streak tracking, and analytics, built to turn scattered study habits into routines.',
    problem: 'Most productivity apps treat studying as a checklist — check the box, move on. But consistency, not task completion, builds mastery. Students lose motivation because tools track tasks, not momentum.',
    vision: 'LearnBloom is a learning companion, not a timer app — one that builds consistency through progress visualization and personalized motivation, so studying becomes a habit instead of a chore.',
    architecture: 'A full-stack MERN app with Pomodoro sessions, streak tracking, learning analytics, voice reminders, and personalized dashboards — built to make progress visible, not just logged.',
    challenges: 'Real-time timer sync across tabs and refreshes required careful coordination between frontend state and backend persistence. The dashboard needed to surface real insight — streaks, focus trends — without burying users in numbers.',
    impact: 'By making progress visible, LearnBloom nudges users toward repeatable study routines instead of one-off cramming — directly improving consistency over time.',
    results: 'A distraction-free environment that increases focus time and reinforces daily learning habits through visible streaks.',
    learnings: 'Deepened my React state management, real-time sync, and dashboard design skills — and taught me that good analytics UX is about restraint as much as data.',
    githubLink: 'https://github.com/es232',
    images: [],
  },
  {
    id: 'upliftu',
    title: 'UpliftU',
    oneLiner: 'Tailored Mental Wellness Platform for Students',
    stack: ['UX Design', 'AI Integration', 'Web Platform'],
    thumbnail: 'uplift',
    overview: 'A wellness platform built to feel like a supportive friend, not a clinical app. Published in the International Journal on Engineering Technology and Sciences.',
    problem: 'College students face rising stress and burnout, but most mental health tools feel clinical or intimidating to open on a hard day — widening the gap between needing support and actually seeking it.',
    vision: 'UpliftU closes that gap: mood tracking, AI check-ins, affirmations, and self-reflection tools in one calming space built around the emotional reality of student life.',
    architecture: 'Mood tracking, AI-powered emotional check-ins, personalized affirmations, and guided reflection tools combine into one cohesive experience — every interaction designed to feel intentional, not transactional.',
    challenges: 'Designing for emotional vulnerability differs completely from designing for productivity. Every word and color had to be evaluated for tone, since one clinical-feeling screen could break the sense of safety the product depends on.',
    impact: 'UpliftU shows how thoughtful design can support student mental well-being with empathy over friction — significant enough to become a peer-reviewed research paper.',
    results: 'A calming, accessible wellness platform that led to a published research paper.',
    learnings: 'UX for sensitive contexts is its own discipline — every design choice is also an emotional one, and empathy has to be engineered in with the same rigor as any feature.',
    githubLink: 'https://github.com/es232',
    images: [],
  },
  {
    id: 'solar-street-light',
    title: 'IoT Smart Solar Street Light System',
    oneLiner: 'Autonomous, Motion-Adaptive Solar Lighting for Sustainable Infrastructure',
    stack: ['Arduino', 'ESP8266', 'IoT', 'LDR Sensors', 'Ultrasonic Sensors', 'Solar Energy Harvesting'],
    thumbnail: 'solar',
    overview: 'An autonomous solar streetlight that senses daylight and motion, cutting idle energy use by roughly 60%.',
    problem: 'Street lights run all night regardless of traffic, wasting electricity — and unreliable grid power in remote areas drives costs up even further.',
    vision: 'Could embedded systems and IoT build something genuinely self-sufficient: a light that generates its own power, reads its environment, and wastes nothing?',
    architecture: 'Built on Arduino and ESP8266, with LDR sensors for daylight detection and ultrasonic sensors for motion. Solar panels charge the battery by day; at night, lights stay dim by default and brighten only when a vehicle approaches, then fade back down. ESP8266 adds remote IoT monitoring.',
    challenges: 'Sensor tuning was a balancing act — too sensitive and wind triggered false positives, too conservative and real vehicles went undetected. Power management during cloudy stretches took careful optimization to keep the battery ahead of demand.',
    impact: 'Adaptive brightness cut idle energy consumption by about 60% — a concrete case for IoT-driven sustainability in public infrastructure.',
    results: 'A working autonomous prototype with measurable energy savings and reliable motion-based activation.',
    learnings: 'Deepened my grasp of embedded programming, sensor fusion, and power optimization — and the reality of building hardware that has to survive outside a lab.',
    githubLink: 'https://github.com/es232',
    images: [],
  },
  {
    id: 'excel-analytics-dashboard',
    title: 'Excel Analytics Dashboard',
    oneLiner: 'Turn Raw Spreadsheets Into Interactive Insights — No Code Required',
    stack: ['MERN Stack', 'Excel Parsing', 'Chart.js', 'API Optimization'],
    thumbnail: 'excel',
    overview: 'A MERN analytics platform that turns uploaded Excel files into interactive charts, with a ~30% faster processing pipeline.',
    problem: 'Businesses store huge amounts of value in spreadsheets, but turning that into insight usually means manual pivot tables or analytics software small teams can\u2019t afford.',
    vision: 'Remove the barrier entirely — upload a spreadsheet, get meaningful visual insight instantly, with zero code and zero setup.',
    architecture: 'A MERN dashboard that parses uploaded Excel datasets, processes them server-side, and renders dynamic charts with Chart.js — tuned to stay responsive even on large datasets.',
    challenges: 'Real-world Excel files are messy: merged cells, mismatched headers, mixed types. Building a parser robust enough to handle that, without slowing down the frontend, took careful backend validation.',
    impact: 'Pipeline tuning improved processing speed by about 30%, cutting the time from raw spreadsheet to actionable chart.',
    results: 'A fast, code-free tool that turns static spreadsheets into interactive, explorable dashboards.',
    learnings: 'Strengthened my data visualization, file-processing, and API performance skills — and taught me to design for messy real-world input, not clean sample data.',
    githubLink: 'https://github.com/es232',
    images: [],
  },
];

const DetailBlock: React.FC<{ icon: React.ReactNode; title: string; text?: string }> = ({ icon, title, text }) => {
  if (!text) return null;
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h4 className="text-heading-sm font-display text-foreground">{title}</h4>
      </div>
      <p className="text-body-md text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
};

const ProjectRow: React.FC<{
  project: ProjectData;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ project, index, isOpen, onToggle }) => {
  return (
    <div className="border-b border-border/50 last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-6 py-8 text-left interactive group"
      >
        <div className="flex items-start md:items-center gap-4 md:gap-6 min-w-0">
          <span className="text-body-sm font-mono text-muted-foreground/60 mt-1 md:mt-0 shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0">
            <h3
              className={`text-display-sm font-display transition-colors truncate ${
                isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'
              }`}
            >
              {project.title}
            </h3>
            <p className="text-body-md text-muted-foreground mt-1 truncate">{project.oneLiner}</p>
          </div>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-muted-foreground shrink-0 transition-transform duration-500 ${
            isOpen ? 'rotate-180 text-primary' : ''
          }`}
        />
      </button>

      {/* Accordion content: grid-template-rows trick gives a smooth, JS-free height animation */}
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div
            className={`pb-12 pl-0 md:pl-16 transition-opacity duration-500 ${
              isOpen ? 'opacity-100 delay-150' : 'opacity-0'
            }`}
          >
            {project.overview && (
              <p className="text-body-lg text-muted-foreground/90 leading-relaxed mb-8 max-w-3xl">
                {project.overview}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mb-10">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.images && project.images.length > 0 && (
              <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl overflow-hidden border border-border/50 shadow-soft bg-secondary aspect-video"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-8 space-y-10">
                <DetailBlock icon={<Target className="w-4 h-4 text-primary" />} title="The Problem" text={project.problem} />
                <DetailBlock icon={<Sparkles className="w-4 h-4 text-primary" />} title="The Vision" text={project.vision} />
                <DetailBlock icon={<Layers className="w-4 h-4 text-primary" />} title="Architecture & Implementation" text={project.architecture} />
                <DetailBlock icon={<ShieldAlert className="w-4 h-4 text-primary" />} title="Challenges & Solutions" text={project.challenges} />
                <DetailBlock icon={<TrendingUp className="w-4 h-4 text-primary" />} title="Impact" text={project.impact} />
                <DetailBlock icon={<Lightbulb className="w-4 h-4 text-primary" />} title="Key Learnings" text={project.learnings} />
              </div>

              <div className="md:col-span-4">
                <div className="p-6 border border-border/50 rounded-3xl bg-card shadow-soft">
                  <h4 className="text-heading-sm font-display text-foreground mb-3">Results</h4>
                  <p className="text-body-sm text-muted-foreground mb-6 pb-6 border-b border-border/50">
                    {project.results}
                  </p>
                  <div className="flex flex-col gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between w-full p-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors interactive group/link"
                      >
                        <span className="font-medium text-sm">View Live Site</span>
                        <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between w-full p-3 border border-border rounded-xl hover:bg-secondary transition-colors interactive group/link"
                      >
                        <span className="font-medium text-sm text-foreground">Source Code</span>
                        <Github className="w-4 h-4 text-foreground group-hover/link:scale-110 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openId, setOpenId] = useState<string | null>(projectsData[0]?.id ?? null);

  useEffect(() => {
    const rows = gsap.utils.toArray('.project-row') as HTMLElement[];
    rows.forEach((row, index) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: row, start: 'top 90%' },
          delay: index * 0.05,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 bg-background border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        <div className="mb-16">
          <span className="text-accent uppercase tracking-widest text-sm mb-4 block">Case Studies</span>
          <h2 className="text-display-md font-display text-foreground mb-4">Masterpieces</h2>
          <p className="text-body-lg text-muted-foreground max-w-xl">
            Systems designed with intention, blending AI capabilities with premium user experiences. Click any project to open its full breakdown.
          </p>
        </div>

        <div className="border-t border-border/50">
          {projectsData.map((project, index) => (
            <div key={project.id} className="project-row">
              <ProjectRow
                project={project}
                index={index}
                isOpen={openId === project.id}
                onToggle={() => handleToggle(project.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;