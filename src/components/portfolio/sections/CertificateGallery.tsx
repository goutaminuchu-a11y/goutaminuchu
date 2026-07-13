import { useMemo, useState } from "react";
import { certificateGallery, type CertificateItem } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";
import { Award, ExternalLink, X } from "lucide-react";

const categories = ["All", "Cloud", "Programming", "AI", "Cybersecurity", "Workshop", "Internship", "Other"] as const;

export function CertificateGallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<CertificateItem | null>(null);

  const items = useMemo(
    () => (filter === "All" ? certificateGallery : certificateGallery.filter((c) => c.category === filter)),
    [filter],
  );

  return (
    <section id="certificate-gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Certificate Gallery"
            title="Proof of the work, one card at a time."
            subtitle="A visual index of certifications, internships and workshops — with a short note on what each one taught me."
          />
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                filter === c
                  ? "border-primary/60 bg-primary/15 text-primary"
                  : "border-border/40 bg-white/[0.02] text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((c) => (
            <Reveal key={c.id}>
              <button
                onClick={() => setActive(c)}
                className="group h-full w-full text-left"
              >
                <div className="h-full overflow-hidden rounded-3xl glass transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${c.gradient ?? "from-primary/30 via-secondary/20 to-primary/10"}`}>
                    {c.image ? (
                      <img src={c.image} alt={c.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center">
                        <Award className="h-12 w-12 text-white/70" />
                      </div>
                    )}
                    <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
                      {c.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="line-clamp-2 font-display text-base font-semibold">{c.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {c.issuer} · {c.date}
                    </p>
                    <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{c.description}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {active && (
          <div
            className="fixed inset-0 z-[100] grid place-items-center bg-background/80 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <div
              className="relative w-full max-w-lg rounded-3xl glass-strong p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/5 hover:bg-white/10"
              >
                <X className="h-4 w-4" />
              </button>
              <div className={`aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${active.gradient ?? "from-primary/30 to-secondary/20"}`}>
                {active.image ? (
                  <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="grid h-full w-full place-items-center">
                    <Award className="h-16 w-16 text-white/70" />
                  </div>
                )}
              </div>
              <div className="mt-5">
                <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary">
                  {active.category}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold">{active.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {active.issuer} · {active.date}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.description}</p>
                {active.credentialUrl && (
                  <a
                    href={active.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-xs font-semibold text-primary-foreground"
                  >
                    View credential <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
