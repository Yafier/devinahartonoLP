"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface Item {
  quote: string;
  name: string;
  title: string;
  image: string;
}

export function InfiniteMovingCards({
  items,
  speed = "slow",
  className,
}: {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "slow";
  className?: string;
}) {
  const [duplicatedItems, setDuplicatedItems] = useState<Item[]>([]);

  useEffect(() => {
    setDuplicatedItems([...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items]);
  }, [items]);

  const getAnimationDuration = () => {
    switch (speed) {
      case "fast":
        return 50;
      case "slow":
        return 200;
      default:
        return 200;
    }
  };

  const Card = ({ item, idx }: { item: Item; idx: number }) => (
    <div
      key={idx}
      className="relative w-[400px] h-[240px] flex-shrink-0 rounded-xl overflow-hidden group"
    >
      {/* Image with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Card Content - Simplified to only show title */}
      <div className="relative h-full p-6 flex items-end">
        <div className="relative z-10 w-full">
          {/* Border Gradient */}
          <div 
            className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 group-hover:opacity-100 transition-opacity" 
            style={{ 
              mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude' 
            }} 
          />
          
          {/* Updated title styling */}
          <h3 className="text-base text-white/90 text-center">
            {item.name}
          </h3>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col gap-12">
        {/* Top row - moving right */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex items-center gap-6"
            style={{
              animation: `scroll-right ${getAnimationDuration()}s linear infinite`,
              width: "max-content",
              willChange: "transform"
            }}
          >
            {duplicatedItems.map((item, idx) => (
              <Card key={`right-${idx}`} item={item} idx={idx} />
            ))}
          </div>
        </div>

        {/* Bottom row - moving left */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex items-center gap-6"
            style={{
              animation: `scroll-left ${getAnimationDuration()}s linear infinite`,
              width: "max-content",
              willChange: "transform"
            }}
          >
            {duplicatedItems.map((item, idx) => (
              <Card key={`left-${idx}`} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 