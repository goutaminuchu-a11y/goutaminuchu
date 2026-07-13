import { X, Download, ExternalLink } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  const url = profile.resumeUrl;
  const hasResume = url && url !== "#";

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-background/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative flex h-[85vh] w-full max-w-4xl flex-col rounded-3xl glass-strong p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-2 pb-3">
          <h3 className="font-display text-lg font-semibold">Resume — {profile.name}</h3>
          <div className="flex items-center gap-2">
            {hasResume && (
              <>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-medium hover:text-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Open
                </a>
                <a
                  href={url}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
                >
                  <Download className="h-3.5 w-3.5" /> Download
                </a>
              </>
            )}
            <button
              onClick={onClose}
              aria-label="Close"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/5 hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden rounded-2xl border border-border/40 bg-black/40">
          {hasResume ? (
            <iframe src={url} title="Resume" className="h-full w-full" />
          ) : (
            <div className="grid h-full w-full place-items-center p-8 text-center">
              <div>
                <p className="font-display text-lg font-semibold">Resume link not set yet</p>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Add your resume URL to <code className="rounded bg-white/5 px-1.5 py-0.5">profile.resumeUrl</code> in{" "}
                  <code className="rounded bg-white/5 px-1.5 py-0.5">src/data/portfolio.ts</code> — a Google Drive share link or public PDF works best.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
