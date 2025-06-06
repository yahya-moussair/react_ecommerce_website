import React, { createContext, useContext, useState } from "react";
import products from "../json/products";
import slides from "../json/slide";
import cards from "../json/card";

const MyContext = createContext();
const MyProvider = ({ children }) => {
  const [cartCounter, setCartCounter] = useState(0);
  const [cartArray, setCartArray] = useState([]);
  const addToCart = (e , counter) => {
    if (cartArray.includes(e)) {
      return 0;
    }
    setCartCounter(cartCounter + 1);
    const newTab = [...cartArray];
    newTab.push({produit : e , quantity : counter});
    setCartArray(newTab);
  };

  const data = {
    slides,
    cards,
    products,
    cartCounter,
    setCartCounter,
    addToCart,
    setCartArray,
    cartArray,
  };
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

const useAppContext = () => useContext(MyContext);
export { MyProvider, useAppContext };
