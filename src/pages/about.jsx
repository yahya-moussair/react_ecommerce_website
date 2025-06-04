import React from "react";
import { Images } from "../constant";

const About = () => {
  return (
    <>
      <div className="lg:pt-32 pt-25 w-full bg-white">
        <div
          className="bgAbout w-full h-64 flex items-center justify-center text-white text-4xl font-bold"
          
        >
          <h1 className="text-6xl text-white">About</h1>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-12 px-4">
          <div className="flex-shrink-0">
            <img
              src={Images.itemAbout}
              alt="Model"
              className="w-full max-w-xs rounded-md object-cover"
            />
          </div>

          <div className="flex flex-col justify-center text-gray-700">
            <h2 className="text-xl font-semibold mb-4">Our story</h2>
            <p className="mb-4 text-sm leading-relaxed">
              Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
              Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
              dolor quis lorem accumsan, vitae molestie urna dapibus.
              Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis
              magna ut interdum laoreet. Donec gravida lorem elit, quis
              condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam
              aliquam imperdiet sodales. Ut fringilla turpis in vehicula
              vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat
              volutpat.
            </p>
            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-sm text-gray-600">
              “Creativity is just connecting things. When you ask creative
              people how they did something, they feel a little guilty because
              they didn’t really do it, they just saw something.”
              <br />
              <span className="block mt-2 text-right">- Steve Jobs</span>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
