import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const ServiceHero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${assets.construction_img})` }}
      className="min-h-screen bg-cover bg-center flex flex-col justify-between items-center py-32 w-full overflow-y-hidden relative"
    >
      <motion.div
        initial={{
          borderRadius: "50%",
          width: "400px",
          height: "400px",
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: "300vh",
          height: "300vh",
          borderRadius: "50%",
          opacity: "0.5",
        }}
        transition={{
          duration: 1.7,
          ease: "easeInOut",
        }}
        className="fixed left-1/2 top-1/2 bg-black  "
      />

      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        transition={{ duration: 1.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center flex-col mx-auto max-h-screen py-4 px-6 md:px-20 lg:px-20 text-white z-10 mt-24"
      >
        <h2 className="text-3xl sm:text-4xl md:text-[50px] inline-block max-w-3xl font-semibold mb-14">
          Comprehensive Real Estate Solutions
        </h2>
        <p className="text-xl max-w-xl mx-auto">
          We offer end-to-end construction services, from innovative design to
          high-quality delivery.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "-50%" }}
        transition={{ duration: 1.8 }}
        whileInView={{ opacity: 1, y: 0, zIndex: "10" }}
        viewport={{ once: true }}
      >
        <button className="rounded-full px-3 py-4 border border-white bg-transparent z-10 mt-16">
          <img src={assets.down_arrow} className="w-5" alt="" />
        </button>
      </motion.div>
    </div>
  );
};

export default ServiceHero;
