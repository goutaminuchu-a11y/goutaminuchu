import { experiences } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Where I've shipped, taught, and learned." />
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent md:left-1/2" />
          <div className="space-y-10">
            {experiences.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.05}>
                <div className={`relative grid md:grid-cols-2 gap-6 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  {/* dot */}
                  <span className="absolute left-4 top-6 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-background border border-primary/40 glow-ring md:left-1/2">
                    <Briefcase className="h-3.5 w-3.5 text-primary" />
                  </span>

                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="text-xs uppercase tracking-widest text-primary">{e.period}</div>
                    <h3 className="mt-1 font-display text-2xl font-semibold">{e.role}</h3>
                    <div className="text-muted-foreground">{e.company}</div>
                  </div>

                  <div className={`pl-12 md:pl-12 ${i % 2 ? "md:pl-0 md:pr-12 md:text-right" : ""}`}>
                    <div className="glass rounded-2xl p-6 hover:border-primary/30 transition">
                      <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
                      <div className={`mt-4 flex flex-wrap gap-1.5 ${i % 2 ? "md:justify-end" : ""}`}>
                        {e.skills.map((s) => (
                          <span key={s} className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] text-primary">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
