import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../../../assets/images/logo.png";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center p-10 rounded-2xl bg-black text-white">
        <aside className="space-y-5">
          {/* Logo */}
          <div className="flex items-end gap-1">
            <img className=" w-[26px]" src={logo} alt="logo" />
            <h1 className="font-extrabold text-xl -ms-2.5 -mb-1 ">ZapShift</h1>
          </div>
          <p className="font-bold">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to
            <br />
            business shipments — we deliver on time, every time.
          </p>
          <ul className="flex gap-5">
            <li>
              <NavLink to="/">Services</NavLink>
            </li>
            <li>
              <NavLink to="/">Coverage</NavLink>
            </li>
            <li>
              <NavLink to="/">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
          <div className="grid grid-flow-col gap-4">
            <a className="" href="www..com">
              <FaLinkedin />
            </a>
            <a className="" href="www..com">
              <FaSquareXTwitter />
            </a>
            <a className="" href="www..com">
              <FaSquareFacebook />
            </a>
            <a className="" href="www..com">
              <IoLogoYoutube />
            </a>
          </div>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav></nav>
      </footer>
    </div>
  );
};

export default Footer;
