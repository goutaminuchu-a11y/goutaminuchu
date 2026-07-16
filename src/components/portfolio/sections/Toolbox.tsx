import { toolbox } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";
import { Code2, Layout, Server, Brain, Cloud, Database } from "lucide-react";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  "AI / ML": Brain,
  "Cloud & DevOps": Cloud,
  Data: Database,
};

export function Toolbox() {
  return (
    <section id="toolbox" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Toolbox"
            title="What I reach for."
            subtitle="The stack I use daily — chosen for reliability, developer joy, and the ability to ship real products fast."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {toolbox.map((group, i) => {
            const Icon = iconMap[group.group] ?? Code2;
            return (
              <Reveal key={group.group} delay={i * 0.04}>
                <div className="group h-full rounded-3xl glass p-6 transition hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition group-hover:from-primary/40 group-hover:to-secondary/40">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{group.group}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {group.items.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-border/40 bg-white/[0.02] px-2.5 py-1 text-xs text-foreground/90 transition hover:border-primary/40 hover:text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Marquee strip */}
        <div className="mt-10 overflow-hidden rounded-full glass py-3">
          <div className="flex animate-[marquee_28s_linear_infinite] gap-8 whitespace-nowrap">
            {[...toolbox.flatMap((g) => g.items), ...toolbox.flatMap((g) => g.items)].map((t, i) => (
              <span key={i} className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {t} <span className="mx-2 text-primary">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
