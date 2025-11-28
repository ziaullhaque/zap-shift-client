import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignedDeliveries = () => {
  const { user } = useAuth();
  // console.log({ user });
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`
      );
      return res.data;
    },
  });

  const handleDeliveryStatusUpdate = (parcel, status) => {
    const statusInfo = { 
      deliveryStatus: status,
      riderId:parcel.riderId,
      trackingId:parcel.trackingId
     };
    let massage = `Parcel Status is update with ${status.split("_").join(" ")}`;
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            title: massage,
            showConfirmButton: false,
            icon: "success",
            timer: 2500,
          });
        }
      });
  };
  return (
    <div>
      <h1>Parcels Pending Pickup: {parcels.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Confirm</th>
              <th>Others Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>
                  {parcel.deliveryStatus === "driver_assigned" ? (
                    <>
                      <button
                        onClick={() =>
                          handleDeliveryStatusUpdate(parcel, "rider_arriving")
                        }
                        className="btn"
                      >
                        Accept
                      </button>
                      <button className="btn ms-2">Reject</button>
                    </>
                  ) : (
                    <span>Accepted</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleDeliveryStatusUpdate(parcel, "parcel_picked_up")
                    }
                    className="btn"
                  >
                    Mark as Picked up
                  </button>
                  <button
                    onClick={() =>
                      handleDeliveryStatusUpdate(parcel, "parcel_delivered")
                    }
                    className="btn ms-2"
                  >
                    Mark as Delivered
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedDeliveries;
