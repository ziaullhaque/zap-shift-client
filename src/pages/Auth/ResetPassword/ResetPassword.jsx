import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { useParams, Link } from "react-router";

const ResetPassword = () => {
  const { token } = useParams();
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleReset = (data) => {
    console.log("Reset Password:", data, "Token:", token);
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg w-full max-w-md p-8 border border-gray-100">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
        Reset Password
      </h2>

      <form onSubmit={handleSubmit(handleReset)} className="space-y-3">
        <label className="font-semibold">New Password</label>
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            placeholder="New Password"
            {...register("password", { required: true, minLength: 6 })}
            className="w-full px-4 py-3 border rounded-md focus:ring-2 
            focus:ring-[#CAEB66] placeholder-gray-400"
          />

          <span
            onClick={() => setShow(!show)}
            className="absolute right-4 top-3 cursor-pointer"
          >
            {show ? <FaEye /> : <IoEyeOff />}
          </span>
        </div>

        {errors.password && (
          <p className="text-red-500">Minimum 6 characters required.</p>
        )}

        <button
          type="submit"
          className="w-full bg-[#CAEB66] font-semibold hover:opacity-95 
          py-3 rounded-md transition"
        >
          Reset Password
        </button>
      </form>

      <p className="text-sm mt-6 text-gray-600">
        Back to
        <Link
          to="/login"
          className="text-[#8FA748] hover:underline ml-1 font-semibold"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { FaEye } from "react-icons/fa";
// import { IoEyeOff } from "react-icons/io5";

// const ResetPassword = () => {
//   const [show, setShow] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const handleReset = (data) => {
//     console.log("New password:", data.password);
//     alert("Password successfully reset!");
//   };

//   return (
//     <div className="w-full flex justify-center">
//       <div className="w-full max-w-md">
//         <div className="bg-white/95 border border-gray-200 rounded-2xl shadow-xl p-8 md:p-10">
//           <h2 className="text-3xl font-extrabold text-gray-800">
//             Set New Password
//           </h2>
//           <p className="text-gray-600 mb-6">Enter your new password below</p>

//           <form onSubmit={handleSubmit(handleReset)} className="space-y-4">
//             <div>
//               <label className="text-sm font-semibold">New Password</label>
//               <div className="relative">
//                 <input
//                   type={show ? "text" : "password"}
//                   placeholder="••••••••"
//                   {...register("password", { required: true, minLength: 6 })}
//                   className="input-field"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShow(!show)}
//                   className="absolute right-3 top-3 text-gray-500"
//                 >
//                   {show ? <FaEye /> : <IoEyeOff />}
//                 </button>
//               </div>

//               {errors.password?.type === "required" && (
//                 <p className="error-text">Password is required.</p>
//               )}
//               {errors.password?.type === "minLength" && (
//                 <p className="error-text">At least 6 characters required.</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="primary-btn"
//             >
//               {isSubmitting ? "Updating..." : "Update Password"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;

// // import React, { useState } from "react";
// // import formImg from "../../../assets/images/authImage.png";
// // import { FaEye } from "react-icons/fa";
// // import { IoEyeOff } from "react-icons/io5";

// // const ResetPassword = () => {
// //   const [show, setShow] = useState(false);
// //   return (
// //     <div>
// //       <div className="min-h-screen flex flex-col md:flex-row transition-colors duration-500 my-5">
// //         {/* left side form */}
// //         <div className="flex flex-1 justify-center items-center p-6  bg-[#FFFFFF]  rounded-l-xl rounded-l-xl p-20">
// //           <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg w-full max-w-md p-8 border border-gray-100 ">
// //             <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
// //               Reset Password
// //             </h2>
// //             <p className="mb-6">Reset your password</p>

// //             <form
// //               //   onSubmit={handleLogin}
// //               className="space-y-2"
// //             >
// //               <label className="font-semibold">New Password</label>
// //               <div className="relative">
// //                 <input
// //                   required
// //                   type={show ? "text" : "password"}
// //                   name="password"
// //                   placeholder="••••••••"
// //                   className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800  placeholder-gray-400 "
// //                 />
// //                 <span
// //                   onClick={() => setShow(!show)}
// //                   className="absolute right-[15px] top-[16px] cursor-pointer text-gray-600"
// //                 >
// //                   {show ? <FaEye /> : <IoEyeOff />}
// //                 </span>
// //               </div>
// //               <label className="font-semibold">Confirm Password</label>
// //               <div className="relative">
// //                 <input
// //                   required
// //                   type={show ? "text" : "password"}
// //                   name="password"
// //                   placeholder="••••••••"
// //                   className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800  placeholder-gray-400 "
// //                 />
// //                 <span
// //                   onClick={() => setShow(!show)}
// //                   className="absolute right-[15px] top-[16px] cursor-pointer text-gray-600"
// //                 >
// //                   {show ? <FaEye /> : <IoEyeOff />}
// //                 </span>
// //               </div>
// //               <button
// //                 type="submit"
// //                 className="w-full bg-[#CAEB66] font-semibold hover:opacity-95 py-3 rounded-md transition duration-200 cursor-pointer"
// //               >
// //                 Reset Password
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //         {/* right side image */}
// //         <div className="hidden md:flex md:w-1/2 justify-center items-center  bg-[#F8FBEE] rounded-tr-xl rounded-br-xl">
// //           <img
// //             src={formImg}
// //             alt="illustration"
// //             className="max-w-[80%] h-auto object-contain"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ResetPassword;
