import { ArrowRight, Code, Cpu, Layers, MessageSquare, Download } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect, useCallback } from 'react';

const Hero = () => {
  const isMobile = useIsMobile();
  const { t, language } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = language === 'es'
    ? ['Full Stack Developer', 'Creador de E-commerce', 'Ingeniero Frontend', 'Desarrollador Backend']
    : ['Full Stack Developer', 'E-commerce Creator', 'Frontend Engineer', 'Backend Developer'];

  const heroImages = [
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&h=900&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&h=900&fit=crop',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&h=900&fit=crop',
    'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1400&h=900&fit=crop',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1400&h=900&fit=crop',
  ];

  // Typing effect
  const typeEffect = useCallback(() => {
    const currentRole = roles[roleIndex];
    if (!isDeleting) {
      setTypedText(currentRole.substring(0, typedText.length + 1));
      if (typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      setTypedText(currentRole.substring(0, typedText.length - 1));
      if (typedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
    }
  }, [typedText, isDeleting, roleIndex, roles]);

  useEffect(() => {
    const timer = setTimeout(typeEffect, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [typeEffect, isDeleting]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3, duration: 0.8 }
    }
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const cards = [
    { icon: <Cpu className="w-5 h-5" />, title: "Frontend", desc: t('hero.frontend'), color: "from-blue-500/20 to-cyan-500/20" },
    { icon: <Code className="w-5 h-5" />, title: "Backend", desc: t('hero.backend'), color: "from-cyan-500/20 to-blue-600/20" },
    { icon: <Layers className="w-5 h-5" />, title: "E-commerce", desc: t('hero.ecommerce'), color: "from-blue-600/20 to-sky-500/20" },
  ];

  return (
    <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      {/* Hero Banner */}
      <div className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] w-full flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-mz-dark">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-2000 ease-in-out ${
                index === currentImage ? 'opacity-40 scale-100' : 'opacity-0 scale-110'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-mz-dark/80 via-mz-dark/70 to-mz-dark" />
          {/* Decorative gradient orbs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div className="max-w-4xl mx-auto text-center" variants={itemVariants}>
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-sm text-gray-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {language === 'es' ? 'Disponible para proyectos' : 'Available for projects'}
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              Jesús Eliud
              <span className="block gradient-text">Soto Méndez</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 h-10 flex items-center justify-center">
              <span className="font-light">{typedText}</span>
              <span className="typing-cursor" />
            </motion.div>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-8 py-3.5 bg-brand text-white rounded-xl hover:bg-brand-dark transition-all shadow-lg shadow-brand/25 hover:shadow-brand/40 flex items-center justify-center group font-medium glow-hover"
              >
                {t('hero.viewProjects')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto px-8 py-3.5 glass-dark text-white rounded-xl hover:bg-white/10 transition-all flex items-center justify-center group font-medium"
              >
                {t('hero.contact')}
                <MessageSquare className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>

              <a
                href="/Jesus_Soto_VisualCV_Resume.pdf"
                download
                className="w-full sm:w-auto px-8 py-3.5 border border-white/20 text-white rounded-xl hover:border-brand/50 hover:bg-brand/5 transition-all flex items-center justify-center group font-medium"
              >
                {t('hero.downloadCV')}
                <Download className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-brand"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto -mt-16 md:-mt-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="gradient-border glow-hover"
            >
              <div className={`bg-white p-6 rounded-[calc(1rem-2px)] h-full relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-50`} />
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-brand/10 flex items-center justify-center rounded-lg text-brand mb-3">
                    {card.icon}
                  </div>
                  <h3 className="text-base font-semibold mb-1.5 text-gray-900">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
