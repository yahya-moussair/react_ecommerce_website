import React from "react";
import { useAppContext } from "../context";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cartArray, setCartArray, setCartCounter, cartCounter } =
    useAppContext();

  const removeItem = (element) => {
    const updatedCart = cartArray.filter((_, index) => index !== element);
    setCartArray(updatedCart);
    setCartCounter(cartCounter - 1);
  };

  return (
    <>
      <div className="lg:pt-50 pt-25 px-4 md:px-10 mx-auto flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-4 lg:w-[80%] w-full p-4 mx-auto rounded-lg ">
          {cartArray.length != 0 ? (
            cartArray.map((e, index) => (
              <div
                className="flex w-full justify-between items-end  bg-gray-300 p-4 rounded-lg"
                key={index}
              >
                <div className="flex gap-x-5 ">
                  <img
                    className="w-[8rem] rounded-lg"
                    src={e.produit.image}
                    alt=""
                  />
                  <div className="pt-2 flex flex-col gap-y-5">
                    <h1 className="text-xl">{e.produit.name}</h1>
                    <h1 className="text-lg">
                      <span className="font-bold">Category : </span>
                      {e.produit.tag}
                    </h1>
                    <h1 className="text-lg">
                      <span className="font-bold">Quantity : </span>
                      {e.quantity}
                    </h1>
                    <MdDelete
                      className="text-2xl text-red-800"
                      onClick={() => removeItem(index)}
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    {"discount" in e.produit
                      ? (
                          (e.produit.price -
                            (e.produit.price * e.produit.discount) / 100) *
                          e.quantity
                        ).toFixed(2)
                      : (e.produit.price * e.quantity).toFixed(2)}{" "}
                    $$
                  </h1>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center lg:text-5xl md:text-3xl text-xl font-bold text-gray-500">
              You Dont have any Product in your Cart
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
