import React from "react";
import errorImg from "../../../assets/images/error.png";
import { Link } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto ">
      <NavBar></NavBar>
      <div className=" bg-white rounded-2xl p-10 text-center my-5">
        <img className="mx-auto" src={errorImg} alt="" />
        <Link to="/" className="btn bg-[#CAEB66]">
          Go Home
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
