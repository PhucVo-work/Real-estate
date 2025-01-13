import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import useProjectStore from "../store/useProjectStore";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import RelatedProject from "../components/DetailProject/RelatedProject";
import { motion } from "framer-motion";

const DetailProject = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { projects, fetchProjects } = useProjectStore();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  const project = location.state?.project || projects.find((p) => p.id === id);

  useEffect(() => {
    if (!project && projects.length === 0) {
      fetchProjects().then(() => {
        if (!projects.find((p) => p.id === id)) {
          navigate("/projects", { replace: true });
        }
      });
    }
  }, [id, projects, fetchProjects, navigate, project]);
  console.log(project);

  const allImages = [
    ...(project?.exterior || []),
    ...(project?.interior || []),
  ];

  const toggleVideo = () => setShowVideo((prev) => !prev);
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {showVideo && project.video ? (
          <video
            autoPlay
            loop
            className="w-full h-full object-cover"
            src={project.video}
          />
        ) : (
          allImages.length > 0 && (
            <img
              src={allImages[currentImageIndex].urlPicture}
              alt="Property"
              className="w-full h-full object-cover"
            />
          )
        )}

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
          <button
            onClick={prevImage}
            className={`${
              showVideo ? "hidden" : "block"
            } p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition`}
          >
            <FaChevronLeft className="w-6 h-6 text-white" />
          </button>
          {project.video && (
            <button
              onClick={toggleVideo}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition text-white"
            >
              {showVideo ? "View Images" : "View Video"}
            </button>
          )}
          <button
            onClick={nextImage}
            className={`${
              showVideo ? "hidden" : "block"
            } p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition`}
          >
            <FaChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Property Title */}
        <motion.div
          initial={{ opacity: 0, y: "-100", x: "-50%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: "-50%" }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 text-center z-10"
        >
          <h1 className="text-5xl font-light text-white mb-4">
            {project?.name}
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            {/* <MapPin className="w-4 h-4" /> */}
            <span>{project?.address}</span>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Tabs */}
        <div className="flex gap-8 mb-12 border-b">
          {["overview", "details", "gallery"].map((tab, index) => (
            <motion.button
              key={tab}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 capitalize font-medium text-lg ${
                activeTab === tab
                  ? "border-b-2 border-brandColor-400  text-brandColor-500"
                  : "text-gray-400 "
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 transition-all w-full">
          <div className="lg:col-span-2 space-y-8 w-full">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="prose lg:prose-lg text-lg transition min-h-[300px]"
              >
                <h1 className="text-2xl font-semibold pb-5">{project.name}</h1>
                <div className="flex justify-between pb-5">
                  <h1 className="text-xl">
                    <strong className="text-xl">Completion: </strong>
                    {project.projectCompletion}
                  </h1>
                  <h4 className="text-brandColor-500">{project.status}</h4>
                </div>
                <p className="text-justify">{project?.overview}</p>
              </motion.div>
            )}
            {activeTab === "details" && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-full justify-between pb-10 border-b-2 border-gray-400">
                  <div className="min-w-20% text-start">
                    <strong>Total Area</strong>
                    <p>{project.details.totalArea}</p>
                  </div>
                  <div className="min-w-20% text-start">
                    <strong>Living Area</strong>
                    <p>{project.details.livingArea}</p>
                  </div>
                  <div className="min-w-20% text-start">
                    <strong>Floor Type</strong>
                    <p>{project.details.floorType}</p>
                  </div>
                  <div className="min-w-20% text-start">
                    <strong>availabel</strong>
                    <p className="text-brandColor-500 font-semibold">
                      {project.details.availability}
                    </p>
                  </div>
                  <div className="min-w-20% text-start">
                    <strong>Balcony Size</strong>
                    <p>{project.details.balconySize}</p>
                  </div>
                  <div className="min-w-20% text-start">
                    <strong>Terrace Area</strong>
                    <p>{project.details.terraceSize}</p>
                  </div>
                </div>
                <h1 className="text-2xl font-semibold pt-10">Energy</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-5 max-w-full justify-between pb-10 border-gray-400 pb-10 border-b-2">
                  <div className="min-w-20% text-start">
                    <strong>Heating Requirement</strong>
                    <p>{project.details.energy.heatingRequirement}</p>
                  </div>
                  <div className="min-w-20% text-start">
                    <strong>Heating Type</strong>
                    <p>{project.details.energy.heatingType}</p>
                  </div>
                  <div className="min-w-20% text-start">
                    <strong>fGEE</strong>
                    <p>{project.details.energy.fGEE}</p>
                  </div>
                </div>
                <h1 className="text-2xl font-semibold pt-10">
                  Additional Costs
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-5 max-w-full justify-between pb-10 border-gray-400">
                  <div className="min-w-20% text-start">
                    <strong>property Transfer Tax</strong>
                    <p>{project.details.additionalCosts.propertyTransferTax}</p>
                  </div>
                  <div className="min-w-20% text-start">
                    <strong>Registration Fee</strong>
                    <p>{project.details.additionalCosts.registrationFee}</p>
                  </div>
                  <div className="min-w-20% text-start">
                    <strong>Brokerage Fee</strong>
                    <p>{project.details.additionalCosts.brokerageFee}</p>
                  </div>
                  <div className="min-w-20% text-start">
                    <strong>Contract Costs</strong>
                    <p>{project.details.additionalCosts.contractCosts}</p>
                  </div>
                </div>
              </motion.div>
            )}
            {activeTab === "gallery" && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {allImages.map((image, index) => (
                  <motion.img
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.05,
                      ease: "easeInOut",
                    }}
                    src={image.urlPicture}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition cursor-pointer"
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </motion.div>
            )}
            <RelatedProject />
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 bg-white p-6 rounded-xl shadow-md shadow-brandColor-200">
              <h3 className="text-lg font-semibold mb-4">
                Interested in this property?
              </h3>
              <button
                onClick={() => {
                  navigate("/Contact");
                }}
                className="w-full bg-brandColor-400 font-semibold text-white py-3 rounded-lg hover:bg-brandColor-100 transition"
              >
                Contact Agent
              </button>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Our luxury property experts will get back to you within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
