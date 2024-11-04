"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Background Cards */}
            <div className="absolute inset-0 flex justify-between -z-10">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-72 h-72 bg-gradient-to-tr from-red-900/20 to-red-500/20 rounded-3xl transform -rotate-12"
              />
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-72 h-72 bg-gradient-to-bl from-red-500/20 to-orange-500/20 rounded-3xl transform rotate-12"
              />
            </div>

            {/* Content */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-red-100 shadow-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent">
                  di Dunia ini Ada 2 Tipe Orang,
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-100"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-red-900">
                    Orang Yang Mau Melompat Untuk Merubah Hidupnya
                  </h3>
                  <p className="text-gray-600">Those who take the leap to change their lives</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Dan Yang Mau Berdiam Diri
                  </h3>
                  <p className="text-gray-600">And those who choose to stay still</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  className="bg-gradient-to-r from-red-900 to-red-500 text-white px-12 py-6 text-xl hover:opacity-90 transition-opacity"
                >
                  Take Action Sekarang
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}