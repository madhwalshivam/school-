import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  { number: "01", title: "Inquiry", description: "Submit online form or visit campus" },
  { number: "02", title: "Application", description: "Complete admission form with documents" },
  { number: "03", title: "Interaction", description: "Student interaction & parent meeting" },
  { number: "04", title: "Confirmation", description: "Fee payment & enrollment completion" },
];

export function AdmissionsFunnel() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    grade: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
            Join Our Community
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, color: '#081B33' }}>
            Admissions Open for 2026-27
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Process Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#114BFF] to-[#0D3DD9] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="text-[#081B33] mb-2 group-hover:text-[#114BFF] transition-colors duration-300" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                    {step.title}
                  </h3>
                  <p className="text-[#4B5563] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <CheckCircle2 className="w-6 h-6 text-[#D4A64A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4" />
              </motion.div>
            ))}

            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#114BFF]" />
                <p className="text-[#4B5563]">Limited seats available for each grade</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#114BFF]" />
                <p className="text-[#4B5563]">Early bird discount for applications before June 30</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#114BFF]" />
                <p className="text-[#4B5563]">Scholarships available for meritorious students</p>
              </div>
            </div>
          </motion.div>

          {/* Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#F7F9FC] to-white border-2 border-[#081B33]/10 shadow-2xl">
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#D4A64A] rounded-full blur-3xl opacity-20 -z-10" />

              <h3 className="text-[#081B33] mb-2" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                Start Your Journey
              </h3>
              <p className="text-[#4B5563] mb-8">
                Fill in your details and our admissions team will contact you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#081B33] mb-2" style={{ fontWeight: 600 }}>
                    Parent's Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter full name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="h-12 rounded-xl border-[#081B33]/20 focus:border-[#114BFF]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#081B33] mb-2" style={{ fontWeight: 600 }}>
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 rounded-xl border-[#081B33]/20 focus:border-[#114BFF]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#081B33] mb-2" style={{ fontWeight: 600 }}>
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 rounded-xl border-[#081B33]/20 focus:border-[#114BFF]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#081B33] mb-2" style={{ fontWeight: 600 }}>
                    Grade Applying For *
                  </label>
                  <Select value={formData.grade} onValueChange={(value) => setFormData({ ...formData, grade: value })}>
                    <SelectTrigger className="h-12 rounded-xl border-[#081B33]/20">
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nursery">Nursery</SelectItem>
                      <SelectItem value="lkg">LKG</SelectItem>
                      <SelectItem value="ukg">UKG</SelectItem>
                      <SelectItem value="1">Class I</SelectItem>
                      <SelectItem value="2">Class II</SelectItem>
                      <SelectItem value="3">Class III</SelectItem>
                      <SelectItem value="4">Class IV</SelectItem>
                      <SelectItem value="5">Class V</SelectItem>
                      <SelectItem value="6">Class VI</SelectItem>
                      <SelectItem value="7">Class VII</SelectItem>
                      <SelectItem value="8">Class VIII</SelectItem>
                      <SelectItem value="9">Class IX</SelectItem>
                      <SelectItem value="10">Class X</SelectItem>
                      <SelectItem value="11">Class XI</SelectItem>
                      <SelectItem value="12">Class XII</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-[#114BFF] hover:bg-[#0D3DD9] text-white rounded-xl group"
                  style={{ fontSize: '1.0625rem', fontWeight: 600 }}
                >
                  Submit Inquiry
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-center text-[#4B5563]" style={{ fontSize: '0.875rem' }}>
                  By submitting, you agree to our privacy policy and terms of service
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
