import React from "react";
import bookingVan from "../../../assets/images/bookingIcon.png";

const works = [
  {
    id: 1,
    image: "",
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 2,
    image: "",
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 3,
    image: "",
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    id: 4,
    image: "",
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const Work = () => {
  return (
    <div className="p-10 space-y-5">
      <h1 className="text-[#03373d] font-bold text-lg ">How it Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {works.map((items) => (
          <div className="bg-white p-5 rounded-xl space-y-2" key={items.id}>
            <img className="w-10 md:w-12" src={bookingVan} alt="delivery van" />
            <h2 className="font-bold text-[#03373d]">{items.title}</h2>
            <p className="text-[#606060]  ">{items.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
