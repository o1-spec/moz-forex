import React from "react";

function SectionName({ name }: { name?: string }) {
  return (
    <div className="mb-6">
      <span
        className="text-sm text-white px-4 py-3 rounded-lg"
        style={{
          background: "linear-gradient(90deg, #5F5F61, #BEB66580)",
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default SectionName;
