import { Seo } from "@/components/seo/Seo";
import { routeMeta } from "@/lib/routeMeta";
import { Hero } from "@/components/sections/Hero";
import { ProblemPromise } from "@/components/sections/ProblemPromise";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { Process } from "@/components/sections/Process";
import { Proof } from "@/components/sections/Proof";
import { CtaBand } from "@/components/sections/CtaBand";

export function Home() {
  return (
    <>
      <Seo {...routeMeta["/"]} />
      <Hero />
      <ProblemPromise />
      <WhatYouGet />
      <Process />
      <Proof />
      <CtaBand />
    </>
  );
}
