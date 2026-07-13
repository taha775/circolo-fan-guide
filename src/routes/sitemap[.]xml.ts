import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const paths = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/menu", priority: "0.9", changefreq: "weekly" as const },
  { path: "/manchester", priority: "0.9", changefreq: "weekly" as const },
  { path: "/manchester-menu", priority: "0.9", changefreq: "weekly" as const },
  { path: "/london", priority: "0.9", changefreq: "weekly" as const },
  { path: "/photos", priority: "0.8", changefreq: "monthly" as const },
  { path: "/hours", priority: "0.7", changefreq: "monthly" as const },
  { path: "/locations", priority: "0.7", changefreq: "monthly" as const },
  { path: "/about", priority: "0.6", changefreq: "monthly" as const },
  { path: "/faq", priority: "0.6", changefreq: "monthly" as const },
  { path: "/contact", priority: "0.4", changefreq: "yearly" as const },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" as const },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});