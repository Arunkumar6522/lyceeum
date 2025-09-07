"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Role = "student" | "mentor";

export default function EnquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [role, setRole] = useState<Role>("student");

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-lg mx-4 rounded-xl bg-white shadow-lg"
            role="dialog"
            aria-modal="true"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-lg font-semibold">Enquiry</h3>
          <button aria-label="Close" onClick={onClose} className="rounded p-1 hover:bg-gray-100">
            ✕
          </button>
        </div>

        <div className="px-5 pt-4">
          <div className="inline-flex rounded-full border p-1 bg-gray-50">
            <button
              type="button"
              onClick={() => setRole("student")}
              className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                role === "student" ? "bg-primary text-white" : "text-gray-700"
              }`}
              aria-pressed={role === "student"}
            >
              Student / Parent
            </button>
            <button
              type="button"
              onClick={() => setRole("mentor")}
              className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                role === "mentor" ? "bg-primary text-white" : "text-gray-700"
              }`}
              aria-pressed={role === "mentor"}
            >
              Mentor
            </button>
          </div>
        </div>

        <form action="mailto:lyceeum@gmail.co" method="post" encType="text/plain" className="px-5 py-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input className="w-full border px-3 py-2 rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full border px-3 py-2 rounded" required />
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            {role === "student" ? (
              <motion.div key="student" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Student Name</label>
                  <input className="w-full border px-3 py-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Grade / Course</label>
                  <input className="w-full border px-3 py-2 rounded" />
                </div>
              </motion.div>
            ) : (
              <motion.div key="mentor" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Expertise / Subject</label>
                  <input className="w-full border px-3 py-2 rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Experience (years)</label>
                  <input type="number" min={0} className="w-full border px-3 py-2 rounded" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full border px-3 py-2 rounded min-h-[100px]" required />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
            <button type="submit" className="px-5 py-2 rounded bg-primary text-white font-semibold">Send</button>
          </div>
        </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


