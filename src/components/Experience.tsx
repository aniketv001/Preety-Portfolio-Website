import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Orbosis Global",
    role: "Web & Android App Dev Intern",
    period: "Nov 2025 – Jan 2026",
    link: "https://orbosis.com",
    certificateLink: "https://drive.google.com/file/d/1pjZ3-jgVG-7_zyYEivN8LxaVfj8YE8Iy/view?usp=sharing",
    bullets: [
      "Contributed to development of market-ready tech solutions, including responsive e-commerce websites using WordPress and MERN Stack",
      "Assisted in Android app development using Android Studio to enhance product functionality and user experience",
      "Collaborated with engineering team to deliver optimized, scalable, and user-centric web and mobile features",
    ],
    tech: "HTML, CSS, JavaScript, WordPress, MERN Stack, Android Studio",
  },
  {
    company: "Vanillakart",
    role: "Web & Android App Dev Intern",
    period: "Sept 2025 – Jan 2026",
    link: "https://vanillakart.com",
    certificateLink: "https://drive.google.com/file/d/1VdxsfCfbsWL98GWFNAAXHOC0UNA6zdAa/view?usp=sharing",
    subtitle: "Emvity Brushflicks Creative Hub",
    bullets: [
      "Developed and maintained responsive web applications with optimized UI/UX and improved performance",
      "Implemented scalable frontend and backend features with REST API integration for web and Android hybrid apps",
      "Handled debugging and configuration, generated production-ready APK builds",
    ],
    tech: "HTML, CSS, JavaScript, Node.js, MongoDB, Android Studio, REST APIs",
  },
  {
    company: "Edunet Foundation",
    role: "AI & Cloud Intern",
    period: "June 2024 – July 2024",
    link: "https://edunetfoundation.org",
    certificateLink: "https://drive.google.com/file/d/1vF8mnx6LZo9oIwaBHDQeulaaknR-H0mw/view?usp=sharing",
    subtitle: "AI & Cloud in IBM Cloud",
    bullets: [
      "Built an intelligent no-code chatbot and performed data-driven analysis using Python through IBM SkillBuild",
      "Developed professional-level data visualization and reporting skills by converting raw datasets into insights",
      "Earned multiple IBM certifications, strengthening technical proficiency and problem-solving abilities",
    ],
    tech: "Python, HTML, CSS, IBM Cloud",
  },
];

const Experience = () => (
  <section id="experience" className="relative z-10 py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-5xl md:text-6xl text-foreground text-center mb-16"
      >
        Internships
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-border card-tint-hover bg-card p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1">{exp.company}</h3>
                {exp.subtitle && <p className="text-muted-foreground text-xs mb-1">{exp.subtitle}</p>}
                <span className="text-sm text-muted-foreground">{exp.role}</span>
              </div>
              <div className="flex items-center gap-3 mt-2 md:mt-0">
                <span className="text-sm text-muted-foreground">{exp.period}</span>
                <a href={exp.certificateLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors" title="View Certificate">
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {exp.bullets.map((b, j) => (
                <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground">
              <span className="text-foreground/60">Tech:</span> {exp.tech}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
