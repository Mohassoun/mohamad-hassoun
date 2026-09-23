import { IconType } from "react-icons";
import { FiHome, FiMail, FiMapPin, FiPhone, FiTool, FiUser } from "react-icons/fi";
import { RiFolderOpenLine } from "react-icons/ri";

export type Language = "fr" | "en";

export type NavItem = {
  label: string;
  id: string;
  icon: IconType;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  darkIcon?: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  link: string;
  icon: string;
  banner: string;
};

export type ContactItem = {
  title: string;
  detail: string;
  icon: IconType;
};

const navBase: { id: string; icon: IconType }[] = [
  { id: "home", icon: FiHome },
  { id: "about", icon: FiUser },
  { id: "services", icon: FiTool },
  { id: "projects", icon: RiFolderOpenLine },
  { id: "contact", icon: FiMail }
];

export const navLabels: Record<Language, Record<string, string>> = {
  fr: {
    home: "ACCUEIL",
    about: "À PROPOS",
    services: "SERVICES",
    projects: "PROJETS",
    contact: "CONTACT"
  },
  en: {
    home: "HOME",
    about: "ABOUT",
    services: "SERVICES",
    projects: "PROJECTS",
    contact: "CONTACT"
  }
};

export function getNavItems(lang: Language): NavItem[] {
  return navBase.map((item) => ({
    id: item.id,
    icon: item.icon,
    label: navLabels[lang][item.id] ?? item.id
  }));
}

// Legacy default (EN) — kept for compatibility
export const navItems: NavItem[] = getNavItems("en");

export const socialLinks = [
  {
    label: "Threads",
    href: "https://www.threads.net/@mhamadhassoun45/post/Cud6WmTt9Ds/?igshid=NTc4MTIwNjQ2YQ==",
    icon: "/images/icons/social-instagram.svg"
  },
  {
    label: "Twitter",
    href: "https://twitter.com/mohamad1p1/status/1689104891761811456?t=2Vm0zNdRCy8eWDf2voVlNg&s=19",
    icon: "/images/icons/social-twitter.svg"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamad-hassoun-788949234",
    icon: "/images/icons/social-linkedin.svg"
  },
  {
    label: "GitHub",
    href: "https://github.com/Mohassoun",
    icon: "/images/icons/social-github.svg"
  }
];

export const heroContent: Record<
  Language,
  {
    welcome: string;
    welcomeMobile: string;
    description: string;
    descriptionMobile: string;
    roles: string[];
  }
> = {
  fr: {
    welcome: "BIENVENUE SUR MON PORTFOLIO !",
    welcomeMobile: "SALUT !",
    description:
      "Développeur full-stack basé à Paris, France, spécialisé en React, Laravel, Flutter et applications web sécurisées.",
    descriptionMobile:
      "Développeur full-stack basé à Paris, France, spécialisé en React, Laravel, Flutter et applications web sécurisées.",
    roles: ["Développeur Full-Stack", "Créateur React & Laravel", "Un ami :)"]
  },
  en: {
    welcome: "WELCOME TO MY PORTFOLIO!",
    welcomeMobile: "HEY THERE!",
    description:
      "Full-stack developer based in Paris, France, specializing in React, Laravel, Flutter, and secure web applications.",
    descriptionMobile:
      "Full-stack developer based in Paris, France, specializing in React, Laravel, Flutter, and secure web applications.",
    roles: ["Full-Stack Developer", "React & Laravel Builder", "A friend :)"]
  }
};

// Legacy
export const heroRoles = heroContent.en.roles;

export const resumeUrl =
  "https://firebasestorage.googleapis.com/v0/b/tripoli-soap.appspot.com/o/MohamadHassoun%20CV.pdf?alt=media&token=03b9345c-2cfb-4894-bd0e-9db13e547495";

export const aboutContent: Record<
  Language,
  {
    sectionTitle: string;
    sectionSubtitle: string;
    whoAmI: string;
    headline: string;
    detail: string;
    techTitle: string;
    technologies: string[];
    facts: { label: string; value: string }[];
    resumeLabel: string;
  }
