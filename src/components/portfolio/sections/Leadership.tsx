import { leadership } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";
import { Crown, Sparkles } from "lucide-react";

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership & Community"
            title="Building people, not just products."
            subtitle="Roles where I've helped run events, coordinate teams, and grow a technical community."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {leadership.map((l) => (
            <Reveal key={l.role}>
              <div className="group h-full rounded-3xl glass p-8 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-secondary/25 text-primary">
                    <Crown className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary">{l.period}</div>
                    <h3 className="font-display text-2xl font-semibold">{l.role}</h3>
                    <div className="text-sm text-muted-foreground">{l.org}</div>
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  {l.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Sparkles className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
