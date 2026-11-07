import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/site-shell";
import { routeMeta } from "@/lib/content";
import { images } from "@/lib/media";

export const Route = createFileRoute("/blog/mind-the-data")({
  head: () =>
    routeMeta(
      "MIND THE DATA: HOW WOMEN'S HEALTH GETS LOST IN THE AVERAGES — HealthXHer",
      "How women's health data can be missing, hidden or mismeasured, and what it means for the algorithms trained on it.",
    ),
  component: ArticlePage,
});

const TAGS = [
  "Data Bias",
  "Inclusive Research",
  "Clinical Trials",
  "FemTech",
  "Women's Health Research",
  "AI in Life Science",
];

const REFERENCES = [
  {
    id: 1,
    text: "Bull JR, et al. Real-world menstrual cycle characteristics of more than 600,000 menstrual cycles. npj Digit Med. 2019;2:83. https://pmc.ncbi.nlm.nih.gov/articles/PMC6710244",
  },
  {
    id: 2,
    text: "Steinberg JR, et al. Analysis of female enrollment and participant sex by burden of disease in US clinical trials between 2000 and 2020. JAMA Netw Open. 2021;4(6):e2113749. https://pmc.ncbi.nlm.nih.gov/articles/PMC8214160",
  },
  {
    id: 3,
    text: "Geller SE, et al. The more things change, the more they stay the same: a study to evaluate compliance with inclusion and assessment of women and minorities in randomized controlled trials. Acad Med. 2018;93(4):630–635. https://pmc.ncbi.nlm.nih.gov/articles/PMC5908758",
  },
  {
    id: 4,
    text: "Lee KK, et al. Sex-specific thresholds of high-sensitivity troponin in patients with suspected acute coronary syndrome. J Am Coll Cardiol. 2019;74:2032–2043. https://eprints.gla.ac.uk/191230",
  },
  {
    id: 5,
    text: "Schmalenberger KM, et al. How to study the menstrual cycle: practical tools and recommendations. Psychoneuroendocrinology. 2021;123:104895. https://pmc.ncbi.nlm.nih.gov/articles/PMC8363181",
  },
  {
    id: 6,
    text: "Larrazabal AJ, et al. Gender imbalance in medical imaging datasets produces biased classifiers for computer-aided diagnosis. PNAS. 2020;117(23):12592–12594. doi:10.1073/pnas.1919012117",
  },
];