> = {
  fr: {
    sectionTitle: "À propos de moi",
    sectionSubtitle: "Apprenez à me connaître :)",
    whoAmI: "Qui suis-je ?",
    headline:
      "Développeur Frontend & Full-Stack, actuellement étudiant en Master Informatique à SUPINFO Paris, avec de l'expérience en React, Laravel, Flutter et applications web sécurisées.",
    detail:
      "Diplômé en ingénierie des télécommunications et programmation du Collège de Technologie de Saïda (Liban), je poursuis actuellement mon Master en Informatique à SUPINFO Paris. J'ai une solide expérience pratique dans le développement de produits full-stack pour des startups et entreprises, avec la création d'interfaces modernes, d'architectures backend robustes et de parcours utilisateurs sécurisés. J'ai notamment développé LahaLak, une plateforme de services médicaux, en concevant des expériences frontend avec React et des fonctionnalités backend en PHP/Laravel (paiements, filtres avancés, tableaux de bord et gestion de données).",
    techTitle: "Technologies avec lesquelles j'ai travaillé :",
    technologies: ["Dart", "JavaScript", "Python", "PHP", "C", "C#"],
    facts: [
      { label: "Nom", value: "Mohamad Hassoun" },
      { label: "Âge", value: "29" },
      { label: "Résidence actuelle", value: "Paris, France" },
      { label: "Email", value: "mohamadhassoun21698@gmail.com" },
      { label: "Origine", value: "El Sfireh, Liban" }
    ],
    resumeLabel: "CV"
  },
  en: {
    sectionTitle: "About Me",
    sectionSubtitle: "Get to know me :)",
    whoAmI: "Who am I?",
    headline:
      "Frontend & Full-Stack Developer, currently a Master's student in Computer Science at SUPINFO Paris, with experience in React, Laravel, Flutter, and secure web applications.",
    detail:
      "Graduate in Telecommunications and Programming Engineering from the Technology College in Sidon (Lebanon), I'm currently pursuing my Master's in Computer Science at SUPINFO Paris. I have solid hands-on experience building full-stack products for startups and businesses, creating modern interfaces, robust backend architectures, and secure user flows. I notably developed LahaLak, a medical services platform, designing frontend experiences with React and backend features in PHP/Laravel (payments, advanced filters, dashboards, and data management).",
    techTitle: "Technologies I have worked with:",
    technologies: ["Dart", "JavaScript", "Python", "PHP", "C", "C#"],
    facts: [
      { label: "Name", value: "Mohamad Hassoun" },
      { label: "Age", value: "29" },
      { label: "Current Residence", value: "Paris, France" },
      { label: "Email", value: "mohamadhassoun21698@gmail.com" },
      { label: "From", value: "El Sfireh, Lebanon" }
    ],
    resumeLabel: "Resume"
  }
};

// Legacy
export const about = {
  headline: aboutContent.en.headline,
  detail: aboutContent.en.detail,
  technologies: aboutContent.en.technologies,
  facts: aboutContent.en.facts
};

export const servicesContent: Record<Language, ServiceItem[]> = {
  fr: [
    {
      title: "Développement d'applications mobiles",
      description:
        "Développement d'apps Android avec Flutter\n- Écran de démarrage\n- Firebase Auth/Cloud\n- API REST\n- Intégration cartes et plus... !",
      icon: "/images/services/app.png"
    },
    {
      title: "AWS Serverless",
      description:
        "AWS serverless\n- Architecture événementielle\n- Fonctions cloud\n- Intégrations API\n- Déploiements évolutifs",
      icon: "/images/services/ui.png"
    },
    {
      title: "Prototypage rapide",
      description:
        "Prototype rapide avec Flutter\n- MVP fonctionnel\n- Prototype rapide et opérationnel",
      icon: "/images/services/rapid.png"
    },
    {
      title: "Développement d'applications web",
      description:
        "Développement de plateforme Full-Stack\n- Tableaux de bord sur mesure\n- API backend Laravel\n- Interfaces frontend React\n- Accès par rôles\n- Intégration paiement",
      icon: "/images/services/blog.png"
    },
    {
      title: "Open Source - GitHub",
      description:
        "Projets open source GitHub\n- README.md soigné\n- Bien documenté\n- Images d'en-tête et plus... !",
      icon: "/images/services/open_b.png",
      darkIcon: "/images/services/open.png"
    }
  ],
  en: [
    {
      title: "Mobile App Development",
      description:
        "Android app development via Flutter\n- Splash Screen\n- Firebase Auth/Cloud\n- REST APIs\n- Maps integration and more...!",
      icon: "/images/services/app.png"
    },
    {
      title: "aws serverless",
      description:
        "aws serverless\n- Event-driven architecture\n- Cloud functions\n- API integrations\n- Scalable deployments",
      icon: "/images/services/ui.png"
    },
    {
      title: "Rapid Prototyping",
      description:
        "Rapid Prototype via Flutter\n- Working MVP\n- Quick & Working prototype",
      icon: "/images/services/rapid.png"
    },
    {
      title: "Web Application Development",
      description:
        "Full-Stack Platform Development\n- Custom Dashboards\n- Laravel Backend APIs\n- React Frontend Interfaces\n- Role-based Access\n- Payment Integration",
      icon: "/images/services/blog.png"
    },
    {
      title: "Open Source - GitHub",
      description:
        "Open source GitHub Projects\n- Awesome README.md\n- Well documented\n- Header images and more...!",
      icon: "/images/services/open_b.png",
      darkIcon: "/images/services/open.png"
    }
  ]
};

