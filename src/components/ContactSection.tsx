import type { Branch } from "@/data/branches";

interface ContactSectionProps {
  branch: Branch;
}

export default function ContactSection({ branch }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-center text-dark-text mb-4">
          Nous contacter
        </h2>
        <p className="text-center text-gray-text mb-12 max-w-xl mx-auto">
          Une question, une commande spéciale ? N'hésitez pas à nous écrire
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: address + hours */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-dark-text mb-3">
                {branch.fullName}
              </h3>
              <p className="text-gray-text">{branch.address}</p>
              <p className="text-gray-text mt-1">
                <a href={`tel:${branch.phone}`} className="text-orange-accent hover:underline">
                  {branch.phone}
                </a>
              </p>
              <p className="text-gray-text mt-1">
                <a href={`mailto:${branch.email}`} className="text-orange-accent hover:underline text-sm">
                  {branch.email}
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-dark-text mb-3">Horaires</h3>
              <div className="bg-cream-bg rounded-xl overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {branch.hours.map((h, i) => (
                      <tr
                        key={h.day}
                        className={`border-b border-gray-200 last:border-0 ${
                          i % 2 === 0 ? "bg-cream-bg" : "bg-white"
                        }`}
                      >
                        <td className="py-2.5 px-4 font-medium text-dark-text text-sm">{h.day}</td>
                        <td className="py-2.5 px-4 text-right text-gray-text text-sm">{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.");
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-text mb-1">
                  Nom <span className="text-brick-red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-cream-bg text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-accent focus:border-transparent transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-text mb-1">
                  Courriel <span className="text-brick-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-cream-bg text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-accent focus:border-transparent transition-all"
                  placeholder="votre@courriel.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-text mb-1">
                  Message <span className="text-brick-red">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-cream-bg text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-accent focus:border-transparent transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-accent text-white py-3.5 rounded-xl font-medium text-sm uppercase tracking-widest hover:bg-[#d43d1a] active:bg-[#b83210] transition-all hover:shadow-lg"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
