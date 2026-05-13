import { motion } from "motion/react";
import { SubPageHero } from "../components/SubPageHero";
import { ClipboardList, UserCheck, MessageSquare, CreditCard } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Application",
    desc: "Fill out the online enquiry form or visit the school office."
  },
  {
    icon: MessageSquare,
    title: "Interaction",
    desc: "A brief meeting with the student and parents to understand needs."
  },
  {
    icon: UserCheck,
    title: "Review",
    desc: "Verification of documents and admission assessment results."
  },
  {
    icon: CreditCard,
    title: "Enrollment",
    desc: "Payment of fees and completion of formal registration."
  }
];

export default function Admissions() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <SubPageHero 
        title="Admissions 2026-27" 
        subtitle="Join Palwal's premier institution for holistic excellence. Your child's future starts here."
        backgroundImage="https://images.unsplash.com/photo-1577891742202-308339f70ec5?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2E2370] mb-4">Admission Process</h2>
            <p className="text-[#7A7A7A] text-lg">Simple steps to secure your child's future</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#F4E21A] to-transparent z-0" />
                )}
                <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-6 relative z-10 border border-[#2E2370]/5">
                  <step.icon className="w-10 h-10 text-[#2E2370]" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2370] mb-2">{step.title}</h3>
                <p className="text-[#7A7A7A]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 rounded-4xl bg-[#D9D4E3]/20 border border-[#2E2370]/10 shadow-inner">
            <h2 className="text-3xl font-bold text-[#2E2370] mb-8 text-center">Required Documents</h2>
            <ul className="space-y-4 text-lg text-[#7A7A7A]">
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#4A3C8C]" />
                Birth Certificate (Original & Photocopy)
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#4A3C8C]" />
                Previous Class Report Card/Transfer Certificate
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#4A3C8C]" />
                Aadhar Card of Student & Parents
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#4A3C8C]" />
                4 Passport Size Photographs of Student
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#4A3C8C]" />
                Address Proof (Electricity Bill/Voter ID)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
