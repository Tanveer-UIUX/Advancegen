import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import UseCasesSection from "@/components/UseCasesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import LetsTalkSection from "@/components/LetsTalkSection";

export default function Home() {
  return (
    <div className="gradient-page min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SolutionsSection />
        <UseCasesSection />
        <HowItWorksSection />
        <WhoWeAreSection />
        <LetsTalkSection />
      </main>
    </div>
  );
}
