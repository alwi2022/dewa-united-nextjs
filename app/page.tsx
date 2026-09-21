import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Honours from "@/components/Honours";
import Fixtures from "@/components/Fixtures";
import Merchandise from "@/components/Merchandise";
import MotionEffects from "@/components/MotionEffects";
import News from "@/components/News";
import Partners from "@/components/Partners";
import SportTabs from "@/components/SportTabs";
import Teams from "@/components/Teams";
import Videos from "@/components/Videos";

export default function HomePage() {
  return (
    <>
      <MotionEffects />
      <Header />
      <main>
        <Hero />
        <SportTabs />
        <Fixtures />
        <News />
        <Videos />
        <Teams />
        <Honours />
        <Merchandise />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
