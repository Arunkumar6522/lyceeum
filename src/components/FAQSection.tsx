"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

type Item = { id: string; q: string; a: JSX.Element };

const items: Item[] = [
  {
    id: "tutoring-type",
    q: "What type of tutoring?",
    a: (
      <p className="mt-2 text-gray-700">Lyceeum offers one-on-one private tutoring online or in person, and group tutoring online for a maximum of 4 students per session on weekdays or weekends.</p>
    ),
  },
  {
    id: "location",
    q: "Where is the location?",
    a: (
      <p className="mt-2 text-gray-700">Our tutors provide flexible one-to-one in-person tutoring and can meet you at your preferred location, whether it's your home or a nearby public library or café spot close to a metro station in Montreal. We do not operate in-person lectures in Ontario region, yet.</p>
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
      <p className="mt-2 text-gray-700">Lyceeum offers a wide range of courses in mathematics, chemistry, and biology, catering to both school and college students. We specialize in CGEP courses and provide tailored tutoring services to meet your specific needs. For more detailed information about our courses and services, refer to our services.</p>
    ),
  },
  { id: "billing", q: "Do I pay my tutor at the end of each session?", a: (<p className="mt-2 text-gray-700">No. Lyceeum will collect bills at the end of each month.</p>) },
  { id: "contract", q: "Do I have to sign a contract with Lyceeum Tutoring?", a: (<p className="mt-2 text-gray-700">At Lyceeum, we offer flexible tutoring options with no long-term commitment required. You can choose to take as little as a 1-hour session or schedule repeat sessions on a monthly basis. It's entirely up to you and your learning needs.</p>) },
  { id: "summer", q: "Do you offer summer tutoring?", a: (<p className="mt-2 text-gray-700">Yes, Lyceeum's teaching services are available throughout the year, ensuring that our students have access to quality education whenever they need it.</p>) },
  { id: "payment", q: "What Payment method do you accept?", a: (<p className="mt-2 text-gray-700">We accept various forms of payment at Lyceeum, including cash, cheque, and email money transfer.</p>) },
  { id: "cancel", q: "What is the session cancellation policy?", a: (<p className="mt-2 text-gray-700">At Lyceeum, we understand that schedules can change, and we offer the flexibility to cancel your tutoring session anytime, provided that you give us at least 24 hours' notice before the scheduled session.</p>) },
  { id: "more", q: "More questions?", a: (<p className="mt-2 text-gray-700">For more questions, please call now: <span className="font-semibold">438-673-5120</span> or <span className="font-semibold">lyceeum@gmail.co</span></p>) },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
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
        Frequently Asked Questions
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="divide-y rounded-xl border"
      >
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="group">
              <h3>
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-panel`}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
               >
                  <span className="text-base md:text-lg font-semibold">{item.q}</span>
                  <span
                    className={`ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border transition-transform ${
                      isOpen ? "rotate-45 bg-primary text-white border-primary" : "bg-white text-gray-800"
                    }`}
                    aria-hidden="true"
                  >
                    +
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
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className="px-4 pb-4 pt-0">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}


