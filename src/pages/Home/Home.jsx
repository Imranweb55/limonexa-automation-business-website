import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Home/Hero";
import TrustMarquee from "../../components/Home/sections/TrustMarquee";
import AutomateShowcase from "../../components/Home/sections/AutomateShowcase";
import LivePipeline from "../../components/Home/sections/LivePipeline";
import BeforeAfter from "../../components/Home/sections/BeforeAfter";
import ResultsNumbers from "../../components/Home/sections/ResultsNumbers";
import IndustriesStrip from "../../components/Home/sections/IndustriesStrip";
import IntegrationsRow from "../../components/Home/sections/IntegrationsRow";
import Testimonials from "../../components/Home/sections/Testimonials";
import TrustedClients from "../../components/Services/TrustedClients";
import HomeCTA from "../../components/Home/sections/HomeCTA";
import Footer from "../../components/Footer/Footer";

function Home() {
  // Smooth scroll applies to the Home page only.
  useEffect(() => {
    document.documentElement.classList.add("home-smooth");
    return () => document.documentElement.classList.remove("home-smooth");
  }, []);

  return (
    <div className="relative w-full min-h-svh bg-bg-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <AutomateShowcase />
        <LivePipeline />
        <BeforeAfter />
        <ResultsNumbers />
        <IndustriesStrip />
        <IntegrationsRow />
        <Testimonials />
        <TrustedClients />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
