"use client";
// src/app/page.tsx (or Home.tsx depending on structure)

import WelcomeLyceeum from "@/components/WelcomeLyceeum";
import TutoringOptions from "@/components/TutoringOptions";
import CoursesOffered from "@/components/CoursesOffered";
import CurvyHeader from "@/components/CurvyHeader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EnquiryModal from "@/components/EnquiryModal";

export default function Home() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  return (
    <>
    
    <div
      className="relative flex items-center justify-center min-h-screen px-6 sm:px-0 text-white"
      style={{
        backgroundImage: "url('Home/Carousal/Carousal_image.png')", // place your image in /public as chalkboard-bg.png
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {/* Top-right Enquiry button */}
      <div className="absolute top-20 right-4 z-20 sm:top-24">
        <button onClick={() => setEnquiryOpen(true)} className="px-4 py-2 bg-white text-primary font-semibold rounded-full shadow-md hover:bg-white/90 transition-colors">
          Enquiry
        </button>
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative text-center space-y-6 max-w-3xl px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl italic font-extrabold leading-snug text-center text-primary">
  <span className="text-white">Excellence in</span>{" "}
  <span className="text-primary">STEM Education</span>
  <br />
  <span className="text-white">Math • Science • Engineering</span>
  <br />
  <span className="text-primary">Your Success is Our Mission!</span>
</h2>



        <blockquote className="text-md sm:text-lg text-gray-300 pl-4 italic">
          &quot;Empowering students to excel in STEM subjects through personalized
          tutoring and expert guidance&quot;
          <br />
          {/* — Lyceeum Tutoring Services */}
        </blockquote>

        {/* Primary CTA */}
        <div>
          <button onClick={() => setEnquiryOpen(true)} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
            Enquire Now
          </button>
        </div>


        <section className="text-center">
  <div>
    {/* Teacher Avatars */}
    <Image
      src="/Home/Carousal/Deeksha.jpg"
      alt="Teacher 1"
      width={60}
      height={60}
      className="w-16 h-16 rounded-full border-3 border-white shadow-md object-cover"
    />
    <Image
      src="/Home/Carousal/Kaveri.JPG"
      alt="Teacher 2"
      width={60}
      height={60}
      className="w-16 h-16 rounded-full border-3 border-white shadow-md object-cover -ml-3"
    />
    <Image
      src="/Home/Carousal/Maadhurima.JPG"
      alt="Teacher 3"
      width={60}
      height={60}
      className="w-16 h-16 rounded-full border-3 border-white shadow-md object-cover -ml-3"
    />
    <Image
      src="/Home/Carousal/Snehmoy.JPG"
      alt="Teacher 4"
      width={60}
      height={60}
      className="w-16 h-16 rounded-full border-3 border-white shadow-md object-cover -ml-3"
    />
    <Image
      src="/Home/Carousal/Sri.JPG"
      alt="Teacher 5"
      width={60}
      height={60}
      className="w-16 h-16 rounded-full border-3 border-white shadow-md object-cover -ml-3"
    />
    <Image
      src="/Home/Carousal/Tushar.JPG"
      alt="Teacher 6"
      width={60}
      height={60}
      className="w-16 h-16 rounded-full border-3 border-white shadow-md object-cover -ml-3"
    />

    {/* Count bubble */}
    <div className="w-16 h-16 flex items-center justify-center rounded-full border-3 border-white bg-primary text-white font-bold text-lg shadow-md -ml-3">
      200+
    </div>
  </div>
</section>




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
