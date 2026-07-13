import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, Disclaimer } from "@/components/site-layout";
import london from "@/assets/london-exterior.jpg";
import hero from "@/assets/hero-trattoria.jpg";
import truffle from "@/assets/truffle-pasta.jpg";

export const Route = createFileRoute("/london")({
  head: () => ({
    meta: [
      { title: "Circolo Popolare London — Fitzrovia Menu, Photos & Hours" },
      { name: "description", content: "Circolo Popolare London guide: Fitzrovia address (40-41 Rathbone Place), opening hours, signature dishes, photos and how to book." },
      { property: "og:title", content: "Circolo Popolare London — Fan Guide" },
      { property: "og:description", content: "Everything to know before visiting Circolo Popolare in Fitzrovia, London." },
      { property: "og:url", content: "/london" },
    ],
    links: [{ rel: "canonical", href: "/london" }],
  }),
  component: LondonPage,
});

function LondonPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="London · Fitzrovia"
        title={<>Circolo Popolare <span className="italic text-primary">London</span></>}
        subtitle="The original UK Circolo. A wine-bottle cathedral in Fitzrovia with a sunny summer terrace and communal tables built for feasting."
        image={london}
      />
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <section className="grid gap-10 md:grid-cols-5 items-start py-14">
          <div className="md:col-span-3 space-y-5">
            <div className="text-xs uppercase tracking-[0.25em] text-primary">Fitzrovia's loudest room</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">The Big Mamma flagship in London</h2>
            <p className="text-muted-foreground">
              Tucked between Tottenham Court Road and Oxford Street, Circolo Popolare London opened as Big Mamma's UK flagship and has been a fixture on the "where should we book?" list ever since. Every surface is covered — thousands of wine and spirit bottles line the walls from floor to ceiling, dried flowers hang from the beams, and long communal tables run down the centre of the room.
            </p>
            <p className="text-muted-foreground">
              This is where the Gran Carbonara-from-a-pecorino-wheel became famous, and where the XXL lemon meringue pie first started photobombing dinner tables across the internet.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/menu" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">See the menu</Link>
              <Link to="/photos" className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-secondary">See the room</Link>
            </div>
          </div>
          <aside className="md:col-span-2 rounded-2xl border border-border/60 bg-card p-6 space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Address</div>
              <div className="mt-1 font-medium">40-41 Rathbone Place, London W1T 1HX</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Hours</div>
              <div className="mt-1 font-medium">Lunch & dinner, 7 days a week</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Nearest tube</div>
              <div className="mt-1 font-medium">Tottenham Court Road</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Ballpark</div>
              <div className="mt-1 font-medium">£45–£55 pp (starter + main)</div>
            </div>
            <a href="https://www.circolopopolare.com/restaurants/circolopopolare-london" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Book on the official site
            </a>
          </aside>
        </section>

        <section className="grid gap-6 md:grid-cols-2 py-8">
          <img src={hero} alt="Interior of Circolo Popolare London with wine bottle walls" loading="lazy" width={800} height={600} className="aspect-[4/3] w-full rounded-xl object-cover" />
          <img src={truffle} alt="Truffle mafaldine at Circolo Popolare London" loading="lazy" width={800} height={600} className="aspect-[4/3] w-full rounded-xl object-cover" />
        </section>
      </div>
      <Disclaimer />
    </SiteLayout>
  );
}