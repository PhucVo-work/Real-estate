import React from "react";
import { motion } from "motion/react";

const WorkProcess = () => {
  return (
    <div className="bg-white z-10 flex lg:p-32 justify-center w-full h-full flex-col md:flex-wrap md:flex-row gap-24">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.8, delay: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" text-center flex flex-col items-center border-brandColor-500 border-4 rounded-lg w-[38%]"
      >
        <h2 className="text-3xl font-semibold text-white mb-4 py-4 bg-brandColor-500 w-full">
          Step 1
        </h2>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4  ">
          Analyze Requirements
        </h2>
        <p className="text-gray-600 text-xl max-w-[400px] mb-4">
          We carefully analyze your specific needs and ensure we capture every
          crucial detail for success
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.8, delay: 0.6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" text-center flex flex-col items-center border-brandColor-500 border-4 rounded-lg w-[38%]"
      >
        <h2 className="text-3xl font-semibold text-white mb-4 py-4 bg-brandColor-500 w-full">
          Step 2
        </h2>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4  ">
          Design the Plan
        </h2>
        <p className="text-gray-600 text-xl max-w-[400px] mb-4">
          We create designs aligned with your vision and objectives, emphasizing
          creativity and practicality
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.8, delay: 1.0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" text-center flex flex-col items-center border-brandColor-500 border-4 rounded-lg w-[38%]"
      >
        <h2 className="text-3xl font-semibold text-white mb-4 py-4 bg-brandColor-500 w-full">
          Step 3
        </h2>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4  ">
          Build with Precision
        </h2>
        <p className="text-gray-600 text-xl max-w-[400px] mb-4">
          We execute construction with precision, skill, and an unwavering focus
          on delivering high quality
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 1.8, delay: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" text-center flex flex-col items-center border-brandColor-500 border-4 rounded-lg w-[38%]"
      >
        <h2 className="text-3xl font-semibold text-white mb-4 py-4 bg-brandColor-500 w-full">
          Step 4
        </h2>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4  ">
          Inspect and Deliver
        </h2>
        <p className="text-gray-600 text-xl max-w-[400px] mb-4">
          We inspect thoroughly and meticulously to ensure perfection before
          handing it over to you
        </p>
      </motion.div>
    </div>
  );
};

export default WorkProcess;
