import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-brandColor-900 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="mt-4 text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ex
            earum, sint libero aut sequi id beatae perferendis, cumque quidem
            ullam. Nisi mollitia cum dolores laborum porro quaerat a voluptate.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="" className="hover:text-white">
              Home
            </a>
            <a href="" className="hover:text-white">
              About Us
            </a>
            <a href="" className="hover:text-white">
              Contact Us
            </a>
            <a href="" className="hover:text-white">
              Our Projects
            </a>
            <a href="" className="hover:text-white">
              Privacy policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="max-w-80 text-gray-400 mb-4">
            the latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 bg-brandColor-400 text-white rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2024 © VoHoangPhuc. All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
