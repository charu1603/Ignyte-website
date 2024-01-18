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
      className="flex flex-col lg:flex-row justify-center items-center  md:mt-0 bg-[#1e1b4b] "
      id="ABOUT"
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
          About Us{" "}
        </h1>

        <p className="text-xm  leading-relaxed mb-5 text-[#E7E5E5] ">
          Here, you'll find a diverse group of enthusiasts sprouting from Team
          Asper who believe that sharing their expertise, exchanging ideas, and
          collaborating is the key to conquering the challenges of what's
          possible with technology. Think of this place as our own little corner
          of the internet to create synergies via community where we can nerd
          out, share info through memes, take sessions, and learn by connecting
          with students across schools and colleges.Whether you're a seasoned
          pro, just starting out, or somewhere in between, you'll fit right in
          with us. So come in, join the conversations, ask questions, share
          projects and feedback, and much more.
        </p>
        <button className="bg-[#dc2626] text-white w-[200px] ease-in duration-[0.3s] hover:bg-[#10b981] font-medium my-6 mx-auto md:mx-4 py-3 text-center rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
}
