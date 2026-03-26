import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const links = ["About", "Skills", "Projects", "Experience", "Education", "Certifications", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-border/50" style={{ background: "rgba(0,0,0,0.8)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-foreground font-display text-xl font-semibold tracking-wide">
          PS<span className="text-primary">.</span>
        </button>
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-muted-foreground hover:text-foreground transition-colors text-sm">{l}</button>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <a href="https://github.com/Preety17" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/preetypsamal2004/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={16} /></a>
          <a href="mailto:preetyprangyasamal@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail size={16} /></a>
          <button onClick={() => scrollTo("contact")} className="ml-3 bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Hire Me
          </button>
        </div>
        <button className="lg:hidden text-muted-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/50 px-6 pb-4 pt-2" style={{ background: "rgba(0,0,0,0.95)" }}>
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="block w-full text-left py-2.5 text-muted-foreground hover:text-foreground transition-colors text-sm">{l}</button>
          ))}
          <button onClick={() => scrollTo("contact")} className="mt-2 w-full bg-primary text-primary-foreground py-2.5 rounded-full text-sm font-medium">Hire Me</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
