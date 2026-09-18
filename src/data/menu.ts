import cafes from "@/assets/cat-cafes.jpg";
import chocolats from "@/assets/cat-chocolats.jpg";
import thes from "@/assets/cat-thes.jpg";
import iced from "@/assets/cat-iced.jpg";
import frappuccino from "@/assets/cat-frappuccino.jpg";
import jus from "@/assets/cat-jus.jpg";
import boissons from "@/assets/cat-boissons.jpg";
import paninis from "@/assets/cat-paninis.jpg";
import painPerdu from "@/assets/cat-pain-perdu.jpg";
import pancakes from "@/assets/cat-pancakes.jpg";
import crepesSucrees from "@/assets/cat-crepes-sucrees.jpg";
import crepesSalees from "@/assets/cat-crepes-salees.jpg";
import bruschetta from "@/assets/cat-bruschetta.jpg";
import sandwichs from "@/assets/cat-sandwichs.jpg";
import saladeCesar from "@/assets/cat-salade-cesar.jpg";
import omelettes from "@/assets/cat-omelettes.jpg";
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

export const categories: MenuCategory[] = [
  {
    id: "cafes",
    name: "Cafés",
    group: "Boissons chaudes",
    image: cafes,
    items: [
      { name: "Espresso", price: 4.5 },
      { name: "Double Espresso", price: 6.0 },
      { name: "Americano", price: 5.0 },
      { name: "Capucin", price: 5.0 },
      { name: "Latte coffee", price: 6.0 },
      { name: "Nescafé au lait", price: 5.5 },
      { name: "Café turc", price: 10.0 },
      { name: "Affogato vanilla", price: 14.0 },
    ],
  },
  {
    id: "chocolats",
    name: "Chocolats",
    group: "Boissons chaudes",
    image: chocolats,
    items: [
      { name: "Chocolat au lait", price: 4.0 },
      { name: "Chocolat chaud", price: 6.0 },
    ],
  },
  {
    id: "thes",
    name: "Thés & Infusions",
    group: "Boissons chaudes",
    image: thes,
    items: [
      { name: "Thé à la menthe fraîche", price: 4.0 },
      { name: "Thé aux amandes", price: 7.0 },
      { name: "Thé aux pignons", price: 12.0 },
      { name: "Infusion Camomille", price: 4.0 },
      { name: "Infusion Verveine", price: 4.0 },
      { name: "Thé vert KYUFI", price: 5.0 },
    ],
  },
  {
    id: "supplements-boissons",
    name: "Suppléments boissons",
    group: "Boissons chaudes",
    image: supplements,
    items: [
      { name: "Nestlé", price: 3.0 },
      { name: "Arôme Noisette", price: 3.0 },
      { name: "Arôme Caramel", price: 3.0 },
      { name: "Arôme Cookies", price: 3.0 },
    ],
  },
  {
    id: "iced-coffee",
    name: "Iced coffee",
    group: "Boissons froides",
    image: iced,
    items: [
      { name: "Iced Americano", price: 6.0 },
      { name: "Iced Latte", price: 7.0 },
      { name: "Iced Mocha", price: 8.5 },
      { name: "Iced Chocolate", price: 8.0 },
      { name: "Expresso tonic", price: 8.0 },
      { name: "Expresso Sprite", price: 8.0 },
    ],
  },
  {
    id: "frappuccino",
    name: "Frappuccino",
    group: "Boissons froides",
    image: frappuccino,
    items: [
      { name: "Classique", price: 10.0 },
      { name: "Caramel", price: 12.0 },
      { name: "Vanille", price: 12.0 },
      { name: "Cookies", price: 12.0 },
      { name: "Oreo", price: 13.0 },
      { name: "Nutella", price: 14.0 },
    ],
  },
  {
    id: "jus-frais",
    name: "Jus Frais",
    group: "Boissons froides",
    image: jus,
    items: [
      { name: "Jus d’orange", price: 6.0 },
      { name: "Citronnade", price: 6.0 },
      { name: "Citronnade à la menthe", price: 7.0 },
      { name: "Jus de fraise", price: 7.0 },
      { name: "Citronnade amandes", price: 9.0 },
      { name: "Fruits exotiques", price: 9.0 },
      { name: "Kiwi", price: 10.0 },
      { name: "Banane ananas", price: 10.0 },
    ],
  },
  {
    id: "boissons",
    name: "Boissons",
    group: "Boissons froides",
    image: boissons,
    items: [
      { name: "Soda (canette)", price: 4.0 },
      { name: "Eau 0.5L", price: 2.5 },
      { name: "Eau 1L", price: 4.0 },
    ],
  },
  {
    id: "paninis",
    name: "Paninis",
    group: "Sucré et salé",
    image: paninis,
    items: [
      { name: "Thon fromage", price: 12.0 },
      { name: "Jambon fromage", price: 12.0 },
      { name: "Poulet fromage", price: 15.0 },
    ],
  },
  {
    id: "pain-perdu",
    name: "Pain Perdu",
    group: "Sucré et salé",
    image: painPerdu,
    items: [
      { name: "Classique", price: 10.0, description: "Chocolat, boule de glace, amandes concassées, fruits de saison" },
      { name: "Nutella", price: 14.0, description: "Nutella, boule de glace, amandes concassées, fruits de saison" },
      { name: "Caramel Beurre Salé", price: 10.0, description: "Caramel beurre salé, boule de glace, amandes concassées" },
      { name: "Duo cactus", price: 20.0, description: "Caramel beurre salé, chocolat, 2 boules de glace, amandes concassées" },
    ],
  },
  {
    id: "pancakes",
    name: "Pancakes",
    group: "Sucré et salé",
    image: pancakes,
    items: [
      { name: "Miel", price: 8.0 },
      { name: "Caramel beurre salé", price: 10.0 },
      { name: "Chocolat", price: 10.0 },
      { name: "Spéculos", price: 13.0 },
      { name: "Nutella", price: 14.0 },
    ],
  },
  {
    id: "crepes-gaufres-sucrees",
    name: "Crêpes & Gaufres sucrées",
    group: "Sucré et salé",
    image: crepesSucrees,
    items: [
      { name: "Chocolat", price: 10.0 },
      { name: "Nutella", price: 14.0 },
      { name: "Spéculos", price: 15.0 },
      { name: "Pistache", price: 16.0 },
      { name: "Ferrero", price: 18.0 },
      { name: "Bueno", price: 18.0 },
    ],
  },
  {
    id: "crepes-salees",
    name: "Crêpes salées",
    group: "Sucré et salé",
    image: crepesSalees,
    items: [
      { name: "Thon", price: 11.0 },
      { name: "Jambon", price: 11.0 },
      { name: "4 fromages", price: 12.0 },
      { name: "Pepperoni", price: 15.0 },
      { name: "Poulet champignons", price: 18.0 },
    ],
  },
  {
    id: "bruschetta",
    name: "Bruschetta / Gaufre salée",
    group: "Sucré et salé",
    image: bruschetta,
    items: [
      { name: "Classique", price: 12.0, description: "Sauce blanche, tomates en dés, thon, œuf dur, basilic" },
      { name: "Hollandaise", price: 16.0, description: "Sauce blanche, thon, 2 œufs bénédicte, saumon fumé, roquette" },
    ],
  },
  {
    id: "sandwichs",
    name: "Sandwichs",
    group: "Sucré et salé",
    image: sandwichs,
    items: [
      { name: "Poulet", price: 8.0 },
      { name: "Cordon bleu", price: 8.0 },
    ],
  },
  {
    id: "salade-cesar",
    name: "Salade César",
    group: "Sucré et salé",
    image: saladeCesar,
    items: [
      { name: "Salade César", price: 10.0, description: "Laitue, Tomates cerises, Poulet, Croûtons, Œuf dure, Maïs, Fromage en cubes" },
    ],
  },
  {
    id: "omelettes",
    name: "Omelettes",
    group: "Sucré et salé",
    image: omelettes,
    items: [
      { name: "Omelette au beurre", price: 10.0, description: "3 œufs, charcuterie, fromage, toast" },
    ],
  },
  {
    id: "supplements",
    name: "Suppléments",
    group: "Sucré et salé",
    image: supplements,
    items: [
      { name: "Œuf", price: 2.0 },
      { name: "Champignons", price: 2.0 },
      { name: "Amandes effilées", price: 3.0 },
      { name: "Noisettes concassées", price: 3.5 },
      { name: "Fromage", price: 3.0 },
      { name: "Jambon", price: 3.0 },
      { name: "Thon", price: 3.5 },
    ],
  },
  {
    id: "formules",
    name: "Formules Petit Déjeuner",
    group: "Petit déjeuner",
    image: formules,
    items: [
      {
        name: "Cactus start",
        price: 12.0,
        description: "Café, jus de fraise ou citronnade ou orange, viennoiseries, eau 0,5 L",
      },
      {
        name: "Sweet Cactus",
        price: 22.0,
        description:
          "Café, jus de fraise ou citronnade ou orange, pain perdu (ou pancake au chocolat), viennoiseries, yaourt bowl au granola, chocolat miel beurre, eau 0,5 L",
      },
      {
        name: "Power Cactus",
        price: 25.0,
        description:
          "Café, jus de fraise ou citronnade ou orange, charcuterie, fromage, omelette, bruschetta classique, eau 0,5 L",
      },
      {
        name: "Healthy green",
        price: 25.0,
        description:
          "Café, fresh detox, yaourt bowl au granola, 2 œufs durs crudités, charcuterie, fromages, toast complet, avocat, pancake au miel",
      },
      {
        name: "Duo",
        price: 45.0,
        description:
          "2 cafés, 2 jus de fraise ou citronnade ou orange, 2 viennoiseries, pain perdu (ou pancake au chocolat), 2 yaourts bowl au granola et fruits, bruschetta hollandaise, charcuterie, fromages, omelette, chocolat miel beurre, eau 1 L",
      },
      {
        name: "Quad cactus",
        price: 85.0,
        description:
          "4 cafés, 4 jus de fraise ou citronnade ou orange, 4 viennoiseries, pain perdu et pancake au chocolat, 4 yaourts bowl au granola, 2 bruschetta hollandaises, charcuterie, fromages, 2 omelettes, chocolat miel beurre, 2 bouteilles d'eau 1 L",
      },
      {
        name: "Happy kiddos",
        price: 10.0,
        description:
          "Chocolat au lait, œuf dure, mini pancake au chocolat, eau 0,5 L",
      },
    ],
  },
];

export const formatPrice = (price: number) =>
  `${price.toFixed(1)} DT`;
