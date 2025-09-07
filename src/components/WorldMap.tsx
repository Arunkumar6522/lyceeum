"use client";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

const locations = [
  {
    name: "India",
    text: "India: Known for its diverse culture, IT industry, and rich history.",
    position: { top: 370, left: 820 }, // pixel coordinates
  },
  {
    name: "USA",
    text: "USA: A global leader in innovation and economy.",
    position: { top: 250, left: 220 },
  },
  {
    name: "UK",
    text: "UK: Famous for history, culture, and global influence.",
    position: { top: 170, left: 580 },
  },
  {
    name: "Australia",
    text: "Australia: Known for beaches, wildlife, and high quality of life.",
    position: { top: 560, left: 1000 },
  },
  {
    name: "Canada",
    text: "Canada: Land of natural beauty and multiculturalism.",
    position: { top: 120, left: 250 },
  },
];

export default function WorldMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <div className="relative" style={{ width: 1200, height: 700 }}>
        {/* Map Image */}
        <Image
          src="/Home/Map/Map.png"
          alt="World Map"
          fill
          className="rounded-lg shadow-lg object-contain"
        />

        {/* Pins */}
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="absolute group"
            style={{ top: loc.position.top, left: loc.position.left }}
            onMouseEnter={() => setHovered(loc.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <MapPin className="w-6 h-6 text-red-600 cursor-pointer" />

            {/* Tooltip */}
            {hovered === loc.name && (
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white text-sm rounded-lg px-3 py-1 shadow-lg whitespace-nowrap">
                {loc.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
