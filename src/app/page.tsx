"use client";
// src/app/page.tsx (or Home.tsx depending on structure)

import WelcomeLyceeum from "@/components/WelcomeLyceeum";
import TutoringOptions from "@/components/TutoringOptions";
import CoursesOffered from "@/components/CoursesOffered";
import CurvyHeader from "@/components/CurvyHeader";
import { useState } from "react";
import EnquiryModal from "@/components/EnquiryModal";
import Image from "next/image";

export default function Home() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  return (
    <>
    
    <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-white pt-16 sm:pt-20">
      {/* Optimized Background Image */}
      <Image
        src="/student-using-laptop-having-online-class-with-teac-2025-03-18-19-01-01-utc.jpg"
        alt="Student using laptop for online tutoring class"
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover object-center"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative text-center space-y-4 sm:space-y-6 max-w-4xl px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center drop-shadow-2xl">
  <span className="text-white drop-shadow-lg">Unlock Your</span>{" "}
  <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">Math Potential</span>
  <br />
  <span className="text-white drop-shadow-lg">with</span>{" "}
  <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">Expert Tutors</span>
</h1>

        <p className="text-base sm:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow-lg font-medium px-2">
          Join hundreds of Canadian students who&apos;ve improved their grades with our personalized tutoring in Math, Science, and Engineering
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mt-6 sm:mt-8">
          <button onClick={() => setEnquiryOpen(true)} className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 border border-emerald-400/30">
            Get Started Today
          </button>
          <a href="#services" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300">
            Learn More
          </a>
        </div>






      </div>

      {/* Curved divider under the image */}
      <CurvyHeader />
    </div>
    <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    <WelcomeLyceeum />
    <TutoringOptions />
    <CoursesOffered />
    </>
  );
}
