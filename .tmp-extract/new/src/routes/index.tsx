import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageShell, SectionIntro } from "@/components/site-shell";
import { CursorSpotlight } from "@/components/site-motion";
import { faqs, routeMeta, tracks } from "@/lib/content";
import eventImage from "@/assets/gallery-03.JPG.asset.json";
import posterImage from "@/assets/healthxher_poster.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => routeMeta("HealthXHer — Better evidence for women's health", "HealthXHer brings emerging talent and established organisations together to improve women's health evidence and innovation."),
  component: HomePage,
});

function HomePage() {
  const [activeTrack, setActiveTrack] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const active = tracks[activeTrack];
  if (!active) return null;
  return (
    <PageShell>
      <div className="page-enter">
        <CursorSpotlight>
          <div className="site-container">
            <p className="eyebrow hero-stagger">Edition 02 · Sweden · Denmark · France · 2027</p>
            <h1 className="hero-stagger max-w-4xl font-display text-5xl font-bold text-primary sm:text-6xl md:text-8xl">HealthXHer</h1>
            <p className="hero-stagger mt-6 max-w-xl leading-7">An interdisciplinary innovation platform bringing together students, researchers, industry, healthcare, policy and civil society to address systemic gaps in women&apos;s health evidence.</p>
            <div className="hero-stagger mt-10 flex flex-wrap gap-3">
              <Button asChild><Link to="/about">Learn more</Link></Button>
              <Button asChild variant="outline"><Link to="/partners">Become partners</Link></Button>
            </div>
          </div>
        </CursorSpotlight>

        <section className="border-y border-border py-9">
          <div className="site-container grid grid-cols-2 items-center gap-8 text-center font-display text-lg sm:grid-cols-4">
            <span>AstraZeneca</span><span>HealthXHer</span><span>Universities</span><span>Civil society</span>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="site-container grid gap-5 lg:grid-cols-[1.6fr_1fr]">
            <div className="motion-image-frame rounded-xl"><img src={eventImage.url} alt="HealthXHer participants collaborating during Edition 1" className="h-full min-h-80 w-full object-cover grayscale" /></div>
            <div className="grid gap-5">
              <article className="motion-card rounded-xl bg-muted p-8"><p className="eyebrow">Our mission</p><h2 className="font-display text-3xl">Better evidence for better health outcomes.</h2><p className="mt-5 text-sm leading-6 text-muted-foreground">We create spaces where diverse teams can redesign how health knowledge is generated, analysed and translated into decisions.</p><Link to="/about" className="motion-link mt-6 inline-flex items-center gap-2 text-sm font-semibold">Discover our mission <ArrowRight size={15} /></Link></article>
              <article className="motion-card rounded-xl bg-muted p-8"><p className="eyebrow">Edition 2</p><h2 className="font-display text-3xl">A new chapter of collaboration.</h2><p className="mt-5 text-sm leading-6 text-muted-foreground">Join students, researchers, industry and civil society for a focused sprint on the systemic gaps shaping women&apos;s health evidence.</p><Link to="/hackathon" className="motion-link mt-6 inline-flex items-center gap-2 text-sm font-semibold">Explore Edition 2 <ArrowRight size={15} /></Link></article>
            </div>
          </div>
        </section>

        <section className="soft-section py-24 text-center">
          <div className="site-container"><span className="pill">Why HealthXHer exists</span><h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl md:text-6xl">We think systems first, not just symptoms.</h2><p className="mx-auto mt-7 max-w-2xl leading-7 text-muted-foreground">Better health outcomes begin with better evidence. We bring diverse teams together to improve how research is designed, how data is interpreted and how decisions are made.</p><Button asChild className="mt-8"><Link to="/about">Read more</Link></Button></div>
        </section>

        <section className="bg-primary py-20 text-primary-foreground md:py-28">
          <div className="site-container">
            <div className="grid gap-8 md:grid-cols-2 md:items-end"><SectionIntro eyebrow="Tracks" title="Three challenges. One mission." /><p className="max-w-md text-primary-foreground/70">The first edition focused on oncology, autoimmune care and cancer screening. Edition 2 tracks are coming soon.</p></div>
            <div className="mt-14 grid gap-6 lg:grid-cols-[.9fr_1.3fr]">
              <div className="grid gap-2">{tracks.map((track, index) => <button key={track.number} onClick={() => setActiveTrack(index)} className={`rounded-xl border p-6 text-left transition ${activeTrack === index ? "border-primary-foreground bg-primary-foreground text-primary" : "border-primary-foreground/20 hover:border-primary-foreground/50"}`}><span className="font-display text-2xl opacity-60">{track.number}</span><span className="ml-4 font-display text-2xl">{track.title}</span><p className="mt-2 text-sm opacity-70">{track.short}</p></button>)}</div>
              <article className="flex min-h-96 flex-col justify-between rounded-xl bg-accent/65 p-9 md:p-12"><div><span className="font-display text-7xl text-primary-foreground/25">{active.number}</span><h3 className="mt-5 font-display text-4xl">{active.title}</h3></div><p className="my-10 max-w-xl text-lg leading-8 text-primary-foreground/85">{active.body}</p><Link to="/hackathon" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">Read full brief <ArrowRight size={15} /></Link></article>
            </div>
          </div>
        </section>

        <section className="soft-section py-24">
          <div className="site-container"><SectionIntro centered eyebrow="Edition 1 impact" title="What happened in Edition 1" copy="Our first edition showed that when diverse teams are given the right space, they can produce practical insights that resonate across research, industry and policy." /><div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">{[["Teams","24","Interdisciplinary teams formed across students, researchers and industry."],["Mentors","18","Experts from healthcare, policy and industry guided teams."],["Insights","12","Practical recommendations for future research and decisions."]].map(([label,note,copy]) => <article key={label} className="rounded-xl bg-card p-7"><p className="text-xs font-semibold">{label}</p><p className="mt-3 font-display text-5xl">{note}</p><p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div><div className="mt-8 text-center"><Button asChild><Link to="/archive">Read more</Link></Button></div></div>
        </section>

        <section className="py-24">
          <div className="site-container"><SectionIntro centered title="Stories, reflections and updates from the community." copy="A preview of recent thinking, event reflections and community stories from HealthXHer." /><div className="mx-auto mt-12 max-w-xl"><img src={posterImage.url} alt="Women's health research illustration" className="aspect-[16/10] w-full object-cover" /><h3 className="mt-5 font-display text-2xl">PCOS Is More Complicated Than Its Name</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">PCOS has long been linked with periods, fertility and the ovaries. But the condition is far more complex.</p><Button asChild variant="link" className="mt-3 px-0"><Link to="/blog/pcos-is-more-complicated-than-its-name">Read more <ArrowRight /></Link></Button></div></div>
        </section>

        <section id="faq" className="soft-section scroll-mt-24 py-24">
          <div className="site-container"><SectionIntro centered title="Frequently Asked Questions" /><div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">{faqs.map((faq, index) => { const open = openFaq === index; return <article key={faq.q} className="rounded-xl bg-card"><button onClick={() => setOpenFaq(open ? -1 : index)} className="flex w-full items-center gap-5 p-6 text-left font-semibold"><span className="text-accent">{open ? <Minus size={20} /> : <Plus size={20} />}</span><span>{faq.q}</span></button>{open && <p className="px-16 pb-7 text-sm leading-6 text-muted-foreground">{faq.a}</p>}</article>; })}</div></div>
        </section>
        <CtaBand />
      </div>
    </PageShell>
  );
}