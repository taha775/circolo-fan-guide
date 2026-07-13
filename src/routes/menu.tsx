import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Disclaimer } from "@/components/site-layout";
import { menu, setMenus } from "@/data/menu";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Circolo Popolare Menu — Prices, Pasta, Pizza & Signature Dishes" },
      { name: "description", content: "Circolo Popolare menu guide: antipasti, fresh pasta, Neapolitan pizza, mains, desserts and set menus with indicative price ranges and dietary tags." },
      { property: "og:title", content: "Circolo Popolare Menu Guide" },
      { property: "og:description", content: "Full menu preview with prices for Circolo Popolare — Gran Carbonara, truffle mafaldine, wood-fired pizza and more." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function TagPill({ tag }: { tag: string }) {
  const map: Record<string, string> = {
    V: "bg-accent/15 text-accent border-accent/30",
    VEG: "bg-accent/10 text-accent border-accent/25",
    GL: "bg-gold/15 text-gold border-gold/30",
  };
  return <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${map[tag] ?? "bg-secondary text-foreground border-border"}`}>{tag}</span>;
}

function MenuPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Menu Guide"
        title={<>The <span className="italic text-primary">Circolo Popolare</span> Menu</>}
        subtitle="Menus rotate monthly and vary by city. Prices below are indicative ranges gathered from public reviews and booking platforms — always confirm live pricing on the official site before you visit."
      />
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="sticky top-16 z-30 -mx-4 md:-mx-6 mb-10 border-y border-border/60 bg-background/90 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 py-3 text-sm md:px-6">
            {menu.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap rounded-full px-3 py-1.5 text-foreground/75 hover:bg-secondary hover:text-primary">
                {s.title}
              </a>
            ))}
            <a href="#set-menus" className="whitespace-nowrap rounded-full px-3 py-1.5 text-foreground/75 hover:bg-secondary hover:text-primary">Set Menus</a>
          </nav>
        </div>

        {menu.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-32 mb-16">
            <div className="mb-8 text-center">
              {section.italian && <div className="text-xs uppercase tracking-[0.25em] text-primary">{section.italian}</div>}
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">{section.title}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{section.intro}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {section.dishes.map((d) => (
                <article key={d.name} className="flex overflow-hidden rounded-xl border border-border/60 bg-card">
                  {d.image && (
                    <img src={d.image} alt={d.name} loading="lazy" width={400} height={400} className="h-auto w-32 md:w-40 flex-shrink-0 object-cover" />
                  )}
                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                          {d.name}
                          {d.signature && <Sparkles className="h-4 w-4 text-gold" />}
                        </h3>
                        {d.tags && (
                          <div className="mt-1 flex gap-1">
                            {d.tags.map((t) => <TagPill key={t} tag={t} />)}
                          </div>
                        )}
                      </div>
                      <div className="font-display text-base font-semibold text-primary whitespace-nowrap">{d.price}</div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section id="set-menus" className="scroll-mt-32 mb-16">
          <div className="mb-8 text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-primary">Menu Fissi</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">Set Menus</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {setMenus.map((s) => (
              <div key={s.name} className="rounded-xl border border-border/60 bg-card p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">{s.name}</h3>
                  <span className="font-display text-primary">{s.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-border/60 bg-secondary/40 p-6 mb-12">
          <h3 className="font-display text-xl font-semibold">Dietary & Allergens</h3>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
            <li><TagPill tag="V" /> Vegan</li>
            <li><TagPill tag="VEG" /> Vegetarian</li>
            <li><TagPill tag="GL" /> Gluten-low</li>
            <li>No gluten-free pasta or pizza is offered.</li>
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            Common allergens are labelled on in-restaurant menus — always ask staff for the full list. The restaurant does not publish calorie/nutrition figures, so this site does not display any.
          </p>
        </section>

        <div className="rounded-xl bg-primary/5 border border-primary/20 p-6 text-center mb-6">
          <div className="text-xs uppercase tracking-[0.25em] text-primary">Ballpark Spend</div>
          <p className="mt-2 font-display text-xl md:text-2xl">
            Roughly <span className="text-primary">£45–£55 per person</span> for starter + main (no drinks), or around <span className="text-primary">£85 for two</span> with a three-course meal and drinks.
          </p>
        </div>
      </div>
      <Disclaimer />
    </SiteLayout>
  );
}