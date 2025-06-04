import React, { createContext, useContext, useState } from "react";
import products from "../json/products";
import slides from "../json/slide";
import cards from "../json/card";

const MyContext = createContext();
const MyProvider = ({ children }) => {
  const [cartCounter , setCartCounter] = useState(0)
  
  const data = {
    slides,
    cards,
    products,
    cartCounter,
    setCartCounter
  };
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

const useAppContext = () => useContext(MyContext);
export { MyProvider, useAppContext };
