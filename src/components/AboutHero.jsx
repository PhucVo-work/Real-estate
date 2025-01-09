import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { assets } from "../assets/assets";

const statsData = [
  { value: 60, label: "Years of Excellence" },
  { value: 160, label: "Projects Completed" },
  { value: 2006, label: "Mn. Sq. Ft. Delivered" },
  { value: 40, label: "Ongoing Projects" }
];

const StatItem = ({ value, label }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}+`);

  useEffect(() => {
    const animation = animate(count, value, { duration: 8 });
    return () => animation.stop();
  }, [count, value]);

  return (
    <div className="flex-row md:flex-col">
      <motion.h1 className="text-4xl font-medium text-gray-800">
        {rounded}
      </motion.h1>
      <p className="text-xl">{label}</p>
    </div>
  );
};

const AboutHero = () => {
  return (
    <div className="flex flex-col md:flex-row h-full max-h-full gap-4 ">
      <div className="min-w-full md:min-w-[45%]">
        <video src={assets.about_video} muted autoPlay loop playsInline type="video/mp4" className="max-w-full h-full object-cover">
        </video>
      </div>
      <div className="min-w-full md:min-w-[55%] min-h-full flex flex-col md:justify-between pb-16  ">
        <div>
          <h3 className="text-5xl text-center md:text-left lg:text-7xl md:mt-32 ml-5 text-black font-semibold">
            About Us
          </h3>
          <div className="ml-5 my-7 max-w-[70%]">
            <h4 className="text-3xl font-medium mb-2">Mission</h4>
            <p className="text-xl text-left">
              To deliver innovative construction solutions that provide real
              value and enhance our clients' quality of life
            </p>
          </div>
          <div className="ml-5 my-7 w-full md:max-w-[70%]">
            <h4 className="text-3xl font-medium mb-2">Vision</h4>
            <p className="text-xl text-left">
              We aim to become a leading brand in the real estate industry,
              building modern living spaces and creating sustainable communities
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-5 ">
          {statsData.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutHero;