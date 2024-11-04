"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Unlimited Income Potential",
    description: "No ceiling on your earnings. Your success is directly tied to your effort and dedication.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Flexible Schedule",
    description: "Work on your own terms. Balance your professional and personal life effectively.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Professional Development",
    description: "Continuous learning and growth opportunities through training and mentorship programs.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Strong Support System",
    description: "Access to experienced mentors, cutting-edge tools, and a collaborative community.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Benefits of Joining Our Team
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Discover the advantages of building your career with us
        </p>

        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="md:w-1/3 relative aspect-[4/3] w-full">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}