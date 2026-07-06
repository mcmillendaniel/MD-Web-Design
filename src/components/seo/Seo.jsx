import { useEffect } from "react";
import { absoluteUrl } from "@/lib/routeMeta";
import { siteConfig } from "@/config/site";

function setMetaTag(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Keeps document head in sync on client-side route changes. The initial
// HTML crawlers see is written directly by scripts/prerender.js from the
// same routeMeta source, so this effect is a no-op for that first paint.
export function Seo({ title, description, path, noindex = false }) {
  useEffect(() => {
    document.title = title;
    setMetaTag("name", "description", description);
    setMetaTag("name", "robots", noindex ? "noindex" : "index, follow");

    const url = absoluteUrl(path);
    setLinkTag("canonical", url);

    // TODO(og-image): swap og-default.png for a McMillen-supplied image.
    const image = absoluteUrl("og-default.png");

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", url);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", siteConfig.name);
    setMetaTag("property", "og:image", image);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", image);
  }, [title, description, path, noindex]);

  return null;
}
