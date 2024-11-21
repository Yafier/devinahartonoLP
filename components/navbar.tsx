'use client'

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="relative">
      {/* Simple Glass Background */}
      <div className="relative bg-black/10 backdrop-blur-sm rounded-full border border-white/5 overflow-hidden">
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        
        {/* Navbar Content */}
        <nav className="px-4 md:px-6 py-2 flex items-center justify-center">
          <Link href="/" className="relative flex items-center gap-2">
            {/* Logo Container */}
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/alife_logo.png" // Make sure to add your logo to public folder
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Optional: Company Name */}
          </Link>
        </nav>
      </div>
    </div>
  );
}