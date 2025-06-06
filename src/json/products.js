import { Images } from "../constant/images";

const products = [
  // Solde products
  {
    id: "0",
    tag: "solde",
    name: "Boxy4 T-Shirt with Roll Sleeve",
    image: Images.fourthProduct,
    price: 99.99,
    discount: 20,
    description:
      "The Boxy4 T-Shirt with Roll Sleeve is a premium-quality garment designed for both comfort and style. Crafted from soft, breathable cotton, it offers a relaxed fit perfect for casual outings or lounging at home. Its unique roll sleeve design adds a modern edge, while the fabric ensures long-lasting durability even after multiple washes. Ideal for everyday wear, this shirt pairs effortlessly with jeans, shorts, or joggers. Whether you’re heading to a brunch or enjoying a laid-back weekend, the Boxy4 T-Shirt guarantees you look good while feeling great. A must-have for anyone who values versatility and minimalist fashion.",
  },
  {
    id: "1",
    tag: "solde",
    name: "Boxy7 T-Shirt with Roll Sleeve",
    image: Images.firstProduct,
    price: 79.99,
    discount: 50,
    description:
      "Experience everyday style and comfort with the Boxy7 T-Shirt with Roll Sleeve. Made from high-quality fabric, this t-shirt features a classic design enhanced by rolled sleeves that give it a chic, urban flair. Its breathable material ensures comfort throughout the day, making it a staple for all seasons. The minimalist aesthetic makes it suitable for layering or wearing alone. Whether you're running errands, meeting friends, or relaxing at home, this t-shirt seamlessly blends into your lifestyle. Enjoy the perfect mix of fashion and functionality with a garment designed to last and impress. Great for gifting or personal use.",
  },
  {
    id: "2",
    tag: "solde",
    name: "Boxy6 T-Shirt with Roll Sleeve",
    image: Images.secondProduct,
    price: 29.99,
    discount: 10,
    description:
      "The Boxy6 T-Shirt with Roll Sleeve is designed for modern individuals who value style and ease. Made with soft, breathable materials, this t-shirt delivers exceptional comfort while maintaining a fashionable edge. The rolled sleeve detail adds character, turning a simple piece into a standout wardrobe essential. Its versatile look makes it suitable for casual Fridays at work, weekend adventures, or lounging at home. Available in multiple sizes, it offers a flattering fit for all body types. Durable stitching and quality fabric mean this t-shirt will hold its shape and color wash after wash. It's a stylish, everyday go-to.",
  },
  {
    id: "3",
    tag: "solde",
    name: "Boxy5 T-Shirt with Roll Sleeve",
    image: Images.thirdProduct,
    price: 19.99,
    discount: 15,
    description:
      "Affordable yet fashionable, the Boxy5 T-Shirt with Roll Sleeve brings a casual look that doesn’t compromise on quality. Made with lightweight fabric that feels soft on the skin, it’s a t-shirt you’ll want to wear every day. The roll sleeve design adds a modern flair, making it more than just your average tee. Perfect for warm days, layering in cooler weather, or simply relaxing at home. Its versatile cut makes it easy to style with jeans, shorts, or sweatpants. Durable, breathable, and stylish—this shirt offers great value for those looking to enhance their casual wardrobe affordably.",
  },

  // Best Seller products
  {
    id: "4",
    tag: "bestSeller",
    name: "Boxy5 T-Shirt with Roll Sleeve",
    image: Images.secondProduct,
    price: 149.99,
    description:
      "Elevate your wardrobe with the best-selling Boxy5 T-Shirt with Roll Sleeve. Crafted for the trend-conscious individual, it combines simplicity and elegance in one timeless piece. The rolled sleeves provide a laid-back yet polished look, while the soft cotton material ensures day-long comfort. Ideal for both casual outings and semi-formal events, it can be paired with a range of bottoms and accessories. Its strong seams and colorfast fabric ensure longevity and consistent wear. Whether you're buying it for yourself or gifting it to a friend, this t-shirt remains a customer favorite for good reason. Easy to love, hard to replace.",
  },
  {
    id: "5",
    tag: "bestSeller",
    name: "Boxy4 T-Shirt with Roll Sleeve",
    image: Images.thirdProduct,
    price: 39.99,
    description:
      "The Boxy4 T-Shirt with Roll Sleeve is a wardrobe essential for those who crave comfort without sacrificing style. Designed with rolled sleeves for a casual touch, this shirt transitions easily from day to night. The soft, breathable material keeps you cool and relaxed, making it an ideal choice for any season. Its minimalist design pairs effortlessly with jeans, chinos, or shorts, offering endless styling possibilities. With a focus on quality and fit, this t-shirt stands out as a reliable choice for any occasion. Durable, machine-washable, and timeless, it’s no wonder this shirt is a consistent best-seller.",
  },
  {
    id: "6",
    tag: "bestSeller",
    name: "Boxy6 T-Shirt with Roll Sleeve",
    image: Images.fourthProduct,
    price: 59.99,
    description:
      "Perfect for those who appreciate subtle yet impactful fashion, the Boxy6 T-Shirt with Roll Sleeve delivers on all fronts. Featuring a relaxed fit and signature rolled sleeves, this t-shirt blends casual cool with everyday practicality. The breathable fabric keeps you comfortable, while its refined stitching ensures a premium finish. Ideal for brunches, strolls, or casual meetings, this tee is a great option for a clean and polished look. Customers love it for its versatility and quality construction. Once you try it on, you'll want it in every color. It's one of our top sellers for good reason.",
  },
  {
    id: "7",
    tag: "bestSeller",
    name: "Boxy7 T-Shirt with Roll Sleeve",
    image: Images.firstProduct,
    price: 34.99,
    description:
      "Join the trendsetters with the Boxy7 T-Shirt with Roll Sleeve. Known for its ultra-soft fabric and fashionable design, this t-shirt is the epitome of modern casual wear. The rolled sleeve detail provides an edgy twist to a classic fit, making it a go-to piece for any casual wardrobe. Whether you're going to a weekend event or simply lounging around, this shirt has you covered. It pairs beautifully with denim, joggers, or even skirts for a more experimental look. Easy to wash, hard to wear out—this is a reliable fashion staple you’ll want in your rotation year-round.",
  },

  // Featured products
  {
    id: "8",
    tag: "featured",
    name: "Boxy T-Shirt with Roll Sleeve Detail",
    image: Images.firstProduct,
    price: 89.99,
    description:
      "Featured for its unique blend of elegance and comfort, the Boxy T-Shirt with Roll Sleeve Detail is a standout in any collection. It features premium cotton that feels amazing on the skin and retains its shape and softness over time. The roll sleeve accents offer a subtle yet stylish touch, elevating the shirt's overall appeal. Whether you're heading to a casual meet-up or a coffee date, this shirt ensures you look effortlessly chic. It’s breathable, durable, and available in a range of sizes. Add this to your wardrobe and experience the perfect balance of comfort and sophistication.",
  },
  {
    id: "9",
    tag: "featured",
    name: "Boxy1 T-Shirt with Roll Sleeve",
    image: Images.secondProduct,
    price: 25.99,
    description:
      "Simple, stylish, and undeniably comfortable—the Boxy1 T-Shirt with Roll Sleeve offers everything you want in a daily wear essential. It’s made from soft, breathable material designed to keep you cool and comfortable throughout the day. The rolled sleeve adds a modern flair, making it more versatile than your average tee. This t-shirt can be dressed up or down depending on the occasion and pairs effortlessly with a wide range of outfits. Easy to maintain and resistant to fading, it will remain a favorite for seasons to come. An excellent addition to any wardrobe, especially for minimalists.",
  },
  {
    id: "10",
    tag: "featured",
    name: "Boxy2 T-Shirt with Roll Sleeve",
    image: Images.thirdProduct,
    price: 199.99,
    description:
      "Step up your fashion game with the Boxy2 T-Shirt with Roll Sleeve. Engineered with superior fabric, this shirt offers unmatched comfort and durability. Its signature roll sleeve design adds character and distinguishes it from other basic tees. Designed for modern lifestyles, it fits seamlessly into work-from-home outfits or casual daywear. The fabric is soft yet resilient, ensuring that it holds up after countless wears and washes. Ideal for those who appreciate timeless basics with a twist. Once you add this to your collection, it’s likely to become one of your most-reached-for pieces. A featured item for good reason.",
  },
  {
    id: "11",
    tag: "featured",
    name: "Boxy3 T-Shirt with Roll Sleeve",
    image: Images.fourthProduct,
    price: 49.99,
    description:
      "Get ready to elevate your everyday style with the Boxy3 T-Shirt with Roll Sleeve. Made with a focus on comfort and durability, this shirt boasts a clean look that never goes out of fashion ",
  }
]

export default products
