import Image from "next/image";
import Hero from "./_components/Home/Hero";
import WelcomeSection from "./_components/Home/WelcomeSection";
import SmallTeamSection from "./_components/Home/SmallTeamSection";
import FeaturedSection from "./_components/Home/FeaturedSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WelcomeSection />
      <SmallTeamSection />
      <FeaturedSection />
    </main>
  );
}
