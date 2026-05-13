import { motion } from "motion/react";
import { Award, Globe2, TrendingUp, Target } from "lucide-react";

const timeline = [
  {
    year: "2004-2015",
    title: "Foundation & Excellence",
    description: "Established CBSE curriculum with focus on academic excellence and holistic development",
    icon: Award,
  },
  {
    year: "2015-2024",
    title: "Digital Transformation",
    description: "Integrated smart classrooms, robotics, AI labs, and comprehensive digital infrastructure",
    icon: TrendingUp,
  },
  {
    year: "2024-2026",
    title: "International Standards",
    description: "Aligning pedagogy with global best practices, teacher training in IB/Cambridge methodologies",
    icon: Globe2,
  },
  {
    year: "2027+",
    title: "Global Curriculum",
    description: "Planned expansion to IB PYP/MYP/DP and Cambridge IGCSE programs for comprehensive international education",
    icon: Target,
  },
];

export function InternationalVision() {
  return (
    <section className="relative py-32 bg-[#081B33] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#114BFF] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4A64A] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#D4A64A] tracking-[0.2em] uppercase mb-4">
            Our Journey Forward
          </p>
          <h2 className="text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1 }}>
            Path to International Excellence
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            From CBSE excellence to global curriculum integration — building bridges between Indian values and international standards
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#114BFF] via-[#D4A64A] to-[#114BFF] hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-block px-4 py-1 rounded-full bg-[#D4A64A]/20 text-[#D4A64A] mb-4" style={{ fontWeight: 600 }}>
                    {item.year}
                  </div>
                  <h3 className="text-white mb-3" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Icon Circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#114BFF] to-[#0D3DD9] flex items-center justify-center border-4 border-[#081B33] shadow-2xl">
                    <item.icon className="w-9 h-9 text-white" />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#114BFF] blur-xl opacity-30 -z-10" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-white/90 mb-6" style={{ fontSize: '1.125rem' }}>
            Be part of this transformative journey towards world-class education
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Globe2 className="w-5 h-5 text-[#D4A64A]" />
            <span className="text-white" style={{ fontWeight: 600 }}>Global Partnerships in Progress</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
