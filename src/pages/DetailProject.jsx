import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import useProjectStore from "../store/useProjectStore";
// import { ChevronLeft, ChevronRight, MapPin, Calendar, Home, Wind, Maximize } from "react-icons/alls";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

  const allImages = [
    ...(project?.exterior || []),
    ...(project?.interior || []),
  ];

  const toggleVideo = () => setShowVideo((prev) => !prev);
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);

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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          <button
            onClick={prevImage}
            className={`${showVideo ? "hidden" : "block"} p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition`}
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
            className={`${showVideo ? "hidden" : "block"} p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition`}
          >
            <FaChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Property Title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-5xl font-light text-white mb-4 ">
            {project?.name}
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            {/* <MapPin className="w-4 h-4" /> */}
            <span>{project?.address}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Tabs */}
        <div className="flex gap-8 mb-12 border-b">
          {["overview", "details", "gallery"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 capitalize font-medium text-lg ${
                activeTab === tab
                  ? "border-b-2 border-brandColor-400  text-brandColor-500"
                  : "text-gray-400 "
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {activeTab === "overview" && (
              <div className="prose lg:prose-lg text-lg">
                <p>{project?.overview}</p>
              </div>
            )}
            {activeTab === "details" && (
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p>
                    <strong>Total Area:</strong> {project.details.totalArea}
                  </p>
                  <p>
                    <strong>Living Area:</strong> {project.details.livingArea}
                  </p>
                  <p>
                    <strong>Rooms:</strong> {project.details.rooms}
                  </p>
                </div>
              </div>
            )}
            {activeTab === "gallery" && (
              <div className="grid grid-cols-2 gap-4">
                {allImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.urlPicture}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition cursor-pointer"
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white p-6 rounded-xl shadow-md shadow-brandColor-200">
              <h3 className="text-lg font-semibold mb-4">
                Interested in this property?
              </h3>
              <button onClick={() => {navigate('/Contact')}} className="w-full bg-brandColor-400 font-semibold text-white py-3 rounded-lg hover:bg-gray-800 transition">
                Contact Agent
              </button>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Our luxury property experts will get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
