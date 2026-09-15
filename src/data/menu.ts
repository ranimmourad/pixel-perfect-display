import cafes from "@/assets/cat-cafes.jpg";
import chocolats from "@/assets/cat-chocolats.jpg";
import thes from "@/assets/cat-thes.jpg";
import iced from "@/assets/cat-iced.jpg";
import jus from "@/assets/cat-jus.jpg";
import boissons from "@/assets/cat-boissons.jpg";
import crepesSalees from "@/assets/cat-crepes-salees.jpg";
import crepesSucrees from "@/assets/cat-crepes-sucrees.jpg";
import omelettes from "@/assets/cat-omelettes.jpg";
import viennoiseries from "@/assets/cat-viennoiseries.jpg";
import formules from "@/assets/cat-formules.jpg";
import supplements from "@/assets/cat-supplements.jpg";

export type MenuItem = {
  name: string;
  price: number;
  description?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  group: string;
  image: string;
  items: MenuItem[];
};

/**
 * Source of truth: the official Cactopia menu PDFs.
 * Prices in DT. Obvious typos corrected (amandes, fromage, Omelettes, Dessert).
 */
export const categories: MenuCategory[] = [
  {
    id: "cafes",
    name: "Cafés",
    group: "Boissons chaudes",
    image: cafes,
    items: [
      { name: "Espresso", price: 4 },
      { name: "Double Espresso", price: 6 },
      { name: "Americano", price: 5 },
      { name: "Capucin", price: 5 },
      { name: "Latte coffee", price: 6 },
      { name: "Nescafé au lait", price: 5.5 },
      { name: "Café turc", price: 10 },
    ],
  },
  {
    id: "chocolats",
    name: "Chocolats",
    group: "Boissons chaudes",
    image: chocolats,
    items: [
      { name: "Chocolat au lait", price: 5 },
      { name: "Chocolat chaud", price: 6 },
    ],
  },
  {
    id: "thes",
    name: "Thés & Infusions",
    group: "Boissons chaudes",
    image: thes,
    items: [
      { name: "Thé à la menthe fraîche", price: 4 },
      { name: "Thé aux amandes", price: 7 },
      { name: "Thé aux pignons", price: 12 },
      { name: "Camomille ou Verveine", price: 5 },
      { name: "Thé vert KYUFI", price: 5 },
    ],
  },
  {
    id: "iced-coffee",
    name: "Iced coffee",
    group: "Boissons froides",
    image: iced,
    items: [
      { name: "Iced Americano", price: 6 },
      { name: "Iced Latte", price: 7 },
      { name: "Iced Mocha", price: 8.5 },
      { name: "Iced Chocolate", price: 8 },
    ],
  },
  {
    id: "jus-frais",
    name: "Jus Frais",
    group: "Boissons froides",
    image: jus,
    items: [
      { name: "Jus d'orange", price: 6 },
      { name: "Citronnade", price: 6 },
      { name: "Citronnade à la menthe", price: 7 },
      { name: "Citronnade amandes", price: 9 },
      { name: "Jus de fraise", price: 7 },
      { name: "Kiwi", price: 10 },
    ],
  },
  {
    id: "boissons",
    name: "Boissons",
    group: "Boissons froides",
    image: boissons,
    items: [
      { name: "Soda (canette)", price: 3 },
      { name: "Eau 0.5L", price: 2.5 },
      { name: "Eau 1L", price: 3.5 },
      { name: "Eau gazéifiée 1L", price: 3.5 },
    ],
  },
  {
    id: "supplements-boissons",
    name: "Suppléments boissons",
    group: "Boissons froides",
    image: supplements,
    items: [
      { name: "Sirop menthe", price: 1.5 },
      { name: "Nestlé", price: 3 },
      { name: "Noisette", price: 3 },
      { name: "Caramel", price: 3 },
    ],
  },
  {
    id: "formules",
    name: "Formules Petit Déjeuner",
    group: "Petit déjeuner",
    image: formules,
    items: [
      {
        name: "Morning Cactus",
        price: 10,
        description: "Un café au choix, une viennoiserie et une bouteille d'eau 0,5L.",
      },
      {
        name: "Sweet Oasis",
        price: 18,
        description:
          "Un café au choix, pancakes au chocolat, une bouteille d'eau 0,5L et un jus.",
      },
      {
        name: "Power Dessert",
        price: 25,
        description:
          "Un café au choix, une viennoiserie, une bouteille d'eau 0,5L, une omelette et un jus.",
      },
    ],
  },
  {
    id: "crepes-salees",
    name: "Crêpes salées",
    group: "Desserts & nourritures",
    image: crepesSalees,
    items: [
      { name: "Thon fromage", price: 11 },
      { name: "Jambon fromage", price: 11 },
      { name: "Spéciale", price: 15, description: "Jambon, champignons, œuf." },
    ],
  },
  {
    id: "crepes-gaufres-sucrees",
    name: "Crêpes & Gaufres sucrées",
    group: "Desserts & nourritures",
    image: crepesSucrees,
    items: [
      { name: "Chocolat", price: 9 },
      { name: "Nutella", price: 13 },
      { name: "Ferrero Rocher", price: 16 },
    ],
  },
  {
    id: "omelettes",
    name: "Omelettes",
    group: "Desserts & nourritures",
    image: omelettes,
    items: [{ name: "Omelette au beurre", price: 9 }],
  },
  {
    id: "viennoiseries",
    name: "Viennoiseries",
    group: "Desserts & nourritures",
    image: viennoiseries,
    items: [{ name: "Croissant / Pain au chocolat", price: 4 }],
  },
  {
    id: "supplements",
    name: "Suppléments",
    group: "Desserts & nourritures",
    image: supplements,
    items: [
      { name: "Amandes effilées", price: 2 },
      { name: "Noisettes concassées", price: 2.5 },
      { name: "Pistaches concassées", price: 4 },
    ],
  },
];

export const formatPrice = (price: number) =>
  `${price.toFixed(price % 1 === 0 ? 1 : 1)} DT`;
