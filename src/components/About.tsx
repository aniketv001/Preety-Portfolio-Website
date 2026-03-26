import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const skills = [
  { icon: "⚛️", label: "MERN Stack" },
  { icon: "🤖", label: "Machine Learning" },
  { icon: "☁️", label: "Cloud & DevOps" },
  { icon: "📱", label: "Android Development" },
];

const About = () => (
  <section id="about" className="relative z-10 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="card-border bg-card p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center"
      >
        <div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-xl">
            I'm <span className="text-foreground font-bold">Preety Prangya Samal</span>, a <span className="text-foreground font-semibold">Computer Science & Engineering</span> student at <span className="text-foreground font-semibold">Lovely Professional University</span> (Expected 2027) with a <span className="text-foreground font-semibold">CGPA of 6.87</span>. I've completed <span className="text-foreground font-semibold">3 internships</span> spanning <span className="text-foreground font-semibold">Web Development</span>, <span className="text-foreground font-semibold">Android Hybrid App Development</span>, and <span className="text-foreground font-semibold">AI & Cloud computing</span>.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-xl">
            I'm passionate about <span className="text-foreground font-semibold">Machine Learning</span> and full-stack web development (<span className="text-foreground font-semibold">MERN Stack</span>). I also work with <span className="text-foreground font-semibold">Oracle Cloud & AWS</span> infrastructure and <span className="text-foreground font-semibold">Android hybrid app development</span>.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Beyond code — I'm an active <span className="text-foreground font-semibold">AWS Cloud Club</span> member at LPU, a <span className="text-foreground font-semibold">CTF competitor</span> who ranked <span className="text-foreground font-semibold">4th among 700+ participants</span>, and a university performer 🎵
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s.label} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border text-sm text-muted-foreground">
                <span>{s.icon}</span>
                {s.label}
              </span>
            ))}
          </div>
        </div>
        <div className="w-64 h-80 md:w-72 md:h-96 relative overflow-hidden rounded-lg mx-auto md:mx-0">
          <img src={profileImg} alt="Preety Prangya Samal" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
