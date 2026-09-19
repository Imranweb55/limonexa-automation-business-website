import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Home/Hero";
import CursorEffect from "../../components/CursorEffect/CursorEffect";
import ProblemSection from "../../components/Home/ProblemSection";
import SolutionSection from "../../components/Home/SolutionSection";
import ProcessSection from "../../components/Home/ProcessSection";
import AutomationInAction from "../../components/Home/AutomationInAction";
import WhatWeAutomate from "../../components/Home/WhatWeAutomate";
import IndustriesSection from "../../components/Home/IndustriesSection";
import ResultsSection from "../../components/Home/ResultsSection";
import CTASection from "../../components/Home/CTASection";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="relative w-full min-h-svh bg-bg-primary overflow-x-hidden">
      <CursorEffect />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <AutomationInAction />
        <WhatWeAutomate />
        <IndustriesSection />
        <ResultsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
