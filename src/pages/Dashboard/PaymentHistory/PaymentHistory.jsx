const PaymentHistory = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold text-[#053B2F] mb-6">
        Payment History
      </h2>

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
                <td>Chittagong, Bangladesh</td>
                <td>548523</td>
                <td>৳120 (Paid)</td>
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
