import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projectJewellery from "@/assets/project-jewellery.jpg";
import projectScheduler from "@/assets/project-scheduler.jpg";
import projectFloodguard from "@/assets/project-floodguard.jpg";

const projects = [
  {
    title: "Fine Jewellery E-Commerce",
    description: "Built a luxury jewellery e-commerce platform with elegant UI/UX, enabling seamless product browsing, filtering, and secure checkout. Developed a React frontend with a scalable Node.js backend using REST APIs and MongoDB.",
    image: projectJewellery,
    link: "https://github.com/Preety17/Fine_Jewellery_Ecommerce",
    period: "Sept 2025 – Jan 2025",
    tech: "HTML, CSS, JavaScript, React, Node.js, MongoDB, REST APIs",
  },
  {
    title: "Schedule Reminder Hub",
    description: "Built a responsive personal planner that schedules events and triggers real-time reminders. Developed a custom UI with HTML/CSS/JS and a Spring Boot backend with REST APIs and an H2 in-memory database.",
    image: projectScheduler,
    link: "https://github.com/Preety17/Schedule-Reminder-Hub-Smart-Personal-Planner-Platform",
    period: "June 2025 – Aug 2025",
    tech: "HTML, CSS, JavaScript, Spring Boot, REST APIs, H2",
  },
  {
    title: "FloodGuard AI Model",
    description: "Built an ML-based urban flood risk prediction system using geospatial, climate, and real-time sensor data. Developed data pipelines, engineered features, and created spatio-temporal models for accurate forecasting.",
    image: projectFloodguard,
    link: "https://github.com/Preety17/flood-prediction-model-in-urban-area",
    period: "March 2025 – May 2025",
    tech: "Python, Pandas, Scikit-learn, IoT, Geospatial Data",
  },
];

const Projects = () => (
  <section id="projects" className="relative z-10 py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-5xl md:text-6xl text-foreground text-center mb-16"
      >
        Projects
      </motion.h2>
      <div className="space-y-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-border card-tint-hover bg-card overflow-hidden grid md:grid-cols-2 group"
          >
            <div className="overflow-hidden">
              <img src={p.image} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-display text-3xl md:text-4xl text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-xs mb-3">{p.period}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
              <p className="text-xs text-muted-foreground mb-6">
                <span className="text-foreground/60">Tech:</span> {p.tech}
              </p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium w-fit hover:opacity-90 transition-opacity">
                View Project <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
