'use client'

import { CircleDot } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <CircleDot className="h-8 w-8 transition-transform group-hover:rotate-90 duration-500 text-red-900" />
          <span className="text-xl font-medium bg-gradient-to-r from-red-950 to-red-900 bg-clip-text text-transparent">
            InsureElite
          </span>
        </Link>
      </nav>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/20 to-transparent" />
    </header>
  );
}