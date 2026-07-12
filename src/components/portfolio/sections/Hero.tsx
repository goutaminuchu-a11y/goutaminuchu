import profilePic from "@/assets/profile.jpg";
import { Github, Linkedin, Mail, Download, ArrowRight, Code2, Sparkles } from "lucide-react";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { Typewriter } from "../Typewriter";
import { profile, orbitTech } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-center">
        {/* Left */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Available for internships & collaborations
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-gradient">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[11px] text-primary">
              <Sparkles className="h-3 w-3" /> {profile.openTo}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-4 font-display text-2xl sm:text-3xl text-muted-foreground">
              I'm a <Typewriter words={profile.roles} className="font-semibold" />
            </div>
          </Reveal>

          <Reveal delay={0.13}>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs">
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary">Currently building</span>
              <Typewriter words={profile.currentlyBuilding} className="text-foreground/90" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.resumeUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] glow-ring"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold hover:bg-white/[0.07] transition"
              >
                <Code2 className="h-4 w-4" /> View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:border-primary/50 hover:text-primary transition"
              >
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex items-center gap-3">
              {[
                { href: profile.socials.github, icon: Github, label: "GitHub" },
                { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
                { href: profile.socials.leetcode, icon: SiLeetcode, label: "LeetCode" },
                { href: profile.socials.hackerrank, icon: SiHackerrank, label: "HackerRank" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground transition hover:text-primary hover:-translate-y-0.5 hover:glow-ring"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — profile + orbit */}
        <Reveal delay={0.1} className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-secondary/20 to-transparent blur-3xl animate-pulse-glow" />
          <div className="absolute inset-6 rounded-full border border-white/10 animate-orbit">
            {orbitTech.slice(0, 4).map((t, i) => {
              const angle = (i / 4) * Math.PI * 2;
              const r = 50;
              return (
                <span
                  key={t}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 glass-strong rounded-full px-2.5 py-1 text-[10px] font-medium tracking-wide"
                  style={{
                    transform: `translate(${Math.cos(angle) * r}%, ${Math.sin(angle) * r}%) translate(-50%, -50%)`,
                  }}
                >
                  {t}
                </span>
              );
            })}
          </div>
          <div
            className="absolute inset-0 rounded-full border border-white/5 animate-orbit"
            style={{ animationDirection: "reverse", animationDuration: "32s" }}
          >
            {orbitTech.slice(4).map((t, i) => {
              const angle = (i / 4) * Math.PI * 2 + 0.6;
              const r = 50;
              return (
                <span
                  key={t}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-full px-2.5 py-1 text-[10px] font-medium text-primary"
                  style={{
                    transform: `translate(${Math.cos(angle) * r}%, ${Math.sin(angle) * r}%) translate(-50%, -50%)`,
                  }}
                >
                  {t}
                </span>
              );
            })}
          </div>
          <div className="relative h-[68%] w-[68%] rounded-full p-[2px] bg-gradient-to-tr from-primary via-secondary to-primary glow-ring">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <img
                src={profilePic}
                alt={`${profile.name} portrait`}
                width={768}
                height={768}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
