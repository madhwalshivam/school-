import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Cpu, Palette, BookOpen, Trophy, Bus, FlaskConical } from "lucide-react";

const facilities = [
  {
    title: "Robotics & AI Lab",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "STEM Center",
    icon: FlaskConical,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80",
    span: "md:col-span-1",
  },
  {
    title: "Sports Arena",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
    span: "md:col-span-1",
  },
  {
    title: "Arts Studio",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Digital Library",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80",
    span: "md:col-span-2",
  },
  {
    title: "Smart Transport",
    icon: Bus,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    span: "md:col-span-1",
  },
];

export function CampusExperience() {
  return (
    <section className="relative py-32 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#4A3C8C] tracking-[0.2em] uppercase mb-4 font-bold">
            World-Class Infrastructure
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, color: '#2E2370' }}>
            Campus Experience
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-4 gap-4 auto-rows-[200px]">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${facility.span} relative group overflow-hidden rounded-3xl cursor-pointer`}
            >
              {/* Image */}
              <ImageWithFallback
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2370] via-[#2E2370]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-[#4A3C8C] transition-all duration-300">
                  <facility.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white group-hover:text-[#F4E21A] transition-colors duration-300" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {facility.title}
                </h3>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-[#4A3C8C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
