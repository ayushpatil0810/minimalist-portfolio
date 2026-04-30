import { icons } from "./icons";

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: icons["Python"] },
      { name: "JavaScript", icon: icons["JavaScript"] },
      { name: "TypeScript", icon: icons["TypeScript"] },
      { name: "C / C++", icon: icons["C / C++"] },
      { name: "Dart", icon: icons["Dart"] },
      { name: "SQL", icon: icons["SQL"] },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: icons["React"] },
      { name: "Next.js", icon: icons["Next.js"] },
      { name: "HTML & CSS", icon: icons["HTML & CSS"] },
      { name: "Bootstrap", icon: icons["Bootstrap"] },
      { name: "Tailwind CSS", icon: icons["Tailwind CSS"] },
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
    category: "AI & Data Science",
    skills: [
      { name: "Pandas", icon: icons["Pandas"] },
      { name: "NumPy", icon: icons["NumPy"] },
      { name: "Matplotlib", icon: icons["Matplotlib"] },
      { name: "Seaborn", icon: icons["Seaborn"] },
      { name: "Scikit-learn", icon: icons["Scikit-learn"] },
      { name: "LLMs", icon: icons["LLMs"] },
      { name: "OpenAI SDK", icon: icons["OpenAI SDK"] },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: icons["MongoDB"] },
      { name: "SQLite", icon: icons["SQLite"] },
      { name: "PostgreSQL", icon: icons["PostgreSQL"] },
      { name: "MySQL", icon: icons["MySQL"] },
      { name: "Firebase", icon: icons["Firebase"] },
      { name: "Appwrite", icon: icons["Appwrite"] },
    ],
  },
  {
    category: "Mobile Development",
    skills: [{ name: "Flutter", icon: icons["Flutter"] }],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", icon: icons["Git & GitHub"] },
      { name: "VS Code", icon: icons["VS Code"] },
      { name: "Linux", icon: icons["Linux"] },
      { name: "Jupyter", icon: icons["Jupyter"] },
    ],
  },
];
