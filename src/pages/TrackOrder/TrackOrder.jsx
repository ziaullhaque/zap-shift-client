import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const TrackOrder = () => {
  const trackingUpdates = [
    {
      time: "Jun 02, 2025 12:21 am",
      status: "Assigned to rider.",
    },
    {
      time: "Jun 02, 2025 12:21 am",
      status: "Assigned to rider.",
    },
    {
      time: "Jun 02, 2025 12:21 am",
      status: "Assigned to rider.",
    },
    {
      time: "Jun 02, 2025 12:21 am",
      status: "Assigned to rider.",
    },
    {
      time: "Jun 02, 2025 12:21 am",
      status: "Assigned to rider.",
    },
  ];

  return (
    <div className="bg-[#F2F5F4] min-h-screen p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-[#053B2F]">
          Track Your Consignment
        </h1>
        <p className="text-[#59706F] mt-1">
          Now you can easily track your consignment
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center bg-white px-4 py-2 rounded-full w-full shadow">
            <FaSearch className="text-[#7A8888] text-lg" />
            <input
              type="text"
              placeholder="Search tracking code here"
              className="bg-transparent w-full outline-none ml-3 text-[#053B2F]"
            />
          </div>

          <button className="bg-[#C7EB63] text-[#053B2F] px-6 py-2 rounded-full font-semibold shadow hover:bg-[#bae85d] transition">
            Search
          </button>
        </div>

        <hr className="my-8 border-[#C6D4D3]" />

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Details */}
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h2 className="text-xl font-semibold text-[#053B2F] mb-4">
              Product details
            </h2>

            <div className="space-y-1 text-[#053B2F]">
              <p>May 31, 2025 03:41 pm</p>
              <p>Id: 14897675</p>
              <p>Invoice: 24227</p>
              <p>
                Tracking Code:
                <span className="font-semibold ml-1">
                  OJIJWVEWXZ928337SHH55YV7
                </span>
              </p>

              <br />

              <p>
                <span className="font-semibold">Name:</span> Zahid Hossain
              </p>
              <p>
                <span className="font-semibold">Address:</span> Madaresha Road,
                Chandpur sadar, Chandpur, Chandpur, 3600, BD
              </p>
              <p>
                <span className="font-semibold">Phone Number:</span> 01780448866
              </p>

              <br />

              <p>
                <span className="font-semibold">Approved:</span> N/A
              </p>
              <p>
                <span className="font-semibold">Weight:</span> KG
              </p>
              <p>
                <span className="font-semibold">COD:</span> 0
              </p>

              <p className="text-yellow-600 font-semibold">Pending</p>
            </div>
          </div>

          {/* Tracking Updates */}
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h2 className="text-xl font-semibold text-[#053B2F] mb-4">
              Tracking Updates
            </h2>

            <div className="space-y-6 relative">
              {trackingUpdates.map((item, index) => (
                <div key={index} className="flex items-start gap-4 relative">
                  <div className="flex flex-col items-center">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    {/* timeline line */}
                    {index !== trackingUpdates.length - 1 && (
                      <div className="w-[2px] h-12 bg-gray-300 mx-auto"></div>
                    )}
                  </div>

                  <div>
                    <p className="text-sm text-[#053B2F]">{item.time}</p>
                    <p className="text-sm text-[#59706F]">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
