import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/site-shell";
import { routeMeta } from "@/lib/content";
import { images } from "@/lib/media";

export const Route = createFileRoute("/blog/pcos-is-more-complicated-than-its-name")({
  head: () =>
    routeMeta(
      "PCOS Is More Complicated Than Its Name — HealthXHer",
      "Why PCOS is being redefined, what its name misses, and why inclusive research matters."
    ),
  component: ArticlePage,
});

const TAGS = ["PCOS", "PMOS", "Metabolic Health", "Hormonal Health", "Inclusive Research", "FemTech"];

function ArticlePage() {
  return (
    <PageShell>
      <article className="site-container page-enter py-12 md:py-20">
        {/* Back link */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-semibold uppercase">
          <ArrowLeft size={14} />
          Go back
        </Link>

        {/* Header */}
        <header className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl uppercase leading-tight md:text-6xl">
              PCOS is more complicated than its name
            </h1>
            <p className="mt-8 text-xs">
              Text · Suzan Gumush &nbsp;&nbsp; Date · 24 September 2026 &nbsp;&nbsp; Read · 4 min
            </p>
          </div>

          <div>
            <p className="leading-7">
              PCOS has long been linked with periods, fertility and the ovaries. But the condition
              is far more complex, and it doesn&apos;t look the same for everyone. In this article,
              we explore why PCOS is being redefined as PMOS, why this variation matters for
              research, and what it takes to ensure new technologies truly reflect the people they
              aim to help.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Hero image */}
        <img
          src={images.poster}
          alt="Women's health and research illustration"
          className="mt-10 aspect-[16/8] w-full object-cover"
        />

        {/* Body: sidebar + article copy */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-12 md:grid-cols-[12rem_1fr]">
          <aside>
            <p className="font-display text-xl font-bold">Suzan Gumush</p>
            <dl className="mt-5 border-t border-border pt-4 text-xs">
              <div className="flex justify-between py-2">
                <dt>Date</dt>
                <dd>24 Sep 2026</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt>Read</dt>
                <dd>4 min</dd>
              </div>
            </dl>
          </aside>

          <div className="article-copy">
            <h2>PCOS is more complicated than its name</h2>
            <p className="eyebrow">Dear reader,</p>
            <p>
              You&apos;ve probably heard PCOS described as a problem with your periods. Or perhaps
              you&apos;ve heard it mentioned alongside acne, unwanted hair growth or fertility
              problems.
            </p>
            <p>
              But PCOS involves much more than any one of these things. It can involve hormonal,
              reproductive and metabolic health, and it doesn&apos;t look the same in everyone. One
              person may experience irregular periods, another may struggle with fertility, while
              someone else may have less obvious symptoms.
            </p>
            <p>
              Because when a condition can look so different from person to person, how do we make
              sure we&apos;re recognising it, understanding it and researching it properly?
            </p>

            <h3>Why did PCOS get a new name?</h3>
            <p>
              Before we get into the research, there&apos;s something interesting happening with the
              name itself. In May 2026, an international agreement proposed polycystic ovary
              metabolic ovarian syndrome (PMOS) as the new name for the condition previously known
              as polycystic ovary syndrome.
            </p>
            <p>
              The old name puts a lot of emphasis on the word “polycystic” and the ovaries. But
              despite the name, having polycystic-looking ovaries is not necessary for a diagnosis.
              Initially PCOS was viewed mainly as an ovarian or gynaecological disorder. However,
              growing research shows it involves broader hormonal and metabolic changes, including
              disturbances in insulin, androgen and ovarian hormone signalling.
            </p>

            <h3>Why doesn&apos;t PCOS look the same for everyone?</h3>
            <p>
              People can have the same diagnosis without having the same experience. While one
              person might struggle primarily with irregular periods and fertility, another may deal
              with hormonal acne, increased hair growth, insulin resistance or changes in
              cholesterol levels.
            </p>
            <p>
              That variety matters for research. Inclusive evidence must recognise the whole person,
              not only the most familiar symptom.
            </p>
          </div>
        </div>
      </article>
    </PageShell>
  );
}