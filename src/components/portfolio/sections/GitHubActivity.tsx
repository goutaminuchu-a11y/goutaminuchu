import { Github, ExternalLink } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";
import { profile } from "@/data/portfolio";

// Extract GitHub username from URL
const username = profile.socials.github.replace(/\/$/, "").split("/").pop() ?? "gautami1407";

export function GitHubActivity() {
  const contribChart = `https://ghchart.rshah.org/6366f1/${username}`;
  const streakStats = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=react&hide_border=true&background=0F172A&stroke=1e293b&ring=6366f1&fire=06b6d4&currStreakLabel=6366f1`;
  const topLangs = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=react&hide_border=true&bg_color=0F172A&title_color=6366f1&text_color=94a3b8&card_width=400`;
  const stats = `https://github-readme-stats.vercel.app/api?username=${username}&theme=react&hide_border=true&bg_color=0F172A&title_color=6366f1&icon_color=06b6d4&text_color=94a3b8&show_icons=true`;

  return (
    <section id="github" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="GitHub Activity"
            title="Consistency, in green."
            subtitle="Live contribution graph, streaks, and language mix — straight from GitHub."
          />
        </Reveal>

        <Reveal>
          <div className="mt-10 rounded-3xl glass p-6 lg:p-8">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                  <Github className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-base font-semibold">@{username}</div>
                  <div className="text-xs text-muted-foreground">Contribution graph — past year</div>
                </div>
              </div>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-medium hover:text-primary"
              >
                Visit profile <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="mt-6 overflow-x-auto rounded-2xl bg-black/30 p-4">
              <img
                src={contribChart}
                alt={`${username} GitHub contributions`}
                width={1200}
                height={140}
                className="min-w-[720px] w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-3xl glass p-4">
              <img src={stats} alt="GitHub stats" width={400} height={195} className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl glass p-4">
              <img src={streakStats} alt="GitHub streaks" width={400} height={195} className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl glass p-4">
              <img src={topLangs} alt="Top languages" width={400} height={195} className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
