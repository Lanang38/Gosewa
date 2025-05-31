import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import motorData from "./MotorData.jsx";

export default function Recommendations() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [itemWidth, setItemWidth] = useState(240);
  const [currentIndex, setCurrentIndex] = useState(4);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const updateLayout = () => {
    const screenWidth = window.innerWidth;
    let count = 4;
    if (screenWidth < 640) count = 1;
    else if (screenWidth < 768) count = 2;
    else if (screenWidth < 1024) count = 3;
    else count = 4;

    setVisibleCount(count);

    const containerWidth = containerRef.current?.offsetWidth || 960;
    setItemWidth((containerWidth - (count - 1) * 16) / count);
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
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
      ? "transform 0.5s ease"
      : "none";
    trackRef.current.style.transform = `translateX(-${
      index * totalItemWidth
    }px)`;
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
    scrollToIndex(currentIndex);
  }, [currentIndex, visibleCount, itemWidth]);

  return (
    <section className="bg-black py-16 px-4 text-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center px-2">
        <h2 className="text-2xl font-bold">Rekomendasi Sewa</h2>
        <a href="#" className="text-sm hover:underline flex items-center gap-1">
          Lihat Semua <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Carousel */}
      <div className="max-w-5xl mx-auto overflow-hidden" ref={containerRef}>
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="carousel-track"
          style={{
            width: `${extendedData.length * (itemWidth + 16)}px`,
          }}
        >
          {extendedData.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="carousel-card"
              style={{ width: `${itemWidth}px` }}
            >
              <div className="carousel-card-img">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="carousel-card-info">
                  <Info className="w-4 h-4" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white text-sm">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigasi */}
      <div className="max-w-5xl mx-auto mt-4 flex gap-4 justify-center sm:justify-start px-2">
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
      </div>
    </section>
  );
}
