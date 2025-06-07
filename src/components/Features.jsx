import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import motorImage from "../assets/motor.png";
import bgImage from "../assets/BG2.png"; // import background

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const controlsText = useAnimation();
  const controlsImage = useAnimation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacityOut = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
  const xOutText = useTransform(scrollYProgress, [0.7, 1], [0, -100]);
  const xOutImage = useTransform(scrollYProgress, [0.7, 1], [0, 100]);

  const [scrollPassedThreshold, setScrollPassedThreshold] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollPassedThreshold(latest >= 0.7);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    if (isInView) {
      controlsText.start({ opacity: 1, x: 0, transition: { duration: 0.6 } });
      controlsImage.start({ opacity: 1, x: 0, transition: { duration: 0.6 } });
    } else {
      controlsText.start({
        opacity: 0,
        x: -100,
        transition: { duration: 0.3 },
      });
      controlsImage.start({
        opacity: 0,
        x: 100,
        transition: { duration: 0.3 },
      });
    }
  }, [isInView, controlsText, controlsImage]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-24 py-20 min-h-[600px] lg:min-h-[768px]">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -100 }}
          animate={controlsText}
          style={
            scrollPassedThreshold ? { opacity: opacityOut, x: xOutText } : {}
          }
        >
          <h2 className="hidden lg:block text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
            Butuh tempat sewa kendaraan yang murah dan terpercaya?
          </h2>
          <div className="mt-6 text-gray-700 text-sm leading-relaxed">
            <p className="mt-6">
              <span className="font-bold text-2xl">GoSewa</span> hadir sebagai
              solusi penyewaan motor yang memudahkan mobilitas Anda kapan pun
              dan di mana pun.
            </p>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Tidak hanya sekedar penyewaan, GoSewa adalah mitra perjalanan yang
            mengutamakan kenyamanan, keamanan, dan kepuasan Anda di setiap
            perjalanan.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="lg:w-1/2 flex flex-col items-center order-1 lg:order-2"
          initial={{ opacity: 0, x: 100 }}
          animate={controlsImage}
          style={
            scrollPassedThreshold ? { opacity: opacityOut, x: xOutImage } : {}
          }
        >
          <h2 className="block lg:hidden text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
            Butuh tempat sewa kendaraan yang murah dan terpercaya?
          </h2>
          <div className="w-[250px] md:w-[400px] h-auto">
            <img src={motorImage} alt="Motor" className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
