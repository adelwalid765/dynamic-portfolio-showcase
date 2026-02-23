import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useI18n();

  const socials = [
    { icon: Mail, href: 'mailto:adelwalid765@gmail.com', color: '--primary' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/adel-waleed-adel-704871298', color: '--cyan' },
    { icon: Github, href: '#', color: '--purple' },
  ];

  return (
    <footer className="relative py-12 border-t border-border overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan to-purple animate-gradient" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-6"
        >
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-xl flex items-center justify-center border border-border hover:border-primary/30 transition-all"
              style={{ background: `hsl(var(${s.color}) / 0.05)` }}
            >
              <s.icon size={18} style={{ color: `hsl(var(${s.color}))` }} />
            </motion.a>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-sm flex items-center justify-center gap-1"
        >
          {t('footer.rights')} <Heart size={12} className="text-rose fill-rose inline" />
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
