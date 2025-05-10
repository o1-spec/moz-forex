import SectionName from "@/src/components/SectionName";
import Image from "next/image";
import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

function VisionAndMission() {
  return (
    <section className="text-[#e0e0e0] bg-[#2F2F304D] py-28">
      <div className="max-w-[1240px] mx-auto">
        <SectionName name={"Our vision and mission"} />
        <h2 className="text-3xl md:text-[56px] font-semibold mb-2">
          Our why and or{" "}
          <span className={`${playfair.className} text-[#F7E967]`}> way</span>
        </h2>

        <p className=" mb-12 text-[24px]">
          Every feature we build is rooted in the believe that confident traders
          shape the future of finance.
        </p>
        <div className="flex gap-20 items-center">
          <div className="flex flex-col gap-10 basis-1/2">
            <Image
              src="/vision.jpg"
              alt="Vision"
              width={300}
              height={300}
              className="object-cover w-[580px] h-[373px] mb-6 rounded-2xl"
            />

            <div>
              <h6 className="font-semibold text-[32px] pb-4">Our Vision</h6>
              <p className="text-[20px]">
                To empower individuals and businesses to achieve their financial
                goals through innovative and accessible global financial
                services.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 basis-1/2">
            <Image
              src="/mission.jpg"
              alt="Vision"
              width={300}
              height={300}
              className="object-cover w-[580px] h-[373px] mb-6 rounded-2xl"
            />
            <div>
              <h6 className="font-semibold text-[32px] pb-4">Our Mission</h6>
              <p className="text-[20px]">
                To deliver exceptional value by providing secure, efficient, and
                transparent money exchange, brokerage, and trading services,
                supported by cutting-edge technology and expert guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionAndMission;
