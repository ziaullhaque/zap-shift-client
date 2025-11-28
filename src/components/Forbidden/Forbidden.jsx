import Lottie from "lottie-react";
import forbiddenAnimation from "../../../src/assets/json/forbidden.json";
import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="w-60 mb-10">
        <Lottie
          animationData={forbiddenAnimation}
          autoplay={true}
          loop={false}
        />
        {/* <Lottie
          options={{
            loop: false,
            autoplay: true,
            animationData: forbiddenAnimation,
          }}
          height={200}
          width={200}
        ></Lottie> */}
      </div>

      <h1 className="text-3xl font-bold text-red-500">
        You Are Forbidden to Access This Page
      </h1>

      <p className="text-lg text-gray-600 mt-2">
        Please contact the administrator if you believe this is an error.
      </p>

      <div className="my-3 space-x-3">
        <Link to="/" className="btn bg-[#CAEB66] text-black">
          Go to Home
        </Link>
        <Link className="btn text-white bg-[#053B2F]" to="/dashboard">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
