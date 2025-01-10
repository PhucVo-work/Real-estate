import React from "react";
import { FaClock, FaGift, FaShieldAlt, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const ClientCommitment = () => {
  const commitments = [
    {
      title: "On-Time Delivery",
      description: "We value your time and deliver as promised.",
      icon: <FaClock className="w-12 h-12" />,
    },
    {
      title: "Transparent Costs",
      description: "Clear and upfront pricing with no hidden charges.",
      icon: <FaGift className="w-12 h-12" />,
    },
    {
      title: "Long-Term Warranty",
      description: "Ensuring quality through reliable after-sales support.",
      icon: <FaShieldAlt className="w-12 h-12" />,
    },
    {
      title: "Information Security",
      description:
        "Committed to safeguarding your data with robust privacy measures and secure transactions.",
      icon: <FaLock className="w-12 h-12" />,
    },
  ];

  const testimonials = [
    {
      quote: "Their professionalism and dedication exceeded my expectations!",
      author: "Emily Brown",
    },
    {
      quote: "Truly unmatched attention to detail and quality.",
      author: "Michael Lee",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32  px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Commitments Section */}
          <div>
            <h2 className="text-4xl font-bold mb-12">Our Commitments</h2>
            <div className="space-y-8">
              {commitments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="flex items-start p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-brandColor-500 mr-6">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="pb-20">
            <h2 className="text-4xl font-bold mb-12">Client Stories</h2>
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-brandColor-500 font-semibold">
                    — {testimonial.author}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCommitment;
