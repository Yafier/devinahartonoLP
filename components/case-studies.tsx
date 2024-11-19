"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";

const cases = [
  {
    name: "Michael Wijaya",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    income: "Rp 150.000.000+",
    yearsJoined: 2,
    position: "Senior Insurance Advisor",
    story: "Dulu aku cuma karyawan biasa dengan gaji UMR. Sekarang? Income aku naik 10x lipat dalam 2 tahun aja! Semua berkat sistem dan support yang keren dari tim.",
    englishStory: "From a minimum wage employee to a successful advisor. The amazing system and team support made it possible."
  },
  {
    name: "Jessica Tanadi",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    income: "Rp 200.000.000+",
    yearsJoined: 3,
    position: "Regional Manager",
    story: "Sistem mentoring yang ada tuh bener-bener ngebantu banget! Dari yang gak tau apa-apa, sekarang bisa bantu banyak orang sambil dapet income gede.",
    englishStory: "The mentoring system truly helped me grow from zero knowledge to helping others while earning big."
  },
  {
    name: "David Susanto",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    income: "Rp 180.000.000+",
    yearsJoined: 2.5,
    position: "Elite Insurance Consultant",
    story: "Yang bikin betah? Tim yang supportive dan sharing knowledge tanpa ditutup-tutupi. Di sini kita sukses bareng-bareng!",
    englishStory: "What keeps me here? The supportive team and open knowledge sharing. Here, we succeed together!"
  }
];

export default function CaseStudies() {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-20 relative bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm text-orange-400 px-3 py-1.5 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-3">
            Real Success Stories
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Kisah Sukses Tim Kami
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
            Mereka udah buktiin kalau sistem kita work banget!
            <span className="block mt-1 text-gray-500 text-xs md:text-sm">
              They've proven our system really works!
            </span>
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/90 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-orange-900/10"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/3 relative h-[200px] md:h-auto">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-4 md:p-6 flex flex-col justify-between bg-black/40 backdrop-blur-sm">
                  <div>
                    {/* Header Info */}
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">{item.name}</h3>
                        <p className="text-xs md:text-sm text-gray-400">{item.position}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Monthly Income</p>
                        <p className="text-sm md:text-base font-bold text-white">{item.income}</p>
                      </div>
                    </div>
                    
                    {/* Story */}
                    <blockquote className="text-sm md:text-base text-gray-400 italic mb-4">
                      "{item.story}"
                      <p className="mt-1 text-xs text-gray-500 not-italic">
                        {item.englishStory}
                      </p>
                    </blockquote>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-3 border-t border-orange-800/30">
                    <p className="text-xs text-gray-500">
                      Joined <span className="font-semibold text-white">{item.yearsJoined} years ago</span>
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="text-xs md:text-sm text-gray-400 font-medium hover:text-white"
                    >
                      Visit Instagram →
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}