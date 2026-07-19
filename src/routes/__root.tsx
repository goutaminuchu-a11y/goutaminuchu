import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Goutami Nuchu — Software, AI & Cloud Engineer" },
      {
        name: "description",
        content:
          "Goutami Nuchu — Software Engineer, AI Engineer, and Cloud Computing enthusiast. B.Tech CSBS at VNR VJIET. Full stack developer building AI-powered products, cloud-native apps, and production-grade software.",
      },
      {
        name: "keywords",
        content:
          "Goutami Nuchu, Software Engineer, AI Engineer, Cloud Computing, Full Stack Developer, Python, React, AWS, Machine Learning, VNR VJIET, Hyderabad, Portfolio",
      },
      { name: "author", content: "Goutami Nuchu" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#050816" },
      { property: "og:title", content: "Goutami Nuchu — Software, AI & Cloud Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Goutami Nuchu — Software Engineer, AI Engineer, and Cloud enthusiast building production-grade software.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Goutami Nuchu — Software, AI & Cloud Engineer" },
      {
        name: "twitter:description",
        content: "Software Engineer · AI Engineer · Cloud Computing · Full Stack Developer.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Goutami Nuchu",
          alternateName: "Gouthami Nuchu",
          jobTitle: "Software Engineer, AI Engineer, Cloud Computing Enthusiast",
          email: "mailto:gouthaminurchu@gmail.com",
          telephone: "+91-93914-90703",
          address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "VNR Vignana Jyothi Institute of Engineering and Technology (VNR VJIET)",
          },
          knowsAbout: [
            "Software Engineering",
            "Artificial Intelligence",
            "Machine Learning",
            "Cloud Computing",
            "Full Stack Development",
            "Python",
            "React",
            "AWS",
          ],
          sameAs: [
            "https://github.com/gautami1407",
            "https://in.linkedin.com/in/goutami-nuchu-b780a9285",
            "https://leetcode.com/u/gautami1407/",
            "https://www.hackerrank.com/profile/gouthaminurchu",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
