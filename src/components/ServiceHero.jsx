// import React from "react";
// import { assets } from "../assets/assets";
// import { motion } from "motion/react";

// const ServiceHero = () => {
//   return (
//     <div
//       style={{ backgroundImage: `url(${assets.construction_img})` }}
//       className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden"
//     >
//       <motion.div
//         initial={{
//           borderRadius: "50%",
//           width: "100px",
//           height: "100px",
//           position: "fixed",
//           inset: "0",
//           scale: 0,
//         }}
//         animate={{
//           borderRadius: "0%",
//           width: "100%",
//           height: "100%",
//           position: "fixed",
//           inset: "0",
//           scale: 1,
//           opacity: 1,
//         }}
//         transition={{
//           duration: 2.0,
//           delay: 0.3,
//           ease: [0, 0.71, 0.2, 1.01],
//         }}
//         className="fixed inset-0 bg-black bg-opacity-50 min-h-full"
//       ></motion.div>

//       <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-20 text-white z-10">
//         <h2 className="text-3xl sm:text-4xl md:text-[50px] inline-block max-w-3xl font-semibold mb-14">
//           Comprehensive Real Estate Solutions
//         </h2>
//         <p className="text-xl max-w-xl mx-auto">
//           We offer end-to-end construction services, from innovative design to
//           high-quality delivery.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ServiceHero;

import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const ServiceHero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${assets.construction_img})` }}
      className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden relative"
    >
      <motion.div
        initial={{
          borderRadius: "50%",
          width: "200px",
          height: "200px",
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: "300vh",
          height: "300vh",
          borderRadius: "50%",
          opacity: "0.5"
        }}
        transition={{
          duration: 2.0,
          ease: "easeInOut",
        }}
        className="fixed left-1/2 top-1/2 bg-black"
      />

      {/* Nội dung */}
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-20 text-white z-10">
        <h2 className="text-3xl sm:text-4xl md:text-[50px] inline-block max-w-3xl font-semibold mb-14">
          Comprehensive Real Estate Solutions
        </h2>
        <p className="text-xl max-w-xl mx-auto">
          We offer end-to-end construction services, from innovative design to
          high-quality delivery.
        </p>
      </div>
    </div>
  );
};

export default ServiceHero;
