import React , {useRef , useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
import pic from "../images/pic.jpg";
import design from "../images/design.png";
import design3 from "../images/Feature3.png";
import design2 from "../images/Feature2.png";
import design1 from "../images/Feature1.png";
import os from "../images/os.png";
import { FaLongArrowAltRight } from "react-icons/fa";


export default function About() {
  const heading = React.createRef(); 
  const text = React.createRef();
  const content1 = React.createRef(); 
  const content2 = React.createRef(); 
  const content3 = React.createRef(); 
  const content4 = React.createRef(); 
  const content5 = React.createRef(); 
  const content6 = React.createRef(); 
  const btn = React.createRef(); 

  useEffect(() => {

      const el = heading.current;
      gsap.fromTo(el , {delay:2, autoAlpha: 0} , {duration:3 , autoAlpha:1, ease:'none' , scrollTrigger:{
        trigger: el,
      }})
    
      const el1 = text.current;
      gsap.fromTo(el1 , {delay:1, translateY:"-142px", opacity:0} , {delay:1, translateY:"0.75px" , opacity:1 , duration: 2 ,scrollTrigger:{
        trigger: el1,
      }})
      const el2 = content1.current;
      gsap.fromTo(el2 , {delay:2, opacity:0, translateY:"-10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el2,
      }})
      const el3 = content2.current;
      gsap.fromTo(el3 , {delay:2, opacity:0, translateY:"-10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el3
      }})
      const el4 = content3.current;
      gsap.fromTo(el4 , {delay:2, opacity:0, translateY:"-10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
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
      const el8 = btn.current;
      gsap.fromTo(el8 , {delay:2, opacity:0, translateY:"10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el8,
      }})
    }, [ ] )

  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center  md:mt-0 bg-[#1e1b4b] "
      id="About"
    >
      <div className="w-full lg:w-1/2  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        <div className="bg-teal-300 h-54 w-full" ref={content1}>
          <img className=" h-full w-full  " src={design1}></img>
        </div>
        <div className="bg-teal-200 h-54 w-full" ref={content2}>
          <img className="  h-full w-full" src={design3}></img>
        </div>
        <div className="bg-[#10b981] h-54 w-full" ref={content3}>
          <img className="  h-full w-full" src={design2}></img>
        </div>
        <div className=" h-54 w-full" ref={content4}>
          <img className=" h-full w-full rounded-full " src={pic}></img>
        </div>
        <div className="  h-54 w-full " ref={content5}>
          <div className="bg-[#fcd34d] h-full w-full rounded-full hover:rounded-none"></div>
        </div>

        <div className=" bg-teal-300 h-54 w-full " ref={content6}>
          <img className=" h-full w-full relative " src={design}></img>{" "}
        </div>
      </div>

      <div className="w-full lg:w-1/2  pl-10 pr-10   flex flex-col text-white ">
        <h1 className="text-5xl font-bold lg:text-7xl md:text-6xl  mb-10 mt-10 " ref={heading}>
          {" "}
          About Us{" "}
        </h1>

        <p className="text-xm  leading-relaxed mb-5 text-[#E7E5E5] " ref={text}>
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
        <button className="bg-[#dc2626] inline-flex justify-center items-center text-white w-[200px] ease-in duration-[0.3s] hover:bg-[#10b981] font-medium my-6 mx-auto md:mx-4 py-3 text-center rounded-lg" ref={btn}>
          Learn more <span><FaLongArrowAltRight className='lg:mt-1 ml-2 mt-1' /></span> 

        </button>
      </div>
    </div>
  );
}
