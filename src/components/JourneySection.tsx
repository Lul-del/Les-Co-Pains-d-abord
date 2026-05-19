const items = [
  {
    label: "croissants",
    count: "975",
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16">
        <path d="M32 8C20 8 10 18 8 30c-1 6 0 12 3 17l6-6c2-2 5-3 8-3s6 1 8 3l6 6c3-5 4-11 3-17C54 18 44 8 32 8z" />
        <path d="M22 26c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4zM42 26c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4z" />
      </svg>
    ),
  },
  {
    label: "pains",
    count: "855",
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16">
        <ellipse cx="32" cy="36" rx="24" ry="12" />
        <ellipse cx="32" cy="34" rx="24" ry="12" fill="currentColor" opacity="0.8" />
        <line x1="20" y1="30" x2="20" y2="44" stroke="#FAFAF7" strokeWidth="2" opacity="0.3" />
        <line x1="32" y1="28" x2="32" y2="44" stroke="#FAFAF7" strokeWidth="2" opacity="0.3" />
        <line x1="44" y1="30" x2="44" y2="44" stroke="#FAFAF7" strokeWidth="2" opacity="0.3" />
      </svg>
    ),
  },
  {
    label: "bonshommes",
    count: "54",
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16">
        <ellipse cx="32" cy="36" rx="10" ry="12" />
        <circle cx="32" cy="20" r="9" />
        <rect x="14" y="28" width="10" height="5" rx="2.5" />
        <rect x="40" y="28" width="10" height="5" rx="2.5" />
        <rect x="24" y="46" width="6" height="8" rx="2" />
        <rect x="34" y="46" width="6" height="8" rx="2" />
        <circle cx="28" cy="18" r="1.5" fill="#FAFAF7" />
        <circle cx="36" cy="18" r="1.5" fill="#FAFAF7" />
        <path d="M27 24 Q32 29 37 24" fill="none" stroke="#FAFAF7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "café",
    count: "585",
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16">
        <rect x="12" y="20" width="30" height="24" rx="2" />
        <rect x="42" y="26" width="10" height="8" rx="2" />
        <path d="M12 44 Q12 50 18 50 L36 50 Q42 50 42 44" />
        <line x1="22" y1="16" x2="22" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="28" y1="14" x2="28" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="34" y1="16" x2="34" y2="20" stroke="currentColor" strokeWidth="2" />
        <path d="M16 50 L48 50" stroke="currentColor" strokeWidth="2" />
        <path d="M38 50 L40 56 L24 56 L26 50" fill="currentColor" />
      </svg>
    ),
  },
];

export default function JourneySection() {
  return (
    <section className="py-16 md:py-24 bg-cream-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center text-dark-text mb-4">
          Une journée aux Co’Pains d’abord

        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-20">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center group">
              <div className="text-orange-accent group-hover:text-[#d43d1a] transition-colors duration-300 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="mt-2 font-heading text-2xl font-bold text-dark-text">{item.count}</p>
              <p className="text-sm uppercase tracking-widest font-medium text-dark-text">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
