export default function HeroBanner() {
  return (
    <section
      className="relative w-full min-h-[220px] sm:min-h-[280px] md:min-h-[360px] flex items-end"
      style={{
        backgroundImage: "url('/Home/Carousal/Carousal_image.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      {/* Decorative only: the page now renders CurvyHeader separately */}
      <div className="relative w-full" />
    </section>
  );
}


