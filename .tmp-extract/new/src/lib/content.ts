export const tracks = [
  { number: "01", title: "Oncology Safety", short: "Sex-specific adverse-event detection in cancer care.", body: "Women face a 34% higher risk of adverse events in oncology treatment. Design tools that detect, monitor and manage these sex-specific toxicities." },
  { number: "02", title: "Cancer Screening", short: "Equitable, personalised early detection for women.", body: "One million women die yearly from breast, endometrial and ovarian cancer — many preventable with early screening. Remove barriers and personalise outreach." },
  { number: "03", title: "Autoimmune Care", short: "Streamlining diagnosis for the 80% of patients who are women.", body: "Build scalable, equity-focused concepts that improve recognition, triage and follow-up across specialties." },
];

export const faqs = [
  { q: "Why should I join?", a: "Collaborate with diverse talent, gain hands-on experience on real women's health challenges, and showcase your work to AstraZeneca leaders and experts." },
  { q: "How are teams formed?", a: "Register individually. We match participants after kick-off based on complementary skills, interests and the challenge they want to address." },
  { q: "Team size", a: "Teams have four participants and are intentionally multidisciplinary, bringing together science, technology, policy and design." },
  { q: "In-person commitment", a: "The programme combines focused collaboration with key in-person moments. Full Edition 2 details will be shared with selected participants." },
  { q: "Final deliverable", a: "A working prototype, design document or comprehensive concept addressing your chosen challenge. Concept-stage solutions are welcome." },
];

export const routeMeta = (title: string, description: string) => ({
  meta: [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});