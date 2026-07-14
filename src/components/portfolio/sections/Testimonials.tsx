import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Words from teammates & mentors."
            subtitle="A few kind notes from people I've built, learned, and shipped alongside."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <figure
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl glass p-7 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow`}
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${t.gradient ?? "from-primary/20 to-secondary/10"} blur-3xl`}
                />
                <Quote className="h-6 w-6 text-primary/70" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border/40 pt-4">
                  <div className="font-display text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
