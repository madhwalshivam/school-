import { motion } from "motion/react";
import { SubPageHero } from "../components/SubPageHero";
import { BookOpen, Users, Lightbulb, Trophy } from "lucide-react";

const programs = [
  {
    title: "Pre-Primary",
    age: "3-5 Years",
    description: "Play-based learning focusing on social, emotional, and foundational literacy skills.",
    icon: Users,
    color: "#4A3C8C"
  },
  {
    title: "Primary School",
    age: "6-10 Years",
    description: "Inquiry-led curriculum that builds strong foundations in core subjects.",
    icon: BookOpen,
    color: "#2E2370"
  },
  {
    title: "Middle School",
    age: "11-13 Years",
    description: "Transitioning to deeper subject expertise and critical thinking.",
    icon: Lightbulb,
    color: "#F4E21A"
  },
  {
    title: "Senior Secondary",
    age: "14-18 Years",
    description: "Preparing students for university and global careers with specialized streams.",
    icon: Trophy,
    color: "#4A3C8C"
  }
];

export default function Academics() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <SubPageHero 
        title="Academic Excellence" 
        subtitle="Empowering students with a future-ready curriculum and innovative teaching methodologies."
        backgroundImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2112&auto=format&fit=crop"
      />

      {/* Programs Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-[#2E2370]/5 hover:border-[#4A3C8C]/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${program.color}20` }}>
                <program.icon className="w-8 h-8" style={{ color: program.color }} />
              </div>
              <h3 className="text-2xl font-bold text-[#2E2370] mb-2">{program.title}</h3>
              <p className="text-[#4A3C8C] font-semibold mb-4">{program.age}</p>
              <p className="text-[#7A7A7A] leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curriculum Details */}
      <section className="py-24 bg-[#D9D4E3]/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#2E2370] mb-8">World-Class <span className="text-[#4A3C8C]">CBSE Curriculum</span></h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F4E21A] mt-3 flex-shrink-0" />
                <p className="text-lg text-[#7A7A7A]">Holistic development focusing on academics, sports, and arts.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F4E21A] mt-3 flex-shrink-0" />
                <p className="text-lg text-[#7A7A7A]">Integrated STEM labs and digital classrooms for immersive learning.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F4E21A] mt-3 flex-shrink-0" />
                <p className="text-lg text-[#7A7A7A]">Strong emphasis on value-based education and social skills.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F4E21A] mt-3 flex-shrink-0" />
                <p className="text-lg text-[#7A7A7A]">Regular assessments and personalized feedback for every child.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2112&auto=format&fit=crop" 
                alt="Academics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#F4E21A] p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-[#2E2370] font-bold text-2xl">100%</p>
              <p className="text-[#2E2370]/70 font-semibold">Board Results</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
