import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { teamData } from "../../assets/assets";

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      setCardsToShow(window.innerWidth >= 1024 ? teamData.length : 1);
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-white py-0 md:py-1 px-6 md:px-20 lg:px-36">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold text-left mb-4">Meet Our Team</h2>
          <p className="text-left max-w-lg text-gray-600 mb-6">
            Our team is a diverse group of professionals dedicated to delivering
            excellence in every project.
          </p>
        </div>
        <div className="flex justify-end items-center mb-8">
          <button
            className="p-3 rounded bg-gray-200 mr-2"
            aria-label="Previous project"
            onClick={prevProject}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="p-3 rounded bg-gray-200 mr-2"
            aria-label="Next project"
            onClick={nextProject}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-[28%]"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <img
                src={member.url}
                alt={member.name}
                className="w-full max-h-[438px] mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-[88%] px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {member.position} <span className="px-1">|</span>
                    {member.experience} years of experience
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
