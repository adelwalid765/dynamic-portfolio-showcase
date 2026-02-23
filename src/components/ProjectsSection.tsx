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
      color: '--primary',
      gradient: 'from-primary/20 via-cyan/10 to-transparent',
    },
    {
      icon: ShoppingCart,
      title: t('projects.p2.title'),
      desc: t('projects.p2.desc'),
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      color: '--cyan',
      gradient: 'from-cyan/20 via-purple/10 to-transparent',
    },
    {
      icon: Code2,
      title: t('projects.p3.title'),
      desc: t('projects.p3.desc'),
      tech: ['JavaScript', 'DOM API', 'CSS3'],
      color: '--purple',
      gradient: 'from-purple/20 via-amber/10 to-transparent',
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute end-0 top-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ background: 'hsl(var(--purple))' }} />
      
      <div className="container mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('projects.title')}</h2>
          <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-cyan to-purple" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15}>
              <motion.div
                whileHover={{ scale: 1.04, y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative rounded-2xl bg-card border border-border hover:border-primary/40 transition-all overflow-hidden h-full flex flex-col"
              >
                {/* Gradient top */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    style={{ background: `hsl(var(${project.color}) / 0.2)` }}
                  >
                    <project.icon size={32} style={{ color: `hsl(var(${project.color}))` }} />
                  </motion.div>
                  {/* Floating decorations */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 end-4 w-2 h-2 rounded-full"
                    style={{ background: `hsl(var(${project.color}))` }}
                  />
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute bottom-4 start-6 w-1.5 h-1.5 rounded-full"
                    style={{ background: `hsl(var(${project.color}) / 0.6)` }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="text-xs px-2.5 py-1 rounded-full font-mono-code"
                        style={{
                          background: `hsl(var(${project.color}) / 0.1)`,
                          color: `hsl(var(${project.color}))`,
                        }}
                      >
                        {techItem}
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
