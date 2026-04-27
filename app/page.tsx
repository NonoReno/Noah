import { Hero } from "@/components/sections/hero";
import { TickerBand } from "@/components/sections/ticker-band";
import { Manifeste } from "@/components/sections/manifeste";
import { Categories } from "@/components/sections/categories";
import { Kinetic } from "@/components/sections/kinetic";
import { BestSellers } from "@/components/sections/bestsellers";
import { HautsBas } from "@/components/sections/hauts-bas";
import { MoodFull } from "@/components/sections/mood-full";
import { Materiaux } from "@/components/sections/materiaux";
import { Temoignages } from "@/components/sections/temoignages";
import { Engagements } from "@/components/sections/engagements";
import { Newsletter } from "@/components/sections/newsletter";
import { SocialGrid } from "@/components/sections/social-grid";
import { Reassurance } from "@/components/sections/reassurance";

export default function Home() {
  return (
    <>
      <Hero />
      <TickerBand />
      <Manifeste />
      <Categories />
      <Kinetic />
      <BestSellers />
      <HautsBas />
      <MoodFull />
      <Materiaux />
      <Temoignages />
      <Engagements />
      <Newsletter />
      <SocialGrid />
      <Reassurance />
    </>
  );
}
