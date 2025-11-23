import React, { useState } from "react";
import profile from "../../../assets/images/image-upload-icon.png";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Registration = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const { registerUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  console.log("In the Registration Page Navigate ", navigate);
  const location = useLocation();
  console.log("In the Registration Page Location ", location);

  const handleRegistration = (data) => {
    console.log(" After Register ", data);
    console.log(" After Register ", data.photo[0]);

    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // 1. store the image in form data
        const formData = new FormData();
        formData.append("image", profileImg);
        // 2. send the photo to store and get the photo url
        const image_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios.post(image_API_URL, formData).then((res) => {
          console.log("After Image Upload", res);
          console.log("After Image Upload", res.data);
          console.log("After Image Upload", res.data.data.url);
          const photoURL = res.data.data.url;
          //  create user in the database
          const userInfo = {
            email : data.email,
            displayName : data.name,
            photoURL: photoURL,

          }
          axiosSecure.post("/zap_users" ,userInfo)
          .then(res =>{ 
            if(res.data.insertedId){
              console.log("User created in the database")
            }
          });

          // 3. update user profile to firebase
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };
          updateUserProfile(userProfile)
            .then((result) => {
              console.log("User Profile Update Done", result);
              navigate(location.state || "/");
            })
            .catch((error) => {
              console.log(error);
            }); 
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="w-full flex justify-center">
        {/* flex flex-col md:flex-row transition-colors duration-500 */}
        <div className="w-full max-w-md">
          {/* flex flex-1 justify-center items-center p-6  bg-[#FFFFFF] rounded-l-xl rounded-l-xl p-20  */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
            {/* bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg w-full max-w-md p-8 border border-gray-100 space-y-5 */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
              Create an Account
            </h2>
            <p className="text-gray-600 mb-6">Register With ZapShift</p>
            <div className="mb-4">
              <img src={profile} alt="upload icon" className="object-contain" />
            </div>
            <form
              onSubmit={handleSubmit(handleRegistration)}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400"
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">Name is required.</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Photo
                </label>
                <input
                  type="file"
                  placeholder="Photo"
                  name="photo"
                  {...register("photo", { required: true })}
                  className="file-input w-full"
                  aria-invalid={errors.photo ? "true" : "false"}
                />
                {errors.photo && (
                  <p className="text-sm text-red-500 mt-1">
                    Photo is required.
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", { required: true })}
                  className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800 0 placeholder-gray-400"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    Email is required.
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
                    })}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CAEB66] text-gray-800  placeholder-gray-400"
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-3 text-gray-600"
                    aria-label={show ? "Hide password" : "Show password"}
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </button>
                  {errors.password?.type === "required" && (
                    <p className="text-sm text-red-500 mt-1">
                      Password is required.
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-sm text-red-500 mt-1">
                      Password must be 6 characters or longer.
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-sm text-red-500 mt-1">
                      Password must include uppercase, lowercase, number and
                      special character.
                    </p>
                  )}
                  {/* <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[15px] top-[16px] cursor-pointer text-gray-600"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span> */}
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#CAEB66] hover:opacity-95 py-3 rounded-md font-semibold transition"
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </form>
            <div className="text-sm mt-6">
              <p className="text-gray-600">
                Don’t have any account?
                <Link
                  state={location.state}
                  to="/login"
                  className="text-[#03373d]  hover:underline font-semibold ml-2"
                >
                  Login
                </Link>
              </p>
            </div>
            <div className="mt-4">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
