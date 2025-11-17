import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Banner from "./Banner";
import bannerOne from "../../../assets/banner/banner1.png";
import bannerTwo from "../../../assets/banner/banner2.png";
import bannerThree from "../../../assets/banner/banner3.png";

const CarouselBanner = () => {
  return (
    <div className="my-5">
      {/* <Carousel> */}
      <Carousel autoPlay={true} infiniteLoop={true}>
        {/* <div>
          <Banner></Banner>
        </div> */}
        <div>
          <img src={bannerOne} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={bannerTwo} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={bannerThree} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
