import { motion } from "motion/react";
import { TrendingUp, Award, Users, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const results = [
  { label: "Board Pass Rate", value: "100%", icon: Award, color: "#114BFF" },
  { label: "90%+ Scorers", value: "45%", icon: TrendingUp, color: "#D4A64A" },
  { label: "Olympiad Winners", value: "120+", icon: Star, color: "#114BFF" },
  { label: "University Admits", value: "98%", icon: Users, color: "#D4A64A" },
];

const lifeEvents = [
  {
    title: "Annual Day 2026",
    image: "assets/annual.jpg",
    category: "Cultural",
  },
  {
    title: "Sports Championship",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80",
    category: "Athletics",
  },
  {
    title: "International Trip",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80",
    category: "Excursion",
  },
  {
    title: "Art Festival",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&q=80",
    category: "Arts",
  },
];

export function ResultsAndLife() {
  return (
    <section className="relative py-32 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Results Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <p className="text-[#114BFF] tracking-[0.2em] uppercase mb-4">
              Academic Excellence
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, color: '#081B33' }}>
              Results That Speak
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative p-8 rounded-2xl bg-white border-2 border-[#081B33]/5 hover:border-[#114BFF] transition-all duration-300 hover:shadow-2xl group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${result.color}15` }}
                >
                  <result.icon className="w-7 h-7" style={{ color: result.color }} />
                </div>

                <p className="text-[#4B5563] mb-2">{result.label}</p>
                <p style={{ fontSize: '2.5rem', fontWeight: 700, color: result.color }}>
                  {result.value}
                </p>

                {/* Animated Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                  className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
                  style={{ backgroundColor: result.color }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Life */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <p className="text-[#114BFF] tracking-[0.2em] uppercase mb-4">
              Beyond Academics
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, color: '#081B33' }}>
              Vibrant Student Life
            </h2>
          </div>

          {/* Netflix-style Scrolling Cards */}
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {lifeEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex-shrink-0 w-80 snap-start group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] to-transparent opacity-60" />

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm">
                    <span className="text-[#081B33]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      {event.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white group-hover:text-[#D4A64A] transition-colors duration-300" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      {event.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
