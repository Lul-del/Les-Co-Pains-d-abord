// Import all images from the IMAGES folder
import CroissantPurBeurre from "@/IMAGES/Croissant pur beurre.jpg";
import ChaussonsPommes from "@/IMAGES/Chaussons aux pommes.jpg";
import KouinettesCoPains from "@/IMAGES/Kouinettes des Co'Pains d'abord.jpg";
import PatisserieBreton from "@/IMAGES/Pâtisserie bretonne.jpg";
import PainsArtisanalMontreal from "@/IMAGES/Pains artisanal Montréal.jpg";
import Chocolatine from "@/IMAGES/Chocolatine.jpg";
import ChaussonsItaliens from "@/IMAGES/Chaussons italiens.jpg";
import MuffinBleuet from "@/IMAGES/Muffin bleuet.jpg";
import CroissantPurBeurreQuebec from "@/IMAGES/Croissant pur beurre Montréal.jpg";
import PatisserieArtisanalMontreal from "@/IMAGES/Pâtisserie artisanale Montréal.jpg";
import PatisserieArtisanalMontreal2 from "@/IMAGES/Pâtisserie artisanale Montréal2.jpg";
import PatisserieArtisanalMontrealDash from "@/IMAGES/Pâtisserie artisanale Montréal-.jpg";
import PalmierPurBeurre from "@/IMAGES/Palmier pur Beurre.jpg";
import PizzaArtisanale from "@/IMAGES/Pizza artisanale.jpg";
import MontRoyalVideo from "@/IMAGES/Mont-Royal-Vidéo.mp4";

export const imageAssets = {
  croissantPurBeurre: CroissantPurBeurre,
  chaussonsPommes: ChaussonsPommes,
  kouinettes: KouinettesCoPains,
  patisserieBreton: PatisserieBreton,
  painsArtisanal: PainsArtisanalMontreal,
  chocolatine: Chocolatine,
  chaussonsItaliens: ChaussonsItaliens,
  muffinBleuet: MuffinBleuet,
  croissantQuebec: CroissantPurBeurreQuebec,
  patisserieArtisanal: PatisserieArtisanalMontreal,
  patisserieArtisanal2: PatisserieArtisanalMontreal2,
  patisserieArtisanalDash: PatisserieArtisanalMontrealDash,
  palmier: PalmierPurBeurre,
  pizza: PizzaArtisanale,
  montRoyalVideo: MontRoyalVideo,
};

// Export image arrays for branch pages
export const montRoyalHeroImage = PatisserieArtisanalMontreal;
export const massonHeroImage = PatisserieArtisanalMontreal;
export const rachelHeroImage = PatisserieArtisanalMontreal2;

export const montRoyalCarousel = [
  PatisserieArtisanalMontreal,
  CroissantPurBeurreQuebec,
  PainsArtisanalMontreal,
  PatisserieArtisanalMontreal2,
  ChaussonsPommes,
  PatisserieArtisanalMontrealDash,
  PatisserieBreton,
];

export const massonCarousel = [
  PatisserieArtisanalMontreal,
  CroissantPurBeurreQuebec,
  PainsArtisanalMontreal,
  PatisserieArtisanalMontreal2,
  ChaussonsPommes,
  PatisserieArtisanalMontrealDash,
  PatisserieBreton,
];

export const rachelCarousel = [
  PatisserieArtisanalMontreal,
  CroissantPurBeurreQuebec,
  PainsArtisanalMontreal,
  PatisserieArtisanalMontreal2,
  ChaussonsPommes,
  PatisserieArtisanalMontrealDash,
  PatisserieBreton,
];

export const montRoyalProducts = [
  { name: "Croissant pur beurre", image: CroissantPurBeurre },
  { name: "Chausson aux pommes", image: ChaussonsPommes },
  { name: "Kouinettes", image: KouinettesCoPains },
  { name: "Pâtisserie bretonne", image: PatisserieBreton },
  { name: "Pains artisanal", image: PainsArtisanalMontreal },
  { name: "Chocolatine", image: Chocolatine },
  { name: "Chaussons italiens", image: ChaussonsItaliens },
  { name: "Muffin aux bleuets", image: MuffinBleuet },
];

export const massonProducts = [
  { name: "Croissant pur beurre", image: CroissantPurBeurre },
  { name: "Chaussons aux pommes", image: ChaussonsPommes },
  { name: "Pizza artisanale", image: PizzaArtisanale },
  { name: "Pains artisanal", image: PainsArtisanalMontreal },
  { name: "Pâtisserie artisanale", image: PatisserieArtisanalMontreal },
  { name: "Muffin aux bleuets", image: MuffinBleuet },
  { name: "Chocolatine", image: Chocolatine },
  { name: "Palmier pur beurre", image: PalmierPurBeurre },
];

export const rachelProducts = [
  { name: "Croissant pur beurre", image: CroissantPurBeurre },
  { name: "Kouinettes", image: KouinettesCoPains },
  { name: "Chocolatine", image: Chocolatine },
  { name: "Chaussons italiens", image: ChaussonsItaliens },
  { name: "Palmier pur beurre", image: PalmierPurBeurre },
  { name: "Pâtisserie artisanale", image: PatisserieArtisanalMontreal2 },
  { name: "Chaussons aux pommes", image: ChaussonsPommes },
  { name: "Muffin aux bleuets", image: MuffinBleuet },
];
