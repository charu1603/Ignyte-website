

import { React, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React , {useRef , useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

import design1 from "../images/Feature1.png";
import design2 from "../images/Feature2.png";
import design3 from "../images/Feature3.png";

const Contact = () => {


  const handleContactPageSubmitBtn = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name) {
      toast.error("Name is required field", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return;
    } if (!email) {
      toast.error("Email is required field", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return;
    } if (!emailRegex.test(email)) {
      toast.error("Enter valid email address", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return;
    } if (!subject) {
      toast.error("Subject is required field", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return;
    } if (!message) {
      toast.error("Message is required field", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return;
    } else {
      //backend code for sending mails
    }

  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <ToastContainer />
      <div id="Contact" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-white via-white to-#97bdfc">
        <div className="bg-gray-200 rounded shadow-md max-w-5xl w-full md:flex-row flex flex-col py-8 md:py-20 px-4 md:px-20">
          <div className="flex lg:flex-col md:mr-8 mb-4 md:flex md:flex-col">
            <img src={design1} alt="Design1" className="w-28 h-28 " />
            <img src={design2} alt="Design2" className="w-28 h-28 " />
            <img src={design3} alt="Design3" className="w-28 h-28" />
          </div>

          <div className="flex-grow">

            <h2 className="text-2xl font-semibold text-#1e1b4b mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                  placeholder="Your Message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-300 transition-all"
                onClick={handleContactPageSubmitBtn}
              >
                Submit
              </button>
            </form>
          </div>

  const heading = React.createRef(); 
  const content1 = React.createRef(); 
  const content2 = React.createRef(); 
  const content3 = React.createRef(); 
  const content4 = React.createRef(); 

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
      gsap.fromTo(el3 , {delay:2, opacity:0, translateY:"10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el3,
      }})
      const el4 = content3.current;
      gsap.fromTo(el4 , {delay:2, opacity:0, translateY:"10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el4,
      }})
      const el5 = content4.current;
      gsap.fromTo(el5 , {delay:2, opacity:0, translateY:"10px"} , {delay:2, opacity:1,translateY:"1px", duration: 2, scrollTrigger:{
        trigger: el5,
      }})
    }, [ ] )

  return (
    <div id="Contact" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-white via-white to-#97bdfc">
      <div className="bg-gray-200 rounded shadow-md max-w-5xl w-full md:flex-row flex flex-col py-8 md:py-20 px-4 md:px-20">
        <div className="flex lg:flex-col md:mr-8 mb-4 md:flex md:flex-col">
          <img src={design1} alt="Design1" className="w-28 h-28 " ref={content2}/>
          <img src={design2} alt="Design2" className="w-28 h-28 " ref={content3}/>
          <img src={design3} alt="Design3" className="w-28 h-28" ref={content4}/>
        </div>

        <div className="flex-grow">
          <h2 className="text-2xl font-semibold text-#1e1b4b mb-4" ref={heading}>Contact Us</h2>
          <form ref={content1}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Subject"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-300 transition-all"
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    </>
  );
};

export default Contact;
