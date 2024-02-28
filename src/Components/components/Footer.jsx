import React , {useRef , useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import AsperLogo from "../images/AsperLogoWhite.png";
import ignyteLogo from "../images/logo.png";

export default function Footer() {
  const content1 = React.createRef(); 

  useEffect(() => {
      const el2 = content1.current;
      gsap.fromTo(el2 , {delay:1, opacity:0, translateY:"10px"} , {delay:1, opacity:1,translateY:"1px", duration: 1, scrollTrigger:{
        trigger: el2,
      }})
    }, [ ] )
  return (
    <>
      <div className=" bg-slate-800 text-white mt-20 relative overflow-y-hidden pt-12 pb-12 md:pb-24 px-4 overflow-x-hidden" ref={content1}>
        <div className="grid grid-cols-1   md:grid-cols-4 md:ml-20 gap-x-20 gap-y-12 md:mr-20">
          <div className="md:mb-20  md:col-span-2 ">
            <div className="flex  text-center md:text-left justify-center md:justify-start">
              <a href="https://theasperteam.in/">
                <img
                  src={AsperLogo}
                  alt=""
                  className="h-28 text-center -mt-8"
                />
              </a>
              {/* <h1 className='text-3xl mt-8'>ASPER</h1> */}
            </div>
            <p className=" text-center md:text-left mx-auto md:mx-0 max-w-lg ">
              Asper is society of creative and dedicated minds to foster a
              positive work environment with the aim of encouraging the
              enthusiasts to gain expertise and exposure in different domains of
              development.
            </p>
          </div>

          <div className="flex flex-col  list-none ">
            <h2 className="text-2xl  font-bold flex justify-center md:justify-start ">
              Social Links
            </h2>
            <li className="leading-10 mt-4 ">
              <ul className="flex justify-center md:justify-start ">
                <div className="flex ">
                  <a
                    href="https://instagram.com/theasperteam?igshid=YmMyMTA2M2Y="
                    target="blank"
                    className=" text-center bg-white text-black p-2 w-fit rounded-full  mr-2 h-8"
                  >
                    <FaInstagram />
                  </a>
                 <a href="https://instagram.com/theasperteam?igshid=YmMyMTA2M2Y=" target="_blank"><span className="mx-2 my-3 hover: underline-offset-1">Instagram</span></a> 
                </div>
              </ul>

              <ul className="flex justify-center md:justify-start ">
                <div className="flex ">
                  <a
                    href="https://www.linkedin.com/company/theasperteam/"
                    target="blank"
                    className="bg-white mt-4 text-center text-black p-2 w-fit rounded-full mr-2"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.linkedin.com/company/theasperteam/" target="blank"><span className="mx-2 my-3 hover: underline-offset-1">Linkedin</span></a>
                </div>
              </ul>

              <ul className="flex justify-center md:justify-start ">
                <div className="flex ">
                  <a
                    href="https://www.linkedin.com/company/theasperteam/"
                    target="blank"
                    className="bg-white mt-4 text-center text-black p-2 w-fit rounded-full mr-2"
                  >
                    <FaDiscord />
                  </a>
                  <a href="https://www.linkedin.com/company/theasperteam/" target="blank"><span className="mx-2 my-3 hover: underline-offset-1">Discord</span></a>
                </div>
              </ul>

              <ul className="flex justify-center md:justify-start ">
                <div className="flex ">
                  <a
                    href="https://github.com/charu1603/Ignyte-website"
                    target="blank"
                    className="bg-white mt-4 text-center text-black p-2 w-fit rounded-full mr-2"
                  >
                    <FaGithub />
                  </a>
                  <a href="https://github.com/charu1603/Ignyte-website" target="blank"><span className="mx-2 my-3 hover: underline-offset-1">GitHub</span></a>
                </div>
              </ul>
            </li>
          </div>

          <div className="flex flex-col  list-none">
            <h2 className="text-2xl font-bold flex justify-center md:justify-start ">
              Quick Links
            </h2>
            <ul className="leading-10 mt-4 ">
              <li className="flex justify-center md:justify-start">
                <a href="#Home">Home</a>
              </li>
              <li className="flex justify-center md:justify-start">
                <a href="#About">About Us</a>
              </li>
              <li className="flex justify-center md:justify-start">
                <a href="#Card">Our Domains</a>
              </li>
              <li className="flex justify-center md:justify-start ">
                <a href="#Feature">Features</a>
              </li>
              <li className="flex justify-center md:justify-start">
                <a href="#Workshop">Workshop</a>
              </li>
              <li className="flex justify-center md:justify-start">
                <a href="#Open-source">Open Source</a>
              </li>
              <li className="flex justify-center md:justify-start">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full absolute -bottom-5 sm:-bottom-7 md:-bottom-9 lg:-bottom-12">
          <h1 className="w-full flex justify-center text-slate-700 mt-4 text-center text-[2.2rem] font-bold sm:text-[3.8rem] md:mt-0 md:text-[4.2rem] lg:text-[6rem] sm:font-extrabold ">
            IGNYTECOMMUNITY
          </h1>
        </div>
      </div>
    </>
  );
}
