import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@/router";

const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });

export function App() {
  return <RouterProvider router={router} />;
}
