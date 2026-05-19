const teamMembers = [
  { name: "Alain", subtitle: "Co’Pain d'épice Jacques Prechoux" },
  { name: "Mickaël", subtitle: "Co’Pain d'épice Frédérique Chacun" },
  { name: "Étienne", subtitle: "Co’Pain d'épice Alain Gouriou" },
  { name: "Yohan", subtitle: "Co’Pain d'épice Éric Goeury" },
  { name: "Frédéric", subtitle: "Co’Pain d'épice Michaël Guyomard" },
];

function GingerbreadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor">
      {/* Body */}
      <ellipse cx="32" cy="36" rx="12" ry="14" />
      {/* Head */}
      <circle cx="32" cy="18" r="10" />
      {/* Arms */}
      <rect x="8" y="28" width="12" height="6" rx="3" />
      <rect x="44" y="28" width="12" height="6" rx="3" />
      {/* Legs */}
      <rect x="22" y="48" width="8" height="8" rx="3" />
      <rect x="34" y="48" width="8" height="8" rx="3" />
      {/* Eyes */}
      <circle cx="28" cy="16" r="2" fill="#FAFAF7" />
      <circle cx="36" cy="16" r="2" fill="#FAFAF7" />
      {/* Smile */}
      <path d="M26 22 Q32 28 38 22" fill="none" stroke="#FAFAF7" strokeWidth="2" strokeLinecap="round" />
      {/* Buttons */}
      <circle cx="32" cy="30" r="2" fill="#FAFAF7" />
      <circle cx="32" cy="38" r="2" fill="#FAFAF7" />
      {/* Hat */}
      <rect x="22" y="6" width="20" height="4" rx="2" fill="#FAFAF7" />
      <rect x="26" y="2" width="12" height="6" rx="2" fill="#FAFAF7" />
    </svg>
  );
}

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-cream-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center text-dark-text mb-4">
          Co’Pain d'épice
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center group">
              <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center text-orange-accent group-hover:text-[#d43d1a] transition-colors duration-300 group-hover:scale-110 transition-transform">
                <GingerbreadIcon className="w-full h-full" />
              </div>
              <p className="mt-3 font-heading text-lg font-semibold text-dark-text">
                {member.name}
              </p>
              <p className="text-xs text-gray-text text-center mt-1 max-w-[180px]">
                {member.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
