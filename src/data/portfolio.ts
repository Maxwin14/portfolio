export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  technologies: string[];
  evidence: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  ownership: string;
  role: string;
};

export type Capability = {
  title: string;
  roles: string[];
  evidence: string[];
};

export const candidate = {
  name: "Maxwin Low Zhen Onn",
  location: "Kuala Lumpur, Malaysia",
  availability: "27 July 2026 - 18 October 2026",
  remote: "Open to remote internships",
  hero: "I build secure software and solve practical problems.",
  introduction:
    "Software Engineering student focused on full-stack development, testing, automation, and dependable technical support.",
  email: "maxwin140@gmail.com",
  phone: "012-9661126",
  githubUrl: "https://github.com/Maxwin14",
  education: {
    degree: "Bachelor of Computer Science (Software Engineering)",
    institution: "Multimedia University, Cyberjaya",
    graduation: "Expected August 2027",
    cgpa: "3.27",
  },
  languages: [
    "Chinese (Native)",
    "English (Fluent)",
    "Malay (Conversational)",
    "Hokkien (Conversational)",
  ],
  workExperience: {
    company: "Grab",
    role: "Driver-Partner",
    period: "2023 - Present",
    summary:
      "Balances university study with customer-facing work that requires communication, independent problem-solving, and safety compliance.",
  },
} as const;

export const projects: Project[] = [
  {
    slug: "bankapp-secure",
    title: "BankApp Secure",
    eyebrow: "Flagship full-stack project",
    summary:
      "A banking simulation with secure authentication, account management, fund transfers, transaction history, and scheduled payments.",
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "React",
      "MySQL",
      "JWT",
      "Maven",
    ],
    evidence: [
      "Uses JWT authentication and BCrypt password hashing.",
      "Applies ownership checks to account, transfer, history, and scheduled-payment actions.",
      "Connects a React dashboard to Spring Boot REST APIs and MySQL persistence.",
    ],
    githubUrl: "https://github.com/Maxwin14/bankapp-secure",
    image: "/projects/bankapp-dashboard.png",
    featured: true,
    ownership: "Personal portfolio project",
    role: "Full-stack developer",
  },
  {
    slug: "ford-malaysia",
    title: "Ford Malaysia Lead Generation Landing Page",
    eyebrow: "Responsive frontend project",
    summary:
      "A Ford Ranger buyer landing page with variant guidance, an instalment estimator, FAQ content, and direct WhatsApp enquiry flows.",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
    evidence: [
      "Provides new and used Ranger enquiry paths.",
      "Includes a client-side monthly instalment estimator.",
      "Uses responsive sections, FAQ content, and direct conversion actions.",
    ],
    liveUrl: "https://estter-ford-malaysia.netlify.app/",
    featured: false,
    ownership: "Personal frontend project",
    role: "Landing page and enquiry flow",
  },
  {
    slug: "campus-security",
    title: "Campus Security & Emergency Management System",
    eyebrow: "Five-person university team project",
    summary:
      "A campus-safety web application designed around Student, Staff, Security Officer, and Security Admin roles.",
    technologies: ["React", "Spring Boot", "MySQL", "Git", "GitHub"],
    evidence: [
      "Coordinated module work and integration within a five-person student team.",
      "Contributed architecture and use-case design for four user roles.",
      "Worked with pull-request review and shared Git version control.",
    ],
    githubUrl:
      "https://github.com/guanxiang9482/Campus-Security-and-Emergency-Management-System-",
    featured: false,
    ownership: "University team project",
    role: "Student module lead",
  },
];

export const capabilities: Capability[] = [
  {
    title: "Software & Web Engineering",
    roles: ["Software Engineer Intern", "Web Developer Intern"],
    evidence: [
      "Java and Spring Boot REST APIs",
      "React and responsive interfaces",
      "MySQL persistence and Git workflows",
    ],
  },
  {
    title: "QA & Software Testing",
    roles: ["QA / Software Testing Intern"],
    evidence: [
      "Authentication and authorization scenarios",
      "Input validation and debugging",
      "Regression-minded feature review",
    ],
  },
  {
    title: "Automation",
    roles: ["Automation Intern"],
    evidence: [
      "Scheduled payment workflows",
      "Repeatable validation scripts",
      "REST API workflow understanding",
    ],
  },
  {
    title: "IT & Technical Support",
    roles: ["IT Support Intern", "System / Technical Support Intern"],
    evidence: [
      "Environment and database setup",
      "Configuration and REST troubleshooting",
      "Customer communication and documentation",
    ],
  },
];
