import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import detailService from "./detailService";
import WorkProcess from "./WorkProcess";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const items = [detailService, WorkProcess];

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.30, 0.70],
    ["0%", `-${(items.length - 1) * 100}%`]
  );

  return (
    <div>
      <section ref={targetRef} className="min-h-[260vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.ul
            style={{ x }}
            className="flex flex-col lg:flex-row h-full snap-x snap-mandatory"
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
    </div>
  );
};

export default HorizontalScroll;

