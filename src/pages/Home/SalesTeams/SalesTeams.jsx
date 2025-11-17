import React from "react";
import Marquee from "react-fast-marquee";
import casio from "../../../assets/brands/casio.png";
import amazon from "../../../assets/brands/amazon.png";
import moonStar from "../../../assets/brands/moonstar.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";
import randstad from "../../../assets/brands/randstad.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const brandLogos = [casio, amazon, moonStar, star, startPeople, randstad];

const SalesTeams = () => {
  return (
    <div className="space-y-8 my-10 p-10 md:p-10">
      <h1 className="text-[#03373d] font-bold text-lg md:text-xl text-center">
        We've helped thousands of sales teams
      </h1>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
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
        modules={[Autoplay]}
        className="mySwiper"
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="logo" />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <Marquee speed={50} className="flex items-center" pauseOnHover={true}>
        {brandLogos.map((logo, items) => (
          <div key={items} className="mx-6 md:mx-10">
            <img src={logo} alt="brand-logo" />
            {/* className="h-8 md:h-10 lg:h-12 object-contain" */}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SalesTeams;
