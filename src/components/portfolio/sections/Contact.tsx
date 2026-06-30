import { useState } from "react";
import { profile } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(String(data.get("subject") || "Portfolio inquiry"));
    const body = encodeURIComponent(
      `Hi Gouthami,\n\n${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something."
            subtitle="Have an idea, an internship, or just want to say hi? My inbox is open."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="glass-strong rounded-3xl p-8 h-full">
              <h3 className="font-display text-2xl font-semibold">Reach out</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                I usually respond within a day. For quick questions, email or LinkedIn work best.
              </p>
              <div className="mt-6 space-y-3">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl glass p-4 hover:text-primary transition">
                  <Mail className="h-4 w-4 text-primary" /> <span className="text-sm">{profile.email}</span>
                </a>
                <a href={profile.socials.linkedin} className="flex items-center gap-3 rounded-xl glass p-4 hover:text-primary transition">
                  <Linkedin className="h-4 w-4 text-primary" /> <span className="text-sm">linkedin.com/in/gouthami</span>
                </a>
                <a href={profile.socials.github} className="flex items-center gap-3 rounded-xl glass p-4 hover:text-primary transition">
                  <Github className="h-4 w-4 text-primary" /> <span className="text-sm">github.com/gouthami</span>
                </a>
                <div className="flex items-center gap-3 rounded-xl glass p-4 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> <span className="text-sm">{profile.location}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass rounded-3xl p-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field name="name" label="Name" placeholder="Jane Doe" required />
                <Field name="email" type="email" label="Email" placeholder="jane@company.com" required />
              </div>
              <Field name="subject" label="Subject" placeholder="Let's collaborate on…" required />
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me a bit about your project or idea…"
                  className="mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-primary-foreground glow-ring transition hover:scale-[1.01]"
              >
                <Send className="h-4 w-4" /> {sent ? "Opening mail…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
