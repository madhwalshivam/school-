import { motion } from "motion/react";
import { Award, GraduationCap, MapPin, Building2 } from "lucide-react";

const stats = [
  { icon: Building2, label: "Established", value: "2004" },
  { icon: Award, label: "Affiliation", value: "CBSE Board" },
  { icon: GraduationCap, label: "Classes", value: "Nursery–XII" },
  { icon: MapPin, label: "Location", value: "Palwal, Haryana" },
];

export function TrustStrip() {
  return (
    <section className="relative py-20 bg-[#F7F7F7] border-b border-[#2E2370]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-4 group-hover:bg-[#4A3C8C] transition-all duration-300 shadow-sm">
                <stat.icon className="w-8 h-8 text-[#2E2370] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-[#7A7A7A] mb-1 tracking-wide">{stat.label}</p>
              <p className="text-[#2E2370] tracking-tight" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12 pt-12 border-t border-[#2E2370]/10"
        >
          <p className="text-[#7A7A7A]">
            <span className="text-[#2E2370] font-bold">CBSE Affiliation No:</span> 531258 | 
            <span className="ml-2 text-[#4A3C8C] font-bold">Smart Campus</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
