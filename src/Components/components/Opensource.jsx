import React , {useRef , useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
import snippet from '../images/snippet.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";


export default function Opensource() {
   
        const handleTextClick = (url) => {
          window.location.href = url;
        };
    const heading = React.createRef(); 
    const text = React.createRef();
    const content1 = React.createRef(); 
    const content2 = React.createRef(); 
    const content3 = React.createRef(); 
    const content4 = React.createRef(); 
    const content5 = React.createRef(); 

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
        const el4 = content3.current;
        gsap.fromTo(el4 , {delay:2, opacity:0, translateX:"-10px"} , {delay:2, opacity:1,translateX:"1px", duration: 2, scrollTrigger:{
         trigger: el4,
        }})
        const el5 = content4.current;
        gsap.fromTo(el5 , {delay:2, opacity:0, translateX:"10px"} , {delay:2, opacity:1,translateX:"1px", duration: 2, scrollTrigger:{
         trigger: el5,
        }})
        const el6 = content5.current;
        gsap.fromTo(el6 , {delay:2, opacity:0, translateX:"-10px"} , {delay:2, opacity:1,translateX:"1px", duration: 2, scrollTrigger:{
         trigger: el6,
        }})
     }, [ ] )

  return (
    <>
    <div className="mx-auto mt-20 mb-24 mr-0 flex flex-col md:flex-row "id='Open-source'>

          {/* Content */}
          <div className=" md:w-4/6 px-4 py-8 order-2 md:order-2  mt-8 sm:ml-0  md:ml-16 mx-6 ">


              <h1 className="text-5xl font-bold lg:text-7xl md:text-5xl sm:text-4xl mb-10 text-[#1e1b4b]  " ref={heading}>Dive deep into  the world of  open-source  </h1>

              <p className="text-lg mb-4 " ref={text}> 
              We also function on the open source platform, and as part of our society, we have a separate open source block to spread the word about this. Get ready to join forces with other like-minded individuals in a fun, supportive environment! Let's set the tech world ablaze together!
              </p>
              <button className="bg-[#dc2626] inline-flex justify-center items-center text-white w-[200px] ease-in duration-[0.3s] hover:bg-[#10b981] font-medium my-6 mx-auto md:mx-4 py-3 text-center rounded-lg">
          Explore more <span><FaLongArrowAltRight className='lg:mt-1 ml-2 mt-1' /></span> 

        </button>
          </div>

      
          <div className="w-full md:w-2/6 order-1 md:order-1 ">


              <div className="flex flex-row flex-wrap justify-center">

                  <div className="flex flex-col rounded-lg bg-[#1e1b4b] m-4 rotate-6" ref={content1}>
                      <div className="w-80 h-14 rounded-lg bg-[#1e1b4b] cursor-pointer"onClick={() => handleTextClick('https://summerofcode.withgoogle.com/')}> <p className="text-center text-white my-2">Google Summer of Code</p> </div>
                     
                  </div>
                  <div className="flex flex-col rounded-lg  bg-[#dc2626] m-4 -rotate-6" ref={content2}>
                      <div className="w-80 h-14 rounded-lg  bg-[#dc2626] cursor-pointer"onClick={() => handleTextClick('https://ssoc.devfolio.co/')}> <p className="text-center text-white my-2">Social Summer of Code</p> </div>
                     
                  </div>
                  <div className="flex flex-col rounded-lg   bg-[#f97316] m-4 rotate-6" ref={content3}>
                      <div className="w-80 h-14 rounded-lg  bg-[#f97316] cursor-pointer"onClick={() => handleTextClick('https://gssoc.girlscript.tech/')}><p className="text-center text-white my-2">GirlScript Summer Of Code</p> </div>
                  
                  </div>
                  <div className="flex flex-col rounded-lg     bg-[#10b981] m-4 -rotate-6" ref={content4}>
                      <div className="w-80 h-14 rounded-lg      bg-[#10b981] cursor-pointer" onClick={() => handleTextClick('https://www.jwoc.tech/')}><p className="text-center text-white my-2">JGEC Winter of Code</p> </div>
                      
                  </div>
                
                  <div className="flex flex-col rounded-lg  bg-[#fcd34d] m-4 rotate-6" ref={content5}>
                      <div className="w-80 h-14 rounded-lg  bg-[#fcd34d] cursor-pointer" onClick={() => handleTextClick('https://hacktoberfest.com/')}><p className="text-center text-white my-2">Hacktoberfest</p> </div>
                  
                  </div>

              </div>
          </div>




      </div></>
  )
}


