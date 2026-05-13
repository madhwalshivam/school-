import { motion } from "motion/react";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  about: [
    { label: "Our Story", href: "#" },
    { label: "Leadership Team", href: "#" },
    { label: "Infrastructure", href: "#" },
    { label: "Awards & Recognition", href: "#" },
  ],
  academics: [
    { label: "Curriculum", href: "#" },
    { label: "Pre-Primary", href: "#" },
    { label: "Primary & Middle", href: "#" },
    { label: "Senior Secondary", href: "#" },
  ],
  campus: [
    { label: "Facilities", href: "#" },
    { label: "Virtual Tour", href: "#" },
    { label: "Safety & Security", href: "#" },
    { label: "Transport", href: "#" },
  ],
  connect: [
    { label: "Admissions", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Alumni", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#2E2370] text-white pt-20 pb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A3C8C] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4E21A] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shadow-lg shadow-black/20">
                <img src="/assets/logo.png" alt="GD Convent" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>
                  G.D. Convent
                </h3>
                <p className="text-[#F4E21A] font-bold tracking-widest text-xs uppercase">
                  International School
                </p>
              </div>
            </div>
            <p className="text-white/70 mb-8 leading-relaxed italic border-l-2 border-[#F4E21A] pl-4">
              "Nurturing Excellence, Inspiring Futures." Building Palwal's next generation of global citizens through
              a blend of tradition and modern innovation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F4E21A] flex-shrink-0 mt-1" />
                <p className="text-white/70">
                  W7RM+9GW, V.P.O. Nangal Jat, Tehsil Hathin, Distt. Palwal, Palwal, Haryana 121105
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F4E21A] flex-shrink-0" />
                <p className="text-white/70">+91 99915 40996</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F4E21A] flex-shrink-0" />
                <p className="text-white/70">admissions@gdconvent.edu.in</p>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="mb-4" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                About
              </h4>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#F4E21A] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Academics
              </h4>
              <ul className="space-y-2">
                {footerLinks.academics.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#F4E21A] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Campus
              </h4>
              <ul className="space-y-2">
                {footerLinks.campus.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#F4E21A] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Connect
              </h4>
              <ul className="space-y-2">
                {footerLinks.connect.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-[#F4E21A] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Campus Map Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Visit Our Campus
              </h4>
              <p className="text-white/70">
                Experience our world-class facilities in Nangal Jat, Palwal
              </p>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://share.google/FwG38yMWIYHbjFBAa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#F4E21A] hover:bg-[#e5d419] text-[#2E2370] transition-colors duration-300 inline-block font-bold"
              >
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/70">
              © 2026 G.D. Convent International School. All rights reserved. | CBSE Affiliation No: 531258
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#F4E21A] hover:text-[#2E2370] backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
