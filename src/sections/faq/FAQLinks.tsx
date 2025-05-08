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
    <div className="flex flex-wrap justify-center gap-2 mt-24 bg-[#2F2F30] py-[20px] px-[56px] rounded-2xl max-w-[1036px] mx-auto">
      {categories.map((category, index) => (
       <button
       key={index}
       className="px-[20px] py-[8px] rounded-full border border-[#5F5F61] text-gray-300 hover:bg-[rgba(255,255,255,0.2)] hover:border-white transition-colors duration-200 text-[16px] cursor-pointer"
     >
       {category}
     </button>
     
     
      ))}
    </div>
  );
}
