import { IconType } from "react-icons";
import { FiHome, FiMail, FiMapPin, FiPhone, FiTool, FiUser } from "react-icons/fi";
import { RiFolderOpenLine } from "react-icons/ri";

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

export const navItems: NavItem[] = [
  { label: "HOME", id: "home", icon: FiHome },
  { label: "ABOUT", id: "about", icon: FiUser },
  { label: "SERVICES", id: "services", icon: FiTool },
  { label: "PROJECTS", id: "projects", icon: RiFolderOpenLine },
  { label: "CONTACT", id: "contact", icon: FiMail }
];

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

export const heroRoles = ["Full-Stack Developer", "React & Laravel Builder", "A friend :)"];

export const resumeUrl =
  "https://firebasestorage.googleapis.com/v0/b/tripoli-soap.appspot.com/o/MohamadHassoun%20CV.pdf?alt=media&token=03b9345c-2cfb-4894-bd0e-9db13e547495";

export const about = {
  headline:
    "Frontend & Full-Stack Developer with experience in React, Laravel, Flutter, and secure web applications.",
  detail:
    "I'm a graduate in Telecommunications and Programming Engineering from the Technology College in Sidon, Lebanon. I have hands-on experience building full-stack products for startups and businesses, contributing to production-ready interfaces, backend systems, and secure user flows. Most recently, I've been working on LahaLak, a medical services platform based in Jeddah, where I build frontend experiences with React and backend features with PHP/Laravel, including payment flows, filters, dashboards, and data management systems tailored to user needs.",
  technologies: ["Dart", "JavaScript", "Python", "PHP", "C", "C#"],
  facts: [
    { label: "Name", value: "Mohamad Hassoun" },
    { label: "Age", value: "29" },
    { label: "Current Residence", value: "Jeddah, SA." },
    { label: "Email", value: "mohamadhassoun21698@gmail.com" },
    { label: "From", value: "Tripoli, LB" }
  ]
};

export const services: ServiceItem[] = [
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
];

export const projects: ProjectItem[] = [
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
    title: "Athar Alshifaa",
    description:
      "Developed a single-language Hijama website with custom JavaScript animations to enhance engagement and brand presence.",
    link: "https://athar-alshifa.com/",
    icon: "/images/projects/athar.png",
    banner: "/images/projects/atharK.png"
  }
];

export const contactItems: ContactItem[] = [
  { title: "Location", detail: "Jeddah, KSA", icon: FiMapPin },
  { title: "Phone or WhatsApp", detail: "+961 3141362, +966 53 294 2434", icon: FiPhone },
  { title: "Email", detail: "mohamadhassoun21698@gmail.com", icon: FiMail }
];

export const footerText = "Developed in next.js with Mohamad Hassoun v2";
export const githubUrl = "https://github.com/Mohassoun";
