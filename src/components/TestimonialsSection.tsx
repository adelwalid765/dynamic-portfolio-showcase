import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useI18n } from '@/lib/i18n';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const { t } = useI18n();

  const testimonials = [
    { name: t('testimonials.1.name'), role: t('testimonials.1.role'), text: t('testimonials.1.text') },
    { name: t('testimonials.2.name'), role: t('testimonials.2.role'), text: t('testimonials.2.text') },
    { name: t('testimonials.3.name'), role: t('testimonials.3.role'), text: t('testimonials.3.text') },
  ];

  return (
    <section id="testimonials" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('testimonials.title')}</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all h-full flex flex-col"
              >
                <Quote size={24} className="text-primary/30 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{item.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-muted-foreground text-xs">{item.role}</p>
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
