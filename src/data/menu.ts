import carbonara from "@/assets/carbonara-wheel.jpg";
import pizza from "@/assets/pizza-margherita.jpg";
import lemon from "@/assets/lemon-pie.jpg";
import burrata from "@/assets/burrata.jpg";
import truffle from "@/assets/truffle-pasta.jpg";

export type Dish = {
  name: string;
  description: string;
  tags?: string[];
  price: string;
  image?: string;
  signature?: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  italian?: string;
  intro: string;
  dishes: Dish[];
};

export const menu: MenuSection[] = [
  {
    id: "antipasti",
    title: "To Share",
    italian: "Antipasti",
    intro: "Boards, focaccia and burrata to open the table — designed for grabbing hands and long conversations.",
    dishes: [
      { name: "Piatto di Prodotti", description: "Grissini, Prosciutto di Parma, mozzarella di bufala and mixed olives.", price: "£14–£18" },
      { name: "Burrata Board", description: "Creamy Puglian burrata with basil pesto and warm focaccia.", tags: ["VEG"], price: "£12–£16", image: burrata },
      { name: "Focaccia della Casa", description: "House-made focaccia, warm from the oven.", tags: ["VEG"], price: "£6–£9" },
      { name: "3-Tier Sharing Stand", description: "Focaccia, burrata, bresaola, prosciutto and parmigiano — the full opener.", price: "£28–£35" },
    ],
  },
  {
    id: "pasta",
    title: "Fresh Pasta",
    italian: "Primi Piatti",
    intro: "Handmade daily by la squadra — including the pasta that broke the internet.",
    dishes: [
      { name: "Gran Carbonara", description: "Spaghetti alla chitarra tossed inside a whole pecorino wheel, guanciale, egg yolk and black pepper.", price: "£15–£17", image: carbonara, signature: true },
      { name: "Crazy San Marzano", description: "Spaghetti in spicy San Marzano sauce with a creamy burrata heart and fresh chilli.", tags: ["VEG"], price: "£14–£16" },
      { name: "Mafaldine al Tartufo", description: "Ribbon pasta with fresh truffle, served from a pecorino wheel.", tags: ["VEG"], price: "£17–£20", image: truffle, signature: true },
      { name: "The One & Tortelloni", description: "Cheesy tortelloni filled with stracciatella-ricotta in a tomato scarpariello sauce.", tags: ["VEG"], price: "£15–£17" },
      { name: "Crab Tagliarini", description: "Hand-picked crab, langoustine bisque and lemon butter.", price: "£18–£22" },
      { name: "Pesto Genovese", description: "Fresh pasta tossed in basil pesto and parmigiano reggiano.", tags: ["VEG"], price: "£13–£15" },
    ],
  },
  {
    id: "pizza",
    title: "Neapolitan Pizza",
    italian: "Pizza Napoletana",
    intro: "Wood-fired, leopard-spotted crusts topped with San Marzano DOP tomato and buffalo mozzarella.",
    dishes: [
      { name: "Mammargherita di Bufala", description: "San Marzano DOP tomato, fior di latte, buffalo mozzarella and basil.", tags: ["VEG"], price: "£11–£14", image: pizza },
      { name: "Some Like It Hot", description: "'Nduja, spicy sausage, buffalo ricotta and chilli.", price: "£14–£17" },
      { name: "Pizza al Metro", description: "A full metre of pizza with two flavours — built for sharing (priced per person).", price: "~£14 pp" },
    ],
  },
  {
    id: "secondi",
    title: "Grills & Mains",
    italian: "Secondi",
    intro: "For the big appetites at the table.",
    dishes: [
      { name: "Grilled Rib Steak (350g)", description: "Served with crispy potatoes and béarnaise sauce.", price: "£32–£38" },
      { name: "Chicken Skewer", description: "Marinated in yoghurt and lemon, grilled over fire.", price: "£16–£19" },
    ],
  },
  {
    id: "dolci",
    title: "Desserts",
    italian: "Dolci",
    intro: "Save room — this is where things get maximalist.",
    dishes: [
      { name: "Il Tiramisu", description: "Classic house-made tiramisu.", tags: ["VEG"], price: "£8–£10" },
      { name: "Incomparable Lemon Pie", description: "XXL zingy lemon meringue pie — the ~15cm-tall showstopper.", tags: ["VEG"], price: "£9–£12", image: lemon, signature: true },
      { name: "Chocolate Profiterole", description: "Caramelised, chocolate-covered — Italian excess in one bite.", tags: ["VEG"], price: "£9–£11" },
    ],
  },
];

export const setMenus = [
  { name: "Circolo's Pranzetto", detail: "Speedy weekday lunch set menu.", price: "~£20–£25 pp" },
  { name: "Group Sharing Menu (8–24)", detail: "Set feast menu for larger bookings.", price: "~£54 pp + service" },
];

export const locations = [
  { city: "London", neighbourhood: "Fitzrovia", address: "40-41 Rathbone Place, London W1T 1HX", note: "The original UK location. Sunny terrace in summer, thousands of bottles inside.", slug: "london" },
  { city: "Manchester", neighbourhood: "St Michael's", address: "Jackson's Row, Manchester M2 5WD", note: "Eucalyptus-canopied bar plus the Circolino dining room.", slug: "manchester" },
  { city: "Madrid", neighbourhood: "Azca", address: "Torre Picasso, Plaza Pablo Ruiz Picasso 1, 28020 Madrid", note: "Set in the Azca business district." },
  { city: "Barcelona", neighbourhood: "L'Eixample", address: "Passeig de Gràcia 44, 08007 Barcelona", note: "Central Barcelona, on the city's most famous boulevard." },
  { city: "Paris", neighbourhood: "—", address: "Check the official site for the current address", note: "Part of the Big Mamma Paris family." },
];