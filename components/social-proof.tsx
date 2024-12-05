"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";

const testimonials = [
  {
    name: "Mariska Karsana",
    role: "Joined Alife 2019",
    income: "Monthly Income: 300jt+",
    image: "/mariskakarsana.jpg",
    quote: "Semenjak join Alife menemukan IKIGAI — purpose dan goal dalam menjalankan bisnis."
  },
  {
    name: "Gwen Sembada",
    role: "MDiT 4 Stars • Joined Alife 2019",
    image: "/gwenSembada.jpg",
    quote: "Alife has been a life-changing experience, offering not only financial growth but also incredible opportunities for personal development."
  },
  {
    name: "Jessica Suwarsono",
    role: "Monthly Income: 100jt+ • Joined Alife 2020",
    image: "/jessica.jpg",
    quote: "Sejak join ALIFE aku merasakan perubahan hidup yg signifikan since now I can have flexible working hours."
  },
  {
    name: "Martha Teja",
    role: "3 Digit Monthly Income • Joined Alife 2019",
    image: "/martateja.jpg",
    quote: "Satu satunya komunitas yang kasi full support dari segi edukasi maupun entertainnya."
  },
  {
    name: "Shannon Subeno",
    role: "Monthly Income: 120jt+",
    image: "/shannon.png",
    quote: "Devina is a straightforward and nurturing leader. When it comes to other aspects of growing the business."
  },
  {
    name: "Anastasia Inez",
    role: "Monthly Income: 110jt+",
    image: "/anastasia.jpg",
    quote: "Environment yg positive, creative & smart! Income acceleration nya luar biasa dengan plenty of room for growth."
  }
];

export default function SocialProof() {
  return (
    <section className="pt-8 md:pt-12 pb-24 md:pb-32 relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
            Success Stories
          </span>
          
          <h2 className="mt-6 font-instrument-serif">
            <span className="block text-[2rem] sm:text-6xl leading-[1.1] text-neutral-900">
              Sukses Itu Untuk Semua Orang.
            </span>
            <span className="block text-[1.8rem] sm:text-5xl italic font-light mt-2 text-neutral-800">
              Semua yang Berani Mencoba. 
            </span>
            <span className="block text-[2.2rem] sm:text-6xl uppercase mt-1">
              Pasti akhirnya Reach Their Goals.
            </span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-neutral-600 max-w-xl mx-auto text-sm md:text-base"
          >
            Ini Bukti Nyata dari Mereka yang Percaya. 
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              {/* Image */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />

              {/* Hover Content */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-8 text-center">
                <h3 className="text-white font-medium text-xl mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-white/80 text-base mb-3">
                  {testimonial.role}
                </p>
                <p className="text-white/90 text-base font-medium mb-4">
                  {testimonial.income}
                </p>
                <p className="text-white/90 text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <button className="mt-6 bg-white text-black text-sm font-medium py-2.5 px-8 rounded-full hover:bg-black hover:text-white transition-colors border border-white">
                  Read More
                </button>
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
