import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CursorEffect from "../CursorEffect/CursorEffect";

// Shared shell for the inner (non-Home) pages: fixed navbar, content, footer.
function PageLayout({ children }) {
  return (
    <div className="relative w-full min-h-svh bg-bg-primary overflow-x-hidden">
      <CursorEffect />
      <Navbar />
      <main className="pt-28 lg:pt-36">{children}</main>
      <Footer />
    </div>
  );
}

export default PageLayout;
