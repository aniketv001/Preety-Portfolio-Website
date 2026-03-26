import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Eye } from "lucide-react";

const contactItems = [
  { icon: <Mail size={22} className="text-primary" />, label: "Email", href: "mailto:preetyprangyasamal@gmail.com", linkText: "preetyprangyasamal@gmail.com" },
  { icon: <Phone size={22} className="text-primary" />, label: "Phone", href: "tel:+919503097608", linkText: "+91-9503097608" },
  { icon: <Linkedin size={22} className="text-primary" />, label: "LinkedIn", href: "https://www.linkedin.com/in/preetypsamal2004/", linkText: "Connect with me →", external: true },
  { icon: <Github size={22} className="text-primary" />, label: "GitHub", href: "https://github.com/Preety17", linkText: "Preety17 →", external: true },
  { icon: <Eye size={22} className="text-primary" />, label: "Resume", href: "https://drive.google.com/file/d/1IRapkB2jRC1DLUnomeFPrtKlkaMr4s03/view?usp=sharing", linkText: "View PDF →", external: true },
];

const Contact = () => (
  <section id="contact" className="relative z-10 py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-5xl md:text-6xl text-foreground text-center mb-16">
        Connect
      </motion.h2>
      <div className="space-y-4">
        {contactItems.map((item, i) => {
          const className = "card-border card-tint-hover bg-card p-5 md:p-6 flex items-center gap-4 cursor-pointer block";
          const content = (
            <>
              <span className="shrink-0">{item.icon}</span>
              <div>
                <p className="text-muted-foreground text-xs">{item.label}</p>
                <p className="text-foreground font-medium text-sm">{item.linkText}</p>
              </div>
            </>
          );
          const motionProps = {
            initial: { opacity: 0, y: 20 } as const,
            whileInView: { opacity: 1, y: 0 } as const,
            viewport: { once: true },
            transition: { delay: i * 0.08 },
          };

          return (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              {...motionProps}
              className={className}
            >
              {content}
            </motion.a>
          );
        })}
      </div>
    </div>
  </section>
);

export default Contact;
