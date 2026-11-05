import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Shared shell for the inner (non-Home) pages: fixed navbar, content, footer.
function PageLayout({ children }) {
  return (
    <div className="relative w-full min-h-svh bg-bg-primary overflow-x-hidden">
      <Navbar />
      {/* No empty strip under the navbar: the first section's own background
          runs behind it and carries the extra top padding instead. */}
      <main className="[&>section:first-child]:pt-44 [&>div>section:first-child]:pt-44 lg:[&>section:first-child]:pt-60 lg:[&>div>section:first-child]:pt-60">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
