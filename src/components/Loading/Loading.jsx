import Lottie from "lottie-react";
import loadingAnimation from "../../../src/assets/json/loading.json";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="max-w-sm relative">
        <div className="w-60">
          <Lottie
            animationData={loadingAnimation}
            autoplay={true}
            loop={false}
          />
        </div>
        <Lottie
          options={{
            animationData: loadingAnimation,
            autoplay: true,
            loop: true,
          }}
        ></Lottie>
      </div>
    </div>
  );
};

export default Loading;
