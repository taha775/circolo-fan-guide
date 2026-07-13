import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Disclaimer } from "@/components/site-layout";
import { menu, setMenus } from "@/data/menu";

export const Route = createFileRoute("/manchester-menu")({
  head: () => ({
    meta: [
      { title: "Circolo Popolare Manchester Menu — Pasta, Pizza & Prices | Fan Guide" },
      { name: "description", content: "Circolo Popolare Manchester menu preview: signature Gran Carbonara, wood-fired pizza, fresh pasta, mains and desserts with indicative UK prices." },
      { property: "og:title", content: "Circolo Popolare Manchester Menu" },
      { property: "og:description", content: "Menu highlights and indicative prices for Circolo Popolare Manchester at Jackson's Row." },
      { property: "og:url", content: "/manchester-menu" },
    ],
    links: [{ rel: "canonical", href: "/manchester-menu" }],
  }),
  component: ManchesterMenu,
});

function ManchesterMenu() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Manchester Menu"
        title={<>What's on the menu at <span className="italic text-primary">Circolo Popolare Manchester</span></>}
        subtitle="The Manchester menu follows the same Big Mamma DNA as the London original: fresh pasta made in-house, Neapolitan pizza, sharing plates and big Italian desserts. Menus rotate monthly — prices below are indicative."
      />
      <div className="mx-auto max-w-5xl px-4 md:px-6 py-14 space-y-14">
        {menu.map((section) => (
          <section key={section.id}>
            <div className="flex items-end justify-between border-b border-border/60 pb-3 mb-6">
              <div>
                {section.italian && <div className="text-xs uppercase tracking-[0.25em] text-primary">{section.italian}</div>}
                <h2 className="font-display text-2xl md:text-3xl font-semibold">{section.title}</h2>
              </div>
            </div>
            <ul className="divide-y divide-border/60">
              {section.dishes.map((d) => (
                <li key={d.name} className="flex items-start justify-between gap-6 py-4">
                  <div>
                    <div className="font-display text-lg font-semibold">
                      {d.name}
                      {d.tags && d.tags.map((t) => (
                        <span key={t} className="ml-2 rounded-full border border-accent/30 bg-accent/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent align-middle">{t}</span>
                      ))}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground max-w-xl">{d.description}</p>
                  </div>
                  <div className="whitespace-nowrap font-display text-primary">{d.price}</div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <h2 className="font-display text-2xl md:text-3xl font-semibold border-b border-border/60 pb-3">Set menus in Manchester</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {setMenus.map((s) => (
              <div key={s.name} className="rounded-xl border border-border/60 bg-card p-5">
                <div className="flex items-center justify-between">
                  <div className="font-display text-lg font-semibold">{s.name}</div>
                  <div className="font-display text-primary">{s.price}</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Disclaimer />
    </SiteLayout>
  );
}