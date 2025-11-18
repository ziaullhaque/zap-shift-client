import React from "react";
import { motion } from "framer-motion";
import agentImg from "../../assets/images/agent-pending.png"

const Rider = () => {
  return (
    <div className="w-full bg-gray-50 p-10 md:p-10 my-10 rounded-xl">
      <h1 className="text-4xl font-extrabold text-[#03373d] mb-5">Be a Rider</h1>
      <p className="text-gray-600 max-w-2xl mb-10">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
       <div className="border-t-2 border-dashed border-gray-400"></div>
      {/* Flex Layout: Left Form + Right Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-10">
        {/* Left Form */}
        <div>
          <h2 className="text-xl font-bold text-[#03373d] mb-4">
            Tell us about yourself
          </h2>

          <form className="space-y-2">
            {/* Name + Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block text-sm font-semibold mb-1">Your Name</label>
             <label className="block text-sm font-semibold mb-1">Your Age</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400" />
              <input type="text" placeholder="Your Age" className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400" />
            </div>

            {/* Email + Region */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block text-sm font-semibold mb-1">Your Email</label>
             <label className="block text-sm font-semibold mb-1">Your Region</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder="Your Email" className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400" />

              <select className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400">
                <option>Select your region</option>
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Sylhet</option>
              </select>
            </div>

            {/* NID + Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block text-sm font-semibold mb-1">NID No</label>
             <label className="block text-sm font-semibold mb-1">Contact</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="NID Number" className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400" />
              <input
                type="text"
                placeholder="Contact Number"
                className="input"
              />
            </div>

            {/* Warehouse */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block text-sm font-semibold mb-1">Which wire-house you want to work ?</label>
            </div>
            <select className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400">
              <option>Select warehouse you want to work</option>
              <option>Warehouse A</option>
              <option>Warehouse B</option>
            </select>

            <button
              className="w-full bg-[#C7EC75] hover:bg-[#b5e458] text-black font-semibold py-2 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={agentImg}
            alt="Rider Illustration"
            className="w-64 md:w-80 lg:w-96"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Rider;
