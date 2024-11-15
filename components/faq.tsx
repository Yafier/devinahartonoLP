"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GradientSeparator } from "./ui/gradient-separator";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Apakah saya perlu pengalaman di bidang asuransi?",
    englishQuestion: "Do I need insurance industry experience?",
    answer: "Tidak, kami akan memberikan pelatihan komprehensif untuk membantu Anda memulai. Yang terpenting adalah kemauan untuk belajar dan berkembang. No prior experience needed, we provide comprehensive training. What matters most is your willingness to learn and grow.",
  },
  {
    question: "Berapa penghasilan yang bisa saya dapatkan?",
    englishQuestion: "How much can I earn?",
    answer: "Penghasilan Anda tidak dibatasi dan bergantung pada kinerja Anda. Tim kami memiliki rata-rata penghasilan Rp 50-150 juta per bulan. Your income is uncapped and depends on your performance. Our team members average Rp 50-150 million monthly.",
  },
  {
    question: "Bagaimana sistem mentoring yang diterapkan?",
    englishQuestion: "How does the mentoring system work?",
    answer: "Anda akan mendapatkan mentor pribadi yang akan membimbing Anda step by step dalam perjalanan karir Anda. You'll be assigned a personal mentor who will guide you step by step in your career journey.",
  },
  {
    question: "Apakah ada jenjang karir yang jelas?",
    englishQuestion: "Is there a clear career path?",
    answer: "Ya, kami memiliki sistem promosi yang transparan berdasarkan pencapaian dan kinerja Anda. Yes, we have a transparent promotion system based on your achievements and performance.",
  },
  {
    question: "Berapa lama masa training?",
    englishQuestion: "How long is the training period?",
    answer: "Program training dasar berlangsung selama 1 bulan, dilanjutkan dengan mentoring berkelanjutan. The basic training program lasts for 1 month, followed by continuous mentoring.",
  },
];

export default function FAQ() {
  return (
    <>
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-900/30 rounded-full blur-3xl translate-y-1/4" />

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto relative">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm md:text-base text-orange-400 px-4 py-2 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-4">
                Got Questions?
              </p>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-red-400 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-orange-100/70 max-w-2xl mx-auto leading-relaxed">
                Temukan jawaban untuk pertanyaan umum tentang karir bersama kami.
                <span className="block mt-2 text-orange-200/60 text-base">
                  Find answers to common questions about careers with us.
                </span>
              </p>
            </div>

            {/* FAQ Items */}
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="relative group"
                  >
                    {/* Shiny Border Effect */}
                    <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content Background */}
                    <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-orange-900/20 overflow-hidden hover:shadow-lg transition-all duration-300">
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                        <div className="space-y-1">
                          <div className="font-semibold text-lg bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent group-hover:from-orange-200 group-hover:to-red-300 transition-all duration-300">
                            {faq.question}
                          </div>
                          <div className="text-sm text-orange-400/80">
                            {faq.englishQuestion}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="pt-2 text-orange-100/70 leading-relaxed">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom Separator */}
      <div className="w-full py-8 bg-gradient-to-t from-gray-950 to-gray-900">
        <GradientSeparator />
      </div>
    </>
  );
}