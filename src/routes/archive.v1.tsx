import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/archive/v1")({
  component: ArchiveRedirect,
  head: () => ({
    meta: [
      { title: "HealthXHer — First Edition Archive" },
      { name: "description", content: "Archived first-edition site of the HealthXHer hackathon." },
    ],
  }),
});

function ArchiveRedirect() {
  useEffect(() => {
    window.location.replace("/archive/v1/index.html");
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[color:var(--blush)] text-[color:var(--plum)]">
      <div className="text-center px-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--sage)] mb-3">— Archive</p>
        <h1 className="font-display text-4xl">Opening the first-edition site…</h1>
        <p className="mt-3 text-[color:var(--muted-foreground)]">
          If you aren't redirected,{" "}
          <a className="underline" href="/archive/v1/index.html">click here</a>.
        </p>
      </div>
    </div>
  );
}
