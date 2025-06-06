import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="mt-10  bg-[#f0f0f0] lg:static md:absolute bottom-0 lg:pb-25 lg:pt-15 md:pb-25 md:pt-15 py-10 lg:ps-15 w-full h-fit gap-y-10 flex lg:flex-row md:flex-row flex-col justify-between lg:pe-10 md:pe-1 ps-5">
        <div className="lg:ps-0 md:ps-0 ps-5 lg:w-1/4 md:w-1/4 w-full pe-9 flex flex-col gap-y-8">
          <h1 className="font-bold text-xl">GET IN TOUCH</h1>
          <p className="text-[0.8rem] text-gray-500">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="lg:ps-0 md:ps-0 ps-5 flex gap-x-5">
            <Link to="#">
              <FaFacebook className="text-2xl lg:hover:text-[#e86b40] transition-all duration-400" />
            </Link>
            <Link to="#">
              <FaTwitter className="text-2xl lg:hover:text-[#e86b40] transition-all duration-400" />
            </Link>
            <Link to="#">
              <FaPinterest className="text-2xl lg:hover:text-[#e86b40] transition-all duration-400" />
            </Link>
            <Link to="#">
              <FaGoogle className="text-2xl lg:hover:text-[#e86b40] transition-all duration-400" />
            </Link>
            <Link to="#">
              <FaInstagram className="text-2xl lg:hover:text-[#e86b40] transition-all duration-400" />
            </Link>
          </div>
        </div>
        <div className="lg:ps-0 md:ps-0 ps-5 pe-9 flex flex-col gap-y-4">
          <h1 className="text-xl font-bold">CATEGORIES</h1>
          <ul className="flex flex-col ps-4 gap-y-2 list-none">
            <li className="text-[1rem] text-gray-600 lg:hover:text-[#e86b40] transition-all duration-400 cursor-pointer">Men</li>
            <li className="text-[1rem] text-gray-600 lg:hover:text-[#e86b40] transition-all duration-400 cursor-pointer">Women</li>
            <li className="text-[1rem] text-gray-600 lg:hover:text-[#e86b40] transition-all duration-400 cursor-pointer">Dresses</li>
            <li className="text-[1rem] text-gray-600 lg:hover:text-[#e86b40] transition-all duration-400 cursor-pointer">Sunglasses</li>
          </ul>
        </div>
        <div className="lg:ps-0 md:ps-0 ps-5 pe-9 flex flex-col gap-y-4">
          <h1 className="text-xl font-bold">LINKS</h1>
          <ul className="flex flex-col ps-4 gap-y-2 list-none">
            <li className="text-[1rem] text-gray-600 lg:hover:text-[#e86b40] transition-all duration-400 cursor-pointer">Search</li>
            <li className="text-[1rem] text-gray-600 lg:hover:text-[#e86b40] transition-all duration-400 cursor-pointer">About Us</li>
            <li className="text-[1rem] text-gray-600 lg:hover:text-[#e86b40] transition-all duration-400 cursor-pointer">Contact Us</li>
            <li className="text-[1rem] text-gray-600 lg:hover:text-[#e86b40] transition-all duration-400 cursor-pointer">Returns</li>
          </ul>
        </div>
        <div className="lg:ps-0 md:ps-0 ps-5 pe-9 flex flex-col gap-y-4">
          <h1 className="text-xl font-bold">HELP</h1>
          <ul className="flex flex-col ps-4 gap-y-2 list-none">
            <li className="text-[1rem] text-gray-600 lg:hover:text-[#e86b40] transition-all duration-400 cursor-pointer">Track Order</li>
            <li className="text-[1rem] text-gray-600 lg:hover:text-[#e86b40] transition-all duration-400 cursor-pointer">Returns</li>
            <li className="text-[1rem] text-gray-600 lg:hover:text-[#e86b40] transition-all duration-400 cursor-pointer">Shipping</li>
            <li className="text-[1rem] text-gray-600 lg:hover:text-[#e86b40] transition-all duration-400 cursor-pointer">FAQs</li>
          </ul>
        </div>
        <div  className="lg:w-1/4 lg:ps-0 md:ps-0 ps-5 md:w-1/4 w-full pe-9 flex flex-col gap-y-4">
          <h1 className="text-xl font-bold">NEWSLETTER</h1>
          <input type="email" placeholder="Emai Adress" className="focus:border-[#e86b40] focus:outline-0 border-b-1 placeholder:text-gray-400 placeholder:text-[1.2rem] border-gray-400" />
          <button className="w-full px-5 py-4 bg-black rounded-full text-white text-lg cursor-pointer lg:hover:bg-[#e86b40] lg:hover:text-white transition-all duration-400">SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
