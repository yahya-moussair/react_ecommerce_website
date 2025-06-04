import { Images } from "../constant/images";

const products = [
  // Solde products
  {
    id: "p1",
    tag: "solde",
    name: "Boxy4 T-Shirt with Roll Sleeve",
    image: Images.fourthProduct,
    price: 99.99,
    discount : 20,
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: "p2",
    tag: "solde",
    name: "Boxy7 T-Shirt with Roll Sleeve",
    image: Images.firstProduct,
    price: 79.99,
    discount : 50,
    description: "1TB external hard drive with fast transfer speed.",
  },
  {
    id: "p3",
    tag: "solde",
    name: "Boxy6 T-Shirt with Roll Sleeve",
    image: Images.secondProduct,
    price: 29.99,
    discount : 10,
    description: "Adjustable aluminum laptop stand for better ergonomics.",
  },
  {
    id: "p4",
    tag: "solde",
    name: "Boxy5 T-Shirt with Roll Sleeve",
    image: Images.thirdProduct,
    price: 19.99,
    discount : 15,
    description: "Fast wireless charger compatible with most smartphones.",
  },

  // Best Seller products
  {
    id: "p5",
    tag: "bestSeller",
    name: "Boxy5 T-Shirt with Roll Sleeve",
    image: Images.secondProduct,
    price: 149.99,
    description: "A stylish smart watch with fitness tracking features.",
  },
  {
    id: "p6",
    tag: "bestSeller",
    name: "Boxy4 T-Shirt with Roll Sleeve",
    image: Images.thirdProduct,
    price: 39.99,
    description: "Ergonomic gaming mouse with RGB lighting.",
  },
  {
    id: "p7",
    tag: "bestSeller",
    name: "Boxy6 T-Shirt with Roll Sleeve",
    image: Images.fourthProduct,
    price: 59.99,
    description: "Compact Bluetooth speaker with powerful sound.",
  },
  {
    id: "p8",
    tag: "bestSeller",
    name: "Boxy7 T-Shirt with Roll Sleeve",
    image: Images.firstProduct,
    price: 34.99,
    description: "LED desk lamp with adjustable brightness.",
  },

  // Featured products
  {
    id: "p9",
    tag: "featured",
    name: "Boxy T-Shirt with Roll Sleeve Detail",
    image: Images.firstProduct,
    price: 89.99,
    description: "Durable mechanical keyboard with customizable keys.",
  },
  {
    id: "p10",
    tag: "featured",
    name: "Boxy1 T-Shirt with Roll Sleeve",
    image: Images.secondProduct,
    price: 25.99,
    description: "Multi-port USB-C hub for your devices.",
  },
  {
    id: "p11",
    tag: "featured",
    name: "Boxy2 T-Shirt with Roll Sleeve",
    image: Images.thirdProduct,
    price: 199.99,
    description: "15.6-inch portable monitor with Full HD resolution.",
  },
  {
    id: "p12",
    tag: "featured",
    name: "Boxy3 T-Shirt with Roll Sleeve",
    image: Images.fourthProduct,
    price: 49.99,
    description: "1080p HD webcam for video calls and streaming.",
  },
];

export default products;
