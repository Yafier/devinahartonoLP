"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Temukan jawaban untuk pertanyaan umum tentang karir bersama kami.
            Find answers to common questions about careers with us.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div>
                    <div className="font-semibold text-gray-900">
                      {faq.question}
                    </div>
                    <div className="text-sm text-gray-500">
                      {faq.englishQuestion}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}