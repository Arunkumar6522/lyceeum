"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function TutoringOptions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="services" className="w-full py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 gradient-text"
        >
          Our Tutoring Options
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4"
        >
          Choose the learning format that works best for you
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 sm:p-8 card-hover border border-emerald-200">
            <div className="flex items-start justify-between mb-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="bg-success/20 text-success px-3 py-1 rounded-full text-sm font-medium">Popular</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Group Tutoring</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">Join a small group of maximum 4 students for collaborative learning. Interactive sessions with personalized attention.</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Maximum 4 students per group
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Online sessions
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Collaborative learning environment
              </div>
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-4">$10 <span className="text-lg font-normal text-gray-600">CAD/hour</span></div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 sm:p-8 card-hover border border-teal-200">
            <div className="flex items-start justify-between mb-6">
              <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white p-3 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="bg-warning/20 text-warning px-3 py-1 rounded-full text-sm font-medium">Premium</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">One-to-One Tutoring</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">Personalized individual sessions tailored to your specific needs and learning pace. Available both online and in-person.</p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Complete personal attention
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Online & in-person options
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Exam preparation focused
              </div>
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-4">$25 <span className="text-lg font-normal text-gray-600">CAD/hour</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


