import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { profile } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";
import { Github, Linkedin, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  subject: z.string().trim().min(3, "Subject is too short").max(120),
  message: z.string().trim().min(10, "Tell me a bit more").max(1500),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function Contact() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [busy, setBusy] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fe: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fe[key]) fe[key] = issue.message;
      }
      setErrors(fe);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    setBusy(true);
    const { name, email, subject, message } = parsed.data;
    const url = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Hi Goutami,\n\n${message}\n\n— ${name} (${email})`
    )}`;
    setTimeout(() => {
      window.location.href = url;
      toast.success("Opening your email client…");
      setBusy(false);
      form.reset();
    }, 300);
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
                <ContactRow icon={Mail} label={profile.email} href={`mailto:${profile.email}`} />
                <ContactRow icon={Linkedin} label="linkedin.com/in/goutami-nuchu" href={profile.socials.linkedin} />
                <ContactRow icon={Github} label="github.com/gautami1407" href={profile.socials.github} />
                <ContactRow icon={SiLeetcode} label="LeetCode profile" href={profile.socials.leetcode} />
                <ContactRow icon={SiHackerrank} label="HackerRank profile" href={profile.socials.hackerrank} />
                <ContactRow icon={MapPin} label={profile.location} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field name="name" label="Name" placeholder="Jane Doe" error={errors.name} />
                <Field name="email" type="email" label="Email" placeholder="jane@company.com" error={errors.email} />
              </div>
              <Field name="subject" label="Subject" placeholder="Let's collaborate on…" error={errors.subject} />
              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me a bit about your project or idea…"
                  className={`mt-2 w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 ${
                    errors.message ? "border-destructive/60 focus:ring-destructive/30" : "border-border focus:border-primary/60 focus:ring-primary/30"
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={busy}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-primary-foreground glow-ring transition hover:scale-[1.01] disabled:opacity-70"
              >
                {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {busy ? "Opening mail…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl glass p-4 hover:text-primary transition">
      <Icon className="h-4 w-4 text-primary" /> <span className="text-sm break-all">{label}</span>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener" className="block">
      {inner}
    </a>
  ) : (
    <div className="text-muted-foreground">{inner}</div>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
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
        placeholder={placeholder}
        className={`mt-2 w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 ${
          error ? "border-destructive/60 focus:ring-destructive/30" : "border-border focus:border-primary/60 focus:ring-primary/30"
        }`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
