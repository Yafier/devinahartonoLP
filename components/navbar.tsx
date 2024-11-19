'use client'

import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "Transform", href: "#transformation" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Features", href: "#included" },
    { name: "Benefits", href: "#benefits" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#cta" },
  ];

  return (
    <div className="relative">
      {/* Glow Effect */}
      <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-red-800/10 via-red-900/10 to-red-800/10 blur-md" />
      
      {/* Glass Background */}
      <div className="relative bg-black/20 backdrop-blur-sm border border-white/5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.2)] overflow-hidden">
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Navbar Content */}
        <nav className="px-4 md:px-6 py-1 flex items-center justify-center">
          <ul className="flex items-center gap-2 md:gap-6 overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="text-[9px] md:text-xs text-gray-300/80 hover:text-white transition-colors duration-200 whitespace-nowrap px-2 py-1 rounded-full hover:bg-white/5"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}