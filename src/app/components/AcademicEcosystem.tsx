import { motion } from "motion/react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Baby, Users, Backpack, GraduationCap } from "lucide-react";

const programs = [
  {
    id: "pre-primary",
    label: "Pre-Primary",
    icon: Baby,
    grades: "Nursery - UKG",
    description: "Foundational years focusing on play-based learning, early literacy, and social-emotional development through Montessori-inspired methods.",
    highlights: [
      "Play-based Montessori curriculum",
      "Early literacy & numeracy foundation",
      "Social-emotional skill development",
      "Activity-based learning environment",
    ],
  },
  {
    id: "primary",
    label: "Primary",
    icon: Users,
    grades: "Classes I - V",
    description: "Building strong academic foundations with focus on core subjects, creative arts, and physical education while nurturing curiosity and love for learning.",
    highlights: [
      "NCERT curriculum with enhanced methodology",
      "Introduction to digital literacy",
      "Co-curricular activities integration",
      "Skill-based assessment approach",
    ],
  },
  {
    id: "middle",
    label: "Middle School",
    icon: Backpack,
    grades: "Classes VI - VIII",
    description: "Critical thinking and problem-solving skills development with introduction to advanced sciences, mathematics, and languages.",
    highlights: [
      "STEM education integration",
      "Project-based learning approach",
      "Life skills & leadership training",
      "Competitive exam preparation foundation",
    ],
  },
  {
    id: "senior",
    label: "Senior Secondary",
    icon: GraduationCap,
    grades: "Classes IX - XII",
    description: "Comprehensive CBSE board preparation with specialization in Science, Commerce, and Humanities streams, preparing students for higher education.",
    highlights: [
      "Stream specialization (Science/Commerce/Arts)",
      "Advanced CBSE curriculum",
      "Entrance exam coaching (JEE/NEET/CUET)",
      "Career counseling & university guidance",
    ],
  },
];

export function AcademicEcosystem() {
  const [activeTab, setActiveTab] = useState("pre-primary");

  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#114BFF] tracking-[0.2em] uppercase mb-4">
            Complete Learning Journey
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, color: '#081B33' }}>
            Academic Ecosystem
          </h2>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto mb-12">
            {programs.map((program) => (
              <TabsTrigger
                key={program.id}
                value={program.id}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-[#081B33]/10 data-[state=active]:border-[#114BFF] data-[state=active]:bg-[#114BFF]/5 transition-all duration-300 hover:border-[#114BFF]/50"
              >
                <program.icon className="w-8 h-8 text-[#114BFF]" />
                <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{program.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {programs.map((program) => (
            <TabsContent key={program.id} value={program.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-[#114BFF]/10 text-[#114BFF] mb-6" style={{ fontWeight: 600 }}>
                    {program.grades}
                  </div>

                  <h3 className="text-[#081B33] mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>
                    {program.label}
                  </h3>

                  <p className="text-[#4B5563] mb-8 leading-relaxed" style={{ fontSize: '1.125rem' }}>
                    {program.description}
                  </p>

                  <div className="space-y-3">
                    {program.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#114BFF]" />
                        <p className="text-[#4B5563]">{highlight}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#114BFF]/10 to-[#D4A64A]/10 p-12 flex items-center justify-center">
                    <program.icon className="w-full h-full text-[#114BFF]/20" strokeWidth={0.5} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#114BFF]/5 to-transparent rounded-3xl" />
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
