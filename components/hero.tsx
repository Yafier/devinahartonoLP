"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { GridPattern } from "./grid-pattern";
import Navbar from "./navbar";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          strokeDasharray="4 4"
          className="[mask-image:radial-gradient(white,transparent_75%)]"
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div
            className={`space-y-4 transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent">
              Unlock Your Potential
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bergabung dengan tim yang akan membawa Anda mencapai kesuksesan.
              Join a team that will lead you to success.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-gradient-to-r from-red-900 to-red-500 text-white hover:opacity-90 transition-opacity">
              Mulai Perjalanan Anda
            </Button>
          </div>

          {/* Video Placeholder */}
          <div className="relative mt-16 rounded-xl overflow-hidden aspect-video bg-gray-100 shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-400">Video Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}