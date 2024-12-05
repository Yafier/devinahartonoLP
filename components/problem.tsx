"use client";

import { motion } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";

const problems = [
  {
    id: 1,
    title: "Corporate Ladder Trap",
    location: "Problem 1",
    description: "Kerja 9-5, income terbatas, dan waktu habis untuk perusahaan. Waktu dan kerjaan di atur sama atasa, kita yang kerja kerjas, tapi mereka yang dapat penghargaan. Deep inside, you know you're meant for something bigger. Don't we all deserve something more?",
    video: "/stuck.mp4",
    type: "video/mp4"
  },
  {
    id: 2,
    title: "Waktu kita itu terbatas",
    location: "Problem 2",
    description: "Time is money. You'll get it more when you'll become older. Instead of trading time for money why don't we let the money work for us. Buat apa? Buat bisa spend more time sama keluarga, ngelakuin hobby, atau bahkan buat kelarin masalah yang ada di hidup. ",
    video: "/old.mp4",
    type: "video/mp4"
  },
  {
    id: 3,
    title: "Harus Mulai Dari Mana?",
    location: "Problem 3",
    description: "Mau coba sesuatu yang baru, tapi bingung mau mulai dari mana? bisa dipercaya atau ngga? kesempatan nya bagus tapi resikonya terlalu besar. Terus perubahan dalam hidup kita mau mulai kapan yaa?",
    video: "/confused.mp4",
    type: "video/mp4"
  },
  {
    id: 4,
    title: "Bisnis itu Beresiko, Gabisa ambil resiko?",
    location: "Problem 4",
    description: "Pengen buka usaha sendiri, tapi liat teman buka usaha harus keluar puluhan hingga milyaran rupiah. Apalagi kalo gagal, mau ngapain? Sekarang mikir terus apa yang bisa kita lakuin, tapi waktu nya udah hampir habis. ",
    video: "/bankrupt.mp4",
    type: "video/mp4"
  }
];

export default function Problem() {
  return (
    <section className="py-24 md:py-32 relative bg-neutral-100">
      <div className="container mx-auto px-4">
        {/* Magazine-style Header */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
              Kita semua pernah ada di Posisi yang sama.
            </span>
            
            <h2 className="mt-6 font-instrument-serif">
              <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
                The Mindset that Holds Us Back.
              </span>
              <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2">
                I Know You've
              </span>
              <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
                Felt this Before.
              </span>
            </h2>
          </motion.div>

          {/* Problems Grid - Updated with Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {problems.map((problem, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Video Container - Replaced Image */}
                <div className="aspect-[4/5] relative overflow-hidden mb-6 rounded-xl">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  >
                    <source src={problem.video} type={problem.type} />
                  </video>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-instrument-serif">
                    {problem.title}
                  </h3>
                  <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase">
                    {problem.location}
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Magazine-style Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-24"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-instrument-serif leading-snug text-neutral-800 mb-6 whitespace-nowrap max-w-4xl mx-auto">
                Stop worrying about your future.
              </h3>
              <p className="text-neutral-600 leading-relaxed italic">
                "Kamu takut, orang lain sudah mulai maju. 
                Orang lain udah sukses, kamu baru mau mulai?""
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
} 