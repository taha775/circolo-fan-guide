import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Disclaimer } from "@/components/site-layout";

export const Route = createFileRoute("/hours")({
  head: () => ({
    meta: [
      { title: "Circolo Popolare Opening Hours & Booking Tips | Fan Guide" },
      { name: "description", content: "When is Circolo Popolare open? Typical hours for London, Manchester, Madrid, Barcelona and Paris — plus booking, walk-in and group tips." },
      { property: "og:title", content: "Circolo Popolare — Hours & Booking" },
      { property: "og:description", content: "Opening hours and booking tips for every Circolo Popolare location." },
      { property: "og:url", content: "/hours" },
    ],
    links: [{ rel: "canonical", href: "/hours" }],
  }),
  component: HoursPage,
});

const hoursRows = [
  { city: "London (Fitzrovia)", hours: "Lunch & dinner, 7 days a week" },
  { city: "Manchester (St Michael's)", hours: "~12:00 pm – 11:30 pm daily" },
  { city: "Madrid (Azca)", hours: "~13:00–16:00 (lunch) · 19:30–23:00 (dinner)" },
  { city: "Barcelona (L'Eixample)", hours: "Lunch & dinner daily — confirm locally" },
  { city: "Paris", hours: "Lunch & dinner daily — confirm on official site" },
];

function HoursPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Hours & Booking"
        title="When is Circolo Popolare open?"
        subtitle="Hours vary by day and location — always check the official booking page before you go."
      />
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-14">
        <div className="overflow-hidden rounded-xl border border-border/60">
          <table className="w-full text-left">
            <thead className="bg-secondary/60">
              <tr>
                <th className="p-4 font-display text-sm uppercase tracking-wider">Location</th>
                <th className="p-4 font-display text-sm uppercase tracking-wider">Typical hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60 bg-card">
              {hoursRows.map((r) => (
                <tr key={r.city}>
                  <td className="p-4 font-medium">{r.city}</td>
                  <td className="p-4 text-muted-foreground">{r.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold">Booking tips</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>• Reservation slots typically open <strong className="text-foreground">~30 days in advance at 9:00 am</strong>.</li>
            <li>• Walk-ins are welcome but subject to availability — arriving early helps a lot.</li>
            <li>• Group bookings for 8–24 guests usually open further in advance and require a set menu.</li>
            <li>• Refresh the booking page for cancellations if you can't find a slot.</li>
            <li>• Dogs are welcome in the dining areas.</li>
          </ul>
        </section>
      </div>
      <Disclaimer />
    </SiteLayout>
  );
}