import { achievements } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";
import { Counter } from "../Counter";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading eyebrow="Achievements" title="By the numbers." />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.04}>
              <div className="group relative overflow-hidden rounded-2xl glass p-6 text-center transition hover:-translate-y-1 hover:border-primary/40">
                <div className="font-display text-4xl font-semibold text-gradient">
                  <Counter to={a.value} />
                  <span className="text-primary">+</span>
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{a.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
