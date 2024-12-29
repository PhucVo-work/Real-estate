import React from "react";
import { assets } from "../assets/assets";
import { TbHomeSearch } from "react-icons/tb";
import { motion } from "motion/react";

const StepsToBuyHome = () => {
  return (
    <div className="container mx-auto py-8 p-5 lg:px-32 w-full overflow-hidden items-center justify-center mb-12">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Hows It works?{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Find a perfect home
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Discover the steps to finding your dream home.
      </p>
      <div className="flex flex-col lg:flex-row gap-4 md:gap-20">
        <div className="w-full border-l-0 lg:border-l-2 flex flex-col justify-around md:pl-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center sm:items-start md:text-left my-6"
          >
            <img src={assets.searchhome_img} className="w-12" alt="" />
            <h1 className="text-2xl font-medium my-3">Find Real Estate</h1>
            <p className="text-lg">
              Begin your journey by searching through a wide variety of listings
              to find the perfect home for you.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center sm:items-start md:text-left my-6"
          >
            <img src={assets.communication_icon} className="w-[68px]" alt="" />
            <h1 className="text-2xl font-medium my-3">Meet Relator</h1>
            <p className="text-lg">
              Work with a professional agent who can provide personalized
              guidance and answer all of your questions clearly.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.9 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center sm:items-start md:text-left my-6"
          >
            <img src={assets.keyhome_img} className="w-14" alt="" />
            <h1 className="text-2xl font-medium my-3">Take The Keys</h1>
            <p className="text-lg">
              Finalize the process, complete necessary documents, and receive
              the keys to unlock your brand-new home today.
            </p>
          </motion.div>
        </div>
        <img
          src={assets.stepSection_img}
          className="w-full md:max-h-[450px] lg:max-w-[400px] xl:max-w-[600px] xl:min-h-[650px] rounded-lg order-first lg:order-last "
          alt=""
        />
      </div>
    </div>
  );
};

export default StepsToBuyHome;
