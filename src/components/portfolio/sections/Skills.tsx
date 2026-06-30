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
            subtitle="A mix of languages, frameworks, and platforms I reach for to build production-grade software."
          />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <StaggerItem key={g.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1 hover:border-primary/30">
                <div className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100" style={{
                  background: "radial-gradient(400px 200px at 50% 0%, oklch(0.82 0.16 215 / 0.18), transparent 60%)",
                }} />
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary">{g.title}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-border/60 bg-white/[0.02] px-2.5 py-1 text-xs text-foreground/90"
                    >
                      {s}
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
