import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: <Github size={20} />, href: "https://github.com/Preety17", label: "GitHub" },
  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/preetypsamal2004/", label: "LinkedIn" },
  { icon: <Mail size={20} />, href: "mailto:preetyprangyasamal@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="relative z-10 py-8 px-6 border-t border-border/50">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
      <div className="flex items-center gap-5">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target={link.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" aria-label={link.label} className="text-muted-foreground hover:text-primary transition-colors duration-200">
            {link.icon}
          </a>
        ))}
      </div>
      <p className="text-muted-foreground text-xs">© 2026 Preety Prangya Samal</p>
    </div>
  </footer>
);

export default Footer;
