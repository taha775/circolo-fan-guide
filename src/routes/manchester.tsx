import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, Disclaimer } from "@/components/site-layout";
import manchester from "@/assets/manchester-interior.jpg";
import carbonara from "@/assets/carbonara-wheel.jpg";
import lemon from "@/assets/lemon-pie.jpg";

export const Route = createFileRoute("/manchester")({
  head: () => ({
    meta: [
      { title: "Circolo Popolare Manchester — Menu, Photos, Hours & St Michael's Location" },
      { name: "description", content: "Circolo Popolare Manchester guide: St Michael's location on Jackson's Row, opening hours, menu highlights, photos of the eucalyptus canopy dining room and booking tips." },
      { property: "og:title", content: "Circolo Popolare Manchester — Fan Guide" },
      { property: "og:description", content: "Everything to know before visiting Circolo Popolare Manchester at St Michael's, Jackson's Row." },
      { property: "og:url", content: "/manchester" },
    ],
    links: [{ rel: "canonical", href: "/manchester" }],
  }),
  component: ManchesterPage,
});

function ManchesterPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Manchester · St Michael's"
        title={<>Circolo Popolare <span className="italic text-primary">Manchester</span></>}
        subtitle="Big Mamma's Manchester outpost on Jackson's Row — a eucalyptus-canopied bar, a Circolino dining room and a menu built for sharing."
        image={manchester}
      />
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <section className="grid gap-10 md:grid-cols-5 items-start py-14">
          <div className="md:col-span-3 space-y-5">
            <div className="text-xs uppercase tracking-[0.25em] text-primary">The Room</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">A greenhouse for pasta and pecorino wheels</h2>
            <p className="text-muted-foreground">
              Circolo Popolare Manchester sits in the new St Michael's development on Jackson's Row, right next to the Town Hall. Inside, expect the full Big Mamma treatment: a canopy of eucalyptus and hanging greenery, marble bar tops, warm globe pendants and a wall of Italian wine curving around the room.
            </p>
            <p className="text-muted-foreground">
              The venue is split into two moods — the buzzing main dining room with communal tables, and the more intimate <em>Circolino</em> space for smaller bookings and private dining. The kitchen turns out the same signatures the group is famous for: Gran Carbonara from a whole pecorino wheel, mafaldine with fresh truffle, Neapolitan pizza from a wood-fired oven and the XXL lemon meringue pie.
            </p>
          </div>
          <aside className="md:col-span-2 rounded-2xl border border-border/60 bg-card p-6 space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Address</div>
              <div className="mt-1 font-medium">Jackson's Row, Manchester M2 5WD</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Typical Hours</div>
              <div className="mt-1 font-medium">Approx. 12:00 pm – 11:30 pm daily</div>
              <div className="text-xs text-muted-foreground">Confirm on the day — kitchen hours vary.</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Vibe</div>
              <div className="mt-1 font-medium">Loud, generous, sharing-style, dog-friendly</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Ballpark spend</div>
              <div className="mt-1 font-medium">£45–£55 pp (starter + main, no drinks)</div>
            </div>
            <a href="https://www.circolopopolare.com/restaurants/circolopopolare-manchester" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Book on the official site
            </a>
          </aside>
        </section>

        <section className="py-8">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">What people order in Manchester</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-xl border border-border/60 bg-card">
              <img src={carbonara} alt="Gran Carbonara served from a pecorino wheel" loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold">Gran Carbonara</h3>
                <p className="mt-2 text-sm text-muted-foreground">Spaghetti alla chitarra tossed inside a whole pecorino wheel with guanciale, egg yolk and black pepper. This is the reason most people book.</p>
              </div>
            </article>
            <article className="overflow-hidden rounded-xl border border-border/60 bg-card">
              <img src={lemon} alt="Incomparable Lemon Pie" loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold">Incomparable Lemon Pie</h3>
                <p className="mt-2 text-sm text-muted-foreground">A ~15cm-tall lemon meringue pie big enough to share — and yes, it's TikTok-famous for a reason.</p>
              </div>
            </article>
          </div>
          <div className="mt-6 text-center">
            <Link to="/manchester-menu" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              See the Manchester menu →
            </Link>
          </div>
        </section>

        <section className="py-14">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border/60 bg-card p-5">
              <h3 className="font-display text-lg font-semibold">Getting there</h3>
              <p className="mt-2 text-sm text-muted-foreground">A short walk from Manchester Town Hall and St Peter's Square Metrolink. Deansgate and Oxford Road stations are both under 10 minutes away.</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-5">
              <h3 className="font-display text-lg font-semibold">Booking tips</h3>
              <p className="mt-2 text-sm text-muted-foreground">Reservations typically open ~30 days ahead at 9:00 am. Refresh for cancellations if a slot is fully booked. Walk-ins are welcome but not guaranteed.</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-5">
              <h3 className="font-display text-lg font-semibold">Good to know</h3>
              <p className="mt-2 text-sm text-muted-foreground">Dogs allowed in the dining areas. Groups of 8–24 usually go on a set sharing menu (~£54 pp).</p>
            </div>
          </div>
        </section>
      </div>
      <Disclaimer />
    </SiteLayout>
  );
}