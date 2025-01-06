import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const Discover = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat mb-4 bg-center mt-14 flex flex-col justify-center"
      style={{ backgroundImage: `url(${assets.discover_img})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-2 px-6 md:px-20 lg:px-20 text-white"
      >
        <h1 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-4xl font-normal pt-20">
          Discover a place you'll love to live
        </h1>
        <p className="text-xl mt-16 max-w-xl mx-auto">
        Explore homes designed to match your lifestyle, built with care and modern elegance.
        </p>
        <NavLink to={"/Projects"}>
          <button className="mt-16 bg-brandColor-500 px-8 py-3 rounded flex items-center mx-auto">
              View Properties
              <FaArrowRightLong size={15} className="ml-3" />
          </button>
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Discover;
