import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { PageShell, SectionIntro } from "@/components/site-shell";
import { routeMeta } from "@/lib/content";
import eventImage from "@/assets/gallery-06.JPG.asset.json";
import hosna from "@/assets/Hosna.png";
import anita from "@/assets/Anita.png";
import millena from "@/assets/Millena.png";
import divya from "@/assets/divya.jpeg";
import chloe from "@/assets/chloe.png";
import alina from "@/assets/alina.png";
import clemence from "@/assets/clemence.jpg";

export const Route = createFileRoute("/about")({ head: () => routeMeta("About HealthXHer", "Meet the mission, vision and team building a more equitable future for women's health."), component: AboutPage });

const team = [
  ["Hosna Samad", "Co-founder & Executive", hosna.url], ["Anita Nicoletti", "Co-founder & Executive", anita.url], 
  ["Millena Navega", "Executive", millena.url], ["Divya Bansal", "Business Lead", divya.url], 
  ["Chloé Dao", "Design Lead", chloe.url], ["Alina Tulegenova", "Marketing Lead", alina.url], 
  ["Clémence Leclerq", "Logistics Lead", clemence.url],
];

function AboutPage() {
  return <PageShell><div className="page-enter">
    <section className="site-container py-16 md:py-20"><h1 className="section-title">About HealthXHer</h1><img src={eventImage.url} alt="HealthXHer interdisciplinary team working together" className="mt-10 aspect-[16/6] w-full rounded-xl object-cover grayscale" /><p className="mt-16 max-w-2xl font-display text-2xl leading-snug md:text-3xl">Where future scientists, engineers, policymakers, leaders and entrepreneurs learn to solve women&apos;s health challenges together.</p></section>
    <section className="site-container grid gap-16 py-16 md:grid-cols-[1fr_1.5fr] md:py-24"><SectionIntro title="Our mission" /><div className="space-y-8 leading-7"><p>Women&apos;s health gaps persist because research, data, healthcare, policy and investment systems do not always recognise or respond to relevant sex and gender differences. Patients should not have to compensate for that. The systems that produce the evidence are what need to change.</p><p className="max-w-lg font-display text-2xl font-bold leading-snug text-accent">HealthXHer is a European youth-led advocacy and innovation platform working on exactly that.</p><p>We bring emerging talent and established organisations together across disciplines and countries to develop, communicate and advocate for better approaches to women&apos;s health evidence and innovation.</p><p>Our flagship event is an interdisciplinary hackathon linking students and early-career talent with researchers, healthcare, industry, technology, policy, civil society and investors.</p></div></section>
    <section className="soft-section py-24"><div className="site-container grid items-center gap-14 md:grid-cols-2"><div className="brand-watermark" aria-hidden="true">H</div><div><SectionIntro title="Our vision" /><p className="mt-8 leading-7">A future in which women&apos;s health is systematically represented in research, data, innovation and healthcare decisions, and in which the next generation has the knowledge and confidence to make that future possible.</p><p className="mt-8 font-display text-2xl font-bold leading-snug text-accent">Our aim is for sex- and gender-equitable health evidence to become a recognised standard across European research and innovation.</p></div></div></section>
    <section className="site-container py-24 md:py-32"><SectionIntro centered title="Meet the team" copy="Built by women, for everyone. We come from different disciplines and backgrounds, and we bring that mix to everything we do." /><div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">{team.map(([name, role, image]) => <article key={name} className="text-center"><img src={image} alt={name} className="mx-auto size-28 rounded-full border-2 border-secondary object-cover grayscale" /><div className="-mt-8 rounded-lg border border-border px-4 pb-5 pt-12"><h2 className="font-display text-lg font-bold">{name}</h2><p className="mt-1 text-xs text-muted-foreground">{role}</p><Linkedin className="mx-auto mt-3 size-4" /></div></article>)}</div></section>
  </div></PageShell>;
}