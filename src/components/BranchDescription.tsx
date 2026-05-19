interface BranchDescriptionProps {
  name: string;
  description: string;
}

export default function BranchDescription({ name, description }: BranchDescriptionProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: badge + text */}
          <div className="space-y-6 flex flex-col justify-center">
            {/* Badge */}
            <div className="flex justify-start">
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-2xl bg-brick-red flex items-center justify-center shadow-lg">
                <span className="font-heading text-white text-xl md:text-2xl font-bold text-center px-2 leading-tight">
                  {name}
                </span>
              </div>
            </div>
            {/* Description */}
            <p className="text-gray-text leading-relaxed text-lg">
              {description}
            </p>
            {/* Instagram link */}
            <div className="pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-accent hover:text-[#d43d1a] transition-colors font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Suivez-nous sur Instagram
              </a>
            </div>
          </div>

          {/* Right: large photo */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=800&h=700&fit=crop"
              alt={`Boulangerie ${name}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
