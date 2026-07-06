import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom";
import { routes } from "@/router";

export { routeMeta, notFoundMeta, absoluteUrl } from "@/lib/routeMeta";
export { siteConfig } from "@/config/site";

export async function render(path) {
  // Matches the basename createBrowserRouter uses in App.jsx, so links in
  // the prerendered HTML resolve correctly when the site is served from a
  // sub-path (e.g. the GitHub Pages preview at /MD-Web-Design/).
  const basename = import.meta.env.BASE_URL;
  const { query, dataRoutes } = createStaticHandler(routes, { basename });

  // createStaticHandler strips basename from the request URL before
  // matching, so the URL passed in has to include it (mirrors how the
  // browser's actual pathname includes it when served from a sub-path).
  const requestUrl = `${basename.replace(/\/$/, "")}${path}` || "/";
  const request = new Request(new URL(requestUrl, "http://localhost"));
  const context = await query(request);

  if (context instanceof Response) {
    throw context;
  }

  const router = createStaticRouter(dataRoutes, context);
  return renderToString(
    <StaticRouterProvider router={router} context={context} />
  );
}
