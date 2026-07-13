import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Circolo Popolare Fan Site (Unofficial)" },
      { name: "description", content: "Contact the editors of this independent Circolo Popolare fan site. For restaurant bookings please visit the official Circolo Popolare website." },
      { property: "og:title", content: "Contact — Circolo Popolare Fan Site" },
      { property: "og:description", content: "Get in touch about corrections or feedback for this unofficial guide." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        subtitle="This is an independent, unofficial fan site. Use the details below to reach the editors — for restaurant bookings please visit the official Circolo Popolare website."
      />
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-14 space-y-10">
        <section className="rounded-2xl border border-border/60 bg-card p-8">
          <div className="flex items-center gap-3 text-primary">
            <Mail className="h-5 w-5" />
            <span className="text-xs uppercase tracking-[0.25em]">Corrections & feedback</span>
          </div>
          <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold">Something out of date?</h2>
          <p className="mt-3 text-muted-foreground">
            Menus rotate monthly and prices vary between cities. If you spot something incorrect on the site, we'd love to hear about it so we can update.
          </p>
          <a href="mailto:hello@circolopopolare-fanguide.example" className="mt-5 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Email the editors
          </a>
        </section>

        <section className="rounded-2xl border border-border/60 bg-secondary/40 p-8">
          <h2 className="font-display text-xl md:text-2xl font-semibold">Looking to book a table?</h2>
          <p className="mt-3 text-muted-foreground">
            Bookings are only handled on the restaurant's own website. We can't take reservations, change reservations or contact the restaurants on your behalf.
          </p>
          <a href="https://www.circolopopolare.com/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center rounded-full border border-primary bg-background px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            Visit the official site →
          </a>
        </section>

        <section className="text-sm text-muted-foreground">
          <h3 className="font-display text-base font-semibold text-foreground">Disclaimer</h3>
          <p className="mt-2">
            This website is an independent, unofficial fan and information resource about Circolo Popolare restaurants. It is not affiliated with, endorsed by or operated by Big Mamma Group. All trademarks and restaurant names belong to their respective owners. Menu items, prices and hours are shared for general informational purposes, gathered from public reviews and booking platforms, and may not reflect the current official offering.
          </p>
        </section>
      </div>
    </SiteLayout>
  );
}