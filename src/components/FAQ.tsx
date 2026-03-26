import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  { q: "What services do you provide?", a: "I specialize in full-stack web development (MERN Stack), AI/ML solutions, Android app development, and cloud infrastructure (AWS, Oracle Cloud)." },
  { q: "How do I start working with you?", a: "It starts with a free discovery call. We'll discuss your goals, vision, and how I can bring your ideas to life." },
  { q: "What technologies do you use?", a: "React, Node.js, MongoDB, Express.js, Spring Boot, Python, Scikit-learn, AWS, Oracle Cloud, Android Studio, and more." },
  { q: "How long does a project take?", a: "Project timelines vary based on complexity. A simple website takes 1-2 weeks, while full-stack applications may take 4-8 weeks." },
  { q: "Do you provide revisions?", a: "Yes! I offer revisions to ensure the final product meets your expectations and requirements perfectly." },
  { q: "What industries do you work with?", a: "I've worked with e-commerce, education, environmental tech, and enterprise solutions across various domains." },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-5xl md:text-6xl text-foreground text-center mb-16">
          FAQ
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="card-border bg-card overflow-hidden rounded-2xl mb-6">
              <div className="h-64 bg-gradient-to-br from-muted to-background flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">I build digital experiences that wow and captivate</p>
            <div className="flex flex-wrap gap-2">
              {["⚛️ MERN Stack", "🤖 Machine Learning", "☁️ Cloud & DevOps", "📱 Android Dev"].map((s) => (
                <span key={s} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-xs text-muted-foreground">{s}</span>
              ))}
            </div>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="border border-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-card/50 transition-colors">
                  <span className="text-sm text-foreground pr-4">{faq.q}</span>
                  {openIdx === i ? <X size={16} className="text-muted-foreground shrink-0" /> : <Plus size={16} className="text-muted-foreground shrink-0" />}
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
