import React, { useState } from "react";
import { Images } from "../constant";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FaPersonRifle } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import { useAppContext } from "../context";

const NavBar = () => {
  const { cartCounter } = useAppContext();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`h-screen w-full fixed inset-0 bg-gray-500/40 ${
          open ? "flex" : "hidden"
        } select-none`}
      ></div>
      <div className="w-full h-fit py-5 lg:px-10 px-5 flex flex-col items-center gap-y-7 fixed z-40 border-b-1 bg-white">
        <div className="flex justify-between items-center w-full z-50 ">
          <div className="lg:flex gap-x-3 hidden">
            <Link to="/#">
              <FaFacebook className="text-xl lg:hover:text-[#e86b40] transition-all duration-300 text-gray-500 " />
            </Link>
            <Link to="/#">
              <FaTwitter className="text-xl lg:hover:text-[#e86b40] transition-all duration-300 text-gray-500 " />
            </Link>
            <Link to="/#">
              <FaPinterest className="text-xl lg:hover:text-[#e86b40] transition-all duration-300 text-gray-500 " />
            </Link>
            <Link to="/#">
              <FaGoogle className="text-xl lg:hover:text-[#e86b40] transition-all duration-300 text-gray-500 " />
            </Link>
            <Link to="/#">
              <FaInstagram className="text-xl lg:hover:text-[#e86b40] transition-all duration-300 text-gray-500 " />
            </Link>
          </div>
          <Link to="/">
            <img src={Images.logo} alt="" />
          </Link>
          <div className="flex items-center gap-x-5">
            <h1 className="lg:flex hidden text-gray-500">fashe@example.com</h1>
            <Link to="/cart">
              <span className="relative">
                <CiShoppingCart className="text-3xl font-bold" />
                <span className="bg-red-700 px-[0.3rem] py-[0.1rem] text-[0.7rem] font-bold rounded-lg text-white absolute top-[-20%] right-[-25%]">
                  {cartCounter}
                </span>
              </span>
            </Link>
            <FaBars
              className="text-2xl font-bold lg:hidden"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
        {/* Centered Navbar Links */}
        <nav
          className={`lg:relative fixed flex lg:flex-row flex-col items-center justify-center gap-x-10 gap-y-5 lg:top-0 lg:left-0 ${
            open ? "top-[2%]" : "top-[-200%]"
          } transition-all duration-700 rounded-xl lg:bg-transparent bg-white lg:shadow-none shadow-2xl lg:w-full w-[90%] lg:m-0 mx-auto lg:h-fit h-[95%] text-xl z-50`}
          style={{ justifyContent: 'center' }}
        >
          <MdCancel
            className="text-4xl font-bold lg:hidden absolute top-[5px] right-[5px]"
            onClick={() => setOpen(false)}
          />
          <Link
            to="/"
            className="text-lg focus:text-[#e86b40] group relative"
            onClick={() => setOpen(false)}
          >
            Home
            <span className="w-full group-hover:h-[2px] bg-gray-600 absolute transition-all duration-700 left-0 top-[95%]"></span>
          </Link>
          <Link
            to="/shop"
            className="text-lg focus:text-[#e86b40] group relative"
            onClick={() => setOpen(false)}
          >
            Shop
            <span className="w-full group-hover:h-[2px] bg-gray-600 absolute transition-all duration-700 left-0 top-[95%]"></span>
          </Link>
          <Link
            to="/about"
            className="text-lg focus:text-[#e86b40] group relative"
            onClick={() => setOpen(false)}
          >
            About
            <span className="w-full group-hover:h-[2px] bg-gray-600 absolute transition-all duration-700 left-0 top-[95%]"></span>
          </Link>
          <Link
            to="/contact"
            className="text-lg focus:text-[#e86b40] group relative"
            onClick={() => setOpen(false)}
          >
            Contact
            <span className="w-full group-hover:h-[2px] bg-gray-600 absolute transition-all duration-700 left-0 top-[95%]"></span>
          </Link>
          <h1 className="lg:hidden text-lg">fashe@example.com</h1>
          <div className="lg:hidden flex gap-x-4">
            <Link to="#" onClick={() => setOpen(false)}>
              <FaFacebook className="text-3xl " />
            </Link>
            <Link to="#" onClick={() => setOpen(false)}>
              <FaTwitter className="text-3xl " />
            </Link>
            <Link to="#" onClick={() => setOpen(false)}>
              <FaPinterest className="text-3xl " />
            </Link>
            <Link to="#" onClick={() => setOpen(false)}>
              <FaGoogle className="text-3xl " />
            </Link>
            <Link to="#" onClick={() => setOpen(false)}>
              <FaInstagram className="text-3xl " />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
