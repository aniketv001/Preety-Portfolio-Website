import { motion } from "framer-motion";

const education = [
  { icon: "🎓", degree: "B.Tech CSE", institution: "Lovely Professional University", period: "2023–2027", grade: "CGPA: 6.87" },
  { icon: "🏫", degree: "Intermediate", institution: "Army Public School, Pune", period: "2021–2022", grade: "65%" },
  { icon: "📚", degree: "Matriculation", institution: "Army Public School, Pune", period: "2019–2020", grade: "89%" },
];

const Education = () => (
  <section id="education" className="relative z-10 py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-border bg-card p-8 md:p-10"
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">🎯</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Education</h2>
        </div>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div key={edu.degree} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 group">
              <span className="text-2xl mt-1 shrink-0">{edu.icon}</span>
              <div className="flex-1 min-w-0">
                <h3 className="text-foreground font-semibold text-lg">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm">{edu.institution}</p>
                <p className="text-muted-foreground text-sm">{edu.period}</p>
              </div>
              <span className="text-primary font-semibold text-sm shrink-0 mt-1">{edu.grade}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Education;
