"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SilverGradientDivider } from "./ui/silver-gradient-divider";
import Marquee from "./ui/marquee";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Case {
  name: string;
  image: string;
  income: string;
  yearsJoined: number;
  position: string;
  story: string;
  englishStory: string;
  date: string;
  category: string;
}

const cases: Case[] = [
  {
    name: "Mariska Karsana",
    image: "/mariskakarsana.jpg",
    income: "Monthly Income: 300jt+",
    yearsJoined: 5,
    position: "Senior Insurance Advisor",
    story: "Semenjak join Alife menemukan IKIGAI — purpose dan goal dalam menjalankan bisnis",
    englishStory: "Since joining Alife, I found IKIGAI — purpose and goal in running business.",
    date: "Joined Alife 2019",
    category: "Success Story",
  },
  // Add more cases as needed
  {
    name: "Gwen Sembada",
    image: "/gwensembada.jpg",
    income: "Monthly Income: 100jt+",
    yearsJoined: 5,
    position: "MDiT 4 Stars",
    story: "Alife has been a life-changing experience, offering not only financial growth but also incredible opportunities for personal development.",
    englishStory: "Alife has been a life-changing experience, offering not only financial growth but also incredible opportunities for personal development.",
    date: "Joined Alife 2019",
    category: "Success Story",
  },
  {
    name: "Jessica Suwarsono",
    image: "/jessica.jpg",
    income: "Monthly Income: 100jt+",
    yearsJoined: 2,
    position: "Senior Insurance Advisor",
    story: "Sejak join ALIFE aku merasakan perubahan hidup yg signifikan since now I can have flexible working hours.",
    englishStory: "Since joining ALIFE, I felt a significant life change since now I can have flexible working hours.",
    date: "Joined Alife 2020",
    category: "Success Story",
  },
  {
    name: "Martha Teja",
    image: "/martateja.jpg",
    income: "Monthly Income: 300jt+",
    yearsJoined: 2,
    position: "3 Digit Monthly Income",
    story: "Satu satunya komunitas yang kasi full support dari segi edukasi maupun entertainnya.",
    englishStory: "The only community that provides full support from education and entertainment.",
    date: "Joined Alife 2019",
    category: "Success Story",
  },
  {
    name: "Shannon Subeno",
    image: "/shannon.png",
    income: "Monthly Income: 120jt+",
    yearsJoined: 2,
    position: "Senior Insurance Advisor",
    story: "Devina is a straightforward and nurturing leader. When it comes to other aspects of growing the business.",
    englishStory: "Devina is a straightforward and nurturing leader. When it comes to other aspects of growing the business.",
    date: "Joined Alife 2019",
    category: "Success Story",
  },
  {
    name: "Anastasia Inez",
    image: "/anastasia.jpg",
    income: "Monthly Income: 110jt+",
    yearsJoined: 2,
    position: "Senior Insurance Advisor",
    story: "Environment yg positive, creative & smart! Income acceleration nya luar biasa dengan plenty of room for growth.",
    englishStory: "Environment yg positive, creative & smart! Income acceleration nya luar biasa dengan plenty of room for growth.",
    date: "Joined Alife 2019",
    category: "Success Story",
  },
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideVariants = {
    center: { scale: 1, x: 0, zIndex: 5, opacity: 1, rotateY: 0 },
    left: { scale: 0.8, x: -300, zIndex: 3, opacity: 0.7, rotateY: 15 },
    right: { scale: 0.8, x: 300, zIndex: 3, opacity: 0.7, rotateY: -15 },
    farLeft: { scale: 0.6, x: -450, zIndex: 1, opacity: 0.4, rotateY: 30 },
    farRight: { scale: 0.6, x: 450, zIndex: 1, opacity: 0.4, rotateY: -30 },
  };

  const getVariant = (index: number) => {
    const diff = (index - currentIndex + cases.length) % cases.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === cases.length - 1) return "left";
    if (diff === 2) return "farRight";
    return "farLeft";
  };

  const navigate = (direction: number) => {
    setCurrentIndex((prev) => (prev + direction + cases.length) % cases.length);
  };

  return (
    <section className="py-24 md:py-32 relative bg-neutral-100">
      <div className="px-4 md:px-0">
        <div className="max-w-screen-2xl mx-auto">
          <div className="max-w-[1400px] mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <span className="hidden md:inline-block text-xs tracking-[0.3em] text-neutral-500 uppercase">
                Success Stories
              </span>
              
              <h2 className="mt-6 font-instrument-serif">
                <span className="block text-[1.8rem] sm:text-6xl leading-[1.1] text-neutral-900">
                  SHARED BY
                </span>
                <span className="block text-[1.6rem] sm:text-5xl italic font-light mt-2">
                  perspective
                </span>
                <span className="block text-[1.8rem] sm:text-6xl uppercase mt-1">
                  OUR CLIENTS
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="relative mt-12 md:mt-20">
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-r from-neutral-100 via-neutral-100/80 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-l from-neutral-100 via-neutral-100/80 to-transparent z-10" />

            <Marquee 
              className="py-2 md:py-4" 
              pauseOnHover
              speed={20}
              gradientWidth={0}
            >
              {cases.map((item: Case, index: number) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[280px] md:w-[400px] flex-shrink-0 px-2 md:px-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                        <p className="text-xs tracking-[0.2em] text-neutral-600 uppercase">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-2xl sm:text-3xl font-instrument-serif group-hover:text-neutral-700 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase">
                          {item.date}
                        </p>
                      </div>

                      <p className="text-xs tracking-[0.2em] text-neutral-500 uppercase">
                        {item.position}
                      </p>

                      <p className="text-neutral-600 leading-relaxed line-clamp-3">
                        {item.story}
                      </p>
                      
                      <p className="text-sm text-neutral-500 italic line-clamp-2">
                        {item.englishStory}
                      </p>

                      <div className="pt-4 flex justify-between items-center border-t border-neutral-200">
                        <p className="text-sm text-neutral-500">
                          Monthly Income: <span className="font-semibold text-neutral-900">{item.income}</span>
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                        >
                          Read More →
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-24"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-instrument-serif leading-snug text-neutral-800 mb-6">
              Ready to write your success story?
            </h3>
            <p className="text-neutral-600 leading-relaxed italic">
              "Join our community of achievers and transform your life today."
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <SilverGradientDivider />
      </div>
    </section>
  );
}

