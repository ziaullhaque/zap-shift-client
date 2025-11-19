import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // watch,
    // formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  //   console.log(regionsDuplicate)
  //   const regionsSet = new Set(regionsDuplicate)
  //   console.log(regionsSet)
  const regions = [...new Set(regionsDuplicate)];
  //  explore useMemo useCallback control ❓❌
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  //   const senderRegion = watch("senderRegion");
  //   console.log(regions);

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("Cost", cost);
    Swal.fire({
      title: "Agree with the Cost?",
      text: `You will be Charged ${cost} Taka !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree !",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the parcel info to the database
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("After saving parcel", res.data);
        });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });

    const sameDistrict = data.senderDistrict === data.receiverDistrict;
    console.log(sameDistrict);
  };

  return (
    <div className="min-h-screen py-10 flex justify-center">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow p-10 md:p-10">
        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#053B2F] mb-8">
          Send a Parcel
        </h1>

        {/* SECTION TITLE */}
        <h2 className="text-lg font-bold text-[#053B2F] mb-4">
          Enter your parcel details
        </h2>
        <form onSubmit={handleSubmit(handleSendParcel)} className="">
          {/* DOCUMENT / NON DOCUMENT = PARCEL TYPE */}
          <div className="flex gap-6 mb-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="document"
                defaultChecked
                className="radio radio-success"
                {...register("parcelType")}
              />
              <span>Document</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="non-document"
                className="radio radio-success"
                {...register("parcelType")}
              />
              <span>Non-Document</span>
            </label>
          </div>

          {/* PARCEL BASIC INFO */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div>
              <label className="font-medium">Parcel Name</label>
              <input
                type="text"
                placeholder="Parcel Name"
                className="input input-bordered w-full"
                {...register("parcelName")}
              />
            </div>

            <div>
              <label className="font-medium">Parcel Weight (KG)</label>
              <input
                type="number"
                placeholder="Parcel Weight (KG)"
                className="input input-bordered w-full"
                {...register("parcelWeight")}
              />
            </div>
          </div>

          {/* SENDER / RECEIVER SECTION */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* SENDER DETAILS */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-[#053B2F]">
                Sender Details
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Sender Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Sender Name"
                    defaultValue={user?.displayName}
                    {...register("senderName")}
                  />
                </div>

                <div>
                  <label className="font-medium">Sender Email</label>
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="Sender email"
                    defaultValue={user?.email}
                    {...register("senderEmail")}
                  />
                </div>

                <div>
                  <label className="font-medium">
                    Sender Pickup Wire-house
                  </label>
                  <select
                    {...register("senderWireHouse")}
                    className="select select-bordered w-full"
                  >
                    <option>Select wire house</option>
                  </select>
                </div>

                <div>
                  <label className="font-medium">Sender Address</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Address"
                    {...register("senderAddress")}
                  />
                </div>

                <div>
                  <label className="font-medium">Sender Contact No</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Sender Contact No"
                    {...register("senderContact")}
                  />
                </div>

                <div>
                  <legend className="font-medium">Sender Regions</legend>
                  <select
                    defaultValue="Select Your Region"
                    className="select select-bordered w-full"
                    {...register("senderRegion")}
                  >
                    <option disable={true}>Select your region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <legend className="font-medium">Sender Districts</legend>
                  <select
                    defaultValue="Select Your District"
                    className="select select-bordered w-full"
                    {...register("senderDistrict")}
                  >
                    <option disable={true}>Select your District</option>
                    {districtsByRegion(senderRegion).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="font-medium">Pickup Instruction</label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Pickup Instruction"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* RECEIVER DETAILS */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-[#053B2F]">
                Receiver Details
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Receiver Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Receiver Name"
                    {...register("receiverName")}
                  />
                </div>

                <div>
                  <label className="font-medium">Receiver Email</label>
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="Receiver email"
                    {...register("receiverEmail")}
                  />
                </div>

                <div>
                  <label className="font-medium">
                    Receiver Delivery Wire-house
                  </label>
                  <select
                    {...register("receiverWireHouse")}
                    className="select select-bordered w-full"
                  >
                    <option>Select Wire house</option>
                  </select>
                </div>

                <div>
                  <label className="font-medium">Receiver Address</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Address"
                    {...register("receiverAddress")}
                  />
                </div>

                <div>
                  <label className="font-medium">Receiver Contact No</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Receiver Contact No"
                    {...register("receiverContact")}
                  />
                </div>

                <div>
                  <legend className="font-medium">Receiver Region</legend>
                  <select
                    defaultValue="Select Your Region"
                    {...register("receiverRegion")}
                    className="select select-bordered w-full"
                  >
                    <option disable={true}>Select your region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <legend className="font-medium">Receiver Districts</legend>
                  <select
                    defaultValue="Select Your District"
                    className="select select-bordered w-full"
                    {...register("receiverDistrict")}
                  >
                    <option disable={true}>Select your District</option>
                    {districtsByRegion(receiverRegion).map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="font-medium">Delivery Instruction</label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Delivery Instruction"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* PICKUP TIME NOTE */}
          <p className="text-xs text-gray-500 mt-8">
            * Pickup Time 4pm–7pm Approx.
          </p>

          {/* SUBMIT BUTTON */}
          <div className="mt-4">
            <input
              type="submit"
              value="Proceed to Confirm Booking"
              className="btn bg-[#C7EB63] text-[#053B2F] px-10 border-none hover:bg-[#bce55a]"
            />
            {/* <button
              type="submit"
              value="send-parcel"
              className="btn bg-[#C7EB63] text-[#053B2F] px-10 border-none hover:bg-[#bce55a]"
            >
              Proceed to Confirm Booking
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
