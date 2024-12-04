"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";

const faqs = [
  {
    question: "Apakah saya perlu pengalaman di bidang asuransi?",
    answer: "Tidak, kami akan memberikan pelatihan komprehensif untuk membantu Anda memulai. Yang terpenting adalah kemauan untuk belajar dan berkembang.",
  },
  {
    question: "Berapa penghasilan yang bisa saya dapatkan?",
    answer: "Penghasilan Anda tidak dibatasi dan bergantung pada kinerja Anda. Tim kami memiliki rata-rata penghasilan Rp 50-150 juta per bulan.",
  },
  {
    question: "Bagaimana sistem mentoring yang diterapkan?",
    answer: "Anda akan mendapatkan mentor pribadi yang akan membimbing Anda step by step dalam perjalanan karir Anda.",
  },
  {
    question: "Apakah ada jenjang karir yang jelas?",
    answer: "Ya, kami memiliki sistem promosi yang transparan berdasarkan pencapaian dan kinerja Anda.",
  },
  {
    question: "Berapa lama masa training?",
    answer: "Program training dasar berlangsung selama 1 bulan, dilanjutkan dengan mentoring berkelanjutan.",
  },
];

const accordionTriggerClassName = "flex flex-1 items-center justify-between py-4 px-6 text-sm transition-all hover:underline [&[data-state=open]]:pb-4 !no-underline";

export default function FAQ() {
  return (
    <section id="faq" className="pt-8 md:pt-12 pb-16 md:pb-20 relative bg-white" style={{ backgroundColor: '#ffffff' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-neutral-100" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto relative">
          {/* Header - Updated to match social-proof style */}
          <div className="text-center mb-20 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
                Got Questions?
              </span>
              
              <h2 className="mt-6 font-instrument-serif">
                <span className="block text-2xl md:text-4xl leading-[1.1] text-neutral-900">
                  FREQUENTLY
                </span>
                <span className="block text-xl md:text-3xl italic font-light mt-2">
                  asked
                </span>
                <span className="block text-2xl md:text-4xl uppercase mt-1">
                  QUESTIONS
                </span>
              </h2>

              <p className="text-neutral-600 leading-relaxed mt-6 max-w-2xl mx-auto">
                Temukan jawaban untuk pertanyaan umum tentang karir bersama kami.
              </p>
            </motion.div>
          </div>

          {/* FAQ Items - Updated with neutral theme */}
          <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="relative group border-none"
                >
                  {/* Updated Metallic Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-neutral-200/10 via-neutral-100/10 to-neutral-200/10 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition duration-500" />
                  
                  {/* Updated Content Background */}
                  <div className="relative bg-gradient-to-br from-white/95 via-neutral-50/95 to-white/95 rounded-xl overflow-hidden border border-neutral-100 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.03)] group-hover:border-neutral-200 transition duration-500">
                    <AccordionTrigger 
                      className={accordionTriggerClassName}
                    >
                      <div className="text-sm md:text-base text-neutral-800 font-normal group-hover:text-neutral-950 transition-all duration-300">
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    
                    {/* Answer Section */}
                    <AccordionContent>
                      <div className="px-6 pb-6">
                        <p className="text-xs md:text-sm text-neutral-600 font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Updated Radial gradient overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-radial from-neutral-100/30 via-transparent to-transparent blur-[80px] opacity-40" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      </div>
    </section>
  );
}