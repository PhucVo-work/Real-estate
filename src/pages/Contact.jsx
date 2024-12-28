import React from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "79c78bf6-0eb4-485b-b120-d0e7bad58b76");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div
      className="h-screen bg-center flex w-full overflow-y-scroll relative"
      style={{
        backgroundImage: `url(${assets.bg_contact})`,
        backgroundSize: "cover", // Nếu cần cố định hình nền
      }}
    >
      {/* Lớp mờ màu đen */}
      <div className="fixed inset-0 bg-black bg-opacity-50 min-h-full"></div>

      <motion.div
        initial={{ opacity: 0, x: 300 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full flex flex-col lg:flex-row justify-center text-center sm:text-start p-6 py-20 mt-20 pb-10 sm:px-20 lg:px-32 sm:mt-28 relative"
      >
        <div className="w-full flex flex-col mr-5 justify-between pt-56 sm:pt-30 md:pt-24 lg:pt-0 lg:pb-12 sm:pb-4 pb-4">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold my-4 text-white">
              Contact{" "}
              <span className="underline underline-offset-4 decoration-1 font-light">
                With Us
              </span>
            </h1>
            <p className="text-center mx-auto sm:mx-0 sm:text-start mt-10 sm:mt-4 max-w-80 text-white text-2xl">
              Ready to Make a Move? Let's Build Your Future Together
            </p>
          </div>
          <div>
            <h3 className="text-2xl lg:text-3xl text-white my-4">
              Discover More About Us on Social Media
            </h3>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brandColor-500 p-3 rounded-full items-center justify-center"
              >
                <FaFacebookF size={30} color="#fff" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brandColor-500 p-3 rounded-full items-center justify-center"
              >
                <FaTwitter size={30} color="#fff" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brandColor-500 p-3 rounded-full items-center justify-center"
              >
                <FaInstagram size={30} color="#fff" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brandColor-500 p-3 rounded-full items-center justify-center"
              >
                <FaLinkedin size={30} color="#fff" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brandColor-500 p-3 rounded-full items-center justify-center"
              >
                <FaYoutube size={30} color="#fff" />
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="max-h-fit w-full mt-5 py-12 px-16 sm:mt-4 lg:mt-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg border-white border-1"
        >
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <div className="w-full text-left text-white text-xl">
                First Name
                <input
                  className="w-full border border-gray-100 rounded py-3 px-4 mt-2 text-black"
                  name="Name"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="w-full  text-left text-white text-xl">
                Last Name
                <input
                  className="w-full border border-gray-100 rounded py-3 px-4 mt-2 text-black"
                  name="Last Name"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="w-ful text-left text-white mt-4 text-xl">
              Your Email
              <input
                className="w-full border border-gray-100 rounded py-3 px-4 mt-2 text-black"
                name="Email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="w-ful text-left text-white mt-4 text-xl">
              Message
              <textarea
                className="w-full border border-gray-100 rounded py-3 px-4 mt-2 resize-none text-black"
                name="Message"
                placeholder="Message"
                required
              />
            </div>
            <button className="bg-brandColor-500 text-white py-3 px-2 mt-4 rounded text-xl ">
              {result ? result : "Send Message"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
