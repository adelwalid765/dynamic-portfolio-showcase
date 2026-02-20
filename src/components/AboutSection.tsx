import AnimatedSection from './AnimatedSection';
import { useI18n } from '@/lib/i18n';
import { GraduationCap, MapPin } from 'lucide-react';

const AboutSection = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('about.title')}</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.1} direction="left">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              {t('about.description')}
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span>{t('about.location')}</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{t('about.education')}</h3>
              </div>
              <h4 className="font-semibold mb-1">{t('about.degree')}</h4>
              <p className="text-muted-foreground text-sm mb-1">{t('about.university')}</p>
              <p className="text-primary font-mono-code text-sm mb-1">{t('about.gpa')}</p>
              <p className="text-muted-foreground text-sm">{t('about.year')}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
