import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/site-shell";
import { routeMeta } from "@/lib/content";
import { images } from "@/lib/media";

export const Route = createFileRoute(
  "/blog/pcos-is-more-complicated-than-its-name",
)({
  head: () =>
    routeMeta(
      "PCOS? PMOS? IT'S MORE COMPLICATED THAN ITS NAME — HealthXHer",
      "Why PCOS is being redefined, what its name misses, and why inclusive research matters.",
    ),
  component: ArticlePage,
});

const TAGS = [
  "PCOS",
  "PMOS",
  "Metabolic Health",
  "Hormonal Health",
  "Inclusive Research",
  "FemTech",
];

const REFERENCES = [
  {
    id: 1,
    text: "Teede HJ, Bahri Khomami M, Morman R, et al. Polyendocrine metabolic ovarian syndrome, the new name for polycystic ovary syndrome: a multistep global consensus process. The Lancet. 2026;407:2329–2339. doi:10.1016/S0140-6736(26)00717-8.",
  },
  {
    id: 2,
    text: "Ma YC, Law KS, Wang WS, Chang HM. Phenotypic variations in polycystic ovary syndrome: metabolic risks and emerging biomarkers. Journal of Endocrinology. 2025;267:e250226. doi:10.1530/JOE-25-0226.",
  },
  {
    id: 3,
    text: "Liu J, Wang J, Chen L, Ji Y, Su B, Zhong G, et al. Wearable molecularly imprinted polymer sweat testosterone sensor for noninvasive auxiliary early-stage polycystic ovary syndrome at rest. Biosensors and Bioelectronics. 2026. doi:10.1016/j.bios.2026.118631.",
  },
  {
    id: 4,
    text: "Teede HJ, Gibson M, Laven J, et al. International PCOS guideline clinical research priorities roadmap: a co-designed approach aligned with end-user priorities in a neglected women's health condition. eClinicalMedicine. 2024;78:102927. doi:10.1016/j.eclinm.2024.102927.",
  },
];

