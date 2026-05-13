import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Send } from "lucide-react";

interface AdmissionDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdmissionDialog({ isOpen, onClose }: AdmissionDialogProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-3xl border-none shadow-2xl">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-8"
            >
              <DialogHeader className="flex flex-col items-center text-center mb-8">
                <div className="w-20 h-20 rounded-2xl bg-white p-3 shadow-xl mb-4 border border-[#2E2370]/10">
                  <img src="/assets/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <DialogTitle className="text-3xl font-bold text-[#2E2370]">Admission Enquiry</DialogTitle>
                <DialogDescription className="text-[#7A7A7A] text-lg">
                  Fill out the form below and our team will get in touch with you shortly.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName" className="text-[#2E2370] font-semibold">Student Name</Label>
                    <Input id="studentName" placeholder="Enter name" required className="rounded-xl border-[#2E2370]/10 focus:ring-[#2E2370]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grade" className="text-[#2E2370] font-semibold">Grade Applying For</Label>
                    <Select required>
                      <SelectTrigger className="rounded-xl border-[#2E2370]/10">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="kg">KG</SelectItem>
                        <SelectItem value="primary">Primary (I-V)</SelectItem>
                        <SelectItem value="middle">Middle (VI-VIII)</SelectItem>
                        <SelectItem value="senior">Senior (IX-XII)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parentName" className="text-[#2E2370] font-semibold">Parent/Guardian Name</Label>
                  <Input id="parentName" placeholder="Enter parent name" required className="rounded-xl border-[#2E2370]/10" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#2E2370] font-semibold">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91" required className="rounded-xl border-[#2E2370]/10" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#2E2370] font-semibold">Email Address</Label>
                    <Input id="email" type="email" placeholder="example@mail.com" required className="rounded-xl border-[#2E2370]/10" />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#2E2370] hover:bg-[#4A3C8C] text-white py-6 rounded-xl font-bold text-lg shadow-xl shadow-[#2E2370]/20 transition-all duration-300 group"
                >
                  Submit Application
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 flex flex-col items-center text-center bg-[#2E2370] text-white"
            >
              <div className="w-20 h-20 rounded-full bg-[#F4E21A] flex items-center justify-center mb-6">
                <CheckCircle2 className="w-12 h-12 text-[#2E2370]" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Thank you for your interest in G.D. Convent International School. 
                Our admissions counselor will contact you within 24 hours.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
