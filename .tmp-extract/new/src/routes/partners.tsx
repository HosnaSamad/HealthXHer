import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageShell, SectionIntro } from "@/components/site-shell";
import { routeMeta } from "@/lib/content";
import azLogo from "@/assets/AZ_SPONSORED.png.asset.json";
import eventImage from "@/assets/gallery-08.JPG.asset.json";

export const Route = createFileRoute("/partners")({ head: () => routeMeta("Partner with HealthXHer", "Partner with HealthXHer to support emerging talent and advance equitable women's health innovation."), component: PartnersPage });

function PartnersPage() {
  return <PageShell><div className="page-enter">
    <section className="soft-section py-20 md:py-28"><div className="site-container grid items-center gap-12 md:grid-cols-2"><div><p className="eyebrow">Partners</p><h1 className="font-display text-5xl leading-tight md:text-7xl">Change the evidence system with us.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">We connect ambitious emerging talent with organisations that can turn insight into lasting change across research, healthcare, technology and policy.</p><Button asChild className="mt-9"><a href="mailto:healthxher@gmail.com?subject=HealthXHer%20partnership">Start a conversation</a></Button></div><img src={eventImage.url} alt="HealthXHer partners and participants at Edition 1" className="aspect-square w-full rounded-xl object-cover grayscale" /></div></section>
    <section className="site-container py-24"><SectionIntro centered title="A partnership built around shared outcomes." copy="HealthXHer creates meaningful ways for organisations to contribute expertise, open doors and strengthen the ideas emerging from multidisciplinary teams."/><div className="mt-14 grid gap-5 md:grid-cols-3">{[["Challenge partner","Bring a real evidence gap and help teams understand the system around it."],["Knowledge partner","Contribute specialist perspectives through mentoring, workshops or judging."],["Programme partner","Help widen participation, host key moments or support delivery across Europe."]].map(([title,copy],index) => <article key={title} className="rounded-xl border border-border p-8"><span className="font-display text-4xl text-accent">0{index+1}</span><h2 className="mt-7 font-display text-2xl">{title}</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p><a href="mailto:healthxher@gmail.com?subject=HealthXHer%20partnership" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">Discuss this role <ArrowRight size={15}/></a></article>)}</div></section>
    <section className="soft-section py-24"><div className="site-container grid items-center gap-14 md:grid-cols-2"><div><SectionIntro eyebrow="Edition 1" title="Supported by AstraZeneca" copy="Our first edition connected university talent with industry expertise around practical women's health challenges."/><p className="mt-6 leading-7 text-muted-foreground">Partner involvement gave teams access to challenge context, specialist mentors and a path for their ideas to be heard beyond the event.</p></div><div className="rounded-xl bg-card p-12"><img src={azLogo.url} alt="AstraZeneca" className="mx-auto max-h-28 w-full object-contain" /></div></div></section>
    <CtaBand />
  </div></PageShell>;
}