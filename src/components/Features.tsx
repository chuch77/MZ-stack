import { useEffect, useRef, useState } from 'react';
import { Activity, Shield, HardHat, Zap, ArrowRight, Box, Code, CheckCircle, Rocket, Factory, Microchip, Handshake, RefreshCcw, MessageSquare } from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Features = () => {
  const { t } = useLanguage();
  const featuresRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      title: t('features.frontend.title'),
      description: t('features.frontend.desc'),
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: t('features.backend.title'),
      description: t('features.backend.desc'),
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    },
    {
      icon: <HardHat className="w-8 h-8 text-white" />,
      title: t('features.ecommerce.title'),
      description: t('features.ecommerce.desc'),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: t('features.fullstack.title'),
      description: t('features.fullstack.desc'),
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop"
    }
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    if (featuresRef.current) {
      featuresRef.current.querySelectorAll('.feature-item').forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    return () => observer.disconnect();
  }, []);

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

  const sensorCaseStudies = [
    { image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop", title: t('tech.react.title'), description: t('tech.react.desc') },
    { image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop", title: t('tech.node.title'), description: t('tech.node.desc') },
    { image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop", title: t('tech.db.title'), description: t('tech.db.desc') },
    { image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop", title: t('tech.devops.title'), description: t('tech.devops.desc') },
    { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", title: t('tech.testing.title'), description: t('tech.testing.desc') },
    { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", title: t('tech.analytics.title'), description: t('tech.analytics.desc') }
  ];

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
    <>
      {/* Skills Section */}
      <section id="features" className="relative bg-white overflow-hidden py-16 md:py-24 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" ref={featuresRef}>
          <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
            <span className="inline-block mb-3 px-4 py-1.5 bg-brand-light text-brand rounded-full text-sm font-medium">
              Habilidades Técnicas
            </span>
            <p className="text-gray-600 mt-3 text-base sm:text-lg">
              {t('features.title')}
            </p>
          </div>

          {/* Feature cards — simple grid, no scroll hijack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item rounded-2xl overflow-hidden relative shadow-md h-52 sm:h-64 md:h-72 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-all duration-500",
                    hoveredFeature === index ? "scale-105 grayscale-0" : "grayscale"
                  )}
                />
                <div className={cn(
                  "absolute inset-0 transition-opacity duration-300",
                  hoveredFeature === index ? "bg-black/50" : "bg-black/70"
                )} />
                <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col justify-between">
                  <div className="inline-block p-2.5 bg-white/10 backdrop-blur-sm rounded-lg w-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5">{feature.title}</h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-2">{feature.description}</p>
                    <div className={`h-0.5 bg-brand mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : 'w-0'}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Carousel */}
          <div className="mt-16 mb-8 feature-item">
            <div className="text-center mb-8">
              <span className="inline-block mb-3 px-4 py-1.5 bg-brand-light text-brand rounded-full text-sm font-medium">
                Stack Tecnológico
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold">{t('whywrlds.subtitle')}</h3>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
                {t('whywrlds.description')}
                <span className="block text-xs sm:text-sm mt-1 text-brand">{t('tech.swipe')}</span>
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm p-4 sm:p-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {sensorCaseStudies.map((study, index) => (
                    <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
                      <Card className="border border-gray-100 shadow-sm h-full">
                        <CardContent className="p-0">
                          <div className="aspect-video overflow-hidden">
                            <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-base mb-1">{study.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{study.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 gap-2">
                  <CarouselPrevious className="relative static left-auto translate-y-0 hover:bg-gray-100" />
                  <CarouselNext className="relative static right-auto translate-y-0 hover:bg-gray-100" />
                </div>
              </Carousel>
              <p className="text-center mt-4 text-xs sm:text-sm text-gray-500 font-medium">{t('tech.footer')}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 px-4">
          <Button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-6 py-3 bg-brand hover:bg-brand-dark text-white rounded-xl shadow-md shadow-brand/20 flex items-center justify-center gap-2"
          >
            {t('buttons.needDev')}
            <MessageSquare className="w-4 h-4" />
          </Button>
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 py-3 bg-white text-gray-700 rounded-xl border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all flex items-center justify-center gap-2"
          >
            {t('buttons.moreSkills')}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="technology" className="bg-gray-50 py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-3 px-4 py-1.5 bg-brand-light text-brand rounded-full text-sm font-medium">
              Mi Metodología
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t('methodology.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              {t('methodology.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-8 mb-8">
            {/* Step cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {stepFlowItems.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100 text-center hover:border-brand/20 hover:shadow-md transition-all">
                  <div className="bg-brand-light rounded-full p-3 w-fit mx-auto mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Arrow connector */}
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

            {/* Arrow connector */}
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

          {/* Bottom CTA */}
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
    </>
  );
};

export default Features;
