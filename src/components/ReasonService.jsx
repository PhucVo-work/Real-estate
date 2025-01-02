import React from 'react'
import { FaDraftingCompass, FaHammer, FaHome, FaHeadset } from "react-icons/fa";
import { motion } from "motion/react";

const ReasonService = () => {
  return (
    <div
      className="bg-white z-10 flex justify-center items-center w-full h-full "
      id="#aboutSection"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-36">
        <motion.div
           initial={{ opacity: 0, y: 100 }}
           transition={{ duration: 1.8, delay: 0.2}}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
          className=" text-center flex flex-col items-center px-4 "
        >
          <FaDraftingCompass className="text-6xl text-brandColor-500 mb-6" />
          <h2 className="text-3xl font-semibold text-gray-800 mb-4  ">
            Architectural Design
          </h2>
          <p className="text-gray-600 text-xl ">
            Providing modern, personalized designs tailored to your needs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.8, delay: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" text-center flex flex-col items-center px-4 "
        >
          <FaHammer className="text-6xl text-brandColor-500 mb-6" />
          <h2 className="text-3xl font-semibold text-gray-800 mb-4  ">
            Construction Execution
          </h2>
          <p className="text-gray-600 text-xl ">
            Ensuring quality and timelines with our skilled technical team
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.8, delay: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" text-center flex flex-col items-center px-4 "
        >
          <FaHome className="text-6xl text-brandColor-500 mb-6" />
          <h2 className="text-3xl font-semibold text-gray-800 mb-4  ">
            Home Renovation
          </h2>
          <p className="text-gray-600 text-xl ">
            Transforming old spaces into modern, stylish living areas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.8, delay: 1.0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" text-center flex flex-col items-center px-4 "
        >
          <FaHeadset className="text-6xl text-brandColor-500 mb-6" />
          <h2 className="text-3xl font-semibold text-gray-800 mb-4  ">
            After-Sales Support
          </h2>
          <p className="text-gray-600 text-xl ">
            Providing warranty and post-handover customer care
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ReasonService
