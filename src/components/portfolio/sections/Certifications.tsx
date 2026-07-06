import { certifications } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "../Reveal";
import { SectionHeading } from "./About";
import { BadgeCheck } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Continuous learning, certified." />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <StaggerItem key={c}>
              <div className="group relative flex items-center gap-3 rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-glow [transform-style:preserve-3d] hover:[transform:perspective(800px)_rotateX(4deg)_rotateY(-4deg)_translateY(-6px)]">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition group-hover:from-primary/40 group-hover:to-secondary/40">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div className="text-sm">{c}</div>
                <div className="pointer-events-none absolute inset-x-8 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
