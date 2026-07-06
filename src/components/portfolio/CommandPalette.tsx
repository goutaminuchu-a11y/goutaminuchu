import { useEffect, useMemo, useState } from "react";
import { Search, ArrowRight, User, Briefcase, Sparkles, FolderKanban, GraduationCap, Award, Trophy, Mail, Github, Linkedin, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";

type Item = {
  id: string;
  label: string;
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items: Item[] = useMemo(() => {
    const go = (id: string) => () => {
      setOpen(false);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const openHref = (href: string) => () => {
      setOpen(false);
      window.open(href, "_blank", "noopener");
    };
    return [
      { id: "home", label: "Go to Home", icon: ArrowRight, action: go("home") },
      { id: "about", label: "About", icon: User, action: go("about") },
      { id: "experience", label: "Experience", icon: Briefcase, action: go("experience") },
      { id: "skills", label: "Skills", icon: Sparkles, action: go("skills") },
      { id: "projects", label: "Projects", icon: FolderKanban, action: go("projects") },
      { id: "education", label: "Education", icon: GraduationCap, action: go("education") },
      { id: "certifications", label: "Certifications", icon: Award, action: go("certifications") },
      { id: "achievements", label: "Achievements", icon: Trophy, action: go("achievements") },
      { id: "contact", label: "Contact", icon: Mail, action: go("contact") },
      { id: "resume", label: "View Resume", hint: "PDF", icon: FileText, action: openHref(profile.resumeUrl) },
      { id: "github", label: "GitHub", hint: "@gautami1407", icon: Github, action: openHref(profile.socials.github) },
      { id: "linkedin", label: "LinkedIn", icon: Linkedin, action: openHref(profile.socials.linkedin) },
      { id: "email", label: `Email · ${profile.email}`, icon: Mail, action: openHref(`mailto:${profile.email}`) },
    ];
  }, []);

  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => setActive(0), [q, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-background/70 backdrop-blur-md p-4 pt-[12vh] animate-in fade-in" onClick={() => setOpen(false)}>
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, filtered.length - 1)); }
          if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
          if (e.key === "Enter") { e.preventDefault(); filtered[active]?.action(); }
        }}
        className="w-full max-w-xl overflow-hidden rounded-2xl glass-strong shadow-elevated animate-in zoom-in-95"
      >
        <div className="flex items-center gap-3 border-b border-border/60 px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search sections, links, socials…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
          />
          <kbd className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] text-muted-foreground">ESC</kbd>
        </div>
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {filtered.length === 0 && (
            <div className="p-6 text-center text-sm text-muted-foreground">No results.</div>
          )}
          {filtered.map((i, idx) => (
            <button
              key={i.id + i.label}
              onMouseEnter={() => setActive(idx)}
              onClick={i.action}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
                idx === active ? "bg-primary/15 text-foreground" : "text-muted-foreground hover:bg-white/[0.04]"
              }`}
            >
              <i.icon className="h-4 w-4 text-primary" />
              <span className="flex-1">{i.label}</span>
              {i.hint && <span className="text-[10px] text-muted-foreground">{i.hint}</span>}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-border/60 px-4 py-2 text-[10px] text-muted-foreground">
          <span>↑↓ navigate · ↵ select</span>
          <span>⌘K to toggle</span>
        </div>
      </div>
    </div>
  );
}
