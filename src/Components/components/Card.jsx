import React , {useRef , useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
import { CgWebsite } from 'react-icons/cg'
import {MdOutlineSettingsApplications} from 'react-icons/md'
import {CgIfDesign} from 'react-icons/cg'
import {BsCode} from 'react-icons/bs'
import {SiMediafire} from 'react-icons/si'
import {BiBookContent} from 'react-icons/bi'

export default function Card() {
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
    <>
    <div className=" sm:py-20 bg-[#FCFAF2] py-12" id='Card'>

    
    <div className="flex justify-center " ref={heading}>
    <h1 className="text-[#1e1b4b] text-4xl md:text-7xl  w-fit font-bold  sm:mb-16 ">
        Our Domains
      </h1>
    </div>

      <div className="flex justify-center items-center w-full">
       
        <div className="w-auto gap-x-14 sm:gap-x-20 gap-y-12 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      
          <div className="w-full flex flex-col items-center justify-center gap-y-3 cursor-pointer" ref={content1}>
          <div className="group">
          <CgWebsite className='h-32 w-32 sm:h-40 sm:w-40 text-[#1e1b4b] p-4 transform group-hover:scale-150 transition-transform duration-1000 ease-in-out'/>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold  transform group-hover:scale-150 transition-transform duration-1000 ease-in-out">Developers</h1>
          </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-y-3 cursor-pointer" ref={content2}>
          <div className="group">
          <SiMediafire className='h-32 w-32 sm:h-40 sm:w-40 text-[#1e1b4b] p-4 transform group-hover:scale-150 transition-transform duration-1000 ease-in-out'/>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold transform group-hover:scale-150 transition-transform duration-1000 ease-in-out">Creators</h1>
          </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-y-3 cursor-pointer" ref={content3}>
          <div className="group">
          <BsCode className='h-32 w-32 sm:h-40 sm:w-40 text-[#1e1b4b] group-hover:scale-150 transition-transform duration-1000 ease-in-out'/>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold group-hover:scale-150 transition-transform duration-1000 ease-in-out">Coders</h1>
          </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-y-3 cursor-pointer" ref={content4}>
          <div className="group">
          <BiBookContent className='h-32 w-32 sm:h-40 sm:w-40 text-[#1e1b4b] p-3 group-hover:scale-150 transition-transform duration-1000 ease-in-out'/>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold group-hover:scale-150 transition-transform duration-1000 ease-in-out">Marketers</h1>
          </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-y-3 cursor-pointer" ref={content5}>
          <div className="group">
          <CgIfDesign className='h-32 w-32 sm:h-40 sm:w-40 text-[#1e1b4b] group-hover:scale-150 transition-transform duration-1000 ease-in-out'/>
          <h1 className="w-full text-center text-xl sm:text-3xl font-bold group-hover:scale-150 transition-transform duration-1000 ease-in-out">Designers</h1>
          </div>
          </div>

          {/* <div className=" p-6 text-black mb-4 ">
            <div className=" flex justify-center">
              <CgWebsite className='lg:h-32 lg:w-32 md:w-[6.3rem] md:h-28 h-28 w-28 text-[#1e1b4b]'/></div>
            <div className="mt-6 justify-center ">
              <h1 className="mt-2 text-2xl md:text-xl font-bold ml-4 md:ml-3 text-[#1e1b4b]">Developers</h1>
            </div>
          
          </div>

          <div className=" p-6 text-black mb-4 ">
            <div className=" flex justify-center"><SiMediafire className=' lg:h-32 lg:w-32 md:w-[6.3rem] md:h-28 h-28 w-28 text-[#1e1b4b]'/></div>
            <div className="mt-6 justify-center">
            <h1 className="mt-2 text-2xl md:text-xl font-bold ml-4 md:ml-7  text-[#1e1b4b]">Creators</h1>
            </div>
            
          </div>

          <div className=" p-6 text-black mb-4 ">
            <div className=" flex justify-center"><BsCode className=' lg:h-32 lg:w-32 md:w-[6.3rem] md:h-28 h-28 w-28 text-[#1e1b4b]'/></div>
            <div className="mt-6 justify-center">
            <h1 className="mt-2 text-2xl md:text-xl font-bold ml-4 md:ml-7  text-[#1e1b4b]">Coders</h1>
            </div>
            
          </div>

          <div className=" p-6 text-black mb-4 ">
            <div className=" flex justify-center"><BiBookContent className=' lg:h-32 lg:w-32 md:w-[6.3rem] md:h-28 h-28 w-28 text-[#1e1b4b]'/></div>
            <div className="mt-6 justify-center">
            <h1 className="mt-2 text-2xl md:text-xl font-bold md:ml-4  text-[#1e1b4b]">Marketers</h1>
            </div>
            
          </div>

          
          <div className=" p-6 text-black mb-4 ">
            <div className=" flex justify-center"><CgIfDesign className=' lg:h-32 lg:w-32 md:w-[6.3rem] md:h-28 h-28 w-28 text-[#1e1b4b]'/> </div>
            <div className="mt-6 justify-center">
            <h1 className="mt-2 text-2xl md:text-xl font-bold md:ml-5  text-[#1e1b4b]">Designers</h1>
            </div>
           
          </div> */}

        </div>
      </div>

    </div>
    </>
  );
}
