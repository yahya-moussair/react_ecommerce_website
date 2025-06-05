import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context";
import { FaMinus, FaPlus } from "react-icons/fa";

const DetailsProduct = () => {
  const { products, cartCounter, setCartCounter } = useAppContext();
  const { id } = useParams();
  const [counter, setCounter] = useState(1);
  console.log(products[id]);
  

  return (
    <>
      <div className="lg:pt-50 pt-25 flex lg:flex-row md:flex-row flex-col gap-x-10 gap-y-5 lg:px-25 px-5 w-full justify-center">
        <div className="lg:w-1/4 w-full">
          <img src={products[id].image} className="w-full rounded-lg" alt="" />
        </div>
        <div className="flex flex-col gap-y-6 lg:pt-10  lg:w-1/2 w-full">
          <h1 className="text-xl font-extrabold  ">{products[id].name}</h1>
          <h1 className="text-lg">
            <span className="font-bold">Category : </span>
            {products[id].tag}
          </h1>
          <h1 className="">{products[id].description}</h1>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center border-2 w-fit h-fit p-2 rounded-lg">
              <FaMinus
                className=" "
                onClick={() =>
                  counter == 1 ? setCounter(1) : setCounter(counter - 1)
                }
              />
              <input
                type="number"
                value={counter}
                disabled
                className="focus:outline-none px mx-2 w-7 text-center appearance-none"
              />
              <FaPlus className="" onClick={() => setCounter(counter + 1)} />
            </div>
            <div className="flex items-end gap-x-5">
              <h1
                className={`text-gray-500 ${
                  "discount" in products[id]
                    ? "lg:text-[0.9rem] line-through"
                    : "lg:text-[1.2rem] text-lg"
                }`}
              >
                {"discount" in products[id] ? products[id].price : products[id].price * counter.toFixed(2)} $
              </h1>
              <h1
                className={`lg:text-[1.2rem] text-lg text-orange-600 ${
                  "discount" in products[id] ? "flex" : "hidden"
                }`}
              >
                {((
                  products[id].price -
                  (products[id].price * products[id].discount) / 100
                )*counter).toFixed(2)}{" "}
                $
              </h1>
            </div>
          </div>
          <button
            onClick={() => setCartCounter(cartCounter + 1)}
            className={`w-full bg-black rounded-full py-2 text-white cursor-pointer`}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailsProduct;
