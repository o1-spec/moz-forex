import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

function ContactHero() {
  return (
    <div className="max-w-[931px] mx-auto px-4">
      <div className="flex text-[#E0E0E0] flex-col items-center gap-8">
        <div className="pb-6">
          <h4 className="text-[72px] font-bold text-center pb-3">
            Connect With&nbsp;
            <span className={`${playfair.className} text-[#F7E967]`}>
               MozForex
            </span>
          </h4>
          <p className="text-center text-[20px]">
            Our team is here to assist you. Reach out anytime and we’ll get back
            to you promptly.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-[#2F2F3080] p-[20px] py-[25px] rounded-xl border border-[#2F2F30] flex flex-col gap-2">
            <span className="text-[20px]">Avalability</span>
            <p className="font-semibold text-[24px]">
              Monday- Sunday 24/7 (round the clock)
            </p>
          </div>
          <div className="bg-[#2F2F3080] p-[20px] py-[25px] rounded-xl border border-[#2F2F30] flex flex-col gap-2">
            <span className="text-[20px]">Address</span>
            <p className="font-semibold text-[24px]">
              99-9 Mozalin estate, Mozambique
            </p>
          </div>
          <div className="bg-[#2F2F3080] p-[20px] py-[25px] rounded-xl border border-[#2F2F30] flex flex-col gap-2">
            <span className="text-[20px]">Call</span>
            <p className="font-semibold text-[24px]">
              +998-09865-443 +100-19865-443
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
