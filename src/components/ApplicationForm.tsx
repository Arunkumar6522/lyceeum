"use client";

// import { useState } from "react";

export default function FreeMathClassForm() {
//   const [whatsapp, setWhatsapp] = useState(true);

  return (
    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-md w-full max-w-5xl mx-auto my-10">
      {/* Left Section */}
      <div className="bg-orange-500 text-white flex flex-col justify-center items-center p-8 md:p-12 md:w-1/2 relative"
            style={{
                backgroundImage: "url('Home/ApplicationForm/girl.png')", // place your image in /public as chalkboard-bg.png
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
      >

        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          &quot;Learning math is <br /> Fun with us&quot;
        </h2>

        <p className="text-center text-sm md:text-base italic">
          “Excelling in math is a super power which every student is capable of acquiring.”
        </p>

        <p className="mt-4 font-semibold text-sm md:text-base text-center">
          — Neelakantha Bhanu — <br />
          <span className="font-normal">World’s Fastest Human Calculator</span>
        </p> */}
      </div>

      {/* Right Section */}
      <div className="bg-primary p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Book a <span className="text-[#fece11]">FREE</span> Class for your child!
        </h3>

        <p className="text-white mb-4">😊 Enter your details below</p>

        {/* Form */}
        <form className="space-y-4">
          {/* Phone Number */}
          <div className="flex">
            <div className="flex items-center px-3 border border-gray-300 rounded-l-md bg-white">
              <span className="mr-1">🇮🇳</span> +91
            </div>
            <input
              type="tel"
              placeholder="Parent’s Mobile Number"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none placeholder:text-white"
              suppressHydrationWarning
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Parent’s Email Address"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-white"
            suppressHydrationWarning
          />

          {/* Child's Name */}
          <input
            type="text"
            placeholder="Child’s Name"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-white"
            suppressHydrationWarning
          />
          {/* Grade's Name */}
          <input
            type="text"
            placeholder="Grade"
            className="w-full text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none placeholder:text-white"
            suppressHydrationWarning
          />

          {/* Grade Dropdown */}
          {/* <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none">
            <option value="">Grade</option>
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
          </select> */}

          {/* Whatsapp Toggle */}
          {/* <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setWhatsapp(!whatsapp)}
              className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors ${
                whatsapp ? "bg-orange-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                  whatsapp ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
            <span className="text-sm text-gray-700">
              Get OTP & updates on Whatsapp
            </span>
          </div> */}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-primary font-semibold px-4 py-3 rounded-full transition hover:bg-white/90"
          >
            Book A Free Math Class
          </button>
        </form>
      </div>
    </div>
  );
}
