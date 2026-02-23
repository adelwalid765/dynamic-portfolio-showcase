import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useI18n } from '@/lib/i18n';
import { Code2, ExternalLink, Github, Layout, ShoppingCart } from 'lucide-react';

const ProjectsSection = () => {
  const { t } = useI18n();

  const projects = [
    {
      icon: Layout,
      title: t('projects.p1.title'),
      desc: t('projects.p1.desc'),
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
      color: 'from-primary/20 to-primary/5',
    },
    {
      icon: ShoppingCart,
      title: t('projects.p2.title'),
      desc: t('projects.p2.desc'),
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-primary/20 to-primary/5',
    },
    {
      icon: Code2,
      title: t('projects.p3.title'),
      desc: t('projects.p3.desc'),
      tech: ['JavaScript', 'DOM API', 'CSS3'],
      color: 'from-primary/20 to-primary/5',
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('projects.title')}</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15}>
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative rounded-2xl bg-card border border-border hover:border-primary/40 transition-all overflow-hidden h-full flex flex-col"
              >
                {/* Gradient top bar */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <project.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
