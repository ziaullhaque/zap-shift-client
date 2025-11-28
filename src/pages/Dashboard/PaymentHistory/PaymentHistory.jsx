import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mx-5 my-10">
      <h2 className="text-3xl font-bold text-[#053B2F] mb-6">
        Payment History : {payments.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead className="bg-[#F4F7F9]">
            <tr>
              <th>#</th>
              <th>Parcel Info</th>
              <th>Recipient Info</th>
              <th>Tracking Number</th>
              <th>Transaction Id</th>
              <th>Payment Info</th>
              <th>Paid Time</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>Liquid Cleanser</td>
                <td>Chittagong, Bangladesh</td>
                <td>548523</td>
                <td>{payment.transactionId}</td>
                <td>${payment.amount}</td>
                <td>{payment.paidAt}</td>
                <td>
                  <button className="btn btn-sm bg-[#C7EB63] text-[#053B2F]">
                    View
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

export default PaymentHistory;
