import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useI18n } from '@/lib/i18n';

const technicalSkills = [
  { name: 'HTML5', level: 90, color: '--amber' },
  { name: 'CSS3', level: 85, color: '--cyan' },
  { name: 'JavaScript (ES6)', level: 80, color: '--primary' },
  { name: 'React', level: 75, color: '--cyan' },
  { name: 'Bootstrap 5', level: 85, color: '--purple' },
  { name: 'Git & GitHub', level: 80, color: '--primary' },
  { name: 'SQL & Oracle DB', level: 70, color: '--amber' },
  { name: 'C++', level: 65, color: '--rose' },
  { name: 'Tailwind CSS', level: 80, color: '--cyan' },
  { name: 'Responsive Design', level: 90, color: '--primary' },
];

const softSkills = ['Problem Solving', 'Communication', 'Teamwork', 'Time Management', 'Self-Learning', 'Attention to Detail', 'Adaptability'];

const SkillsSection = () => {
  const { t } = useI18n();

  return (
    <section id="skills" className="section-padding bg-card/50 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 end-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ background: 'hsl(var(--cyan))' }} />
      <div className="absolute bottom-0 start-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ background: 'hsl(var(--purple))' }} />

      <div className="container mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('skills.title')}</h2>
          <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary to-cyan" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <h3 className="font-semibold text-xl mb-6 text-gradient">{t('skills.technical')}</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium font-mono-code">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.05, ease: 'easeOut' }}
                      className="h-full rounded-full relative"
                      style={{ background: `linear-gradient(90deg, hsl(var(${skill.color})), hsl(var(${skill.color}) / 0.6))` }}
                    >
                      <div className="absolute inset-0 shimmer" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection delay={0.2}>
              <h3 className="font-semibold text-xl mb-6 text-gradient-secondary">{t('skills.soft')}</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ scale: 1.1, y: -4, boxShadow: '0 10px 30px hsl(var(--primary) / 0.2)' }}
                    className="px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm font-medium text-foreground cursor-default transition-colors hover:border-primary/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="mt-8">
              <h3 className="font-semibold text-xl mb-4 text-gradient-warm">{t('skills.languages')}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇪🇬</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{t('skills.arabic')}</p>
                    <div className="h-1.5 bg-secondary rounded-full mt-1">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full rounded-full" style={{ background: 'hsl(var(--primary))' }} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇬🇧</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{t('skills.english')}</p>
                    <div className="h-1.5 bg-secondary rounded-full mt-1">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 }} className="h-full rounded-full" style={{ background: 'hsl(var(--cyan))' }} />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
