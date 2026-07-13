import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-semibold">
              Circolo <span className="text-primary italic">Popolare</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              An independent fan and information site for Circolo Popolare — Big Mamma Group's wild Italian trattoria. Menu, photos, prices and opening hours for London, Manchester, Madrid, Barcelona and Paris.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Unofficial fan site — not affiliated with Big Mamma Group. For bookings and the current official menu, please visit the{" "}
              <a href="https://www.circolopopolare.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                official website
              </a>.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/menu" className="text-muted-foreground hover:text-primary">Full Menu</Link></li>
              <li><Link to="/manchester-menu" className="text-muted-foreground hover:text-primary">Manchester Menu</Link></li>
              <li><Link to="/photos" className="text-muted-foreground hover:text-primary">Photos</Link></li>
              <li><Link to="/hours" className="text-muted-foreground hover:text-primary">Hours & Booking</Link></li>
              <li><Link to="/locations" className="text-muted-foreground hover:text-primary">Locations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Info</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About the Site</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Circolo Popolare Fan Guide. All restaurant names, menus and trademarks belong to their respective owners.
        </div>
      </div>
    </footer>
  );
}