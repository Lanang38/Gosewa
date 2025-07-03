import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const ref = useRef(null);

  // Track apakah animasi masuk sudah selesai
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // muncul hingga keluar
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
    <section
      id="home"
      className="relative h-screen w-full text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/background.jpg"
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
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={hasAnimatedIn ? { opacity: scrollOpacity, x: scrollX } : {}}
        >
          <h1 className="text-2xl md:text-5xl font-bold leading-snug md:leading-tight">
            Bebas Berkeling Kota <br className="hidden md:block" />
            dengan <span className="text-white">GoSewa!</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-200">
            Sewa motor dengan harga terjangkau, proses yang mudah, dan layanan
            cepat. Apa pun kebutuhan Anda, GoSewa menyediakan motor untuk
            menemani perjalanan Anda dengan nyaman dan aman.
          </p>

          <a
            href="https://gosewa.my.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 border border-white text-sm md:text-base text-white font-medium rounded hover:bg-white hover:text-black transition"
          >
            Sewa Sekarang <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
