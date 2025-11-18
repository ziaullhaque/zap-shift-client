import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Story", "Mission", "Success", "Team & Others"];

const content = {
  Story: `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made ZapShift a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.`,

  Mission: `Our mission is simple: deliver happiness with speed and accuracy. At ZapShift, we focus on improving nationwide logistics, empowering local businesses, and making parcel delivery more accessible for everyone. We aim to bring a seamless, transparent, and reliable experience to each customer.`,

  Success: `With thousands of successful deliveries completed every month, ZapShift has become a go-to courier partner for individuals and businesses across Bangladesh. From advanced tracking to consistent on-time delivery, our success is powered by customer trust and strong logistics infrastructure.`,

  "Team & Others": `Behind every ZapShift delivery is a dedicated team working day and night. Our delivery heroes, support team, and logistics experts collaborate to ensure a flawless experience. We continuously train and upgrade our systems to maintain industry‑leading service quality.`,
};

const About = () => {
    const [active, setActive] = useState("Story");
  return (
    <div className=" bg-[#F5F7FA] p-6 md:p-12 flex justify-center">
      <div className="bg-white shadow-sm rounded-2xl p-8 w-full max-w-5xl border border-gray-100">
        <h2 className="text-3xl font-bold text-[#0A3A2A] mb-2">About Us</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <hr className="my-4" />

        {/* Tabs */}
        <div className="flex gap-6 mb-6 text-lg font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`relative pb-1 transition-all duration-200 ${
                active === tab
                  ? "text-[#0A3A2A] font-semibold"
                  : "text-gray-500"
              }`}
            >
              {tab}
              {active === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-[2px] bg-[#0A3A2A] rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-700 leading-relaxed space-y-4"
        >
          <p>{content[active]}</p>
          <p>{content[active]}</p>
          <p>{content[active]}</p>
        </motion.div>
      </div>
    </div>
    // <div>
    //   <h1>About Us</h1>
    //   <p>
    //     Enjoy fast, reliable parcel delivery with real-time tracking and zero
    //     hassle. From personal packages to business shipments — we deliver on
    //     time, every time.
    //   </p>
    //   <div>
    //     <ul>
    //       <li>
    //         <a href="">Story</a>
    //       </li>
    //       <li>
    //         <a href="">Mission</a>
    //       </li>
    //       <li>
    //         <a href="">Success</a>
    //       </li>
    //       <li>
    //         <a href="">Team $ Others</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div></div>
    // </div>
  );
};

export default About;
