import { certificationGroups } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "../Reveal";
import { SectionHeading } from "./About";
import { BadgeCheck, Cloud, Code2, Brain, Shield, GraduationCap } from "lucide-react";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Cloud: Cloud,
  Programming: Code2,
  "Artificial Intelligence": Brain,
  Cybersecurity: Shield,
  "Professional Development": GraduationCap,
};

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Continuous learning, categorized."
            subtitle="Certificates organized by domain — from cloud platforms to AI and cybersecurity fundamentals."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificationGroups.map((group) => {
            const Icon = iconMap[group.category] ?? BadgeCheck;
            return (
              <Reveal key={group.category}>
                <div className="group h-full rounded-3xl glass p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition group-hover:from-primary/40 group-hover:to-secondary/40">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{group.category}</h3>
                  </div>
                  <Stagger className="mt-5 space-y-2">
                    {group.items.map((c) => (
                      <StaggerItem key={c}>
                        <div className="flex items-start gap-2 rounded-xl border border-border/40 bg-white/[0.02] px-3 py-2 text-sm transition hover:border-primary/30">
                          <BadgeCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{c}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
