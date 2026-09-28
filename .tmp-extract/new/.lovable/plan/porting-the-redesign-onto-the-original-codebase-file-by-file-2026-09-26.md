# Porting the redesign onto the original codebase — file-by-file map

You asked: with the old website code in hand, which files change and what goes in them. This plan is that map. It assumes the original code (`HealthXHer-main`) with its three route files (`index.tsx`, `archive.v1.tsx`, `__root.tsx`).

## Summary of the change

- 1 long page becomes 6 pages / 7 tabs (FAQ anchors into the homepage; Archive condenses Edition 1).
- 2 new shared modules carry the look and motion so every page stays consistent.
- 1 route file becomes 9 route files.

## Files to change

### Modified (3 files)

1. **`src/styles.css`** — replace entirely.
   - New semantic design tokens (colors, surfaces, shadows) replacing the old decorative gradient/glow palette.
   - All motion CSS: reveal transition classes, cursor-spotlight CSS variables (`--mx`/`--my`), staggered hero entrance, card hover lift, image zoom/grayscale, animated nav underline — all wrapped in a `prefers-reduced-motion` guard and hidden on coarse pointers.

2. **`src/routes/__root.tsx`** — keep the TanStack Start bootstrap, change:
   - Font loading: Fraunces/Inter loaded via `<link>` tags in `head()`, never `@import` in CSS.
   - Per-route head metadata support and `<Toaster />` mounted once.

3. **`src/routes/index.tsx`** — rewrite. Same info as before, but:
   - Hero uses `CursorSpotlight` from the new motion module (restores the original's cursor-following effect).
   - Each section (mission, tracks, etc.) gains a "Read more" button linking to its own page.
   - FAQ section keeps an `id="faq"` anchor so the FAQ tab scrolls to it.
   - Section wrappers get reveal classes from `PageShell`.

### New files (9)

4. **`src/components/site-shell.tsx`** — shared nav (Home, About, Hackathon, Partners, Blog, Archive, FAQ anchor) + footer + `PageShell` wrapper that applies scroll-reveal to sections. All pages import this so navigation is one visual system.

5. **`src/components/site-motion.tsx`** — the two motion primitives: an IntersectionObserver-based `Reveal` behavior, and `CursorSpotlight` (pointer-tracked ring/spotlight via CSS variables, touch-safe).

6. **`src/lib/content.ts`** — shared data so pages never drift: track definitions (Oncology Safety, Cancer Screening, Autoimmune Care), FAQ items (team of four, team-matching), page metadata.

7. **`src/routes/about.tsx`** — About page: mission, team, story (Figma screenshots 6–7).

8. **`src/routes/hackathon.tsx`** — Hackathon page: format, the three tracks, schedule.

9. **`src/routes/partners.tsx`** — Partners page: partner types, AstraZeneca content, sponsor grid.

10. **`src/routes/blog.tsx`** — thin layout route rendering `<Outlet />` so article URLs work under `/blog/...`.

11. **`src/routes/blog.index.tsx`** — blog listing (Figma screenshot 8): article cards.

12. **`src/routes/blog.pcos-is-more-complicated-than-its-name.tsx`** — the full article view (Figma screenshot 9).

13. **`src/routes/archive.tsx`** — condensed one-page Edition 1 archive: sponsors, tracks/challenges, photo gallery (reusing images already in `public/archive/v1/gallery/`). The original `archive.v1.tsx` static archive stays reachable for the full V1 site.

### Also touched

- **`src/components/ui/button.tsx`** — extra Button variants used by the section links.
- **`src/routeTree.gen.ts`** — do NOT edit; it regenerates when the new route files exist.
- **`AGENTS.md`** — one-line conventions for the new structure (optional).

## Why the split is shaped this way

- `site-shell.tsx` + `content.ts` are the only sources of nav and shared copy — that is what keeps six pages consistent without duplicating markup.
- Motion lives in one module and is CSS-variable driven, so it degrades cleanly for reduced-motion users and touch devices.
- The blog needs a parent layout route (`blog.tsx`) because article URLs are nested paths.

## Optional follow-up

If you want, I can apply this map directly to a copy of your uploaded original zip and hand back a ready-to-run `HealthXHer-main` with the redesign in place — say the word and I'll do that instead of/in addition to the current live redesign.
