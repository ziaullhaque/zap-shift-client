import React from "react";
import bannerTwo from "../../../assets/images/tiny-deliveryman.png";
import banner from "../../../assets/images/big-deliveryman.png";
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div className="flex lg:w-[1250px] lg:h-[580px] flex-col-reverse  md:flex-row justify-between  w-full mx-auto items-center bg-white rounded-2xl p-5 md:p-10 gap-10 md:gap-20 ">
      {/* text */}
      <div className="space-y-2 w-full md:w-1/2 text-center md:text-left">
        <img
          className="h-20 md:h-24 lg:h-28 mx-auto md:mx-0"
          src={bannerTwo}
          alt=""
        />
        <h1 className="font-extrabold text-[#03373d] text-3xl md:text-4xl lg:text-5xl leading-snug">
          We Make Sure Your <br />
          <span className="text-[#CAEB66]">Parcel Arrives</span> On Time <br />{" "}
          – No Fuss.
        </h1>
        <p className="text-[#606060]  text-base md:text-lg">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal <br /> packages to business shipments — we
          deliver on time, every time.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-3">
          <button className="btn rounded-full bg-[#CAEB66]">
            Track Your Parcel
          </button>

          <button className="btn rounded-full bg-black   ">
            <MdArrowOutward className="text-[#CAEB66]" size={22} />
          </button>

          <button className="btn ">Be a Rider</button>
        </div>
        
      </div>
      {/* image */}
      <div className="flex justify-center w-full md:w-1/2">
        <img
          className="h-52 md:h-60 lg:h-72  object-contain"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
