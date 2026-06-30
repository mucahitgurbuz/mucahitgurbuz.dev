export const SITE_CONFIG = {
  name: "Mücahit Gürbüz",
  title: "Senior Software Engineer",
  description:
    "Senior Software Engineer with 10+ years of expertise in React, TypeScript, and modern web technologies. Currently leading core product development at Babbel in Berlin, and founder of Aida Yazılım — an AI studio behind products like HitTheRoad, live on the App Store. Passionate about AI transformation and enhancing team collaboration through knowledge-sharing.",
  url: "https://mucahitgurbuz.dev",
  email: "mucahitgurbuz@gmail.com",
  phone: "+49 176 8325 8742",
  location: "Berlin, Germany",
  avatar: "https://avatars.githubusercontent.com/u/22075688?v=4",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/mucahit/",
  github: "https://github.com/mucahitgurbuz",
  twitter: "https://twitter.com/Sosyal_Muhendis",
  youtube: "https://www.youtube.com/channel/UCluTALxegRMqQQV6RbTaFOg",
  googleScholar:
    "https://scholar.google.com/citations?user=hKuAWcsAAAAJ&hl=en",
};

export const ROLES = [
  "Senior Software Engineer",
  "AI Enthusiast",
  "Civil Engineer turned Coder",
  "React/TypeScript Expert",
  "Agentic Coding Advocate",
];

export const SKILLS = {
  languages: ["TypeScript", "JavaScript", "SQL", "Python", "MATLAB"],
  frontend: ["React", "Next.js", "Redux", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "MySQL", "PostgreSQL"],
  testing: ["Jest", "Enzyme", "Cypress", "React Testing Library"],
  tools: ["Git", "Docker", "CI/CD", "Vercel", "AWS"],
  methodologies: ["Agile", "Scrum", "TDD", "Code Review"],
  ai: ["AI Tools", "Agentic Coding", "LLM Integration", "Prompt Engineering"],
};

