import React from "react";

const Pricing = () => {
  return (
    <div className="w-full bg-gray-50 p-10 md:p-10 my-10 rounded-xl">
      <h1 className="text-4xl font-extrabold text-[#03373d] mb-5">
        Pricing Calculator
      </h1>
      <p className="text-gray-600 max-w-2xl mb-10">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="border-t-2 border-dashed border-gray-400"></div>
      {/* Flex Layout: Left Form + Right Image */}
      <h1 className="text-2xl font-bold text-center text-[#03373d] my-5">
        Calculate Your Cost
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-10">
        {/* Left Form */}
        <div>
          <form className="space-y-2">
            {/*  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block text-sm font-semibold mb-1">
                Parcel Type
              </label>
            </div>
            <select className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400">
              <option>Select Parcel Type</option>
              <option>Parcel A</option>
              <option>Parcel B</option>
              <option>Parcel C</option>
              <option>Parcel D</option>
              <option>Parcel E</option>
            </select>
            {/* */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block text-sm font-semibold mb-1">
                Delivery Destination
              </label>
            </div>
            <select className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400">
              <option> Select Delivery Destination</option>
              <option>Delivery Destination A</option>
              <option>Delivery Destination B</option>
              <option>Delivery Destination C</option>
              <option>Delivery Destination D</option>
              <option>Delivery Destination E</option>
            </select>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block text-sm font-semibold mb-1">
                Weight (KG)
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Contact"
                className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400"
              />
            </div>

            <div className="flex gap-5 my-5">
              <button
                className="w-40 border bg-gray-200 border-[#C7EC75] text-[#73863A] hover:text-black hover:bg-[#b5e458] font-semibold py-2 rounded-lg"
                type="submit"
              >
                Reset
              </button>
              <button
                className="w-full bg-[#C7EC75] hover:bg-[#b5e458] text-black font-semibold py-2 rounded-lg"
                type="submit"
              >
                Calculate
              </button>
            </div>
          </form>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center mt-30 ">
          <h1 className="font-extrabold text-7xl">50 TK</h1>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
