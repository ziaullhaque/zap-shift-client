import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForgot = (data) => {
    console.log("Reset link sent to:", data.email);
  };

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg w-full max-w-md p-8 border border-gray-100">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
        Forgot Password
      </h2>
      <p className="mb-6 text-gray-600">
        Enter your email to receive a password reset link.
      </p>

      <form onSubmit={handleSubmit(handleForgot)} className="space-y-3">
        <label className="font-semibold">Email</label>
        <input
          type="email"
          placeholder="Email Address"
          {...register("email", { required: true })}
          className="w-full px-4 py-3 border rounded-md focus:outline-none 
          focus:ring-2 focus:ring-[#CAEB66] text-gray-800 placeholder-gray-400"
        />
        {errors.email && <p className="text-red-500">Email is required.</p>}

        <button
          type="submit"
          className="w-full bg-[#CAEB66] font-semibold hover:opacity-95 
          py-3 rounded-md transition"
        >
          Send Reset Link
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

export default ForgotPassword;

// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router";
// import useAuth from "../../../hooks/useAuth";

// const ForgotPassword = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const { resetEmail } = useAuth();

//   const onSubmit = (data) => {
//     resetEmail(data.email)
//       .then(() => alert("Reset email sent!"))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="w-full flex justify-center">
//       <div className="w-full max-w-md">
//         <div className="bg-white/95 border border-gray-200 rounded-2xl shadow-xl p-8 md:p-10">
//           <h2 className="text-3xl font-extrabold text-gray-800">
//             Reset Password
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Enter your email to receive a reset link
//           </p>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <div>
//               <label className="text-sm font-semibold">Email</label>
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 {...register("email", { required: true })}
//                 className="input-field"
//               />
//               {errors.email && <p className="error-text">Email is required.</p>}
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="primary-btn"
//             >
//               {isSubmitting ? "Sending..." : "Send Reset Link"}
//             </button>
//           </form>

//           <p className="text-sm text-gray-600 mt-6 text-center">
//             Back to
//             <Link
//               to="/login"
//               className="text-[#03373d] ml-1 font-semibold hover:underline"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

// // import React from "react";

// // import formImg from "../../../assets/images/authImage.png";
// // import { FaEye } from "react-icons/fa";
// // import { IoEyeOff } from "react-icons/io5";
// // import { Link } from "react-router";

// // const ForgetPassword = () => {
// //   return (
// //     <div>
// //       <div className="min-h-screen flex flex-col md:flex-row transition-colors duration-500 my-5">
// //         {/* left side form */}
// //         <div className="flex flex-1 justify-center items-center p-6  bg-[#FFFFFF]  rounded-l-xl rounded-l-xl p-20">
// //           <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg w-full max-w-md p-8 border border-gray-100 ">
// //             <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
// //               Forgot Password
// //             </h2>
// //             <p className="mb-6">
// //               Enter your email address and we'll send you a reset link.
// //             </p>

// //             <form
// //               //   onSubmit={handleLogin}
// //               className="space-y-2"
// //             >
// //               <label className="font-semibold">Email</label>
// //               <div>
// //                 <input
// //                   type="email"
// //                   placeholder="Email"
// //                   name="email"
// //                   // ref={emailRef}
// //                   className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400 "
// //                   required
// //                 />
// //               </div>

// //               <button
// //                 type="submit"
// //                 className="w-full bg-[#CAEB66] font-semibold hover:opacity-95 py-3 rounded-md transition duration-200 cursor-pointer"
// //               >
// //                 Send
// //               </button>
// //             </form>

// //             <div className="text-sm mt-6">
// //               <p className="text-gray-600">
// //                 Don’t have any account?
// //                 <Link
// //                   to="/login"
// //                   className="text-[#8FA748] hover:underline font-semibold ml-2"
// //                 >
// //                   Login
// //                 </Link>
// //               </p>
// //             </div>
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

// // export default ForgetPassword;
