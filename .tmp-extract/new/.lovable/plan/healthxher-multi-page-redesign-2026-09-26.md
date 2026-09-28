# HealthXHer multi-page redesign

## Build
- Replace the current single-page experience with shared navigation and six routes: Home, About, Hackathon, Partners, Blog, and Archive.
- Keep FAQ as an in-page Home section and make its navigation tab scroll there.
- Match the supplied Figma screenshots: white and pale-blush sections, deep-plum typography and controls, pink identity mark, editorial serif headings, compact navigation, and restrained rounded panels.
- Reuse original HealthXHer content and uploaded source assets rather than inventing unrelated material.

## Pages
- **Home:** hero, sponsor strip, mission and edition cards, systems statement, interactive tracks, Edition 1 impact, blog preview, FAQ accordion, and closing call-to-action.
- **About:** mission, vision, and team presentation based on the supplied About screenshots.
- **Hackathon:** Edition 2 overview, tracks, participation journey, schedule status, prizes, and application call-to-action.
- **Partners:** partner value proposition, ways to contribute, current sponsor recognition, and contact call-to-action.
- **Blog:** editorial landing page plus a full PCOS article reading view.
- **Archive:** condensed Edition 1 page with highlights, sponsors, challenge tracks, selected event photography, and impact.

## Technical details
- Use TanStack file-based routes with unique metadata for each page and shared site navigation/footer.
- Use semantic design tokens in the global stylesheet and the existing Button/Accordion building blocks.
- Store reused uploaded media through project asset pointers.
- Verify desktop and mobile layouts, navigation, FAQ behavior, article flow, and final build status.
