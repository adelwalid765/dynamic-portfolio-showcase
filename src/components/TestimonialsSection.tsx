import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useI18n } from '@/lib/i18n';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useI18n();

  const testimonials = [
    { name: t('testimonials.1.name'), role: t('testimonials.1.role'), text: t('testimonials.1.text'), color: '--primary' },
    { name: t('testimonials.2.name'), role: t('testimonials.2.role'), text: t('testimonials.2.text'), color: '--cyan' },
    { name: t('testimonials.3.name'), role: t('testimonials.3.role'), text: t('testimonials.3.text'), color: '--purple' },
  ];

  return (
    <section id="testimonials" className="section-padding bg-card/50 relative overflow-hidden">
      <div className="absolute bottom-0 end-0 w-80 h-80 rounded-full opacity-5 blur-3xl" style={{ background: 'hsl(var(--cyan))' }} />

      <div className="container mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('testimonials.title')}</h2>
          <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary to-cyan" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all h-full flex flex-col relative overflow-hidden group"
              >
                {/* Hover bg effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, hsl(var(${item.color}) / 0.05), transparent)` }} />
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber text-amber" />
                    ))}
                  </div>
                  <Quote size={24} style={{ color: `hsl(var(${item.color}) / 0.3)` }} className="mb-3" />
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-11 h-11 rounded-full flex items-center justify-center"
                      style={{ background: `hsl(var(${item.color}) / 0.1)` }}
                    >
                      <span className="font-bold text-sm" style={{ color: `hsl(var(${item.color}))` }}>{item.name[0]}</span>
                    </motion.div>
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-muted-foreground text-xs">{item.role}</p>
                    </div>
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

export default TestimonialsSection;
