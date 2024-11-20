"use client";

import { CircleDot } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 relative bg-black/80 border-t border-red-900/20" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container mx-auto px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 via-transparent to-transparent" />

        <div className="flex flex-col items-center space-y-8 relative">
          <Link href="/" className="flex items-center space-x-2 group">
            <CircleDot className="h-8 w-8 transition-transform group-hover:rotate-90 duration-500 text-red-400" />
            <span className="text-xl font-medium bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
              Devina Hartono Team
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}