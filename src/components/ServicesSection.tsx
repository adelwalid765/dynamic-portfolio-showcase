import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useI18n } from '@/lib/i18n';
import { Globe, Layout, Smartphone, Zap } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useI18n();

  const services = [
    { icon: Globe, titleKey: 'services.web.title', descKey: 'services.web.desc' },
    { icon: Layout, titleKey: 'services.frontend.title', descKey: 'services.frontend.desc' },
    { icon: Smartphone, titleKey: 'services.responsive.title', descKey: 'services.responsive.desc' },
    { icon: Zap, titleKey: 'services.performance.title', descKey: 'services.performance.desc' },
  ];

  return (
    <section id="services" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('services.title')}</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-sm transition-all">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t(service.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(service.descKey)}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
