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
    englishQuestion: "Do I need insurance industry experience?",
    answer: "Tidak, kami akan memberikan pelatihan komprehensif untuk membantu Anda memulai. Yang terpenting adalah kemauan untuk belajar dan berkembang.",
    englishAnswer: "No prior experience needed, we provide comprehensive training. What matters most is your willingness to learn and grow.",
  },
  {
    question: "Berapa penghasilan yang bisa saya dapatkan?",
    englishQuestion: "How much can I earn?",
    answer: "Penghasilan Anda tidak dibatasi dan bergantung pada kinerja Anda. Tim kami memiliki rata-rata penghasilan Rp 50-150 juta per bulan.",
    englishAnswer: "Your income is uncapped and depends on your performance. Our team members average Rp 50-150 million monthly.",
  },
  {
    question: "Bagaimana sistem mentoring yang diterapkan?",
    englishQuestion: "How does the mentoring system work?",
    answer: "Anda akan mendapatkan mentor pribadi yang akan membimbing Anda step by step dalam perjalanan karir Anda.",
    englishAnswer: "You'll be assigned a personal mentor who will guide you step by step in your career journey.",
  },
  {
    question: "Apakah ada jenjang karir yang jelas?",
    englishQuestion: "Is there a clear career path?",
    answer: "Ya, kami memiliki sistem promosi yang transparan berdasarkan pencapaian dan kinerja Anda.",
    englishAnswer: "Yes, we have a transparent promotion system based on your achievements and performance.",
  },
  {
    question: "Berapa lama masa training?",
    englishQuestion: "How long is the training period?",
    answer: "Program training dasar berlangsung selama 1 bulan, dilanjutkan dengan mentoring berkelanjutan.",
    englishAnswer: "The basic training program lasts for 1 month, followed by continuous mentoring.",
  },
];

export default function FAQ() {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-20 relative bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm text-orange-400 px-3 py-1.5 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-3">
              Got Questions?
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              Temukan jawaban untuk pertanyaan umum tentang karir bersama kami.
              <span className="block mt-1 text-gray-500 text-xs md:text-sm">
                Find answers to common questions about careers with us.
              </span>
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
                  className="relative group"
                >
                  {/* Shiny Border Effect */}
                  <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content Background */}
                  <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg border border-orange-900/20 overflow-hidden hover:shadow-lg transition-all duration-300">
                    <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 text-left hover:no-underline">
                      <div className="space-y-1">
                        <div className="font-semibold text-sm md:text-base text-white group-hover:text-gray-200 transition-all duration-300">
                          {faq.question}
                        </div>
                        <div className="text-xs md:text-sm text-gray-400">
                          {faq.englishQuestion}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 md:px-6 pb-4">
                      <div className="pt-2 space-y-2">
                        <p className="text-xs md:text-sm text-gray-400">
                          {faq.answer}
                        </p>
                        <p className="text-[10px] md:text-xs text-gray-500">
                          {faq.englishAnswer}
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}