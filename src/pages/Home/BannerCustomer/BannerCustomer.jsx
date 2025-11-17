import React from "react";
import merchantImg from "../../../assets/images/location-merchant.png";
import bannerMerchantImg from "../../../assets/images/be-a-merchant-bg.png";

const BannerCustomer = () => {
  return (
    <div className="bg-[#03373D] flex justify-center items-center p-10 m-10 rounded-3xl mb-20">
      <div className="space-y-5">
        <img className="w-full" src={bannerMerchantImg} alt="" />
        <h1 className="text-white font-bold text-2xl">
          Merchant and Customer Satisfaction is Our First Priority
        </h1>
        <p className="text-gray-300">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="space-x-5">
          <button className="btn bg-[#CAEB66] rounded-full ">
            Become a Merchant
          </button>
          <button className="btn border-[#CAEB66] bg-[#03373D] text-[#CAEB66] rounded-full">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
      <div>
        <img className="w-180" src={merchantImg} alt="" />
      </div>
    </div>
  );
};

export default BannerCustomer;
