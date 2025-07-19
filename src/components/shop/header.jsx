import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/index";
import { Link } from "react-router-dom";

const Header = () => {
  const Prices = ["10", "50", "100", "150", "200"];
  const { products } = useAppContext();
  const tag = [...new Set(products.map((e) => e.tag))];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false); // for mobile modal
  const [openSections, setOpenSections] = useState({ tags: true, price: true, sort: true });

  const resetFilters = () => {
    setSelectedTag("");
    setSelectedPrice("");
    setSortOrder("");
    setSearchQuery("");
    filterProducts("", "", "", "");
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    filterProducts(selectedTag, selectedPrice, sortOrder, searchQuery);
  }, [products]);

  // Prevent page scroll when mobile filters are open
  useEffect(() => {
    if (filtersOpen && window.innerWidth < 1024) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [filtersOpen]);

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

  const handleSearchChange = (e) => {
    const search = e.target.value;
    setSearchQuery(search);
    filterProducts(selectedTag, selectedPrice, sortOrder, search);
  };

  return (
    <>
      <div
        className={`flex justify-center items-center bgImages lg:h-[20rem] md:h-[15rem] h-[10rem] w-full relative before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-black/40`}
      >
        <h1 className={`lg:text-6xl md:text-3xl text-xl text-white z-20`}>
          Product
        </h1>
      </div>

      <div className={`flex flex-col gap-y-10 items-center w-full pt-20 px-4 md:px-8 lg:px-12`}>
        <div className="flex w-full max-w-7xl mx-auto gap-8 flex-col lg:flex-row">
          {/* Mobile: Show Filters Button */}
          <button
            className="lg:hidden mb-4 px-4 py-2 bg-[#e65540] text-white rounded-lg font-semibold w-fit mx-auto"
            onClick={() => setFiltersOpen(true)}
            aria-label="Show Filters"
          >
            Show Filters
          </button>
          {/* Sidebar Filters */}
          {/* Desktop: sticky sidebar, Mobile: modal */}
          <aside
            className="w-full lg:max-w-xs bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-8 mb-6 lg:mb-0 z-40 lg:sticky lg:top-28"
            aria-label="Product Filters"
            style={{ display: filtersOpen || window.innerWidth >= 1024 ? 'flex' : 'none', position: window.innerWidth >= 1024 ? 'sticky' : 'fixed', top: window.innerWidth >= 1024 ? '7rem' : 0, left: 0, right: 0, height: window.innerWidth >= 1024 ? 'auto' : '100vh', background: window.innerWidth >= 1024 ? 'white' : 'rgba(255,255,255,0.98)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-gray-800" tabIndex={0}>Filters</h2>
              {/* Close button for mobile modal */}
              <button
                className="lg:hidden text-4xl font-bold text-gray-600 hover:text-[#e65540] w-12 h-12 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-[#e65540]"
                onClick={() => setFiltersOpen(false)}
                aria-label="Close Filters"
                style={{ display: window.innerWidth >= 1024 ? 'none' : 'flex' }}
              >
                &times;
              </button>
            </div>
            <button
              className="mb-4 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm font-medium w-fit"
              onClick={resetFilters}
              type="button"
              aria-label="Reset Filters"
            >
              Reset Filters
            </button>
            {/* Collapsible Tag Filter */}
            <div className="border-b pb-2 mb-2">
              <button
                className="flex items-center justify-between w-full font-semibold text-gray-700 text-lg focus:outline-none"
                type="button"
                onClick={() => toggleSection('tags')}
                aria-expanded={openSections.tags}
                aria-controls="tags-section"
              >
                Tags
                <span>{openSections.tags ? '−' : '+'}</span>
              </button>
              <div id="tags-section" className={openSections.tags ? 'block mt-2' : 'hidden'}>
                <div className="flex flex-col gap-3 pl-2 mt-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTag === "All"}
                      onChange={() => { setSelectedTag("All"); filterProducts("All", selectedPrice, sortOrder, searchQuery); }}
                      className="accent-[#e65540]"
                    />
                    All
                  </label>
                  {tag.map((e, index) => (
                    <label key={index} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTag === e}
                        onChange={() => { setSelectedTag(e); filterProducts(e, selectedPrice, sortOrder, searchQuery); }}
                        className="accent-[#e65540]"
                      />
                      {e}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {/* Collapsible Price Filter */}
            <div className="border-b pb-2 mb-2">
              <button
                className="flex items-center justify-between w-full font-semibold text-gray-700 text-lg focus:outline-none"
                type="button"
                onClick={() => toggleSection('price')}
                aria-expanded={openSections.price}
                aria-controls="price-section"
              >
                Price
                <span>{openSections.price ? '−' : '+'}</span>
              </button>
              <div id="price-section" className={openSections.price ? 'block mt-2' : 'hidden'}>
                <div className="flex flex-col gap-3 pl-2 mt-2">
                  {Prices.map((e, index) => (
                    index < Prices.length - 1 && (
                      <label key={index} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedPrice === e}
                          onChange={() => { setSelectedPrice(e); filterProducts(selectedTag, e, sortOrder, searchQuery); }}
                          className="accent-[#e65540]"
                        />
                        {e} $ - {Prices[index + 1]} $
                      </label>
                    )
                  ))}
                </div>
              </div>
            </div>
            {/* Collapsible Sort Filter */}
            <div>
              <button
                className="flex items-center justify-between w-full font-semibold text-gray-700 text-lg focus:outline-none"
                type="button"
                onClick={() => toggleSection('sort')}
                aria-expanded={openSections.sort}
                aria-controls="sort-section"
              >
                Sort
                <span>{openSections.sort ? '−' : '+'}</span>
              </button>
              <div id="sort-section" className={openSections.sort ? 'block mt-2' : 'hidden'}>
                <div className="flex flex-col gap-3 pl-2 mt-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="sortOrder"
                      checked={sortOrder === "asc"}
                      onChange={() => { setSortOrder("asc"); filterProducts(selectedTag, selectedPrice, "asc", searchQuery); }}
                      className="accent-[#e65540]"
                    />
                    A - Z
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="sortOrder"
                      checked={sortOrder === "desc"}
                      onChange={() => { setSortOrder("desc"); filterProducts(selectedTag, selectedPrice, "desc", searchQuery); }}
                      className="accent-[#e65540]"
                    />
                    Z - A
                  </label>
                </div>
              </div>
            </div>
          </aside>
          {/* Products Grid */}
          <div className="flex-1">
            {/* Search bar above products */}
            <form className="flex flex-col sm:flex-row items-center gap-2 mb-6 w-full" onSubmit={e => { e.preventDefault(); filterProducts(selectedTag, selectedPrice, sortOrder, searchQuery); }} role="search" aria-label="Search products">
              <input
                id="search-filter"
                type="search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="flex-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e65540] focus:border-[#e65540] text-base py-2 px-3 bg-white w-full sm:w-auto"
                placeholder="Search products..."
                aria-label="Search products"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#e65540] text-white rounded-lg font-semibold hover:bg-[#d1442b] focus:outline-none focus:ring-2 focus:ring-[#e65540] w-full sm:w-auto"
                aria-label="Search"
              >
                Search
              </button>
            </form>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8 mx-auto w-full">
              {filteredProducts.map((e, index) => (
                <div key={index} className="rounded-lg flex flex-col gap-y-2">
                  <div
                    className={`rounded-lg relative group overflow-hidden lg:before:absolute lg:before:content-[''] lg:before:w-full lg:before:h-full hover:lg:before:bg-gray-800/30 lg:before:transition-all lg:before:duration-700 `}
                  >
                    <img className="rounded-lg" src={e.image} alt={e.name} />
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
                    className={`w-full text-center bg-black rounded-full py-2 text-white lg:hidden `}
                  >
                    Show Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
