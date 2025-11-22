import React from "react";
import {
  FaClock,
  FaBox,
  FaTruckMoving,
  FaTruckLoading,
  FaCheckCircle,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardOverview = () => {
  const summaryCards = [
    { title: "To Pay", count: 129, icon: <FaClock size={22} /> },
    { title: "Ready Pick Up", count: 1325, icon: <FaBox size={22} /> },
    { title: "In Transit", count: 50, icon: <FaTruckMoving size={22} /> },
    { title: "Ready to Deliver", count: 50, icon: <FaTruckLoading size={22} /> },
    { title: "Delivered", count: 50, icon: <FaCheckCircle size={22} /> },
  ];

  const chartData = [
    { day: "Mon", value: 50 },
    { day: "Tue", value: 70 },
    { day: "Wed", value: 55 },
    { day: "Thu", value: 90 },
    { day: "Fri", value: 80 },
    { day: "Sat", value: 150 },
    { day: "Sun", value: 40 },
  ];

  return (
    <div className="p-5 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {summaryCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-xl shadow flex items-center gap-4"
          >
            <div className="text-gray-600">{card.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <p className="text-xl font-bold">{card.count.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="font-semibold mb-3">Overall Statistics</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="value" stroke="#8BC34A" strokeWidth={3} />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardOverview;
