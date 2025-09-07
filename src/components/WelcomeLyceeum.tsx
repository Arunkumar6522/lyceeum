"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WelcomeLyceeum() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full max-w-5xl mx-auto px-6 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-center mb-6"
      >
        Welcome to Lyceeum
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="space-y-4 text-gray-700 leading-relaxed"
      >
        <p>
          Embarking on a university-level math course can be a challenging yet rewarding experience. Whether you're navigating calculus, linear algebra, or advanced statistics, having a skilled math tutor by your side can make all the difference. At Lycéeum, we take pride in being a leading provider of exceptional math tutoring services in Canada, dedicated to helping university students excel in their mathematical pursuits.
        </p>
        <p>
          Our team of experienced and highly qualified math tutors is committed to fostering a supportive learning environment tailored to the unique needs of university students. With a deep understanding of the intricacies of university-level math, our tutors guide students through complex concepts, offering clarity and insights that go beyond the classroom.
        </p>
        <p>
          Why choose Lyceeum for your university math tutoring needs? Our tutors are not only proficient in the subject matter but also adept at connecting with students, making the learning process engaging and enjoyable. We prioritize personalized sessions, ensuring that each student receives the attention they deserve to grasp challenging mathematical concepts.
        </p>
        <p>
          Navigating the university curriculum can be overwhelming, but our tutors at Lycéeum are here to simplify the journey. Whether you're seeking assistance with assignments, preparing for exams, or aiming to deepen your understanding of key mathematical principles, our tutors are well-equipped to provide comprehensive support.
        </p>
        <p>
          Don't let math anxiety hinder your academic success. Choose Lyceeum as your trusted partner on your university math journey. Visit <a className="text-primary underline" href="https://www.lyceeum.ca/" target="_blank" rel="noreferrer">https://www.lyceeum.ca/</a> to explore our tutoring services and take the first step towards mastering mathematics at the university level.
        </p>
      </motion.div>
    </section>
  );
}


