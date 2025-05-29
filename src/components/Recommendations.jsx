import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const motorData = [
  {
    name: "Scoopy - 2024",
    desc: "Kendala kilatmu.",
    img: "/assets/scoopy.jpg",
  },
  {
    name: "Vario160 - 2023",
    desc: "Cari motor nyamannya? Ini solusinya.",
    img: "/assets/vario.jpg",
  },
  {
    name: "PCX 160 - 2021",
    desc: "Rasa sewa seperti beli!",
    img: "/assets/pcx.jpg",
  },
  {
    name: "CBR150 - 2023",
    desc: "Motor kencang & eksklusif.",
    img: "/assets/cbr.jpg",
  },
  {
    name: "Nmax - 2022",
    desc: "Pilihan terbaik buat harian.",
    img: "/assets/nmax.jpg",
  },
];

export default function Recommendations() {
  const visibleCount = 4;
  const itemWidth = 256; // 240px + 16px gap
  const [currentIndex, setCurrentIndex] = useState(visibleCount); // mulai setelah clone awal
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef(null);

  // Clone untuk looping
  const extendedData = [
    ...motorData.slice(-visibleCount),
    ...motorData,
    ...motorData.slice(0, visibleCount),
  ];

  const scrollToIndex = (index, animated = true) => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = animated
      ? "transform 0.5s ease-in-out"
      : "none";
    trackRef.current.style.transform = `translateX(-${index * itemWidth}px)`;
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
      // Di ujung akhir, reset ke awal sebenarnya
      setCurrentIndex(visibleCount);
      scrollToIndex(visibleCount, false);
    } else if (currentIndex < visibleCount) {
      // Di ujung awal, reset ke akhir sebenarnya
      setCurrentIndex(motorData.length + visibleCount - 1);
      scrollToIndex(motorData.length + visibleCount - 1, false);
    }
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <section className="bg-black py-16 px-4 md:px-20 text-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Rekomendasi Sewa</h2>
        <a href="#" className="text-sm hover:underline flex items-center gap-1">
          Lihat Semua <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Carousel */}
      <div className="max-w-5xl mx-auto overflow-hidden">
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="flex gap-4"
          style={{
            width: `${extendedData.length * itemWidth}px`,
            transform: `translateX(-${currentIndex * itemWidth}px)`,
          }}
        >
          {extendedData.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="w-[240px] bg-[#1f1f1f] rounded-xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <div className="relative w-full h-40">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white text-black rounded-full p-1">
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

      {/* Navigation */}
      <div className="max-w-5xl mx-auto mt-4 flex gap-4">
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
