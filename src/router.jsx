import { Layout } from "@/components/layout/Layout";
import { Home } from "@/routes/Home";
import { About } from "@/routes/About";
import { Contact } from "@/routes/Contact";
import { NotFound } from "@/routes/NotFound";

// Plain route config, shared by the browser router (App.jsx) and the SSR
// static handler (entry-server.jsx). Kept free of createBrowserRouter so
// this module is safe to import in a non-browser (Node SSR) environment.
export const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