export const EXPERIENCE = [
  {
    title: "Senior Software Engineer",
    company: "Babbel",
    location: "Berlin, Germany",
    period: "Nov 2021 - Present",
    description:
      "Leading the Babbel app's core product development using React and TypeScript. Deploying across Android, iOS, and web platforms. Facilitating engineering-design communication and conducting AI-powered workflow sessions.",
    technologies: ["React", "TypeScript", "Kotlin", "Swift", "Node.js"],
    highlights: [
      "Led core product interface development",
      "Cross-platform deployment (Android, iOS, Web)",
      "AI tools integration for team workflows",
      "Weekly knowledge-sharing sessions",
    ],
  },
  {
    title: "Frontend Developer",
    company: "OPLOG",
    location: "Ankara, Turkey",
    period: "2020 - 2021",
    description:
      "Developed the frontend of a large-scale SaaS Warehouse Management System (WMS) in a scrum team.",
    technologies: [
      "TypeScript",
      "React",
      "Redux",
      "Jest",
      "Enzyme",
      "Cypress",
      "Styled System",
    ],
    highlights: [
      "Large-scale SaaS WMS development",
      "Atomic Design implementation",
      "End-to-end testing with Cypress",
    ],
  },
  {
    title: "Software Developer & Research Assistant",
    company: "METU",
    location: "Ankara, Turkey",
    period: "2018 - 2020",
    description:
      "Developed interactive modules using React/Angular.js for the department management system.",
    technologies: ["React", "Angular.js", "MATLAB"],
    highlights: [
      "Department management system modules",
      "Research on autonomous robotics",
      "Soil-tool interaction research",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "i4works",
    location: "Ankara, Turkey",
    period: "2017 - 2020",
    description:
      "Developed interactive web-tool for tsunami hazard mapping. Delivered to INGV, the biggest natural hazard research center in Europe.",
    technologies: ["React", "MobX", "Node.js", "Sequelize", "MySQL"],
    highlights: [
      "Tsunami hazard mapping tool",
      "Delivered to INGV (Italy)",
      "Complex data visualization",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science",
    field: "Geotechnical Engineering",
    school: "Middle East Technical University",
    location: "Ankara, Turkey",
    period: "2016 - 2019",
    gpa: "3.71",
    courses: ["Algorithms and Data Structures", "Finite Element Analysis", "Autonomous Robotics"],
  },
  {
    degree: "Bachelor of Science",
    field: "Civil Engineering",
    school: "Middle East Technical University",
    location: "Ankara, Turkey",
    period: "2010 - 2016",
    gpa: "2.75",
  },
];

export const FEATURED_PROJECTS = [
  {
    name: "HitTheRoad",
    tagline: "Your AI Road Trip Planner",
    description:
      "An AI-powered road trip planner. Tell it where and when — it crafts a day-by-day route with scenic stops, hidden gems, local food and places to stay, then becomes your in-trip copilot on the road. Designed, built and shipped end-to-end, live on the App Store and Google Play in 5 languages.",
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "LLM / RAG"],
    appStore:
      "https://apps.apple.com/us/app/hittheroad-ai-trip-planner/id6759530743",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.mucahitgurbuz.hittheroad",
    logo: "/hittheroad/logo.png",
    screenshots: [
      "/hittheroad/screen-overview.png",
      "/hittheroad/screen-day.png",
      "/hittheroad/screen-live.png",
    ],
  },
  {
    name: "Aida Yazılım",
    tagline: "AI Studio & Consultancy",
    description:
      "My AI venture — helping companies adopt AI from strategy to shipped product. From PorlandAI, a RAG assistant serving 1000+ employees across 36 departments, to consumer apps like HitTheRoad.",
    technologies: ["Next.js", "TypeScript", "RAG", "OpenAI", "Vercel"],
    link: "https://aidayazilim.com",
    monogram: "a",
  },
];

export const PROJECTS = [
  {
    name: "Babbel App",
    description:
      "Language learning application with 10M+ users. Led core product frontend development.",
    technologies: ["React", "TypeScript", "iOS", "Android"],
    link: "https://www.babbel.com",
  },
  {
    name: "Maestro WMS",
    description:
      "Large-scale SaaS Warehouse Management System for logistics operations.",
    technologies: ["TypeScript", "React", "Redux", "Cypress"],
  },
  {
    name: "TSUMAPS-NEAM",
    description:
      "Interactive web-tool for tsunami hazard mapping. EU-funded project delivered to INGV.",
    technologies: ["React", "MobX", "Node.js", "MySQL"],
    link: "http://www.tsumaps-neam.eu",
  },
  {
    name: "Saha Gözü",
    description:
      "Web platform for construction field inspection using automated UAV flights and 2D-3D model generation.",
    technologies: ["React", "WebGL", "Node.js"],
    link: "https://www.sahagozu.com",
  },
];

export const HOBBIES = [
  {
    name: "Video Production",
    icon: "Video",
    description: "Professional video editing and direction. Director certificate holder.",
  },
  {
    name: "Music Production",
    icon: "Music",
    description: "Creating and mixing music as a creative outlet.",
  },
  {
    name: "Travelling",
    icon: "Plane",
    description: "Exploring new cultures and places around the world.",
  },
  {
    name: "Camping",
    icon: "Tent",
    description: "Connecting with nature and outdoor adventures.",
  },
];

export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  whoami: "Mücahit Gürbüz - Senior Software Engineer @ Babbel",
  location: "Berlin, Germany 🇩🇪",
  skills: "TypeScript, React, Next.js, Node.js, AI Tools",
  contact: "mucahitgurbuz@gmail.com",
  github: "github.com/mucahitgurbuz",
  linkedin: "linkedin.com/in/mucahit",
  help: "Available commands: whoami, location, skills, contact, github, linkedin, clear",
  clear: "",
  sudo: "Nice try! 😄",
  "rm -rf": "I see you like to live dangerously... 💀",
  vim: "Exiting vim is left as an exercise for the reader 😈",
  emacs: "I see you're a person of culture 🎩",
  coffee: "☕ Here's your virtual coffee!",
  beer: "🍺 Prost! (That's 'Cheers' in German)",
};
