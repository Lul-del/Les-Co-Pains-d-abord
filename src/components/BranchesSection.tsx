import { Link } from "react-router-dom";
import { branches } from "@/data/branches";

function PdfIcon() {
  return (
    <svg
      className="w-6 h-6 text-brick-red"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" />
    </svg>
  );
}

export default function BranchesSection() {
  return (
    <section className="py-16 md:py-24 bg-cream-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center text-dark-text mb-4">
          Nos succursales
        </h2>
        <p className="text-center text-gray-text mb-12 max-w-2xl mx-auto">
          Trois adresses à Montréal pour des produits frais, faits maison avec
          amour
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
            >
              {/* Badge image */}
              <div className="flex justify-center pt-8">
                <div className="w-36 h-36 rounded-2xl bg-brick-red flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="font-heading text-white text-2xl font-bold text-center px-2 leading-tight">
                    {branch.fullName}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                {/* PDF icon */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <PdfIcon />
                  <span className="text-sm font-medium text-brick-red">
                    Catalogue
                  </span>
                </div>

                {/* Address */}
                <p className="text-dark-text text-sm leading-relaxed mb-3">
                  {branch.address}
                </p>

                {/* Phone */}
                <a
                  href={`tel:${branch.phone}`}
                  className="text-orange-accent text-sm font-medium hover:underline block mb-4"
                >
                  {branch.phone}
                </a>

                {/* Link */}
                <Link
                  to={`/succursale/${branch.id}`}
                  className="inline-block text-sm uppercase tracking-wider text-orange-accent font-medium hover:text-[#d43d1a] transition-colors group-hover:underline"
                >
                  En savoir plus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
