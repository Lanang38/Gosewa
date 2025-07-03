import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { features } from "./FeaturesData.jsx";

export default function BestFeature() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onResize = () => setViewportHeight(window.innerHeight);

    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= viewportHeight) {
        setOpacity(1);
        return;
      }

      let distanceOut = 0;

      if (rect.top < 0) {
        distanceOut = Math.min(Math.abs(rect.top), rect.height);
      } else if (rect.bottom > viewportHeight) {
        distanceOut = Math.min(rect.bottom - viewportHeight, rect.height);
      }

      const norm = distanceOut / rect.height;
      const newOpacity = 1 - norm;
      setOpacity(newOpacity < 0 ? 0 : newOpacity);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [viewportHeight]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const cardVariants = (index) => {
    // Cards 0 & 1 dari kiri (x negatif), cards 2 & 3 dari kanan (x positif)
    const fromLeft = index === 0 || index === 1;

    return {
      hidden: {
        opacity: 0,
        x: fromLeft ? -400 : 400,
      },
      visible: {
        x: 0,
        opacity: opacity,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 30,
          duration: 0.6,
        },
      },
    };
  };

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-2xl font-semibold text-gray-800 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity }}
          transition={{ duration: 0.3 }}
        >
          Mengapa memilih kami?
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="w-[240px] bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-left"
              variants={cardVariants(index)}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
