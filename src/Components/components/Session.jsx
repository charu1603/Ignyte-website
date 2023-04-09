import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowsUpDown, faHandsHoldingChild, faPeopleGroup} from '@fortawesome/free-solid-svg-icons'
import { Autoplay } from "swiper";
import styles from "../css/Session.module.css";

export default function Session() {

 const session = [
  {name:'Session1'},
  {name:'Session2'},
  {name:'Session3'},
  {name:'Session4'},
  {name:'Session5'},
  {name:'Session6'}
 ]

 const [active,setActive] = useState(null);

  return (
    <>
      <div className="SessionSection bg-[#49A16C] overflow-x-hidden py-12">
        <br></br>
        <div className="heading h-12 w-max mx-auto">
          <h1 className="text-5xl border-b-4 pb-2 px-2 text-white font-extrabold  flex justify-center items-center">
            Sessions
          </h1>
        </div>

        <div className="h-screen flex mt-8 justify-center text-white py-5">
          <div className="max-w-5xl md:max-w-full md:ml-12 mx-auto">

            <Swiper  spaceBetween={50} slidesPerView={3} 
            onSlideChange={ (cur) => setActive(cur.realIndex) } 
            loop = {true}
            centeredSlides = {true}
            speed = {800}
            autoplay = {{
              delay:2000,
            }}
            modules = {[Autoplay]}
            >
            
            {session.map((session , i) => (
              
              <SwiperSlide  key={i} >
              <div className="h-96 flex ">
                <div className={`${styles.card} ${ active === i && styles.card_active}  bg-gradient-to-t from-white/20; from-white/20`}>
                  <div className={styles.logo}>
                    <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
                  </div>
                  <h2 className="text-3xl mt-2 font-semibold">{session.name}</h2> 
                  <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolor porro voluptatum facere repudiandae corrupti illum ea Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veritatis officia dolorum, nemo dicta totam quibusdam!</p>
                </div>
                
              </div>
            </SwiperSlide>

            ))

            }

            </Swiper>
          </div>
        </div>

      </div>
    </>
  );
}
