export type Product = {
  id: string;
  name: string;
  subtitle: string;
  type: "top" | "bottom" | "onepiece" | "short";
  price: number;
  bundle: boolean;
  badge?: "Best-seller" | "Nouveau" | "Signature" | "Limited";
  colors: { name: string; hex: string; image: string }[];
  sizes: { label: string; soldOut?: boolean }[];
  material: string;
  description: string;
  rating: number;
  reviewCount: number;
};

export const PRODUCTS: Product[] = [
  {
    id: "top-triangle-kaki",
    name: "Haut Triangle",
    subtitle: "Vert kaki · ECONYL™",
    type: "top",
    price: 65,
    bundle: true,
    badge: "Best-seller",
    colors: [
      {
        name: "Vert kaki",
        hex: "#3d4a35",
        image:
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Coucher de soleil",
        hex: "#c4732a",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Blanc cassé",
        hex: "#ede5d4",
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
      },
    ],
    sizes: [
      { label: "XS" },
      { label: "S" },
      { label: "M" },
      { label: "L" },
      { label: "XL" },
    ],
    material: "Carvico VITA ECONYL™ — 78% ECONYL® recyclé, 22% Lycra®",
    description:
      "Bretelles réglables, coupe ajustée, maintien naturel, élégance sobre.",
    rating: 4.7,
    reviewCount: 3,
  },
  {
    id: "top-bandeau-sable",
    name: "Haut Bandeau",
    subtitle: "Sable chaud · ECONYL™",
    type: "top",
    price: 65,
    bundle: true,
    badge: "Nouveau",
    colors: [
      {
        name: "Sable chaud",
        hex: "#d4c9b0",
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Vert kaki",
        hex: "#3d4a35",
        image:
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Noir doux",
        hex: "#1a1714",
        image:
          "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=900&q=85",
      },
    ],
    sizes: [
      { label: "XS" },
      { label: "S" },
      { label: "M" },
      { label: "L" },
      { label: "XL", soldOut: true },
    ],
    material: "Carvico VITA ECONYL™ — rendu mat satiné",
    description:
      "Bandeau stretch coupe droite. Discret et élégant, idéal plage ou terrasse.",
    rating: 4.5,
    reviewCount: 2,
  },
  {
    id: "top-brassiere-rib",
    name: "Haut Brassière",
    subtitle: "Côte de Gili · Sauge",
    type: "top",
    price: 65,
    bundle: true,
    colors: [
      {
        name: "Sauge",
        hex: "#8a9a7f",
        image:
          "https://images.unsplash.com/photo-1574786527860-9bf65b9b4d8b?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Naturel sable",
        hex: "#d4c9b0",
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Noir doux",
        hex: "#1a1714",
        image:
          "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=900&q=85",
      },
    ],
    sizes: [
      { label: "XS" },
      { label: "S" },
      { label: "M" },
      { label: "L" },
      { label: "XL" },
    ],
    material:
      "Côte de Gili (rib) — relief subtil, maintien ferme, sensation seconde peau.",
    description: "Brassière en côte Gili, relief subtil, maintien ferme.",
    rating: 4.5,
    reviewCount: 2,
  },
  {
    id: "bottom-highwaist-kaki",
    name: "Bas Taille Haute",
    subtitle: "Vert kaki · ECONYL™",
    type: "bottom",
    price: 65,
    bundle: true,
    badge: "Best-seller",
    colors: [
      {
        name: "Vert kaki",
        hex: "#3d4a35",
        image:
          "https://images.unsplash.com/photo-1582553081942-12b3aabd4d3a?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Pierre naturelle",
        hex: "#9c8c74",
        image:
          "https://images.unsplash.com/photo-1573612664822-d7d347da7b80?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Blanc cassé",
        hex: "#ede5d4",
        image:
          "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=85",
      },
    ],
    sizes: [
      { label: "XS" },
      { label: "S" },
      { label: "M" },
      { label: "L" },
      { label: "XL" },
    ],
    material: "Carvico VITA ECONYL™ — maintien et confort",
    description:
      "Coupe taille haute couvrant et gainant. Ligne épurée, maintien naturel.",
    rating: 4.7,
    reviewCount: 3,
  },
  {
    id: "bottom-echanc-orange",
    name: "Bas Échancrée",
    subtitle: "Coucher de soleil · Rib Gili",
    type: "bottom",
    price: 65,
    bundle: true,
    badge: "Nouveau",
    colors: [
      {
        name: "Coucher de soleil",
        hex: "#c4732a",
        image:
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Vert kaki",
        hex: "#3d4a35",
        image:
          "https://images.unsplash.com/photo-1582553081942-12b3aabd4d3a?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Noir doux",
        hex: "#1a1714",
        image:
          "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=900&q=85",
      },
    ],
    sizes: [
      { label: "XS" },
      { label: "S" },
      { label: "M" },
      { label: "L" },
      { label: "XL", soldOut: true },
    ],
    material: "Côte de Gili (rib) — relief subtil, silhouette nette",
    description:
      "Coupe échancrée haute qui allonge et valorise la jambe.",
    rating: 4.5,
    reviewCount: 2,
  },
  {
    id: "bottom-classic-blanc",
    name: "Bas Classique",
    subtitle: "Blanc cassé · ECONYL™",
    type: "bottom",
    price: 65,
    bundle: true,
    colors: [
      {
        name: "Blanc cassé",
        hex: "#ede5d4",
        image:
          "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Vert kaki",
        hex: "#3d4a35",
        image:
          "https://images.unsplash.com/photo-1582553081942-12b3aabd4d3a?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Coucher de soleil",
        hex: "#c4732a",
        image:
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=85",
      },
    ],
    sizes: [
      { label: "XS" },
      { label: "S" },
      { label: "M" },
      { label: "L" },
      { label: "XL" },
    ],
    material: "Carvico VITA ECONYL™",
    description:
      "Coupe classique intemporelle. S'associe avec tous les hauts MAYINA.",
    rating: 4.5,
    reviewCount: 2,
  },
  {
    id: "onepiece-kaki",
    name: "Maillot Essentiel",
    subtitle: "Vert kaki · ECONYL™",
    type: "onepiece",
    price: 120,
    bundle: false,
    badge: "Best-seller",
    colors: [
      {
        name: "Vert kaki",
        hex: "#3d4a35",
        image:
          "https://images.unsplash.com/photo-1571513800374-df1bbe650e56?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Pierre naturelle",
        hex: "#9c8c74",
        image:
          "https://images.unsplash.com/photo-1577897053578-43f2c8b5f1c1?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Blanc cassé",
        hex: "#ede5d4",
        image:
          "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?auto=format&fit=crop&w=900&q=85",
      },
    ],
    sizes: [
      { label: "XS", soldOut: true },
      { label: "S" },
      { label: "M" },
      { label: "L" },
      { label: "XL" },
    ],
    material: "Carvico VITA ECONYL™ — maintien parfait",
    description:
      "Ligne nette. Bretelles fines, dos nageur, échancrure haute.",
    rating: 5.0,
    reviewCount: 3,
  },
  {
    id: "short-homme-kaki",
    name: "Short Essentiel",
    subtitle: "Vert kaki · Homme",
    type: "short",
    price: 110,
    bundle: false,
    badge: "Signature",
    colors: [
      {
        name: "Vert kaki",
        hex: "#3d4a35",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Forêt profonde",
        hex: "#2a3a25",
        image:
          "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Pierre naturelle",
        hex: "#9c8c74",
        image:
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=85",
      },
    ],
    sizes: [
      { label: "S" },
      { label: "M" },
      { label: "L" },
      { label: "XL" },
    ],
    material:
      "Carvico VITA ECONYL™ — résistance et légèreté, séchage ultra-rapide",
    description:
      "Mi-long coupe droite. Ceinture élastique, cordon réglable, séchage rapide.",
    rating: 5.0,
    reviewCount: 2,
  },
  {
    id: "onepiece-velours",
    name: "Maillot Velours",
    subtitle: "Limited Edition · Velours côtelé",
    type: "onepiece",
    price: 145,
    bundle: false,
    badge: "Limited",
    colors: [
      {
        name: "Kaki profond",
        hex: "#2a3a25",
        image:
          "https://images.unsplash.com/photo-1571908599407-cdb918ed83bf?auto=format&fit=crop&w=900&q=85",
      },
      {
        name: "Ambre",
        hex: "#c4732a",
        image:
          "https://images.unsplash.com/photo-1612464354283-3eb52e54e3ad?auto=format&fit=crop&w=900&q=85",
      },
    ],
    sizes: [
      { label: "XS" },
      { label: "S" },
      { label: "M" },
      { label: "L" },
      { label: "XL", soldOut: true },
    ],
    material:
      "Velours côtelé Repreve™ — fibre recyclée à partir de bouteilles",
    description:
      "Approche mode et sensorielle. Texture velours rare en swimwear.",
    rating: 5.0,
    reviewCount: 2,
  },
];
