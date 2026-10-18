export const SITE = {
  name: "RATONGASON Anjaratina Felicia",
  job: "Développeuse Full Stack Junior | UI/UX Designer",
  city: "Antananarivo, Madagascar",
  email: "feliciaratongason@gmail.com",
  phone: "0345323631",
  github: "",
  linkedin: "",
  available: true,

  intro:
    "Créative et passionnée par les nouvelles technologies, je transforme les idées en expériences digitales modernes, élégantes et intuitives. À la croisée du développement Full Stack et du design UI/UX, je conçois des interfaces centrées sur l’utilisateur et développe des applications web performantes, fonctionnelles et évolutives.",
};

export const SKILLS = [
  {
    id: "design",
    group: "Design UI/UX & Création graphique",
    icon: "🎨",
    items: [
      { name: "Figma", logo: "figma", color: "#F24E1E" },
      { name: "Adobe XD", logo: "adobexd", color: "#FF61F6" },
      { name: "Illustrator", logo: "adobeillustrator", color: "#FF9A00" },
      { name: "Photoshop", logo: "adobephotoshop", color: "#31A8FF" },
      { name: "InDesign", logo: "adobeindesign", color: "#FF3366" },
    ],
  },
  {
    id: "languages",
    group: "Langages de programmation",
    icon: "💻",
    items: [
      { name: "JavaScript", logo: "javascript", color: "#F7DF1E" },
      { name: "TypeScript", logo: "typescript", color: "#3178C6" },
      { name: "Python", logo: "python", color: "#3776AB" },
      { name: "Java", logo: "openjdk", color: "#F89820" },
      { name: "PHP", logo: "php", color: "#777BB4" },
      { name: "C# / .NET", logo: "dotnet", color: "#512BD4" },
    ],
  },
  {
    id: "frontend",
    group: "Développement Frontend",
    icon: "🖥️",
    items: [
      { name: "HTML5", logo: "html5", color: "#E34F26" },
      { name: "CSS3", logo: "css3", color: "#1572B6" },
      { name: "Bootstrap", logo: "bootstrap", color: "#7952B3" },
      { name: "ReactJS", logo: "react", color: "#61DAFB" },
      { name: "Vue.js", logo: "vuedotjs", color: "#42B883" },
    ],
  },
  {
    id: "backend",
    group: "Backend & Frameworks",
    icon: "⚙️",
    items: [
      { name: "Node.js", logo: "nodedotjs", color: "#5FA04E" },
      { name: "Laravel", logo: "laravel", color: "#FF2D20" },
      { name: "Symfony", logo: "symfony", color: "#FFFFFF" },
      { name: "React Native", logo: "react", color: "#61DAFB" },
    ],
  },
  {
    id: "databases",
    group: "Bases de données",
    icon: "🗄️",
    items: [
      { name: "MySQL", logo: "mysql", color: "#4479A1" },
      { name: "PostgreSQL", logo: "postgresql", color: "#4169E1" },
      { name: "MongoDB", logo: "mongodb", color: "#47A248" },
      { name: "OracleDB", logo: "oracle", color: "#F80000" },
    ],
  },
  {
    id: "tools",
    group: "Outils & Technologies",
    icon: "🛠️",
    items: [
      { name: "Git", logo: "git", color: "#F05032" },
      { name: "GitHub", logo: "github", color: "#FFFFFF" },
      { name: "Postman", logo: "postman", color: "#FF6C37" },
      { name: "Firebase", logo: "firebase", color: "#FFCA28" },
    ],
  },
  {
    id: "languages-spoken",
    group: "Langues",
    icon: "🌍",
    items: [
      { name: "Malgache", detail: "(Langue maternelle)", color: "#22D3EE" },
      { name: "Français", detail: "(Courant)", color: "#8B7BFF" },
    ],
  },
];

