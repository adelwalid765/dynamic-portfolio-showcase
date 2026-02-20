import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { useTheme } from '@/lib/theme';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';

const navKeys = ['home', 'about', 'skills', 'experience', 'services', 'projects', 'testimonials', 'contact'] as const;

const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-border shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo('home')} className="text-xl font-bold text-gradient">
          {'<Adel />'}
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navKeys.map(key => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t(`nav.${key}`)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            title={lang === 'en' ? 'العربية' : 'English'}
          >
            <Globe size={18} />
            <span className="text-xs ms-1 font-mono-code">{lang === 'en' ? 'AR' : 'EN'}</span>
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navKeys.map(key => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="text-sm font-medium py-2 px-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors text-start"
                >
                  {t(`nav.${key}`)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
