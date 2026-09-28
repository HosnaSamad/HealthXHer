import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { PageShell, SectionIntro } from "@/components/site-shell";
import { routeMeta, tracks } from "@/lib/content";
import { images } from "@/lib/media";

export const Route = createFileRoute("/archive")({
  head: () =>
    routeMeta(
      "Edition 1 Archive — HealthXHer",
      "A concise archive of HealthXHer Edition 1: its challenge tracks, people, partners and impact.",
    ),
  component: ArchivePage,
});

const executiveTeam = [
  { name: "Anita Nicoletti", image: images.anita },
  { name: "Hosna Samad", image: images.hosna },
  { name: "Millena Navega", image: images.millena },
  { name: "Beatriz Carvalho", image: images.beatriz },
  { name: "Aayushi Patel", image: images.aayushi },
];

const speakers = [
  { name: "Petra Wedenmark", role: "CV Guide Talk", image: images.petra },
  {
    name: "Per Hillertz",
    role: "AI and its impact on healthcare innovation",
    image: images.per,
  },
  {
    name: "Hanna Carlsson Kota",
    role: "Open Door Policies & Gender Mainstream",
    image: images.hannah,
  },
];

const judges = [
  {
    name: "Hanna Carlsson Kota",
    role: "R&D Procurement Manager",
    image: images.hannah,
  },
  {
    name: "Hyewon Nina Koo",
    role: "Associate Director, Data Science & AI",
    image: images.hyewon,
  },
  {
    name: "Elisabeth Dietze",
    role: "Associate Principal Informatician",
    image: images.elisabeth,
  },
  {
    name: "Camille Riff",
    role: "Medical Affairs Lead",
    image: images.camille,
  },
  {
    name: "Melanie Hendrix",
    role: "Associate Director Clinical Regulatory Writing",
    image: images.melanie,
  },
  {
    name: "Cecilia Borestrom",
    role: "Director, Discovery Sciences",
    image: images.cecilia,
  },
  {
    name: "Michalis Fardis",
    role: "Medical Informatics",
    image: images.michalis,
  },
  {
    name: "Åsa Lothigius",
    role: "Regional Learning & Development Director",
    image: images.asa,
  },
  {
    name: "Margherita Francescatto",
    role: "Senior Scientist",
    image: images.margherita,
  },
  {
    name: "Catherine Bell",
    role: "Associate Director Safety Sciences, CPSS",
    image: images.bell,
  },
  {
    name: "Cassandra Nan",
    role: "Director, CVRM Evidence Strategy",
    image: images.nan,
  },
];

const gallery = [
  { src: images.gallery01, alt: "Edition 1 presentation", layout: "md:col-span-2" },
  { src: images.gallery02, alt: "Edition 1 collaboration", layout: "md:col-span-2" },
  { src: images.gallery03, alt: "Edition 1 team discussion", layout: "" },
  { src: images.gallery04, alt: "Edition 1 participants", layout: "" },
  { src: images.gallery05, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery06, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery07, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery08, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery09, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery10, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery11, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery12, alt: "Edition 1 moment", layout: "md:col-span-2" },
  { src: images.gallery15, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery13, alt: "Edition 1 moment", layout: "md:col-span-2" },
  { src: images.gallery18, alt: "Edition 1 moment", layout: "md:col-span-2" },
  { src: images.gallery16, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery20, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery21, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery27, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery17, alt: "Edition 1 moment", layout: "md:col-span-2" },
  { src: images.gallery19, alt: "Edition 1 moment", layout: "md:col-span-2" },
  { src: images.gallery23, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery24, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery25, alt: "Edition 1 moment", layout: "" },
  { src: images.gallery26, alt: "Edition 1 moment", layout: "" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
}

function GroupTitle({ children }: { children: string }) {
  return (
    <div className="mb-10 flex items-center gap-5">
      <h3 className="shrink-0 text-xs font-semibold uppercase text-primary">
        {children}
      </h3>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  );
}

function ArchivePage() {
  return (
    <PageShell>
      <div className="page-enter">
        <ArchiveHero />
        <TracksSection />
        <PartnersSection />
        <PeopleSection />
        <GallerySection />
      </div>
    </PageShell>
  );
}

function ArchiveHero() {
  return (
    <section className="relative min-h-[34rem] overflow-hidden">
      <img
        src={images.gallery02}
        alt="HealthXHer Edition 1 community"
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-primary/55" />

      <div className="site-container relative flex min-h-[34rem] flex-col justify-center text-primary-foreground">
        <p className="eyebrow text-primary-foreground/70">Archive · Edition 1</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-7xl">
          The first chapter of HealthXHer.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/85">
          A multidisciplinary hackathon that brought students, mentors and
          partners together around practical challenges in women&apos;s health.
        </p>
        <p className="mt-6">
          <a
            className="text-sm font-semibold underline-offset-4 hover:underline"
            href="/archive/v1/index.html"
          >
            Open the original first-edition site
          </a>
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            ["3", "hubs"],
            ["160+", "participants"],
            ["30", "mentors and judges"],
          ].map(([n, label]) => (
            <div
              key={label}
              className="border-t border-primary-foreground/30 pt-4"
            >
              <span className="font-display text-5xl">{n}</span>
              <p className="mt-2 text-sm uppercase tracking-widest text-primary-foreground/70">
                {label}
              </p>
            </div>
          ))}
        </div>

        <ArrowDown className="absolute bottom-10 right-4" />
      </div>
    </section>
  );
}

