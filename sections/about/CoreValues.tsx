import SectionName from "@/components/SectionName";
import Image from "next/image";
import React from "react";

const coreValues = [
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our dealings.",
  },
  {
    title: "Customer Focus",
    description: "Your satisfaction is our top priority.",
  },
  {
    title: "Transparency",
    description: "We believe in clear and honest communication.",
  },
  {
    title: "Innovation",
    description:
      "We continuously strive to improve our services and stay ahead of the curve.",
  },
  {
    title: "Security",
    description:
      "We are committed to protecting your financial information and assets.",
  },
  {
    title: "Excellence",
    description: "We pursue the highest standard of service.",
  },
];

function CoreValues() {
  return (
    <section className="text-[#e0e0e0] py-28 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <SectionName name={"Our Core Values"}/>
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          The principles that guide
          <span className="text-[#F7E967]"> Mozforex</span>
        </h2>

        <p className="text-gray-400 mb-12 text-[15px]">
          At Mozforex, we are guided by a strong set of core values that
          underpin everything we do.
        </p>
        <div>
          {coreValues.map((value, index) => (
            <div key={index} className="mb-4 flex gap-2.5 items-center bg-[#2F2F3080] py-3 px-3 rounded-lg border border-[#2F2F30]">
              <Image
                src="/check-icon.png"
                alt="Check Icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <div className="flex items-center gap-2.5">
                <h3 className="text-[16px]">{value.title}: </h3>
                <p className="text-[14px]">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
