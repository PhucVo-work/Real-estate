import React from "react";
import { FaLeaf, FaUsers, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const CoreValues = () => {
  const values = [
    {
      title: "Superior Quality",
      description:
        "We are committed to using the best materials for best quality.",
      icon: <FaShieldAlt className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
    {
      title: "Customer-Centric",
      description: "Our clients' needs always come first in every project.",
      icon: <FaUsers className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
    {
      title: "Sustainability",
      description: "Building in harmony with nature for a better future.",
      icon: <FaLeaf className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
    {
      title: "Innovation",
      description:
        "Leveraging modern technology to lead the way in construction.",
      icon: <FaLightbulb className="w-10 h-10 sm:w-12 sm:h-12" />,
    },
  ];

  return (
    <div className="max-w-full flex flex-col items-center justify-center p-6 md:p-10">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl mt-8 md:mt-36 text-black font-semibold mb-16 lg:mb-28 text-center">
        Our Core Values
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center p-6 group"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:scale-105 hover:shadow-lg transition-transform duration-300">
              <div className="text-brandColor-500 transform group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4">
              {value.title}
            </h3>
            <p className="text-gray-600 text-sm lg:text-base mt-2 opacity-90 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
