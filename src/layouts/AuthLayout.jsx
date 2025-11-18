import React from "react";
import { Outlet } from "react-router";
import formImg from "../assets/images/authImage.png";
import Logo from "../components/Logo/Logo";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 py-10">
      <div className="w-full max-w-7xl bg-transparent rounded-xl overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row">
          {/* LEFT: form area (mobile full width, desktop half) */}
          <div className="w-full md:w-1/2 bg-white p-6 md:p-12 flex flex-col">
            <div className="mb-6">
              <Logo />
            </div>

            <div className="flex-1">
              <Outlet />
            </div>

            {/* optional footer / small note */}
            <div className="mt-6 text-sm text-center text-gray-500">
              © {new Date().getFullYear()} ZapShift. All rights reserved.
            </div>
          </div>

          {/* RIGHT: illustration (hidden on mobile) */}
          <div className="hidden md:flex md:w-1/2 justify-center items-center bg-[#F8FBEE] p-8">
            <img
              src={formImg}
              alt="illustration"
              className="w-full max-w-[520px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
