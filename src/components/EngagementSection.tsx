export default function EngagementSection() {
  return (
    <section id="engagement" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark-text leading-tight">
              L’art est &laquo; bon &raquo; quand la main, la tête et le cœur
              travaillent ensemble.
            </h2>
            <div className="w-16 h-1 bg-orange-accent rounded-full" />
            <p className="text-gray-text leading-relaxed text-lg">
              Chaque jour, nous sommes heureux de vous proposer des produits
              frais, faits à la main avec amour, dans le respect et la
              tradition.
            </p>
            <p className="text-gray-text leading-relaxed">
              Quelle que soit la saison, les trois boulangeries Les Co’Pains
              d’abord vous accueillent dans leur boutique chaleureuse et vous
              proposent une gamme variée de produits artisanaux savoureux.
            </p>
            <p className="text-gray-text leading-relaxed font-medium">
              Vous trouverez votre bonheur aux Co’Pains d’abord, nous en sommes
              les artisans !
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-accent">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-dark-text">
                  Produits frais
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-accent">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-dark-text">
                  Ingrédients locaux
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-accent">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-dark-text">
                  Savoir-faire artisanal
                </span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop"
                alt="Notre boulangerie artisanale"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-accent/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-accent/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
