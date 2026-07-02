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
export function Seo({ title, description, path }) {
  useEffect(() => {
    document.title = title;
    setMetaTag("name", "description", description);

    const url = absoluteUrl(path);
    setLinkTag("canonical", url);

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", url);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", siteConfig.name);
  }, [title, description, path]);

  return null;
}
