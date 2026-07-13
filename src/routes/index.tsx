import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import hero from "@/assets/hero-trattoria.jpg";
import carbonara from "@/assets/carbonara-wheel.jpg";
import pizza from "@/assets/pizza-margherita.jpg";
import lemon from "@/assets/lemon-pie.jpg";
import burrata from "@/assets/burrata.jpg";
import truffle from "@/assets/truffle-pasta.jpg";
import manchester from "@/assets/manchester-interior.jpg";
import { MapPin, Clock, UtensilsCrossed, HelpCircle, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Circolo Popolare — Menu, Photos, Hours & Locations | Fan Guide" },
      { name: "description", content: "Your independent guide to Circolo Popolare: menu highlights, price ranges, photos, opening hours and locations in London, Manchester, Madrid, Barcelona and Paris." },
      { property: "og:title", content: "Circolo Popolare — Fan & Info Site" },
      { property: "og:description", content: "Menu, photos, prices and insider tips for Big Mamma's wildest Italian trattoria." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={hero} alt="Circolo Popolare-style Italian trattoria interior" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-36 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur">
            <Star className="h-3 w-3 fill-current" /> Unofficial Fan Guide
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.02] text-foreground">
            Circolo <span className="italic text-primary">Popolare</span>
            <br />
            <span className="text-2xl md:text-3xl font-normal italic text-muted-foreground">
              Your guide to the wildest Italian trattoria in town
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
            Everything you want to know before you go — menu highlights, price expectations, opening hours, locations and insider tips. All in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/menu" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              View the Menu
            </Link>
            <Link to="/photos" className="inline-flex items-center rounded-full border border-border bg-background/60 backdrop-blur px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors">
              See the Photos
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-primary">Benvenuti</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold">
          Jungle-like decor. Walls of wine. Pasta from a pecorino wheel.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Circolo Popolare is one of Big Mamma Group's most talked-about Italian restaurants — known for its Sicilian-inspired maximalism, long communal tables and a Carbonara tossed inside a giant pecorino wheel. This site is an independent guide for fans and first-time visitors: menu previews, ballpark prices, opening hours and answers to the questions people ask most before booking.
        </p>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/menu", icon: UtensilsCrossed, title: "View the Menu", body: "Antipasti, pasta, pizza, mains, desserts and set menus with indicative prices." },
            { to: "/hours", icon: Clock, title: "Hours & Booking", body: "When each restaurant is open, and how to actually get a table." },
            { to: "/locations", icon: MapPin, title: "Find a Location", body: "London, Manchester, Madrid, Barcelona and Paris — with addresses and notes." },
            { to: "/faq", icon: HelpCircle, title: "FAQs", body: "Dress code, walk-ins, dietary options, spend per person and more." },
          ].map(({ to, icon: Icon, title, body }) => (
            <Link key={to} to={to} className="group rounded-xl border border-border/60 bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all">
              <Icon className="h-6 w-6 text-primary" />
              <div className="mt-4 font-display text-lg font-semibold group-hover:text-primary">{title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Signature dishes */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary">The Icons</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">Signature dishes worth the trip</h2>
          </div>
          <Link to="/menu" className="text-sm font-medium text-primary hover:underline">See full menu →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: carbonara, name: "Gran Carbonara", desc: "Spaghetti tossed inside a whole pecorino wheel. The dish that broke the internet." },
            { img: truffle, name: "Mafaldine al Tartufo", desc: "Ribbon pasta with fresh truffle — served from a pecorino wheel, obviously." },
            { img: pizza, name: "Mammargherita di Bufala", desc: "Wood-fired, leopard-spotted crust, San Marzano DOP, buffalo mozzarella." },
          ].map((d) => (
            <article key={d.name} className="group overflow-hidden rounded-xl border border-border/60 bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold">{d.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cities strip */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary">Five Cities</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">One restaurant, many rooms</h2>
              <p className="mt-4 text-muted-foreground">
                From the wine-lined walls of Fitzrovia in London to the eucalyptus canopy in Manchester — every Circolo Popolare is designed as a small world of its own.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["London","Manchester","Madrid","Barcelona","Paris"].map(c => (
                  <span key={c} className="rounded-full border border-border bg-background px-4 py-2 text-sm">{c}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <Link to="/london" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">London</Link>
                <Link to="/manchester" className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-secondary">Manchester</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src={manchester} alt="Manchester dining room with eucalyptus canopy" loading="lazy" width={600} height={800} className="aspect-[3/4] w-full rounded-xl object-cover" />
              <img src={burrata} alt="Burrata board with pesto and focaccia" loading="lazy" width={600} height={800} className="aspect-[3/4] w-full rounded-xl object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Signature dessert callout */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <img src={lemon} alt="XXL lemon meringue pie slice" loading="lazy" width={800} height={800} className="w-full rounded-xl object-cover" />
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary">Save room</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">The Incomparable Lemon Pie</h2>
            <p className="mt-4 text-muted-foreground">
              A ~15cm-tall lemon meringue pie that arrives at the table looking more like a monument than a dessert. It's zesty, ridiculous and the reason most people leave saying "one more time".
            </p>
            <Link to="/menu" className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Browse all desserts
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
