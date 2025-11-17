import { motion } from "framer-motion";
import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer:
        "It keeps your shoulders aligned properly and reduces back strain so you maintain a natural posture.",
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer: "Yes, the adjustable straps make it suitable for everyone.",
    },
    {
      question: "Does it improve back pain?",
      answer:
        "Yes, consistent use reduces muscle tension and improves posture.",
    },
    {
      question: "Does it have smart vibration alerts?",
      answer: "Some premium versions include vibration reminders.",
    },
    {
      question: "How will I be notified when it's back in stock?",
      answer: "You will receive an email or SMS notification.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <FaQuestionCircle className="text-[#03373d] text-5xl mx-auto mb-4" />

        <h2 className="text-4xl font-extrabold text-[#03373d]">
          Frequently Asked Question (FAQ)
        </h2>

        <p className="text-[#606060] max-w-xl mx-auto mt-2">
          Clear answers to your most common questions.
        </p>
      </motion.div>

      {/* FAQ List */}
      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-md rounded-xl border hover:bg-[#E6F2F3]"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 font-semibold text-gray-800"
            >
              {faq.question}

              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                className="text-xl"
              >
                ▼
              </motion.span>
            </button>
          
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="px-5 pb-4 text-gray-600"
              >
                
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-10">
        <button className="btn bg-[#CAEB66]">See More FAQ's</button>

        <button className="bg-black w-10 h-10 rounded-full relative">
          <MdArrowOutward className="text-[#CAEB66] absolute top-2 left-2 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Faq;

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { FaQuestionCircle } from "react-icons/fa";
// import { MdArrowOutward } from "react-icons/md";

// const Faq = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     {
//       question: "How does this posture corrector work?",
//       answer:
//         "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
//     },
//     {
//       question: "Is it suitable for all ages and body types?",
//       answer: "",
//     },
//     {
//       question: "Does it really help with back pain and posture improvement?",
//       answer: "",
//     },
//     {
//       question: "Does it have smart features like vibration alerts?",
//       answer: "",
//     },
//     {
//       question: "How will I be notified when the product is back in stock?",
//       answer: "",
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center px-6 py-16  transition-all duration-500 ">
//       {/* Header */}
//       {/* bg-gradient-to-br from-[#F6F4FF] via-[#EEE9FF] to-[#E4DEFF] dark:from-[#12121A] dark:via-[#1E1E2A] dark:to-[#2C2C3A] */}
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-center mb-12"
//       >
//         <FaQuestionCircle className="text-[#03373d] text-5xl mx-auto mb-4" />
//         <h2 className="text-4xl font-extrabold mb-3 text-[#03373d]">
//           Frequently Asked Question (FAQ)
//         </h2>
//         <p className="text-[#606060] max-w-xl mx-auto">
//           Enhance posture, mobility, and well-being effortlessly with Posture
//           Pro. Achieve proper alignment, reduce pain, and strengthen your body
//           with ease!
//         </p>
//       </motion.div>

//       {/* FAQ Section */}
//       <div className="w-full max-w-3xl space-y-4">
//         {faqs.map((faq, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1, duration: 0.5 }}
//             className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:bg-[#E6F2F3]"
//           >
//             <button
//               className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold text-gray-800  focus:outline-none "
//               onClick={() => toggleFAQ(index)}
//             >
//               {faq.question}
//               <motion.span
//                 animate={{ rotate: activeIndex === index ? 180 : 0 }}
//                 transition={{ duration: 0.3 }}
//                 className=" text-xl"
//               >
//                 ▼
//               </motion.span>
//             </button>
//             {/* <div className="border-t-2 border-dashed border-gray-400"></div> */}
//             {activeIndex === index && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="px-5 pb-4 text-gray-600 border-t-1 border-dashed border-gray-400"
//               >
//                 {faq.answer}
//               </motion.div>
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {/* Contact Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="mt-16 text-center"
//       >
//         <div className="navbar-end gap-3">
//           <button className="btn bg-[#CAEB66]">See More FAQ's</button>
//           <button className="cursor-pointer bg-[#03373d] w-8 h-8 rounded-full relative ">
//             <MdArrowOutward className="text-[#CAEB66] absolute top-2 left-2" />
//           </button>
//         </div>
//         {/* <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//           Still need help?
//         </h3>
//         <p className="text-gray-600 mb-4">
//           Reach out to our support team anytime.
//         </p>
//         <a
//           href="mailto:support@utilitybills.com"
//           className="inline-block bg-gradient-to-r from-[#7A6AE0] to-[#9E8FF5] hover:from-[#6957DB] hover:to-[#8C7BF0] text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
//         >
//           Contact Support
//         </a> */}
//       </motion.div>
//     </div>
//   );
// };

// export default Faq;
