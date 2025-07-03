import { useState, useRef, useEffect } from "react";
import { Minus, Plus } from "lucide-react";
import { FAQsData } from "./FAQsData";
import { motion, useInView } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  // State untuk track arah keluar viewport:
  // 'in' = di viewport, 'top' = keluar atas, 'bottom' = keluar bawah
  const [exitDirection, setExitDirection] = useState("in");

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom < 0) {
        // Section sudah keluar atas viewport
        setExitDirection("top");
      } else if (rect.top > windowHeight) {
        // Section sudah keluar bawah viewport
        setExitDirection("bottom");
      } else {
        setExitDirection("in");
      }
    }

    onScroll(); // cek langsung saat mount
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section ref={sectionRef} id="faq" className="py-16 px-6 overflow-hidden">
      {/* Header Animasi */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView
            ? { opacity: 1, y: 0 }
            : exitDirection === "top"
            ? { opacity: 0, y: -20 }
            : exitDirection === "bottom"
            ? { opacity: 0, y: 20 }
            : {}
        }
        transition={{ duration: 0.6 }}
        className="text-center text-xl md:text-2xl font-semibold mb-12"
      >
        FAQ
      </motion.h2>

      <div className="max-w-4xl mx-auto divide-y">
        {FAQsData.map((faq, index) => {
          const isLeft = index % 2 === 0;

          // Variasi animasi masuk dan keluar (slide dari kiri/kanan)
          const initialX = isLeft ? -50 : 50;
          const exitX = isLeft ? -50 : 50;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: initialX }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : exitDirection === "top"
                  ? { opacity: 0, x: exitX, y: -20 }
                  : exitDirection === "bottom"
                  ? { opacity: 0, x: exitX, y: 20 }
                  : {}
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full py-5 text-left"
              >
                <span
                  className={`text-sm font-medium ${
                    openIndex === index ? "text-indigo-600" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-4 h-4 text-gray-600" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-600" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-500 pr-4 pb-4">{faq.answer}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
