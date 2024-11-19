"use client";

import { CircleDot } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 relative bg-black/80 border-t border-orange-900/20" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container mx-auto px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />

        <div className="flex justify-center relative">
          <Link href="/" className="flex items-center space-x-2 group">
            <CircleDot className="h-8 w-8 transition-transform group-hover:rotate-90 duration-500 text-orange-400" />
            <span className="text-xl font-medium bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Test
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}