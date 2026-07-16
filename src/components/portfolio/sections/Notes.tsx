import { notes } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";
import { BookOpen, Clock, ArrowUpRight } from "lucide-react";

export function Notes() {
  return (
    <section id="notes" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Notes"
            title="Thoughts I keep coming back to."
            subtitle="Short lessons from shipping AI, cloud, and full-stack projects — the stuff I'd tell a younger version of myself."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((n, i) => (
            <Reveal key={n.id} delay={i * 0.04}>
              <article className="group h-full rounded-3xl glass p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    <BookOpen className="h-3 w-3" /> {n.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Clock className="h-3 w-3" /> {n.readTime}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug group-hover:text-primary">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.summary}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4">
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground">{n.date}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                    Read <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
