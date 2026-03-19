
import {React,  useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import "./main.css"


function main() {
    
  return (
    <div className='banner'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
        <div className="grid">
            <div className="grid-child">
                <h1>Comedy</h1>
                <p>Comedy is the art of making people laugh, lifting their spirits, and sometimes addressing social or political topics through humor. 
                    It has a history spanning thousands of years, evolving from theatrical stages to films, television, and even online platforms</p>
            </div>
            <div className="grid-child">
                <h1>education</h1>
                <p>Education and lifelong learning are essential for personal and professional growth. Learning effectively is not just about spending long hours with books; 
                    it’s about studying smart and applying strategies that help retain information and develop skills</p>
            </div>
            <div className="grid-child">
                <h1>Fitness</h1>
                <p>Fitness is more than just going to the gym—it’s a lifestyle that improves physical health, mental well-being,
                     and overall quality of life. Regular exercise helps strengthen muscles, boost endurance, and maintain a healthy weight.</p>
            </div>
            <div className="grid-child">
                <h1>career</h1>
                <p>Finding and excelling in a job requires more than just submitting resumes. A successful career combines preparation, skill development, networking, and continuous learning.</p>
            </div>
        </div>
    </div>
  )
}

export default main