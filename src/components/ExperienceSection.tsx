import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useI18n } from '@/lib/i18n';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const { t } = useI18n();

  const experiences = [
    {
      title: t('experience.depi.title'),
      company: t('experience.depi.company'),
      items: [
        t('experience.depi.desc1'),
        t('experience.depi.desc2'),
        t('experience.depi.desc3'),
      ],
    },
    {
      title: t('experience.iti.title'),
      company: t('experience.iti.company'),
      items: [
        t('experience.iti.desc1'),
        t('experience.iti.desc2'),
        t('experience.iti.desc3'),
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('experience.title')}</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute start-6 top-0 bottom-0 w-px bg-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15} direction="left">
                <div className="flex gap-6">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative z-10 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0"
                  >
                    <Briefcase size={18} className="text-primary" />
                  </motion.div>
                  <div className="flex-1 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <p className="text-primary font-mono-code text-sm mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.items.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
