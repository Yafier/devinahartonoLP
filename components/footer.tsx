"use client";

import { CircleDot } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-950 border-t border-orange-900/20">
      <div className="container mx-auto px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-900/30 rounded-full blur-3xl translate-y-1/4" />

        <div className="flex justify-center relative">
          <Link href="/" className="flex items-center space-x-2 group">
            <CircleDot className="h-8 w-8 transition-transform group-hover:rotate-90 duration-500 text-orange-400" />
            <span className="text-xl font-medium bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Devina Hartono Team
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}