import { skillGroups } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "../Reveal";
import { SectionHeading } from "./About";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A toolkit chosen for craft, not for show."
            subtitle="Languages, frameworks, and platforms I reach for to build production-grade software — with the years I've spent in each."
          />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <StaggerItem key={g.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1 hover:border-primary/30">
                <div
                  className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(400px 200px at 50% 0%, oklch(0.82 0.16 215 / 0.18), transparent 60%)",
                  }}
                />
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary">{g.title}</div>

                <ul className="mt-5 space-y-3">
                  {g.items.map((s) => (
                    <li key={s.name} className="group/skill">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-foreground/90">{s.name}</span>
                        <span className="text-[10px] text-muted-foreground">
                          {s.years}y · {s.level}%
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
