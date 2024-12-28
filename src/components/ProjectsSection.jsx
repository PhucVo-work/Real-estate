import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const ProjectsSection = () => {
  const [currnetIndex, setCurrentIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardToShow(projectsData.length);
      } else {
        setCardToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto pt-20 pb-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidde">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
            Projects{" "}
            <span className="underline underline-offset-4 decoration-1 font-light">
              Completed
            </span>
          </h1>
          <p className=" text-center text-gray-500 max-w-80 mx-auto">
            Crafting Spaces, Building Legacies — Explore Our Portfolio
          </p>
          {/* Slider button */}
          <div className="flex justify-end items-center mb-8">
            <button
              className="p-3 rounded bg-gray-200 mr-2"
              aria-label="Previous project"
              onClick={() => {
                prevProject();
              }}
            >
              <img src={assets.left_arrow} alt="Previous" />
            </button>
            <button
              className="p-3 rounded bg-gray-200 mr-2"
              aria-label="Next project"
              onClick={() => {
                nextProject();
              }}
            >
              <img src={assets.right_arrow} alt="Next" />
            </button>
          </div>
          {/* projects slider container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currnetIndex * 100) / cardToShow}%)`,
              }}
            >
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-full sm:w-1/4"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto mb-14"
                  />
                  <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                    <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {project.title}
                      </h2>
                      <p className="text-gray-500 text-sm">
                        {project.price} <span className="px-1"> | </span>{" "}
                        {project.location}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 w-full text-center" >
            <NavLink
              to={"/Projects"}
              className="px-8 py-3 bg-brandColor-500 rounded text-white hover:bg-brandColor-600">
              See More
            </NavLink>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
