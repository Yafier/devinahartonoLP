"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";

const benefits = [
  {
    title: "Income Tanpa Batas",
    description: "Gak ada batasan penghasilan! Makin giat, makin gede income kamu. Dengan sistem komisi yang transparan dan kompetitif, kamu bisa dapetin penghasilan sesuai dengan effort yang kamu kasih.",
    englishDesc: "Your earnings are directly tied to your effort - our transparent commission system ensures you get what you deserve.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
    value: "100JT+/BULAN",
    tag: "HIGHEST EARNING"
  },
  {
    title: "Waktu Fleksibel",
    description: "Atur jadwal sesuai keinginan kamu. Work-life balance? Bisa banget! Kamu yang tentuin kapan mau kerja dan gimana cara kerjanya.",
    englishDesc: "Set your own schedule and maintain perfect work-life balance. You decide when and how to work.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=400",
    value: "FLEXIBLE TIME",
    tag: "WORK FREEDOM"
  },
  {
    title: "Pengembangan Karir",
    description: "Upgrade skill terus lewat training & mentoring berkala. Program pengembangan yang terstruktur bikin kamu makin expert di bidang insurance.",
    englishDesc: "Continuous learning through regular training and mentorship. Our structured development program helps you become an insurance expert.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400",
    value: "FAST GROWTH",
    tag: "CAREER PATH"
  },
  {
    title: "Komunitas Supportif",
    description: "Gabung tim yang solid dan supportive. Sukses bareng lebih seru! Di sini kamu bakal ketemu sama orang-orang yang punya visi yang sama.",
    englishDesc: "Join a solid team where success is celebrated together. Meet like-minded individuals ready to support you anytime.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400",
    value: "1000+ AGENTS",
    tag: "STRONG TEAM"
  }
];

export default function Benefits() {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-20 relative bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 relative z-10">
          <p className="text-xs md:text-sm text-orange-400 px-3 py-1.5 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-3">
            Why Join Us
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Benefits yang Kamu Dapetin
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Keuntungan yang bikin kamu makin semangat!
            <span className="block mt-1 text-gray-500 text-xs md:text-sm">
              Benefits that will drive your success
            </span>
          </p>
        </div>

        {/* Benefits Stack */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-black rounded-xl flex flex-col md:flex-row transition-all duration-300">
                {/* Gradient Border */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-red-500" />
                
                {/* Dark Background */}
                <div className="absolute inset-[1px] bg-black rounded-[11px]" />

                {/* Content Container */}
                <div className="relative w-full flex flex-col md:flex-row p-4 md:p-6">
                  {/* Image Container */}
                  <div className="relative md:w-[200px] h-[200px] md:h-auto rounded-lg overflow-hidden mb-4 md:mb-0">
                    {/* Value Tag */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30">
                      <div className="px-3 py-1.5 bg-gradient-to-r from-orange-600 to-red-500 rounded-full text-white text-xs font-bold shadow-lg whitespace-nowrap">
                        {benefit.value}
                      </div>
                    </div>

                    <div className="relative h-full w-full">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:ml-6 flex-1">
                    <div className="space-y-3">
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {benefit.title}
                      </h3>
                      <div className="space-y-2">
                        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                          {benefit.description}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500">
                          {benefit.englishDesc}
                        </p>
                      </div>
                    </div>
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