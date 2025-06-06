import React from "react";
import Hero from "../components/home/hero";
import Cards from "../components/home/cards";
import OurProduct from "../components/home/ourProduct";
import LookBook from "../components/home/lookBook";
import { useAppContext } from "../context";

const Home = () => {
  const {open} = useAppContext()
  console.log(open);
  
  return (
    <>
      <div className={`lg:pt-32 pt-18 ${open && "overflow-hidden"}`}>
        <Hero />
        <Cards />
        <OurProduct />
        <LookBook />
      </div>
    </>
  );
};

export default Home;
