import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { CiDeliveryTruck } from "react-icons/ci";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open max-w-7xl mx-auto">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4">Zap Shift Dashboard</div>
          </nav>
          {/* Page content here */}
          <Outlet></Outlet>
          {/* <div className="p-4">Page Content</div> */}
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow">
              {/* List item */}
              <li>
                <Link
                  to="/"
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                  <span className="is-drawer-close:hidden">Homepage</span>
                </Link>
              </li>
              {/* our dashboard links */}
              <li>
                <NavLink
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Dashboard Overview"
                  to="/dashboard/dashboard-overview"
                >
                  <CiDeliveryTruck />
                  <span className="is-drawer-close:hidden">
                    {" "}
                    Dashboard Overview
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="My Parcels"
                  to="/dashboard/my-parcels"
                >
                  <CiDeliveryTruck />
                  <span className="is-drawer-close:hidden"> My Parcels</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Parcel Details"
                  to="/dashboard/parcel-details"
                >
                  <CiDeliveryTruck />
                  <span className="is-drawer-close:hidden">Parcel Details</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Manage Parcels"
                  to="/dashboard/manage-parcels"
                >
                  <CiDeliveryTruck />
                  <span className="is-drawer-close:hidden">Manage Parcels</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Payment History"
                  to="/dashboard/payment-history"
                >
                  <CiDeliveryTruck />
                  <span className="is-drawer-close:hidden">
                    Payment History
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="All Deliveries"
                  to="/dashboard/all-deliveries"
                >
                  <CiDeliveryTruck />
                  <span className="is-drawer-close:hidden">All Deliveries</span>
                </NavLink>
              </li>
              {/* List item */}
              <li>
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  {/* Settings icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                  <span className="is-drawer-close:hidden">Settings</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import {
//   LuHome,
//   LuPackageSearch,
//   LuListChecks,
//   LuClock,
//   LuUserCog,
//   LuLogOut,
// } from "react-icons/lu";

// const DashboardLayout = () => {
//   return (
//     <div className="drawer lg:drawer-open bg-[#F4F7F9] min-h-screen">
//       <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

//       {/* MAIN CONTENT */}
//       <div className="drawer-content flex flex-col">
//         {/* NAVBAR */}
//         <div className="w-full bg-white shadow-sm p-3 flex items-center justify-between">
//           <label
//             htmlFor="dashboard-drawer"
//             className="btn btn-ghost lg:hidden btn-square"
//           >
//             ☰
//           </label>

//           <h2 className="text-xl font-semibold text-[#053B2F]">
//             ZapShift Dashboard
//           </h2>

//           <div className="avatar">
//             <div className="w-10 rounded-full ring ring-[#C7EB63] ring-offset-base-200">
//               <img src="https://i.ibb.co/F6MxZbF/user.png" alt="user" />
//             </div>
//           </div>
//         </div>

//         {/* PAGE CONTENT */}
//         <div className="p-4">
//           <Outlet />
//         </div>
//       </div>

//       {/* SIDEBAR */}
//       <div className="drawer-side z-50">
//         <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

//         <aside className="bg-white w-72 h-full p-5 border-r flex flex-col">
//           <h1 className="text-2xl font-bold text-[#053B2F] mb-10">ZapShift</h1>

//           {/* NAV LINKS */}
//           <nav className="flex flex-col gap-3 text-base font-medium">

//             <NavLink
//               to="/dashboard"
//               className={({ isActive }) =>
//                 `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 ${
//                   isActive ? "bg-gray-200 font-semibold" : ""
//                 }`
//               }
//             >
//               <LuHome size={20} /> Dashboard
//             </NavLink>

//             <NavLink
//               to="/dashboard/manage-parcels"
//               className={({ isActive }) =>
//                 `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 ${
//                   isActive ? "bg-gray-200 font-semibold" : ""
//                 }`
//               }
//             >
//               <LuPackageSearch size={20} /> Manage Parcels
//             </NavLink>

//             <NavLink
//               to="/dashboard/all-parcels"
//               className={({ isActive }) =>
//                 `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 ${
//                   isActive ? "bg-gray-200 font-semibold" : ""
//                 }`
//               }
//             >
//               <LuListChecks size={20} /> All Deliveries
//             </NavLink>

//             <NavLink
//               to="/dashboard/payment-history"
//               className={({ isActive }) =>
//                 `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 ${
//                   isActive ? "bg-gray-200 font-semibold" : ""
//                 }`
//               }
//             >
//               <LuClock size={20} /> Payment History
//             </NavLink>

//             <NavLink
//               to="/dashboard/settings"
//               className={({ isActive }) =>
//                 `flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 ${
//                   isActive ? "bg-gray-200 font-semibold" : ""
//                 }`
//               }
//             >
//               <LuUserCog size={20} /> Settings
//             </NavLink>

//             {/* LOGOUT */}
//             <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 mt-auto text-red-500">
//               <LuLogOut size={20} /> Logout
//             </button>

//           </nav>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
