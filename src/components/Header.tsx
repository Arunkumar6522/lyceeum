// src/components/ui/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-gradient-to-r from-emerald-500/90 to-teal-500/90 backdrop-blur-sm shadow-lg fixed top-0 left-0 z-50 border-b border-emerald-400/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Left: Company Name */}
        <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-bold text-white drop-shadow-lg">
          Lyceeum Tutoring
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition-colors font-medium
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:mx-auto
                  after:h-[2px] after:w-0 after:transition-all after:duration-300
                  ${
                    isActive
                      ? "text-white font-semibold after:w-full after:bg-white"
                      : "text-white/80 hover:text-white hover:after:w-full after:bg-white"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right: Contact CTA */}
        <div className="hidden md:block">
          <Link href="/contact" className="px-4 lg:px-6 py-2 lg:py-3 bg-white text-emerald-600 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:bg-emerald-50 text-sm lg:text-base">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-emerald-500/95 backdrop-blur-sm border-t border-emerald-400/30">
          <nav className="flex flex-col space-y-3 px-4 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative transition-colors after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
                              after:h-[2px] after:w-0 after:transition-all after:duration-300
                              ${
                                isActive
                                  ? "text-white font-semibold after:w-full after:left-0 after:bg-white"
                                  : "text-white/80 hover:text-white hover:after:w-full hover:after:left-0 after:bg-white"
                              }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Contact Button */}
            <Link href="/contact" className="px-6 py-3 bg-white text-emerald-600 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center hover:bg-emerald-50 mx-2 mt-2" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
