import React from "react";
import { useNavigate } from "react-router-dom";
import useProjectStore from "../../store/useProjectStore";
import { motion } from "framer-motion";

const RelatedProject = () => {
  const navigate = useNavigate();
  const { projects } = useProjectStore();
  const handleNavigateToDetail = (project) => {
    navigate(`/${project.id}`, { state: { project } });
  };
  const handleVideoHover = (index) => {
    const video = document.getElementById(`video-${index}`);
    if (video)
      video.play().catch((err) => console.log("Video play error:", err));
  };
  const handleVideoLeave = (index) => {
    const video = document.getElementById(`video-${index}`);
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold" >Related Project</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform duration-300"
            onMouseEnter={() => handleVideoHover(index)}
            onMouseLeave={() => handleVideoLeave(index)}
            onClick={() => handleNavigateToDetail(item)}
          >
            <div className="relative w-full h-64">
              <video
                id={`video-${index}`}
                src={item.video}
                muted
                playsInline
                loop
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                }}
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500">{item.status} • 2024</p>
              <h2 className="text-lg font-semibold mt-2 line-clamp-2">
                {item.name}
              </h2>
              <a
                href="#"
                className="mt-4 inline-block text-brandColor-500 hover:text-brandColor-800"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RelatedProject;
