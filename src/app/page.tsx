import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import ComingSoonSection from "@/components/ComingSoonSection";
import { COMING_SOON_SECTIONS } from "@/lib/constants";

export default function Home() {
  return (
    <div className="gradient-page min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        {COMING_SOON_SECTIONS.map(({ id, label }) => (
          <ComingSoonSection key={id} id={id} label={label} />
        ))}
      </main>
    </div>
  );
}
