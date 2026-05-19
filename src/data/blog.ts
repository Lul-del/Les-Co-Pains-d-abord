export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  thumbnail: string;
  branch?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Notre nouveau pain à la citrouille d'automne",
    date: "15 octobre 2024",
    excerpt:
      "Découvrez notre création saisonnière : un pain moelleux à la citrouille, épices douces et graines de courge. Disponible dans nos trois succursales.",
    thumbnail: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Les coulisses de notre boulangerie Mont-Royal",
    date: "2 octobre 2024",
    excerpt:
      "Plongez dans l'univers de notre fournil : levains naturels, farines bio et gestes traditionnels pour des pains d'exception.",
    thumbnail: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    branch: "mont-royal",
  },
  {
    id: 3,
    title: "Nouveauté : ateliers pâtisserie chez Masson",
    date: "20 septembre 2024",
    excerpt:
      "Apprenez à réaliser vos propres viennoiseries avec nos artisans. Ateliers chaque samedi matin sur réservation.",
    thumbnail: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    branch: "masson",
  },
  {
    id: 4,
    title: "Les panettones de Rachel : une tradition réinventée",
    date: "8 septembre 2024",
    excerpt:
      "Notre succursale Rachel dévoile sa gamme de panettones artisanaux aux fruits confits, chocolat et érable.",
    thumbnail: "https://images.unsplash.com/photo-1624353365286-3f8d62daad75?w=400&h=300&fit=crop",
    branch: "rachel",
  },
  {
    id: 5,
    title: "Notre engagement pour des ingrédients locaux",
    date: "25 août 2024",
    excerpt:
      "Chez Les Co'Pains d'abord, nous croyons en une boulangerie responsable. Découvrez notre démarche pour des produits locaux et de saison.",
    thumbnail: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "La Saint-Jean chez Les Co'Pains : édition spéciale",
    date: "15 juin 2024",
    excerpt:
      "Célébrez la Saint-Jean avec nos pâtisseries aux petits fruits et nos pains décorés aux couleurs du Québec.",
    thumbnail: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    branch: "mont-royal",
  },
];
