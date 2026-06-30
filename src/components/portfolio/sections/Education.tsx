import { education } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Foundations." />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-7 transition hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary">{e.period}</div>
                    <h3 className="mt-1 font-display text-xl font-semibold">{e.degree}</h3>
                    <div className="text-muted-foreground">{e.school}</div>
                    <p className="mt-3 text-sm text-muted-foreground">{e.detail}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
