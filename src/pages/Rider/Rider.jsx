import React from "react";
import { motion } from "framer-motion";
import agentImg from "../../assets/images/agent-pending.png";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  //  explore useMemo useCallback control ❓❌

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const riderRegion = useWatch({ control, name: "region" });

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title:
            "Your application has been submitted . We will reach out you in 30 days ",
          showConfirmButton: false,
          icon: "success",
          timer: 2500,
        });
      }
    });
  };
  return (
    <div className="w-full bg-gray-50 p-10 md:p-10 my-10 rounded-xl">
      <h1 className="text-4xl font-extrabold text-[#03373d] mb-5">
        Be a Rider
      </h1>
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

          <form
            onSubmit={handleSubmit(handleRiderApplication)}
            className="space-y-2"
          >
            <label className="block text-sm font-semibold mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              {...register("riderName")}
              defaultValue={user?.displayName}
              className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400"
            />
            <label className="block text-sm font-semibold mb-1">
              Your Driving License Number
            </label>
            <input
              type="text"
              {...register("licenseNumber")}
              placeholder="Driving License Number"
              className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400"
            />
            <label className="block text-sm font-semibold mb-1">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              {...register("riderEmail")}
              defaultValue={user?.email}
              className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400"
            />

            <legend className="block text-sm font-semibold mb-1">
              Your Regions
            </legend>
            <select
              defaultValue="Select Your Region"
              className="select select-bordered w-full"
              {...register("region")}
            >
              <option disable={true}>Select your region</option>
              {regions.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <legend className="font-medium">Districts</legend>
            <select
              defaultValue="Select Your District"
              className="select select-bordered w-full"
              {...register("district")}
            >
              <option disable={true}>Select your District</option>
              {districtsByRegion(riderRegion).map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <label className="block text-sm font-semibold mb-1">NID No</label>
            <input
              type="text"
              placeholder="NID Number"
              {...register("nidNumber")}
              className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400"
            />
            <label className="block text-sm font-semibold mb-1">Contact</label>
            <input
              type="number"
              placeholder="Contact Number"
              {...register("riderNumber")}
              className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400"
            />
            <label className="block text-sm font-semibold mb-1">
              Bike Brand Model And Year
            </label>
            <input
              type="text"
              {...register("bikeModel")}
              placeholder="Bike Brand Model And Year"
              className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400"
            />
            <label className="block text-sm font-semibold mb-1">
              Bike Registration Number
            </label>
            <input
              type="text"
              placeholder="Bike Registration Number"
              {...register("bikeRegistrationNumber")}
              className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400"
            />
            <label className="block text-sm font-semibold mb-1">
              Tell Us About Yourself
            </label>
            <input
              type="text"
              placeholder="Tell Us About Yourself"
              {...register("aboutYourself")}
              className="input w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400"
            />
            <input
              type="submit"
              value="Apply as a Rider"
              className="btn w-full bg-[#C7EB63] text-[#053B2F] px-10 border-none hover:bg-[#bce55a] font-semibold py-2 mt-2 rounded-lg cursor-pointer"
            />
            {/* <button
              className="w-full bg-[#C7EC75] hover:bg-[#b5e458] text-black font-semibold py-2 mt-2 rounded-lg"
              type="submit"
            >
              Submit
            </button> */}
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
