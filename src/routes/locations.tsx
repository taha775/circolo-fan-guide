import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, Disclaimer } from "@/components/site-layout";
import { locations } from "@/data/menu";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Circolo Popolare Locations — London, Manchester, Madrid, Barcelona, Paris" },
      { name: "description", content: "All Circolo Popolare locations: addresses, neighbourhoods and notes for the London, Manchester, Madrid, Barcelona and Paris restaurants." },
      { property: "og:title", content: "Circolo Popolare Locations" },
      { property: "og:description", content: "Find your nearest Circolo Popolare with addresses and local notes." },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Locations"
        title={<>Find your nearest <span className="italic text-primary">Circolo Popolare</span></>}
        subtitle="Five cities, five slightly different rooms — same wild energy."
      />
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {locations.map((l) => (
            <article key={l.city} className="rounded-xl border border-border/60 bg-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-primary">{l.neighbourhood}</div>
                  <h3 className="mt-1 font-display text-2xl font-semibold">{l.city}</h3>
                </div>
                <MapPin className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="mt-4 text-sm text-foreground">{l.address}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l.note}</p>
              {l.slug && (
                <Link to={l.slug === "london" ? "/london" : "/manchester"} className="mt-4 inline-flex text-sm font-medium text-primary hover:underline">
                  Read the {l.city} guide →
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
      <Disclaimer />
    </SiteLayout>
  );
}