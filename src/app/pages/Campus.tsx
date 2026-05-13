import { motion } from "motion/react";
import { SubPageHero } from "../components/SubPageHero";

const facilities = [
  {
    title: "Smart Classrooms",
    description: "Equipped with the latest digital tools for interactive learning.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2064&auto=format&fit=crop"
  },
  {
    title: "Modern Science Labs",
    description: "Advanced physics, chemistry, and biology labs for hands-on experiments.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Sports Complex",
    description: "Multiple courts for basketball, badminton, and a large playground.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop"
  },
  {
    title: "Library & Media Center",
    description: "A vast collection of books and digital resources to inspire readers.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Campus() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <SubPageHero 
        title="World-Class Campus" 
        subtitle="State-of-the-art facilities designed to provide an inspiring environment for every student."
        backgroundImage="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Facilities Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E2370] mb-4">Our Facilities</h2>
          <div className="w-20 h-1 bg-[#F4E21A] mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl h-[400px] shadow-xl"
            >
              <img 
                src={facility.image} 
                alt={facility.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2370] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="text-3xl font-bold text-white mb-3">{facility.title}</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Transport */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#2E2370] mb-8">Safe & Reliable <span className="text-[#4A3C8C]">Transport</span></h2>
            <p className="text-[#7A7A7A] text-lg mb-8 leading-relaxed">
              We provide a comprehensive fleet of buses covering all major areas in Palwal and surrounding villages. Our transport system is equipped with GPS tracking and trained attendants to ensure maximum safety.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#D9D4E3]/30 border border-[#2E2370]/10">
                <p className="font-bold text-[#2E2370]">GPS Tracking</p>
                <p className="text-[#7A7A7A]">Real-time monitoring</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#D9D4E3]/30 border border-[#2E2370]/10">
                <p className="font-bold text-[#2E2370]">CCTV Enabled</p>
                <p className="text-[#7A7A7A]">Safe environment</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[400px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=2070&auto=format&fit=crop" 
              alt="Transport" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
