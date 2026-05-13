import { motion } from "motion/react";
import { SubPageHero } from "../components/SubPageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <SubPageHero 
        title="Contact Us" 
        subtitle="We are here to answer your questions and welcome you to our campus."
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2E2370] mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#D9D4E3]/40 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-[#2E2370]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E2370] mb-1">Our Address</h3>
                  <p className="text-[#7A7A7A] leading-relaxed">
                    W7RM+9GW, V.P.O. Nangal Jat, Tehsil Hathin, Distt. Palwal, Palwal, Haryana 121105
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#D9D4E3]/40 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-[#2E2370]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E2370] mb-1">Phone Number</h3>
                  <p className="text-[#7A7A7A] leading-relaxed">+91 99915 40996</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#D9D4E3]/40 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-[#2E2370]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E2370] mb-1">Email Address</h3>
                  <p className="text-[#7A7A7A] leading-relaxed">admissions@gdconvent.edu.in</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#D9D4E3]/40 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-[#2E2370]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E2370] mb-1">Office Hours</h3>
                  <p className="text-[#7A7A7A] leading-relaxed">Mon - Sat: 8:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-[#2E2370] mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {/* Social icons could go here */}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-[#2E2370]/5"
          >
            <h2 className="text-3xl font-bold text-[#2E2370] mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2E2370] mb-2">Your Name</label>
                  <input type="text" className="w-full px-5 py-3 rounded-xl border border-[#D9D4E3] focus:outline-none focus:ring-2 focus:ring-[#4A3C8C] transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2E2370] mb-2">Email Address</label>
                  <input type="email" className="w-full px-5 py-3 rounded-xl border border-[#D9D4E3] focus:outline-none focus:ring-2 focus:ring-[#4A3C8C] transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2E2370] mb-2">Subject</label>
                <input type="text" className="w-full px-5 py-3 rounded-xl border border-[#D9D4E3] focus:outline-none focus:ring-2 focus:ring-[#4A3C8C] transition-all" placeholder="Admission Inquiry" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2E2370] mb-2">Message</label>
                <textarea rows={5} className="w-full px-5 py-3 rounded-xl border border-[#D9D4E3] focus:outline-none focus:ring-2 focus:ring-[#4A3C8C] transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-4 bg-[#2E2370] text-white font-bold rounded-xl hover:bg-[#4A3C8C] transition-all shadow-lg">
                Submit Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-4xl overflow-hidden shadow-2xl h-[500px] border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.847526719927!2d77.212211375497!3d28.029055975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d453000000001%3A0xc0c838e55e054b0!2sG.D.%20Convent%20Sr.%20Sec.%20School!5e0!3m2!1sen!2sin!4v1715580000000!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="G.D. Convent International School Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
