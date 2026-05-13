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
      setIsScrolled(window.pageYOffset > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On home page, transparent until scroll. On subpages, solid or blurred background.
  const navBackground = isHomePage 
    ? (isScrolled ? "bg-[#2E2370]/95 backdrop-blur-lg shadow-xl" : "bg-transparent")
    : "bg-[#2E2370] shadow-lg";

  const navPadding = isScrolled ? "py-2" : "py-4";

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
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${navPadding}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white p-1 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <img src="/assets/logo.png" alt="GD Convent" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0">
                <h1
                  className={`${textColor} truncate`}
                  style={{ fontSize: 'clamp(0.875rem, 4vw, 1.125rem)', fontWeight: 700, lineHeight: 1.1 }}
                >
                  G.D. Convent
                </h1>
                <p
                  className="text-white/70 truncate"
                  style={{ fontSize: 'clamp(0.5rem, 2vw, 0.65rem)', letterSpacing: '0.05em', textTransform: 'uppercase' }}
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
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          x: isMobileMenuOpen ? 0 : "100%",
          pointerEvents: isMobileMenuOpen ? "auto" : "none"
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 top-0 bg-[#2E2370]/95 backdrop-blur-xl z-[60] md:hidden overflow-y-auto"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white p-1">
                <img src="/assets/logo.png" alt="GD Convent" className="w-full h-full object-contain" />
              </div>
              <h1 className="text-white font-bold text-lg">G.D. Convent</h1>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="p-8 space-y-4">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : 20 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-4 text-3xl font-light transition-colors ${
                    location.pathname === link.href ? "text-[#F4E21A] font-medium" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="pt-8"
            >
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAdmissionOpen(true);
                }}
                size="lg"
                className="w-full h-16 bg-[#F4E21A] hover:bg-white text-[#2E2370] font-bold rounded-2xl text-xl shadow-xl transition-all active:scale-95"
              >
                Apply Now
              </Button>
            </motion.div>

            <div className="pt-12 grid grid-cols-2 gap-4">
              <a href="tel:+919991540996" className="flex flex-col items-center p-4 rounded-2xl bg-white/5 text-white gap-2">
                <Phone className="w-6 h-6 text-[#F4E21A]" />
                <span className="text-xs">Call Us</span>
              </a>
              <a href="mailto:admissions@gdconvent.edu.in" className="flex flex-col items-center p-4 rounded-2xl bg-white/5 text-white gap-2">
                <Mail className="w-6 h-6 text-[#F4E21A]" />
                <span className="text-xs">Email</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Admission Dialog */}
      <AdmissionDialog isOpen={isAdmissionOpen} onClose={() => setIsAdmissionOpen(false)} />
    </>
  );
}
