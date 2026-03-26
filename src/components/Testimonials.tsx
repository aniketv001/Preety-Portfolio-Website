import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Testimonials = () => (
  <section id="testimonials" className="relative z-10 py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-5xl md:text-6xl text-foreground text-center mb-16">
        Recommendation
      </motion.h2>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-border card-tint-hover bg-card p-8 md:p-10">
        <p className="text-foreground text-lg md:text-xl italic leading-relaxed mb-6">
          "Strongly recommended for Android App Dev, Web Development (WordPress & MERN Stack)"
        </p>
        <p className="text-foreground font-semibold mb-4">— Ms. Farheen Sayed, Director, Vanillakart</p>
        <a href="https://drive.google.com/file/d/1s76GCCqXEG-MfYt1HHsizbxmodq2YB-1/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
          View Letter of Recommendation <ExternalLink size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
