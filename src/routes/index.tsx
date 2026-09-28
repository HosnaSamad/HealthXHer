import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageShell, SectionIntro } from "@/components/site-shell";
import { faqs, routeMeta, tracks } from "@/lib/content";
import { images } from "@/lib/media";
import wordmark from "@/assets/wordmark.png";

export const Route = createFileRoute("/")({
  head: () =>
    routeMeta(
      "HealthXHer — Better evidence for women's health",
      "HealthXHer brings emerging talent and established organisations together to improve women's health evidence and innovation.",
    ),
  component: HomePage,
});

function useSpotlight(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, [ref]);
}

const marqueeNames = [
  "Lund University",
  "·",
  "Stockholm University",
  "·",
  "Karolinska Institute",
  "·",
  "Gothenburg University",
  "·",
  "AstraZeneca",
  "·",
  "Sahlgrenska Academy",
  "·",
  "Synapse",
  "·",
];

function HomePage() {
  const heroRef = useRef<HTMLElement | null>(null);
  useSpotlight(heroRef);
  const [activeTrack, setActiveTrack] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const active = tracks[activeTrack];
  if (!active) return null;

 return (
  <PageShell>
    <div className="page-enter">
      <section
        ref={heroRef}
        className="relative overflow-hidden spotlight pb-16 pt-16 md:pb-20 md:pt-24"
      >
        <div className="glow-rose blob absolute -left-40 -top-32 h-[40rem] w-[40rem]" />
        <div
          className="glow-sage blob absolute -bottom-40 -right-40 h-[36rem] w-[36rem]"
          style={{ animationDelay: "-6s" }}
        />
        <div className="grain pointer-events-none absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-current" />
          </div>

          <h1 className="hero-stagger mb-6" aria-label="HealthXHer">
            <img 
              src={wordmark}
              alt="HealthXHer" 
              className="h-20 w-auto object-contain md:h-28" 
            />
          </h1>


          <div className="mt-10 grid items-end gap-10 md:grid-cols-12">
            <p className="max-w-2xl text-xl leading-relaxed text-muted-foreground md:col-span-7 md:text-2xl">
              An interdisciplinary femtech hackathon where{" "}
              <em className="font-medium not-italic text-foreground">solutions outweighs coding</em>{" "}
              — uniting students across Europe to close the gender health gap.
            </p>
            <div className="flex flex-col items-start gap-4 md:col-span-5 md:items-end">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--plum)] px-7 py-4 text-sm uppercase tracking-[0.2em] text-[color:var(--blush)] transition-colors hover:bg-[color:var(--sage)]"
              >
                Learn more
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/partners"
                className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--plum)] px-7 py-4 text-sm uppercase tracking-[0.2em] text-[color:var(--blush)] transition-colors hover:bg-[color:var(--sage)]"
              >
                Become a partner ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

        <section className="overflow-hidden border-y border-[color:var(--plum)]/15 bg-[color:var(--blush)] py-6">
          <div className="marquee-track flex gap-16 whitespace-nowrap font-hero text-2xl text-[color:var(--plum)]">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-16">
                {marqueeNames.map((t, j) => (
                  <span key={`${i}-${j}`} className={t === "·" ? "text-[color:var(--rose)]" : ""}>
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="site-container grid gap-5 lg:grid-cols-[1.6fr_1fr]">
            <div className="motion-image-frame rounded-xl">
              <img
                src={images.gallery13}
                alt="HealthXHer participants collaborating during Edition 1"
                className="h-full min-h-80 w-full object-cover grayscale"
              />
            </div>
            <div className="grid gap-5">
              <article className="motion-card rounded-xl bg-muted p-8">
                <p className="eyebrow">Our mission</p>
                <h2 className="font-display text-3xl">Better evidence for better health outcomes.</h2>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  We create spaces where diverse teams can redesign how health knowledge is generated, analysed and translated into decisions.
                </p>
                <Link to="/about" className="motion-link mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Discover our mission <ArrowRight size={15} />
                </Link>
              </article>
              <article className="motion-card rounded-xl bg-muted p-8">
                <p className="eyebrow">Edition 2</p>
                <h2 className="font-display text-3xl">A new chapter of collaboration.</h2>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  Join students, researchers, industry and civil society for a focused sprint on the systemic gaps shaping women&apos;s health evidence.
                </p>
                <Link to="/hackathon" className="motion-link mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Explore Edition 2 <ArrowRight size={15} />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="soft-section py-24 text-center">
          <div className="site-container">
            <span className="pill">Why HealthXHer exists</span>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl md:text-6xl">
              We think systems first, not just symptoms.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl leading-7 text-muted-foreground">
              Better health outcomes begin with better evidence. We bring diverse teams together to improve how research is designed, how data is interpreted and how decisions are made.
            </p>
            <Button asChild className="mt-8">
              <Link to="/about">Read more</Link>
            </Button>
          </div>
        </section>

        <section className="bg-primary py-20 text-primary-foreground md:py-28">
          <div className="site-container">
            <div className="grid gap-8 md:grid-cols-2 md:items-end">
              <SectionIntro eyebrow="Tracks" title="Three challenges. One mission." />
              <p className="max-w-md text-primary-foreground/70">
                The first edition focused on oncology, autoimmune care and cancer screening. Edition 2 tracks are coming soon.
              </p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-[.9fr_1.3fr]">
              <div className="grid gap-2">
                {tracks.map((track, index) => (
                  <button
                    key={track.number}
                    onClick={() => setActiveTrack(index)}
                    className={`rounded-xl border p-6 text-left transition ${
                      activeTrack === index
                        ? "border-primary-foreground bg-primary-foreground text-primary"
                        : "border-primary-foreground/20 hover:border-primary-foreground/50"
                    }`}
                  >
                    <span className="font-display text-2xl opacity-60">{track.number}</span>
                    <span className="ml-4 font-display text-2xl">{track.title}</span>
                    <p className="mt-2 text-sm opacity-70">{track.short}</p>
                  </button>
                ))}
              </div>
              <article className="flex min-h-96 flex-col justify-between rounded-xl bg-accent/65 p-9 md:p-12">
                <div>
                  <span className="font-display text-7xl text-primary-foreground/25">{active.number}</span>
                  <h3 className="mt-5 font-display text-4xl">{active.title}</h3>
                </div>
                <p className="my-10 max-w-xl text-lg leading-8 text-primary-foreground/85">{active.body}</p>
                <Link to="/hackathon" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
                  Read full brief <ArrowRight size={15} />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="soft-section py-24">
          <div className="site-container">
            <SectionIntro
              centered
              eyebrow="Edition 1 impact"
              title="What happened in Edition 1"
              copy="Our first edition showed that when diverse teams are given the right space, they can produce practical insights that resonate across research, industry and policy."
            />
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
              {[
                ["Teams", "24", "Interdisciplinary teams formed across students, researchers and industry."],
                ["Mentors", "18", "Experts from healthcare, policy and industry guided teams."],
                ["Insights", "12", "Practical recommendations for future research and decisions."],
              ].map(([label, note, copy]) => (
                <article key={label} className="rounded-xl bg-card p-7">
                  <p className="text-xs font-semibold">{label}</p>
                  <p className="mt-3 font-display text-5xl">{note}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <Link to="/archive">Read more</Link>
              </Button>
            </div>
          </div>
        </section>

       <section className="py-24">
  <div className="site-container">
    <SectionIntro
      centered
      title="Stories, reflections and updates from the community."
      copy="A preview of recent thinking, event reflections and community stories from HealthXHer."
    />

    {/* Grid wrapper — two columns on medium screens and up */}
    <div className="mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-2">
      <div>
        <img
          src={images.poster}
          alt="Women's health research illustration"
          className="aspect-[16/10] w-full object-cover"
        />
        <h3 className="mt-5 font-display text-2xl">PCOS Is More Complicated Than Its Name</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          PCOS has long been linked with periods, fertility and the ovaries. But the condition is far more complex.
        </p>
        <Button asChild variant="link" className="mt-3 px-0">
          <Link to="/blog/pcos-is-more-complicated-than-its-name">
            Read more <ArrowRight />
          </Link>
        </Button>
      </div>

      <div>
        <img
          src={images["gallery01"]}
          alt="Women's health research illustration"
          className="aspect-[16/10] w-full object-cover"
        />
        <h3 className="mt-5 font-display text-2xl">Stay tuned!</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Next blog post coming soon!
        </p>
        <Button asChild variant="link" className="mt-3 px-0">
          <Link to="/blog/pcos-is-more-complicated-than-its-name">
            Read more <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>

        <section id="faq" className="soft-section scroll-mt-24 py-24">
          <div className="site-container">
            <SectionIntro centered title="Frequently Asked Questions" />
            <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
              {faqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <article key={faq.q} className="rounded-xl bg-card">
                    <button
                      onClick={() => setOpenFaq(open ? -1 : index)}
                      className="flex w-full items-center gap-5 p-6 text-left font-semibold"
                    >
                      <span className="text-accent">{open ? <Minus size={20} /> : <Plus size={20} />}</span>
                      <span>{faq.q}</span>
                    </button>
                    {open && <p className="px-16 pb-7 text-sm leading-6 text-muted-foreground">{faq.a}</p>}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <CtaBand />
      </div>
    </PageShell>
  );
}
