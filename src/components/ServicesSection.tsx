import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useI18n } from '@/lib/i18n';
import { Globe, Layout, Smartphone, Zap } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useI18n();

  const services = [
    { icon: Globe, titleKey: 'services.web.title', descKey: 'services.web.desc', color: '--primary', gradient: 'from-primary/20 to-cyan/10' },
    { icon: Layout, titleKey: 'services.frontend.title', descKey: 'services.frontend.desc', color: '--cyan', gradient: 'from-cyan/20 to-purple/10' },
    { icon: Smartphone, titleKey: 'services.responsive.title', descKey: 'services.responsive.desc', color: '--purple', gradient: 'from-purple/20 to-rose/10' },
    { icon: Zap, titleKey: 'services.performance.title', descKey: 'services.performance.desc', color: '--amber', gradient: 'from-amber/20 to-primary/10' },
  ];

  return (
    <section id="services" className="section-padding bg-card/50 relative overflow-hidden">
      <div className="absolute top-1/2 start-0 w-80 h-80 rounded-full opacity-5 blur-3xl" style={{ background: 'hsl(var(--amber))' }} />
      
      <div className="container mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('services.title')}</h2>
          <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary via-cyan to-purple" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all h-full overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all"
                    style={{ background: `hsl(var(${service.color}) / 0.1)` }}
                  >
                    <service.icon size={26} style={{ color: `hsl(var(${service.color}))` }} />
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-2">{t(service.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(service.descKey)}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
