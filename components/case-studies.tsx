"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cases = [
  {
    name: "Michael Wijaya",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    income: "Rp 150.000.000+",
    yearsJoined: 2,
    position: "Senior Insurance Advisor",
    story: "Sebelumnya saya hanya karyawan biasa dengan gaji UMR. Setelah bergabung dan mengikuti sistem yang ada, dalam 2 tahun saya berhasil meningkatkan penghasilan 10x lipat. Previously I was just a regular employee with minimum wage. After joining and following the system, within 2 years I managed to increase my income 10x."
  },
  {
    name: "Jessica Tanadi",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    income: "Rp 200.000.000+",
    yearsJoined: 3,
    position: "Regional Manager",
    story: "Sistem mentoring yang luar biasa membantu saya berkembang pesat. Dari yang awalnya tidak tahu apa-apa tentang industri ini, kini saya bisa membantu banyak orang mencapai impian mereka. The amazing mentoring system helped me grow rapidly. From knowing nothing about this industry, now I can help many people achieve their dreams."
  },
  {
    name: "David Susanto",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    income: "Rp 180.000.000+",
    yearsJoined: 2.5,
    position: "Elite Insurance Consultant",
    story: "Yang saya suka dari tim ini adalah dukungan penuh dari leader dan rekan-rekan. Tidak ada yang disembunyikan, semua ilmu dibagikan agar kita bisa sukses bersama. What I love about this team is the full support from leaders and colleagues. Nothing is hidden, all knowledge is shared so we can succeed together."
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent mb-4">
          Success Stories
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Kisah sukses dari rekan-rekan yang telah mencapai impian mereka bersama kami.
          Success stories from our team members who achieved their dreams with us.
        </p>

        <div className="max-w-5xl mx-auto space-y-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/3 relative">
                  <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-orange-500/20" />
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                        <p className="text-red-600 font-medium">{item.position}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Monthly Income</p>
                        <p className="text-xl font-bold text-red-600">{item.income}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 italic mb-6">
                      "{item.story}"
                    </blockquote>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      Joined <span className="font-semibold text-gray-900">{item.yearsJoined} years ago</span>
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="text-red-600 font-medium hover:text-red-700"
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
  );
}