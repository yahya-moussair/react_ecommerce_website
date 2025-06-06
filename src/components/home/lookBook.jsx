import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import video from "../../assets/videos/simpleVideoi.mp4";
import { MdCancel } from "react-icons/md";

const LookBook = () => {
  const [open, setOpen] = useState(false);
  const isOpen = () => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  isOpen();
  return (
    <>
      <div
        className={` text-white relative before:content-[""] before:absolute before:w-full before:h-full before:bg-gray-700/20 before:z-5 bgImage w-full mt-20 flex flex-col gap-y-5 items-center justify-center lg:h-[30rem] md:h-[25rem] h-[20rem]`}
      >
        <div className="flex flex-col gap-2 items-center">
          <h1 className="z-10 text-3xl font-bold -tracking-tighter">
            The Beauty
          </h1>
          <h1 className="z-10 text-6xl font-bold -tracking-tighter">LOOKBOO</h1>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex gap-x-4 items-center -tracking-tighter text-white z-20 group relative cursor-pointer"
        >
          <FaPlay /> Play Video
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white hidden lg:group-hover:flex"></span>
        </button>
        <div
          className={`before:content-["] before:fixed before:flex before:items-center before:justify-center fixed top-0 before:w-full before:h-screen before:top-0 before:bg-gray-800/50 before:z-10 h-screen w-screen flex items-center justify-center z-50 ${
            open ? "flex" : "hidden"
          } transition-all duration-500`}
        >
          <MdCancel
            onClick={() => setOpen(false)}
            className="absolute right-[20px] top-[20px] text-green-50 z-50 cursor-pointer text-4xl"
          />
          <video
            src={video}
            className="w-[80%] h-[80%] z-20"
            type="video/mp4"
            controls
          ></video>
        </div>
      </div>
    </>
  );
};

export default LookBook;
