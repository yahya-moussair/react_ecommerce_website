import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/index";
import { Link } from "react-router-dom";

const Header = () => {
  const Prices = ["10", "50", "100", "150", "200"];
  const { products, cartCounter, setCartCounter } = useAppContext();
  const tag = [...new Set(products.map((e) => e.tag))];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    filterProducts(selectedTag, selectedPrice, sortOrder, searchQuery);
  }, [products]);

  const filterProducts = (tag, price, order, search) => {
    let filtered = [...products];

    if (tag && tag !== "All") {
      filtered = filtered.filter((p) => p.tag.includes(tag));
    }


    if (price) {
      const min = parseInt(price);
      const index = Prices.indexOf(price);
      const max =
        index < Prices.length - 1 ? parseInt(Prices[index + 1]) : Infinity;
      filtered = filtered.filter((p) => p.price >= min && p.price < max);
    }

    if (search && search.trim() !== "") {
      const query = search.toLowerCase();
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(query));
    }

    if (order === "asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "desc") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(filtered);
  };

  const handleTagChange = (e) => {
    const tag = e.target.value;
    setSelectedTag(tag);
    filterProducts(tag, selectedPrice, sortOrder, searchQuery);
  };

  const handlePriceChange = (e) => {
    const price = e.target.value;
    setSelectedPrice(price);
    filterProducts(selectedTag, price, sortOrder, searchQuery);
  };

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    filterProducts(selectedTag, selectedPrice, order, searchQuery);
  };

  const handleSearchChange = (e) => {
    const search = e.target.value;
    setSearchQuery(search);
    filterProducts(selectedTag, selectedPrice, sortOrder, search);
  };

  return (
    <>
      <div
        className={`flex justify-center items-center bgImages lg:h-[20rem] md:h-[15rem] h-[10rem] w-full relative before:absolute before:content-[""] before:left-0 before:top-0 before:w-full before:h-full before:bg-black/40`}
      >
        <h1 className={`lg:text-6xl md:text-3xl text-xl text-white z-20`}>
          Product
        </h1>
      </div>

      <div className={`flex flex-col gap-y-10 items-center w-full pt-20`}>
        <div
          className={`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-2.5 items-center justify-center w-full lg:px-20 md:px-15 px-10`}
        >
          <select
            onChange={handleTagChange}
            className="border-2 rounded-lg border-black focus:outline-none text-xl py-2 px-2"
          >
            <option value="" disabled selected>
              Select by Tag
            </option>
            <option value="All">All</option>
            {tag.map((e, index) => (
              <option key={index} value={e}>
                {e}
              </option>
            ))}
          </select>
          <select
            onChange={handlePriceChange}
            className="border-2 rounded-lg border-black focus:outline-none text-xl py-2 px-2"
          >
            <option value="" disabled selected>
              Select by Price
            </option>
            {Prices.map(
              (e, index) =>
                index < Prices.length - 1 && (
                  <option key={index} value={e}>
                    {e} $ - {Prices[index + 1]} $
                  </option>
                )
            )}
          </select>
          <select
            onChange={handleSortChange}
            className="border-2 rounded-lg border-black focus:outline-none text-xl py-2 px-2"
          >
            <option value="" disabled selected>
              Select by Name
            </option>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="border-2 rounded-lg border-black focus:outline-none text-xl py-2 px-2"
            placeholder="Search"
          />
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8 mx-auto w-[90%]">
          {filteredProducts.map((e, index) => (
            <div key={index} className="rounded-lg flex flex-col gap-y-2">
              <div
                className={`rounded-lg relative group overflow-hidden lg:before:absolute lg:before:content-[""] lg:before:w-full lg:before:h-full hover:lg:before:bg-gray-800/30 lg:before:transition-all lg:before:duration-700 `}
              >
                <img className="rounded-lg" src={e.image} alt={e.name} />
                <button
                  onClick={() => setCartCounter(cartCounter + 1)}
                  className={`w-fit px-5 py-2 h-fit text-white cursor-pointer rounded-full bg-black lg:hover:bg lg:absolute lg:flex hidden lg:bottom-[-100%] group-hover:bottom-[10%] hover:bg-[#e65540] transition-all duration-700  lg:left-[50%] translate-x-[-50%] `}
                >
                  ADD TO CART
                </button>
              </div>
              <Link to="#">
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
              <button
                onClick={() => setCartCounter(cartCounter + 1)}
                className={`w-full bg-black rounded-full py-2 text-white lg:hidden`}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