function ArticlePage() {
  return (
    <PageShell>
      <article className="site-container page-enter py-12 md:py-20">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase"
        >
          <ArrowLeft size={14} />
          Go back
        </Link>

        <header className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl uppercase leading-tight md:text-6xl">
              MIND THE DATA: HOW WOMEN&apos;S HEALTH GETS LOST IN THE AVERAGES
            </h1>
            <p className="mt-8 text-xs">
              Text · Anita Nicoletti &nbsp;&nbsp; Date · 31 September 2026
              &nbsp;&nbsp; Read · 7 min
            </p>
          </div>

          <div>
            <p className="leading-7">
              Women now make up about half of participants in clinical trials,
              but being in a study is not the same as being in its results. In
              this article, we explore how women&apos;s health data can be
              missing, hidden or mismeasured, why averaging can erase the
              differences we most need to see, and what this means for the
              algorithms trained on that data.
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

        <img
          src={images.poster}
          alt="Women's health and research illustration"
          className="mt-10 aspect-[16/8] w-full object-cover"
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-12 md:grid-cols-[12rem_1fr]">
          <aside>
            <p className="font-display text-xl font-bold">Anita Nicoletti</p>
            <dl className="mt-5 border-t border-border pt-4 text-xs">
              <div className="flex justify-between py-2">
                <dt>Date</dt>
                <dd>31 Sep 2026</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt>Read</dt>
                <dd>7 min</dd>
              </div>
            </dl>
          </aside>

          <div className="article-copy">
            <p className="eyebrow">Dear reader,</p>
            <p>
              You probably learned that the menstrual cycle lasts 28 days.
              It&apos;s in textbooks, apps and health brochures. So here&apos;s
              the surprise: when researchers analysed more than 600,000 real
              cycles, only about 13% were exactly 28 days long [1].
            </p>
            <p>
              The &quot;standard&quot; cycle says less about bodies than about
              how we define what counts as normal, and that is the core of the
              problem with women&apos;s health data. It is not only that there
              is less of it, but also that the way it gets collected, averaged
              and interpreted can hide exactly what we are trying to understand.
            </p>

            <h3>What do we mean by a &quot;data gap&quot;?</h3>
            <p>
              In data science, bias doesn&apos;t necessarily mean that someone
              made a prejudiced choice. It means that the data, or the way we
              summarise it, doesn&apos;t represent the people it will later be
              used on. In women&apos;s health this tends to show up in three
              ways.
            </p>
            <p>
              Sometimes data is <strong>missing</strong>: women weren&apos;t
              included, or sex wasn&apos;t recorded.
            </p>
            <p>
              Sometimes it&apos;s <strong>hidden</strong>: women are in the
              study, but results are pooled, so differences disappear into the
              average.
            </p>
            <p>
              And sometimes it&apos;s <strong>mismeasured</strong>: the
              threshold (a lab cutoff, a &quot;normal&quot; range, a
              &quot;typical&quot; cycle) was built around one group and applied
              to everyone.
            </p>
            <p>
              One practical response to this gap is sex-disaggregated data,
              which simply means reporting results separately for women and men
              instead of as one combined number. Here, &quot;sex&quot; means the
              biological side (chromosomes, hormones, anatomy), which is
              different from gender (social roles and identity), and good
              research records the two separately.
            </p>

            <h3>
              Is including women in a study the same as seeing women
              represented in the results?
            </h3>
            <p>Not quite. A study can include women and still tell us little about them.</p>
            <p>
              Enrollment can look reassuring: across more than 20,000 trials
              (over 5 million participants, between 2000 and 2020), women made
              up about half of the participants [2]. But the headcount is not
              always the right thing to look at, because diseases do not affect
              women and men equally. A fairer question is whether the people in
              a trial reflect the people who carry the disease. In cancer
              trials, for example, women were 43% of participants but carried
              46% of the disease burden (measured as years of healthy life
              lost), and the same shortfall appeared in neurology, immunology
              and nephrology. It goes the other way too, with men
              under-represented most of all in musculoskeletal conditions and
              trauma [2].
            </p>
            <p>
              Recording sex is the step research mostly gets right, since it was
              reported in 99% of those trials [2]. Reporting results by sex is
              the step it often misses. In a separate audit of NIH-funded trials
              that enrolled both women and men, only about a quarter reported at
              least one outcome by sex or included sex as a covariate in the
              analysis, even though the 1993 NIH Revitalization Act requires
              results to be assessed by sex [3]. The data gets collected, but it
              often stays hidden in the pooled average.
            </p>

            <h3>What gets lost when everyone is averaged together?</h3>
            <p>
              Pooling works well when groups respond in the same way. When they
              don&apos;t, the average can describe neither group, because
              effects that go in different directions can partly cancel out and
              a single reference value can fit one group better than the other.
            </p>
            <p>
              Let&apos;s look for example at troponin, a protein released when
              heart muscle is injured. Heart-attack tests were traditionally
              judged against a single threshold for everyone, even though normal
              levels differ between women and men. In a trial of nearly 48,300
              patients (47% women), a high-sensitivity test with sex-specific
              thresholds increased the number of women identified with
              myocardial injury by 42% [4]. For a woman arriving at hospital
              with a suspected heart attack, that can mean her injury being
              recognised rather than missed.
            </p>
            <p>
              Even so, women with injury were still less likely than men to
              undergo revascularisation (a procedure to restore blood flow to
              the heart), so better measurement is necessary but not sufficient
              [4].
            </p>

            <h3>Is variation noise, or is it valuable data?</h3>
            <p>
              Hormonal profile is another context where averaging can hide
              important information. Going back to the 28-day menstrual cycle,
              researchers note that studies haven&apos;t consistently defined or
              measured it, which makes results hard to compare or combine [5].
              Treating cycle phase, hormonal contraception or menopause status as
              noise to average away discards information that could matter. In
              a large dataset from a menstrual tracking app, the follicular
              phase (the period before ovulation) varied from roughly 10 to 30
              days [1].
            </p>
            <p>
              Another limitation these data can carry is that the app users
              aren&apos;t a random sample, so they represent women who track
              their cycle through an app, not women worldwide. More data does
              not imply representative data.
            </p>

            <h3>What happens when this reaches AI?</h3>
            <p>
              The data gap matters even more now that algorithms are trained on
              these datasets. A model can only learn from the examples it is
              trained on, so if some groups are under-represented or poorly
              measured, it will work less well for them once it&apos;s applied
              at scale [6]. In a study of chest X-ray classifiers, models trained
              on datasets with few women performed significantly worse for
              women, and performance improved as the training data became more
              balanced [6]. The model wasn&apos;t &quot;biased&quot; in any
              intentional sense, it simply hadn&apos;t seen enough examples of
              the people it was later asked to diagnose.
            </p>

            <h3>What don&apos;t we know yet?</h3>
            <p>
              The most basic limitation is that you can&apos;t analyse what you
              didn&apos;t record. If sex, cycle phase or menopause status
              aren&apos;t captured as a variable, nobody can check whether a
              biomarker or model works equally well across it, and when results
              are published only as pooled totals, researchers can&apos;t
              re-analyse them later.
            </p>
            <p>
              Splitting data by sex is not enough on its own, though. Smaller
              subgroups have less statistical power, which makes real
              differences harder to detect, and testing many subgroups invites
              false positives. This is why disaggregation works best when it is
              planned in the study design rather than added afterwards.
            </p>
            <p>Some questions are still open:</p>
            <ul>
              <li>
                How do we design studies large enough to detect sex-specific
                effects, rather than treating subgroup analysis as an
                afterthought?
              </li>
              <li>
                How do we audit algorithms for subgroup performance before they
                reach clinics?
              </li>
              <li>Whose data do apps and wearables capture, and whose do they miss?</li>
            </ul>
            <p>
              None of this means research has failed, but it shows there are
              concrete things we can (and must!) improve.
            </p>

            <h3>So, what can we take away?</h3>
            <p>
              Having women in a dataset isn&apos;t enough. Their results need to
              be analysed and reported. How we measure, pool and define
              &quot;normal&quot; can shape who gets diagnosed. And algorithms
              inherit the gaps in their training data, so careful data design
              matters even more.
            </p>
            <p>
              At HealthXHer, this is why we ask not just{" "}
              <em>what does the evidence say?</em> but{" "}
              <em>how was the evidence built?</em>
            </p>

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

            <div className="mt-14 border-t border-border pt-8">
              <h3 className="font-display text-2xl">References</h3>
              <ol className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
                {REFERENCES.map((ref) => (
                  <li key={ref.id} className="grid grid-cols-[1.5rem_1fr] gap-3">
                    <span className="font-semibold text-foreground">{ref.id}.</span>
                    <span className="break-words">{ref.text}</span>
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