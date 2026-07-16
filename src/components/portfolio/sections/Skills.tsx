import { skillGroups } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "../Reveal";
import { SectionHeading } from "./About";

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A toolkit chosen for craft, not for show."
            subtitle="Languages, frameworks, and platforms I reach for to build production-grade software."
          />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <StaggerItem key={g.title}>
              <div className="h-full rounded-2xl glass p-6 transition hover:-translate-y-1 hover:border-primary/30">
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary">{g.title}</div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span
                      key={s.name}
                      className="rounded-lg border border-border/40 bg-white/[0.02] px-2.5 py-1 text-xs text-foreground/90 transition hover:border-primary/40 hover:text-primary"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
