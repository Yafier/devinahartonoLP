"use client";

import { motion } from "framer-motion";
import { GradientSeparator } from "./ui/gradient-separator";
import Image from "next/image";

const benefits = [
  {
    title: "Income Tanpa Batas",
    description: "Gak ada batasan penghasilan! Makin giat, makin gede income kamu. Dengan sistem komisi yang transparan dan kompetitif, kamu bisa dapetin penghasilan sesuai dengan effort yang kamu kasih. Bahkan, top performers kita udah ada yang konsisten dapet income 9 digit per bulan! Plus, ada bonus-bonus menarik yang bisa kamu dapetin setiap bulannya. Your earnings are directly tied to your effort - our transparent commission system ensures you get what you deserve. Many of our top performers consistently earn 9-digit monthly incomes, plus exciting monthly bonuses!",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
    value: "100JT+/BULAN",
    tag: "HIGHEST EARNING"
  },
  {
    title: "Waktu Fleksibel",
    description: "Atur jadwal sesuai keinginan kamu. Work-life balance? Bisa banget! Kamu yang tentuin kapan mau kerja dan gimana cara kerjanya. Mau fokus pagi hari? Bisa. Lebih produktif sore? No problem! Yang penting target tercapai dan kamu happy. Bahkan bisa sambil jalanin bisnis atau kegiatan lain yang kamu suka. Set your own schedule and maintain perfect work-life balance. You decide when and how to work - morning person or night owl, it's up to you. As long as you hit your targets, you're free to manage your time!",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=400",
    value: "FLEXIBLE TIME",
    tag: "WORK FREEDOM"
  },
  {
    title: "Pengembangan Karir",
    description: "Upgrade skill terus lewat training & mentoring berkala. Program pengembangan yang terstruktur bikin kamu makin expert di bidang insurance. Dari basic selling sampe advanced financial planning, semua ada modulnya. Plus, kesempatan buat ikut training internasional! Continuous learning through regular training and mentorship. Our structured development program helps you become an insurance expert. From basic selling to advanced financial planning, we've got you covered, including international training opportunities!",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400",
    value: "FAST GROWTH",
    tag: "CAREER PATH"
  },
  {
    title: "Komunitas Supportif",
    description: "Gabung tim yang solid dan supportive. Sukses bareng lebih seru! Di sini kamu bakal ketemu sama orang-orang yang punya visi yang sama dan siap support kamu kapan aja. Sharing knowledge, sharing experience, sampe sharing tips and tricks buat capai target. Kita percaya kesuksesan itu hasil kerja tim! Join a solid team where success is celebrated together. Meet like-minded individuals ready to support you anytime. From knowledge sharing to practical tips, we believe success is a team effort!",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400",
    value: "1000+ AGENTS",
    tag: "STRONG TEAM"
  }
];

export default function Benefits() {
  return (
    <>
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-900/30 rounded-full blur-3xl translate-y-1/4" />

        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 relative z-10">
            <p className="text-sm md:text-base text-orange-400 px-4 py-2 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-4">
              Why Join Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-red-400 bg-clip-text text-transparent mb-6">
              Benefits Yang Kamu Dapetin
            </h2>
            <p className="text-lg text-orange-100/70 max-w-2xl mx-auto leading-relaxed">
              Keuntungan yang bikin kamu makin semangat!
              <span className="block mt-2 text-orange-200/60 text-base">
                Benefits that will drive your success
              </span>
            </p>
          </div>

          {/* Benefits Stack */}
          <div className="max-w-6xl mx-auto space-y-40">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card Container with Enhanced Border and Shadow */}
                <div className="relative bg-gray-900/80 rounded-xl h-[320px] flex transition-all duration-300">
                  {/* Gradient Border and Shadow Container */}
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-red-500" />
                  <div className="absolute inset-0 rounded-xl shadow-[0_8px_30px_rgb(249,115,22,0.2)]" />
                  
                  {/* Dark Background */}
                  <div className="absolute inset-[1px] bg-gray-900/90 rounded-[11px]" />

                  {/* Content Container */}
                  <div className="relative w-full flex">
                    {/* Portrait Image Container */}
                    <div className="absolute left-12 -top-12 -bottom-12 w-[240px]">
                      {/* Value Tag */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                        <div className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-red-500 rounded-full text-white text-base font-bold shadow-lg">
                          {benefit.value}
                        </div>
                      </div>

                      {/* Image with Gradient Border */}
                      <div className="absolute inset-0 rounded-xl">
                        <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-orange-500 to-red-500 shadow-[0_4px_20px_rgb(249,115,22,0.3)]">
                          <div className="relative h-full w-full rounded-[10px] overflow-hidden">
                            <div className="absolute inset-0">
                              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 z-10" />
                              <Image
                                src={benefit.image}
                                alt={benefit.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section - Updated text colors */}
                    <div className="ml-[280px] flex-1 px-16 py-10 flex items-center">
                      <div className="space-y-6">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">
                          {benefit.title}
                        </h3>
                        <div className="space-y-4">
                          <p className="text-lg text-orange-100/90 leading-relaxed tracking-wide">
                            <span className="block mb-3">
                              {benefit.description.split('.')[0]}.{' '}
                              {benefit.description.split('.')[1]}
                            </span>
                            <span className="block text-orange-200/70 mt-2">
                              {benefit.description.split('.')[2]}{' '}
                              {benefit.description.split('.')[3]}
                            </span>
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
      </section>

      {/* Bottom Separator - Updated gradient */}
      <div className="w-full py-8 bg-gradient-to-t from-gray-950 to-gray-900">
        <GradientSeparator />
      </div>
    </>
  );
}