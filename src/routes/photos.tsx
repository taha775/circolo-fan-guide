import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Disclaimer } from "@/components/site-layout";
import hero from "@/assets/hero-trattoria.jpg";
import carbonara from "@/assets/carbonara-wheel.jpg";
import pizza from "@/assets/pizza-margherita.jpg";
import lemon from "@/assets/lemon-pie.jpg";
import burrata from "@/assets/burrata.jpg";
import truffle from "@/assets/truffle-pasta.jpg";
import manchester from "@/assets/manchester-interior.jpg";
import london from "@/assets/london-exterior.jpg";

export const Route = createFileRoute("/photos")({
  head: () => ({
    meta: [
      { title: "Circolo Popolare Photos — Interior, Food & Signature Dish Gallery" },
      { name: "description", content: "Photo gallery of Circolo Popolare: the wine-bottle walls, eucalyptus-canopy dining rooms, Gran Carbonara from the pecorino wheel, wood-fired pizza and XXL lemon pie." },
      { property: "og:title", content: "Circolo Popolare Photos" },
      { property: "og:description", content: "Interior and food photos from Circolo Popolare's London and Manchester restaurants." },
      { property: "og:url", content: "/photos" },
    ],
    links: [{ rel: "canonical", href: "/photos" }],
  }),
  component: PhotosPage,
});

const gallery = [
  { src: hero, caption: "The wine-bottle cathedral: Circolo Popolare's signature interior look." },
  { src: carbonara, caption: "Gran Carbonara being tossed inside a whole pecorino wheel." },
  { src: manchester, caption: "The Manchester dining room, canopied in hanging eucalyptus." },
  { src: pizza, caption: "Wood-fired Mammargherita di Bufala — San Marzano DOP + buffalo mozzarella." },
  { src: truffle, caption: "Mafaldine al Tartufo served straight from a pecorino wheel." },
  { src: lemon, caption: "The Incomparable Lemon Pie — a ~15cm-tall meringue monument." },
  { src: burrata, caption: "Puglian burrata with pesto and warm focaccia." },
  { src: london, caption: "London flagship in Fitzrovia — the little terrace outside." },
];

function PhotosPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title={<>Circolo Popolare <span className="italic text-primary">Photos</span></>}
        subtitle="Interiors, signature dishes and the small details that make Circolo Popolare so photographed. Images shown here are stylised references — not the restaurant's own press photos."
      />
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-14">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {gallery.map((g, i) => (
            <figure key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border/60 bg-card">
              <img src={g.src} alt={g.caption} loading="lazy" width={800} height={800} className="w-full object-cover" />
              <figcaption className="p-3 text-xs text-muted-foreground">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <Disclaimer />
    </SiteLayout>
  );
}