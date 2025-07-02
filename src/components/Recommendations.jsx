import { ArrowLeft, ArrowRight, Bookmark } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import motorData from './MotorData.jsx';

export default function Recommendations() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [itemWidth, setItemWidth] = useState(240);
  const [currentIndex, setCurrentIndex] = useState(4);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: '-100px' });

  const autoScrollRef = useRef(null);

  const updateLayout = () => {
    const count = 4;
    setVisibleCount(count);
    const containerWidth = containerRef.current?.offsetWidth || 960;
    setItemWidth((containerWidth - (count - 1) * 16) / count);
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const extendedData = [
    ...motorData.slice(-visibleCount),
    ...motorData,
    ...motorData.slice(0, visibleCount),
  ];

  const scrollToIndex = (index, animated = true) => {
    if (!trackRef.current) return;
    const totalItemWidth = itemWidth + 16;
    trackRef.current.style.transition = animated
      ? 'transform 0.5s ease'
      : 'none';
    trackRef.current.style.transform = `translateX(-${
      index * totalItemWidth
    }px)`;
  };

  const startAutoScroll = () => {
    if (autoScrollRef.current) return;
    autoScrollRef.current = setInterval(() => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
    }, 2000);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex >= motorData.length + visibleCount) {
      setCurrentIndex(visibleCount);
      scrollToIndex(visibleCount, false);
    } else if (currentIndex < visibleCount) {
      setCurrentIndex(motorData.length + visibleCount - 1);
      scrollToIndex(motorData.length + visibleCount - 1, false);
    }
  };

  useEffect(() => {
    scrollToIndex(currentIndex, true);
  }, [currentIndex, visibleCount, itemWidth]);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const [scrollY, setScrollY] = useState(window.scrollY);
  const cardsRef = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getCardStyle = (index) => {
    return {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    };
  };

  return (
    <section ref={sectionRef} className="bg-black py-16 px-4 text-white">
      {/* Header */}
      <motion.div
        className="max-w-5xl mx-auto mb-6 flex justify-between items-center px-2"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
        }}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h2 className="text-2xl font-bold">Rekomendasi Sewa</h2>
        <a href="#" className="text-sm hover:underline flex items-center gap-1">
          Lihat Semua <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Carousel */}
      <div className="max-w-5xl mx-auto overflow-hidden" ref={containerRef}>
        <motion.div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="carousel-track flex gap-4"
          style={{
            width: `${extendedData.length * (itemWidth + 16)}px`,
          }}
        >
          {extendedData.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              className="carousel-card bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              style={{ width: `${itemWidth}px` }}
              ref={(el) => (cardsRef.current[index] = el)}
              animate={getCardStyle(index)}
              initial={{ opacity: 1, y: 0 }}
            >
              <div className="carousel-card-img relative w-full h-40">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white text-sm">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigasi */}
      <motion.div
        className="max-w-5xl mx-auto mt-4 flex gap-4 justify-center sm:justify-start px-2"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: 0.3 },
          },
        }}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <button
          onClick={handlePrev}
          className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </section>
  );
}