export const EXPERIENCES = [
  {
    id: "stage-autohub",
    company: "RAZONE Madagascar",
    position: "Stagiaire en développement Full Stack & UI/UX Design",
    period: "Novembre 2025 – Mai 2026",
    location: "Antananarivo, Madagascar",
    type: "Stage professionnel",

    summary:
      "Participation à la conception et au développement d’une solution digitale de gestion centralisée pour la plateforme AutoHub.",

    missions: [
      "Conception et amélioration des interfaces utilisateur.",
      "Développement des modules Super Admin avec ReactJS et TypeScript.",
      "Gestion des entreprises, utilisateurs, véhicules, documents et publicités.",
      "Connexion aux API backend et gestion des données avec Redux Toolkit et Redux-Saga.",
      "Participation à l’optimisation des performances de la plateforme.",
    ],

    technologies: [
      "ReactJS",
      "TypeScript",
      "Material UI",
      "Redux Toolkit",
      "Node.js",
      "Strapi v3",
      "MongoDB",
      "Figma",
    ],
  },
];

export const PROJECTS = [
  {
    id: "gestion-comptable",
    title: "Gestion comptable & financière",
    year: "2025",
    category: "Application web · Finance · UI/UX",

    summary:
      "Une solution web qui simplifie le suivi financier grâce à une interface intuitive et des tableaux de bord interactifs.",

    description:
      "Conception UI/UX et développement Full Stack d’une application de gestion comptable et financière intégrée à l’ERP iDempiere. Pensée pour simplifier le travail des équipes comptables, elle remplace la navigation complexe de l’ERP par une interface claire et intuitive. La solution propose une authentification sécurisée, la consultation de la balance et du grand livre, la génération automatique de factures et des filtres avancés pour retrouver rapidement une écriture, une période ou un compte. Des tableaux de bord statistiques interactifs offrent une vue d’ensemble de la situation financière à l’aide de graphiques lisibles, pour faciliter le suivi et la prise de décision.",

    role: "UI/UX Designer & Développeuse Full Stack",

    tags: [
      "UI/UX Design",
      "iDempiere",
      "ERP/CRM",
      "Vue.js",
      "javascript",
      "laravel",
    ],

    color: "#6366f1",
    images: [
      "/projets/1-login.png",
      "/projets/2-balance.png",
      "/projets/3-balance-grand-livre-modale.png",
      "/projets/5-dashboard.png",
      "/projets/6-import.png",
    ],
    demo: "",
    code: "",
  },
  {
    id: "autohub-super-admin",
    title: "Plateforme AutoHub — Super Admin Dashboard",
    year: "2025",
    category: "Plateforme web · Administration",

    summary:
      "Une plateforme d’administration centralisée pour piloter les entreprises, les utilisateurs, les véhicules et les publicités.",

    description:
      "Conception UI/UX et développement des modules Super Admin d’AutoHub, une plateforme de vente et de location de véhicules et de motos. Ce tableau de bord permet à l’administrateur de piloter toute la plateforme depuis un seul espace : il centralise la gestion des entreprises partenaires, des comptes utilisateurs, des véhicules, des documents, des publicités et des messages de contact. Il intègre une authentification sécurisée, des indicateurs statistiques et des graphiques de croissance, ainsi qu’un système de notifications et d’activités récentes pour suivre en temps réel les annonces et les documents à valider. L’interface a été maquettée sur Figma puis développée avec ReactJS et TypeScript, en s’appuyant sur Redux Toolkit pour la gestion des données et sur une API Node.js / Strapi.",
    role: "UI/UX Designer & Développeuse Full Stack",

    tags: [
      "ReactJS",
      "TypeScript",
      "Node.js",
      "Strapi v3",
      "MongoDB",
      "Redux Toolkit",
      "UI/UX Design",
    ],

    color: "#0d9488",
    image: "/projets/tableau.PNG",
    images: [
      "/projets/utilisateur.PNG",
      "/projets/entreprise.PNG",
      "/projets/vehicule.PNG",
      "/projets/document.PNG",
      "/projets/ads.PNG",
      "/projets/contact.PNG",
    ],
    demo: "",
    code: "",
  },
];

export const EDUCATION = [
  {
    id: "licence-informatique",
    degree: "Licence en informatique",
    specialization: "Graphic Design & Communication Digitale",
    institution: "IT University",
  },
  {
    id: "bacc-serie-d",
    degree: "Baccalauréat Série D",
  },
];