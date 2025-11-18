import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="flex items-end">
      <img className=" w-[26px]" src={logo} alt="logo" />
      <h1 className="font-extrabold text-xl -ms-2.5 -mb-1 ">ZapShift</h1>
    </Link>
  );
};

export default Logo;
