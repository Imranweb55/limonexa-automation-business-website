import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Home/Hero";
import CursorEffect from "../../components/CursorEffect/CursorEffect";
import Challenges from "../../components/Home/sections/Challenges";
import ResultsNumbers from "../../components/Home/sections/ResultsNumbers";
import IntegrationsRow from "../../components/Home/sections/IntegrationsRow";
import Testimonials from "../../components/Home/sections/Testimonials";
import Footer from "../../components/Footer/Footer";

function Home() {
  // Smooth scroll applies to the Home page only.
  useEffect(() => {
    document.documentElement.classList.add("home-smooth");
    return () => document.documentElement.classList.remove("home-smooth");
  }, []);

  return (
    <div className="relative w-full min-h-svh bg-bg-primary overflow-x-hidden">
      <CursorEffect />
      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <ResultsNumbers />
        <IntegrationsRow />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
