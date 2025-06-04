import React from "react";
import { useAppContext } from "../../context";

const Cards = () => {
  const { cards } = useAppContext();

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-x-5 gap-y-4 mx-auto w-full justify-items-center lg:px-20 md:px-10 px-5 pt-10">
        {cards?.map((e, index) => (
          <div
            key={index}
            className={`h-[25rem] w-full bg-cover bg-center relative cursor-pointer overflow-hidden`}
          >
            <img src={e.cardImage} className="w-full h-full object-cover lg:hover:scale-115 transition-all duration-300" alt="" />
            <button className="absolute bottom-5 transition-all duration-300 bg-[#fffffff2] left-[50%] translate-x-[-50%] lg:hover:bg-[#e65540] cursor-pointer w-[50%] py-4 text-xl">
              {e.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
