import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Circolo Popolare — Big Mamma's Italian Trattoria Explained" },
      { name: "description", content: "What is Circolo Popolare? A guide to the Big Mamma Group Italian trattoria concept — fresh pasta, wood-fired pizza, wine-lined walls and communal tables across five cities." },
      { property: "og:title", content: "About Circolo Popolare" },
      { property: "og:description", content: "The Big Mamma Group trattoria brand behind the pecorino-wheel Carbonara." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title={<>What is <span className="italic text-primary">Circolo Popolare?</span></>}
        subtitle="An Italian trattoria and pizzeria concept from Big Mamma Group — big, generous, deliberately maximalist restaurants scattered across Europe."
      />
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-14">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>
            Circolo Popolare is a lively, Sicilian-inspired trattoria: long communal tables, hanging greenery, thousands of bottles of wine and spirits lining the walls, and a kitchen run by <em>la squadra</em> — the team — turning out handmade pasta, wood-fired Neapolitan pizza and generous sharing plates.
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold mt-8">What makes it distinctive</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Fresh pasta made in-house every day.</li>
            <li>Neapolitan pizza from a wood-fired oven, with San Marzano DOP tomatoes.</li>
            <li>The signature Gran Carbonara — tossed and served from a whole pecorino wheel.</li>
            <li>Maximalist, Instagram-friendly interiors — different themes at each location.</li>
            <li>Long sharing tables designed for groups.</li>
            <li>Dog-friendly seating areas.</li>
            <li>Lunch and dinner, 7 days a week.</li>
          </ul>
          <h2 className="font-display text-2xl md:text-3xl font-semibold mt-8">Where you'll find it</h2>
          <p>
            Circolo Popolare currently has restaurants in <Link to="/london" className="text-primary underline">London (Fitzrovia)</Link>, <Link to="/manchester" className="text-primary underline">Manchester</Link>, Madrid, Barcelona and Paris. See the full list on the <Link to="/locations" className="text-primary underline">locations page</Link>.
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold mt-8">About this site</h2>
          <p>
            This website is an independent fan and information resource. It is not affiliated with, endorsed by or operated by Big Mamma Group. Content is compiled from publicly available information, press coverage and reviews. For live menus, bookings, addresses and hours, please always visit the{" "}
            <a href="https://www.circolopopolare.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">official Circolo Popolare website</a>.
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}