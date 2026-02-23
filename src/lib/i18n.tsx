import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',

    // Home
    'home.greeting': "Hello, I'm",
    'home.name': 'Adel Walid Adel',
    'home.title': 'Web Developer',
    'home.subtitle': 'Passionate about building responsive, user-friendly web applications with clean code and modern technologies.',
    'home.cta': 'View My Work',
    'home.contact': 'Contact Me',
    'home.download_cv': 'Download CV',

    // About
    'about.title': 'About Me',
    'about.description': 'Highly motivated Computer Science student specializing in Web Development and Front-End Development. Passionate about clean code, performance optimization, and continuous learning in modern web technologies.',
    'about.education': 'Education',
    'about.degree': 'Bachelor of Computer Science',
    'about.university': 'Faculty of Computers and Information, October 6 University',
    'about.gpa': 'GPA: 3.7 / 4.0',
    'about.year': 'Third Year — Expected Graduation: 2027',
    'about.location': 'Shubra, Qalyubia, Egypt',

    // Skills
    'skills.title': 'My Skills',
    'skills.technical': 'Technical Skills',
    'skills.soft': 'Soft Skills',
    'skills.languages': 'Languages',
    'skills.arabic': 'Arabic — Native',
    'skills.english': 'English — Very Good',

    // Experience
    'experience.title': 'Experience',
    'experience.depi.title': 'Front-End Web Dev Trainee',
    'experience.depi.company': 'DEPI Initiative',
    'experience.depi.desc1': 'Completed 5 responsive web pages using HTML5, CSS3, and Bootstrap 5',
    'experience.depi.desc2': 'Built 4 reusable UI components following clean code principles',
    'experience.depi.desc3': 'Implemented 3 JavaScript interactive features improving UX',
    'experience.depi.desc4': 'Contributed to 20+ Git commits using GitHub',
    'experience.iti.title': 'Front-End Web Dev Trainee',
    'experience.iti.company': 'ITI Initiative — 1 Month Intensive',
    'experience.iti.desc1': 'Collaborated within a 4-member team to meet weekly milestones',
    'experience.iti.desc2': 'Developed 3 complete front-end web projects from scratch',
    'experience.iti.desc3': 'Implemented responsive designs for all screen sizes',
    'experience.iti.desc4': 'Solved 15+ JavaScript programming challenges',

    // Services
    'services.title': 'My Services',
    'services.web.title': 'Web Development',
    'services.web.desc': 'Building responsive, modern websites with cutting-edge technologies and best practices.',
    'services.frontend.title': 'Front-End Development',
    'services.frontend.desc': 'Crafting interactive, pixel-perfect user interfaces with React and modern CSS.',
    'services.responsive.title': 'Responsive Design',
    'services.responsive.desc': 'Ensuring seamless experiences across all devices with mobile-first design approach.',
    'services.performance.title': 'Performance Optimization',
    'services.performance.desc': 'Optimizing web applications for speed, accessibility, and search engine visibility.',

    // Projects
    'projects.title': 'My Projects',
    'projects.p1.title': 'Responsive Portfolio Website',
    'projects.p1.desc': 'A fully responsive personal portfolio website featuring smooth animations, dark/light mode toggle, and multi-language support with a mobile-first design approach.',
    'projects.p2.title': 'E-Commerce Landing Page',
    'projects.p2.desc': 'A modern e-commerce product landing page with interactive product gallery, shopping cart UI, and animated transitions for a seamless user experience.',
    'projects.p3.title': 'Interactive JS Components',
    'projects.p3.desc': 'A collection of 10+ reusable JavaScript UI components including modals, sliders, accordions, and form validators built with vanilla JS and DOM manipulation.',

    // Testimonials
    'testimonials.title': 'Testimonials',
    'testimonials.1.name': 'Ahmed Hassan',
    'testimonials.1.role': 'Team Lead at DEPI',
    'testimonials.1.text': 'Adel showed exceptional dedication during his training. His clean code approach and quick learning ability made him stand out among his peers.',
    'testimonials.2.name': 'Sara Mohamed',
    'testimonials.2.role': 'Mentor at ITI',
    'testimonials.2.text': 'A talented developer with a great eye for detail. Adel consistently delivered high-quality work and was a valuable team member.',
    'testimonials.3.name': 'Dr. Khaled Ali',
    'testimonials.3.role': 'Professor, October 6 University',
    'testimonials.3.text': 'One of the most motivated students in the program. His GPA and project work demonstrate his commitment to excellence.',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Info',

    // Footer
    'footer.rights': '© 2025 Adel Walid Adel. All rights reserved.',

    // Theme
    'theme.light': 'Light',
    'theme.dark': 'Dark',
  },
  ar: {
    // Nav
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.skills': 'المهارات',
    'nav.experience': 'الخبرة',
    'nav.services': 'الخدمات',
    'nav.projects': 'المشاريع',
    'nav.testimonials': 'آراء العملاء',
    'nav.contact': 'تواصل',

    // Home
    'home.greeting': 'مرحباً، أنا',
    'home.name': 'عادل وليد عادل',
    'home.title': 'مطور ويب',
    'home.subtitle': 'شغوف ببناء تطبيقات ويب متجاوبة وسهلة الاستخدام بكود نظيف وتقنيات حديثة.',
    'home.cta': 'شاهد أعمالي',
    'home.contact': 'تواصل معي',
    'home.download_cv': 'تحميل السيرة الذاتية',

    // About
    'about.title': 'عني',
    'about.description': 'طالب علوم حاسب متحمس متخصص في تطوير الويب وتطوير الواجهات الأمامية. شغوف بالكود النظيف وتحسين الأداء والتعلم المستمر في تقنيات الويب الحديثة.',
    'about.education': 'التعليم',
    'about.degree': 'بكالوريوس علوم الحاسب',
    'about.university': 'كلية الحاسبات والمعلومات، جامعة ٦ أكتوبر',
    'about.gpa': 'المعدل التراكمي: 3.7 / 4.0',
    'about.year': 'السنة الثالثة — التخرج المتوقع: 2027',
    'about.location': 'شبرا، القليوبية، مصر',

    // Skills
    'skills.title': 'مهاراتي',
    'skills.technical': 'المهارات التقنية',
    'skills.soft': 'المهارات الشخصية',
    'skills.languages': 'اللغات',
    'skills.arabic': 'العربية — لغة أم',
    'skills.english': 'الإنجليزية — جيد جداً',

    // Experience
    'experience.title': 'الخبرة',
    'experience.depi.title': 'متدرب تطوير واجهات أمامية',
    'experience.depi.company': 'مبادرة DEPI',
    'experience.depi.desc1': 'أنجزت 5 صفحات ويب متجاوبة باستخدام HTML5 و CSS3 و Bootstrap 5',
    'experience.depi.desc2': 'بنيت 4 مكونات واجهة مستخدم قابلة لإعادة الاستخدام',
    'experience.depi.desc3': 'نفذت 3 ميزات تفاعلية بـ JavaScript لتحسين تجربة المستخدم',
    'experience.depi.desc4': 'ساهمت بأكثر من 20 commit على GitHub',
    'experience.iti.title': 'متدرب تطوير واجهات أمامية',
    'experience.iti.company': 'مبادرة ITI — تدريب مكثف شهر واحد',
    'experience.iti.desc1': 'تعاونت ضمن فريق من 4 أعضاء لتحقيق الأهداف الأسبوعية',
    'experience.iti.desc2': 'طورت 3 مشاريع واجهات أمامية كاملة من الصفر',
    'experience.iti.desc3': 'نفذت تصميمات متجاوبة لجميع أحجام الشاشات',
    'experience.iti.desc4': 'حللت أكثر من 15 تحدي برمجي بـ JavaScript',

    // Services
    'services.title': 'خدماتي',
    'services.web.title': 'تطوير الويب',
    'services.web.desc': 'بناء مواقع ويب متجاوبة وحديثة بأحدث التقنيات وأفضل الممارسات.',
    'services.frontend.title': 'تطوير الواجهات الأمامية',
    'services.frontend.desc': 'تصميم واجهات مستخدم تفاعلية ودقيقة باستخدام React و CSS الحديث.',
    'services.responsive.title': 'التصميم المتجاوب',
    'services.responsive.desc': 'ضمان تجربة سلسة على جميع الأجهزة بنهج الموبايل أولاً.',
    'services.performance.title': 'تحسين الأداء',
    'services.performance.desc': 'تحسين تطبيقات الويب من حيث السرعة وإمكانية الوصول والظهور في محركات البحث.',

    // Projects
    'projects.title': 'مشاريعي',
    'projects.web_apps': '3 تطبيقات ويب متجاوبة بـ HTML و CSS و Bootstrap',
    'projects.js_components': 'أكثر من 10 مكونات JavaScript باستخدام DOM',
    'projects.multi_page': 'تخطيطات متعددة الصفحات بأكثر من 5 صفحات لكل مشروع',
    'projects.database': 'مشروعان أكاديميان لقواعد البيانات باستخدام Oracle',
    'projects.view': 'عرض المشروع',

    // Testimonials
    'testimonials.title': 'آراء العملاء',
    'testimonials.1.name': 'أحمد حسن',
    'testimonials.1.role': 'قائد فريق في DEPI',
    'testimonials.1.text': 'أظهر عادل تفانياً استثنائياً خلال تدريبه. نهجه في الكود النظيف وقدرته على التعلم السريع جعلاه يبرز بين أقرانه.',
    'testimonials.2.name': 'سارة محمد',
    'testimonials.2.role': 'مرشدة في ITI',
    'testimonials.2.text': 'مطور موهوب بعين ثاقبة للتفاصيل. عادل يقدم باستمرار عملاً عالي الجودة وكان عضواً قيماً في الفريق.',
    'testimonials.3.name': 'د. خالد علي',
    'testimonials.3.role': 'أستاذ، جامعة ٦ أكتوبر',
    'testimonials.3.text': 'من أكثر الطلاب تحفيزاً في البرنامج. معدله التراكمي وعمله في المشاريع يُظهران التزامه بالتميز.',

    // Contact
    'contact.title': 'تواصل معي',
    'contact.name': 'اسمك',
    'contact.email': 'بريدك الإلكتروني',
    'contact.message': 'رسالتك',
    'contact.send': 'إرسال الرسالة',
    'contact.info': 'معلومات التواصل',

    // Footer
    'footer.rights': '© 2025 عادل وليد عادل. جميع الحقوق محفوظة.',

    // Theme
    'theme.light': 'فاتح',
    'theme.dark': 'داكن',
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('lang') as Language) || 'en';
  });

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
  }, [lang, dir]);

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
};
