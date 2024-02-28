import React , {useRef , useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
import Session1 from "../images/session1.jpg";
import Session2 from "../images/session2.jpg";
import "../css/Workshop.css";

export default function Workshop() {
  const heading = React.createRef(); 
  const text = React.createRef();
  const content1 = React.createRef(); 
  const content2 = React.createRef(); 

  useEffect(() => {

    const el = heading.current;
    gsap.fromTo(el , {delay:2, autoAlpha: 0} , {duration:3 , autoAlpha:1, ease:'none' , scrollTrigger:{
     trigger: el,
    }})
 
    const el1 = text.current;
    gsap.fromTo(el1 , {delay:1, translateX:"-142px", opacity:0} , {delay:1, translateX:"0.75px" , opacity:1 , duration: 2 ,scrollTrigger:{
     trigger: el1,
    }})
    const el2 = content1.current;
    gsap.fromTo(el2 , {delay:2, opacity:0, translateX:"-10px"} , {delay:2, opacity:1,translateX:"1px", duration: 2, scrollTrigger:{
     trigger: el2,
    }})
    const el3 = content2.current;
    gsap.fromTo(el3 , {delay:2, opacity:0, translateX:"10px"} , {delay:2, opacity:1,translateX:"1px", duration: 2, scrollTrigger:{
     trigger: el3
    }})
 }, [ ] )

  return (
    <>
      <div id="Workshop" className="flex flex-col md:flex-row justify-evenly items-center mx-auto w-11/12 bg-[#1e1b4b] rounded-2xl p-4">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold pl-8 mt-0 sm:mt-5 text-white" ref={heading}>
            Workshops
          </h1>
          <p className="p-8 text-white font-medium max-w-xl" ref={text}>
            100+ community-contributed,self-guided coding tutorials and
            ideas.Learn to code by building,one project at a time. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>

          <div className="flex flex-col justify-start items-start" ref={content1}>
            <button className="bg-white ml-8 text-cyan-600 font-bold py-3 px-5 rounded-full hover:bg-sky-700 hover:scale-105 hover:text-white transition-transform duration-300 ease-in-out">
              <a href="/">Browse Workshops</a>
            </button>

            <button className="backdrop-blur-sm bg-white/30 ml-8 mt-2 mb-20 text-white font-bold py-3 px-7 rounded-full hover:bg-sky-700 hover:scale-105 transition-transform duration-300 ease-in-out">
              <a href="/">Build Workshops</a>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center " ref={content2}>
          <div className="session flex flex-col bg-white text-slate-800 rounded-xl pt-2  mr-0 sm:mr-4 w-72 h-80">
            <h2 className="text-xl font-semibold text-black pl-4 ">
              Panel Discussion
            </h2>
            {/* <p className="pl-4 leading-6">
            Ignyte session under Anjali Chouhan(GATE-AIR 13) and Umang Sandhwani(GATE-AIR 200). 
            </p> */}
            <img
              src={Session2}
              alt=""
              className="session_img h-72 pt-4 rounded-xl"
            />
          </div>

          <div className="session flex flex-col bg-white  text-slate-800 rounded-xl pt-2 mt-4 sm:mt-0 w-72 h-80">
            <h2 className="text-xl font-semibold text-black pl-4 ">
              Placement Guidance
            </h2>
            {/* <p className="pl-4 leading-6">
            Ignyte session under Mr. Gaurav Tiwari, founder of Sai Campus Recruitment Training. 
            </p> */}
            <img
              src={Session1}
              alt=""
              className="session_img h-72 pt-4 rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
