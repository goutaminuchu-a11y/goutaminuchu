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
              <div className="flex items-center gap-3 rounded-2xl glass p-5 transition hover:-translate-y-0.5 hover:border-primary/40">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div className="text-sm">{c}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
