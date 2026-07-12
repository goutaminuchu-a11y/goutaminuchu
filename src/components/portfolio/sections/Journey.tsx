import { journey } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";
import { Sparkles } from "lucide-react";

export function Journey() {
  return (
    <section id="journey" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Technical Journey"
            title="From diploma to building AI products."
            subtitle="A year-by-year snapshot of the milestones that shaped my growth as an engineer."
          />
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent md:block" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {journey.map((j, i) => (
              <Reveal key={j.year} delay={i * 0.05}>
                <div className="relative">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-background border border-primary/40 glow-ring">
                    <span className="font-display text-sm font-semibold text-primary">{j.year}</span>
                  </div>
                  <div className="mt-4 rounded-2xl glass p-5 transition hover:-translate-y-1 hover:border-primary/40">
                    <ul className="space-y-2">
                      {j.milestones.map((m) => (
                        <li key={m} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Sparkles className="mt-0.5 h-3 w-3 flex-shrink-0 text-primary" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
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
