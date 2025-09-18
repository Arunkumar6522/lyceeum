export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 pt-20 sm:pt-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-8">We'd love to hear from you. Reach out and we'll get back to you shortly.</p>
      <form action="mailto:lyceeum@gmail.co" method="post" encType="text/plain" className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input className="w-full border px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" className="w-full border px-3 py-2 rounded" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea className="w-full border px-3 py-2 rounded min-h-[120px]" required />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button type="submit" className="w-full sm:w-auto px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded hover:shadow-emerald-500/25 transform hover:scale-105 transition-all border border-emerald-400/30">Send</button>
          <a href="mailto:lyceeum@gmail.co" className="text-emerald-600 underline hover:text-emerald-700 text-center">Email us directly</a>
        </div>
        <p className="text-sm text-gray-600">Or call: 438-673-5120</p>
      </form>
    </main>
  );
}


