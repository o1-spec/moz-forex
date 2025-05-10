import React from "react";

function SectionName({ name }: { name: string }) {
  return (
    <div className="relative inline-block mb-6">
      <div className="gradient-border border border-[#474748] rounded-xl">
        <div className="inner-bg p-4 text-white text-[16px]">
          {name}
        </div>
      </div>
    </div>
  );
}

export default SectionName;
