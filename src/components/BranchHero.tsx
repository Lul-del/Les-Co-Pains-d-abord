interface BranchHeroProps {
  name: string;
  videoUrl: string;
}

export default function BranchHero({ name, videoUrl }: BranchHeroProps) {
  return (
    <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
          {name}
        </h1>
        <p className="text-lg md:text-xl text-white/80 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Boulangerie artisanale
        </p>
      </div>
    </section>
  );
}