function ArticlePage() {
  return (
    <PageShell>
      <article className="site-container page-enter py-12 md:py-20">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase"
        >
          <ArrowLeft size={14} />
          Go back
        </Link>

        {/* Header */}
        <header className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl uppercase leading-tight md:text-6xl">
              PCOS? PMOS? IT'S MORE COMPLICATED THAN ITS NAME
            </h1>
            <p className="mt-8 text-xs">
              Text · Suzan Gumush &nbsp;&nbsp; Date · 24 September 2026
              &nbsp;&nbsp; Read · 4 min
            </p>
          </div>

          <div>
            <p className="leading-7">
              PCOS has long been linked with periods, fertility and the ovaries.
              But the condition is far more complex, and it doesn&apos;t look the
              same for everyone. In this article, we explore why PCOS is being
              redefined as PMOS, why this variation matters for research, and
              what it takes to ensure new technologies truly reflect the people
              they aim to help.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs"
                >
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
            <p className="eyebrow">Dear reader,</p>
            <p>
              You&apos;ve probably heard PCOS described as a problem with your
              periods. Or perhaps you&apos;ve heard it mentioned alongside acne,
              unwanted hair growth, or fertility problems.
            </p>
            <p>
              But PCOS involves much more than any one of these things. It can
              involve hormonal, reproductive and metabolic health, and it
              doesn&apos;t look the same in everyone. One person may experience
              irregular periods, another may struggle with fertility, while
              someone else may have less obvious symptoms.
            </p>
            <p>And that variability matters.</p>
            <p>
              Because when a condition can look so different from person to
              person, how do we make sure we&apos;re recognising it,
              understanding it and researching it properly?
            </p>

            <h3>Why did PCOS get a new name?</h3>
            <p>
              Before we get into the research, there&apos;s something interesting
              happening with the name itself.
            </p>
            <p>
              In May 2026, an international agreement process introduced
              polyendocrine metabolic ovarian syndrome (PMOS) as the new name
              for the condition previously known as polycystic ovary syndrome
              (PCOS). The process involved patients, healthcare professionals,
              researchers and organisations from around the world [1].
            </p>
            <p>So why change the name?</p>
            <p>
              The old name puts a lot of emphasis on the word “polycystic” and
              the ovaries. But despite the name, having polycystic-looking
              ovaries is not necessary for a diagnosis. Initially PCOS was
              viewed mainly as an ovarian or gynaecological disorder. However,
              growing research shows that PCOS involves broader hormonal and
              metabolic changes, including disturbances in insulin, androgen
              and ovarian hormone signalling. The new name is intended to better
              reflect these wider hormonal, metabolic and ovarian features [1].
            </p>
            <p>And perhaps this change in name points to something bigger:</p>
            <p>PCOS has never really been one simple condition to describe.</p>

            <h3>Why doesn&apos;t PCOS look the same for everyone?</h3>
            <p>Here&apos;s something important about PCOS:</p>
            <p>
              People can have the same diagnosis without having the same
              experience.
            </p>
            <p>
              While one person might struggle primarily with irregular periods
              and fertility, another may deal with hormonal acne, increased hair
              growth, insulin resistance or changes in cholesterol levels.
              Whereas a third person could have relatively few noticeable
              symptoms.
            </p>
            <p>
              These different combinations of features can be described as
              phenotypes, essentially meaning the different ways the same
              condition can be present [2].
            </p>
            <p>There is no one-size-fits-all “PCOS patient”.</p>
            <p>And that matters for research.</p>
            <p>
              If people can experience the condition in different ways, then
              both healthcare and scientific studies need to capture that
              variation rather than treating everyone as though they have the
              same biology or symptoms.
            </p>

            <h3>What new tools are researchers developing?</h3>
            <p>
              Researchers are exploring new ways of measuring the biological
              changes linked to PCOS. One recent example is a 2026 study that
              developed a wearable sensor designed to measure testosterone in
              sweat [3].
            </p>
            <p>
              The idea is exciting: could hormone measurements be collected in a
              simpler and less invasive way?
            </p>
            <p>
              As an early proof-of-concept, the study shows the potential of
              this type of technology. But it is not a ready-to-use diagnostic
              test yet. The next step is to see how the sensor performs across
              larger and more diverse groups of people [3].
            </p>
            <p>And that brings us to a much bigger question.</p>

            <h3>New technology is only as good as the evidence behind it</h3>
            <p>
              A new sensor can give us a new way to measure biology. But the
              technology itself isn&apos;t the whole story.
            </p>
            <p>
              We also need to ask: Who was it tested on? Would it work the same
              way for different people? And does it tell us something useful for
              everyday care?
            </p>
            <p>These questions are crucial for conditions as varied as PCOS.</p>
            <p>
              Factors like age, ethnicity, and phenotypes can all be relevant
              when we&apos;re trying to understand PCOS or develop different ways
              of measuring its biological features [2, 4].
            </p>
            <p>
              Better women&apos;s health research isn&apos;t only about developing
              more advanced technologies or collecting more data. It&apos;s also
              about making sure the evidence we build reflects the people we
              hope it will eventually help.
            </p>

            <h3>So, what can we take away?</h3>
            <p>
              PCOS is complex, and it doesn&apos;t look the same for everyone. As
              researchers develop new ways to understand and measure it, we also
              need to make sure the evidence reflects the people it&apos;s built
              for.
            </p>
            <p>At HealthXHer, that&apos;s a conversation we want to keep having.</p>

            {/* HealthXHer note */}
            <div className="mt-14 rounded-xl border border-border bg-muted p-6 text-sm leading-6 text-muted-foreground">
              <p className="font-display text-base font-semibold text-foreground">
                A note from HealthXHer
              </p>
              <p className="mt-3">
                This article is intended for educational and informational
                purposes only and does not constitute medical advice, diagnosis
                or treatment. If you have concerns about your health or
                symptoms, please speak with a qualified healthcare professional.
              </p>
            </div>

            {/* References */}
            <div className="mt-14 border-t border-border pt-8">
              <h3 className="font-display text-2xl">References</h3>
              <ol className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
                {REFERENCES.map((ref) => (
                  <li key={ref.id} className="grid grid-cols-[1.5rem_1fr] gap-3">
                    <span className="font-semibold text-foreground">
                      {ref.id}.
                    </span>
                    <span>{ref.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </article>
    </PageShell>
  );
}