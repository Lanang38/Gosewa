import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    title: "Sangat Memuaskan!",
    content:
      "Proses penyewaan motor di GoSewa sangat cepat dan mudah. Motor dalam kondisi baik.",
    user: "Agus",
  },
  {
    rating: 5,
    title: "Sangat Direkomendasikan",
    content:
      "GoSewa sangat membantu saya dalam mencari motor sewaan. Mereka sangat profesional.",
    user: "Adut",
  },
  {
    rating: 5,
    title: "Pelayanan Ramah dan Cepat",
    content:
      "Pelayanan sangat ramah dan efisien. Proses penyewaan motor cepat dan mudah.",
    user: "Jojo",
  },
  {
    rating: 5,
    title: "Penyewaan Motor Tanpa Hambatan",
    content:
      "Proses sewa motor di GoSewa benar-benar tanpa hambatan. Saya hanya perlu pesan dan langsung jalan.",
    user: "Nanang",
  },
];

const gap = 20;
const arrowSize = 40;

export default function Testimonials() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [visibleCount, setVisibleCount] = useState(1);
  const [itemWidth, setItemWidth] = useState(240);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  return (
    <section
      id="testimoni"
      className="bg-white py-16 px-4 text-center relative"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Apa Kata Pelanggan Kami
        </h2>
        <p className="text-sm text-gray-500 mb-10">
          Peringkat <strong>5 / 5</strong> berdasarkan{" "}
          <strong>10.370 ulasan</strong>, Menampilkan ulasan bintang 4 & 5 kami.
        </p>

        {/* Carousel Container */}
        <div className="flex items-center justify-center gap-4">
          {/* Panah Kiri (Desktop) */}
          <button
            onClick={handlePrev}
            className="hidden md:block p-2 bg-white border rounded-full shadow transition-colors duration-300 hover:bg-blue-900 hover:text-white"
            style={{ width: arrowSize, height: arrowSize }}
          >
            <ArrowLeft className="w-5 h-5 mx-auto" />
          </button>

          {/* Track */}
          <div ref={containerRef} className="overflow-hidden w-full max-w-full">
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className="flex"
              style={{
                gap: `${gap}px`,
                width: extendedData.length * (itemWidth + gap),
              }}
            >
              {extendedData.map((item, index) => (
                <div
                  key={index}
                  className="group flex-shrink-0 bg-white rounded-xl border border-gray-300 shadow p-4 text-left cursor-pointer transition-colors duration-300 hover:bg-blue-900"
                  style={{
                    width: itemWidth,
                    minHeight: 220,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div className="flex items-center gap-1 mb-2 text-yellow-500 group-hover:text-white">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 stroke-yellow-400 group-hover:fill-white group-hover:stroke-white transition-colors duration-300"
                        />
                      ))}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-4 group-hover:text-white transition-colors duration-300">
                      "{item.content}"
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 font-medium mt-2 group-hover:text-white transition-colors duration-300">
                    - {item.user}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Panah Kanan (Desktop) */}
          <button
            onClick={handleNext}
            className="hidden md:block p-2 bg-white border rounded-full shadow transition-colors duration-300 hover:bg-blue-900 hover:text-white"
            style={{ width: arrowSize, height: arrowSize }}
          >
            <ArrowRight className="w-5 h-5 mx-auto" />
          </button>
        </div>

        {/* Panah Mobile */}
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
