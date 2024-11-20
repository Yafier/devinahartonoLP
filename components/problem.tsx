"use client";

import { motion } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";

const problems = [
  {
    id: 1,
    title: "Stuck di Zona Comfort yang Aman tapi Stagnan dan Jenuh",
    description: "Capek kerja dari pagi sampe malem tapi income tetep segitu-segitu aja. No room for growth, dan waktu kita habis buat perusahaan doang.",
  },
  {
    id: 2,
    title: "Beharap ada Cara untuk Kerja Lebih Sedikit tapi Bisa Earn More.",
    description: "Udah lama banget pengen punya income bisa datang tanpa harus actively kerja. But how? gamungkin sih kalau ngga kerja tapi punya income. Bener ngga sih?",
  },
  {
    id: 3,
    title: "Takut kalau mulai sendiri, pasti ngga bisa konsisten.",
    description: "Udah mau berubah tapi tau kalo kita mulai sendiri, pasti ngga bisa konsisten. Kalo rame juga takut salah lingkungan..",
  },
  {
    id: 4,
    title: "Bener- Bener Limited Network & Ngga Punya Mentor",
    description: "Aku ngerasa kalau punya orang to look up pasti bisa grow cepet. Tapi yang sukses pasti sibuk dan gapunya waktu buat kita. "
  },
  {
    id: 5,
    title: "Takut perubahan malah bikin kamu di jauhin sama circle kamu",
    description: "Deep inside, kita tau we deserve better. Tapi karena social pressure, kita takut kalau perubahan kita malah dianggap aneh.",
  },
  {
    id: 6,
    title: "No Clear Path dan No Proven System",
    description: "Banyak yang bilang 'just start', tapi start from where? Kita butuh guidance yang jelas dan proven system yang udah tested.",
  }
];

export default function Problem() {
  return (
    <section className="pt-16 md:pt-24 pb-16 md:pb-20 relative bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Enhanced Dramatic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
        
        {/* Fire effect layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-red-800/5 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600/20 via-red-900/5 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xs md:text-sm text-red-400 px-3 py-1.5 rounded-full border border-red-800 bg-red-950/30 backdrop-blur-sm inline-block mb-3"
            >
              Hey You.
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-3xl lg:text-4xl text-white mb-3"
            >
              Ngerasa you can do more with what you have?<br/>
              <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-transparent bg-clip-text">
                Tapi kamu gak tau caranya?
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto"
            >
                Aku juga pernah ada di posisi yang sama.
            </motion.p>
          </div>

          {/* Problem Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Metallic Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-gray-100/20 to-red-500/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                
                {/* Content */}
                <div className="relative bg-gradient-to-br from-black/90 via-zinc-900/90 to-black/90 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:border-red-500/20 transition duration-500 p-6 md:p-8">
                  {/* Title - Dark Red Gradient */}
                  <h3 className="text-base md:text-lg bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-transparent bg-clip-text mb-3 group-hover:from-red-600 group-hover:to-red-500 transition-all duration-300">
                    {problem.title}
                  </h3>
                  
                  {/* Description - Pure White */}
                  <p className="text-sm text-white leading-relaxed">
                    {problem.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12 md:mt-16"
          >
            <p className="text-base md:text-lg text-white">
              Coba deh jujur <span className="bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text font-medium">Bener ngga sih?</span>?
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
} 