function TracksSection() {
  const [activeTrack, setActiveTrack] = useState(0);
  const active = tracks[activeTrack];
  if (!active) return null;

  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="site-container">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <SectionIntro
            eyebrow="The challenge"
            title="Three tracks shaped the work."
          />
          <p className="max-w-md text-primary-foreground/70">
            Edition 1 focused attention on evidence and delivery gaps where
            interdisciplinary thinking could unlock more equitable outcomes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[.9fr_1.3fr]">
          <div className="grid gap-2">
            {tracks.map((track, index) => (
              <button
                key={track.number}
                onClick={() => setActiveTrack(index)}
                aria-pressed={activeTrack === index}
                className={`rounded-xl border p-6 text-left transition ${
                  activeTrack === index
                    ? "border-primary-foreground bg-primary-foreground text-primary"
                    : "border-primary-foreground/20 hover:border-primary-foreground/50"
                }`}
              >
                <span className="font-display text-2xl opacity-60">
                  {track.number}
                </span>
                <span className="ml-4 font-display text-2xl">
                  {track.title}
                </span>
                <p className="mt-2 text-sm opacity-70">{track.short}</p>
              </button>
            ))}
          </div>

          <article className="flex min-h-96 flex-col justify-between rounded-xl bg-accent/65 p-9 md:p-12">
            <div>
              <span className="font-display text-7xl text-primary-foreground/25">
                {active.number}
              </span>
              <h3 className="mt-5 font-display text-4xl">{active.title}</h3>
            </div>
            <p className="my-10 max-w-xl text-lg leading-8 text-primary-foreground/85">
              {active.body}
            </p>
            <Link
              to="/hackathon"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
            >
              Read full brief <ArrowRight size={15} />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="site-container py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="eyebrow">Partners</p>
          <h2 className="section-title">Our Industry Partner</h2>
          <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
            AstraZeneca supported the first edition with challenge context,
            mentoring and opportunities for teams to share what they learned.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-[#e6d6e7] p-12">
          <img
            src={images.azLogo}
            alt="AstraZeneca"
            className="mx-auto max-h-24 w-full object-contain"
          />
        </div>
      </div>
    </section>
  );

}

function PeopleSection() {
  return (
    <section className="site-container py-24">
      <SectionIntro
        eyebrow="The people"
        title="Built by a multidisciplinary community."
        copy="Meet the executive team, workshop speakers and judges who brought Edition 1 to life."
      />

      <div className="mt-20">
        <GroupTitle>Executive team</GroupTitle>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {executiveTeam.map((person) => (
            <article key={person.name} className="text-center">
              <div className="motion-image-frame mx-auto aspect-square w-full max-w-44 overflow-hidden rounded-full border-4 border-card bg-secondary shadow-sm">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <h3 className="mt-5 font-display text-lg">{person.name}</h3>
              <p className="mt-1 text-xs uppercase text-muted-foreground">
                Executive team
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <GroupTitle>Speakers</GroupTitle>
        <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((person) => (
            <PersonCard key={person.name} {...person} shape="rounded-full" />
          ))}
        </div>
      </div>

      <div className="mt-24">
        <GroupTitle>Judges</GroupTitle>
        <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {judges.map((person) => (
            <PersonCard key={person.name} {...person} shape="rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="site-container py-24">
      <SectionIntro centered title="Moments from Edition 1" />
      <div className="mt-12 grid auto-rows-[14rem] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {gallery.map((image) => (
          <figure
            key={image.src}
            className={`group relative overflow-hidden rounded-xl bg-muted ${image.layout}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

function PersonCard({
  name,
  role,
  image,
  shape,
}: {
  name: string;
  role: string;
  image: string | null;
  shape: "rounded-full" | "rounded-xl";
}) {
  return (
    <article className="flex items-center gap-5 border-b border-border pb-6">
      {image ? (
        <div
          className={`size-20 shrink-0 overflow-hidden border border-border ${shape}`}
        >
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover grayscale"
          />
        </div>
      ) : (
        <div
          className={`grid size-20 shrink-0 place-items-center bg-secondary font-display text-2xl text-primary ${shape}`}
          aria-hidden="true"
        >
          {initials(name)}
        </div>
      )}
      <div>
        <h3 className="font-display text-xl">{name}</h3>
        <p className="mt-1 text-sm leading-5 text-muted-foreground">{role}</p>
      </div>
    </article>
  );
}