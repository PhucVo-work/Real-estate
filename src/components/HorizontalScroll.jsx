import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "../components/About";
import ProjectsSection from "../components/ProjectsSection";
import Testimonails from "../components/Testimonails";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const items = [About, ProjectsSection, Testimonails];

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  console.log(scrollYProgress);

  const x = useTransform(
    scrollYProgress,
    [0.25, 0.75],
    ["0%", `-${(items.length - 1) * 110}%`]
  );

  return (
    <div>
      <section ref={targetRef} className="min-h-[300vh] relative">
        <div className="sticky top-0 h-screen overflow-x-hidden">
          <motion.ul
            style={{ x }}
            className="flex h-full snap-x snap-mandatory"
          >
            {items.map((Component, index) => (
              <li
                key={index}
                className="w-screen max-h-full overflow-y-hidden flex-shrink-0 snap-y flex items-center justify-center"
              >
                <Component />
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <div className="h-screen bg-green-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Continue Scrolling</h1>
      </div>
    </div>
  );
};

export default HorizontalScroll;

