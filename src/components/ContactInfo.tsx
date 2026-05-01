
import React from 'react';
import { Mail, Github, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  const { t } = useLanguage();

  return (
    <section id="contact-info" className="relative py-20 md:py-28 overflow-hidden noise-bg bg-mz-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/15 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-sm text-gray-400 mb-4">
            {t('nav.contact')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="gradient-border glow-hover">
            <div className="bg-mz-dark/90 backdrop-blur-xl rounded-[calc(1rem-2px)] p-8 text-center">
              <img
                src="/1776739834307.png modificado.png"
                alt={t('contact.name')}
                className="w-28 h-28 rounded-2xl mx-auto mb-5 object-cover ring-2 ring-brand/30 ring-offset-2 ring-offset-mz-dark"
              />
              <h3 className="text-xl font-bold text-white mb-1">{t('contact.name')}</h3>
              <p className="text-brand text-sm font-medium mb-6">{t('contact.role')}</p>

              <div className="space-y-3">
                <a
                  href="mailto:chuchdios7@gmail.com"
                  className="flex items-center justify-center gap-3 px-5 py-3 glass-dark rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all group"
                >
                  <Mail className="w-5 h-5 text-brand" />
                  <span className="text-sm">chuchdios7@gmail.com</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
                <a
                  href="https://github.com/chuch77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-5 py-3 glass-dark rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all group"
                >
                  <Github className="w-5 h-5 text-brand" />
                  <span className="text-sm">GitHub: chuch77</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
