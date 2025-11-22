import React from "react";
import { FaClock, FaBoxOpen, FaMoneyCheckAlt } from "react-icons/fa";

const AllDeliveries = () => {
  const stats = [
    { title: "Total", value: 129, icon: <FaBoxOpen size={22} /> },
    { title: "Return", value: 1325, icon: <FaClock size={22} /> },
    { title: "Paid Return", value: 50, icon: <FaMoneyCheckAlt size={22} /> },
  ];

  const deliveries = [
    {
      id: "#PTD 145142547",
      store: "Rafa Enterprise",
      name: "Shakil",
      address: "Shamoli, Dhaka",
      status: "Paid Return",
      time: "1 day ago",
      payment: "Unpaid",
    },
    {
      id: "#PTD 145142547",
      store: "Rafa Enterprise",
      name: "Anika",
      address: "Uttara, Dhaka",
      status: "Delivered",
      time: "1 day ago",
      payment: "Paid",
    },
    {
      id: "#PTD 145142547",
      store: "Rafa Enterprise",
      name: "Rameez",
      address: "Mirpur, Dhaka",
      status: "Pending",
      time: "2 days ago",
      payment: "Pending",
    },
  ];

  return (
    <div className="p-5 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow flex items-center gap-4"
          >
            <div className="text-gray-600">{s.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{s.title}</p>
              <p className="text-xl font-bold">{s.value.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white p-5 rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-3">Cons. ID</th>
              <th>Store</th>
              <th>Recipient Info</th>
              <th>Delivery Status</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((d, index) => (
              <tr key={index} className="border-b">
                <td className="py-3">{d.id}</td>
                <td>{d.store}</td>
                <td>
                  {d.name}
                  <br />
                  <span className="text-gray-500">{d.address}</span>
                </td>
                <td className="font-semibold text-green-600">{d.status}</td>
                <td>{d.payment}</td>
                <td className="flex gap-2">
                  <button className="bg-green-200 px-4 py-1 rounded-lg">
                    Pay
                  </button>
                  <button className="bg-blue-200 px-4 py-1 rounded-lg">
                    View
                  </button>
                  <button className="bg-red-200 px-4 py-1 rounded-lg">
                    Delete
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

export default AllDeliveries;
