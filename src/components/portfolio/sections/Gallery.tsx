import { useMemo, useState, useEffect } from "react";
import { gallery, type GalleryItem } from "@/data/portfolio";
import { Reveal } from "../Reveal";
import { SectionHeading } from "./About";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Trophy } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Gallery() {
  const categories = useMemo(() => {
    const s = new Set<string>();
    gallery.forEach((g) => s.add(g.category));
    return ["All", ...Array.from(s)];
  }, []);

  const [filter, setFilter] = useState("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i === null ? null : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setOpenIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx, items.length]);

  const current = openIdx !== null ? items[openIdx] : null;

  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery & Journey"
            title="My journey through technology."
            subtitle="A visual timeline of competitions, hackathons, internships, workshops, leadership, and milestones that shaped my growth."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  filter === c
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-ring"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {items.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} onOpen={() => setOpenIdx(i)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-background/80 p-4 backdrop-blur-xl"
            onClick={() => setOpenIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl glass-strong"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br ${current.gradient ?? "from-primary/40 to-secondary/40"}`}>
                {current.image && (
                  <img src={current.image} alt={current.title} className="h-full w-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                {current.achievement && (
                  <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1 text-xs font-semibold">
                    <Trophy className="h-3.5 w-3.5 text-primary" /> {current.achievement}
                  </div>
                )}
                <button
                  onClick={() => setOpenIdx(null)}
                  aria-label="Close"
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass-strong text-foreground hover:text-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                  {current.category}
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{current.title}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {current.date}</span>
                  {current.location && <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {current.location}</span>}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{current.description}</p>
              </div>

              <button
                onClick={() => setOpenIdx((i) => (i === null ? null : (i - 1 + items.length) % items.length))}
                aria-label="Previous"
                className="absolute left-3 top-1/2 hidden -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass-strong text-foreground hover:text-primary sm:grid"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setOpenIdx((i) => (i === null ? null : (i + 1) % items.length))}
                aria-label="Next"
                className="absolute right-3 top-1/2 hidden -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass-strong text-foreground hover:text-primary sm:grid"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryCard({ item, index, onOpen }: { item: GalleryItem; index: number; onOpen: () => void }) {
  // Vary heights for masonry feel
  const heights = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]"];
  const h = heights[index % heights.length];

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.04 }}
      onClick={onOpen}
      className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-3xl glass text-left transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
    >
      <div className={`relative w-full overflow-hidden ${h} bg-gradient-to-br ${item.gradient ?? "from-primary/40 to-secondary/40"}`}>
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full glass-strong px-2.5 py-1 text-[10px] font-medium">
          {item.category}
        </div>
        {item.achievement && (
          <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full glass-strong px-2.5 py-1 text-[10px] font-semibold">
            {item.achievement}
          </div>
        )}
        <div className="absolute inset-x-4 bottom-4">
          <div className="font-display text-base font-semibold leading-tight">{item.title}</div>
          <div className="mt-1 flex items-center gap-2 text-[10px] text-muted-foreground">
            <span>{item.date}</span>
            {item.location && <><span>·</span><span>{item.location}</span></>}
          </div>
        </div>
      </div>
    </motion.button>
  );
}
