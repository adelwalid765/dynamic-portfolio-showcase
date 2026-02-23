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
      color: '--primary',
    },
    {
      title: t('experience.iti.title'),
      company: t('experience.iti.company'),
      items: [
        t('experience.iti.desc1'),
        t('experience.iti.desc2'),
        t('experience.iti.desc3'),
      ],
      color: '--cyan',
    },
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute start-0 top-1/2 w-80 h-80 rounded-full opacity-5 blur-3xl" style={{ background: 'hsl(var(--primary))' }} />

      <div className="container mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('experience.title')}</h2>
          <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary to-cyan" />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line gradient */}
          <div className="absolute start-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-cyan to-purple" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15} direction="left">
                <div className="flex gap-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                    style={{
                      background: `hsl(var(${exp.color}) / 0.1)`,
                      borderColor: `hsl(var(${exp.color}))`,
                    }}
                  >
                    <Briefcase size={18} style={{ color: `hsl(var(${exp.color}))` }} />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all relative overflow-hidden"
                  >
                    <div className="absolute top-0 start-0 end-0 h-0.5" style={{ background: `linear-gradient(90deg, hsl(var(${exp.color})), transparent)` }} />
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <p className="font-mono-code text-sm mb-4" style={{ color: `hsl(var(${exp.color}))` }}>{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: `hsl(var(${exp.color}))` }} />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
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
