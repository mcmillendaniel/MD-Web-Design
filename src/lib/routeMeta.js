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
      "MD Web Design is a solo studio based in Raleigh, North Carolina, serving med spas and aesthetic clinics across the Raleigh and Durham area.",
    path: "/about",
  },
  "/contact": {
    title: "Contact | MD Web Design",
    description:
      "Book a consult with MD Web Design to talk about a custom website for your med spa or aesthetic clinic.",
    path: "/contact",
  },
};

// Meta for the 404 page. Not part of routeMeta (it isn't a crawlable route);
// prerender.js writes it to 404.html and the "*" route renders it in-app.
export const notFoundMeta = {
  title: "Page not found | MD Web Design",
  description: "The page you are looking for could not be found.",
  path: "/404",
  noindex: true,
};

export function absoluteUrl(path) {
  // Join rather than resolve: a leading "/" in `path` would otherwise
  // override any sub-path in siteConfig.url (e.g. a GitHub Pages preview
  // served from /repo-name/), dropping it from the result.
  const base = siteConfig.url.endsWith("/") ? siteConfig.url : `${siteConfig.url}/`;
  return new URL(path.replace(/^\//, ""), base).toString();
}
