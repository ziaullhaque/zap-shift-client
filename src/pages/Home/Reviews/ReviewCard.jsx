import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: message, user_photoURL } = review;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 mx-auto hover:shadow-2xl transition duration-300 max-w-sm">
      <FaQuoteLeft className="text-[#03373d] text-2xl mb-4" />

      <p className="text-gray-700 leading-relaxed mb-4">{message}</p>

      <div className="border-t border-dashed my-4"></div>

      <div className="flex items-center gap-4">
        <img
          src={user_photoURL}
          className="w-12 h-12 rounded-full object-cover border"
          alt={userName}
        />

        <div>
          <h3 className="font-bold text-gray-900">{userName}</h3>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

// import React from "react";
// import { FaQuoteLeft } from "react-icons/fa";

// const ReviewCard = ({ review }) => {
//   const { userName, review: testimonial, user_photoURL } = review;

//   return (
//     <div className="max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-200 mx-auto">
//       <FaQuoteLeft className="text-primary text-2xl mb-4" />

//       <p className="mb-4">{testimonial}</p>

//       <div className="border-t border-dashed border-gray-300 my-4"></div>

//       <div className="flex items-center gap-4">
//         <div className="w-10 h-10 rounded-full overflow-hidden">
//           <img
//             src={user_photoURL}
//             alt={userName}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div>
//           <h3 className="font-semibold text-lg">{userName}</h3>
//           <p className="text-sm text-gray-500">Senior Product Designer</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;

// import React from "react";
// import { FaQuoteLeft } from "react-icons/fa";

// const ReviewCard = ({ review }) => {
//   const { userName, review: testimonial, user_photoURL } = review;
//   return (
//     <div className="max-w-sm bg-base-100 shadow-lg rounded-xl p-6 border border-gray-200">
//       {/* Quote Icon */}
//       <FaQuoteLeft className="text-primary text-2xl mb-4" />

//       {/* Review Text */}
//       <p className="mb-4">{testimonial}</p>

//       {/* Divider */}
//       <div className="border-t border-dashed border-gray-300 my-4"></div>

//       {/* Profile */}
//       <div className="flex items-center gap-4">
//         <div className="w-10 h-10 rounded-full bg-primary">
//           <img src={user_photoURL} alt="" />
//         </div>
//         <div>
//           <h3 className="font-semibold text-lg">{userName}</h3>
//           <p className="text-sm text-gray-500">Senior Product Designer</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewCard;
// import React from 'react';

// const ReviewCard = ({review}) => {
//     const {} = review
//     return (
//         <div>

//         </div>
//     );
// };

// export default ReviewCard;
