// src/components/OurInspiration.tsx
import Image from "next/image";

export default function OurInspiration() {
  return (
    <section className="relative bg-white py-16 px-6 mt-10 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#12494B]">
          Our 
          <span className="text-[#12494B]"> Inspiration</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-[#12494B]">
          Celebrating the brilliance of two extraordinary mathematicians
        </p>
      </div>

      <div className="space-y-16 max-w-5xl mx-auto">
  {/* Ramanujan */}
  <div className="bg-[#12494B] rounded-2xl shadow-lg p-8 grid md:grid-cols-2 items-center gap-8">
    <div className="flex justify-center">
      <div className="w-60 h-60 relative">
        <Image
          src="/Home/Inspiration/Ramanujan-1.jpg"
          alt="Srinivasan Ramanujan"
          fill
          className="rounded-xl object-cover shadow-md"
        />
      </div>
    </div>
    <div className="text-center md:text-left">
      <h3 className="text-2xl font-semibold text-white mb-4">
        Srinivasan Ramanujan
      </h3>
      <p className="italic text-gray-200 mb-4">
        “An equation means nothing to me unless it expresses a thought of God.”
      </p>
      <p className="text-gray-300 text-sm leading-relaxed">
        Rising from humble beginnings in Kumbakonam, India, with little
        formal training, Ramanujan produced groundbreaking results in number
        theory, infinite series, and continued fractions. His perseverance
        earned him the title{" "}
        <span className="font-semibold">“The Man Who Knew Infinity.”</span>
      </p>
    </div>
  </div>

  {/* Mirzakhani */}
  <div className="bg-[#12494B] rounded-2xl shadow-lg p-8 grid md:grid-cols-2 items-center gap-8 md:flex-row-reverse">
    <div className="flex justify-center order-1 md:order-2">
      <div className="w-60 h-60 relative">
        <Image
          src="/Home/Inspiration/Maryam.png"
          alt="Maryam Mirzakhani"
          fill
          className="rounded-xl object-cover shadow-md"
        />
      </div>
    </div>
    <div className="text-center md:text-left order-2 md:order-1">
      <h3 className="text-2xl font-semibold text-white mb-4">
        Maryam Mirzakhani
      </h3>
      <p className="italic text-gray-200 mb-4">
        “I don’t think that everyone should become a mathematician, but I do
        believe that many students don’t give mathematics a real chance…”
      </p>
      <p className="text-gray-300 text-sm leading-relaxed">
        Broke a centuries-old gender barrier by becoming the{" "}
        <span className="font-semibold">
          first woman and first Iranian
        </span>{" "}
        to win the most prestigious prize in mathematics.
      </p>
    </div>
  </div>
</div>




    </section>
  );
}
