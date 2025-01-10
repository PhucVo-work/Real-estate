import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScroll = ({ components }) => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.3, 0.7],
    ["0%", `-${(components.length - 1) * 100}%`]
  );
  
  const className = components.length > 2 ? "min-h-[280vh]" : "min-h-[261vh]"

  return (
    <div className="w-full">
      {/* On mobile (< 1024px), use standard vertical scroll */}
      <div className="lg:hidden">
        {components.map((Component, index) => (
          <div 
            key={index}
            className="min-h-screen w-full flex z-0"
          >
            <Component />
          </div>
        ))}
      </div>

      {/* On desktop (≥ 1024px), use horizontal scroll effect */}
      <section 
        ref={targetRef} 
        className={`hidden lg:block ${className} `}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.ul
            style={{ x }}
            className="flex h-full"
          >
            {components.map((Component, index) => (
              <li
                key={index}
                className="w-screen h-full flex-shrink-0 overflow-x-auto"
              >
                <Component />
              </li>
            ))}
          </motion.ul>
        </div>
      </section>
    </div>
  );
};

export default HorizontalScroll;