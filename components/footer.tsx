"use client";

import { CircleDot } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <CircleDot className="h-8 w-8 transition-transform group-hover:rotate-90 duration-500 text-red-900" />
            <span className="text-xl font-medium bg-gradient-to-r from-red-950 to-red-900 bg-clip-text text-transparent">
              InsureElite
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}