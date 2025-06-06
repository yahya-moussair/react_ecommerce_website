import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useAppContext } from "../../context";
import { Link } from "react-router-dom";

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
        className="relative before:absolute before:content-[''] before:w-full before:h-full before:bg-black/50 before:z-10  w-full h-full bg-center bg-cover flex flex-col items-center justify-center gap-y-5 transition-all duration-700"
      >
        <h1 className="z-20 text-white lg:text-[6rem] md:text-6xl text-4xl font-extrabold transition-all duration-700">{slides[currentIndex].title}</h1>
        <span className="z-20 w-[60%] bg-white h-[4px] rounded-full transition-all duration-700"></span>
        <p className="z-20 text-white lg:text-xl text-lg transition-all duration-700">{slides[currentIndex].paragraph}</p>
        <Link to="/shop"  className="z-20 transition-all duration-700 bg-white lg:px-8 px-4 lg:py-3 py-2 lg:hover:bg-[#e86b40] lg:hover:text-white transition-all duration-300 cursor-pointer rounded-full text-xl">Shop Now</Link>

      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] z-20 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} className="z-20" />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] z-20 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} className="z-20" />
      </div>
    </div>
  );
}

export default Hero;
