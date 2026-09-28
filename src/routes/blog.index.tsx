import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site-shell";
import { routeMeta } from "@/lib/content";
import { images } from "@/lib/media";

export const Route = createFileRoute("/blog/")({
  head: () =>
    routeMeta(
      "HealthXHer Blog",
      "Stories, reflections and updates from the HealthXHer community.",
    ),
  component: BlogPage,
});

const featuredPost = {
  title: "PCOS? PMOS? IT'S MORE COMPLICATED THAN ITS NAME",
  excerpt:
    "PCOS has long been linked with periods, fertility and the ovaries. But the condition is far more complex, and it doesn't look the same for everyone.",
  meta: "Text · Suzan Gumush  ·  4 min",
  href: "/blog/pcos-is-more-complicated-than-its-name",
  image: images.poster,
  imageAlt: "Illustration representing women's health research",
};

function BlogPage() {
  return (
    <PageShell>
      <div className="page-enter">
        <BlogHero />
        <FeaturedPost />
      </div>
    </PageShell>
  );
}

function BlogHero() {
  return (
    <section className="relative min-h-[34rem] overflow-hidden">
      <img
        src={images.gallery06}
        alt="HealthXHer event community"
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-primary/55" />

      <div className="site-container relative flex min-h-[34rem] flex-col justify-center text-primary-foreground">
        <h1 className="max-w-2xl font-display text-5xl leading-tight md:text-7xl">
          Discover the HealthXHer Blog
        </h1>
        <p className="mt-6">Read our latest stories and perspectives.</p>
        <ArrowDown className="absolute bottom-10 right-4" />
      </div>
    </section>
  );
}

function FeaturedPost() {
  return (
    <section className="site-container py-16 md:py-24">
      <article className="max-w-xl">
        <img
          src={featuredPost.image}
          alt={featuredPost.imageAlt}
          className="aspect-[4/3] w-full object-cover"
        />
        <h2 className="mt-6 font-display text-3xl">{featuredPost.title}</h2>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          {featuredPost.excerpt}
        </p>

        <div className="mt-7 flex items-center justify-between border-b border-border pb-8 text-xs">
          <span>{featuredPost.meta}</span>
          <Link
            to={featuredPost.href}
            className="flex items-center gap-2 font-semibold uppercase tracking-widest"
          >
            Read more <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    </section>
  );
}