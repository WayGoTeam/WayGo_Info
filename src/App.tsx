import { AboutVisionSection } from "./components/AboutVisionSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { LiveSection } from "./components/LiveSection";
import { MetricsSection } from "./components/MetricsSection";
import { Navbar } from "./components/Navbar";
import { SmoothScroll } from "./components/SmoothScroll";
import { TeamSection } from "./components/TeamSection";
import { TechSection } from "./components/TechSection";
import { LocaleProvider } from "./i18n/LocaleContext";

export default function App() {
  return (
    <LocaleProvider>
      <SmoothScroll>
        <div className="relative bg-night">
          <Navbar />
          <main>
            <HeroSection />
            <AboutVisionSection />
            <MetricsSection />
            <TechSection />
            <TeamSection />
            <ContactSection />
            <LiveSection />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </LocaleProvider>
  );
}
