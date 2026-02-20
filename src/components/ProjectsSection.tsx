import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useI18n } from '@/lib/i18n';
import { Code2, Database, Layout, Layers } from 'lucide-react';

const ProjectsSection = () => {
  const { t } = useI18n();

  const projects = [
    { icon: Layout, text: t('projects.web_apps'), color: 'bg-primary/10 text-primary' },
    { icon: Code2, text: t('projects.js_components'), color: 'bg-primary/10 text-primary' },
    { icon: Layers, text: t('projects.multi_page'), color: 'bg-primary/10 text-primary' },
    { icon: Database, text: t('projects.database'), color: 'bg-primary/10 text-primary' },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('projects.title')}</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all flex items-start gap-4"
              >
                <div className={`w-10 h-10 rounded-lg ${project.color} flex items-center justify-center flex-shrink-0`}>
                  <project.icon size={20} />
                </div>
                <p className="text-foreground leading-relaxed">{project.text}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