// Legacy
export const services: ServiceItem[] = servicesContent.en;

export const servicesHeadings: Record<Language, { title: string; subtitle: string }> = {
  fr: {
    title: "Que puis-je faire ?",
    subtitle: "Je ne suis peut-être pas parfait, mais je suis sûrement utile :)"
  },
  en: {
    title: "What I can do?",
    subtitle: "I may not be perfect but surely I'm of some use :)"
  }
};

export const projectsContent: Record<Language, ProjectItem[]> = {
  fr: [
    {
      title: "Lahalak",
      description:
        "Plateforme médicale LahaLak - Une plateforme complète de services de santé offrant un accompagnement personnalisé, des prix transparents et une réservation fluide grâce à des filtres intelligents. Construite avec ReactJS et Laravel.",
      link: "https://lahalak.sa/",
      icon: "/images/projects/Lahalak.png",
      banner: "/images/projects/LahalakB.png"
    },
    {
      title: "Jasotech",
      description:
        "Site corporate bilingue (AR/EN) pour une entreprise saoudienne de sécurité et technologie, avec Next.js, Tailwind, CMS headless et support RTL.",
      link: "https://www.jasotech.com/",
      icon: "/images/projects/music.png",
      banner: "/images/projects/musicB.png"
    },
    {
      title: "Logiciel de gestion de site",
      description:
        "Programme simple pour gérer une boutique en ligne : ajout et suppression d'articles, lecture des messages et réception des commandes.",
      link: "hi",
      icon: "/images/projects/flutter.png",
      banner: "/images/projects/snackbar.png"
    },
    {
      title: "Site traditionnel.",
      description: "Boutique en ligne traditionnelle développée avec Flutter.",
      link: "https://tripoli-soap.web.app/#/",
      icon: "/images/projects/quran.png",
      banner: "/images/projects/quranB.png"
    },
    {
      title: "Music App",
      description: "Logiciel de lecture musicale conçu avec Flutter.",
      link: "https://github.com/Mohassoun/musicAppUI",
      icon: "/images/projects/medkit.png",
      banner: "/images/projects/medkitB.png"
    },
    {
      title: "Animation",
      description: "Une belle animation simulant la chute d'un objet dans un trou.",
      link: "https://github.com/Mohassoun/severalDesign",
      icon: "/images/projects/hereiam.png",
      banner: "/images/projects/hereiamB.gif"
    },
    {
      title: "Scanner",
      description: "Scanner qui lit les codes-barres et QR codes.",
      link: "https://github.com/Mohassoun/scanner",
      icon: "/images/projects/covid.png",
      banner: "/images/projects/covidB.gif"
    },
    {
      title: "TicTacToeApp",
      description: "Morpion mobile - Un jeu mobile pour deux joueurs.",
      link: "https://github.com/Mohassoun/TicTacToeApp",
      icon: "/images/projects/TicTacToeApp.png",
      banner: "/images/projects/TicTacToeAppB.png"
    },
    {
      title: "Clavier arabe",
      description:
        "Une élégante application web qui permet de taper en arabe sans clavier physique.",
      link: "https://arabic-keyboard1.web.app/",
      icon: "/images/projects/arabicK.png",
      banner: "/images/projects/arabicKB.png"
    },
    {
      title: "Sunan Alnaqa",
      description:
        "Site de Hijama en une langue avec des animations JavaScript sur mesure pour renforcer l'engagement et la présence de la marque.",
      link: "https://sunan-alnaqa.com/",
      icon: "/images/projects/athar.png",
      banner: "/images/projects/atharK.png"
    }
  ],
  en: [
    {
      title: "Lahalak",
      description:
        "LahaLak Medical Platform - A comprehensive health service platform offering personalized support, transparent pricing, and seamless booking through smart filters. Built with ReactJS and Laravel.",
      link: "https://lahalak.sa/",
      icon: "/images/projects/Lahalak.png",
      banner: "/images/projects/LahalakB.png"
    },
    {
      title: "Jasotech",
      description:
        "Built a bilingual (AR/EN) corporate site for a Saudi security and technology firm using Next.js, Tailwind, a headless CMS, and RTL support.",
      link: "https://www.jasotech.com/",
      icon: "/images/projects/music.png",
      banner: "/images/projects/musicB.png"
    },
    {
      title: "Website control software",
      description:
        "An easy and simple program for managing an online store through adding and deleting items, reading messages, and receiving website orders.",
      link: "hi",
      icon: "/images/projects/flutter.png",
      banner: "/images/projects/snackbar.png"
    },
    {
      title: "Traditional website.",
      description: "Traditional online store developed using Flutter.",
      link: "https://tripoli-soap.web.app/#/",
      icon: "/images/projects/quran.png",
      banner: "/images/projects/quranB.png"
    },
    {
      title: "Music App",
      description: "Music playback software designed via Flutter.",
      link: "https://github.com/Mohassoun/musicAppUI",
      icon: "/images/projects/medkit.png",
      banner: "/images/projects/medkitB.png"
    },
    {
      title: "Animation",
      description: "A beautiful animation simulating the fall of an object into a hole.",
      link: "https://github.com/Mohassoun/severalDesign",
      icon: "/images/projects/hereiam.png",
      banner: "/images/projects/hereiamB.gif"
    },
    {
      title: "Scanner",
      description: "Scanner reads barcodes and QR codes.",
      link: "https://github.com/Mohassoun/scanner",
      icon: "/images/projects/covid.png",
      banner: "/images/projects/covidB.gif"
    },
    {
      title: "TicTacToeApp",
      description: "Mobile Tic Tac Toe - A two-player mobile game.",
      link: "https://github.com/Mohassoun/TicTacToeApp",
      icon: "/images/projects/TicTacToeApp.png",
      banner: "/images/projects/TicTacToeAppB.png"
    },
    {
      title: "Arabic Keyboard",
      description:
        "An elegant desktop web application that empowers users to type in Arabic without a physical keyboard.",
      link: "https://arabic-keyboard1.web.app/",
      icon: "/images/projects/arabicK.png",
      banner: "/images/projects/arabicKB.png"
    },
    {
      title: "Sunan Alnaqa",
      description:
        "Developed a single-language Hijama website with custom JavaScript animations to enhance engagement and brand presence.",
      link: "https://sunan-alnaqa.com/",
      icon: "/images/projects/athar.png",
      banner: "/images/projects/atharK.png"
    }
  ]
};

