import { Link } from "react-router-dom";
import { Seo } from "@/components/seo/Seo";
import { notFoundMeta } from "@/lib/routeMeta";
import { Button } from "@/components/ui/button";

// Neutral wayfinding (spec §7.4): no "under maintenance" / "doesn't exist"
// phrasing. Prerendered to 404.html so the host serves a real 404 status.
export function NotFound() {
  return (
    <>
      <Seo {...notFoundMeta} />
      <section className="site-container flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="text-[32px] font-medium text-navy md:text-4xl">
          We could not find that page.
        </h1>
        <p className="mx-auto mt-6 max-w-[45ch] text-[17px] leading-relaxed text-slate">
          The page you were looking for is not here. Let us get you back on
          track.
        </p>
        <div className="mt-10">
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
