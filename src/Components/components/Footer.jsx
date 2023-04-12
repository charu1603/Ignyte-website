import React from 'react'
import { FaLinkedinIn , FaInstagram , FaYoutube , FaDiscord} from "react-icons/fa";
import {TiLocation} from "react-icons/ti";
import {IoMdCall} from "react-icons/io";
import {AiOutlineMail} from "react-icons/ai";
import AsperLogo from '../images/asperLogo.png';
import ignyteLogo from '../images/logo.png';

export default function Footer() {
  return (
    <>
      <div className=' bg-slate-800 text-white mt-20 '>

<div className='grid grid-cols-1 sm:grid-cols-3 gap-12 ml-20 mr-20'>
    <div className='md:mb-20 '>
        <div className='flex mt-20'>
        <img src={AsperLogo} alt="" className='h-28'/>
        <h1 className='text-3xl mt-8'>ASPER</h1>
        </div>
       <p className='mb-12 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique tenetur exercitationem, obcaecati reiciendis sit dolorem.</p>
    </div>

    <div className='flex flex-col mt-0 sm:mt-[7rem] md:mt-[4.2rem]   list-none  sm:ml-16 md:ml-4'>
        <h2 className='text-2xl  font-bold flex justify-center sm:justify-start  md:justify-center md:mt-12'>Social Links</h2>
        <li className='leading-10 mt-4 '>
            <ul className='flex justify-center sm:justify-start md:justify-center'>
            <div className='flex '>
            <a href='https://instagram.com/theasperteam?igshid=YmMyMTA2M2Y=' target='blank' className=' text-center bg-white text-black p-2 w-fit rounded-full sm:ml-[-7px] md:ml-0 mr-2 h-8'><FaInstagram/></a>
                <span className='mt-[-5px]'>Instagram</span>
                </div>
                </ul>
            <ul className='flex justify-center sm:justify-start md:justify-center'>
                <div className='flex ml-[-10px]'>
                <a href='https://www.linkedin.com/company/theasperteam/' target='blank' className='bg-white mt-4 text-center text-black p-2 w-fit rounded-full mr-2'><FaLinkedinIn/></a>
                <span className='mt-[0.65rem]'>Linkedin</span>
                </div>
                </ul>

            <ul className='flex justify-center sm:justify-start md:justify-center'>
            <div className='flex ml-[-12px]'>
            <a href='https://www.linkedin.com/company/theasperteam/' target='blank' className='bg-white mt-4 text-center text-black p-2 w-fit rounded-full mr-2'><FaDiscord/></a>
            <span className='mt-[0.65rem]'>Discord</span>
            </div>
            </ul>

        </li>
    </div>

    <div className='flex flex-col mt-0 sm:mt-[6.6rem] md:mt-[5rem]  list-none sm:ml-12 md:ml-4'>
        <h2 className='text-2xl font-bold flex justify-center sm:justify-start  md:mt-9'>Quick Links</h2>
        <li className='leading-10 mt-4 '>
            <ul className='flex justify-center sm:justify-start'>
               <a href="">About Us</a>
            </ul>

            <ul className='flex justify-center sm:justify-start '>
           <a href="">Features</a>
                </ul>

            <ul className='flex justify-center sm:justify-start'>
            <a href="">Our Domain</a>
            </ul>
        </li>
     </div>

</div>

<div className='lg:h-[13rem] md:h-[9.3rem] h-[7.5rem] sm:h-40'>
    <h1 className='flex justify-center text-slate-700 mt-4 text-[2.2rem] font-bold sm:text-[3.8rem] md:mt-0 md:text-[4.2rem] lg:text-[7.5rem] sm:font-extrabold'>IGNYTECOMMUNITY</h1>
    
</div>


</div>
    </>
  )
}