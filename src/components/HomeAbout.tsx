"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function HomeAboutSection() {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Founder Section */}
          <Card className="rounded-2xl shadow-lg border border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                About Our Founder
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-semibold">Dr. Mahesh Udupa</span> is an
                ambitious and empathetic educator who firmly believes that while
                there is no substitute for hard work, true wisdom lies in
                knowing where to invest one’s energy and time, especially in
                Mathematics.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Having personally faced the challenges of mastering Mathematics
                and eventually overcoming them through a holistic approach, he
                now envisions sharing this journey with thousands, if not
                millions, of students who encounter similar struggles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dr. Udupa believes that Mathematics is the most beautiful
                language of the Universe, and with the right approach, it can be
                made engaging, enjoyable, and accessible to all—contrary to
                common perception.
              </p>
            </CardContent>
          </Card>

          {/* Mathkathaa Section */}
          <Card className="rounded-2xl shadow-lg border border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                About Mathkathaa
              </h3>
              <p className="italic text-gray-500 mb-4">
                &quot;I don&apos;t think that everyone should become a mathematician, but
                I do believe that many students don&apos;t give mathematics a real
                chance.&quot;
                <br />– <span className="font-semibold">Maryam Mirzakhani</span>
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                These words capture the spirit of our philosophy. Too often,
                mathematics is treated as a subject filled with formulas and
                symbols, rather than as a rich and expressive language. What is
                needed is a shift in perspective.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The key lies in <span className="font-semibold">Empathy</span>.
                By revisiting the genesis of concepts and stepping into the
                shoes of the mathematicians who introduced them, we uncover both
                the human side of mathematics and the purpose behind each idea.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Empathy, coupled with curiosity, enables us to embrace
                Mathematics not as a subject but as a language waiting to be
                explored and appreciated for its elegance and relevance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
