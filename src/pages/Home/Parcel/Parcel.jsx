import React from "react";
import live from "../../../assets/images/live-tracking.png";
import delivery from "../../../assets/images/safe-delivery.png";
import support from "../../../assets/images/support.png";

const parcels = [
  {
    image: live,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    image: delivery,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    image: support,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const Parcel = () => {
  return (
    <div className="space-y-10 my-10 p-10 md:p-10">
      {/* Top dashed divider */}
      <div className="border-t-2 border-dashed border-gray-400"></div>
      <div className="space-y-5">
        {parcels.map((parcel, index) => (
          <div
            key={index}
            className="bg-white rounded-xl flex  items-center p-6  flex-col md:flex-row md:items-start gap-6  shadow-sm"
          >
            <img
              src={parcel.image}
              alt=""
              className="h-16 md:h-20 lg:h-24 object-contain"
            />
            {/* vertical dashed divider */}
            <div className="hidden md:block border-l-2 border-dashed border-gray-300 h-25"></div>

            <div className="space-y-5">
              <h1 className="font-bold text-xl text-[#03373d]">
                {parcel.title}
              </h1>
              <p className="text-[#606060]">{parcel.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom dashed divider */}
      <div className="border-t-2 border-dashed border-gray-400"></div>
    </div>
  );
};

export default Parcel;
