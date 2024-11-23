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
    description: "Banyak yang bilang 'just start', tapi start from where? Kita butuh guidance yang jelas dan proven system yang udah tested. Kita pasti punya something to lose kalau gagal. So the next step we took harus berhasil.",
  }
];

export default function Problem() {
  return (
    <section className="pt-16 md:pt-32 pb-16 md:pb-32 relative bg-black/80" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-red-800/5 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/30 via-red-900/5 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto relative"> {/* Increased max-width */}
          {/* Header with larger text */}
          <div className="text-center mb-16 md:mb-24">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xs md:text-base text-red-400 px-4 py-2 rounded-full border border-red-800/30 bg-red-950/20 backdrop-blur-sm inline-block mb-4"
            >
              Hey You.
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-4xl lg:text-5xl text-white mb-4 max-w-4xl mx-auto font-medium"
            >
              <span className="inline-block">Ngerasa kamu bisa do more with your life?</span>
              <br/>
              <span className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-transparent bg-clip-text">
                Tapi kamu gak tau caranya?
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs md:text-lg text-gray-400 max-w-3xl mx-auto"
            >
              Aku juga pernah ada di posisi yang sama.
            </motion.p>
          </div>

          {/* Problem Grid with larger cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Dark Red/Black Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-950/30 via-black/40 to-red-950/30 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                
                {/* Content with metallic black gradient */}
                <div className="relative bg-[linear-gradient(110deg,rgba(20,20,20,0.95),rgba(10,10,10,0.95),rgba(0,0,0,0.95))] rounded-xl overflow-hidden border border-zinc-800/20 backdrop-blur-sm shadow-[0_8px_32px_rgba(15,15,15,0.9)] group-hover:border-red-900/20 transition duration-500">
                  <div className="p-8 md:p-12">
                    {/* Metallic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-black/50 to-zinc-900/50 opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-zinc-800/10 to-black/10" />
                    
                    {/* Content remains the same */}
                    <div className="relative z-10">
                      <h3 className="text-base md:text-2xl lg:text-3xl bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-transparent bg-clip-text mb-6 group-hover:from-red-600 group-hover:to-red-500 transition-all duration-300 font-medium">
                        {problem.title}
                      </h3>
                      
                      <p className="text-sm md:text-xl text-white/80 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>

                    {/* Subtle hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-950/5 via-black/5 to-red-950/5 opacity-0 group-hover:opacity-100 transition duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Message with larger font */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16 md:mt-24"
          >
            <p className="text-base md:text-2xl text-white">
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