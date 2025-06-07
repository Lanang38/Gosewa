import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const ref = useRef(null);

  // Track apakah animasi masuk sudah selesai
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // muncul hingga keluar
  });

  // Scroll-based exit only
  const scrollOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
  const scrollX = useTransform(scrollYProgress, [0.5, 1], [0, 100]);

  // Trigger masuk hanya sekali
  useEffect(() => {
    const timeout = setTimeout(() => setHasAnimatedIn(true), 800); // durasi sama dengan transition masuk
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/background.jpg"
          alt="GoSewa Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 h-full flex items-center justify-end px-6 md:px-20"
        ref={ref}
      >
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={hasAnimatedIn ? { opacity: scrollOpacity, x: scrollX } : {}}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bebas Berkeling Kota <br className="hidden md:block" />
            dengan <span className="text-white">GoSewa!</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Sewa motor dengan harga terjangkau, proses yang mudah, dan layanan
            cepat. Apa pun kebutuhan Anda, GoSewa menyediakan motor untuk
            menemani perjalanan Anda dengan nyaman dan aman.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-black transition">
            Sewa Sekarang <ArrowUpRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
