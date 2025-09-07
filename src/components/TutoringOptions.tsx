"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TutoringOptions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full max-w-5xl mx-auto px-6 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        Tutoring Options
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold">Group Tutoring</h3>
          <p className="mt-2 text-gray-700">Group of 4 students. Each pay as less as 10 CAD per hour of tutoring. Classes are online.</p>
          <p className="mt-2 text-sm text-gray-600">Online Class</p>
        </div>
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold">One-to-One Tutoring</h3>
          <p className="mt-2 text-gray-700">Individual, one-to-one session. Both in-person and online sessions. Prices start at 25 CAD per hour of tutoring. Good for helping with assignments and exam preparation.</p>
        </div>
      </motion.div>
    </section>
  );
}


