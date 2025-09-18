"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

type Item = { id: string; q: string; a: JSX.Element };

const items: Item[] = [
  {
    id: "tutoring-type",
    q: "What type of tutoring do you offer?",
    a: (
      <div className="mt-3 text-gray-700 space-y-2">
        <p className="font-medium text-emerald-700">We offer two main types of tutoring:</p>
        <div className="grid gap-3 mt-3">
          <div className="flex items-start gap-3 bg-emerald-50 p-3 rounded-lg">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-emerald-800">One-on-One Tutoring:</span> Private sessions online or in-person, completely personalized to your needs.
            </div>
          </div>
          <div className="flex items-start gap-3 bg-teal-50 p-3 rounded-lg">
            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <span className="font-semibold text-teal-800">Group Tutoring:</span> Small groups (max 4 students) online, available weekdays and weekends.
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "location",
    q: "Where do you provide tutoring services?",
    a: (
      <div className="mt-3 text-gray-700">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-emerald-500">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-emerald-800">Montreal Area</span>
          </div>
          <p>For one-on-one in-person tutoring, we meet you at your preferred location:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Your home</li>
            <li>• Public libraries</li>
            <li>• Café spots near metro stations</li>
          </ul>
          <p className="mt-2 text-sm text-gray-600 italic">Note: In-person services are currently available in Montreal only. Ontario coming soon!</p>
        </div>
      </div>
    ),
  },
  {
    id: "one-to-one",
    q: "What is one-on-one tutoring?",
    a: (
      <p className="mt-2 text-gray-700">Our private tutoring sessions can be held at your preferred location, whether at home, a public library, or a café spot. These sessions are tailored to address specific concepts and doubts that the student may have difficulty with and can also cover in-depth lectures from school. We charge an hourly rate for our services, which is detailed in the pricing information below. For pricing, see below.</p>
    ),
  },
  {
    id: "group",
    q: "What is group tutoring?",
    a: (
      <p className="mt-2 text-gray-700">Our group tutoring sessions are limited to a maximum of 4 students, ensuring a personalized and engaging learning experience. Our sessions begin with lectures and theories, followed by practical problem-solving activities. Our tutors work individually with each student, providing focused attention to address their difficulties one at a time. We also align our teaching with the students' school syllabus, ensuring that our tutoring complements their ongoing studies.</p>
    ),
  },
  {
    id: "schedule",
    q: "How flexible is scheduling?",
    a: (
      <p className="mt-2 text-gray-700">We understand that your schedule is important, and that's why we offer flexible availability for our tutoring sessions. Students can choose any day of the week between 9 am and 10 pm for their one-to-one in-person lessons. Our group lessons, on the other hand, take place on weekdays from 5 PM to 8 PM and on weekends from 10 AM to 5 PM.</p>
    ),
  },
  {
    id: "tutors",
    q: "Who are the tutors at Lyceeum?",
    a: (
      <div className="mt-2 text-gray-700">
        <p>At Lyceeum, our tutors are a team of highly qualified professionals, consisting of university graduates, PhD students in engineering and sciences, and recent university graduates. They have not only mastered their tutoring subjects but also possess exceptional teaching skills. Rest assured, our tutors are well-equipped to provide you with the best learning experience possible.</p>
        <ul className="mt-3 list-disc pl-6 space-y-1">
          <li>Strong subject knowledge: a deep understanding of the subject and clear explanations.</li>
          <li>Patience and empathy: supportive guidance for students who struggle.</li>
          <li>Good communication skills: adapt teaching to the student's learning style.</li>
          <li>Organizational skills: structured sessions with goals and progress tracking.</li>
          <li>Time management skills: punctual, efficient coverage of required material.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "subjects",
    q: "Which subjects do you tutor?",
    a: (
      <div className="mt-3 text-gray-700">
        <p className="mb-4 font-medium text-emerald-700">We specialize in STEM subjects for both school and college students:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-emerald-50 p-4 rounded-lg text-center">
            <div className="w-8 h-8 bg-emerald-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">∑</span>
            </div>
            <h4 className="font-semibold text-emerald-800 mb-1">Mathematics</h4>
            <p className="text-xs text-gray-600">Algebra, Calculus, Statistics, etc.</p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg text-center">
            <div className="w-8 h-8 bg-teal-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">⚗</span>
            </div>
            <h4 className="font-semibold text-teal-800 mb-1">Chemistry</h4>
            <p className="text-xs text-gray-600">Organic, Inorganic, Physical</p>
          </div>
          <div className="bg-cyan-50 p-4 rounded-lg text-center">
            <div className="w-8 h-8 bg-cyan-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">🧬</span>
            </div>
            <h4 className="font-semibold text-cyan-800 mb-1">Biology</h4>
            <p className="text-xs text-gray-600">Cell, Molecular, Genetics</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600 italic">Specializing in CEGEP courses with tailored approaches for each student's needs.</p>
      </div>
    ),
  },
  { 
    id: "billing", 
    q: "Do I pay my tutor at the end of each session?", 
    a: (
      <div className="mt-3">
        <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
          <span className="text-amber-800 font-semibold">💳 Monthly Billing:</span>
          <p className="text-gray-700 mt-1">No need to pay after each session. Lyceeum handles all billing at the end of each month for your convenience.</p>
        </div>
      </div>
    ) 
  },
  { 
    id: "contract", 
    q: "Do I need to sign a long-term contract?", 
    a: (
      <div className="mt-3">
        <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
          <span className="text-green-800 font-semibold">✅ No Contracts Required!</span>
          <p className="text-gray-700 mt-1">Complete flexibility - book as little as 1 hour or schedule monthly sessions. No long-term commitments. It's entirely up to your learning needs.</p>
        </div>
      </div>
    ) 
  },
  { 
    id: "payment", 
    q: "What payment methods do you accept?", 
    a: (
      <div className="mt-3 text-gray-700">
        <p className="mb-3 font-medium text-emerald-700">We accept multiple convenient payment options:</p>
        <div className="grid gap-2">
          <div className="flex items-center gap-3 bg-gray-50 p-2 rounded">
            <span className="text-green-600">💵</span> Cash
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-2 rounded">
            <span className="text-blue-600">🏦</span> Cheque
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-2 rounded">
            <span className="text-purple-600">📧</span> Email Money Transfer (e-Transfer)
          </div>
        </div>
      </div>
    ) 
  },
  { 
    id: "cancel", 
    q: "What is your cancellation policy?", 
    a: (
      <div className="mt-3">
        <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
          <span className="text-blue-800 font-semibold">🔄 Flexible Cancellation:</span>
          <p className="text-gray-700 mt-1">Cancel anytime with <span className="font-semibold">24 hours notice</span> before your scheduled session. We understand that life happens!</p>
        </div>
      </div>
    ) 
  },
  { 
    id: "more", 
    q: "Still have questions?", 
    a: (
      <div className="mt-3">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-4 rounded-lg">
          <p className="text-emerald-800 font-semibold mb-3">📞 Get in touch with us!</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-emerald-600">☎️</span>
              <a href="tel:438-673-5120" className="text-emerald-700 font-semibold hover:text-emerald-800">438-673-5120</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600">✉️</span>
              <a href="mailto:lyceeum@gmail.co" className="text-emerald-700 font-semibold hover:text-emerald-800">lyceeum@gmail.co</a>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">We're here to help you succeed!</p>
        </div>
      </div>
    ) 
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our tutoring services in Montreal
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-4"
        >
        {items.map((item, index) => {
          const isOpen = openId === item.id;
          return (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <h3>
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30 rounded-xl"
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-panel`}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
               >
                  <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">{item.q}</span>
                  <span
                    className={`flex-shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                      isOpen 
                        ? "rotate-45 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-500 shadow-lg" 
                        : "bg-white text-emerald-600 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400"
                    }`}
                    aria-hidden="true"
                  >
                    <span className="text-lg font-bold">+</span>
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`${item.id}-panel`}
                    role="region"
                    aria-labelledby={`${item.id}-button`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-gray-100 pt-4">
                        {item.a}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        </motion.div>
      </div>
    </section>
  );
}


