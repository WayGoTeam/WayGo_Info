import { AboutVisionSection } from "./components/AboutVisionSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { MetricsSection } from "./components/MetricsSection";
import { Navbar } from "./components/Navbar";
import { SmoothScroll } from "./components/SmoothScroll";
import { TeamSection } from "./components/TeamSection";
import { TechSection } from "./components/TechSection";

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative bg-zinc-950">
        <Navbar />
        <main>
          <HeroSection />
          <AboutVisionSection />
          <MetricsSection />
          <TechSection />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
