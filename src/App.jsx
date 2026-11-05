import { useEffect, useState } from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Solutions from './pages/Solutions/Solutions';
import Industries from './pages/Industries/Industries';
import Resources from './pages/Resources/Resources';
import Contact from './pages/Contact/Contact';

// Each nav tab opens its own page (no in-page scrolling to other tabs).
// Any other hash (e.g. #home or none) shows Home.
const PAGES = {
  '#about': About,
  '#services': Services,
  '#solutions': Solutions,
  '#industries': Industries,
  '#resources': Resources,
  '#contact': Contact,
  '#consultation': Contact,
};

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Every page change starts at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hash]);

  // "#services/web" -> Services page, sub-tab "web"
  const [route, sub] = hash.split('/');
  const Page = PAGES[route] || Home;
  return <Page sub={sub} />;
}

export default App;
