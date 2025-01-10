import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const ServiceHero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${assets.construction_img})` }}
      className="min-h-screen bg-cover bg-center flex flex-col justify-between items-center py-32 w-full relative overflow-y-hidden z-0"
    >
      <motion.div
        initial={{
          borderRadius: "50%",
          width: "200px",
          height: "200px",
          x: "-50%",
          y: "-50%",
          position: "absolute"
        }}
        animate={{
          width: "300vh",
          height: "300vh",
          borderRadius: "50%",
          opacity: 0.5,
          zIndex: 0,
        }}
        transition={{
          duration: 1.7,
          ease: "easeInOut",
        }}
        className="fixed left-1/2 top-1/2 bg-black z-0"
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
    </div>
  );
};

export default ServiceHero;
