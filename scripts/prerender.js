import { build } from "vite";
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
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

function injectHead(template, meta, appHtml, absoluteUrl, siteConfig) {
  const url = absoluteUrl(meta.path);

  const headTags = [
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteConfig.name)}" />`,
  ].join("\n    ");

  return template
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace("</head>", `${headTags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
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
  const { render, routeMeta, absoluteUrl, siteConfig } = await import(
    `${new URL(`file://${entryPath}`)}?t=${Date.now()}`
  );

  const template = await readFile(path.join(distDir, "index.html"), "utf-8");

  for (const meta of Object.values(routeMeta)) {
    const appHtml = await render(meta.path);
    const finalHtml = injectHead(template, meta, appHtml, absoluteUrl, siteConfig);

    const outPath =
      meta.path === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, meta.path.replace(/^\//, ""), "index.html");

    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, finalHtml, "utf-8");
    console.log(`Prerendered ${meta.path} -> ${path.relative(root, outPath)}`);
  }

  await rm(ssrOutDir, { recursive: true, force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
