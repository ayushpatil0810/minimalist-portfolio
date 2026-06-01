import { icons } from "./icons";

export type Skill = {
  name: string;
  icon?: string | undefined;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: icons["Python"] },
      { name: "JavaScript", icon: icons["JavaScript"] },
      { name: "TypeScript", icon: icons["TypeScript"] },
      { name: "C++", icon: icons["C++"] },
      { name: "SQL", icon: icons["SQL"] },
    ],
  },

  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: icons["Node.js"] },
      { name: "Bun", icon: icons["Bun"] },
      { name: "Express.js", icon: icons["Express.js"] },
      { name: "FastAPI", icon: icons["FastAPI"] },
      { name: "Flask", icon: icons["Flask"] },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: icons["React"] },
      { name: "HTML", icon: icons["HTML"] },
      { name: "CSS", icon: icons["CSS"] },
      { name: "Tailwind CSS", icon: icons["Tailwind CSS"] },
      { name: "Shadcn UI", icon: icons["Shadcn"] },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: icons["MongoDB"] },
      { name: "SQLite", icon: icons["SQLite"] },
      { name: "PostgreSQL", icon: icons["PostgreSQL"] },
      { name: "MySQL", icon: icons["MySQL"] },
      { name: "Redis", icon: icons["Redis"] },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Next.js", icon: icons["Next.js"] },
      { name: "FastAPI", icon: icons["FastAPI"] },
    ],
  },

  {
    category: "AI & Data Science",
    skills: [
      { name: "NumPy", icon: icons["NumPy"] },
      { name: "Pandas", icon: icons["Pandas"] },
      { name: "Matplotlib", icon: icons["Matplotlib"] },
      { name: "Seaborn", icon: icons["Seaborn"] },
      { name: "Scikit-learn", icon: icons["Scikit-learn"] },
      { name: "OpenAI SDK", icon: icons["OpenAI SDK"] },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Linux", icon: icons["Linux"] },
      { name: "Git", icon: icons["Git"] },
      { name: "GitHub", icon: icons["GitHub"] },
      { name: "Docker", icon: icons["Docker"] },
      { name: "Kubernetes", icon: icons["Kubernetes"] },
      { name: "Postman", icon: icons["Postman"] },
    ],
  },
  {
    category: "Core Concepts",
    skills: [
      { name: "Microservices" },
      { name: "System Design Fundamentals" },
      { name: "Distributed Systems Basics" },
      { name: "Containerization Concepts" },
      { name: "Authentication" },
      { name: "Version Control" },
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "Complexity Analysis" },
      { name: "OOP" },
      { name: "DBMS" },
      { name: "Artificial Intelligence" },
      { name: "Machine Learning" },
    ],
  },
];
