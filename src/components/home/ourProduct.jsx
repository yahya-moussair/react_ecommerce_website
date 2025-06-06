import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context";
import { Link } from "react-router-dom";

const OurProduct = () => {
  const { products } = useAppContext();
  const tag = products.map((e) => e.tag);
  const [product, setProduct] = useState(products);

  const [selectedTag, setSelectedTag] = useState("solde");
  const uniqueTags = [...new Set(tag)];
  useEffect(() => {
    const defaultProducts = products.filter((e) =>
      e.tag.toLowerCase().includes(selectedTag.toLowerCase())
    );
    setProduct(defaultProducts);
  }, [products]);

  const filterProduct = (element) => {
    const newTab = products.filter((e) => e.tag.includes(element));
    setProduct(newTab);

    setSelectedTag(element);
  };

  return (
    <>
      <div className="mx-auto w-[80%] pt-20 flex flex-col gap-y-15 items-center">
        <h1 className="text-3xl text-center">OUR PRODUCTS</h1>
        <div className="flex lg:gap-20 md:gap-x-15 gap-x-10">
          {uniqueTags.map((element, index) => (
            <button
              onClick={() => filterProduct(element)}
              className={`cursor-pointer capitalize text-lg lg:text-gray-700 text-black transition-all duration-300 group relative ${
                selectedTag == element && " lg:text-black"
              }`}
              key={index}
            >
              {element}
              <span
                className={`absolute left-0 bottom-0 w-full bg-black transition-all duration-200 ${
                  selectedTag == element && "h-[1px]"
                }`}
              ></span>
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-6 gap-y-10">
          {product.map((e, index) => (
            <div key={index} className="flex flex-col gap-y-2">
              <div
                className={`relative group overflow-hidden lg:before:absolute lg:before:content-[""] lg:before:w-full lg:before:h-full hover:lg:before:bg-gray-800/30 lg:before:transition-all lg:before:duration-700 `}
              >
                <img className="" src={e.image} alt="" />
                <Link
                  to={`/details/${e.id}`}
                  className={`w-fit px-5 py-2 h-fit text-white cursor-pointer rounded-full bg-black lg:hover:bg lg:absolute lg:flex hidden lg:bottom-[-100%] group-hover:bottom-[10%] hover:bg-[#e65540] transition-all duration-700  lg:left-[50%] translate-x-[-50%] `}
                >
                  Show Details
                </Link>
              </div>
              <Link to={`/details/${e.id}`}>
                <h1 className="text-lg text-gray-500 hover:text-[#e65540] lg:transition-all duration-300">
                  {e.name}
                </h1>
              </Link>
              <div className="flex gap-x-4 items-center">
                <h1
                  className={`text-gray-500 ${
                    "discount" in e
                      ? "lg:text-[0.9rem] line-through"
                      : "lg:text-[1.2rem] text-lg"
                  }`}
                >
                  {e.price} $
                </h1>
                <h1
                  className={`lg:text-[1.2rem] text-lg text-orange-600 ${
                    "discount" in e ? "flex" : "hidden"
                  }`}
                >
                  {(e.price - (e.price * e.discount) / 100).toFixed(2)} $
                </h1>
              </div>
              <Link
                to={`/details/${e.id}`}
                className={`w-full bg-black rounded-full py-2 text-center text-white lg:hidden `}
              >
                Show Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurProduct;
