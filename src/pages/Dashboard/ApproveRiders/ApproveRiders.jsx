import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    data: riders = [],
    isLoading,
  } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      //   const res = await axiosSecure.get("/riders?status=pending");
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status , email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          title: `Rider status is set to ${status}.`,
          showConfirmButton: false,
          icon: "success",
          timer: 2500,
        });
      }
    });
  };

  //   const handleApproval = (id) => {
  //     updateRiderStatus(id, "approved");
  //      const updateInfo = { status: "approved" };
  //      axiosSecure.patch(`/riders/${id}`, updateInfo).then((res) => {
  //        if (res.data.modifiedCount) {
  //          Swal.fire({
  //            title: "Rider has ben Approved .",
  //            showConfirmButton: false,
  //            icon: "success",
  //            timer: 2500,
  //          });
  //        }
  //      });
  //   };
  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };
  const handleRejection = (rider) => {
    updateRiderStatus(rider, "rejected");
  };

  if (isLoading) {
    return <p className="text-center py-10 text-xl">Loading...</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">
        Rider Pending Approval : {riders.length}
      </h1>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Region</th>
              <th>District</th>
              <th>Bike Model</th>
              <th>Rider Email</th>
              <th>NID</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <td>{index + 1}</td>
                <td className="font-semibold">{rider.riderName}</td>
                <td>{rider.region}</td>
                <td>{rider.district}</td>
                <td>{rider.bikeModel}</td>
                <td>{rider.riderEmail}</td>
                <td>{rider.nidNumber}</td>
                <td>
                  <p
                    className={`${
                      rider.status === "approved"
                        ? "text-green-800"
                        : "text-red-500"
                    }`}
                  >
                    {rider.status}
                  </p>
                </td>

                <td className="flex items-center ">
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn mx- btn-sm"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleRejection(rider)}
                    className="btn mx-3 btn-sm"
                  >
                    <IoPersonRemoveSharp />
                  </button>
                  <button className="btn mr-3 btn-sm">
                    <FaTrashCan />
                  </button>
                  {/* <button className="btn btn-success btn-sm text-white ">
                    Approve
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;

// import React from "react";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

// const ApproveRiders = () => {
//   const axiosSecure = useAxiosSecure();
//   const { data: riders = [] } = useQuery({
//     queryKey: ["riders", "pending"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/riders");
//       return res.data;
//     },
//   });
//   return (
//     <div>
//       <h1 className="text-3xl">Rider Pending Approval : {riders.length}</h1>
//     </div>
//   );
// };

// export default ApproveRiders;
