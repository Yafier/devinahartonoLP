"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Included() {
  const [activeNumber, setActiveNumber] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: 1,
      title: "Sistem yang Teruji",
      description: "Proven system that has helped hundreds achieve their financial goals through insurance careers.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Pelatihan Komprehensif",
      description: "Comprehensive training program covering all aspects of insurance and sales techniques.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Dukungan Penuh",
      description: "Full support system with experienced mentors and digital tools for success.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const number = parseInt(entry.target.getAttribute("data-number") || "1");
            setActiveNumber(number);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const elements = document.querySelectorAll("[data-number]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white relative" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          What's Included
        </h2>
        <p className="text-gray-600 text-center mb-24 max-w-2xl mx-auto">
          Everything you need to succeed in your insurance career journey.
        </p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-500 to-red-900 transition-all duration-500"
              style={{ height: `${(activeNumber / 3) * 100}%` }}
            />
          </div>

          <div className="space-y-64">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                data-number={feature.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-32 items-center relative`}
              >
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                  <div className={`absolute size-32 border-2 ${
                    activeNumber >= feature.id ? 'border-red-500/30' : 'border-gray-200/60'
                  } rotate-45 transition-colors duration-500`} />
                  <div className={`absolute size-24 border-2 ${
                    activeNumber >= feature.id ? 'border-red-500/60' : 'border-gray-200/60'
                  } rotate-45 transition-colors duration-500`} />
                  <div 
                    className={`relative size-16 rounded-full flex items-center justify-center bg-gradient-to-br ${
                      activeNumber >= feature.id 
                        ? 'from-red-900 to-red-500 border-red-400' 
                        : 'from-gray-200 to-gray-300 border-gray-300'
                    } border-2 transition-all duration-500 shadow-lg`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {feature.id}
                    </span>
                    {activeNumber >= feature.id && (
                      <Check className="absolute -top-2 -right-2 size-6 text-blue-500 bg-white rounded-full p-1 shadow-md" />
                    )}
                  </div>
                </div>

                <div className="md:w-1/3 p-8">
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>

                <div className="md:w-1/3 relative aspect-square">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}