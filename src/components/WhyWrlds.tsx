import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Rocket, Shield } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    let start: number;
    let frame: number;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, inView]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
};

const WhyWrlds = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const stats = [
    { value: 1, suffix: "+", label: t('about.months'), desc: t('about.months.desc'), gradient: "from-blue-500 to-cyan-500" },
    { value: 8, suffix: "+", label: t('about.projects'), desc: t('about.projects.desc'), gradient: "from-cyan-500 to-blue-600" },
    { value: 15, suffix: "+", label: t('about.technologies'), desc: t('about.technologies.desc'), gradient: "from-blue-600 to-sky-500" },
  ];

  const strengths = [
    { icon: <Sparkles className="w-5 h-5" />, title: t('about.modern.title'), desc: t('about.modern.desc') },
    { icon: <Zap className="w-5 h-5" />, title: t('about.learning.title'), desc: t('about.learning.desc') },
    { icon: <Rocket className="w-5 h-5" />, title: t('about.complete.title'), desc: t('about.complete.desc') },
    { icon: <Shield className="w-5 h-5" />, title: t('about.commitment.title'), desc: t('about.commitment.desc') },
  ];

  return (
    <section id="why-wrlds" className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-light rounded-full blur-[200px] opacity-50" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="inline-block px-4 py-1.5 bg-brand-light text-brand rounded-full text-sm font-medium mb-4">
            {t('about.title')}
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('about.contribute.title')}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group text-center p-8 rounded-2xl border border-gray-100 hover:border-brand/20 transition-all duration-300 hover:shadow-lg hover:shadow-brand/5 bg-white"
            >
              <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-gray-500 text-sm">{stat.desc}</p>
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${stat.gradient} group-hover:w-1/2 transition-all duration-500 rounded-full`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Strengths */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t('about.contribute.subtitle')}
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {strengths.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-brand/20 bg-white hover:bg-brand-light/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contact-info"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-xl hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 hover:shadow-brand/40 font-medium group"
          >
            {t('about.contact')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWrlds;
