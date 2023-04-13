import pic from "../images/pic.jpg";
import React from "react";
import design from "../images/design.png";
import design3 from "../images/Feature3.png";
import design2 from "../images/Feature2.png";
import design1 from "../images/Feature1.png";
import os from "../images/os.png";

export default function About() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center mt-8 md:mt-0 bg-[#1e1b4b] "
      id="About"
    >
      <div className="w-full lg:w-1/2  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        <div className="bg-teal-300 h-54 w-full">
          <img className=" h-full w-full  " src={design1}></img>
        </div>
        <div className="bg-teal-200 h-54 w-full">
          <img className="  h-full w-full" src={design3}></img>
        </div>
        <div className="bg-[#10b981] h-54 w-full">
          <img className="  h-full w-full" src={design2}></img>
        </div>
        <div className=" h-54 w-full">
          <img className=" h-full w-full rounded-full " src={pic}></img>
        </div>
        <div className="  h-54 w-full ">
          <div className="bg-[#fcd34d] h-full w-full rounded-full hover:rounded-none"></div>
        </div>

        <div className=" bg-teal-300 h-54 w-full ">
          <img className=" h-full w-full relative " src={design}></img>{" "}
        </div>
      </div>

      <div className="w-full lg:w-1/2  pl-10 pr-10   flex flex-col text-white ">
        <h1 className="text-5xl font-bold lg:text-7xl md:text-6xl  mb-10 mt-10 ">
          {" "}
          Journey{" "}
        </h1>

        <p className="text-xm  leading-relaxed mb-5 text-[#E7E5E5] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          magna vitae nisi aliquet dictum. Fusce imperdiet quam vel felis
          ultrices, a vestibulum justo fringilla. Donec euismod sapien ac mauris
          facilisis posuere. Sed euismod, metus nec lobortis gravida, odio massa
          bibendum urna, vel suscipit arcu magna ac orci. Sed euismod tempor
          erat, eu ultricies velit rhoncus eget. Duis vehicula vestibulum sapien
          eu consectetur.Fusce imperdiet quam vel felis ultrices, a vestibulum
          justo fringilla.
        </p>
        <button className="bg-[#dc2626] text-[#E7E5E5] w-[200px] rounded-lg font-medium my-6 mx-auto md:mx-0 py-3 ">
          Learn more about ignyte
        </button>
      </div>
    </div>
  );
}
