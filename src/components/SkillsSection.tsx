import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useI18n } from '@/lib/i18n';

const technicalSkills = ['HTML5', 'CSS3', 'JavaScript (ES6)', 'React', 'Bootstrap 5', 'Git', 'GitHub', 'SQL', 'Oracle DB', 'C++', 'Responsive Design'];
const softSkills = ['Problem Solving', 'Communication', 'Teamwork', 'Time Management', 'Self-Learning', 'Attention to Detail', 'Adaptability'];

const SkillsSection = () => {
  const { t } = useI18n();

  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('skills.title')}</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <h3 className="font-semibold text-xl mb-6 text-primary">{t('skills.technical')}</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm font-medium font-mono-code text-foreground cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection delay={0.2}>
              <h3 className="font-semibold text-xl mb-6 text-primary">{t('skills.soft')}</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium text-foreground cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="mt-8">
              <h3 className="font-semibold text-xl mb-4 text-primary">{t('skills.languages')}</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">{t('skills.arabic')}</p>
                <p className="text-muted-foreground">{t('skills.english')}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
