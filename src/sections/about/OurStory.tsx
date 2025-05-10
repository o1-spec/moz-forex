import ContactBtn from "@/src/components/ContactBtn";
import SectionName from "@/src/components/SectionName";
import Link from "next/link";
import React from "react";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'], 
});


function OurStory() {
  return (
    <div className="max-w-[1240px] text-[#e0e0e0] mx-auto py-20">
      <div
        className="rounded-xl w-full shadow-lg bg-cover bg-center py-8 px-8"
        style={{ backgroundImage: "url('/hero-img2.jpg')" }}
      >
        <div className="bg-[#2F2F301A] backdrop-blur-sm rounded-lg flex items-center gap-10 py-14 px-8">
          <div className="basis-[80%]">
            <SectionName name="Our Story" />
            <h4 className="text-[56px] font-bold pb-3">
              Connecting traders
              <span className={`${playfair.className} text-[#F7E967]`}> worldwide</span>
            </h4>
            <h6 className="text-[24px] font-normal py-2">
              Our journey is driven by innovation, and a passion for empowering
              traders.
            </h6>
            <p className="text-[18px] py-3">
              MozForex - Sociedade Unipessoal, Limitada was officially
              registered on August 1, 2024, under NUEL 105031087, marking the
              beginning of our journey to revolutionize global financial
              services.
            </p>
            <div className="flex gap-8 pt-6 items-center">
              <ContactBtn isArrowRight={true} />
              <Link href="#" className="underline text-[16px]">
                EXPLORE OUR SERVICES
              </Link>
            </div>
          </div>
          <div className="basis-[20%] flex flex-col gap-6">
            <div className="bg-[#2F2F301A] backdrop-blur-lg rounded-2xl max-w-[209px] p-[20px]">
              <h6 className="text-[20px]">Registration Date</h6>
              <p className="text-[24px]"> August 1, 2024</p>
            </div>
            <div className="bg-[#2F2F301A] backdrop-blur-lg rounded-2xl max-w-[209px] p-[20px]">
              <h6 className="text-[20px]">NUEL Number</h6>
              <p className="text-[24px]">105031087</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
