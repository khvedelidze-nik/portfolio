import { useState, useEffect } from "react";
import { links } from "./links";
import NavBtn from "./NavBtn";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg/90 border-border border-b shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="mx-auto max-w-full px-4" aria-label="Main navigation">
        <div className="flex h-14 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <a
              href="#hero"
              className="text-accent focus-visible:ring-accent focus-visible:ring-offset-bg -mx-2 rounded-md px-2 py-1 text-lg font-bold tracking-tight focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label="Nikoloz Khvedelidze - Home"
            >
              NK
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link, i) => (
              <NavBtn
                key={i}
                title={link.title}
                path={link.path}
                onClick={closeMobileMenu}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-muted hover:text-text hover:bg-card focus-visible:ring-accent focus-visible:ring-offset-bg inline-flex items-center justify-center rounded-lg p-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:hidden"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
          role="navigation"
          aria-label="Mobile menu"
        >
          <div className="border-border flex flex-col gap-1 border-t pt-2">
            {links.map((link, i) => (
              <NavBtn
                key={i}
                title={link.title}
                path={link.path}
                onClick={closeMobileMenu}
                className="hover:bg-cardHover w-full justify-start rounded-lg border-0 px-4 py-2 text-base"
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
