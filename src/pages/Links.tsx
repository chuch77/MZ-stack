import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

const Links = () => {
  const { t } = useLanguage();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const projects = [
    {
      id: 1,
      title: "Clínica Quiropráctica Roa New Life",
      description: "Plataforma web para quiropráctico en Polanco. Agenda de citas en línea, información de tratamientos, gestión de pacientes y diseño 100% responsive.",
      technologies: ["React", "TailwindCSS", "Redux Toolkit", "Spring Boot"],
      liveUrl: "https://roa-new-life.vercel.app",
      githubUrl: "https://github.com/chuch77",
      image: "/roa-new-life.png",
      category: "Salud"
    },
    {
      id: 2,
      title: "Senderos del Sur",
      description: "Descubrí la Patagonia como nunca antes. Senderos, mapas interactivos, guías expertos y rutas detalladas en una sola plataforma. Tu aventura, siempre contigo.",
      technologies: ["React", "TailwindCSS", "Redux Toolkit", "Spring Boot"],
      liveUrl: "https://senderos-del-sur.vercel.app",
      githubUrl: "https://github.com/chuch77",
      image: "/senderos-del-sur.png",
      category: "Turismo"
    },
    {
      id: 3,
      title: "CampZone E-commerce",
      description: "Equipa tu aventura con lo mejor del mercado. Tienda online especializada en camping, senderismo y aventura. Catálogo completo, pagos seguros y envíos a todo el país.",
      technologies: ["React", "TailwindCSS", "Redux Toolkit", "Spring Boot"],
      liveUrl: "https://campzone.vercel.app",
      githubUrl: "https://github.com/chuch77",
      image: "/campzone.png",
      category: "E-commerce"
    },
    {
      id: 4,
      title: "FitFuel - Comida Saludable",
      description: "Come bien, vive mejor. Comida fit preparada por chefs con ingredientes 100% naturales, planes personalizados y entrega a domicilio. Tu salud, nuestra pasión.",
      technologies: ["React", "TailwindCSS", "Redux Toolkit", "Spring Boot"],
      liveUrl: "https://fitfuel.vercel.app",
      githubUrl: "https://github.com/chuch77",
      image: "/fitfuel.png",
      category: "Food & Health"
    },
    {
      id: 5,
      title: "BusinessFlow CRM",
      description: "El CRM que impulsa el crecimiento de tu negocio. Gestiona clientes, ventas, tareas y analítica desde un solo lugar. Toma mejores decisiones y haz crecer tu empresa.",
      technologies: ["React", "TailwindCSS", "Redux Toolkit", "Spring Boot"],
      liveUrl: "https://businessflow.vercel.app",
      githubUrl: "https://github.com/chuch77",
      image: "/businessflow.png",
      category: "CRM"
    },
  ];

  return (
    <PageLayout>
      <section className="pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-brand mb-6 transition-colors text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('links.back')}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            {t('links.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-14 max-w-2xl"
          >
            {t('links.subtitle')}
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-md hover:border-brand/20 transition-all duration-300 group">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <CardContent className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-bold mb-1.5">{project.title}</h3>
                    <p className="text-gray-600 mb-3 text-xs sm:text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">{tech}</span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition-colors text-xs sm:text-sm font-medium"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {t('links.viewLive')}
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors text-xs sm:text-sm font-medium"
                      >
                        <Github className="w-3.5 h-3.5" />
                        {t('links.viewCode')}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Links;
