import React , {useRef , useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
import bg1 from "../images/bg1.png";
import bg2 from "../images/bg2.png";
import bg5 from "../images/bg5.png";
import { MdStart } from "react-icons/md"; // Icon Added


export default function Hero() {
  const heading = React.createRef(); 
  const content1 = React.createRef(); 
  const content2 = React.createRef(); 
  const content3 = React.createRef(); 
  const content4 = React.createRef(); 
  const content5 = React.createRef(); 
  const content6 = React.createRef(); 

  useEffect(() => {

      const el = heading.current;
      gsap.fromTo(el , {delay:2, autoAlpha: 0} , {duration:3 , autoAlpha:1, ease:'none' , scrollTrigger:{
        trigger: el,
      }})
      const el2 = content1.current;
      gsap.fromTo(el2 , {delay:2, opacity:0, translateX:"-10px"} , {delay:1, opacity:1,translateX:"1px", duration: 2, scrollTrigger:{
        trigger: el2,
      }})
      const el3 = content2.current;
      gsap.fromTo(el3 , {delay:2, opacity:0, translateX:"-10px"} , {delay:1, opacity:1,translateX:"1px", duration: 2, scrollTrigger:{
        trigger: el3
      }})
      const el4 = content3.current;
      gsap.fromTo(el4 , {delay:2, opacity:0, translateX:"-10px"} , {delay:1, opacity:1,translateX:"1px", duration: 2, scrollTrigger:{
        trigger: el4,
      }})
      const el5 = content4.current;
      gsap.fromTo(el5 , {delay:2, opacity:0, translateY:"10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el5,
      }})
      const el6 = content5.current;
      gsap.fromTo(el6 , {delay:2, opacity:0, translateY:"10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el6,
      }})
      const el7 = content6.current;
      gsap.fromTo(el7 , {delay:2, opacity:0, translateY:"10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el7,
      }})
    }, [ ] )

  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center  md:mt-0 bg-[#fff7ed] "
      id="Home"
    >
      <div className="w-full lg:w-1/2  pl-10 pr-10 order-2 lg:order-1  flex flex-col text-[#1e1b4b]  ">
        <h1 className="text-5xl font-bold lg:text-9xl md:text-7xl lg:mb-10 text-center sm:text-left " ref={heading}>
          {" "}
          ignyte{" "}
        </h1>
        <p className="text-xm text-black my-5" ref={content1}>
          Contribute to our website and make your first pull request ⏭
        </p>
        <p className="text-xm  sm:leading-7  text-black " ref={content2}>
          {" "}
          We're a tight-knit community of{" "}
          <span className="sm:bg-[#f97316] sm:text-white  sm:p-1 sm:rounded-lg sm:mx-2 ">
            developers
          </span>
          , coders, and designers who are here to learn and teach with the power
          of{" "}
          <span className="sm:bg-[#10b981] sm:text-white sm:p-1 sm:rounded-lg sm:mx-2">
            open-source
          </span>
          , with a mission to spread the fire of knowledge and empower each
          other without any bounds!
        </p>

        <a
          href="https://discord.gg/43gn4PsUhx"
          className="bg-[#dc2626] inline-flex justify-center items-center gap-x-2 text-white w-[140px] ease-in duration-[0.3s] hover:bg-[#10b981] font-medium my-6 mx-auto md:mx-4 py-3 text-center rounded-lg" ref={content3}
        >
          Get started <MdStart />

        </a>
      </div>
      <div className="w-full lg:w-1/2 order-1 lg:order-2 grid grid-cols-2 sm:none md:grid-row-3 lg:grid-row-3 pt-8  ">
        <div className="bg-[#fff7ed] h-54 w-full " ref={content4}>
          <img className=" h-full w-full " src={bg1}></img>
        </div>
        <div className="bg-[#fff7ed] h-54 w-full " ref={content5}>
          <img className=" h-full w-full  " src={bg5}></img>
        </div>

        <div className="bg-[#fff7ed] h-54 w-full hidden lg:block"></div>

        <div className=" bg-[#fff7ed] h-54 w-full hidden lg:block ">
          <img className="  h-full w-full" src={bg2} ref={content6}></img>{" "}
        </div>
      </div>
    </div>
  );
}
