import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Background } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { Hero } from "@/components/portfolio/sections/Hero";
import { About } from "@/components/portfolio/sections/About";
import { Experience } from "@/components/portfolio/sections/Experience";
import { Journey } from "@/components/portfolio/sections/Journey";
import { Skills } from "@/components/portfolio/sections/Skills";
import { Projects } from "@/components/portfolio/sections/Projects";
import { Awards } from "@/components/portfolio/sections/Awards";
import { Leadership } from "@/components/portfolio/sections/Leadership";
import { Gallery } from "@/components/portfolio/sections/Gallery";
import { Education } from "@/components/portfolio/sections/Education";
import { Certifications } from "@/components/portfolio/sections/Certifications";
import { Achievements } from "@/components/portfolio/sections/Achievements";
import { Contact } from "@/components/portfolio/sections/Contact";
import { Footer } from "@/components/portfolio/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goutami Nuchu — Software, AI & Cloud Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Goutami Nuchu — software engineer, AI engineer, and cloud enthusiast. Award-winning student engineer building at the intersection of AI, cloud, and product.",
      },
      { property: "og:title", content: "Goutami Nuchu — Software, AI & Cloud Engineer" },
      {
        property: "og:description",
        content: "Portfolio of Goutami Nuchu — AI, cloud, and full-stack engineering.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Journey />
        <Skills />
        <Projects />
        <Awards />
        <Leadership />
        <Gallery />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
      <Toaster theme="dark" position="bottom-right" richColors closeButton />
    </div>
  );
}
