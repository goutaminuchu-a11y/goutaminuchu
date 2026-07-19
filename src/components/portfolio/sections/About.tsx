import { Mail, Phone, MapPin, Languages, Sparkles, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Engineer. Builder. Perpetual learner."
            subtitle="A short story about how I got here — and where I'm headed."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="glass rounded-3xl p-8 lg:p-10">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <span className="text-foreground font-medium">Goutami Nuchu</span>, a Computer Science
                undergraduate at <span className="text-foreground font-medium">VNR VJIET</span> pursuing a{" "}
                <span className="text-foreground font-medium">B.Tech in Computer Science & Business Systems</span>{" "}
                after completing a <span className="text-foreground font-medium">Diploma in Cloud Computing & Big Data</span>.
                That foundation gave me an early appreciation for how modern software actually runs at scale — and set
                the tone for everything I've built since.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                My work sits at the intersection of{" "}
                <span className="text-primary">Artificial Intelligence</span>,{" "}
                <span className="text-primary">Cloud Computing</span>, and{" "}
                <span className="text-primary">Full Stack Development</span>. From prototyping LLM-powered workflows at{" "}
                <span className="text-foreground font-medium">Swecha's VishwaM AI</span> to mentoring 100+ students in
                robotics and programming at <span className="text-foreground font-medium">STEMX Education</span>, I've
                learned to translate ideas into shipped software — and complex ideas into clear ones.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                I'm an active hackathon competitor, an award-winning student engineer, and Vice President of the{" "}
                <span className="text-foreground font-medium">Cloud Community Club</span>. I believe great engineers
                are made by <span className="text-foreground font-medium">building relentlessly, learning in public,
                and caring deeply about the human on the other side of the screen</span>.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["AI / ML", "Cloud", "Full Stack", "Python", "React", "AWS", "Open Source", "Leadership"].map((t) => (
                  <span key={t} className="rounded-full glass px-3 py-1 text-xs text-muted-foreground">
                    <Sparkles className="mr-1 inline h-3 w-3 text-primary" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-strong rounded-3xl p-8 space-y-5">
              <InfoRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <InfoRow icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
              <InfoRow icon={MapPin} label="Location" value={profile.location} />
              <InfoRow icon={Languages} label="Languages" value="English · Telugu · Hindi" />

              <div className="rounded-2xl border border-border/60 p-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Availability</div>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  Open to internships & collaborations
                </div>
              </div>

              <a
                href={profile.resumeUrl}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-semibold text-primary-foreground glow-ring transition hover:scale-[1.02]"
              >
                <Download className="h-4 w-4" /> Get Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Content = (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="truncate text-sm">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition hover:text-primary">
      {Content}
    </a>
  ) : (
    Content
  );
}

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
        <span className="h-1 w-1 rounded-full bg-primary" /> {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
