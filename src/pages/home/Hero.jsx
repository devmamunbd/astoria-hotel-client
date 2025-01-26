import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Img1 from "../../assets/banner/b1.jpg"
import Img2 from "../../assets/banner/b2.jpg"
import Img3 from "../../assets/banner/b3.jpg"
import Img4 from "../../assets/banner/b4.jpg"

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
        <div>
            <h1 className='text-xl md:text-4xl font-bold '>Hotel With Swimmings Pool and <br /> <span className='text-green-500'>Luxury Vibes</span></h1>
            <p className='text-sm md:text-[16px] mt-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse et sapiente labore. Beatae corrupti itaque, veritatis repellat nobis temporibus explicabo. Inventore rerum ex mollitia vero. Excepturi quaerat debitis quibusdam corrupti?</p>
            <div className='mt-10 flex gap-10 '>
                <button className='bg-green-500 cursor-pointer px-12 py-2 text-white font-semibold rounded-md'>Book Now</button>
                <button className='bg-transparent border cursor-pointer border-gray-800 px-12 py-2 text-black font-semibold rounded-md'>Learn More</button>
            </div>
        </div>

    {/* Slider */}
    <div>
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 1200,
            disableOnInteraction: false
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-full lg:h-[420px] h-80 rounded-md sm:h-96' src={Img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full lg:h-[420px] h-80 rounded-md sm:h-96' src={Img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full lg:h-[420px] h-80 rounded-md sm:h-96' src={Img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full lg:h-[420px] h-80 rounded-md sm:h-96' src={Img4} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>

    </div>
  )
}

export default Hero
