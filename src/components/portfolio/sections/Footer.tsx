import { profile } from "@/data/portfolio";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { useEffect, useState } from "react";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="relative border-t border-border/60 py-12 mt-12">
        <div className="mx-auto max-w-7xl px-4 grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-sm">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground glow-ring text-xs font-semibold">
                GN
              </span>
              <span className="font-display font-semibold">{profile.name}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Software engineer building at the intersection of AI, cloud, and product. Always open to great problems and great people.
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-primary">Explore</div>
            <nav className="mt-3 grid grid-cols-2 gap-y-2 text-xs text-muted-foreground">
              {["About", "Experience", "Projects", "Skills", "Education", "Certifications", "Achievements", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition">
                  {l}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-primary">Elsewhere</div>
            <div className="mt-3 flex items-center gap-2">
              {[
                { href: profile.socials.github, icon: Github, label: "GitHub" },
                { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
                { href: profile.socials.leetcode, icon: SiLeetcode, label: "LeetCode" },
                { href: profile.socials.hackerrank, icon: SiHackerrank, label: "HackerRank" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full glass text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-muted-foreground">
              Tip: press{" "}
              <kbd className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px]">⌘ K</kbd> to open the command palette.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Handcrafted in Hyderabad.
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground glow-ring transition-all ${
          show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </>
  );
}
