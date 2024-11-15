"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GradientSeparator } from "./ui/gradient-separator";

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
    <>
      <section className="pt-4 pb-12 relative bg-gray-950">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />
        <div className="absolute -top-1/2 right-0 w-1/3 h-1/3 bg-orange-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-900/30 rounded-full blur-3xl translate-y-1/4" />

        <div className="container mx-auto px-4 relative">
          {/* Header - Updated colors */}
          <div className="text-center mb-16">
            <p className="text-sm md:text-base text-orange-400 px-4 py-2 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-4">
              Real Success Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-red-400 bg-clip-text text-transparent mb-6">
              Kisah Sukses Tim Kami
            </h2>
            <p className="text-lg text-orange-100/70 max-w-2xl mx-auto leading-relaxed">
              Mereka udah buktiin kalau sistem kita work banget!
              <span className="block mt-2 text-orange-200/60 text-base">
                They've proven our system really works!
              </span>
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {cases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-orange-900/20"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section - Updated overlay */}
                  <div className="md:w-1/3 relative">
                    <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-red-500/20 hover:opacity-75 transition-opacity duration-300" />
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Section - Updated colors */}
                  <div className="md:w-2/3 p-8 flex flex-col justify-between bg-gray-900/50 backdrop-blur-sm">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-orange-200">{item.name}</h3>
                          <p className="text-orange-400 font-medium">{item.position}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-orange-200/70">Monthly Income</p>
                          <p className="text-xl font-bold text-orange-400">{item.income}</p>
                        </div>
                      </div>
                      <blockquote className="text-orange-100/90 italic mb-6">
                        "{item.story}"
                        <p className="mt-2 text-sm text-orange-200/70 not-italic">
                          {item.englishStory}
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-orange-800/30">
                      <p className="text-sm text-orange-200/70">
                        Joined <span className="font-semibold text-orange-300">{item.yearsJoined} years ago</span>
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-orange-400 font-medium hover:text-orange-300"
                      >
                        Read Full Story →
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Separator - Updated gradient */}
      <div className="w-full py-8 bg-gradient-to-t from-gray-950 to-gray-900">
        <GradientSeparator />
      </div>
    </>
  );
}