import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useI18n } from '@/lib/i18n';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const AboutSection = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 start-0 w-72 h-72 rounded-full opacity-5 blur-3xl" style={{ background: 'hsl(var(--primary))' }} />
      <div className="absolute bottom-0 end-0 w-72 h-72 rounded-full opacity-5 blur-3xl" style={{ background: 'hsl(var(--purple))' }} />

      <div className="container mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('about.title')}</h2>
          <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary to-cyan" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.1} direction="left">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              {t('about.description')}
            </p>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 text-muted-foreground p-3 rounded-xl bg-card/50 border border-border"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--rose) / 0.1)' }}>
                <MapPin size={18} style={{ color: 'hsl(var(--rose))' }} />
              </div>
              <span>{t('about.location')}</span>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 start-0 end-0 h-1 bg-gradient-to-r from-primary via-cyan to-purple" />
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'hsl(var(--cyan) / 0.1)' }}
                >
                  <GraduationCap size={22} style={{ color: 'hsl(var(--cyan))' }} />
                </motion.div>
                <h3 className="font-semibold text-lg">{t('about.education')}</h3>
              </div>
              <h4 className="font-semibold mb-1">{t('about.degree')}</h4>
              <p className="text-muted-foreground text-sm mb-3">{t('about.university')}</p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-mono-code" style={{ background: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}>
                  <Award size={12} />
                  {t('about.gpa')}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-mono-code" style={{ background: 'hsl(var(--amber) / 0.1)', color: 'hsl(var(--amber))' }}>
                  <Calendar size={12} />
                  {t('about.year')}
                </span>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
