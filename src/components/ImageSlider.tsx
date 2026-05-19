import { useState, useEffect } from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1549909703-c6a0e7fda79a?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1624353365286-3f8d62daad75?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1603073163308-a5be2eead1f0?w=800&h=500&fit=crop",
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const goPrev = () => setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % galleryImages.length);

  return (
    <section className="py-16 md:py-20 bg-cream-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-center text-dark-text mb-4">
          Galerie
        </h2>
        <p className="text-center text-gray-text mb-10 max-w-xl mx-auto">
          Immortaliser l'instant, célébrer le goût
        </p>

        <div className="relative max-w-5xl mx-auto">
          {/* Main slider */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] md:aspect-[21/9]">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img}
                  alt={`Galerie ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Prev/Next buttons */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all z-10"
              aria-label="Précédent"
            >
              <svg className="w-5 h-5 text-dark-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all z-10"
              aria-label="Suivant"
            >
              <svg className="w-5 h-5 text-dark-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === current
                    ? "ring-2 ring-orange-accent ring-offset-2 opacity-100"
                    : "opacity-60 hover:opacity-90"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
