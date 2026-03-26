import { motion } from "framer-motion";
import { ExternalLink, Award, Trophy } from "lucide-react";

const certifications = [
  { title: "OCI Foundations Associate", issuer: "Oracle", date: "Sept 2025", link: "https://drive.google.com/file/d/1KRDPnw2JcPGVvjyBiry7M10uXq3kTJjR/view" },
  { title: "OCI Generative AI Professional", issuer: "Oracle", date: "Sept 2025", link: "https://drive.google.com/file/d/1M-iUdtz2Teqb63ib4-3DLIIr1v1Uk2zt/view" },
  { title: "OCI 2025 Certified AI Foundations Associate", issuer: "Oracle", date: "Aug 2025", link: "https://drive.google.com/file/d/1FRF4DXwfkaZjoP8Ac2X3kQnOpkEAbjQy/view" },
  { title: "Data Structures & Algorithm Using Java", issuer: "Cipher Schools", date: "July 2025", link: "https://drive.google.com/file/d/1I7AU9pAj7ZIhWyff4X33gi_tkS_pmawX/view" },
  { title: "Complete Cloud Computing", issuer: "NPTEL by IIT Kharagpur", date: "April 2025", link: "https://drive.google.com/file/d/1F_aCHNm4y1uKt45ygAniKaTvtoVvdEcs/view" },
];

const achievements = [
  { title: "CTF Challenge — Intra University Tech Fusion 2024", description: "Ranked 4th among 700+ participants in Capture The Flag event under Event Concoction 2024.", link: "#" },
];

const activities = [
  "Member of university singing group; performed at campus events",
  "Active member of AWS Cloud Club; participated in organizing workshops and events",
];

const Certifications = () => (
  <section id="certifications" className="relative z-10 py-24 px-6">
    <div className="max-w-4xl mx-auto space-y-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-border card-tint-hover bg-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-8">
          <Award className="text-primary" size={24} />
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Certifications</h2>
        </div>
        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <motion.a key={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-secondary/50 transition-all group cursor-pointer">
              <div>
                <h3 className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-muted-foreground text-xs">{cert.issuer}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-muted-foreground text-xs">{cert.date}</span>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-border card-tint-hover bg-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="text-primary" size={24} />
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Achievements</h2>
        </div>
        {achievements.map((a) => (
          <div key={a.title} className="p-4 rounded-xl border border-border">
            <h3 className="text-foreground font-semibold text-sm mb-1">{a.title}</h3>
            <p className="text-muted-foreground text-sm">{a.description}</p>
          </div>
        ))}
        <div className="mt-8">
          <h3 className="text-foreground font-semibold text-sm mb-3">Extracurricular Activities</h3>
          <ul className="space-y-2">
            {activities.map((a) => (
              <li key={a} className="text-muted-foreground text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>{a}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Certifications;
