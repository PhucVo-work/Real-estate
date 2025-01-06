import React from "react";
import { assets } from "../assets/assets";

const WhyChooseUs = () => {
  return (
    <div className="w-full flex flex-col md:flex-row min-h-full bg-white p-10 pt-28 pb-10 md:px-20 lg:px-32 gap-4">
      <div className="relative min-w-[45%]">
        <div className="relative">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M30,150 
                C20,100 40,50 100,30
                C200,0 300,0 400,30
                C460,50 480,100 470,150
                C460,200 480,250 480,300
                C480,350 460,400 400,430
                C350,450 150,450 100,430
                C40,400 20,350 20,300
                C20,250 40,200 30,150"
              fill="#f5deb3"
            />
            <foreignObject width="100%" height="100%" x="0" y="0">
              <div className="p-10">
                <img
                  src={assets.why_choose_img}
                  className="w-full h-auto"
                  alt="Why Choose Us"
                />
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
      <div className="w-full md:max-w-[45%]">
        <h2 className="text-center md:text-left text-4xl lg:text-5xl font-bold py-5 text-gray-800">
          Why Choose Us?
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-10">
          We are committed to delivering excellence in every project we
          undertake.
        </p>
        <ul className="flex flex-col gap-8">
          <li className="flex items-center gap-3">
            <span className="text-2xl text-brandColor-500">✔</span>
            <p className="text-xl font-medium text-gray-700">Professional team.</p>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl text-brandColor-500">✔</span>
            <p className="text-xl font-medium text-gray-700">On-time project delivery.</p>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl text-brandColor-500">✔</span>
            <p className="text-xl font-medium text-gray-700">Advanced technology.</p>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-2xl text-brandColor-500">✔</span>
            <p className="text-xl font-medium text-gray-700">
              Reliable stats: 10+ years of experience, 12+ completed projects.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
