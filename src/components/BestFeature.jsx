import React from "react";
import { features } from "./FeaturesData.jsx";

export default function BestFeature() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10">
          Mengapa memilih kami?
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[240px] bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
