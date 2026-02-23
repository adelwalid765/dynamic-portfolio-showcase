import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useI18n } from '@/lib/i18n';
import { Code2, Coffee, FolderGit2, Trophy } from 'lucide-react';

const StatsSection = () => {
  const { t, lang } = useI18n();

  const stats = [
    { icon: Code2, value: '10+', label: lang === 'ar' ? 'مشروع مكتمل' : 'Projects Done', color: '--primary' },
    { icon: Trophy, value: '3.7', label: lang === 'ar' ? 'معدل تراكمي' : 'GPA Score', color: '--cyan' },
    { icon: FolderGit2, value: '50+', label: lang === 'ar' ? 'كوميت على GitHub' : 'Git Commits', color: '--purple' },
    { icon: Coffee, value: '500+', label: lang === 'ar' ? 'ساعة برمجة' : 'Coding Hours', color: '--amber' },
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Animated bg gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-purple animate-gradient" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-card/80 backdrop-blur border border-border hover:border-primary/30 transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `hsl(var(${stat.color}) / 0.1)` }}
                >
                  <stat.icon size={26} style={{ color: `hsl(var(${stat.color}))` }} />
                </motion.div>
                <motion.p
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: `hsl(var(${stat.color}))` }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
