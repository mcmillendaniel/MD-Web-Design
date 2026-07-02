import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom";
import { routes } from "@/router";

export { routeMeta, absoluteUrl } from "@/lib/routeMeta";
export { siteConfig } from "@/config/site";

export async function render(path) {
  const { query, dataRoutes } = createStaticHandler(routes);
  const request = new Request(new URL(path, "http://localhost"));
  const context = await query(request);

  if (context instanceof Response) {
    throw context;
  }

  const router = createStaticRouter(dataRoutes, context);
  return renderToString(
    <StaticRouterProvider router={router} context={context} />
  );
}
