import React from "react";
import logo from "../../../assets/images/logo.png";
import { MdArrowOutward } from "react-icons/md";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#CAEB66] rounded-full font-semibold"
              : `font-semibold`
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#CAEB66] rounded-full font-semibold"
              : `font-semibold`
          }
          to="/coverage"
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#CAEB66] rounded-full font-semibold"
              : `font-semibold`
          }
          to="/about-us"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#CAEB66] rounded-full font-semibold"
              : `font-semibold`
          }
          to="/pricing"
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#CAEB66] rounded-full font-semibold"
              : `font-semibold`
          }
          to="/be-a-rider"
        >
          Be a Rider
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm rounded-2xl px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-end">
            <img className=" w-[26px]" src={logo} alt="logo" />
            <h1 className="font-extrabold text-xl -ms-2.5 -mb-1 ">ZapShift</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <Link onClick={handleLogOut} className="btn">
              Log Out
            </Link>
          ) : (
            <Link to="/login" className="btn">
              Sign In
            </Link>
          )}
          <Link to="/be-a-rider" className="btn bg-[#CAEB66]">
            Be a Rider
          </Link>
          <a className="cursor-pointer bg-black w-8 h-8 rounded-full relative ">
            <MdArrowOutward className="text-[#CAEB66] absolute top-2 left-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
