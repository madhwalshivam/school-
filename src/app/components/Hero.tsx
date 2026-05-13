import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Play, Phone } from "lucide-react";
import { AdmissionDialog } from "./AdmissionDialog";

export function Hero() {
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/school.png" 
          alt="G.D. Convent International School Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2E2370]/80 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/20 text-[#F4E21A] text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase mb-6 md:mb-8"
          >
            Admissions Open 2026-27
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 6vw, 4rem)',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            Where Tradition <br />
            <span className="font-bold text-[#F4E21A]">Meets Tomorrow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white/80 mb-10 max-w-2xl mx-auto font-light px-4 md:px-0"
            style={{ fontSize: 'clamp(0.875rem, 3vw, 1.125rem)', lineHeight: 1.6 }}
          >
            Join Palwal's premier international institution. We combine heritage values 
            with cutting-edge technology to nurture the leaders of a global future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => setIsAdmissionOpen(true)}
              size="lg"
              className="w-full sm:w-auto bg-[#F4E21A] hover:bg-white text-[#2E2370] font-bold px-8 py-4 h-auto rounded-full transition-all duration-300 shadow-lg text-base"
            >
              Enquire Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a href="tel:+919991540996" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-white/40 text-black hover:bg-white/10 px-8 py-4 h-auto rounded-full transition-all duration-300 text-base backdrop-blur-sm group flex items-center justify-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <AdmissionDialog isOpen={isAdmissionOpen} onClose={() => setIsAdmissionOpen(false)} />
    </section>
  );
}
