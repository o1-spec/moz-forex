import ContactBtn from "@/components/ContactBtn";
import SectionName from "@/components/SectionName";
import Link from "next/link";
import React from "react";

function OurStory() {
  return (
    <div className="max-w-[1200px] text-[#e0e0e0] mx-auto px-4 py-20">
      <div
        className="rounded-xl w-full shadow-lg bg-cover bg-center py-8 px-8"
        style={{ backgroundImage: "url('/hero-img2.jpg')" }}
      >
        <div className="bg-[#2F2F301A] backdrop-blur-sm rounded-lg flex items-center gap-20 py-14 px-8">
          <div className="basis-[75%]">
            <SectionName name="Our Story" />
            <h4 className="text-[40px] font-bold pb-3">
              Connecting traders
              <span className="text-[#F7E967]">worldwide</span>
            </h4>
            <h6 className="text-[16px] font-normal py-2">
              Our journey is driven by innovation, and a passion for empowering
              traders.
            </h6>
            <p className="text-[14px] py-3">
              MozForex - Sociedade Unipessoal, Limitada was officially
              registered on August 1, 2024, under NUEL 105031087, marking the
              beginning of our journey to revolutionize global financial
              services.
            </p>
            <div className="flex gap-8 pt-6 items-center">
              <ContactBtn isArrowRight={true} />
              <Link href="#" className="underline text-[14px]">
                EXPLORE OUR SERVICES
              </Link>
            </div>
          </div>
          <div className="basis-[25%] flex flex-col gap-6">
            <div className="bg-[#2F2F301A] backdrop-blur-sm rounded-xl max-w-[170px] py-3 px-4">
              <h6>Registration Date</h6>
              <p>August 1, 2024</p>
            </div>
            <div className="bg-[#2F2F301A] backdrop-blur-sm rounded-xl py-3 max-w-[170px] px-4">
              <h6>NUEL Number</h6>
              <p>105031087</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
