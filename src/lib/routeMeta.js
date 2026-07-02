import { siteConfig } from "@/config/site";

// Single source of truth for per-route SEO metadata. Read by <Seo> on the
// client (keeps tags in sync across client-side navigation) and by
// scripts/prerender.js on the server (so crawlers see real tags without
// depending on React effects, which never run during renderToString).
export const routeMeta = {
  "/": {
    title: "MD Web Design | Custom Web Design for Med Spas & Aesthetic Clinics",
    description:
      "MD Web Design builds fully custom websites for med spas and aesthetic clinics in the Raleigh and Durham area, then manages them for the long run. No off the shelf themes.",
    path: "/",
  },
  "/about": {
    title: "About | MD Web Design",
    description:
      "MD Web Design is a solo studio based in Garner, North Carolina, serving med spas and aesthetic clinics across the Raleigh and Durham area.",
    path: "/about",
  },
  "/contact": {
    title: "Contact | MD Web Design",
    description:
      "Book a consult with MD Web Design to talk about a custom website for your med spa or aesthetic clinic.",
    path: "/contact",
  },
};

export function absoluteUrl(path) {
  return new URL(path, siteConfig.url).toString();
}
