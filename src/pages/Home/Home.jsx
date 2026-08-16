import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import CursorEffect from '../../components/CursorEffect/CursorEffect';

function Home() {
  return (
    <div className="relative w-full min-h-svh bg-bg-primary overflow-x-hidden">
      <CursorEffect />
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default Home;
