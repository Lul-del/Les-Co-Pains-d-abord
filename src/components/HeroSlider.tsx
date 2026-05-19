import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { branches } from "@/data/branches";

const slides = branches.map((branch) => ({
  title: branch.fullName,
  subtitle: "Boulangerie artisanale",
  imageUrl: branch.heroImageUrl,
  link: `/succursale/${branch.id}`,
}));

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Video background */}
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              {slide.title}
            </h2>
            <p
              className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {slide.subtitle}
            </p>
            <Link
              to={slide.link}
              className="inline-flex items-center gap-2 bg-orange-accent text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-[#d43d1a] transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Découvrir
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-orange-accent w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
