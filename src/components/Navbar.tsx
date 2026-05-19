import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";

interface NavLink {
  label: string;
  href: string;
  hash?: string;
  dropdown?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Notre engagement", href: "/#engagement", hash: "engagement" },
  {
    label: "Succursales",
    href: "#",
    dropdown: [
      { label: "Mont-Royal", href: "/succursale/mont-royal" },
      { label: "Masson", href: "/succursale/masson" },
      { label: "Rachel", href: "/succursale/rachel" },
    ],
  },
  { label: "Contact", href: "#contact", hash: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const handleHashClick = (hash: string) => {
    // If on a branch page, scroll to the hash on the current page
    if (location.pathname.startsWith("/succursale") && hash === "contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // If on home page, scroll to engagement
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // Navigate to home page with hash
    navigate(`/#${hash}`);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return false;
    if (href.startsWith("/succursale")) {
      return location.pathname.startsWith("/succursale");
    }
    return location.pathname === href;
  };

  const isBranchActive = (href: string) => {
    return location.pathname === href;
  };

  const isHome = location.pathname === "/";
  const linkTextColor = scrolled || !isHome ? "text-dark-text" : "text-white";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : isHome
          ? "bg-transparent"
          : "bg-white/80 backdrop-blur-sm",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-1 lg:flex-none text-center lg:text-left">
            <h1
              className={cn(
                "font-heading text-xl md:text-2xl font-bold tracking-tight",
                scrolled || !isHome ? "text-orange-accent" : "text-white",
              )}
            >
              Les Co'Pains d'abord
            </h1>
            <p
              className={cn(
                "text-xs hidden sm:block",
                scrolled || !isHome ? "text-gray-text" : "text-white/80",
              )}
            >
              3 boulangeries artisanales à Montréal
            </p>
          </Link>

          {/* Spacer for mobile */}
          <div className="lg:hidden w-10" />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-md",
              scrolled || !isHome
                ? "text-gray-600 hover:text-orange-accent"
                : "text-white hover:text-orange-100"
            )}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      onMouseEnter={() => setDropdownOpen(true)}
                      className={cn(
                        "text-sm uppercase tracking-widest font-medium py-2 transition-colors",
                        isActive(link.href)
                          ? "text-orange-accent"
                          : `${linkTextColor} hover:text-orange-accent`,
                      )}
                    >
                      {link.label}
                      <svg
                        className="inline-block w-3 h-3 ml-1 -mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      onMouseLeave={() => setDropdownOpen(false)}
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-200",
                        dropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2",
                      )}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className={cn(
                            "block px-4 py-3 text-sm text-dark-text hover:bg-orange-50 hover:text-orange-accent transition-colors border-b border-gray-100 last:border-0",
                            isBranchActive(item.href) &&
                              "text-orange-accent font-semibold",
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : link.hash ? (
                  <button
                    onClick={() => handleHashClick(link.hash!)}
                    className={cn(
                      "text-sm uppercase tracking-widest font-medium py-2 transition-colors relative",
                      linkTextColor,
                      "hover:text-orange-accent",
                      "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-orange-accent after:transition-all after:duration-300",
                      "after:w-0 hover:after:w-full",
                    )}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "text-sm uppercase tracking-widest font-medium py-2 transition-colors relative",
                      isActive(link.href)
                        ? "text-orange-accent"
                        : `${linkTextColor} hover:text-orange-accent`,
                      "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-orange-accent after:transition-all after:duration-300",
                      isActive(link.href)
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full",
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Spacer for mobile */}
          <div className="lg:hidden w-10" />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 overflow-hidden",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="space-y-1">
                <span className="block px-3 py-2 text-sm uppercase tracking-widest font-medium text-dark-text">
                  {link.label}
                </span>
                <div className="pl-4 space-y-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={cn(
                        "block px-3 py-2 text-sm rounded-md transition-colors",
                        isBranchActive(item.href)
                          ? "text-orange-accent bg-orange-50 font-semibold"
                          : "text-gray-text hover:text-orange-accent hover:bg-orange-50",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : link.hash ? (
              <button
                key={link.label}
                onClick={() => handleHashClick(link.hash!)}
                className={cn(
                  "w-full text-left block px-3 py-2 text-sm uppercase tracking-widest font-medium rounded-md transition-colors",
                  "text-dark-text hover:text-orange-accent hover:bg-orange-50",
                )}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "block px-3 py-2 text-sm uppercase tracking-widest font-medium rounded-md transition-colors",
                  isActive(link.href)
                    ? "text-orange-accent bg-orange-50"
                    : "text-dark-text hover:text-orange-accent hover:bg-orange-50",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
