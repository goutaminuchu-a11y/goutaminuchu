import { useEffect } from "react";
import { X, Github, ArrowUpRight, Target, Lightbulb, ListChecks, Cpu, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/portfolio";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-background/70 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl glass-strong shadow-elevated"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full glass hover:text-primary transition"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[16/8] overflow-hidden rounded-t-3xl">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="rounded-md bg-primary/15 px-2 py-0.5 text-[11px] text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 font-display text-3xl font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <Block icon={Target} title="Challenge" body={project.challenge} />
              <Block icon={Lightbulb} title="Solution" body={project.solution} />

              <div>
                <Header icon={ListChecks} title="Key Features" />
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 rounded-lg bg-white/[0.03] px-3 py-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Header icon={Cpu} title="Tech Stack" />
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded-lg border border-border/60 bg-white/[0.02] px-2.5 py-1 text-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-ring"
                >
                  <BookOpen className="h-4 w-4" /> Read full case study
                </Link>
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:text-primary transition"
                  >
                    Live demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:text-primary transition"
                >
                  <Github className="h-4 w-4" /> Source
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Header({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string }>; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <div className="text-[10px] uppercase tracking-[0.2em] text-primary">{title}</div>
    </div>
  );
}

function Block({ icon, title, body }: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }) {
  return (
    <div>
      <Header icon={icon} title={title} />
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
