import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  console.log("In the Login Page Navigate ", navigate);
  const location = useLocation();
  console.log("In the Login Page Location ", location);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log("Form Data", data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-gray-100">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="mb-6 text-gray-600">Login With ZapShift</p>

        {/* Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
              className="w-full px-4 py-3 border rounded-md focus:outline-none 
              focus:ring-2 focus:ring-[#CAEB66] text-gray-800 placeholder-gray-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required.</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="font-semibold">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                placeholder="••••••••"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                })}
                className="w-full px-4 py-3 border rounded-md focus:outline-none 
                focus:ring-2 focus:ring-[#CAEB66] placeholder-gray-400"
              />

              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            {/* Errors */}
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm">Password is required.</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm">
                Must be at least 6 characters long.
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500 text-sm">
                Must include uppercase, lowercase, number & special character.
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forget-password"
              className="text-sm text-[#8FA748] hover:underline font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#CAEB66] font-semibold text-gray-900 
            hover:opacity-95 py-3 rounded-md transition"
          >
            Login
          </button>
        </form>

        {/* Register Redirect */}
        <div className="text-sm mt-6 text-center">
          <p className="text-gray-600">
            Don’t have an account?
            <Link
              to="/registration"
              state={location.state}
              className="text-[#03373d] hover:underline font-semibold ml-1"
            >
              Register
            </Link>
          </p>
        </div>

        {/* Social Login */}
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;

// <div>
//   <div className="flex flex-col md:flex-row transition-colors duration-500">
//     {/* left side form */}
//     <div className="flex flex-1 justify-center items-center p-6  bg-[#FFFFFF]  rounded-l-xl rounded-l-xl p-20">
//       <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg w-full max-w-md p-8 border border-gray-100 ">
//         <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
//           Welcome Back
//         </h2>
//         <p className="mb-6">Login With ZapShift</p>

//         <form onSubmit={handleSubmit(handleLogin)} className="space-y-2">
//           <label className="font-semibold">Email</label>
//           <div>
//             <input
//               type="email"
//               placeholder="Email Address"
//               name="email"
//               {...register("email", { required: true })}
//               className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400 "
//               required
//             />
//             {errors.email?.type === "required" && (
//               <p className="text-red-500">Email is required .</p>
//             )}
//           </div>

//           <label className="font-semibold">Password</label>
//           <div className="relative">
//             <input
//               required
//               type={show ? "text" : "password"}
//               name="password"
//               {...register("password", {
//                 required: true,
//                 minLength: 6,
//                 pattern:
//                   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
//               })}
//               placeholder="••••••••"
//               className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800  placeholder-gray-400 "
//             />
//             {errors.password?.type === "required" && (
//               <p className="text-red-500">Password is required .</p>
//             )}
//             {errors.password?.type === "minLength" && (
//               <p className="text-red-500">
//                 Password must be 6 characters or longer
//               </p>
//             )}
//             {errors.password?.type === "pattern" && (
//               <p className="text-red-500">
//                 Password must have at least one uppercase, <br /> at least
//                 one lowercase, at least one number, <br /> and at least one
//                 special characters
//               </p>
//             )}
//             <span
//               onClick={() => setShow(!show)}
//               className="absolute right-[15px] top-[16px] cursor-pointer text-gray-600"
//             >
//               {show ? <FaEye /> : <IoEyeOff />}
//             </span>
//           </div>
//           <div className="">
//             <button
//               //   onClick={handleForgetPassword}
//               className="text-sm text-[#8FA748] hover:underline cursor-pointer"
//             >
//               Forgot Password?
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#CAEB66] font-semibold hover:opacity-95 py-3 rounded-md transition duration-200 cursor-pointer"
//           >
//             Login
//           </button>
//         </form>

//         <div className="text-sm mt-6">
//           <p className="text-gray-600">
//             Don’t have any account?
//             <Link
//               state={location.state}
//               to="/registration"
//               className="text-[#8FA748] hover:underline font-semibold ml-2"
//             >
//               Register
//             </Link>
//           </p>
//         </div>
//         <SocialLogin></SocialLogin>
//       </div>
//     </div>
//   </div>
// </div>
