
import { useState, useRef, useEffect, TouchEvent } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('project.fashion.title'),
      brand: t('project.fashion.brand'),
      description: t('project.fashion.desc'),
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      link: "/links",
      accent: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: t('project.gym.title'),
      brand: t('project.gym.brand'),
      description: t('project.gym.desc'),
      tags: ["E-commerce", "React", "Express", "PayPal"],
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      link: "/links",
      accent: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      title: t('project.bookstore.title'),
      brand: t('project.bookstore.brand'),
      description: t('project.bookstore.desc'),
      tags: ["TypeScript", "Next.js", "PostgreSQL", "Cloudinary"],
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
      link: "/links",
      accent: "from-blue-600 to-sky-500"
    },
    {
      id: 4,
      title: t('project.crypto.title'),
      brand: t('project.crypto.brand'),
      description: t('project.crypto.desc'),
      tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      link: "/links",
      accent: "from-sky-500 to-blue-500"
    },
    {
      id: 5,
      title: t('project.tech.title'),
      brand: t('project.tech.brand'),
      description: t('project.tech.desc'),
      tags: ["Vue.js", "Laravel", "MySQL", "Redis"],
      imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop",
      link: "/links",
      accent: "from-blue-500 to-blue-600"
    }
  ];

  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, { once: false, margin: "-100px" });
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isInView && !isHovering) {
      const interval = setInterval(() => {
        setActiveProject(prev => (prev + 1) % projects.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering, projects.length]);

  const onTouchStart = (e: TouchEvent) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e: TouchEvent) => { setTouchEnd(e.targetTouches[0].clientX); };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) setActiveProject(prev => (prev + 1) % projects.length);
    else if (distance < -50) setActiveProject(prev => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[activeProject];

  return (
    <section id="projects" ref={projectsRef} className="relative py-20 md:py-28 bg-mz-dark overflow-hidden noise-bg">
      {/* Background orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-sm text-gray-400 mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Main project display */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center"
          >
            {/* Image */}
            <div className="relative group rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-40 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white/70 text-sm font-medium">{String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-5">
              <div>
                <p className="text-brand text-sm font-semibold uppercase tracking-wider mb-2">{project.brand}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 glass-dark text-gray-300 rounded-lg text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={project.link}
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand/10 text-brand rounded-xl hover:bg-brand/20 transition-all group font-medium text-sm"
              >
                {t('projects.learnMore')}
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Navigation */}
          {!isMobile && (
            <>
              <button
                className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 glass-dark rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all z-30"
                onClick={() => setActiveProject(prev => (prev - 1 + projects.length) % projects.length)}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 glass-dark rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all z-30"
                onClick={() => setActiveProject(prev => (prev + 1) % projects.length)}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeProject === idx ? 'bg-brand w-8' : 'bg-white/20 w-2 hover:bg-white/40'
              }`}
              onClick={() => setActiveProject(idx)}
            />
          ))}
        </div>

        {isMobile && (
          <p className="text-center text-gray-500 text-xs mt-4 flex items-center justify-center gap-1">
            <ChevronLeft size={14} /> Swipe <ChevronRight size={14} />
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
