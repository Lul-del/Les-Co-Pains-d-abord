import type { Product } from "@/data/products";

interface ProductGalleryProps {
  products: Product[];
}

export default function ProductGallery({ products }: ProductGalleryProps) {
  return (
    <section id="produits" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold text-center text-dark-text mb-4">
          Nos produits
        </h2>
        <p className="text-center text-gray-text mb-12 max-w-xl mx-auto">
          Des créations artisanales préparées chaque jour avec passion
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-cream-bg rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-base font-medium text-dark-text text-center group-hover:text-orange-accent transition-colors">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
