import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="bg-primary text-primary-foreground text-center text-xs py-2 px-4">
        Independent fan & info site — not affiliated with Big Mamma Group.{" "}
        <a href="https://www.circolopopolare.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-gold">
          Visit the official site →
        </a>
      </div>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/60 bg-secondary/40">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img src={image} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        </div>
      )}
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24 text-center">
        {eyebrow && (
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function Disclaimer() {
  return (
    <div className="mx-auto max-w-5xl px-4 md:px-6">
      <div className="my-10 rounded-lg border border-border/60 bg-secondary/50 p-4 text-sm text-muted-foreground">
        <strong className="text-foreground">Heads up:</strong> This is an unofficial fan site.
        Menus rotate monthly and prices vary by city. Always confirm live pricing, hours and booking on the{" "}
        <a href="https://www.circolopopolare.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
          official Circolo Popolare website
        </a>.
      </div>
    </div>
  );
}