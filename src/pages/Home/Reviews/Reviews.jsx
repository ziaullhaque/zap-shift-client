import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import ReviewCard from "./ReviewCard";
import reviewImg from "../../../assets/images/customer-top.png";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div className="py-10">
      <div className="text-center px-5 md:px-20 pb-10 space-y-3">
        <img className="mx-auto w-40" src={reviewImg} alt="top-icon" />

        <h3 className="text-2xl font-bold text-[#03373d]">
          What our customers are saying
        </h3>

        <p className="text-[#606060] max-w-2xl mx-auto">
          Enhance posture, mobility and well-being effortlessly.
        </p>
      </div>

      <Swiper
        loop
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1.15}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.3 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 25,
          stretch: 100,
          depth: 180,
          modifier: 1,
          scale: 0.9,
          slideShadows: false,
        }}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="pb-12"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="py-8">
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;

// import React, { use } from "react";
// import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import ReviewCard from "./ReviewCard";
// import reviewImg from "../../../assets/images/customer-top.png";

// const Reviews = ({ reviewsPromise }) => {
//   const reviews = use(reviewsPromise);

//   return (
//     <div className="">
//       {/* Header Section */}
//       <div className="text-center px-5 md:px-20 pb-10 space-y-3">
//         <img className="mx-auto w-40" src={reviewImg} alt="top-icon" />
//         <h3 className="text-xl md:text-2xl font-bold text-[#03373d]">
//           What our customers are sayings
//         </h3>
//         <p className="text-[#606060] max-w-2xl mx-auto">
//           Enhance posture, mobility, and well-being effortlessly with Posture
//           Pro.
//         </p>
//       </div>

//       {/* Swiper Slider */}
//       <Swiper
//         loop={true}
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={1.15}
//         breakpoints={{
//           640: { slidesPerView: 1.5 },
//           768: { slidesPerView: 2.3 },
//           1024: { slidesPerView: 3 },
//         }}
//         coverflowEffect={{
//           rotate: 25,
//           stretch: 100,
//           depth: 180,
//           modifier: 1,
//           scale: 0.9,
//           slideShadows: false,
//         }}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         modules={[EffectCoverflow, Pagination, Autoplay]}
//         className="mySwiper pb-12"
//       >
//         {reviews.map((review) => (
//           <SwiperSlide key={review.id} className="py-8">
//             <ReviewCard review={review} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Reviews;

// import React, { use } from "react";
// import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import ReviewCard from "./ReviewCard";
// import reviewImg from "../../../assets/images/customer-top.png";

// const Reviews = ({ reviewsPromise }) => {
//   const reviews = use(reviewsPromise);
//   console.log(reviews);
//   return (
//     <div className="">
//       <div className="text-center px-20 pb-10 space-y-3">
//         <div>
//           <img className="mx-auto w-35" src={reviewImg} alt="" />
//         </div>
//         <h3 className="text-xl text-center font-bold text-[#03373d]">
//           What our customers are sayings
//         </h3>
//         <p className="text-[#606060]">
//           Enhance posture, mobility, and well-being effortlessly with Posture
//           Pro. Achieve proper alignment, reduce pain, and strengthen your body
//           with ease!
//         </p>
//       </div>

//       <Swiper
//         loop={true}
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={3}
//         coverflowEffect={{
//           rotate: 30,
//           stretch: "50%",
//           depth: 200,
//           modifier: 1,
//           scale: 0.75,
//           slideShadows: true,
//         }}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {reviews.map((review) => (
//           <SwiperSlide key={review.id}>
//             <ReviewCard review={review}></ReviewCard>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Reviews;
// import React, { use } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { EffectCoverflow, Pagination } from "swiper/modules";
// import ReviewCard from "./ReviewCard";

// const Reviews = ({ reviewsPromise }) => {
//   const reviews = use(reviewsPromise);
//   console.log(reviews);
//   return (
//     <div>
//       <div></div>
//       <div>
//         <>
//           <Swiper
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={"auto"}
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             pagination={true}
//             modules={[EffectCoverflow, Pagination]}
//             className="mySwiper"
//           >
//             {reviews.map((review) => (
//               <SwiperSlide key={review.id}>
//                 <ReviewCard review={review}></ReviewCard>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </>
//       </div>
//     </div>
//   );
// };

// export default Reviews;
