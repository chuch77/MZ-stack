import { useEffect, useRef } from 'react';
import { ArrowRight, MessageSquare } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Features = () => {
  const { t } = useLanguage();
  const featuresRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop", title: t('tech.react.title'), description: t('tech.react.desc') },
    { image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop", title: t('tech.node.title'), description: t('tech.node.desc') },
    { image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop", title: t('tech.db.title'), description: t('tech.db.desc') },
    { image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop", title: t('tech.devops.title'), description: t('tech.devops.desc') },
    { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", title: t('tech.testing.title'), description: t('tech.testing.desc') },
    { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", title: t('tech.analytics.title'), description: t('tech.analytics.desc') }
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

  return (
    <section id="features" className="relative bg-white overflow-hidden py-16 md:py-24 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" ref={featuresRef}>

        <motion.div
          className="text-center mb-10 max-w-3xl mx-auto feature-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-3 px-4 py-1.5 bg-brand-light text-brand rounded-full text-sm font-medium">
            Habilidades Técnicas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{t('whywrlds.subtitle')}</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            {t('whywrlds.description')}
          </p>
        </motion.div>

        {/* Tech Carousel */}
        <motion.div
          className="feature-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm p-4 sm:p-6">
            <Carousel className="w-full">
              <CarouselContent>
                {technologies.map((tech, index) => (
                  <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
                    <Card className="border border-gray-100 shadow-sm h-full hover:border-brand/20 hover:shadow-md transition-all">
                      <CardContent className="p-0">
                        <div className="aspect-video overflow-hidden">
                          <img src={tech.image} alt={tech.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-base mb-1">{tech.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{tech.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 gap-2">
                <CarouselPrevious className="relative static left-auto translate-y-0 hover:bg-brand-light hover:text-brand hover:border-brand/20" />
                <CarouselNext className="relative static right-auto translate-y-0 hover:bg-brand-light hover:text-brand hover:border-brand/20" />
              </div>
            </Carousel>
            <p className="text-center mt-4 text-xs sm:text-sm text-gray-500 font-medium">{t('tech.footer')}</p>
          </div>
        </motion.div>
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
  );
};

export default Features;
