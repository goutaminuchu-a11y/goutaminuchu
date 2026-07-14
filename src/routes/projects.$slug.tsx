import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Github, Target, Route as RouteIcon, Layers, TrendingUp, Sparkles, Clock, User } from "lucide-react";
import { Background } from "@/components/portfolio/Background";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { projects, type Project } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) {
      return {
        meta: [
          { title: "Project not found — Goutami Nuchu" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${p.title} — Case Study · Goutami Nuchu` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.title} — Case Study` },
        { property: "og:description", content: p.tagline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  notFoundComponent: NotFoundBody,
  component: CaseStudyPage,
});

function NotFoundBody() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="mx-auto grid min-h-screen max-w-2xl place-items-center px-4 text-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">404</p>
          <h1 className="mt-3 font-display text-4xl font-semibold">Case study not found</h1>
          <p className="mt-3 text-sm text-muted-foreground">That project doesn't exist — or hasn't been published yet.</p>
          <Link
            to="/"
            hash="projects"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
        </div>
      </div>
    </div>
  );
}

function CaseStudyPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const cs = project.caseStudy;

  return (
    <div className="relative min-h-screen">
      <Background />
      <ScrollProgress />

      <div className="mx-auto max-w-5xl px-4 pb-24 pt-28">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground hover:text-primary transition"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All projects
        </Link>

        {/* Hero */}
        <header className="mt-8">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span key={t} className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] text-primary">
                {t}
              </span>
            ))}
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5">
              <User className="h-3.5 w-3.5 text-primary" /> {cs.role}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5">
              <Clock className="h-3.5 w-3.5 text-primary" /> {cs.timeline}
            </span>
          </div>
        </header>

        {/* Cover */}
        <div className="mt-10 overflow-hidden rounded-3xl glass">
          <div className="relative aspect-[16/8]">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Impact metrics */}
        <section className="mt-12">
          <SectionLabel icon={TrendingUp} label="Measurable Impact" />
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {cs.impact.map((m) => (
              <div key={m.label} className="rounded-3xl glass p-6">
                <div className="font-display text-3xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {m.metric}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section className="mt-12">
          <SectionLabel icon={Target} label="The Problem" />
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/90">{cs.problem}</p>
        </section>

        {/* Approach */}
        <section className="mt-12">
          <SectionLabel icon={RouteIcon} label="Approach" />
          <ol className="mt-6 space-y-4">
            {cs.approach.map((step, i) => (
              <li key={step.title} className="rounded-3xl glass p-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-xs text-primary">0{i + 1}</span>
                  <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Tech stack */}
        <section className="mt-12">
          <SectionLabel icon={Layers} label="Tech Stack" />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {cs.techStack.map((g) => (
              <div key={g.group} className="rounded-3xl glass p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary">{g.group}</div>
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Learnings */}
        <section className="mt-12">
          <SectionLabel icon={Sparkles} label="What I Took Away" />
          <ul className="mt-4 space-y-2">
            {cs.learnings.map((l) => (
              <li key={l} className="flex items-start gap-3 rounded-2xl bg-white/[0.02] p-4 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap gap-3">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:text-primary transition"
            >
              <Github className="h-4 w-4" /> Source code
            </a>
          )}
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-ring"
            >
              Live demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:text-primary transition"
          >
            Discuss this project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Related */}
        <section className="mt-16 border-t border-border/40 pt-10">
          <div className="text-[10px] uppercase tracking-[0.2em] text-primary">More case studies</div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group overflow-hidden rounded-2xl glass transition hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform group-hover:scale-110" />
                  </div>
                  <div className="p-4">
                    <div className="font-display text-sm font-semibold">{p.title}</div>
                    <div className="mt-1 line-clamp-2 text-xs text-muted-foreground">{p.tagline}</div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function SectionLabel({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="text-[10px] uppercase tracking-[0.25em] text-primary">{label}</div>
    </div>
  );
}
