
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const skills = [
    { label: t('about.page.skills.frontend'), value: 'React, TypeScript, Tailwind CSS, Next.js, HTML5, CSS3' },
    { label: t('about.page.skills.backend'), value: `Node.js, Express, APIs REST, ${t('about.page.skills.databases')}` },
    { label: t('about.page.skills.tools'), value: 'Git, GitHub, VS Code, Postman, Docker, Vercel' },
    { label: 'E-commerce', value: t('about.page.skills.ecommerce') },
  ];

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
            {t('about.page.title')}
            <span className="block text-xl sm:text-2xl font-normal text-gray-500 mt-1">Jesús Eliud Soto Méndez</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 mb-10 sm:mb-14 max-w-2xl"
          >
            {t('about.page.subtitle')}
          </motion.p>

          {/* Approach + Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl font-bold">{t('about.page.approach.title')}</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{t('about.page.approach.desc1')}</p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{t('about.page.approach.desc2')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brand-light rounded-2xl p-6 sm:p-8 border border-brand/10"
            >
              <h3 className="text-xl font-bold mb-5">{t('about.page.skills.title')}</h3>
              <ul className="space-y-4">
                {skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">
                      <strong className="text-gray-900">{skill.label}:</strong> {skill.value}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">{t('about.page.journey.title')}</h2>
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-4">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{t('about.page.journey.desc1')}</p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{t('about.page.journey.desc2')}</p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{t('about.page.journey.desc3')}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
