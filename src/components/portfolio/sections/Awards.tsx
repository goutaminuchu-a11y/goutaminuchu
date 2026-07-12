import { awards, hackathons } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "../Reveal";
import { SectionHeading } from "./About";
import { Trophy, Sparkles, Users } from "lucide-react";

export function Awards() {
  return (
    <section id="awards" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements & Competitions"
            title="Wins, podiums, and the lessons in between."
            subtitle="Podium finishes at inter-college competitions and lessons from four hackathons that shaped how I build and collaborate."
          />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {awards.map((a, i) => (
            <StaggerItem key={a.event}>
              <div
                className="group relative h-full overflow-hidden rounded-3xl glass p-6 transition hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="pointer-events-none absolute -right-8 -top-8 text-8xl opacity-20 transition group-hover:scale-110 group-hover:opacity-40">
                  {a.medal}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                  <Trophy className="h-3 w-3" /> {a.place} Place
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold">{a.event}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-[1fr_2fr]">
            <div className="glass-strong rounded-3xl p-8 text-center">
              <Users className="mx-auto h-8 w-8 text-primary" />
              <div className="mt-3 font-display text-5xl font-semibold text-gradient">{hackathons.count}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Hackathons Participated</div>
            </div>
            <div className="glass rounded-3xl p-8">
              <div className="text-[10px] uppercase tracking-[0.2em] text-primary">What I took away</div>
              <h3 className="mt-2 font-display text-xl font-semibold">Growth over trophies.</h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {hackathons.learnings.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
