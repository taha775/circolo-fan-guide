import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Circolo Popolare Fan Site" },
      { name: "description", content: "Privacy policy for the unofficial Circolo Popolare fan and information website: what data we collect, cookies, analytics and your rights." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "How this independent Circolo Popolare guide handles your data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        subtitle="This page explains what information this site collects and how it's used."
      />
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-14 space-y-6 text-foreground/90">
        <p className="text-sm text-muted-foreground">Last updated: January 2026</p>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold">1. About this site</h2>
          <p>This website is an independent, unofficial fan and information resource about Circolo Popolare restaurants. It is not affiliated with or endorsed by Big Mamma Group. This privacy policy applies only to this website, not to any restaurant website you may visit from here.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold">2. Information we collect</h2>
          <p>This site does not require you to create an account or submit personal information to browse its content. When you visit we may collect standard log data such as your IP address, browser type, device information, referring URL, pages viewed and time of visit — used for security, aggregate analytics and to improve the site.</p>
          <p>If you email us directly, we'll receive the details you choose to send (name, email, message) and use them only to reply.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold">3. Cookies & analytics</h2>
          <p>We may use cookies or similar technologies for basic site functionality and privacy-friendly analytics. You can disable cookies in your browser settings, though some parts of the site may not work as expected.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold">4. Third-party links</h2>
          <p>Pages on this site link out to third-party websites, including the official Circolo Popolare and Big Mamma Group sites and their booking providers. We're not responsible for the content or privacy practices of any third-party site.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold">5. Your rights</h2>
          <p>Depending on where you live, you may have rights to access, correct or delete personal information we hold about you, or object to how we use it. Contact us to exercise any of these rights.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl font-semibold">6. Contact</h2>
          <p>Questions about this privacy policy? Email us at <a href="mailto:hello@circolopopolare-fanguide.example" className="text-primary underline">hello@circolopopolare-fanguide.example</a>.</p>
        </section>
      </div>
    </SiteLayout>
  );
}