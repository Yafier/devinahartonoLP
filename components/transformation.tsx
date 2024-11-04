"use client";

import { Button } from "@/components/ui/button";
import { MagicCard } from "./magic-card";
import { BookOpen, Brain, Workflow } from "lucide-react";

export default function Transformation() {
  const steps = [
    {
      title: "Empty Your Glass",
      description: "Buka pikiran Anda dan siap untuk belajar hal-hal baru. Be ready to learn and grow.",
      icon: BookOpen,
    },
    {
      title: "Trust The Process",
      description: "Sabar dan konsisten dalam proses pembelajaran. Patience and consistency are key.",
      icon: Brain,
    },
    {
      title: "Follow The System",
      description: "Ikuti sistem yang telah terbukti berhasil. Follow our proven system for success.",
      icon: Workflow,
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent mb-4">
            Your Transformation Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan agen yang telah berhasil mengubah hidup mereka.
            Join thousands of successful agents who transformed their lives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <MagicCard 
              key={index}
              gradientColor="rgba(185, 28, 28, 0.2)"
              className="h-[300px]"
            >
              <div className="flex flex-col items-center text-center h-full">
                <step.icon className="w-12 h-12 text-red-700 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </MagicCard>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-8">
            <p className="text-2xl font-semibold text-gray-800 mb-2">1000+</p>
            <p className="text-gray-600">Successful Transformations</p>
          </div>
          <Button 
            className="bg-gradient-to-r from-red-900 to-red-500 text-white px-8 py-6 text-lg hover:opacity-90 transition-opacity"
          >
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
}