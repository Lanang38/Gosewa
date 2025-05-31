import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { FAQsData } from "./FAQsData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-6">
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-12">
        FAQ
      </h2>
      <div className="max-w-4xl mx-auto divide-y">
        {FAQsData.map((faq, index) => (
          <div key={index}>
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
          </div>
        ))}
      </div>
    </section>
  );
}
