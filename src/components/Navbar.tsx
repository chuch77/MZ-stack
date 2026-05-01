
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' }
  ];
  const currentLanguage = languages.find(lang => lang.code === language);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.services'), to: '/services' },
    { label: 'Links', to: '/links' },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100/50"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
              <span className="text-white font-bold text-sm">JE</span>
            </div>
            <span className={cn("text-lg font-bold transition-colors", isScrolled ? "text-gray-900" : "text-white")}>
              JesElDev
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  isScrolled
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="/Jesus_Soto_VisualCV_Resume.pdf"
              download
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                isScrolled
                  ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              )}
            >
              CV
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "flex items-center px-3 py-2 rounded-lg transition-colors text-sm",
                isScrolled ? "text-gray-600 hover:bg-gray-100" : "text-gray-300 hover:bg-white/10"
              )}>
                <Globe className="w-4 h-4 mr-1.5" />
                <span className="text-base mr-1">{currentLanguage?.flag}</span>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)} className="cursor-pointer">
                    <span className="text-base mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => scrollToSection('contact-info')}
              className="ml-2 px-5 py-2 bg-brand text-white rounded-lg text-sm font-medium hover:bg-brand-dark transition-all shadow-sm shadow-brand/20 hover:shadow-brand/40"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn("md:hidden p-2 rounded-lg transition-colors", isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10")}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className={cn("px-4 py-3 space-y-1 border-t", isScrolled ? "bg-white/95 backdrop-blur-xl border-gray-100" : "bg-mz-dark/95 backdrop-blur-xl border-white/10")}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn("block px-4 py-2.5 rounded-lg text-sm font-medium", isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-gray-200 hover:bg-white/10")}
                  onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/Jesus_Soto_VisualCV_Resume.pdf"
                download
                className={cn("block px-4 py-2.5 rounded-lg text-sm font-medium", isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-gray-200 hover:bg-white/10")}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('hero.downloadCV')}
              </a>
              <button
                onClick={() => scrollToSection('contact-info')}
                className="w-full mt-2 px-4 py-2.5 bg-brand text-white rounded-lg text-sm font-medium"
              >
                {t('nav.contact')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
