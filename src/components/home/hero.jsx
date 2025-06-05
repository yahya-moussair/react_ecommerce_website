import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useAppContext } from "../../context";

const Hero = () => {
  const { slides } = useAppContext()

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  return (
    <div className="w-full h-[80vh] relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="w-full h-full bg-center bg-cover flex flex-col items-center justify-center gap-y-5"
      >
        <h1 className="text-white lg:text-[8rem] md:text-6xl text-5xl font-extrabold">Leather Bags</h1>
        <span className="w-[70%] bg-white h-[4px] rounded-full"></span>
        <p className="text-white text-xl">New Collection 2018</p>
        <button className="bg-white px-8 py-3 lg:hover:bg-[#e86b40] lg:hover:text-white transition-all duration-300 cursor-pointer rounded-full text-xl">Shop Now</button>

      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default Hero;
