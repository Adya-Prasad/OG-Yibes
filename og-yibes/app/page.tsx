import { SiteHeader } from "@/components/SiteHeader";
import { EventCarousel } from "@/components/home/EventCarousel";
import { FAQ } from "@/components/home/FAQ";
import { HeroSection } from "@/components/home/HeroSection";
import { InfoSection } from "@/components/home/InfoSection";
import { MediaShowcase } from "@/components/home/MediaShowcase";
import { SiteFooter } from "@/components/home/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <MediaShowcase />
        <EventCarousel />
        <InfoSection />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}
