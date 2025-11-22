import {
  HiOutlineClock,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const ManageParcels = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold text-[#053B2F] mb-6">Manage Parcel</h2>

      {/* STATUS CARDS */}
      <div className="grid md:grid-cols-5 gap-4 mb-6">
        {[
          ["Unpaid", 129, <HiOutlineClock />],
          ["Ready Pick Up", 1325, <HiOutlineCube />],
          ["In Transit", 50, <HiOutlineTruck />],
          ["Ready to Deliver", 50, <HiOutlineTruck />],
          ["Delivered", 50, <HiOutlineCheckCircle />],
        ].map(([title, count, icon], i) => (
          <div
            key={i}
            className="bg-[#F4F7F9] p-4 rounded-xl flex items-center gap-3"
          >
            <div className="text-[#053B2F] text-2xl">{icon}</div>
            <div>
              <p className="font-bold">{count}</p>
              <p className="text-sm">{title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-[#F4F7F9]">
            <tr>
              <th>Parcel Info</th>
              <th>Recipient Info</th>
              <th>Tracking Number</th>
              <th>Payment Info</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4].map((row) => (
              <tr key={row}>
                <td>Liquid Cleanser</td>
                <td>Dhaka, Bangladesh</td>
                <td>548523</td>
                <td>৳ 120 (Paid)</td>
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

export default ManageParcels;
