import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FounderVision() {
  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Founder Portrait"
                className="w-full h-full object-cover"
              />
              {/* Yellow Accent Frame */}
              <div className="absolute inset-0 border-4 border-[#F4E21A] opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F4E21A] rounded-full blur-2xl opacity-30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#4A3C8C] tracking-[0.2em] uppercase mb-4 font-bold">
              Leadership & Vision
            </p>

            <h2 className="text-[#2E2370] mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}>
              Founder's Vision
            </h2>

            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-2 w-12 h-12 text-[#F4E21A] opacity-20" />
              <blockquote className="relative pl-8 border-l-4 border-[#F4E21A]">
                <p className="text-[#2E2370] mb-6 leading-relaxed" style={{ fontSize: '1.25rem', fontWeight: 500, fontStyle: 'italic' }}>
                  "Education is not preparation for life; education is life itself. Our mission is to create
                  an environment where every child discovers their potential and becomes a responsible global citizen."
                </p>
                <footer className="text-[#7A7A7A]">
                  <p style={{ fontWeight: 600, color: '#2E2370' }}>Dr. G.D. Sharma</p>
                  <p>Founder & Chairman</p>
                </footer>
              </blockquote>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#4A3C8C] rounded-full mt-2 flex-shrink-0" />
                <p className="text-[#7A7A7A] leading-relaxed">
                  Established in 2004 with a vision to provide world-class education accessible to all
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#4A3C8C] rounded-full mt-2 flex-shrink-0" />
                <p className="text-[#7A7A7A] leading-relaxed">
                  Pioneer in integrating technology and traditional values in Indian education
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#4A3C8C] rounded-full mt-2 flex-shrink-0" />
                <p className="text-[#7A7A7A] leading-relaxed">
                  Leading the transformation towards international curriculum standards
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
