import React from "react";

const ParcelDetails = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mx-5 my-10">
      <h2 className="text-3xl font-bold text-[#053B2F] mb-6">Parcel Details</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* SENDER INFO */}
        <div className="bg-[#F4F7F9] p-5 rounded-xl">
          <h3 className="font-bold text-xl text-[#053B2F] mb-3">Sender Info</h3>
          <p>
            <strong>Name:</strong> Ziaul Haque
          </p>
          <p>
            <strong>Phone:</strong> 01700000000
          </p>
          <p>
            <strong>Email:</strong> zia@gmail.com
          </p>
          <p>
            <strong>Region:</strong> Dhaka, Bangladesh
          </p>
          <p>
            <strong>Address:</strong> Gulshan Badda Link RD, Dhaka 1212
          </p>
        </div>

        {/* RECEIVER INFO */}
        <div className="bg-[#F4F7F9] p-5 rounded-xl">
          <h3 className="font-bold text-xl text-[#053B2F] mb-3">
            Receiver Info
          </h3>
          <p>
            <strong>Name:</strong> Zahid Hossain
          </p>
          <p>
            <strong>Phone:</strong> 01900000000
          </p>
          <p>
            <strong>Email:</strong> zahid@example.com
          </p>
          <p>
            <strong>Region:</strong> Dhaka, Bangladesh
          </p>
          <p>
            <strong>Address:</strong>Gulshan Badda Link RD, Dhaka 1212
          </p>
        </div>

        {/* PARCEL INFO */}
        <div className="bg-[#F4F7F9] p-5 rounded-xl md:col-span-2">
          <h3 className="font-bold text-xl text-[#053B2F] mb-3">
            Parcel Details
          </h3>
          <p>
            <strong>Title:</strong> Document
          </p>
          <p>
            <strong>Type:</strong> Document
          </p>
          <p>
            <strong>Weight:</strong> 1 KG
          </p>
          <p>
            <strong>Charge:</strong> 120 TK
          </p>
          <p>
            <strong>Status:</strong> Pending
          </p>
          <p>
            <strong>Pickup Instruction:</strong> N/A
          </p>
          <p>
            <strong>Delivery Instruction:</strong> N/A
          </p>
          <p>
            <strong>Tracking Number:</strong> 5566
          </p>
          <p>
            <strong>Pickup OTP:</strong> 5566
          </p>
          <p>
            <strong>Delivery OTP:</strong> 5566
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetails;
