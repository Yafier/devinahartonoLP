"use client";

import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Pendaftaran dan Orientasi",
    description: "Mulai perjalanan Anda dengan proses pendaftaran yang mudah. Tim kami akan membantu Anda memahami sistem dan peluang yang tersedia. Start your journey with our simple registration process. Our team will help you understand the system and available opportunities.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Pelatihan Intensif",
    description: "Ikuti program pelatihan komprehensif kami yang mencakup product knowledge, sales skills, dan digital marketing. Join our comprehensive training program covering product knowledge, sales skills, and digital marketing.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Praktik dan Pendampingan",
    description: "Terapkan pengetahuan Anda dengan dukungan penuh dari mentor berpengalaman. Apply your knowledge with full support from experienced mentors.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop"
  }
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-gray-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-900/30 rounded-full blur-3xl translate-y-1/4" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm md:text-base text-orange-400 px-4 py-2 rounded-full border border-orange-800 bg-orange-950/30 backdrop-blur-sm inline-block mb-4">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-red-400 bg-clip-text text-transparent mb-6">
            Langkah Menuju Sukses
          </h2>
          <p className="text-lg text-orange-100/70 max-w-2xl mx-auto leading-relaxed">
            Proses yang simple dan terstruktur untuk memulai karir barumu!
            <span className="block mt-2 text-orange-200/60 text-base">
              Simple and structured process to start your new career!
            </span>
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="relative mb-32 last:mb-0">
              {/* Step Number */}
              <div className="absolute -left-4 top-0 w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-500 rounded-2xl opacity-20 blur-xl" />
                <span className="relative text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  {step.id}
                </span>
              </div>

              {/* Content Container */}
              <div className="ml-20 bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-900/20">
                <div className="relative aspect-[21/9] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 z-10" />
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent mb-4">
                    {step.title}
                  </h3>
                  <p className="text-orange-100/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-4 top-20 bottom-0 w-[2px] bg-gradient-to-b from-orange-500/50 to-red-500/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}