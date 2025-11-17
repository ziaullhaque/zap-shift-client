import React from "react";
import Banner from "../Banner/Banner";
import CarouselBanner from "../Banner/CarouselBanner";
import Work from "../Work/Work";
import Services from "../Services/Services";
import SalesTeams from "../SalesTeams/SalesTeams";
import Parcel from "../Parcel/Parcel";
import Reviews from "../Reviews/Reviews";
import Faq from "../Faq/Faq";
import BannerCustomer from "../BannerCustomer/BannerCustomer";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <CarouselBanner></CarouselBanner>
      <Work></Work>
      <Services></Services>
      <SalesTeams></SalesTeams>
      <Parcel></Parcel>
      <BannerCustomer></BannerCustomer>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <Faq></Faq>
    </div>
  );
};

export default Home;
