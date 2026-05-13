import { motion } from "motion/react";
import { SubPageHero } from "../components/SubPageHero";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <SubPageHero 
        title="Our Legacy" 
        subtitle="Since 2004, G.D. Convent International School has been a beacon of quality education in Palwal, Haryana."
        backgroundImage="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-[#D9D4E3]/20 border border-[#2E2370]/10"
          >
            <h2 className="text-3xl font-bold text-[#2E2370] mb-6">Our Mission</h2>
            <p className="text-[#7A7A7A] leading-relaxed text-lg">
              To provide a nurturing environment that fosters academic excellence, character development, and global perspectives. We strive to empower our students with the skills and knowledge needed to excel in an ever-changing world.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-[#F4E21A]/10 border border-[#F4E21A]/20"
          >
            <h2 className="text-3xl font-bold text-[#2E2370] mb-6">Our Vision</h2>
            <p className="text-[#7A7A7A] leading-relaxed text-lg">
              To be a premier institution recognized for its commitment to holistic education, innovation, and social responsibility. We envision our graduates as compassionate leaders who contribute positively to society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="assets/school.png"
                alt="History"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#2E2370] mb-8">Two Decades of <span className="text-[#4A3C8C]">Nurturing Minds</span></h2>
              <div className="space-y-6 text-[#7A7A7A] text-lg">
                <p>
                  G.D. Convent International School was founded with a clear vision: to bring world-class education to the heart of Haryana. Over the past 20 years, we have grown from a small institution to a sprawling campus that serves thousands of students.
                </p>
                <p>
                  Our journey has been marked by continuous innovation in teaching methodologies, state-of-the-art infrastructure development, and a steadfast commitment to our core values.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div>
                    <h3 className="text-3xl font-bold text-[#2E2370]">20+</h3>
                    <p className="text-[#4A3C8C] font-semibold">Years of Excellence</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#2E2370]">5000+</h3>
                    <p className="text-[#4A3C8C] font-semibold">Alumni Worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
