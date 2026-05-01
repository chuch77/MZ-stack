
import { ArrowRight, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-mz-dark border-t border-white/5 text-white pt-12 pb-6 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
                <span className="text-white font-bold text-sm">JE</span>
              </div>
              <span className="text-lg font-bold">JesElDev</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com/in/jesus-eliud-soto-mendez" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand/20 hover:text-brand transition-all">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com/chuch77" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand/20 hover:text-brand transition-all">
                <Github size={16} />
              </a>
              <a href="mailto:chuchdios7@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand/20 hover:text-brand transition-all">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>Frontend Development</li>
              <li>Backend & APIs</li>
              <li>E-commerce</li>
              <li>Full Stack Apps</li>
              <li>DevOps & Deploy</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-brand transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/links" className="text-gray-400 hover:text-brand transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-brand transition-colors">Blog</Link></li>
              <li>
                <a href="/Jesus_Soto_VisualCV_Resume.pdf" download className="inline-flex items-center gap-1 text-gray-400 hover:text-brand transition-colors">
                  {t('hero.downloadCV')} <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Jesús Eliud Soto Méndez
          </p>
          <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
