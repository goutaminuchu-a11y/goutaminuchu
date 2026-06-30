import { useMemo, useState } from "react";
import { projects } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";
import { ArrowUpRight, Github } from "lucide-react";

export function Projects() {
  const allTags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return ["All", ...Array.from(s)];
  }, []);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work."
            subtitle="A few products and experiments — AI, cloud, full-stack, and a bit of AR."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  filter === t
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-ring"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <article className="group relative h-full overflow-hidden rounded-3xl glass transition hover:-translate-y-1 hover:border-primary/40">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-foreground transition"
                    >
                      Live demo <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href={p.github}
                      aria-label="GitHub"
                      className="ml-auto grid h-8 w-8 place-items-center rounded-full glass text-muted-foreground hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
