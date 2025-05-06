"use client";

import React from "react";

const categories = [
  "Additional Information",
  "Security and trust",
  "Website and tools",
  "Account and support",
  "More details",
];

export default function FAQLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-16 bg-[#2F2F30] p-4 rounded-2xl max-w-[900px] mx-auto">
      {categories.map((category, index) => (
        <button
          key={index}
          className="px-4 py-2 rounded-full border border-gray-500 text-gray-300 hover:border-[#F7E967] transition-colors duration-200 text-sm"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
