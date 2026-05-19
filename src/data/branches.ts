import {
  imageAssets,
  montRoyalCarousel,
  massonCarousel,
  rachelCarousel,
} from "./images";

export interface Branch {
  id: string;
  name: string;
  fullName: string;
  address: string;
  phone: string;
  email: string;
  hours: { day: string; time: string }[];
  description: string;
  videoUrl: string;
  heroImageUrl: string;
  carouselImages: string[];
  mapUrl: string;
  mapEmbedUrl: string;
  hasFacebook: boolean;
}

export const branches: Branch[] = [
  {
    id: "mont-royal",
    name: "Mont-Royal",
    fullName: "Mont-Royal",
    address: "1965, rue Mont-Royal Est\nMontréal, QC H2H 1J5",
    phone: "514 522-1994",
    email: "mont-royal@boulangerielescopainsdabord.com",
    hours: [
      { day: "L", time: "7h – 18h30" },
      { day: "M", time: "7h – 18h30" },
      { day: "M", time: "7h – 18h30" },
      { day: "J", time: "7h – 18h30" },
      { day: "V", time: "7h – 18h30" },
      { day: "S", time: "7h – 18h30" },
      { day: "D", time: "8h – 18h" },
    ],
    description:
      "Petit joyau du quartier, la boulangerie les Co'Pains d'abord sur l'avenue Mont-Royal propose des produits de grande qualité et toujours très frais. Parmi les classiques, on retrouve le croissant au beurre, les chaussons aux pommes, les pains français, mais aussi quelques spécialités bretonnes telles que le gâteau breton aux abricots, le kouing aman ou encore le farz breton.\n\nL'ambiance est détendue et conviviale. Quelques places permettent de s'asseoir dans ce café où les grands artistes de la francophonie ornent les murs et alimentent le système de son. On y revient à coup sûr.",
    videoUrl: imageAssets.montRoyalVideo,
    heroImageUrl: imageAssets.patisserieArtisanal,
    carouselImages: montRoyalCarousel as unknown as string[],
    mapUrl:
      "https://www.google.com/maps?ll=45.534399,-73.573462&z=12&t=m&hl=fr-FR&gl=US&mapclient=embed&q=1965+Avenue+du+Mont-Royal+E+Montréal,+QC+H2H+1J5",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.3!2d-73.573462!3d45.534399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMyJzAzLjgiTiA3M8KwMzQnMjQuNSJX!5e0!3m2!1sfr!2sca!4v1!5m2!1sfr!2sca&q=1965+Avenue+du+Mont-Royal+E+Montréal,+QC+H2H+1J5",
    hasFacebook: false,
  },
  {
    id: "masson",
    name: "Masson",
    fullName: "Masson",
    address: "2727, rue Masson\nMontréal, QC H1Y 1W6",
    phone: "514 593-1433",
    email: "lescopainsmasson@gmail.com",
    hours: [
      { day: "L", time: "7h – 19h" },
      { day: "M", time: "7h – 19h" },
      { day: "M", time: "7h – 19h" },
      { day: "J", time: "7h – 19h" },
      { day: "V", time: "7h – 19h" },
      { day: "S", time: "7h – 19h" },
      { day: "D", time: "8h – 18h" },
    ],
    description:
      "La promenade Masson n'est plus la même depuis l'ouverture des Co'Pains d'abord. Demandez pourquoi aux résidents du quartier et on vous expliquera le secret: une alléchante gamme de pâtisseries, du pain fait sur place et, surtout, on y trouve tout ce qu'il faut pour un lunch vite fait ou un repas pour emporter. Les quiches, tourières, pâtés et pizzas partent comme des petits pains chauds.\n\nLe local est parfait pour une pause détente en famille. Les tables dans les vitrines permettent de siroter un café biologique et équitable tout en regardant l'animation sur la nouvelle «Main» de Rosemont—La Petite-Patrie.",
    videoUrl: imageAssets.montRoyalVideo,
    heroImageUrl: imageAssets.patisserieArtisanal,
    carouselImages: massonCarousel as unknown as string[],
    mapUrl:
      "https://www.google.com/maps/place/2727+Rue+Masson,+Montréal,+QC+H1Y+1W6,+Canada/@45.5468195,-73.5758993,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc91bfcddb08f6d:0x42fe122a03da2eb2!8m2!3d45.5468195!4d-73.5758993!16s%2Fg%2F11pw1y54mf?hl=fr-FR&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2!2d-73.5758993!3d45.5468195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bfcddb08f6d%3A0x42fe122a03da2eb2!2s2727%20Rue%20Masson,%20Montréal,%20QC%20H1Y%201W6!5e0!3m2!1sfr!2sca!4v1",
    hasFacebook: false,
  },
  {
    id: "rachel",
    name: "Rachel",
    fullName: "Rachel",
    address: "418, rue Rachel Est\nMontréal, QC H2J 2G7",
    phone: "514 564-5920",
    email: "copainsdabordrachel@gmail.com",
    hours: [
      { day: "L", time: "7h30 – 18h" },
      { day: "M", time: "7h30 – 18h" },
      { day: "M", time: "7h30 – 18h" },
      { day: "J", time: "7h30 – 18h" },
      { day: "V", time: "7h30 – 18h" },
      { day: "S", time: "7h30 – 18h" },
      { day: "D", time: "8h – 17h" },
    ],
    description:
      "Ce petit «Co'Pain» est un véritable incubateur de saveurs. En plus d'offrir les produits qui font la réputation des Co'Pains d'abord, la boutique au coin de Rachel et Saint-Denis se démarque par son offre de viennoiseries particulièrement créatives ainsi que ses panettones dont la réputation n'est plus a faire. En saison, on y déguste des brioches à l'érable, des danoises aux fraises, des chocos grand cru, des chocolatines aux bleuets, des petits pains à la citrouille, etc. Ça vaut le détour!",
    videoUrl: imageAssets.montRoyalVideo,
    heroImageUrl: imageAssets.patisserieArtisanal2,
    carouselImages: rachelCarousel as unknown as string[],
    mapUrl:
      "https://www.google.com/maps/place/418+Rue+Rachel+E,+Montréal,+QC+H2J+2G7,+Canada/@45.522097,-73.577657,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc91bce7dfb1385:0x961d87e5af9aea39!8m2!3d45.522097!4d-73.577657!16s%2Fg%2F11q2n8qp1x?hl=fr-FR&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.4!2d-73.577657!3d45.522097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bce7dfb1385%3A0x961d87e5af9aea39!2s418%20Rue%20Rachel%20E,%20Montréal,%20QC%20H2J%202G7!5e0!3m2!1sfr!2sca!4v1",
    hasFacebook: true,
  },
];
