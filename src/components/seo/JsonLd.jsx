import { siteConfig } from "@/config/site";

// Organization / ProfessionalService schema. Deliberately not
// MedicalBusiness -- this is a web design service, not a clinic
// (see CLAUDE.md §8).
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description:
      "Custom web design and ongoing site management for med spas and aesthetic clinics in the Raleigh-Durham area.",
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    areaServed: {
      "@type": "Place",
      name: "Raleigh-Durham, North Carolina",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
