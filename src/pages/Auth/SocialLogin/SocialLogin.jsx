import React from "react";
import google from "../../../assets/images/icon-google.png";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SocialLogin = () => {
  const { signInGoogle } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  console.log("In the Social Page Navigate ", navigate);
  const location = useLocation();
  console.log("In the Social Page Location ", location);
  const handleSignInGoogle = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
        // navigate(location?.state || "/");
        //  create user in the database
        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        };
        axiosSecure.post("/zap_users", userInfo).then((res) => {
          console.log("User data has been stored", res.data);
          navigate(location?.state || "/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="divider text-gray-400">OR</div>
      <button
        onClick={handleSignInGoogle}
        className="btn btn-outline border-[#CAEB66] hover:bg-[#CAEB66] w-full bg-[#E9ECF1]"
      >
        <img src={google} alt="" className="w-5 h-5 mr-2" />
        Register with Google
      </button>
    </div>
  );
};

export default SocialLogin;
