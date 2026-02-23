import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { useI18n } from '@/lib/i18n';
import { Mail, Phone, Linkedin, Send, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const { t } = useI18n();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:adelwalid765@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  const contactInfo = [
    { icon: Mail, label: 'adelwalid765@gmail.com', href: 'mailto:adelwalid765@gmail.com', color: '--primary' },
    { icon: Phone, label: '+20 122 827 5370', href: 'tel:+201228275370', color: '--cyan' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/adel-waleed-adel-704871298', color: '--purple' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 end-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ background: 'hsl(var(--cyan))' }} />
      <div className="absolute bottom-0 start-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ background: 'hsl(var(--purple))' }} />

      <div className="container mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('contact.title')}</h2>
          <div className="w-16 h-1 mx-auto mb-12 rounded-full bg-gradient-to-r from-primary via-cyan to-purple" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimatedSection delay={0.1} direction="left">
            <h3 className="font-semibold text-xl mb-6">{t('contact.info')}</h3>
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `hsl(var(${item.color}) / 0.1)` }}
                  >
                    <item.icon size={18} style={{ color: `hsl(var(${item.color}))` }} />
                  </motion.div>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono-code">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <form onSubmit={handleSubmit} className="space-y-4">
              {(['name', 'email'] as const).map(field => (
                <motion.div key={field} whileFocus={{ scale: 1.01 }}>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={t(`contact.${field}`)}
                    value={formData[field]}
                    onChange={e => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused('')}
                    required
                    className={`w-full px-4 py-3 rounded-xl bg-secondary border text-foreground placeholder:text-muted-foreground focus:outline-none transition-all text-sm ${
                      focused === field ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                    }`}
                  />
                </motion.div>
              ))}
              <textarea
                placeholder={t('contact.message')}
                value={formData.message}
                onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-xl bg-secondary border text-foreground placeholder:text-muted-foreground focus:outline-none transition-all text-sm resize-none ${
                  focused === 'message' ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                }`}
              />
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium transition-all glow-sm shimmer relative overflow-hidden"
              >
                <Sparkles size={16} />
                {t('contact.send')}
                <Send size={16} />
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
