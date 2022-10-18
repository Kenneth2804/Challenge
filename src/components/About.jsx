import React,{useState} from 'react';

import Swiper, {SwiperOptions} from "swiper";
import p1 from '../sets/profile1.jpg';
import p2 from '../sets/profile2.jpg';
import p3 from '../sets/profile3.jpg';


 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

const About = () =>{

  return (
    <div >
	
	</div>
  );
}

export default About;