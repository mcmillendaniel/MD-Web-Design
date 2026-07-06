import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { routes } from "@/router";

const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* Cookieless, no personal data, so no consent banner needed (spec
          §11). Only reports once deployed on Vercel; a no-op elsewhere. */}
      <Analytics />
    </>
  );
}
