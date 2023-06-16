import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css/navigation";

import img1 from '../assets/portfolio.png'
import img2 from '../assets/portfolio1.png'
import img3 from '../assets/portfolio3.png'
import img4 from '../assets/portfolio4.png'
import img5 from '../assets/portfolio5.png'
import img6 from '../assets/portfolio6.png'
import img7 from '../assets/portfolio7.png'
import img8 from '../assets/portfolio8.png'
import img9 from '../assets/portfolio9.png'

const Portfolio = () => {
  return (
    <section id='portfolio' className='py-5'>
      <div className="container">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div>
              <div className='flex flex-col'>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
              </div>
              <h1>Каракалпакстан GSM</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className='flex flex-col'>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
              </div>
              <h1>Каракалпакстан UMTS</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className='flex flex-col'>
                <img src={img5} alt=""/>
                <img src={img6} alt=""/>
              </div>
              <h1>Каракалпакстан LTE</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className='flex flex-col'>
                <img src={img7} alt=""/>
              </div>
              <h1>Сырдарья  UMTS</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className='flex flex-col'>
                <img src={img8} alt=""/>
              </div>
              <h1>Проект в Грузии</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className='flex flex-col'>
                <img src={img9} alt=""/>
              </div>
              <h1>Improving MDS- Mean Duration of Service</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Portfolio
