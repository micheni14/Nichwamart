import React from 'react';
import image1 from "../assets/image 1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

function NewProducts() {
return (
    <div>

        <p className='pt-20 font-bold flex justify-center items-center text-4xl text-blue-900'>New Products</p>
        <>
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
        clickable: true,
        }}
        breakpoints={{
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
                <SwiperSlide className=''>
                <div className="flex flex-col justify-center relative  ">
                                <div className="absolute  h-full w-full flex justify-center items-center">
                            
                                </div>
                                
                    <img src={image1} alt="your browser doesnt support this image" />
                    </div>
        </SwiperSlide>
                <SwiperSlide>
                <div className="flex flex-col justify-center relative  ">
                                <div className="absolute  h-full w-full flex justify-center items-center">
                            
                                </div>
                                
                    <img src={image1} alt="your browser doesnt support this image" />
                    </div>
        </SwiperSlide>
        <SwiperSlide> <div className="flex flex-col justify-center relative  ">
                                <div className="absolute  h-full w-full flex justify-center items-center">
                            
                                </div>
                                
                    <img src={image1} alt="your browser doesnt support this image" />
                    </div></SwiperSlide>
        <SwiperSlide> <div className="flex flex-col justify-center relative  ">
                                <div className="absolute  h-full w-full flex justify-center items-center">
                            
                                </div>
                                
                    <img src={image1} alt="your browser doesnt support this image" />
                    </div></SwiperSlide>
        <SwiperSlide> <div className="flex flex-col justify-center relative  ">
                                <div className="absolute  h-full w-full flex justify-center items-center">
                            
                                </div>
                                
                    <img src={image1} alt="your browser doesnt support this image" />
                    </div></SwiperSlide>
        <SwiperSlide> <div className="flex flex-col justify-center relative  ">
                                <div className="absolute  h-full w-full flex justify-center items-center">
                            
                                </div>
                                
                    <img src={image1} alt="your browser doesnt support this image" />
                    </div></SwiperSlide>
        <SwiperSlide> <div className="flex flex-col justify-center relative  ">
                                <div className="absolute  h-full w-full flex justify-center items-center">
                            
                                </div>
                                
                    <img src={image1} alt="your browser doesnt support this image" />
                    </div></SwiperSlide>
        <SwiperSlide> <div className="flex flex-col justify-center relative  ">
                                <div className="absolute  h-full w-full flex justify-center items-center">
                            
                                </div>
                                
                    <img src={image1} alt="your browser doesnt support this image" />
                    </div></SwiperSlide>
        <SwiperSlide> <div className="flex flex-col justify-center relative  ">
                                <div className="absolute  h-full w-full flex justify-center items-center">
                            
                                </div>
                                
                    <img src={image1} alt="your browser doesnt support this image" />
                    </div></SwiperSlide>
    </Swiper>
        </>
        </div>
);

}

export default NewProducts