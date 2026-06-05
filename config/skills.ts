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
      { name: "TypeScript", icon: icons["TypeScript"] },
      { name: "JavaScript", icon: icons["JavaScript"] },
      { name: "SQL", icon: icons["SQL"] },
    ],
  },

  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: icons["Node.js"] },
      { name: "Express.js", icon: icons["Express.js"] },
      { name: "FastAPI", icon: icons["FastAPI"] },
      // { name: "Bun", icon: icons["Bun"] },
      // { name: "Flask", icon: icons["Flask"] },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: icons["React"] },
      { name: "Next.js", icon: icons["Next.js"] },
      { name: "Tailwind CSS", icon: icons["Tailwind CSS"] },
      { name: "Shadcn UI", icon: icons["Shadcn"] },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: icons["PostgreSQL"] },
      { name: "MongoDB", icon: icons["MongoDB"] },
      { name: "Redis", icon: icons["Redis"] },
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
      // { name: "OpenAI SDK", icon: icons["OpenAI SDK"] },
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
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "OOP" },
      { name: "DBMS" },
      { name: "Artificial Intelligence" },
      { name: "Machine Learning" },
    ],
  },
];
