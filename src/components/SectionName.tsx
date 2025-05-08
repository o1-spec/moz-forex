import React from "react";

function SectionName({ name }: { name?: string }) {
  return (
    <div className="mb-6">
      <span className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[#2b2a28] via-[#4f4c33] to-[#2b2a28] shadow-inner border border-gray-600">
        {name}
      </span>
    </div>
  );
}

export default SectionName;
