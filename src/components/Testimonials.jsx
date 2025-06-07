import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { testimonials } from "./TestimonialsData"; // sesuaikan path-nya

const gap = 20;
const arrowSize = 40;

export default function Testimonials() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  const [visibleCount, setVisibleCount] = useState(1);
  const [itemWidth, setItemWidth] = useState(240);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const updateDimensions = () => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;

    let count = 1;
    if (containerWidth >= 1024) count = 4;
    else if (containerWidth >= 768) count = 3;
    else if (containerWidth >= 480) count = 2;

    const totalGaps = (count - 1) * gap;
    const widthPerItem = (containerWidth - totalGaps) / count;

    setVisibleCount(count);
    setItemWidth(widthPerItem);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const extendedData = [
    ...testimonials.slice(-visibleCount),
    ...testimonials,
    ...testimonials.slice(0, visibleCount),
  ];

  const scrollToIndex = (index, animated = true) => {
    if (!trackRef.current) return;
    const totalItemWidth = itemWidth + gap;
    trackRef.current.style.transition = animated
      ? "transform 0.5s ease"
      : "none";
    const scrollPosition = index * totalItemWidth;
    trackRef.current.style.transform = `translateX(-${scrollPosition}px)`;
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
    if (currentIndex >= testimonials.length + visibleCount) {
      setCurrentIndex(visibleCount);
      scrollToIndex(visibleCount, false);
    } else if (currentIndex < visibleCount) {
      setCurrentIndex(testimonials.length + visibleCount - 1);
      scrollToIndex(testimonials.length + visibleCount - 1, false);
    }
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex, itemWidth, visibleCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimoni"
      ref={sectionRef}
      className={`bg-white py-16 px-4 text-center relative transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Apa Kata Pelanggan Kami
        </h2>
        <p className="text-sm text-gray-500 mb-10">
          Peringkat <strong>5 / 5</strong> berdasarkan{" "}
          <strong>10.370 ulasan</strong>, Menampilkan ulasan bintang 4 & 5 kami.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="hidden md:block p-2 bg-white border rounded-full shadow transition-colors duration-300 hover:bg-blue-900 hover:text-white"
            style={{ width: arrowSize, height: arrowSize }}
          >
            <ArrowLeft className="w-5 h-5 mx-auto" />
          </button>

          <div ref={containerRef} className="overflow-hidden w-full max-w-full">
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className="flex transition-transform ease-in-out"
              style={{
                gap: `${gap}px`,
                width: extendedData.length * (itemWidth + gap),
              }}
            >
              {extendedData.map((item, index) => (
                <div
                  key={index}
                  className="testimonial-card"
                  style={{ width: itemWidth }}
                >
                  <div>
                    <div className="testimonial-stars">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="testimonial-star" />
                      ))}
                    </div>
                    <h3 className="testimonial-title">{item.title}</h3>
                    <p className="testimonial-content">"{item.content}"</p>
                  </div>
                  <p className="testimonial-user">- {item.user}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="hidden md:block p-2 bg-white border rounded-full shadow transition-colors duration-300 hover:bg-blue-900 hover:text-white"
            style={{ width: arrowSize, height: arrowSize }}
          >
            <ArrowRight className="w-5 h-5 mx-auto" />
          </button>
        </div>

        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="p-2 bg-white border rounded-full shadow transition-colors duration-300 hover:bg-blue-900 hover:text-white"
            style={{ width: arrowSize, height: arrowSize }}
          >
            <ArrowLeft className="w-5 h-5 mx-auto" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-white border rounded-full shadow transition-colors duration-300 hover:bg-blue-900 hover:text-white"
            style={{ width: arrowSize, height: arrowSize }}
          >
            <ArrowRight className="w-5 h-5 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}
