export type AboutData = {
  title: string;
  paragraphs: string[];
  rabbitHoles?: string[];
};

export const aboutData: AboutData = {
  title: "About",
  paragraphs: [
    "I'm Ayush Patil. I enjoy backend engineering because I like thinking about systems more than interfaces. My focus is on building products where engineering decisions actually matter.",
    "Recently, I've been exploring where AI tooling is genuinely useful beyond demos, while continuously refining my approach to scalable architecture and event-driven systems.",
    "I'm currently pursuing a Bachelor of Engineering in Artificial Intelligence and Data Science at Dr. D. Y. Patil Institute of Technology, Pune.",
  ],
  rabbitHoles: [
    "Microservices",
    "System Design",
    "Building Full-Stack Products",
    "Event-driven architecture",
  ],
};
