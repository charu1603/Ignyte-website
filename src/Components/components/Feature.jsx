import React , {useRef , useEffect} from 'react'
import Feature1 from '../images/Feature1.png'
import Feature2 from '../images/Feature2.png'
import Feature3 from '../images/Feature3.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

export default function Features() {

const heading = React.createRef(); 
const image1 = React.createRef(); 
const image2 = React.createRef(); 
const image3 = React.createRef(); 
const content1 = React.createRef(); 
const content2 = React.createRef(); 
const content3 = React.createRef(); 

useEffect(() => {

   const el = heading.current;
   gsap.fromTo(el , {delay:2, autoAlpha: 0} , {duration:3 , autoAlpha:1, ease:'none' , scrollTrigger:{
    trigger: el,
   }})

   const el1 = image1.current;
   gsap.fromTo(el1 , {delay:2, translateX:"-142px", opacity:0} , {delay:2, translateX:"0.75px" , opacity:1 , duration: 2 ,scrollTrigger:{
    trigger: el1,
   }})
   const el2 = image2.current;
   gsap.fromTo(el2 , {delay:2, translateX:"-142px", opacity:0} , {delay:2, translateX:"0.38px" , opacity:1 , duration: 2 ,scrollTrigger:{
    trigger: el2,
   }})
   const el3 = image3.current;
   gsap.fromTo(el3 , {delay:2, translateX:"-142px", opacity:0} , {delay:2, translateX:"0.55px" , opacity:1 , duration: 2 ,scrollTrigger:{
    trigger: el3,
   }})
   const el4 = content1.current;
   gsap.fromTo(el4 , {delay:3, opacity:0, translateX:"-10px"} , {delay:3, opacity:1,translateX:"1px", duration: 2, scrollTrigger:{
    trigger: el4,
   }})
   const el5 = content2.current;
   gsap.fromTo(el5 , {delay:3, opacity:0, translateX:"-10px"} , {delay:3, opacity:1,translateX:"1px", duration: 2, scrollTrigger:{
    trigger: el5,
   }})
   const el6 = content3.current;
   gsap.fromTo(el6 , {delay:3, opacity:0, translateX:"-10px"} , {delay:3, opacity:1,translateX:"1px", duration: 2, scrollTrigger:{
    trigger: el6,
   }})
}, [ ] )



  return (
    <>
    <div className=' mx-auto mt-20 mb-24' id='Feature'>
        <h1 className='heading text-4xl sm:text-6xl font-bold text-[#020842] ml-16 md:ml-32 mt-8' ref={heading}>Why Ignyte?</h1>

        <div className='grid gap-10 md:gap-12 lg:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto mt-10 md:mt-20 lg:ml-32 lg:mr-32 ml-12 mr-12'>

            <div>
                <div className='flex'>
                    <div className='mb-4 md:mb-20 flex flex-col relative'>
                      <img src={Feature1} alt=""  className='h-36 w-36 z-20'/>  
                    </div>
                    <div><img src="https://images.doclify.net/bayswater-web/d/2e83ffc1-f822-43f9-b91e-480307b166bc.png?enlarge=0&format=webp&w=600" alt="" className='rounded-full hover:rounded-none h-36 w-36 z-0 hover:transition-all hover:duration-800  hover:ease-in-out ' ref={image1}/></div>
                </div>

                
                <div className='leading-loose' >
                    <h3 className='text-4xl font-bold text-[#020842]'>Experience</h3>
                    <h3 className='text-4xl font-bold mt-3 md:mt-0 mb-2 md:mb-4 text-[#020842]' ref={content1}>Meet Our Progress</h3>
                    <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni at laudantium velit ipsum perspiciatis provident similique quasi quaerat quos,Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni at laudantium velit ipsum perspiciatis provident similique quasi quaerat quos,</p>
                </div>
            </div>

            <div>
                <div className='flex'>
                    <div className='mb-4 md:mb-20 flex flex-col relative'>
                      <img src={Feature2} alt=""  className='h-36  w-36 z-20'/>  
                    </div>
                    <div><img src="https://images.doclify.net/bayswater-web/d/01ff1056-ce09-48f9-a9fd-29a6b0a2ac59.png?enlarge=0&format=webp&w=600" alt="" className='rounded-full hover:rounded-none h-36 w-36 z-0 hover:transition-all  hover:duration-800  hover:ease-in-out ' ref={image2}/></div>
                </div>

                
                <div className='leading-loose' >
                    <h3 className='text-4xl font-bold text-[#020842]'>Experience</h3>
                    <h3 className='text-4xl font-bold mb-4 text-[#020842]' ref={content2}>Meet Our Progress</h3>
                    <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni at laudantium velit ipsum perspiciatis provident similique quasi quaerat quos,Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni at laudantium velit ipsum perspiciatis provident similique quasi quaerat quos,</p>
                </div>
            </div>

            <div>
                <div className='flex'>
                    <div className='mb-4 md:mb-20 flex flex-col relative'>
                      <img src={Feature3} alt=""  className='h-36  w-36 z-20'/>  
                    </div>
                    <div><img src="https://images.doclify.net/bayswater-web/d/ed340f85-bb16-495e-adc8-2aed7a938806.png?enlarge=0&format=webp&w=600" alt="" className='rounded-full hover:rounded-none h-36 w-36 z-0 hover:transition-all hover:duration-800  hover:ease-in-out ' ref={image3}/></div>
                </div>

                
                <div className='leading-loose' >
                    <h3 className='text-4xl font-bold text-[#020842]'>Experience</h3>
                    <h3 className='text-4xl font-bold mb-4 text-[#020842]' ref={content3}>Meet Our Progress</h3>
                    <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni at laudantium velit ipsum perspiciatis provident similique quasi quaerat quos,Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni at laudantium velit ipsum perspiciatis provident similique quasi quaerat quos,</p>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}
