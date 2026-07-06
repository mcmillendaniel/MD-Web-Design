// TODO(domain): replace with the real production domain once acquired.
// Keeping this env-driven means pointing the site at the real domain later
// is a config change, not a find-and-replace (see CLAUDE.md §4).
const SITE_URL = import.meta.env.VITE_SITE_URL || "https://REPLACE-ME.example";

export const siteConfig = {
  name: "MD Web Design",
  tagline: "Web Design for Aesthetic Clinics",
  url: SITE_URL,
  contactEmail: "mdwebdesignllc@gmail.com",
  sampleBuildUrl: "https://luxe-aesthetic.vercel.app/",
  locale: "en_US",
};
