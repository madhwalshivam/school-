import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { AdmissionDialog } from "./AdmissionDialog";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Campus", href: "/campus" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On home page, transparent until scroll. On subpages, solid or blurred background.
  const navBackground = isHomePage 
    ? (isScrolled ? "bg-[#2E2370] shadow-lg" : "bg-transparent")
    : "bg-[#2E2370] shadow-lg";

  const textColor = "text-white"; // Always white on dark purple background

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}
      >
        {/* Top Bar (visible when not scrolled on home, or always on subpages) */}
        {(!isScrolled || !isHomePage) && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: (isScrolled && isHomePage) ? 0 : 1 }}
            className="hidden md:block bg-[#1a1442] text-white/90 py-2 border-b border-white/5"
          >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F4E21A]" />
                  <span>+91 99915 40996</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#F4E21A]" />
                  <span>admissions@gdconvent.edu.in</span>
                </div>
              </div>
              <p className="text-[#F4E21A] font-medium tracking-wide">CBSE Affiliation No: 531258</p>
            </div>
          </motion.div>
        )}

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <img src="/assets/logo.png" alt="GD Convent" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1
                  className={`${textColor}`}
                  style={{ fontSize: '1.125rem', fontWeight: 700, lineHeight: 1.1 }}
                >
                  G.D. Convent
                </h1>
                <p
                  className="text-white/70"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  International School
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`transition-all duration-300 hover:text-[#F4E21A] text-sm font-semibold ${textColor} ${
                    location.pathname === link.href ? "text-[#F4E21A]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => setIsAdmissionOpen(true)}
                size="sm"
                className="bg-[#F4E21A] hover:bg-[#e5d419] text-[#2E2370] border-none rounded-full px-5 font-bold h-9"
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${textColor} hover:bg-white/10`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 top-[60px] bg-[#2E2370] z-40 md:hidden overflow-y-auto"
        >
          <div className="p-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block transition-colors py-4 border-b border-white/10 text-lg font-medium ${
                  location.pathname === link.href ? "text-[#F4E21A]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsAdmissionOpen(true);
              }}
              size="lg"
              className="w-full bg-[#F4E21A] hover:bg-[#e5d419] text-[#2E2370] font-bold rounded-xl"
            >
              Apply Now
            </Button>
          </div>
        </motion.div>
      )}

      {/* Admission Dialog */}
      <AdmissionDialog isOpen={isAdmissionOpen} onClose={() => setIsAdmissionOpen(false)} />
    </>
  );
}
