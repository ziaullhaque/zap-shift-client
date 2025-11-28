import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState("");
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users" ,searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/zap_users?searchText=${searchText}`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Make ${user.displayName} an Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        const roleInfo = { role: "admin" };

        axiosSecure
          .patch(`/zap_users/${user._id}/role`, roleInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount) {
              refetch();
              Swal.fire({
                title: `${user.displayName} is now an Admin.`,
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
              });
            }
          });
      }
    });
  };

  const handleRemoveAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Remove Admin role from ${user.displayName}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        const roleInfo = { role: "user" };

        axiosSecure
          .patch(`/zap_users/${user._id}/role`, roleInfo)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount) {
              refetch();
              Swal.fire({
                title: `${user.displayName} is no longer an Admin.`,
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
              });
            }
          });
      }
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mx-5 my-10">
      <h2 className="text-3xl font-bold mb-4">Manage Users : {users.length}</h2>
      <p className=" font-bold mb-4"> Search : {searchText}</p>
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="grow"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Actions</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  {user.email}
                  {/* <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span> */}
                </td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn mx-3 "
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn "
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
