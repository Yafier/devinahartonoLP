"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Wijaya",
    role: "Senior Insurance Agent",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    quote: "Bergabung dengan tim ini mengubah hidup saya. Sistem yang ada membantu saya mencapai target dengan lebih mudah.",
    stars: 5,
    yearsJoined: 3,
  },
  {
    name: "Budi Santoso",
    role: "Insurance Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    quote: "Program mentoring yang luar biasa membantu saya berkembang pesat dalam industri ini.",
    stars: 5,
    yearsJoined: 2,
  },
  {
    name: "Linda Kusuma",
    role: "Financial Advisor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    quote: "Dukungan tim dan tools digital membuat pekerjaan menjadi lebih efisien dan menyenangkan.",
    stars: 5,
    yearsJoined: 4,
  },
  {
    name: "Rudi Hartono",
    role: "Senior Financial Advisor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    quote: "Tim yang solid dan supportive membuat perjalanan karir saya sangat menyenangkan.",
    stars: 5,
    yearsJoined: 3,
  },
  {
    name: "Diana Putri",
    role: "Insurance Specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    quote: "Sistem yang terstruktur membantu saya berkembang dengan cepat dalam industri ini.",
    stars: 5,
    yearsJoined: 2,
  },
];

export default function SocialProof() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const next = () => {
    setCurrentPage((current) => (current + 1) % totalPages);
  };

  const prev = () => {
    setCurrentPage((current) => 
      current === 0 ? totalPages - 1 : current - 1
    );
  };

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent mb-4">
          Success Stories
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Kisah sukses dari rekan-rekan yang telah bergabung dengan tim kami.
          Success stories from our team members.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={next}
              className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-6 transition-all duration-500"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-orange-500/20" />
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-sm text-gray-700 text-center mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-red-600 mt-1">
                        {testimonial.yearsJoined} years with us
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPage ? 'bg-red-600 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}