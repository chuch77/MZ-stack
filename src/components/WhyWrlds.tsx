import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Box, Code, CheckCircle, Rocket, Factory, Microchip, Handshake, RefreshCcw, MessageSquare } from "lucide-react";
import { cn } from '@/lib/utils';
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyWrlds = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentSprint(prev => prev < totalSprints ? prev + 1 : 1);
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };
    animateProgress();
    return () => { if (interval) clearInterval(interval); };
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stepFlowItems = [
    { icon: <Microchip className="h-8 w-8 text-brand" />, title: t('methodology.planning.title'), description: t('methodology.planning.desc') },
    { icon: <Factory className="h-8 w-8 text-brand" />, title: t('methodology.agile.title'), description: t('methodology.agile.desc') },
    { icon: <Handshake className="h-8 w-8 text-brand" />, title: t('methodology.testing.title'), description: t('methodology.testing.desc') }
  ];

  const sprintPhases = [
    { name: t('methodology.phases.planning'), icon: <CheckCircle className="h-4 w-4" /> },
    { name: t('methodology.phases.development'), icon: <Code className="h-4 w-4" /> },
    { name: t('methodology.phases.testing'), icon: <Box className="h-4 w-4" /> },
    { name: t('methodology.phases.review'), icon: <RefreshCcw className="h-4 w-4" /> }
  ];

  return (
    <section id="why-wrlds" className="bg-gray-50 py-16 md:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-3 px-4 py-1.5 bg-brand-light text-brand rounded-full text-sm font-medium">
            Mi Metodología
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t('methodology.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            {t('methodology.subtitle')}
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-8 mb-8">
          {/* Step cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {stepFlowItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100 text-center hover:border-brand/20 hover:shadow-md transition-all"
              >
                <div className="bg-brand-light rounded-full p-3 w-fit mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center gap-1">
              <div className="w-0.5 h-6 bg-gray-200" />
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-gray-500 rotate-90" />
              </div>
            </div>
          </div>

          {/* Sprint progress */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-5 sm:p-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
              <h3 className="text-base sm:text-lg font-bold">{t('methodology.project.title')}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{t('methodology.iterative.title')}</span>
                <RefreshCcw className="h-4 w-4 text-brand animate-rotate-slow" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{t('methodology.iterative.desc')}</p>
            <Progress value={progressValue} className="h-2.5 bg-gray-200 mb-4" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {sprintPhases.map((phase, index) => (
                <div key={index} className={cn(
                  "text-center p-2 rounded-lg transition-all",
                  progressValue >= index / sprintPhases.length * 100 && progressValue < (index + 1) / sprintPhases.length * 100
                    ? "bg-brand-light border border-brand/20"
                    : "bg-white border border-gray-100"
                )}>
                  <div className="flex flex-col items-center gap-1">
                    <div className={cn(
                      "rounded-full p-1",
                      progressValue >= index / sprintPhases.length * 100 ? "bg-brand/10 text-brand" : "bg-gray-100 text-gray-400"
                    )}>
                      {phase.icon}
                    </div>
                    <span className="text-xs font-medium">{phase.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-5 gap-2">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 rounded-full p-1 shrink-0">
                  <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600">{t('methodology.feedback')}</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-2">
                <span>{t('methodology.improvement')}</span>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse animation-delay-200" />
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse animation-delay-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center gap-1">
              <div className="w-0.5 h-6 bg-gray-200" />
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-gray-500 rotate-90" />
              </div>
            </div>
          </div>

          {/* Ready card */}
          <div className="bg-gradient-to-r from-brand-light via-white to-brand-light rounded-xl p-6 sm:p-8 max-w-sm mx-auto text-center border border-brand/10">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-brand/10 rounded-full animate-pulse-slow" />
              <div className="relative bg-white rounded-full p-4 border border-brand/20 shadow-sm">
                <Rocket className="h-8 w-8 text-brand" />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">{t('methodology.ready.title')}</h3>
            <p className="text-gray-600 text-sm">{t('methodology.ready.desc')}</p>
            <div className="flex justify-center mt-4 gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand/30 animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-brand/60 animate-pulse animation-delay-200" />
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse animation-delay-400" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <Link
            to="/tech-details"
            onClick={() => window.scrollTo(0, 0)}
            className="w-full sm:w-auto px-6 py-3 bg-white text-gray-700 rounded-xl border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all flex items-center justify-center gap-2 text-sm font-medium"
          >
            Ver Más Sobre Mi Experiencia
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-6 py-3 bg-brand hover:bg-brand-dark text-white rounded-xl shadow-md shadow-brand/20 flex items-center justify-center gap-2 text-sm"
          >
            Contáctame
            <MessageSquare className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyWrlds;
