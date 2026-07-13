import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

const faqs = [
  { q: "Is this the official Circolo Popolare website?", a: "No — this is an independent fan and information site. For bookings and the current live menu, please visit the restaurant's official website at circolopopolare.com." },
  { q: "Do I need to book in advance?", a: "It's strongly recommended, especially for evenings and weekends, but walk-ins are accepted depending on availability." },
  { q: "Is there a dress code?", a: "Generally smart-casual — no formal dress code, but the room is lively and photogenic." },
  { q: "Are there vegetarian, vegan, or gluten-low options?", a: "Yes — look for (V), (VEG) and (GL) tags on the menu. No gluten-free pasta or pizza is available." },
  { q: "How much should I expect to spend?", a: "Roughly £45–£55 per person for a starter and main course, excluding drinks. Around £85 for two with a three-course meal and drinks. Varies by city and season." },
  { q: "Can I book a large group?", a: "Yes — groups of 8–24 are typically accommodated with a set sharing menu (~£54 pp). Contact the restaurant directly for private hire." },
  { q: "Is Circolo Popolare dog-friendly?", a: "Dogs are welcome in the dining areas." },
  { q: "Where is Circolo Popolare in Manchester?", a: "The Manchester restaurant is on Jackson's Row, in the St Michael's development next to the Town Hall." },
  { q: "Where is Circolo Popolare in London?", a: "The London flagship is in Fitzrovia at 40-41 Rathbone Place, W1T 1HX." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Circolo Popolare FAQ — Bookings, Dress Code, Prices & Dietary Options" },
      { name: "description", content: "Common questions about Circolo Popolare: is booking required, what's the dress code, are there vegan/vegetarian options, and how much to expect to spend." },
      { property: "og:title", content: "Circolo Popolare FAQ" },
      { property: "og:description", content: "Answers to the most asked questions about visiting Circolo Popolare." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQ"
        title="Circolo Popolare, answered"
        subtitle="The questions people ask most before booking a table."
      />
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-14 space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-xl border border-border/60 bg-card p-5 open:shadow-md">
            <summary className="cursor-pointer list-none font-display text-lg font-semibold flex items-center justify-between gap-4">
              {f.q}
              <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </SiteLayout>
  );
}