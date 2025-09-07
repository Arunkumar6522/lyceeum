// src/app/components/Footer.tsx

import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-primary px-6 py-12 border-t border-white/20 mt-10">
      <div className="max-w-5xl mx-auto text-white">
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-2xl font-bold">Lyceeum Tutoring Services</h2>
          <p>For inquiries: 438-673-5120 • lyceeum@gmail.co</p>
          <div className="mt-2 flex items-center gap-5">
            <a
              href="https://www.instagram.com/lyceeumt/"
              target="_blank"
              rel="noreferrer"
              aria-label="Lyceeum on Instagram"
              className="inline-flex items-center gap-2 hover:opacity-90"
            >
              <Instagram size={18} /> <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/lyceeum/"
              target="_blank"
              rel="noreferrer"
              aria-label="Lyceeum on Facebook"
              className="inline-flex items-center gap-2 hover:opacity-90"
            >
              <Facebook size={18} /> <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lyceeum-tutoring-services-524817302/"
              target="_blank"
              rel="noreferrer"
              aria-label="Lyceeum on LinkedIn"
              className="inline-flex items-center gap-2 hover:opacity-90"
            >
              <Linkedin size={18} /> <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <p className="text-white/80 text-sm">© {new Date().getFullYear()} Lyceeum Tutoring Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
