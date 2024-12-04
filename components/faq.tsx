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
    <section id="faq" className="pt-8 md:pt-12 pb-16 md:pb-20 relative bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm text-red-400 px-3 py-1.5 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-3">
              Got Questions?
            </p>
            <h2 className="text-2xl md:text-4xl text-white mb-3">
              Frequently Asked Questions ✨
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Temukan jawaban untuk pertanyaan umum tentang karir bersama kami.
            </p>
          </div>

          {/* FAQ Items */}
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
                  {/* Metallic Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-gray-100/20 to-red-500/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                  
                  {/* Content Background */}
                  <div className="relative bg-gradient-to-br from-black/90 via-zinc-900/90 to-black/90 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:border-red-500/20 transition duration-500">
                    <AccordionTrigger 
                      className={accordionTriggerClassName}
                    >
                      <div className="text-sm md:text-base text-white font-normal group-hover:text-red-200 transition-all duration-300">
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    
                    {/* Answer Section */}
                    <AccordionContent>
                      <div className="px-6 pb-6">
                        <p className="text-xs md:text-sm text-gray-300 font-normal">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Radial gradient overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent blur-[100px] opacity-60" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}