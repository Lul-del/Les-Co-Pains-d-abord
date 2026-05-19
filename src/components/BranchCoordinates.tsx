import type { Branch } from "@/data/branches";

interface BranchCoordinatesProps {
  branch: Branch;
}

export default function BranchCoordinates({ branch }: BranchCoordinatesProps) {
  return (
    <section id="coordinates" className="py-16 md:py-20 bg-cream-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-center text-dark-text mb-12">
          Coordonnées
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: address, hours, email */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="font-heading text-xl font-semibold text-dark-text mb-3">Adresse</h3>
              <p className="text-gray-text text-lg leading-relaxed">{branch.address}</p>
            </div>

            {/* Hours table */}
            <div>
              <h3 className="font-heading text-xl font-semibold text-dark-text mb-3">Horaires</h3>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {branch.hours.map((h, i) => (
                      <tr
                        key={h.day}
                        className={`border-b border-gray-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-cream-bg"
                        }`}
                      >
                        <td className="py-3 px-5 font-medium text-dark-text text-sm">{h.day}</td>
                        <td className="py-3 px-5 text-right text-gray-text text-sm">{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-heading text-xl font-semibold text-dark-text mb-3">Contact</h3>
              <a
                href={`mailto:${branch.email}`}
                className="text-orange-accent hover:text-[#d43d1a] transition-colors text-lg font-medium"
              >
                {branch.email}
              </a>
              <p className="text-gray-text mt-1">{branch.phone}</p>
            </div>
          </div>

          {/* Right: Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px]">
            <iframe
              title={`Carte - ${branch.fullName}`}
              src={branch.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
