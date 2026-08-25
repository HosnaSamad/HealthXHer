import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import posterImg from "@/assets/team/healthxher_poster.png";
import azImg from "@/assets/team/AZ_SPONSORED.png";
import hosna from "@/assets/team/Hosna.png";
import millena from "@/assets/team/Millena.png";
import anita from "@/assets/team/Anita.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "HealthXHer 2027 — Femtech Hackathon" },
      {
        name: "description",
        content:
          "HealthXHer is an interdisciplinary femtech hackathon closing the gender health gap.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

/* ---------- helpers ---------- */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

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

/* ---------- data ---------- */
const tracks = [
  {
    n: "01",
    title: "Oncology Safety",
    short: "Sex-specific adverse-event detection in cancer care.",
    body:
      "Women face a 34% higher risk of adverse events in oncology treatment. Design tools that detect, monitor and manage these sex-specific toxicities.",
    color: "#D289AD",
  },
  {
    n: "02",
    title: "Cancer Screening",
    short: "Equitable, personalised early detection for women.",
    body:
      "One million women die yearly from breast, endometrial and ovarian cancer — most preventable with early screening. Remove barriers and personalise outreach.",
    color: "#517664",
  },
  {
    n: "03",
    title: "Autoimmune Care",
    short: "Streamlining diagnosis for the 80% of patients who are women.",
    body:
      "An average 4-year diagnostic delay. Build scalable, equity-focused concepts that improve recognition, triage and follow-up across specialties.",
    color: "#23022E",
  },
];


const timeline = [
  { phase: "Phase 01", date: "19 Jan", title: "Applications open" },
  
];


const team = [
  {
    name: "Anita Nicoletti",
    img: anita,
    url: "https://www.linkedin.com/in/anita-nicoletti-1078b3200/",
  },
  {
    name: "Hosna Samad",
    img: hosna,
    url: "https://www.linkedin.com/in/hosna-samad/",
  },
  {
    name: "Millena Navega",
    img: millena,
    url: "https://www.linkedin.com/in/millena-navega/",
  },
];

const faqs = [
  { q: "Why should I join?", a: "Collaborate with diverse talent, gain hands-on experience on real women's health challenges, and showcase your work to AstraZeneca leaders and experts." },
  { q: "Team size", a: "Teams of exactly 4 participants. We require multidisciplinary teams to ensure robust solutions across the tracks." },
  { q: "How are teams formed?", a: "First-come, first-served per university. Register individually; we'll match solo participants on Slack after kick-off based on skills and interests." },
  { q: "In-person commitment", a: "More to follow." },
  { q: "Final deliverable", a: "A working prototype, design document, or comprehensive concept that addresses your chosen challenge. Concept-stage solutions are welcome." },
  { q: "Intellectual property", a: "More to follow." },
];

/* ---------- page ---------- */
function Home() {
  useReveal();
  const heroRef = useRef<HTMLElement | null>(null);
  useSpotlight(heroRef);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTrack, setActiveTrack] = useState(0);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Nav />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative spotlight pt-32 pb-28 md:pt-40 md:pb-40 overflow-hidden"
      >
        <div className="absolute -top-32 -left-40 w-[40rem] h-[40rem] glow-rose blob" />
        <div className="absolute -bottom-40 -right-40 w-[36rem] h-[36rem] glow-sage blob" style={{ animationDelay: "-6s" }} />
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[color:var(--muted-foreground)] mb-8 reveal">
            <span className="w-8 h-px bg-current" />
            Edition 02 · Sweden · Denmark · France · 2027
          </div>

          <h1 className="reveal text-[clamp(3rem,9vw,9rem)] leading-[0.92] font-display tracking-tighter">
            <span className="gradient-text">Health</span>
            <span className="italic font-light text-[color:var(--sage)]">×</span>
            <span className="gradient-text">Her.</span>
          </h1>

          <div className="mt-10 grid md:grid-cols-12 gap-10 items-end reveal">
            <p className="md:col-span-7 text-xl md:text-2xl text-[color:var(--muted-foreground)] max-w-2xl leading-relaxed">
              An interdisciplinary femtech hackathon where{" "}
              <em className="text-[color:var(--foreground)] not-italic font-medium">creativity outweighs coding</em> — uniting students across Sweden to close the gender health gap.
            </p>
            <div className="md:col-span-5 flex flex-col items-start md:items-end gap-4">
              <a
                href="#register"
                className="group inline-flex items-center gap-3 bg-[color:var(--plum)] text-[color:var(--blush)] px-7 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-[color:var(--sage)] transition-colors"
              >
                Express interest to join the second edition
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <Link to="/archive/v1" className="text-sm text-[color:var(--muted-foreground)] ulink">
                See the first-edition site ↗
              </Link>
            </div>
          </div>
        </div>

        {/* floating numbers */}
        <div className="relative max-w-7xl mx-auto px-6 mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
          {[
            ["03", "Challenge tracks"],
            ["06", "Weeks of innovation"],
            ["6", "Host cities"],
            ["3", "Countries"],
            ["01", "Grand finale"],
          ].map(([n, l]) => (
            <div key={l} className="border-t border-[color:var(--plum)]/20 pt-4">
              <div className="font-display text-5xl text-[color:var(--plum)]">{n}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted-foreground)] mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-[color:var(--plum)]/15 py-6 overflow-hidden bg-[color:var(--blush)]">
        <div className="marquee-track flex gap-16 whitespace-nowrap text-[color:var(--plum)] font-display text-2xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              {["Femtech", "·", "Interdisciplinary", "·", "AI for health", "·", "Equity by design", "·", "Sweden 2027", "·", "Denmark 2027", "·", "France 2027", "·"].map((t, j) => (
                <span key={j} className={t === "·" ? "text-[color:var(--rose)]" : ""}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section id="about" className="py-28 md:py-40 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--sage)] mb-4">— Mission</p>
            <h2 className="text-4xl md:text-5xl font-display leading-tight">
              Designing a more <em className="text-[color:var(--rose)]">equitable</em> future for women's health.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-[color:var(--muted-foreground)] leading-relaxed reveal">
            <p>
              HealthXHer brings students from life sciences, healthcare, economics, policy, data science and AI into a single room — and a single mission.
            </p>
            <p>
              We connect Swedish universities with AstraZeneca to address the gender health gap in clinical research and build solutions for the challenges women uniquely face in healthcare.
            </p>
            <p>
              The result: mentorship, networks, and real prototypes that contribute to a more equitable healthcare future.
            </p>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="tracks" className="py-28 md:py-36 bg-[color:var(--plum)] text-[color:var(--blush)] relative overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[34rem] h-[34rem] glow-rose blob opacity-60" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16 reveal">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--rose)] mb-3">— Tracks</p>
              <h2 className="text-4xl md:text-6xl font-display">Three challenges.<br />One mission.</h2>
            </div>
            <p className="max-w-md text-[color:var(--blush)]/70">
              First edition focused on oncology, autoimmune care and cancer screening. Stay tuned for the Second edition's tracks, coming soon!
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 flex flex-col gap-2">
              {tracks.map((t, i) => (
                <button
                  key={t.n}
                  onMouseEnter={() => setActiveTrack(i)}
                  onClick={() => setActiveTrack(i)}
                  className={`text-left px-6 py-6 rounded-2xl border transition-all reveal ${
                    activeTrack === i
                      ? "bg-[color:var(--blush)] text-[color:var(--plum)] border-transparent"
                      : "border-[color:var(--blush)]/15 hover:border-[color:var(--rose)]/50"
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-2xl opacity-60">{t.n}</span>
                    <span className="font-display text-2xl md:text-3xl">{t.title}</span>
                  </div>
                  <p className={`mt-2 text-sm ${activeTrack === i ? "text-[color:var(--plum)]/70" : "text-[color:var(--blush)]/60"}`}>{t.short}</p>
                </button>
              ))}
            </div>

            <div className="md:col-span-7 reveal">
              <div className="relative h-full min-h-[28rem] rounded-3xl p-10 overflow-hidden" style={{ background: `linear-gradient(160deg, ${tracks[activeTrack].color} 0%, #23022E 90%)` }}>
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl blob" />
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <div className="font-display text-7xl md:text-8xl text-white/15">{tracks[activeTrack].n}</div>
                    <h3 className="mt-4 text-3xl md:text-4xl font-display text-white">{tracks[activeTrack].title}</h3>
                  </div>
                  <p className="text-white/85 text-lg max-w-xl leading-relaxed">{tracks[activeTrack].body}</p>
                  <a
                    href="https://drive.google.com/file/d/151Pgqarl8WdRgvL0fUqm2VB8mjPF78Cl/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="self-start inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white ulink"
                  >
                    Read full brief →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="schedule" className="py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--sage)] mb-3">— Schedule</p>
            <h2 className="text-4xl md:text-6xl font-display max-w-2xl"> Stay tuned for the full schedule!</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[color:var(--plum)]/15" />
            <ol className="space-y-12 md:space-y-20">
              {timeline.map((t, i) => (
                <li key={t.phase} className={`relative md:grid md:grid-cols-2 md:gap-12 reveal ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                    <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--rose)] mb-2">{t.phase}</div>
                    <div className="font-display text-3xl md:text-4xl text-[color:var(--plum)]">{t.date}</div>
                    <div className="mt-2 text-[color:var(--muted-foreground)]">{t.title}</div>
                  </div>
                  <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[color:var(--plum)] ring-4 ring-[color:var(--background)]" />
                  <div />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PRIZES */}
      <section id="prizes" className="py-28 md:py-36 bg-[color:var(--blush)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--sage)] mb-3">— Prizes & perks</p>
            <h2 className="text-4xl md:text-6xl font-display max-w-3xl">Recognition built for early talent. Have a look at last year&apos;s prizes.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { p: "01 · Grand winner", color: "var(--plum)", fg: "var(--blush)", items: ["Pitch to a relevant AZ department", "Career roadmap with HR leadership", "R&D site tour", "Spotify recognition", "Feature on AZ digital platforms", "1h mentoring session"] },
              { p: "02 · Runner-up", color: "var(--rose)", fg: "var(--plum)", items: ["Spotify podcast recognition", "Feature on AZ digital platforms", "1h mentoring session", "AZ Gothenburg site tour"] },
              { p: "03 · Third place", color: "var(--sage)", fg: "var(--blush)", items: ["Feature on AZ digital platforms", "1h mentoring session", "AZ Gothenburg site tour"] },
            ].map((pr) => (
              <div key={pr.p} className="reveal rounded-3xl p-8 track-card" style={{ background: pr.color, color: pr.fg }}>
                <div className="text-xs uppercase tracking-[0.25em] opacity-70 mb-6">{pr.p}</div>
                <ul className="space-y-3 text-[15px]">
                  {pr.items.map((it) => <li key={it} className="flex gap-3"><span className="opacity-50">—</span>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 reveal">
            {[
              ["Certification", "Official AZ certificate"],
              ["Expert feedback", "From industry leaders"],
              ["Networking", "Cross-university peers"],
              ["Workshops", "Hands-on with experts"],
              ["All-inclusive", "Travel & catering covered"],
            ].map(([h, s]) => (
              <div key={h} className="glass rounded-2xl p-5 track-card">
                <div className="font-display text-lg text-[color:var(--plum)]">{h}</div>
                <div className="text-sm text-[color:var(--muted-foreground)] mt-1">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--sage)] mb-3">— The team</p>
            <h2 className="text-4xl md:text-6xl font-display">Built by women, for everyone.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {team.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="reveal group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[color:var(--muted)]">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--plum)]/70 via-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-[color:var(--blush)]">
                    <div className="font-display text-lg">{p.name}</div>
                    <div className="text-xs uppercase tracking-[0.2em] opacity-80">LinkedIn ↗</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 md:py-36 bg-[color:var(--plum)] text-[color:var(--blush)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--rose)] mb-3">— FAQ</p>
            <h2 className="text-4xl md:text-6xl font-display">Questions, answered.</h2>
          </div>
          <ul className="divide-y divide-[color:var(--blush)]/15 border-y border-[color:var(--blush)]/15">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <li key={f.q} className="reveal">
                  <button onClick={() => setOpenFaq(open ? null : i)} className="w-full text-left py-6 flex items-center justify-between gap-6">
                    <span className="font-display text-xl md:text-2xl">{f.q}</span>
                    <span className={`text-[color:var(--rose)] text-2xl transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden text-[color:var(--blush)]/75 max-w-2xl">{f.a}</div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 flex flex-wrap gap-4 reveal">
            <a className="px-6 py-3 rounded-full border border-[color:var(--blush)]/30 hover:bg-[color:var(--blush)] hover:text-[color:var(--plum)] transition" href="https://drive.google.com/file/d/151Pgqarl8WdRgvL0fUqm2VB8mjPF78Cl/view?usp=sharing" target="_blank" rel="noreferrer">Participation guide ↗</a>
            <a className="px-6 py-3 rounded-full border border-[color:var(--blush)]/30 hover:bg-[color:var(--blush)] hover:text-[color:var(--plum)] transition" href="https://drive.google.com/file/d/1SoQaSADJKnc7Sl7B9MW8ES0cE1gubSeJ/view?usp=sharing" target="_blank" rel="noreferrer">Judge & mentor guide ↗</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="register" className="py-28 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] glow-rose blob" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95] reveal">
            Ready to <em className="text-[color:var(--rose)]">build</em> the next chapter of women's health?
          </h2>
          <p className="mt-8 text-lg text-[color:var(--muted-foreground)] max-w-xl mx-auto reveal">
            Weather you are interested to join the second edition, or want to support us or collaborate, we would love to hear from you!
          </p>
          <a href="mailto:healthxher@gmail.com" className="reveal mt-12 inline-flex items-center gap-3 bg-[color:var(--plum)] text-[color:var(--blush)] px-8 py-5 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-[color:var(--sage)] transition">
            Contact us →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[color:var(--plum)]/15 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6 text-sm text-[color:var(--muted-foreground)]">
          <div className="flex items-center gap-4">
            <span className="font-display text-xl text-[color:var(--plum)]">HealthXHer</span>
            <span>© 2027 · Sweden · All rights reserved</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/archive/v1" className="ulink">First-edition archive</Link>
            <a className="ulink" href="mailto:healthxher@gmail.com">healthxher@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3 bg-[color:var(--background)]/85 backdrop-blur-md border-b border-[color:var(--plum)]/10" : "py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display text-xl text-[color:var(--plum)]">Health<span className="text-[color:var(--rose)]">×</span>Her</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[color:var(--muted-foreground)]">
          {[["About", "about"], ["Tracks", "tracks"], ["Schedule", "schedule"], ["Prizes", "prizes"], ["Team", "team"], ["FAQ", "faq"]].map(([l, id]) => (
            <a key={id} href={`#${id}`} className="ulink hover:text-[color:var(--plum)] transition">{l}</a>
          ))}
        </nav>
        <a href="#register" className="text-xs uppercase tracking-[0.2em] bg-[color:var(--plum)] text-[color:var(--blush)] px-4 py-2.5 rounded-full hover:bg-[color:var(--sage)] transition">Register</a>
      </div>
    </header>
  );
}
