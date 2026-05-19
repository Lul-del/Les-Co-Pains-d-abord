import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { branches } from "@/data/branches";
import { branchProducts } from "@/data/products";

// ---------- Carousel hook ----------
function useCarousel(images: string[]) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (images.length <= 1) {
      setCurrent(0);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length]);

  const goTo = (i: number) => setCurrent(i);
  const goPrev = () =>
    setCurrent((prev) =>
      images.length ? (prev - 1 + images.length) % images.length : 0,
    );
  const goNext = () =>
    setCurrent((prev) => (images.length ? (prev + 1) % images.length : 0));

  return { current, goTo, goPrev, goNext };
}

export default function BranchPage() {
  const { id } = useParams<{ id: string }>();
  const branch = branches.find((b) => b.id === id);
  const products = id ? branchProducts[id] || [] : [];
  const carousel = branch
    ? useCarousel(branch.carouselImages)
    : useCarousel([]);

  const [form, setForm] = useState({ nom: "", courriel: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ nom: "", courriel: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  if (!branch) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-bg pt-20">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold text-dark-text mb-4">
            Succursale non trouvée
          </h2>
          <p className="text-gray-text mb-8">
            Désolé, cette succursale n’existe pas.
          </p>
          <Link
            to="/"
            className="inline-block bg-orange-accent text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-[#d43d1a] transition-all"
          >
            Retour à l’accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-20">
      {/* ---- SECTION 1 : Description + Vidéo ---- */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Texte */}
            <div className="space-y-6">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark-text">
                {branch.fullName}
              </h1>
              <div className="w-16 h-1 bg-orange-accent rounded-full" />
              {branch.description.split("\n\n").map((p, i) => (
                <p key={i} className="text-gray-text leading-relaxed text-lg">
                  {p}
                </p>
              ))}
            </div>
            {/* Vidéo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={branch.videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ---- SECTION 2 : Galerie produits (toutes les images) ---- */}
      <section className="py-16 md:py-20 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-center text-dark-text mb-12">
            Galerie
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {products.map((p, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- SECTION 3 : Coordonnées (texte gauche) + Carrousel (droite) ---- */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Gauche : coordonnées */}
            <div className="space-y-8">
              <h2 className="font-heading text-3xl font-semibold text-dark-text">
                Coordonnées
              </h2>

              <div>
                <h3 className="font-heading text-xl font-semibold text-orange-accent mb-1">
                  {branch.fullName}
                </h3>
                <div className="text-dark-text leading-relaxed whitespace-pre-line">
                  {branch.address}
                </div>
                <a
                  href={`tel:${branch.phone}`}
                  className="text-dark-text hover:text-orange-accent transition-colors block mt-1"
                >
                  {branch.phone}
                </a>
              </div>

              {/* Tableau horaires */}
              <div>
                <table className="w-full max-w-xs">
                  <tbody>
                    {branch.hours.map((h) => (
                      <tr
                        key={`${h.day}-${h.time}`}
                        className="border-b border-gray-100"
                      >
                        <td className="py-2 pr-4 font-semibold text-dark-text w-10">
                          {h.day}
                        </td>
                        <td className="py-2 text-dark-text">{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Email + Facebook (Rachel) */}
              <div className="space-y-2">
                <a
                  href={`mailto:${branch.email}`}
                  className="text-orange-accent hover:text-[#d43d1a] transition-colors text-sm block"
                >
                  {branch.email}
                </a>
                {branch.hasFacebook && (
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-accent hover:text-[#d43d1a] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="text-sm font-medium">facebook</span>
                  </a>
                )}
              </div>
            </div>

            {/* Droite : carrousel 7 images */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                {branch.carouselImages.map((img, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      i === carousel.current ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Galerie ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <button
                  onClick={carousel.goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow z-10"
                  aria-label="Précédent"
                >
                  <svg
                    className="w-4 h-4 text-dark-text"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={carousel.goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow z-10"
                  aria-label="Suivant"
                >
                  <svg
                    className="w-4 h-4 text-dark-text"
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
                </button>
              </div>
              {/* Miniatures */}
              <div className="flex gap-2 overflow-x-auto pb-1">
                {branch.carouselImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => carousel.goTo(i)}
                    className={`flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden transition-all ${
                      i === carousel.current
                        ? "ring-2 ring-orange-accent ring-offset-2 opacity-100"
                        : "opacity-60 hover:opacity-90"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- SECTION 4 : Contact (Carte gauche + Formulaire droite) ---- */}
      <section className="py-16 md:py-20 bg-cream-bg" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-semibold text-center text-dark-text mb-4">
            Contact
          </h2>
          <p className="text-center text-gray-text mb-12 max-w-xl mx-auto">
            Une question, une commande spéciale ? N’hésitez pas à nous écrire
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gauche : Carte */}
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg h-[350px]">
                <iframe
                  title="Carte"
                  src={branch.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-accent hover:text-[#d43d1a] transition-colors font-medium"
              >
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Ouvrir dans Maps
              </a>
            </div>

            {/* Droite : Formulaire */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-sm font-medium text-dark-text mb-1"
                  >
                    Nom <span className="text-brick-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="nom"
                    required
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-accent focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="courriel"
                    className="block text-sm font-medium text-dark-text mb-1"
                  >
                    Courriel <span className="text-brick-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="courriel"
                    required
                    value={form.courriel}
                    onChange={(e) =>
                      setForm({ ...form, courriel: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-accent focus:border-transparent transition-all"
                    placeholder="votre@courriel.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark-text mb-1"
                  >
                    Message <span className="text-brick-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-accent focus:border-transparent transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-accent text-white py-3.5 rounded-xl font-medium text-sm uppercase tracking-widest hover:bg-[#d43d1a] active:bg-[#b83210] transition-all hover:shadow-lg"
                >
                  Envoyer
                </button>
                {submitted && (
                  <p className="text-center text-green-600 text-sm font-medium">
                    Merci pour votre message ! Nous vous répondrons dans les
                    plus brefs délais.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
