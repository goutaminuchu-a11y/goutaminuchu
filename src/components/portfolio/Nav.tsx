import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
  { id: "leadership", label: "Leadership" },
  { id: "gallery", label: "Gallery" },
  { id: "certifications", label: "Certs" },
  { id: "certificate-gallery", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2 transition-all ${
            scrolled ? "glass-strong shadow-elevated" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display text-sm font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground glow-ring">
              GN
            </span>
            <span className="hidden sm:inline">Gouthami<span className="text-primary">.</span></span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`relative rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                  active === l.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-primary/10" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1.5 text-xs font-semibold text-primary-foreground tracking-wide transition-transform hover:scale-[1.03] glow-ring"
            >
              Let's talk
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden grid h-9 w-9 place-items-center rounded-full glass"
            >
              <span className="block h-0.5 w-4 bg-foreground" />
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass-strong p-3">
            <div className="grid grid-cols-2 gap-1">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
