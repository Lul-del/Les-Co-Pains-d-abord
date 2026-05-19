import HeroSlider from "@/components/HeroSlider";
import BranchesSection from "@/components/BranchesSection";
import TeamSection from "@/components/TeamSection";
import EngagementSection from "@/components/EngagementSection";
import JourneySection from "@/components/JourneySection";

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      <BranchesSection />
      <TeamSection />
      <EngagementSection />
      <JourneySection />
    </main>
  );
}
