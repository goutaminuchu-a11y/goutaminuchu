import { profile } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-10 mt-12">
      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 text-sm">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground glow-ring">GN</span>
          <span className="font-display font-semibold">{profile.name}</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          {["About", "Experience", "Projects", "Skills", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {[
            { href: profile.socials.github, icon: Github, label: "GitHub" },
            { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full glass text-muted-foreground hover:text-primary transition"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Made with <span className="text-primary">♥</span> in Hyderabad.
      </div>
    </footer>
  );
}
