import { build } from "vite";
import { mkdir, readFile, readdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const ssrOutDir = path.join(root, "dist-server");

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function injectHead(template, meta, appHtml, absoluteUrl, siteConfig, extraHead = "") {
  const url = absoluteUrl(meta.path);
  const image = absoluteUrl("og-default.png"); // TODO(og-image)

  const headTags = [
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    // A 404 should never be indexed or claim a canonical URL.
    meta.noindex
      ? `<meta name="robots" content="noindex" />`
      : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteConfig.name)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    extraHead,
  ]
    .filter(Boolean)
    .join("\n    ");

  return template
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace("</head>", `${headTags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

// Preload the Playfair latin 500 weight (the hero/LCP display font) so it
// paints fast. The filename is content-hashed, so discover it from the
// built assets and reuse the same base path the built HTML references.
async function buildFontPreload(distDir, template) {
  const baseMatch = template.match(/href="([^"]*\/)assets\/[^"]+\.css"/);
  const assetBase = baseMatch ? baseMatch[1] : "/";
  const assets = await readdir(path.join(distDir, "assets"));
  const font = assets.find((f) =>
    /^playfair-display-latin-500-normal-.*\.woff2$/.test(f)
  );
  if (!font) return "";
  return `<link rel="preload" as="font" type="font/woff2" href="${assetBase}assets/${font}" crossorigin />`;
}

async function buildServerBundle() {
  await build({
    root,
    build: {
      ssr: "src/entry-server.jsx",
      outDir: "dist-server",
      emptyOutDir: true,
      rollupOptions: {
        output: { format: "es", entryFileNames: "entry-server.js" },
      },
    },
  });
}

async function main() {
  console.log("Building SSR bundle...");
  await buildServerBundle();

  const entryPath = path.join(ssrOutDir, "entry-server.js");
  const { render, routeMeta, notFoundMeta, absoluteUrl, siteConfig } =
    await import(`${new URL(`file://${entryPath}`)}?t=${Date.now()}`);

  const template = await readFile(path.join(distDir, "index.html"), "utf-8");
  const fontPreload = await buildFontPreload(distDir, template);

  for (const meta of Object.values(routeMeta)) {
    const appHtml = await render(meta.path);
    const finalHtml = injectHead(
      template,
      meta,
      appHtml,
      absoluteUrl,
      siteConfig,
      fontPreload
    );

    const outPath =
      meta.path === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, meta.path.replace(/^\//, ""), "index.html");

    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, finalHtml, "utf-8");
    console.log(`Prerendered ${meta.path} -> ${path.relative(root, outPath)}`);
  }

  // 404: render an unmatched path (hits the "*" route) and write it to
  // 404.html. Vercel and GitHub Pages both serve this file with a real 404
  // status for unknown paths, so junk paths aren't indexed (spec §7.4).
  const notFoundHtml = await render("/__not_found__");
  const finalNotFound = injectHead(
    template,
    notFoundMeta,
    notFoundHtml,
    absoluteUrl,
    siteConfig,
    fontPreload
  );
  await writeFile(path.join(distDir, "404.html"), finalNotFound, "utf-8");
  console.log("Prerendered 404 -> dist/404.html");

  // robots.txt + sitemap.xml, using the env-driven site URL so they resolve
  // on the preview now and the real domain later (spec §10).
  const routePaths = Object.values(routeMeta).map((m) => m.path);
  const urls = routePaths
    .map(
      (p) =>
        `  <url>\n    <loc>${absoluteUrl(p)}</loc>\n    <changefreq>monthly</changefreq>\n  </url>`
    )
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf-8");

  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl("sitemap.xml")}\n`;
  await writeFile(path.join(distDir, "robots.txt"), robots, "utf-8");
  console.log("Wrote sitemap.xml and robots.txt");

  await rm(ssrOutDir, { recursive: true, force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
