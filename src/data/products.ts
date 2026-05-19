import { montRoyalProducts, massonProducts, rachelProducts } from "./images";

export interface Product {
  name: string;
  image: string;
}

export const branchProducts: Record<string, Product[]> = {
  "mont-royal": montRoyalProducts as Product[],
  masson: massonProducts as Product[],
  rachel: rachelProducts as Product[],
};

// All gallery images used in branch pages - kept for backward compatibility
export const allGalleryImages: string[] = [];
