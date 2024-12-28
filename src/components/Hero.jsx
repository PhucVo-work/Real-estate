import React from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-20 text-white"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 ">
          Explore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <Link
            to={"/Projects"}
            className="border border-white px-8 py-3 rounded"
          >
            Projects
          </Link>
          <NavLink
            to={"/Contact"}
            className="bg-brandColor-500 px-8 py-3 rounded"
          >
            Contact Us
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
