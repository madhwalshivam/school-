import { motion } from "motion/react";
import { Rocket, Heart, Globe } from "lucide-react";

const pillars = [
  {
    icon: Rocket,
    title: "Future-Ready Education",
    description: "Cutting-edge curriculum integrating STEM, AI, robotics, and digital literacy preparing students for tomorrow's challenges.",
  },
  {
    icon: Heart,
    title: "Character & Leadership",
    description: "Holistic development focusing on values, ethics, emotional intelligence, and leadership skills for life.",
  },
  {
    icon: Globe,
    title: "Global Ecosystem",
    description: "International exposure, cultural exchange programs, and partnerships preparing students for global citizenship.",
  },
];

export function WhySection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#F7F7F7] to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#4A3C8C] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#F4E21A] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#4A3C8C] tracking-[0.2em] uppercase mb-4 font-bold">
            Our Foundation
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, color: '#2E2370' }}>
            Why G.D. Convent International School
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-[#4A3C8C]/10 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A3C8C] to-[#2E2370] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-[#2E2370] mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                  {pillar.title}
                </h3>

                <p className="text-[#7A7A7A] leading-relaxed">
                  {pillar.description}
                </p>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#4A3C8C] to-[#F4E21A] group-hover:w-full transition-all duration-500 rounded-b-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
