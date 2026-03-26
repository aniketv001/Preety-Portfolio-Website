import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", link: "https://cplusplus.com/" },
      { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Python", link: "https://python.org" },
      { name: "SQL", link: "https://www.w3schools.com/sql/" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "HTML & CSS", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "Bootstrap", link: "https://getbootstrap.com/" },
      { name: "Spring Boot", link: "https://spring.io/projects/spring-boot" },
      { name: "Node.js", link: "https://nodejs.org" },
      { name: "React", link: "https://react.dev" },
    ],
  },
  {
    title: "Tools / Platforms",
    skills: [
      { name: "Excel", link: "https://www.microsoft.com/en-us/microsoft-365/excel" },
      { name: "Pandas", link: "https://pandas.pydata.org/" },
      { name: "NumPy", link: "https://numpy.org/" },
      { name: "VS Code", link: "https://code.visualstudio.com/" },
      { name: "Jupyter Notebook", link: "https://jupyter.org/" },
      { name: "MERN Stack", link: "https://www.mongodb.com/mern-stack" },
      { name: "WordPress", link: "https://wordpress.org/" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem-Solving", link: "#" },
      { name: "Project Management", link: "#" },
      { name: "Adaptability", link: "#" },
      { name: "Team Management", link: "#" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const skillPillVariants = {
  rest: { scale: 1, boxShadow: "0 0 0px transparent" },
  hover: {
    scale: 1.1,
    boxShadow: "0 0 20px hsl(40 10% 85% / 0.3)",
    transition: { type: "spring" as const, stiffness: 400, damping: 15 },
  },
};

const Skills = () => (
  <section id="skills" className="relative z-10 py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-5xl md:text-6xl text-foreground text-center mb-16"
      >
        Skills & Technologies
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, borderColor: "hsl(40 10% 85% / 0.4)" }}
            className="card-border bg-card p-6 transition-colors duration-300"
          >
            <h3 className="text-foreground font-semibold text-lg mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <motion.a
                  key={skill.name}
                  href={skill.link}
                  target={skill.link === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  variants={skillPillVariants}
                  initial="rest"
                  whileHover="hover"
                  className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-pointer"
                >
                  {skill.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