// Legacy
export const projects: ProjectItem[] = projectsContent.en;

export const projectsHeadings: Record<Language, { title: string; subtitle: string }> = {
  fr: {
    title: "Portfolio",
    subtitle: "Voici quelques exemples de mes travaux précédents :)"
  },
  en: {
    title: "Portfolio",
    subtitle: "Here are few samples of my previous work :)"
  }
};

const contactBase: { id: string; icon: IconType }[] = [
  { id: "location", icon: FiMapPin },
  { id: "phone", icon: FiPhone },
  { id: "email", icon: FiMail }
];

export const contactContent: Record<
  Language,
  {
    sectionTitle: string;
    sectionSubtitle: string;
    items: { title: string; detail: string }[];
  }
> = {
  fr: {
    sectionTitle: "Contactez-moi",
    sectionSubtitle: "Construisons quelque chose ensemble :)",
    items: [
      { title: "Localisation", detail: "Paris, France" },
      { title: "Téléphone ou WhatsApp", detail: "+961 3141362, +966 53 294 2434" },
      { title: "Email", detail: "mohamadhassoun21698@gmail.com" }
    ]
  },
  en: {
    sectionTitle: "Get in Touch",
    sectionSubtitle: "Let's build something together :)",
    items: [
      { title: "Location", detail: "Paris, France" },
      { title: "Phone or WhatsApp", detail: "+961 3141362, +966 53 294 2434" },
      { title: "Email", detail: "mohamadhassoun21698@gmail.com" }
    ]
  }
};

export function getContactItems(lang: Language): ContactItem[] {
  return contactBase.map((base, index) => ({
    icon: base.icon,
    title: contactContent[lang].items[index].title,
    detail: contactContent[lang].items[index].detail
  }));
}

// Legacy
export const contactItems: ContactItem[] = getContactItems("en");

export const uiStrings: Record<
  Language,
  {
    resume: string;
    seeMore: string;
    hireMe: string;
    viewProject: string;
    openMenu: string;
    toggleTheme: string;
  }
> = {
  fr: {
    resume: "CV",
    seeMore: "Voir plus",
    hireMe: "EMBAUCHEZ-MOI !",
    viewProject: "Voir le projet",
    openMenu: "Ouvrir le menu",
    toggleTheme: "Changer de thème"
  },
  en: {
    resume: "RESUME",
    seeMore: "See More",
    hireMe: "HIRE ME!",
    viewProject: "View project",
    openMenu: "Open menu",
    toggleTheme: "Toggle theme"
  }
};

export const footerTexts: Record<Language, string> = {
  fr: "Développé en Next.js par Mohamad Hassoun v2",
  en: "Developed in next.js with Mohamad Hassoun v2"
};

// Legacy
export const footerText = footerTexts.en;
export const githubUrl = "https://github.com/Mohassoun";
