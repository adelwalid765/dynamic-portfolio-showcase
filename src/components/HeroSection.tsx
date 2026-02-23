import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import adelPhoto from '@/assets/adel-photo.jpeg';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const { t, lang } = useI18n();
  const titles = lang === 'ar'
    ? ['مطور React', 'مطور واجهات أمامية', 'مصمم ويب']
    : ['React Developer', 'Frontend Engineer', 'Web Designer'];
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTitleIdx(i => (i + 1) % titles.length), 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30 dark:opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 start-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'hsl(var(--primary))' }}
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 end-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ background: 'hsl(var(--cyan))' }}
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 end-1/3 w-48 h-48 rounded-full opacity-8 blur-3xl"
        style={{ background: 'hsl(var(--purple))' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center lg:text-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-primary font-mono-code text-xs">{t('home.greeting')}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              {t('home.name')}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-12 mb-6 overflow-hidden"
            >
              <motion.p
                key={titleIdx}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl text-gradient font-semibold"
              >
                {titles[titleIdx]}
              </motion.p>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {t('home.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all glow-sm shimmer"
              >
                {t('home.cta')}
                <ArrowDown size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground hover:bg-secondary transition-all"
              >
                <Mail size={16} />
                {t('home.contact')}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/adel_cv.docx"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition-all"
              >
                <Download size={16} />
                {t('home.download_cv')}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/30 overflow-hidden bg-secondary animate-pulse-glow"
            >
              <img src={adelPhoto} alt="Adel Walid Adel" className="w-full h-full object-cover" />
            </motion.div>
            {/* Decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-8 rounded-full border border-dashed border-cyan/15"
            />
            {/* Floating dots */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-2 end-4 w-4 h-4 rounded-full"
              style={{ background: 'hsl(var(--cyan))' }}
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-4 -start-2 w-3 h-3 rounded-full"
              style={{ background: 'hsl(var(--purple))' }}
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute top-1/2 -end-4 w-2.5 h-2.5 rounded-full"
              style={{ background: 'hsl(var(--amber))' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground font-mono-code">scroll</span>
        <ArrowDown size={16} className="text-primary/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
