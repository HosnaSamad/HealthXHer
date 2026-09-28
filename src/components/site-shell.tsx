import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useSectionReveals } from "@/components/site-motion";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Hackathon", to: "/hackathon" },
  { label: "Partners", to: "/partners" },
  { label: "Blog", to: "/blog" },
  { label: "Archive", to: "/archive" },
] as const;

export function BrandMark() {
  return (
    <Link to="/" className="flex items-center gap-2 text-accent" aria-label="HealthXHer home">
      <span className="brand-symbol" aria-hidden="true">H</span>
      <span className="font-display text-xl">HealthXHer</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="site-container flex h-20 items-center justify-between">
        <BrandMark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link">
              {item.label}
            </Link>
          ))}
          <a className="nav-link" href="/#faq">FAQ</a>
        </nav>
        <div className="hidden lg:block">
          <Button asChild size="sm"><a href="mailto:healthxher@gmail.com?subject=Edition%202%20application">Apply</a></Button>
        </div>
        <Button className="lg:hidden" size="icon" variant="ghost" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="site-container grid gap-1 border-t border-border py-4 lg:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.to} to={item.to} className="mobile-nav-link">{item.label}</Link>)}
          <a href="/#faq" className="mobile-nav-link">FAQ</a>
          <Button asChild className="mt-2"><a href="mailto:healthxher@gmail.com?subject=Edition%202%20application">Apply</a></Button>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary py-9 text-primary-foreground">
      <div className="site-container flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span>© HealthXHer 2027 · Sweden · All rights reserved</span>
        <div className="flex gap-5"><Link to="/archive">Edition 1 archive</Link><a href="mailto:healthxher@gmail.com">Contact</a></div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  const mainRef = useSectionReveals();
  return <div className="min-h-screen overflow-x-clip bg-background"><SiteHeader /><main ref={mainRef}>{children}</main><SiteFooter /></div>;
}

export function SectionIntro({ eyebrow, title, copy, centered = false }: { eyebrow?: string; title: string; copy?: string; centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {copy && <p className="mt-5 text-base leading-7 text-muted-foreground">{copy}</p>}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="site-container relative text-center">
        <h2 className="mx-auto max-w-4xl font-display text-4xl leading-tight text-primary-foreground md:text-6xl">Ready to build the next chapter of women&apos;s health?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-primary-foreground/80">Whether you want to join the next edition, support our work or collaborate with the community, we would love to hear from you.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="light"><a href="mailto:healthxher@gmail.com?subject=Edition%202%20application">Apply to Edition 2</a></Button>
          <Button asChild variant="lightOutline"><a href="mailto:healthxher@gmail.com">Contact us</a></Button>
        </div>
      </div>
    </section>
  );
}