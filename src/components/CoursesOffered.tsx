"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CoursesOffered() {
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
        Courses Offered
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="space-y-8 text-gray-700"
      >
        <p>
          We offer courses on different areas of STEM. Some of the popular courses among our students are below. School to university, and specialized courses can be efficiently tutored to you. Many Engineering courses offered at McGill University and Concordia University are also our specialties. We can help you with assignments, exam preparation, understanding lecture and lab notes. All you need to do is contact us @4387635120 or email at lyceeum@gmail.com
        </p>
        <p>Below is a list of courses that our previous students have taken with us. Contact us for more information.</p>
        <div>
          <h3 className="text-xl font-semibold">CEGEP and University Level courses</h3>
          <p className="mt-2">Chemistry (CHEM 205, CHEM 206, CHEM 271, CHEM 272, CHEM 311, CHEM 312)</p>
          <p className="mt-1">Biology (BIOL 101, BIOL 102, BIOL 201, BIOL 202, BIOL 203, BIOL 301)</p>
          <p className="mt-1">Mathematics ( MAT 101, MAT 103, MAT 203, MAT 105, MAT 202 )</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Nursing courses</h3>
          <p className="mt-2">Mathematics for Nursing (MATH1036, MATH 1084, MATH 1034, MATH 1193, NURS 1031, NURS 1071, NURS 1001, PNUR series)</p>
          <p className="mt-1">Anatomy and physiology (NURS 1003, NURS 1070, ANAT 1001)</p>
          <p className="mt-1">Various biology-related special courses: Immunology, Virology, Molecular biology, Molecular and general genetics, General biology.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">On demand courses</h3>
          <p className="mt-2">AutoCAD, Fusion</p>
          <p className="mt-1">Mass transfer and physical-chemistry courses at McGill University and Concordia university (CHEE 200, CHEE 204, CHEE 220, CHE 314, CHEE 315, MECH 351, MECH 352, MECH 361, ENGR 251, ENGR 361)</p>
          <p className="mt-1">List is long, contact us for further details.</p>
        </div>
      </motion.div>
    </section>
  );
}


