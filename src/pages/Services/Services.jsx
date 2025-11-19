import React from "react";
import banner from "../../assets/images/banner.png";

const Services = () => {
  return (
    <div>
      <div className="my-30">
        <div
          className={`w-full  bg-[url('${banner}')] bg-cover bg-center bg-no-repeat absolute`}
        >
          <div className="relative w-200">
            <div className=" text-center space-y-5 ml-5 my-28">
              <h1 className="text-[#00A2B8] font-bold text-5xl">
                Ziaull Haque
              </h1>
              <h1 className="text-white font-extrabold text-3xl">
                WEB DEVELOPER
              </h1>
              <h1 className="text-[#49D9E9]">
                JAVASCRIPT <span className="mx-2">|</span> REACT
                <span className="mx-2">|</span> NODE
                <span className="mx-2">|</span>EXPRESS
                <span className="mx-2">|</span>
                NEXT <span className="mx-2">|</span> MONGODB
              </h1>
            </div>
          </div>
        </div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Services;
