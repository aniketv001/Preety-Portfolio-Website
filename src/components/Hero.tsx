import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const testimonials = [
  "She is like digital magicians!",
  "She is best",
  "A total game-changer for us!",
  "I can't stop recommending her!",
  "Best decision we ever made!",
  "Outstanding technical skills!",
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 mb-10"
        >
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-muted border border-border" />
            <div className="w-6 h-6 rounded-full bg-muted border border-border" />
            <div className="w-6 h-6 rounded-full bg-muted border border-border" />
          </div>
          <span className="text-sm text-muted-foreground">3 Internships Completed</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-foreground leading-[1.1] mb-8 tracking-tight"
        >
          Crafting Digital Experiences that Inspire & Convert
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-muted-foreground max-w-3xl mx-auto leading-snug"
        >
          Hi, I'm <span className="text-foreground">Preety</span> — I build real-world solutions, not just code, but experiences that truly scale.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 w-full mt-16 mb-8 overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="inline-flex items-center gap-3 mx-3 px-5 py-2.5 rounded-full border border-border bg-card/60 backdrop-blur-sm shrink-0">
              <div className="w-8 h-8 rounded-full bg-muted shrink-0" />
              <span className="text-sm text-muted-foreground">{t}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
