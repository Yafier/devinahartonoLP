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
    <section className="pt-24 md:pt-32 pb-24 md:pb-32 relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto relative">
          {/* Header - Updated to match social-proof style */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
              Got Questions?
            </span>
            
            <h2 className="mt-6 font-instrument-serif">
              <span className="block text-2xl md:text-4xl leading-[1.1] text-neutral-900">
                FREQUENTLY
              </span>
              <span className="block text-xl md:text-3xl italic font-light mt-2 text-neutral-800">
                asked
              </span>
              <span className="block text-2xl md:text-4xl uppercase mt-1">
                QUESTIONS
              </span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-neutral-600 max-w-xl mx-auto text-sm md:text-base"
            >
              Temukan jawaban untuk pertanyaan umum tentang karir bersama kami
            </motion.p>
          </motion.div>

          {/* FAQ Items - Updated colors */}
          <Accordion type="single" collapsible className="w-full space-y-4 md:space-y-6">
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
                  {/* Subtle gradient effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-neutral-200/20 via-neutral-100/20 to-neutral-200/20 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition duration-500" />
                  
                  {/* Content Background */}
                  <div className="relative bg-gradient-to-br from-white/95 via-neutral-50/95 to-white/95 rounded-xl overflow-hidden border border-neutral-100 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.03)] group-hover:border-neutral-200 transition duration-500">
                    <AccordionTrigger 
                      className="flex flex-1 items-center justify-between py-6 px-8 text-base transition-all hover:no-underline"
                    >
                      <span className="text-base md:text-lg text-neutral-800 font-medium group-hover:text-neutral-900 transition-all duration-300">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    
                    {/* Answer Section */}
                    <AccordionContent>
                      <div className="px-8 pb-6">
                        <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Subtle radial gradient overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-radial from-neutral-500/5 via-transparent to-transparent blur-[100px] opacity-60" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      </div>
    </section>
  );
}