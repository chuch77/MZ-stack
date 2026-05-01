import { ArrowLeft, Code, Database, Globe, Smartphone, ShoppingCart, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t, language } = useLanguage();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const services = [
    { id: 1, title: "Desarrollo Frontend", titleEn: "Frontend Development", description: "Interfaces modernas y responsivas con React, TypeScript y Tailwind CSS", descriptionEn: "Modern and responsive interfaces with React, TypeScript and Tailwind CSS", price: "$15/hora", icon: <Code className="w-6 h-6" />, technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3"] },
    { id: 2, title: "Desarrollo Backend", titleEn: "Backend Development", description: "APIs robustas y escalables con Node.js, Express y bases de datos", descriptionEn: "Robust and scalable APIs with Node.js, Express and databases", price: "$20/hora", icon: <Database className="w-6 h-6" />, technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL", "JWT"] },
    { id: 3, title: "Desarrollo Full Stack", titleEn: "Full Stack Development", description: "Aplicaciones web completas desde el frontend hasta el backend", descriptionEn: "Complete web applications from frontend to backend", price: "$25/hora", icon: <Globe className="w-6 h-6" />, technologies: ["MERN Stack", "PERN Stack", "REST APIs", "GraphQL", "WebSockets", "Docker"] },
    { id: 4, title: "E-commerce", titleEn: "E-commerce", description: "Tiendas online completas con sistemas de pago y gestión de inventario", descriptionEn: "Complete online stores with payment systems and inventory management", price: "$25/hora", icon: <ShoppingCart className="w-6 h-6" />, technologies: ["Stripe", "PayPal", "WooCommerce", "Shopify", "Cart Systems", "Payment Gateways"] },
    { id: 5, title: "Aplicaciones Móviles", titleEn: "Mobile Applications", description: "Apps móviles híbridas con React Native y tecnologías modernas", descriptionEn: "Hybrid mobile apps with React Native and modern technologies", price: "$20/hora", icon: <Smartphone className="w-6 h-6" />, technologies: ["React Native", "Expo", "Firebase", "AsyncStorage", "Push Notifications", "App Store"] },
    { id: 6, title: "Optimización y Performance", titleEn: "Optimization & Performance", description: "Mejora de velocidad, SEO y experiencia de usuario", descriptionEn: "Speed improvement, SEO and user experience optimization", price: "$15/hora", icon: <Zap className="w-6 h-6" />, technologies: ["Lighthouse", "Core Web Vitals", "SEO", "Performance", "Caching", "CDN"] },
  ];

  const technologies = ["React", "Node.js", "TypeScript", "JavaScript", "MongoDB", "PostgreSQL", "Express", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Git", "Docker", "AWS", "Vercel", "Netlify", "Stripe", "PayPal", "Firebase", "GraphQL", "REST APIs", "JWT", "React Native", "Expo"];

  return (
    <PageLayout>
      <section className="pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-brand mb-6 transition-colors text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('services.back')}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            {t('services.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-14 max-w-2xl"
          >
            {t('services.subtitle')}
          </motion.p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-14">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="h-full hover:shadow-md hover:border-brand/20 transition-all duration-300">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2.5 bg-brand-light text-brand rounded-xl flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold leading-tight">{language === 'en' ? service.titleEn : service.title}</h3>
                        <p className="text-brand font-bold text-sm mt-0.5">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{language === 'en' ? service.descriptionEn : service.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">{tech}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center">{t('services.techTitle')}</h2>
            <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">{t('services.techSubtitle')}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs sm:text-sm font-medium hover:border-brand/30 hover:text-brand transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center bg-brand-light rounded-2xl p-6 sm:p-10 border border-brand/10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">{t('services.cta.title')}</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm sm:text-base">{t('services.cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => { window.location.href = "/#contact-info"; }} className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-xl shadow-sm shadow-brand/20 w-full sm:w-auto">
                {t('services.cta.quote')}
              </Button>
              <Button variant="outline" onClick={() => { window.location.href = "/#pricing"; }} className="border-brand/30 text-brand hover:bg-brand/5 px-6 py-3 rounded-xl w-full sm:w-auto">
                {t('services.cta.plans')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
